(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory(require('react'), require('highcharts/highmaps')))
    : typeof define === 'function' && define.amd
    ? define(['react', 'highcharts/highmaps'], factory)
    : (global.reactHighchartsV5 = factory(global.React, global.HighCharts));
})(this, function(React, HighCharts) {
  'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  HighCharts = HighCharts && HighCharts.hasOwnProperty('default') ? HighCharts['default'] : HighCharts;

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

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function() {
    return root.Date.now();
  };

  /** Built-in value references. */
  var Symbol$1 = root.Symbol;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag$1 && symToStringTag$1 in Object(value) ? getRawTag(value) : objectToString(value);
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' || (isObjectLike(value) && baseGetTag(value) == symbolTag);
  }

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value)
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : reIsBadHex.test(value)
      ? NAN
      : +value;
  }

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
    nativeMin = Math.min;

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
        thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (
        lastCallTime === undefined ||
        timeSinceLastCall >= wait ||
        timeSinceLastCall < 0 ||
        (maxing && timeSinceLastInvoke >= maxWait)
      );
    }

    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }

    function debounced() {
      var time = now(),
        isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  /** Error message constants. */
  var FUNC_ERROR_TEXT$1 = 'Expected a function';

  /**
   * Creates a throttled function that only invokes `func` at most once per
   * every `wait` milliseconds. The throttled function comes with a `cancel`
   * method to cancel delayed `func` invocations and a `flush` method to
   * immediately invoke them. Provide `options` to indicate whether `func`
   * should be invoked on the leading and/or trailing edge of the `wait`
   * timeout. The `func` is invoked with the last arguments provided to the
   * throttled function. Subsequent calls to the throttled function return the
   * result of the last `func` invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the throttled function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.throttle` and `_.debounce`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to throttle.
   * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=true]
   *  Specify invoking on the leading edge of the timeout.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new throttled function.
   * @example
   *
   * // Avoid excessively updating the position while scrolling.
   * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
   *
   * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
   * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
   * jQuery(element).on('click', throttled);
   *
   * // Cancel the trailing throttled invocation.
   * jQuery(window).on('popstate', throttled.cancel);
   */
  function throttle(func, wait, options) {
    var leading = true,
      trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    if (isObject(options)) {
      leading = 'leading' in options ? !!options.leading : leading;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
      leading: leading,
      maxWait: wait,
      trailing: trailing,
    });
  }

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /** `Object#toString` result references. */
  var stringTag = '[object String]';

  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString(value) {
    return typeof value == 'string' || (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /** Built-in value references. */
  var getPrototype = overArg(Object.getPrototypeOf, Object);

  /** `Object#toString` result references. */
  var objectTag = '[object Object]';

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString.call(Object);

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey(value, object) {
    if (isArray(value)) {
      return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || (object != null && value in Object(object));
  }

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec((coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  })();

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}
      try {
        return func + '';
      } catch (e) {}
    }
    return '';
  }

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto$2 = Function.prototype,
    objectProto$3 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$2 = funcProto$2.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp(
    '^' +
      funcToString$2
        .call(hasOwnProperty$2)
        .replace(reRegExpChar, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /* Built-in method references that are verified to be native. */
  var nativeCreate = getNative(Object, 'create');

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
  }

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty$4.call(data, key);
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
    return this;
  }

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
      index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
      index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
      index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /* Built-in method references that are verified to be native. */
  var Map$1 = getNative(root, 'Map');

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash(),
      map: new (Map$1 || ListCache)(),
      string: new Hash(),
    };
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean'
      ? value !== '__proto__'
      : value === null;
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
      size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /** Error message constants. */
  var FUNC_ERROR_TEXT$2 = 'Expected a function';

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT$2);
    }
    var memoized = function() {
      var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache)();
    return memoized;
  }

  // Expose `MapCache`.
  memoize.Cache = MapCache;

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped(func) {
    var result = memoize(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });

    var cache = result.cache;
    return result;
  }

  /** Used to match property names within property paths. */
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
  });

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString) + '';
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : baseToString(value);
  }

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value, object) {
    if (isArray(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString(value));
  }

  /** Used as references for various `Number` constants. */
  var INFINITY$1 = 1 / 0;

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
  }

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = castPath(path, object);

    var index = 0,
      length = path.length;

    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }
    return index && index == length ? object : undefined;
  }

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  function createCommonjsModule(fn, module) {
    return (module = { exports: {} }), fn(module, module.exports), module.exports;
  }

  var collectionUtils = createCommonjsModule(function(module) {
    var utils = (module.exports = {});

    /**
     * Loops through the collection and calls the callback for each element. if the callback returns truthy, the loop is broken and returns the same value.
     * @public
     * @param {*} collection The collection to loop through. Needs to have a length property set and have indices set from 0 to length - 1.
     * @param {function} callback The callback to be called for each element. The element will be given as a parameter to the callback. If this callback returns truthy, the loop is broken and the same value is returned.
     * @returns {*} The value that a callback has returned (if truthy). Otherwise nothing.
     */
    utils.forEach = function(collection, callback) {
      for (var i = 0; i < collection.length; i++) {
        var result = callback(collection[i]);
        if (result) {
          return result;
        }
      }
    };
  });

  var elementUtils = function(options) {
    var getState = options.stateHandler.getState;

    /**
     * Tells if the element has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is detectable or not.
     */
    function isDetectable(element) {
      var state = getState(element);
      return state && !!state.isDetectable;
    }

    /**
     * Marks the element that it has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to mark.
     */
    function markAsDetectable(element) {
      getState(element).isDetectable = true;
    }

    /**
     * Tells if the element is busy or not.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is busy or not.
     */
    function isBusy(element) {
      return !!getState(element).busy;
    }

    /**
     * Marks the object is busy and should not be made detectable.
     * @public
     * @param {element} element The element to mark.
     * @param {boolean} busy If the element is busy or not.
     */
    function markBusy(element, busy) {
      getState(element).busy = !!busy;
    }

    return {
      isDetectable: isDetectable,
      markAsDetectable: markAsDetectable,
      isBusy: isBusy,
      markBusy: markBusy,
    };
  };

  var listenerHandler = function(idHandler) {
    var eventListeners = {};

    /**
     * Gets all listeners for the given element.
     * @public
     * @param {element} element The element to get all listeners for.
     * @returns All listeners for the given element.
     */
    function getListeners(element) {
      var id = idHandler.get(element);

      if (id === undefined) {
        return [];
      }

      return eventListeners[id] || [];
    }

    /**
     * Stores the given listener for the given element. Will not actually add the listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The callback that the element has added.
     */
    function addListener(element, listener) {
      var id = idHandler.get(element);

      if (!eventListeners[id]) {
        eventListeners[id] = [];
      }

      eventListeners[id].push(listener);
    }

    function removeListener(element, listener) {
      var listeners = getListeners(element);
      for (var i = 0, len = listeners.length; i < len; ++i) {
        if (listeners[i] === listener) {
          listeners.splice(i, 1);
          break;
        }
      }
    }

    function removeAllListeners(element) {
      var listeners = getListeners(element);
      if (!listeners) {
        return;
      }
      listeners.length = 0;
    }

    return {
      get: getListeners,
      add: addListener,
      removeListener: removeListener,
      removeAllListeners: removeAllListeners,
    };
  };

  var idGenerator = function() {
    var idCount = 1;

    /**
     * Generates a new unique id in the context.
     * @public
     * @returns {number} A unique id in the context.
     */
    function generate() {
      return idCount++;
    }

    return {
      generate: generate,
    };
  };

  var idHandler = function(options) {
    var idGenerator = options.idGenerator;
    var getState = options.stateHandler.getState;

    /**
     * Gets the resize detector id of the element.
     * @public
     * @param {element} element The target element to get the id of.
     * @returns {string|number|null} The id of the element. Null if it has no id.
     */
    function getId(element) {
      var state = getState(element);

      if (state && state.id !== undefined) {
        return state.id;
      }

      return null;
    }

    /**
     * Sets the resize detector id of the element. Requires the element to have a resize detector state initialized.
     * @public
     * @param {element} element The target element to set the id of.
     * @returns {string|number|null} The id of the element.
     */
    function setId(element) {
      var state = getState(element);

      if (!state) {
        throw new Error('setId required the element to have a resize detection state.');
      }

      var id = idGenerator.generate();

      state.id = id;

      return id;
    }

    return {
      get: getId,
      set: setId,
    };
  };

  /* global console: false */

  /**
   * Reporter that handles the reporting of logs, warnings and errors.
   * @public
   * @param {boolean} quiet Tells if the reporter should be quiet or not.
   */
  var reporter = function(quiet) {
    function noop() {
      //Does nothing.
    }

    var reporter = {
      log: noop,
      warn: noop,
      error: noop,
    };

    if (!quiet && window.console) {
      var attachFunction = function(reporter, name) {
        //The proxy is needed to be able to call the method with the console context,
        //since we cannot use bind.
        reporter[name] = function reporterProxy() {
          var f = console[name];
          if (f.apply) {
            //IE9 does not support console.log.apply :)
            f.apply(console, arguments);
          } else {
            for (var i = 0; i < arguments.length; i++) {
              f(arguments[i]);
            }
          }
        };
      };

      attachFunction(reporter, 'log');
      attachFunction(reporter, 'warn');
      attachFunction(reporter, 'error');
    }

    return reporter;
  };

  var browserDetector = createCommonjsModule(function(module) {
    var detector = (module.exports = {});

    detector.isIE = function(version) {
      function isAnyIeVersion() {
        var agent = navigator.userAgent.toLowerCase();
        return agent.indexOf('msie') !== -1 || agent.indexOf('trident') !== -1 || agent.indexOf(' edge/') !== -1;
      }

      if (!isAnyIeVersion()) {
        return false;
      }

      if (!version) {
        return true;
      }

      //Shamelessly stolen from https://gist.github.com/padolsey/527683
      var ieVersion = (function() {
        var undef,
          v = 3,
          div = document.createElement('div'),
          all = div.getElementsByTagName('i');

        do {
          div.innerHTML = '<!--[if gt IE ' + ++v + ']><i></i><![endif]-->';
        } while (all[0]);

        return v > 4 ? v : undef;
      })();

      return version === ieVersion;
    };

    detector.isLegacyOpera = function() {
      return !!window.opera;
    };
  });

  var utils_1 = createCommonjsModule(function(module) {
    var utils = (module.exports = {});

    utils.getOption = getOption;

    function getOption(options, name, defaultValue) {
      var value = options[name];

      if ((value === undefined || value === null) && defaultValue !== undefined) {
        return defaultValue;
      }

      return value;
    }
  });

  var batchProcessor = function batchProcessorMaker(options) {
    options = options || {};
    var reporter = options.reporter;
    var asyncProcess = utils_1.getOption(options, 'async', true);
    var autoProcess = utils_1.getOption(options, 'auto', true);

    if (autoProcess && !asyncProcess) {
      reporter &&
        reporter.warn('Invalid options combination. auto=true and async=false is invalid. Setting async=true.');
      asyncProcess = true;
    }

    var batch = Batch();
    var asyncFrameHandler;
    var isProcessing = false;

    function addFunction(level, fn) {
      if (!isProcessing && autoProcess && asyncProcess && batch.size() === 0) {
        // Since this is async, it is guaranteed to be executed after that the fn is added to the batch.
        // This needs to be done before, since we're checking the size of the batch to be 0.
        processBatchAsync();
      }

      batch.add(level, fn);
    }

    function processBatch() {
      // Save the current batch, and create a new batch so that incoming functions are not added into the currently processing batch.
      // Continue processing until the top-level batch is empty (functions may be added to the new batch while processing, and so on).
      isProcessing = true;
      while (batch.size()) {
        var processingBatch = batch;
        batch = Batch();
        processingBatch.process();
      }
      isProcessing = false;
    }

    function forceProcessBatch(localAsyncProcess) {
      if (isProcessing) {
        return;
      }

      if (localAsyncProcess === undefined) {
        localAsyncProcess = asyncProcess;
      }

      if (asyncFrameHandler) {
        cancelFrame(asyncFrameHandler);
        asyncFrameHandler = null;
      }

      if (localAsyncProcess) {
        processBatchAsync();
      } else {
        processBatch();
      }
    }

    function processBatchAsync() {
      asyncFrameHandler = requestFrame(processBatch);
    }

    function cancelFrame(listener) {
      // var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
      var cancel = clearTimeout;
      return cancel(listener);
    }

    function requestFrame(callback) {
      // var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) { return window.setTimeout(fn, 20); };
      var raf = function(fn) {
        return setTimeout(fn, 0);
      };
      return raf(callback);
    }

    return {
      add: addFunction,
      force: forceProcessBatch,
    };
  };

  function Batch() {
    var batch = {};
    var size = 0;
    var topLevel = 0;
    var bottomLevel = 0;

    function add(level, fn) {
      if (!fn) {
        fn = level;
        level = 0;
      }

      if (level > topLevel) {
        topLevel = level;
      } else if (level < bottomLevel) {
        bottomLevel = level;
      }

      if (!batch[level]) {
        batch[level] = [];
      }

      batch[level].push(fn);
      size++;
    }

    function process() {
      for (var level = bottomLevel; level <= topLevel; level++) {
        var fns = batch[level];

        for (var i = 0; i < fns.length; i++) {
          var fn = fns[i];
          fn();
        }
      }
    }

    function getSize() {
      return size;
    }

    return {
      add: add,
      process: process,
      size: getSize,
    };
  }

  var prop = '_erd';

  function initState(element) {
    element[prop] = {};
    return getState(element);
  }

  function getState(element) {
    return element[prop];
  }

  function cleanState(element) {
    delete element[prop];
  }

  var stateHandler = {
    initState: initState,
    getState: getState,
    cleanState: cleanState,
  };

  var object = function(options) {
    options = options || {};
    var reporter = options.reporter;
    var batchProcessor = options.batchProcessor;
    var getState = options.stateHandler.getState;

    if (!reporter) {
      throw new Error('Missing required dependency: reporter.');
    }

    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
    function addListener(element, listener) {
      if (!getObject(element)) {
        throw new Error('Element is not detectable by this strategy.');
      }

      function listenerProxy() {
        listener(element);
      }

      if (browserDetector.isIE(8)) {
        //IE 8 does not support object, but supports the resize event directly on elements.
        getState(element).object = {
          proxy: listenerProxy,
        };
        element.attachEvent('onresize', listenerProxy);
      } else {
        var object = getObject(element);
        object.contentDocument.defaultView.addEventListener('resize', listenerProxy);
      }
    }

    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
    function makeDetectable(options, element, callback) {
      if (!callback) {
        callback = element;
        element = options;
        options = null;
      }

      options = options || {};
      var debug = options.debug;

      function injectObject(element, callback) {
        var OBJECT_STYLE =
          'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;';

        //The target element needs to be positioned (everything except static) so the absolute positioned object will be positioned relative to the target element.

        // Position altering may be performed directly or on object load, depending on if style resolution is possible directly or not.
        var positionCheckPerformed = false;

        // The element may not yet be attached to the DOM, and therefore the style object may be empty in some browsers.
        // Since the style object is a reference, it will be updated as soon as the element is attached to the DOM.
        var style = window.getComputedStyle(element);
        var width = element.offsetWidth;
        var height = element.offsetHeight;

        getState(element).startSize = {
          width: width,
          height: height,
        };

        function mutateDom() {
          function alterPositionStyles() {
            if (style.position === 'static') {
              element.style.position = 'relative';

              var removeRelativeStyles = function(reporter, element, style, property) {
                function getNumericalValue(value) {
                  return value.replace(/[^-\d\.]/g, '');
                }

                var value = style[property];

                if (value !== 'auto' && getNumericalValue(value) !== '0') {
                  reporter.warn(
                    'An element that is positioned static has style.' +
                      property +
                      '=' +
                      value +
                      ' which is ignored due to the static positioning. The element will need to be positioned relative, so the style.' +
                      property +
                      ' will be set to 0. Element: ',
                    element
                  );
                  element.style[property] = 0;
                }
              };

              //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
              //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
              removeRelativeStyles(reporter, element, style, 'top');
              removeRelativeStyles(reporter, element, style, 'right');
              removeRelativeStyles(reporter, element, style, 'bottom');
              removeRelativeStyles(reporter, element, style, 'left');
            }
          }

          function onObjectLoad() {
            // The object has been loaded, which means that the element now is guaranteed to be attached to the DOM.
            if (!positionCheckPerformed) {
              alterPositionStyles();
            }

            /*jshint validthis: true */

            function getDocument(element, callback) {
              //Opera 12 seem to call the object.onload before the actual document has been created.
              //So if it is not present, poll it with an timeout until it is present.
              //TODO: Could maybe be handled better with object.onreadystatechange or similar.
              if (!element.contentDocument) {
                setTimeout(function checkForObjectDocument() {
                  getDocument(element, callback);
                }, 100);

                return;
              }

              callback(element.contentDocument);
            }

            //Mutating the object element here seems to fire another load event.
            //Mutating the inner document of the object element is fine though.
            var objectElement = this;

            //Create the style element to be added to the object.
            getDocument(objectElement, function onObjectDocumentReady(objectDocument) {
              //Notify that the element is ready to be listened to.
              callback(element);
            });
          }

          // The element may be detached from the DOM, and some browsers does not support style resolving of detached elements.
          // The alterPositionStyles needs to be delayed until we know the element has been attached to the DOM (which we are sure of when the onObjectLoad has been fired), if style resolution is not possible.
          if (style.position !== '') {
            alterPositionStyles(style);
            positionCheckPerformed = true;
          }

          //Add an object element as a child to the target element that will be listened to for resize events.
          var object = document.createElement('object');
          object.style.cssText = OBJECT_STYLE;
          object.tabIndex = -1;
          object.type = 'text/html';
          object.onload = onObjectLoad;

          //Safari: This must occur before adding the object to the DOM.
          //IE: Does not like that this happens before, even if it is also added after.
          if (!browserDetector.isIE()) {
            object.data = 'about:blank';
          }

          element.appendChild(object);
          getState(element).object = object;

          //IE: This must occur after adding the object to the DOM.
          if (browserDetector.isIE()) {
            object.data = 'about:blank';
          }
        }

        if (batchProcessor) {
          batchProcessor.add(mutateDom);
        } else {
          mutateDom();
        }
      }

      if (browserDetector.isIE(8)) {
        //IE 8 does not support objects properly. Luckily they do support the resize event.
        //So do not inject the object and notify that the element is already ready to be listened to.
        //The event handler for the resize event is attached in the utils.addListener instead.
        callback(element);
      } else {
        injectObject(element, callback);
      }
    }

    /**
     * Returns the child object of the target element.
     * @private
     * @param {element} element The target element.
     * @returns The object element of the target.
     */
    function getObject(element) {
      return getState(element).object;
    }

    function uninstall(element) {
      if (browserDetector.isIE(8)) {
        element.detachEvent('onresize', getState(element).object.proxy);
      } else {
        element.removeChild(getObject(element));
      }
      delete getState(element).object;
    }

    return {
      makeDetectable: makeDetectable,
      addListener: addListener,
      uninstall: uninstall,
    };
  };

  var forEach = collectionUtils.forEach;

  var scroll = function(options) {
    options = options || {};
    var reporter = options.reporter;
    var batchProcessor = options.batchProcessor;
    var getState = options.stateHandler.getState;
    var hasState = options.stateHandler.hasState;
    var idHandler = options.idHandler;

    if (!batchProcessor) {
      throw new Error('Missing required dependency: batchProcessor');
    }

    if (!reporter) {
      throw new Error('Missing required dependency: reporter.');
    }

    //TODO: Could this perhaps be done at installation time?
    var scrollbarSizes = getScrollbarSizes();

    // Inject the scrollbar styling that prevents them from appearing sometimes in Chrome.
    // The injected container needs to have a class, so that it may be styled with CSS (pseudo elements).
    var styleId = 'erd_scroll_detection_scrollbar_style';
    var detectionContainerClass = 'erd_scroll_detection_container';
    injectScrollStyle(styleId, detectionContainerClass);

    function getScrollbarSizes() {
      var width = 500;
      var height = 500;

      var child = document.createElement('div');
      child.style.cssText =
        'position: absolute; width: ' +
        width * 2 +
        'px; height: ' +
        height * 2 +
        'px; visibility: hidden; margin: 0; padding: 0;';

      var container = document.createElement('div');
      container.style.cssText =
        'position: absolute; width: ' +
        width +
        'px; height: ' +
        height +
        'px; overflow: scroll; visibility: none; top: ' +
        -width * 3 +
        'px; left: ' +
        -height * 3 +
        'px; visibility: hidden; margin: 0; padding: 0;';

      container.appendChild(child);

      document.body.insertBefore(container, document.body.firstChild);

      var widthSize = width - container.clientWidth;
      var heightSize = height - container.clientHeight;

      document.body.removeChild(container);

      return {
        width: widthSize,
        height: heightSize,
      };
    }

    function injectScrollStyle(styleId, containerClass) {
      function injectStyle(style, method) {
        method =
          method ||
          function(element) {
            document.head.appendChild(element);
          };

        var styleElement = document.createElement('style');
        styleElement.innerHTML = style;
        styleElement.id = styleId;
        method(styleElement);
        return styleElement;
      }

      if (!document.getElementById(styleId)) {
        var containerAnimationClass = containerClass + '_animation';
        var containerAnimationActiveClass = containerClass + '_animation_active';
        var style = '/* Created by the element-resize-detector library. */\n';
        style += '.' + containerClass + ' > div::-webkit-scrollbar { display: none; }\n\n';
        style +=
          '.' +
          containerAnimationActiveClass +
          ' { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: ' +
          containerAnimationClass +
          '; animation-name: ' +
          containerAnimationClass +
          '; }\n';
        style +=
          '@-webkit-keyframes ' +
          containerAnimationClass +
          ' { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n';
        style +=
          '@keyframes ' + containerAnimationClass + ' { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }';
        injectStyle(style);
      }
    }

    function addAnimationClass(element) {
      element.className += ' ' + detectionContainerClass + '_animation_active';
    }

    function addEvent(el, name, cb) {
      if (el.addEventListener) {
        el.addEventListener(name, cb);
      } else if (el.attachEvent) {
        el.attachEvent('on' + name, cb);
      } else {
        return reporter.error("[scroll] Don't know how to add event listeners.");
      }
    }

    function removeEvent(el, name, cb) {
      if (el.removeEventListener) {
        el.removeEventListener(name, cb);
      } else if (el.detachEvent) {
        el.detachEvent('on' + name, cb);
      } else {
        return reporter.error("[scroll] Don't know how to remove event listeners.");
      }
    }

    function getExpandElement(element) {
      return getState(element).container.childNodes[0].childNodes[0].childNodes[0];
    }

    function getShrinkElement(element) {
      return getState(element).container.childNodes[0].childNodes[0].childNodes[1];
    }

    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
    function addListener(element, listener) {
      var listeners = getState(element).listeners;

      if (!listeners.push) {
        throw new Error('Cannot add listener to an element that is not detectable.');
      }

      getState(element).listeners.push(listener);
    }

    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
    function makeDetectable(options, element, callback) {
      if (!callback) {
        callback = element;
        element = options;
        options = null;
      }

      options = options || {};

      function debug() {
        if (options.debug) {
          var args = Array.prototype.slice.call(arguments);
          args.unshift(idHandler.get(element), 'Scroll: ');
          if (reporter.log.apply) {
            reporter.log.apply(null, args);
          } else {
            for (var i = 0; i < args.length; i++) {
              reporter.log(args[i]);
            }
          }
        }
      }

      function isDetached(element) {
        function isInDocument(element) {
          return element === element.ownerDocument.body || element.ownerDocument.body.contains(element);
        }

        if (!isInDocument(element)) {
          return true;
        }

        // FireFox returns null style in hidden iframes. See https://github.com/wnr/element-resize-detector/issues/68 and https://bugzilla.mozilla.org/show_bug.cgi?id=795520
        if (window.getComputedStyle(element) === null) {
          return true;
        }

        return false;
      }

      function isUnrendered(element) {
        // Check the absolute positioned container since the top level container is display: inline.
        var container = getState(element).container.childNodes[0];
        var style = window.getComputedStyle(container);
        return !style.width || style.width.indexOf('px') === -1; //Can only compute pixel value when rendered.
      }

      function getStyle() {
        // Some browsers only force layouts when actually reading the style properties of the style object, so make sure that they are all read here,
        // so that the user of the function can be sure that it will perform the layout here, instead of later (important for batching).
        var elementStyle = window.getComputedStyle(element);
        var style = {};
        style.position = elementStyle.position;
        style.width = element.offsetWidth;
        style.height = element.offsetHeight;
        style.top = elementStyle.top;
        style.right = elementStyle.right;
        style.bottom = elementStyle.bottom;
        style.left = elementStyle.left;
        style.widthCSS = elementStyle.width;
        style.heightCSS = elementStyle.height;
        return style;
      }

      function storeStartSize() {
        var style = getStyle();
        getState(element).startSize = {
          width: style.width,
          height: style.height,
        };
        debug('Element start size', getState(element).startSize);
      }

      function initListeners() {
        getState(element).listeners = [];
      }

      function storeStyle() {
        debug('storeStyle invoked.');
        if (!getState(element)) {
          debug('Aborting because element has been uninstalled');
          return;
        }

        var style = getStyle();
        getState(element).style = style;
      }

      function storeCurrentSize(element, width, height) {
        getState(element).lastWidth = width;
        getState(element).lastHeight = height;
      }

      function getExpandChildElement(element) {
        return getExpandElement(element).childNodes[0];
      }

      function getWidthOffset() {
        return 2 * scrollbarSizes.width + 1;
      }

      function getHeightOffset() {
        return 2 * scrollbarSizes.height + 1;
      }

      function getExpandWidth(width) {
        return width + 10 + getWidthOffset();
      }

      function getExpandHeight(height) {
        return height + 10 + getHeightOffset();
      }

      function getShrinkWidth(width) {
        return width * 2 + getWidthOffset();
      }

      function getShrinkHeight(height) {
        return height * 2 + getHeightOffset();
      }

      function positionScrollbars(element, width, height) {
        var expand = getExpandElement(element);
        var shrink = getShrinkElement(element);
        var expandWidth = getExpandWidth(width);
        var expandHeight = getExpandHeight(height);
        var shrinkWidth = getShrinkWidth(width);
        var shrinkHeight = getShrinkHeight(height);
        expand.scrollLeft = expandWidth;
        expand.scrollTop = expandHeight;
        shrink.scrollLeft = shrinkWidth;
        shrink.scrollTop = shrinkHeight;
      }

      function injectContainerElement() {
        var container = getState(element).container;

        if (!container) {
          container = document.createElement('div');
          container.className = detectionContainerClass;
          container.style.cssText =
            'visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;';
          getState(element).container = container;
          addAnimationClass(container);
          element.appendChild(container);

          var onAnimationStart = function() {
            getState(element).onRendered && getState(element).onRendered();
          };

          addEvent(container, 'animationstart', onAnimationStart);

          // Store the event handler here so that they may be removed when uninstall is called.
          // See uninstall function for an explanation why it is needed.
          getState(element).onAnimationStart = onAnimationStart;
        }

        return container;
      }

      function injectScrollElements() {
        function alterPositionStyles() {
          var style = getState(element).style;

          if (style.position === 'static') {
            element.style.position = 'relative';

            var removeRelativeStyles = function(reporter, element, style, property) {
              function getNumericalValue(value) {
                return value.replace(/[^-\d\.]/g, '');
              }

              var value = style[property];

              if (value !== 'auto' && getNumericalValue(value) !== '0') {
                reporter.warn(
                  'An element that is positioned static has style.' +
                    property +
                    '=' +
                    value +
                    ' which is ignored due to the static positioning. The element will need to be positioned relative, so the style.' +
                    property +
                    ' will be set to 0. Element: ',
                  element
                );
                element.style[property] = 0;
              }
            };

            //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
            //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
            removeRelativeStyles(reporter, element, style, 'top');
            removeRelativeStyles(reporter, element, style, 'right');
            removeRelativeStyles(reporter, element, style, 'bottom');
            removeRelativeStyles(reporter, element, style, 'left');
          }
        }

        function getLeftTopBottomRightCssText(left, top, bottom, right) {
          left = !left ? '0' : left + 'px';
          top = !top ? '0' : top + 'px';
          bottom = !bottom ? '0' : bottom + 'px';
          right = !right ? '0' : right + 'px';

          return 'left: ' + left + '; top: ' + top + '; right: ' + right + '; bottom: ' + bottom + ';';
        }

        debug('Injecting elements');

        if (!getState(element)) {
          debug('Aborting because element has been uninstalled');
          return;
        }

        alterPositionStyles();

        var rootContainer = getState(element).container;

        if (!rootContainer) {
          rootContainer = injectContainerElement();
        }

        // Due to this WebKit bug https://bugs.webkit.org/show_bug.cgi?id=80808 (currently fixed in Blink, but still present in WebKit browsers such as Safari),
        // we need to inject two containers, one that is width/height 100% and another that is left/top -1px so that the final container always is 1x1 pixels bigger than
        // the targeted element.
        // When the bug is resolved, "containerContainer" may be removed.

        // The outer container can occasionally be less wide than the targeted when inside inline elements element in WebKit (see https://bugs.webkit.org/show_bug.cgi?id=152980).
        // This should be no problem since the inner container either way makes sure the injected scroll elements are at least 1x1 px.

        var scrollbarWidth = scrollbarSizes.width;
        var scrollbarHeight = scrollbarSizes.height;
        var containerContainerStyle =
          'position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;';
        var containerStyle =
          'position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; ' +
          getLeftTopBottomRightCssText(
            -(1 + scrollbarWidth),
            -(1 + scrollbarHeight),
            -scrollbarHeight,
            -scrollbarWidth
          );
        var expandStyle =
          'position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;';
        var shrinkStyle =
          'position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;';
        var expandChildStyle = 'position: absolute; left: 0; top: 0;';
        var shrinkChildStyle = 'position: absolute; width: 200%; height: 200%;';

        var containerContainer = document.createElement('div');
        var container = document.createElement('div');
        var expand = document.createElement('div');
        var expandChild = document.createElement('div');
        var shrink = document.createElement('div');
        var shrinkChild = document.createElement('div');

        // Some browsers choke on the resize system being rtl, so force it to ltr. https://github.com/wnr/element-resize-detector/issues/56
        // However, dir should not be set on the top level container as it alters the dimensions of the target element in some browsers.
        containerContainer.dir = 'ltr';

        containerContainer.style.cssText = containerContainerStyle;
        containerContainer.className = detectionContainerClass;
        container.className = detectionContainerClass;
        container.style.cssText = containerStyle;
        expand.style.cssText = expandStyle;
        expandChild.style.cssText = expandChildStyle;
        shrink.style.cssText = shrinkStyle;
        shrinkChild.style.cssText = shrinkChildStyle;

        expand.appendChild(expandChild);
        shrink.appendChild(shrinkChild);
        container.appendChild(expand);
        container.appendChild(shrink);
        containerContainer.appendChild(container);
        rootContainer.appendChild(containerContainer);

        function onExpandScroll() {
          getState(element).onExpand && getState(element).onExpand();
        }

        function onShrinkScroll() {
          getState(element).onShrink && getState(element).onShrink();
        }

        addEvent(expand, 'scroll', onExpandScroll);
        addEvent(shrink, 'scroll', onShrinkScroll);

        // Store the event handlers here so that they may be removed when uninstall is called.
        // See uninstall function for an explanation why it is needed.
        getState(element).onExpandScroll = onExpandScroll;
        getState(element).onShrinkScroll = onShrinkScroll;
      }

      function registerListenersAndPositionElements() {
        function updateChildSizes(element, width, height) {
          var expandChild = getExpandChildElement(element);
          var expandWidth = getExpandWidth(width);
          var expandHeight = getExpandHeight(height);
          expandChild.style.width = expandWidth + 'px';
          expandChild.style.height = expandHeight + 'px';
        }

        function updateDetectorElements(done) {
          var width = element.offsetWidth;
          var height = element.offsetHeight;

          debug('Storing current size', width, height);

          // Store the size of the element sync here, so that multiple scroll events may be ignored in the event listeners.
          // Otherwise the if-check in handleScroll is useless.
          storeCurrentSize(element, width, height);

          // Since we delay the processing of the batch, there is a risk that uninstall has been called before the batch gets to execute.
          // Since there is no way to cancel the fn executions, we need to add an uninstall guard to all fns of the batch.

          batchProcessor.add(0, function performUpdateChildSizes() {
            if (!getState(element)) {
              debug('Aborting because element has been uninstalled');
              return;
            }

            if (!areElementsInjected()) {
              debug('Aborting because element container has not been initialized');
              return;
            }

            if (options.debug) {
              var w = element.offsetWidth;
              var h = element.offsetHeight;

              if (w !== width || h !== height) {
                reporter.warn(idHandler.get(element), 'Scroll: Size changed before updating detector elements.');
              }
            }

            updateChildSizes(element, width, height);
          });

          batchProcessor.add(1, function updateScrollbars() {
            if (!getState(element)) {
              debug('Aborting because element has been uninstalled');
              return;
            }

            if (!areElementsInjected()) {
              debug('Aborting because element container has not been initialized');
              return;
            }

            positionScrollbars(element, width, height);
          });

          if (done) {
            batchProcessor.add(2, function() {
              if (!getState(element)) {
                debug('Aborting because element has been uninstalled');
                return;
              }

              if (!areElementsInjected()) {
                debug('Aborting because element container has not been initialized');
                return;
              }

              done();
            });
          }
        }

        function areElementsInjected() {
          return !!getState(element).container;
        }

        function notifyListenersIfNeeded() {
          function isFirstNotify() {
            return getState(element).lastNotifiedWidth === undefined;
          }

          debug('notifyListenersIfNeeded invoked');

          var state = getState(element);

          // Don't notify the if the current size is the start size, and this is the first notification.
          if (
            isFirstNotify() &&
            state.lastWidth === state.startSize.width &&
            state.lastHeight === state.startSize.height
          ) {
            return debug('Not notifying: Size is the same as the start size, and there has been no notification yet.');
          }

          // Don't notify if the size already has been notified.
          if (state.lastWidth === state.lastNotifiedWidth && state.lastHeight === state.lastNotifiedHeight) {
            return debug('Not notifying: Size already notified');
          }

          debug('Current size not notified, notifying...');
          state.lastNotifiedWidth = state.lastWidth;
          state.lastNotifiedHeight = state.lastHeight;
          forEach(getState(element).listeners, function(listener) {
            listener(element);
          });
        }

        function handleRender() {
          debug('startanimation triggered.');

          if (isUnrendered(element)) {
            debug('Ignoring since element is still unrendered...');
            return;
          }

          debug('Element rendered.');
          var expand = getExpandElement(element);
          var shrink = getShrinkElement(element);
          if (expand.scrollLeft === 0 || expand.scrollTop === 0 || shrink.scrollLeft === 0 || shrink.scrollTop === 0) {
            debug('Scrollbars out of sync. Updating detector elements...');
            updateDetectorElements(notifyListenersIfNeeded);
          }
        }

        function handleScroll() {
          debug('Scroll detected.');

          if (isUnrendered(element)) {
            // Element is still unrendered. Skip this scroll event.
            debug('Scroll event fired while unrendered. Ignoring...');
            return;
          }

          var width = element.offsetWidth;
          var height = element.offsetHeight;

          if (width !== getState(element).lastWidth || height !== getState(element).lastHeight) {
            debug('Element size changed.');
            updateDetectorElements(notifyListenersIfNeeded);
          } else {
            debug('Element size has not changed (' + width + 'x' + height + ').');
          }
        }

        debug('registerListenersAndPositionElements invoked.');

        if (!getState(element)) {
          debug('Aborting because element has been uninstalled');
          return;
        }

        getState(element).onRendered = handleRender;
        getState(element).onExpand = handleScroll;
        getState(element).onShrink = handleScroll;

        var style = getState(element).style;
        updateChildSizes(element, style.width, style.height);
      }

      function finalizeDomMutation() {
        debug('finalizeDomMutation invoked.');

        if (!getState(element)) {
          debug('Aborting because element has been uninstalled');
          return;
        }

        var style = getState(element).style;
        storeCurrentSize(element, style.width, style.height);
        positionScrollbars(element, style.width, style.height);
      }

      function ready() {
        callback(element);
      }

      function install() {
        debug('Installing...');
        initListeners();
        storeStartSize();

        batchProcessor.add(0, storeStyle);
        batchProcessor.add(1, injectScrollElements);
        batchProcessor.add(2, registerListenersAndPositionElements);
        batchProcessor.add(3, finalizeDomMutation);
        batchProcessor.add(4, ready);
      }

      debug('Making detectable...');

      if (isDetached(element)) {
        debug('Element is detached');

        injectContainerElement();

        debug('Waiting until element is attached...');

        getState(element).onRendered = function() {
          debug('Element is now attached');
          install();
        };
      } else {
        install();
      }
    }

    function uninstall(element) {
      var state = getState(element);

      if (!state) {
        // Uninstall has been called on a non-erd element.
        return;
      }

      // Uninstall may have been called in the following scenarios:
      // (1) Right between the sync code and async batch (here state.busy = true, but nothing have been registered or injected).
      // (2) In the ready callback of the last level of the batch by another element (here, state.busy = true, but all the stuff has been injected).
      // (3) After the installation process (here, state.busy = false and all the stuff has been injected).
      // So to be on the safe side, let's check for each thing before removing.

      // We need to remove the event listeners, because otherwise the event might fire on an uninstall element which results in an error when trying to get the state of the element.
      state.onExpandScroll && removeEvent(getExpandElement(element), 'scroll', state.onExpandScroll);
      state.onShrinkScroll && removeEvent(getShrinkElement(element), 'scroll', state.onShrinkScroll);
      state.onAnimationStart && removeEvent(state.container, 'animationstart', state.onAnimationStart);

      state.container && element.removeChild(state.container);
    }

    return {
      makeDetectable: makeDetectable,
      addListener: addListener,
      uninstall: uninstall,
    };
  };

  var forEach$1 = collectionUtils.forEach;

  //Detection strategies.

  function isCollection(obj) {
    return Array.isArray(obj) || obj.length !== undefined;
  }

  function toArray(collection) {
    if (!Array.isArray(collection)) {
      var array = [];
      forEach$1(collection, function(obj) {
        array.push(obj);
      });
      return array;
    } else {
      return collection;
    }
  }

  function isElement(obj) {
    return obj && obj.nodeType === 1;
  }

  /**
   * @typedef idHandler
   * @type {object}
   * @property {function} get Gets the resize detector id of the element.
   * @property {function} set Generate and sets the resize detector id of the element.
   */

  /**
   * @typedef Options
   * @type {object}
   * @property {boolean} callOnAdd    Determines if listeners should be called when they are getting added.
                                      Default is true. If true, the listener is guaranteed to be called when it has been added.
                                      If false, the listener will not be guarenteed to be called when it has been added (does not prevent it from being called).
   * @property {idHandler} idHandler  A custom id handler that is responsible for generating, setting and retrieving id's for elements.
                                      If not provided, a default id handler will be used.
   * @property {reporter} reporter    A custom reporter that handles reporting logs, warnings and errors.
                                      If not provided, a default id handler will be used.
                                      If set to false, then nothing will be reported.
   * @property {boolean} debug        If set to true, the the system will report debug messages as default for the listenTo method.
   */

  /**
   * Creates an element resize detector instance.
   * @public
   * @param {Options?} options Optional global options object that will decide how this instance will work.
   */
  var elementResizeDetector = function(options) {
    options = options || {};

    //idHandler is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var idHandler$$1;

    if (options.idHandler) {
      // To maintain compatability with idHandler.get(element, readonly), make sure to wrap the given idHandler
      // so that readonly flag always is true when it's used here. This may be removed next major version bump.
      idHandler$$1 = {
        get: function(element) {
          return options.idHandler.get(element, true);
        },
        set: options.idHandler.set,
      };
    } else {
      var idGenerator$$1 = idGenerator();
      var defaultIdHandler = idHandler({
        idGenerator: idGenerator$$1,
        stateHandler: stateHandler,
      });
      idHandler$$1 = defaultIdHandler;
    }

    //reporter is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var reporter$$1 = options.reporter;

    if (!reporter$$1) {
      //If options.reporter is false, then the reporter should be quiet.
      var quiet = reporter$$1 === false;
      reporter$$1 = reporter(quiet);
    }

    //batchProcessor is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var batchProcessor$$1 = getOption(options, 'batchProcessor', batchProcessor({ reporter: reporter$$1 }));

    //Options to be used as default for the listenTo function.
    var globalOptions = {};
    globalOptions.callOnAdd = !!getOption(options, 'callOnAdd', true);
    globalOptions.debug = !!getOption(options, 'debug', false);

    var eventListenerHandler = listenerHandler(idHandler$$1);
    var elementUtils$$1 = elementUtils({
      stateHandler: stateHandler,
    });

    //The detection strategy to be used.
    var detectionStrategy;
    var desiredStrategy = getOption(options, 'strategy', 'object');
    var strategyOptions = {
      reporter: reporter$$1,
      batchProcessor: batchProcessor$$1,
      stateHandler: stateHandler,
      idHandler: idHandler$$1,
    };

    if (desiredStrategy === 'scroll') {
      if (browserDetector.isLegacyOpera()) {
        reporter$$1.warn('Scroll strategy is not supported on legacy Opera. Changing to object strategy.');
        desiredStrategy = 'object';
      } else if (browserDetector.isIE(9)) {
        reporter$$1.warn('Scroll strategy is not supported on IE9. Changing to object strategy.');
        desiredStrategy = 'object';
      }
    }

    if (desiredStrategy === 'scroll') {
      detectionStrategy = scroll(strategyOptions);
    } else if (desiredStrategy === 'object') {
      detectionStrategy = object(strategyOptions);
    } else {
      throw new Error('Invalid strategy name: ' + desiredStrategy);
    }

    //Calls can be made to listenTo with elements that are still being installed.
    //Also, same elements can occur in the elements list in the listenTo function.
    //With this map, the ready callbacks can be synchronized between the calls
    //so that the ready callback can always be called when an element is ready - even if
    //it wasn't installed from the function itself.
    var onReadyCallbacks = {};

    /**
     * Makes the given elements resize-detectable and starts listening to resize events on the elements. Calls the event callback for each event for each element.
     * @public
     * @param {Options?} options Optional options object. These options will override the global options. Some options may not be overriden, such as idHandler.
     * @param {element[]|element} elements The given array of elements to detect resize events of. Single element is also valid.
     * @param {function} listener The callback to be executed for each resize event for each element.
     */
    function listenTo(options, elements, listener) {
      function onResizeCallback(element) {
        var listeners = eventListenerHandler.get(element);
        forEach$1(listeners, function callListenerProxy(listener) {
          listener(element);
        });
      }

      function addListener(callOnAdd, element, listener) {
        eventListenerHandler.add(element, listener);

        if (callOnAdd) {
          listener(element);
        }
      }

      //Options object may be omitted.
      if (!listener) {
        listener = elements;
        elements = options;
        options = {};
      }

      if (!elements) {
        throw new Error('At least one element required.');
      }

      if (!listener) {
        throw new Error('Listener required.');
      }

      if (isElement(elements)) {
        // A single element has been passed in.
        elements = [elements];
      } else if (isCollection(elements)) {
        // Convert collection to array for plugins.
        // TODO: May want to check so that all the elements in the collection are valid elements.
        elements = toArray(elements);
      } else {
        return reporter$$1.error('Invalid arguments. Must be a DOM element or a collection of DOM elements.');
      }

      var elementsReady = 0;

      var callOnAdd = getOption(options, 'callOnAdd', globalOptions.callOnAdd);
      var onReadyCallback = getOption(options, 'onReady', function noop() {});
      var debug = getOption(options, 'debug', globalOptions.debug);

      forEach$1(elements, function attachListenerToElement(element) {
        if (!stateHandler.getState(element)) {
          stateHandler.initState(element);
          idHandler$$1.set(element);
        }

        var id = idHandler$$1.get(element);

        debug && reporter$$1.log('Attaching listener to element', id, element);

        if (!elementUtils$$1.isDetectable(element)) {
          debug && reporter$$1.log(id, 'Not detectable.');
          if (elementUtils$$1.isBusy(element)) {
            debug && reporter$$1.log(id, 'System busy making it detectable');

            //The element is being prepared to be detectable. Do not make it detectable.
            //Just add the listener, because the element will soon be detectable.
            addListener(callOnAdd, element, listener);
            onReadyCallbacks[id] = onReadyCallbacks[id] || [];
            onReadyCallbacks[id].push(function onReady() {
              elementsReady++;

              if (elementsReady === elements.length) {
                onReadyCallback();
              }
            });
            return;
          }

          debug && reporter$$1.log(id, 'Making detectable...');
          //The element is not prepared to be detectable, so do prepare it and add a listener to it.
          elementUtils$$1.markBusy(element, true);
          return detectionStrategy.makeDetectable({ debug: debug }, element, function onElementDetectable(element) {
            debug && reporter$$1.log(id, 'onElementDetectable');

            if (stateHandler.getState(element)) {
              elementUtils$$1.markAsDetectable(element);
              elementUtils$$1.markBusy(element, false);
              detectionStrategy.addListener(element, onResizeCallback);
              addListener(callOnAdd, element, listener);

              // Since the element size might have changed since the call to "listenTo", we need to check for this change,
              // so that a resize event may be emitted.
              // Having the startSize object is optional (since it does not make sense in some cases such as unrendered elements), so check for its existance before.
              // Also, check the state existance before since the element may have been uninstalled in the installation process.
              var state = stateHandler.getState(element);
              if (state && state.startSize) {
                var width = element.offsetWidth;
                var height = element.offsetHeight;
                if (state.startSize.width !== width || state.startSize.height !== height) {
                  onResizeCallback(element);
                }
              }

              if (onReadyCallbacks[id]) {
                forEach$1(onReadyCallbacks[id], function(callback) {
                  callback();
                });
              }
            } else {
              // The element has been unisntalled before being detectable.
              debug && reporter$$1.log(id, 'Element uninstalled before being detectable.');
            }

            delete onReadyCallbacks[id];

            elementsReady++;
            if (elementsReady === elements.length) {
              onReadyCallback();
            }
          });
        }

        debug && reporter$$1.log(id, 'Already detecable, adding listener.');

        //The element has been prepared to be detectable and is ready to be listened to.
        addListener(callOnAdd, element, listener);
        elementsReady++;
      });

      if (elementsReady === elements.length) {
        onReadyCallback();
      }
    }

    function uninstall(elements) {
      if (!elements) {
        return reporter$$1.error('At least one element is required.');
      }

      if (isElement(elements)) {
        // A single element has been passed in.
        elements = [elements];
      } else if (isCollection(elements)) {
        // Convert collection to array for plugins.
        // TODO: May want to check so that all the elements in the collection are valid elements.
        elements = toArray(elements);
      } else {
        return reporter$$1.error('Invalid arguments. Must be a DOM element or a collection of DOM elements.');
      }

      forEach$1(elements, function(element) {
        eventListenerHandler.removeAllListeners(element);
        detectionStrategy.uninstall(element);
        stateHandler.cleanState(element);
      });
    }

    return {
      listenTo: listenTo,
      removeListener: eventListenerHandler.removeListener,
      removeAllListeners: eventListenerHandler.removeAllListeners,
      uninstall: uninstall,
    };
  };

  function getOption(options, name, defaultValue) {
    var value = options[name];

    if ((value === undefined || value === null) && defaultValue !== undefined) {
      return defaultValue;
    }

    return value;
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
            } else if (isString(ing)) {
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

            var dom = ReactDOM.findDOMNode(that);

            if (isPlainObject(theme)) {
              HighCharts$$1.setOptions(theme);
            }

            var method = INIT_METHOD[name];

            var _chart = HighCharts$$1[method](dom, options, function() {
              if (isFunction(onLoad)) {
                setTimeout(function() {
                  return onLoad(_chart, HighCharts$$1);
                });
              }
            });

            that.setLoading(_chart, loading);

            if (resize && isFunction(resize.uninstall)) {
              resize.uninstall(dom);
            }

            var _resize = null;

            if (resizable === true) {
              _resize = elementResizeDetector({
                strategy: 'scroll', // <- For ultra performance.
              });

              _resize.listenTo(dom, function(element) {
                var width = element.offsetWidth;
                var height = element.offsetHeight;

                if (isFunction(fnResize)) {
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

            if (resize && isFunction(resize.uninstall)) {
              var dom = ReactDOM.findDOMNode(that);
              resize.uninstall(dom);
            }

            if (fnResize && isFunction(fnResize.cancel)) {
              fnResize.cancel();
            }

            if (chart && isFunction(chart.destroy)) {
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

            var width = get(opts, 'width');

            var height = get(opts, 'height');

            chart.setSize(width, height);

            if (isFunction(onResize)) {
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

          var _fnResize = throttle(_this.resize, 250, {
            leading: true,
            trailing: true,
          });

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

  var IHighCharts = wrapHighCharts('maps', HighCharts);
  IHighCharts.__highcharts__ = HighCharts;

  return IHighCharts;
});
