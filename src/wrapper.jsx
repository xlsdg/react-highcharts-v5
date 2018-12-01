import _throttle from 'lodash-es/throttle';
import _isString from 'lodash-es/isString';
import _isPlainObject from 'lodash-es/isPlainObject';
import _isFunction from 'lodash-es/isFunction';
import _get from 'lodash-es/get';

import React from 'react';
import ElementResizeDetector from 'element-resize-detector';

const INIT_METHOD = {
  charts: 'chart',
  maps: 'mapChart',
  stock: 'stockChart',
};

function wrapHighCharts(name, HighCharts) {
  class IHighCharts extends React.Component {
    // static propTypes = {
    //   className: PropTypes.string,
    //   style: PropTypes.object,
    //   loading: PropTypes.oneOfType([
    //     PropTypes.string,
    //     PropTypes.bool
    //   ]),
    //   theme: PropTypes.object,
    //   resizable: PropTypes.bool,
    //   options: PropTypes.object.isRequired,
    //   onLoad: PropTypes.func,
    //   onResize: PropTypes.func
    // };

    static defaultProps = {
      className: 'react-highcharts',
      style: {
        width: '100%',
        height: '100%',
      },
      loading: false,
      theme: null,
      resizable: false,
      onLoad: () => {},
      onResize: (w, h) => {},
    };

    constructor(props) {
      // console.log('constructor', props);
      super(props);

      const fnResize = _throttle(this.resize, 250, {
        leading: true,
        trailing: true,
      });

      this.dom = null;
      this.state = {
        chart: null,
        fnResize,
        resize: null,
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
      const { loading } = that.props;
      const { chart } = that.state;

      if (!chart || loading === nextProps.loading) {
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
      } else if (_isString(ing)) {
        chart.showLoading(ing);
      } else {
        chart.hideLoading();
      }
    };

    init = () => {
      const that = this;
      const { loading, resizable, theme, options, onLoad } = that.props;
      const { chart, resize, fnResize } = that.state;

      if (chart) {
        return;
      }

      if (!that.dom) {
        return;
      }

      if (_isPlainObject(theme)) {
        HighCharts.setOptions(theme);
      }

      const method = INIT_METHOD[name];
      const _chart = HighCharts[method](that.dom, options, () => {
        if (_isFunction(onLoad)) {
          setTimeout(() => onLoad(_chart, HighCharts));
        }
      });

      that.setLoading(_chart, loading);

      if (resize && _isFunction(resize.uninstall)) {
        resize.uninstall(that.dom);
      }

      let _resize = null;
      if (resizable === true) {
        _resize = ElementResizeDetector({
          strategy: 'scroll', // <- For ultra performance.
        });
        _resize.listenTo(that.dom, element => {
          const width = element.offsetWidth;
          const height = element.offsetHeight;

          if (_isFunction(fnResize)) {
            fnResize({
              width,
              height,
            });
          }
        });
      }

      that.setState({
        chart: _chart,
        resize: _resize,
      });
    };

    uninit = () => {
      const that = this;
      const { chart, fnResize, resize } = that.state;

      if (resize && _isFunction(resize.uninstall)) {
        resize.uninstall(that.dom);
      }

      if (fnResize && _isFunction(fnResize.cancel)) {
        fnResize.cancel();
      }

      if (chart && _isFunction(chart.destroy)) {
        chart.destroy();
      }
    };

    resize = opts => {
      const that = this;
      const { onResize } = that.props;
      const { chart } = that.state;

      if (!chart) {
        return;
      }

      const width = _get(opts, 'width');
      const height = _get(opts, 'height');

      chart.setSize(width, height);

      if (_isFunction(onResize)) {
        onResize(width, height);
      }
    };

    update = () => {
      const that = this;
      const { options } = that.props;
      const { chart } = that.state;

      if (!chart) {
        return;
      }

      if (options) {
        chart.update(options);
      }
    };

    render() {
      const that = this;
      // console.log('render');
      const { className, style } = that.props;

      return (
        <div
          className={className}
          style={style}
          ref={e => {
            that.dom = e;
          }}
        />
      );
    }
  }

  return IHighCharts;
}

export default wrapHighCharts;
