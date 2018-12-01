import _throttle from 'lodash-es/throttle';
import _isString from 'lodash-es/isString';
import _isPlainObject from 'lodash-es/isPlainObject';
import _isFunction from 'lodash-es/isFunction';
import _get from 'lodash-es/get';
import React from 'react';
import ElementResizeDetector from 'element-resize-detector';
import HighCharts from 'highcharts';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }

  return _assertThisInitialized(self);
}

var INIT_METHOD = {
  charts: 'chart',
  maps: 'mapChart',
  stock: 'stockChart',
};

function wrapHighCharts(name, HighCharts$$1) {
  var IHighCharts =
    /*#__PURE__*/
    (function(_React$Component) {
      _inherits(IHighCharts, _React$Component);

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
      function IHighCharts(props) {
        var _this;

        _classCallCheck(this, IHighCharts);

        // console.log('constructor', props);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(IHighCharts).call(this, props));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'setLoading', function(chart, ing) {
          if (ing === true) {
            chart.showLoading();
          } else if (_isString(ing)) {
            chart.showLoading(ing);
          } else {
            chart.hideLoading();
          }
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'init', function() {
          var that = _assertThisInitialized(_assertThisInitialized(_this));

          var _that$props = that.props,
            loading = _that$props.loading,
            resizable = _that$props.resizable,
            theme = _that$props.theme,
            options = _that$props.options,
            onLoad = _that$props.onLoad;
          var _that$state = that.state,
            chart = _that$state.chart,
            resize = _that$state.resize,
            fnResize = _that$state.fnResize;

          if (chart) {
            return;
          }

          if (!that.dom) {
            return;
          }

          if (_isPlainObject(theme)) {
            HighCharts$$1.setOptions(theme);
          }

          var method = INIT_METHOD[name];

          var _chart = HighCharts$$1[method](that.dom, options, function() {
            if (_isFunction(onLoad)) {
              setTimeout(function() {
                return onLoad(_chart, HighCharts$$1);
              });
            }
          });

          that.setLoading(_chart, loading);

          if (resize && _isFunction(resize.uninstall)) {
            resize.uninstall(that.dom);
          }

          var _resize = null;

          if (resizable === true) {
            _resize = ElementResizeDetector({
              strategy: 'scroll', // <- For ultra performance.
            });

            _resize.listenTo(that.dom, function(element) {
              var width = element.offsetWidth;
              var height = element.offsetHeight;

              if (_isFunction(fnResize)) {
                fnResize({
                  width: width,
                  height: height,
                });
              }
            });
          }

          that.setState({
            chart: _chart,
            resize: _resize,
          });
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'uninit', function() {
          var that = _assertThisInitialized(_assertThisInitialized(_this));

          var _that$state2 = that.state,
            chart = _that$state2.chart,
            fnResize = _that$state2.fnResize,
            resize = _that$state2.resize;

          if (resize && _isFunction(resize.uninstall)) {
            resize.uninstall(that.dom);
          }

          if (fnResize && _isFunction(fnResize.cancel)) {
            fnResize.cancel();
          }

          if (chart && _isFunction(chart.destroy)) {
            chart.destroy();
          }
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'resize', function(opts) {
          var that = _assertThisInitialized(_assertThisInitialized(_this));

          var onResize = that.props.onResize;
          var chart = that.state.chart;

          if (!chart) {
            return;
          }

          var width = _get(opts, 'width');

          var height = _get(opts, 'height');

          chart.setSize(width, height);

          if (_isFunction(onResize)) {
            onResize(width, height);
          }
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'update', function() {
          var that = _assertThisInitialized(_assertThisInitialized(_this));

          var options = that.props.options;
          var chart = that.state.chart;

          if (!chart) {
            return;
          }

          if (options) {
            chart.update(options);
          }
        });

        var _fnResize = _throttle(_this.resize, 250, {
          leading: true,
          trailing: true,
        });

        _this.dom = null;
        _this.state = {
          chart: null,
          fnResize: _fnResize,
          resize: null,
        };
        return _this;
      } // componentWillMount() {
      //   const that = this;
      //   console.log('componentWillMount', that.props, that.state);
      // }

      _createClass(IHighCharts, [
        {
          key: 'componentDidMount',
          value: function componentDidMount() {
            var that = this; // console.log('componentDidMount', that.props, that.state);

            that.init();
          },
        },
        {
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(nextProps) {
            var that = this; // console.log('componentWillReceiveProps', that.props, nextProps);

            var loading = that.props.loading;
            var chart = that.state.chart;

            if (!chart || loading === nextProps.loading) {
              return;
            }

            that.setLoading(chart, nextProps.loading);
          }, // shouldComponentUpdate(nextProps, nextState) {
          //   const that = this;
          //   console.log('shouldComponentUpdate', that.props, nextProps, that.state, nextState);
          //   return true;
          // }
          // componentWillUpdate(nextProps, nextState) {
          //   const that = this;
          //   console.log('componentWillUpdate', that.props, nextProps, that.state, nextState);
          // }
        },
        {
          key: 'componentDidUpdate',
          value: function componentDidUpdate(prevProps, prevState) {
            var that = this; // console.log('componentDidUpdate', prevProps, that.props, prevState, that.state);

            that.update();
          },
        },
        {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            var that = this; // console.log('componentWillUnmount', that.props, that.state);

            that.uninit();
          },
        },
        {
          key: 'render',
          value: function render() {
            var that = this; // console.log('render');

            var _that$props2 = that.props,
              className = _that$props2.className,
              style = _that$props2.style;
            return React.createElement('div', {
              className: className,
              style: style,
              ref: function ref(e) {
                that.dom = e;
              },
            });
          },
        },
      ]);

      return IHighCharts;
    })(React.Component);

  _defineProperty(IHighCharts, 'defaultProps', {
    className: 'react-highcharts',
    style: {
      width: '100%',
      height: '100%',
    },
    loading: false,
    theme: null,
    resizable: false,
    onLoad: function onLoad() {},
    onResize: function onResize(w, h) {},
  });

  return IHighCharts;
}

var IHighCharts = wrapHighCharts('charts', HighCharts);
IHighCharts.__highcharts__ = HighCharts;

export default IHighCharts;
