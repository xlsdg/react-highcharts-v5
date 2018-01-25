import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ElementResizeDetector from 'element-resize-detector';

const INIT_METHOD = {
  charts: 'chart',
  maps: 'mapChart',
  stock: 'stockChart'
};

function wrapHighCharts(name, HighCharts) {
  class IHighCharts extends React.Component {
    constructor(props) {
      // console.log('constructor', props);
      super(props);

      const fnResize = _.throttle(this.resize, 250, {
        leading: true,
        trailing: true
      });

      this.state = {
        chart: null,
        fnResize,
        resize: null
      };
    }
    // componentWillMount() {
    //   const that = this;
    //   console.log('componentWillMount', that.props, that.state);
    // }
    componentDidMount() {
      const that = this;
      // console.log('componentDidMount', that.props, that.state);
      that.init();
    }
    componentWillReceiveProps(nextProps) {
      const that = this;
      // console.log('componentWillReceiveProps', that.props, nextProps);
      const {
        loading
      } = that.props;
      const {
        chart
      } = that.state;

      if (!chart || (loading === nextProps.loading)) {
        return;
      }

      that.setLoading(chart, nextProps.loading);
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //   const that = this;
    //   console.log('shouldComponentUpdate', that.props, nextProps, that.state, nextState);
    //   return true;
    // }
    // componentWillUpdate(nextProps, nextState) {
    //   const that = this;
    //   console.log('componentWillUpdate', that.props, nextProps, that.state, nextState);
    // }
    componentDidUpdate(prevProps, prevState) {
      const that = this;
      // console.log('componentDidUpdate', prevProps, that.props, prevState, that.state);
      that.update();
    }
    componentWillUnmount() {
      const that = this;
      // console.log('componentWillUnmount', that.props, that.state);
      that.uninit();
    }

    setLoading = (chart, ing) => {
      if (ing === true) {
        chart.showLoading();
      } else if (_.isString(ing)) {
        chart.showLoading(ing);
      } else {
        chart.hideLoading();
      }
    }

    init = () => {
      const that = this;
      const {
        loading,
        resizable,
        theme,
        options,
        onLoad
      } = that.props;
      const {
        chart,
        resize,
        fnResize
      } = that.state;

      if (chart) {
        return;
      }

      const dom = ReactDOM.findDOMNode(that);

      if (_.isPlainObject(theme)) {
        HighCharts.setOptions(theme);
      }

      const method = INIT_METHOD[name];
      const _chart = HighCharts[method](dom, options, (...args) => {
        if (_.isFunction(onLoad)) {
          onLoad(_chart, HighCharts, ...args);
        }
      });

      that.setLoading(_chart, loading);

      if (resize && _.isFunction(resize.uninstall)) {
        resize.uninstall(dom);
      }

      let _resize = null;
      if (resizable === true) {
        _resize = ElementResizeDetector({
          strategy: 'scroll' // <- For ultra performance.
        });
        _resize.listenTo(dom, (element) => {
          const width = element.offsetWidth;
          const height = element.offsetHeight;

          if (_.isFunction(fnResize)) {
            fnResize({
              width,
              height
            });
          }
        });
      }

      that.setState({
        chart: _chart,
        resize: _resize
      });
    }

    uninit = () => {
      const that = this;
      const {
        chart,
        fnResize,
        resize
      } = that.state;

      if (resize && _.isFunction(resize.uninstall)) {
        const dom = ReactDOM.findDOMNode(that);
        resize.uninstall(dom);
      }

      if (fnResize && _.isFunction(fnResize.cancel)) {
        fnResize.cancel();
      }

      if (chart && _.isFunction(chart.destroy)) {
        chart.destroy();
      }
    }

    resize = (opts) => {
      const that = this;
      const {
        onResize
      } = that.props;
      const {
        chart
      } = that.state;

      if (!chart) {
        return;
      }

      const width = _.get(opts, 'width');
      const height = _.get(opts, 'height');

      chart.setSize(width, height);

      if (_.isFunction(onResize)) {
        onResize(width, height);
      }
    }

    update = () => {
      const that = this;
      const {
        options
      } = that.props;
      const {
        chart
      } = that.state;

      if (!chart) {
        return;
      }

      if (options) {
        chart.update(options);
      }
    }

    render() {
      const that = this;
      // console.log('render');
      const {
        className,
        style
      } = that.props;

      return (
        <div
          className={className}
          style={style}
        />
      );
    }
  }

  IHighCharts.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    loading: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ]),
    theme: PropTypes.object,
    resizable: PropTypes.bool,
    options: PropTypes.object.isRequired,
    onLoad: PropTypes.func,
    onResize: PropTypes.func
  };

  IHighCharts.defaultProps = {
    className: 'react-highcharts',
    style: {
      width: '100%',
      height: '100%'
    },
    loading: false,
    theme: null,
    resizable: false,
    onLoad: () => {},
    onResize: (w, h) => {}
  };

  return IHighCharts;
}

export default wrapHighCharts;
