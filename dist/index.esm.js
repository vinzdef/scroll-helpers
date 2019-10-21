function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
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
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
/**
 * @module EventEmitter
 * @description Emits events that can be listened and unlistened to
 * @example
 * import EventEmitter from '@okiba/event-emitter'
 * const emitter = new EventEmitter
 * emitter.on('log', console.log)
 * emitter.emit('log', 'Silence is deprecated')
 * // Logs: 'Silence is deprecated'
 *
 * emitter.off('log', console.log)
 * emitter.emit('log', 'Will not run')
 * // ...Nothing happens
 */


var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck$1(this, EventEmitter);

    this.hs = {};
  }
  /**
   * Sets an event listener for an event type
   * @param  {String} name    Event type
   * @param  {Function} handler Callback to be fired when that event occours
   */


  _createClass$1(EventEmitter, [{
    key: "on",
    value: function on(name, handler) {
      (this.hs[name] || (this.hs[name] = [])).push(handler);
    }
    /**
     * Unsets an event listener for an event type
     * @param  {String} name    Event type
     * @param  {Function} handler Callback previously registered for that event type
     */

  }, {
    key: "off",
    value: function off(name, handler) {
      if (!this.hs[name]) return;
      var i = this.hs[name].indexOf(handler);
      if (i < 0) return;
      this.hs[name].splice(i, 1);
    }
    /**
     * Triggers an event with optional data attached.
     * All listeners will be triggered in registration order.
     * Custom data will be passed to them as a parameter
     * @param  {String} name Event type
     * @param  {Object} [data] Custom data to be passed to the handlers
     */

  }, {
    key: "emit",
    value: function emit(name, data) {
      if (!this.hs || !this.hs[name]) return;

      for (var i = 0; i < this.hs[name].length; ++i) {
        this.hs[name][i](data);
      }
    }
    /**
     * Removes all event listeners and deletes the handlers object
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this = this;

      Object.entries(this.hs).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            name = _ref2[0],
            handlers = _ref2[1];

        return handlers.forEach(function (handler) {
          return _this.off(name, handler);
        });
      });
      delete this.hs;
    }
  }]);

  return EventEmitter;
}();

var _hasPassiveEvents;

var testHasPassiveEvents = {};
Object.defineProperties(hasPassiveEvents, {
  check: {
    get: function get() {
      if (_hasPassiveEvents !== void 0) {
        return _hasPassiveEvents;
      }

      function noop() {}

      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          _hasPassiveEvents = true;
        }
      });
      window.addEventListener('_', noop, options);
      window.removeEventListener('_', noop, options);
      return _hasPassiveEvents;
    }
  }
});
var testIsTouch = {};
Object.defineProperties(testIsTouch, {
  check: {
    get: function get() {
      return 'ontouchstart' in window;
    }
  }
});
var hasPassiveEvents = testHasPassiveEvents.check;
var isTouch = testIsTouch.check;

var detect = /*#__PURE__*/Object.freeze({
  __proto__: null,
  hasPassiveEvents: hasPassiveEvents,
  isTouch: isTouch
});

/**
 * @module arrays
 * @description Array utils for okiba js
 */

/**
 * Return the first element if it only contains one
 * @example
 * const els = arrayOrOne([🍏, 🍌])
 * console.log(els) // [🍏, 🍌]
 *
 * const els = arrayOrOne([🍏])
 * console.log(els) // 🍏
 *
 * @param {Array-like} arrayLike The options object.
 * @returns {any} The first element or the argument, undefined if empty array
 */
function arrayOrOne(arrayLike) {
  if (arrayLike === void 0 || arrayLike.length === 0) {
    return void 0;
  }

  if (arrayLike.length === 1) {
    return arrayLike[0];
  }

  return arrayLike;
}
/**
 * Cast an array-like object or single element to Array
 * @example
 * const elements = castArray(document.querySelectorAll('p')) // [p, p]
 * const fruits = castArray(🍒) // [🍒]
 *
 * @param {any} castable Array to cast
 * @returns {Array} The array-like converted to Array, or an Array containing the element
 */


function castArray(castable) {
  if (castable === void 0) return castable;

  if (castable instanceof Array) {
    return castable;
  }

  if (castable.callee || castable instanceof NodeList || castable instanceof DOMTokenList) {
    return Array.prototype.slice.call(castable);
  }

  return [castable];
}

/**
 * Selects an array of DOM Elements, scoped to element
 *
 * @example
 * import {qsa} from '@okiba/dom'
 * const fruits = qsa('.fruit')
 * console.log(fruits) // [div.fruit, div.fruit]
 *
 * @param  {String}   selector            DOM Selector (tag, class, id, anything that can be passed to `querySelector` API)
 * @param  {Element}  [element=document]  DOM Element to scope the selection query, only childs of that element will be tageted
 *
 * @return {Element[]} An array of DOM elements matching `selector`
 */


function qsa(selector) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return castArray(element.querySelectorAll(selector));
}

function evt(source, type, handler, action, options) {
  if (!type || !handler) return false;
  var elements = castArray(source);
  var types = castArray(type);
  var handlers = castArray(handler);

  for (var i = 0; i < elements.length; ++i) {
    for (var j = 0; j < types.length; ++j) {
      elements[i]["".concat(action, "EventListener")](types[j], handlers[Math.min(j, handlers.length - 1)], options);
    }
  }

  return true;
}
/**
 * Attaches an event listener to a DOM Element, or an array of.
 *
 * @example
 * import {qsa, on} from '@okiba/dom'
 * const buttons = qsa('.button')
 *
 * on(buttons, 'click', onClick)
 * on(buttons, ['mouseenter', 'mouseleve'], onMouseChange)
 *
 * // adds `onClick` to 'click' and `onMouseChange` to both 'mouseenter' and 'mouseleave'
 * on(buttons, ['click', mouseenter', 'mouseleve'], [onClick, onMouseChange])
 *
 * @param {(Element|Element[])} [window] source
 * the element which will trigger the event
 * @param {(String|String[])} type
 * the event name to bind. Or an array of
 * @param {(Function|Function[])} handler
 * the callback to be fired at the event. If an array is supplied the handlers will be bound in order,
 * if there are less handlers than event types, the last handler is bound to all remaining events.
 *
 * @return {Boolean} Success of the binding
 */


function on(source, type, handler, options) {
  return evt(source, type, handler, 'add', options);
}
/**
 * Gets top and left offsets of an element
 *
 * @example
 * import {qs, offset} from '@okiba/dom'
 * const el = qs('.something')
 * const offsets = offset(el)
 * console.log(offsets) // Logs: {top: 100, left: 100}
 *
 * @param {Element} el The element you want to get offsets of
 *
 * @return {Object} Object containing `top` and `left` offsets
 */


function offset(el) {
  var left = 0;
  var top = 0;

  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    left += el.offsetLeft - (el.tagName !== 'BODY' ? el.scrollLeft : 0);
    top += el.offsetTop - (el.tagName !== 'BODY' ? el.scrollTop : 0);
    el = el.offsetParent;
  }

  return {
    top: top,
    left: left
  };
}

var _temp;
var EventManager = new (_temp =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(EventManager, _EventEmitter);

  function EventManager() {
    var _this;

    _classCallCheck(this, EventManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventManager).call(this));

    _defineProperty(_assertThisInitialized(_this), "onRaf", function (timestamp) {
      _this.emit('raf', timestamp);

      requestAnimationFrame(_this.onRaf);
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      _this.emit('resize', {
        width: window.innerWidth,
        height: window.innerHeight
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", function (data) {
      _this.emit('scroll', data);
    });

    _this.listen();

    return _this;
  }

  _createClass(EventManager, [{
    key: "listen",
    value: function listen() {
      requestAnimationFrame(this.onRaf);
      on(window, 'resize', this.onResize,  false);
      on(window, 'scroll', this.onScroll,  false);
    }
  }]);

  return EventManager;
}(EventEmitter), _temp)();

/**
 * @module math
 * @description Collection of math functions
 */

/**
 * Linear interpolation between a two values
 * @param  {Number} min      Minimum possible value
 * @param  {Number} max      Maximum possible value
 * @param  {Number} fraction Current position
 * @return {Number}          The interpolated value
 *
 * @example
 * import {lerp} from '@okiba/math'
 * const xPosition = lerp(0, 100, 0.5)
 * console.log(xPosition) // 50
 */
function lerp(min, max, fraction) {
  return (max - min) * fraction + min;
}
/**
 * Maps a value between two ranges
 * @param  {Number} n       Value to map
 * @param  {Number} min1    Source range minimum
 * @param  {Number} max1    Source range maximum
 * @param  {Number} min2    Target range minimum
 * @param  {Number} max2    Target range maximum
 * @return {Number}         Mapped value
 *
 * @example
 * import {map} from '@okiba/math'
 *
 * const x = map(0.5, 0, 1, 0, 1000)
 * console.log(x) // 500
 *
 * const y = map(0, -1, 1, -1000, 1000)
 * console.log(y) // 0
 */


function map(n, min1, max1, min2, max2) {
  return (n - min1) * (max2 - min2) / (max1 - min1) + min2;
}
/**
 * Limit a value between a min and a max (inclusive)
 * @param  {Number} n   Value to cap
 * @param  {Number} min Minimum possible value
 * @param  {Number} max Maximum possible value
 * @return {Number}     Capped value
 *
 * @example
 * import {cap} from '@okiba/math'
 * let progress = 1.1
 * progress = cap(0, 1, progress)
 * console.log(progress) // 1
 */


function cap(n, min, max) {
  return Math.min(Math.max(n, min), max);
}

var _temp$1;
var SizesCache = new (_temp$1 =
/*#__PURE__*/
function () {
  function SizesCache() {
    var _this = this;

    _classCallCheck(this, SizesCache);

    _defineProperty(this, "onResize", function () {
      _this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      _this.body = {
        width: document.body.offsetWidth,
        height: document.body.offsetHeight
      };
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _this.map.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;

          _this.compute(el);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });

    this.map = new Map();
    this.listen();
    this.onResize();
  }

  _createClass(SizesCache, [{
    key: "get",
    value: function get(el) {
      if (!this.map.has(el)) {
        this.map.set(el, {});
        this.compute(el);
      }

      return this.map.get(el);
    }
  }, {
    key: "compute",
    value: function compute(el) {
      var sizes = this.map.get(el);

      var _offset = offset(el),
          top = _offset.top,
          left = _offset.left;

      var width = el.clientWidth;
      var height = el.clientHeight;
      sizes.top = top;
      sizes.right = left + width;
      sizes.bottom = top + height;
      sizes.left = left;
      sizes.width = width;
      sizes.height = height;
    }
  }, {
    key: "listen",
    value: function listen() {
      EventManager.on('resize', this.onResize);
    }
  }]);

  return SizesCache;
}(), _temp$1)();

var _temp$2;
var ScrollManager = new (_temp$2 =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(ScrollManager, _EventEmitter);

  function ScrollManager() {
    var _this;

    _classCallCheck(this, ScrollManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollManager).call(this));

    _defineProperty(_assertThisInitialized(_this), "onRaf", function () {
      if (!_this.isEnabled || _this.lerpY === _this.targetY) return;
      _this.deltaLerpY = _this.lerpY;
      _this.lerpY = lerp(_this.lerpY, _this.targetY, 0.1);
      _this.deltaLerpY -= _this.lerpY;

      if (Math.abs(_this.deltaLerpY) < 0.02) {
        _this.lerpY = _this.targetY;
        _this.deltaLerpY = 0;
      }

      _this.emit('scroll', {
        y: ~~_this.lerpY,
        delta: _this.deltaLerpY,
        acceleration: _this.deltaLerpY / SizesCache.window.height
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function () {
      _this.deltaY = (window.scrollY || window.pageYOffset) - _this.targetY;
      _this.targetY += _this.deltaY;

      if (!_this.isEnabled) {
        _this.emit('scroll', {
          y: _this.targetY,
          delta: _this.deltaY,
          acceleration: _this.deltaY / SizesCache.window.height
        });
      }
    });

    _this.targetY = _this.lerpY = window.scrollY || window.pageYOffset;

    _this.emit('scroll', {
      y: _this.targetY,
      delta: 0,
      acceleration: 0
    });

    _this.listen();

    return _this;
  } // Puo essere tolto metodo


  _createClass(ScrollManager, [{
    key: "disable",
    value: function disable() {
      if (!this.isEnabled) return;
      this.isEnabled = false;
    }
  }, {
    key: "enable",
    value: function enable() {
      if (this.isEnabled) return;
      this.isEnabled = true;
    }
  }, {
    key: "listen",
    value: function listen() {
      EventManager.on('raf', this.onRaf);
      EventManager.on('scroll', this.onChange);
      EventManager.on('resize', this.onChange);
    }
  }]);

  return ScrollManager;
}(EventEmitter), _temp$2)();

function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$2(Constructor, staticProps);
  return Constructor;
}

function bindUi(ui, el) {
  return Object.keys(ui).reduce(function (hash, key) {
    var els = arrayOrOne(qsa(ui[key].selector || ui[key], el));

    if (els) {
      hash[key] = els;
    } else if (!ui[key].optional) {
      throw new Error("[!!] [Component] Cant't find UI element for selector: ".concat(ui[key]));
    }

    return hash;
  }, {});
}

function bindComponents(components, el) {
  return Object.keys(components).reduce(function (hash, key) {
    var _components$key = components[key],
        type = _components$key.type,
        selector = _components$key.selector,
        options = _components$key.options,
        optional = _components$key.optional;

    if (typeof selector !== 'string' || !type) {
      throw new Error("[!!] [Component] Invalid component configuration for key: ".concat(key));
    }

    var els = arrayOrOne(qsa(selector, el));

    if (els) {
      hash[key] = Array.isArray(els) ? els.map(function (n) {
        return new type({
          el: n,
          options: options
        });
      }) : new type({
        el: els,
        options: options
      });
    } else if (!optional) {
      throw new Error("[!!] [Component] Cant't find node with selector ".concat(selector, " for sub-component: ").concat(key));
    }

    return hash;
  }, {});
}
/**
 * Accepts an __hash__ whose properties can be:
 * @param {Object} args Arguments to create a component
 * @param   {Element}   {el}       DOM Element to be bound
 * @param   {Object}    [{ui}]
 * UI hash where keys are name and values are selectors
 * ```javascript
 * { buttonNext: '#buttonNext' }
 * ```
 * Becomes:
 * ```javascript
 * this.ui.buttonNext
 * ```
 *
 * @param   {Object}    [{components}]
 * Components hash for childs to bind, keys are names and values are component initialization props:
 * ```javascript
 * {
 *   slider: {
 *     // Matched using [qs]('https://github/okiba-gang/okiba/packages/dom'), scoped to the current component element
 *     selector: '.domSelector',
 *     // Component class, extending Okiba Component
 *     type: Slider,
 *     // Options hash
 *     options: {fullScreen: true}
 *   }
 * }
 * ```
 *
 * Becomes:
 * ```javascript
 * this.components.slider
 * ```
 * @param   {Object}    [{options}]         Custom options passed to the component
 */


var Component =
/*#__PURE__*/
function () {
  function Component(args) {
    _classCallCheck$2(this, Component);

    this.el = args.el;

    if (args.options) {
      this.options = args.options;
    }

    if (args.ui) {
      this.ui = bindUi(args.ui, args.el);
    }

    if (args.components) {
      this.components = bindComponents(args.components, args.el);
    }
  }
  /**
   * @function onDestroy
   * @description Virtual method, needs to be overridden
   * It's the place to call cleanup functions as it will
   * be called when your component is destroyed
   */

  /**
   * Should not be overridden, will call `onDestroy`
   * and forward destruction to all child components
   */


  _createClass$2(Component, [{
    key: "destroy",
    value: function destroy() {
      var _this = this;

      if (this.onDestroy) {
        this.onDestroy();
      }

      if (this.components) {
        Object.keys(this.components).forEach(function (key) {
          return (_this.components[key].length ? _this.components[key] : [_this.components[key]]).forEach(function (c) {
            return c.destroy();
          });
        });
      }

      this.components = null;
    }
  }]);

  return Component;
}();

var ui = {
  content: '.js-scroll-content'
};

var ScrollContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollContainer, _Component);

  function ScrollContainer(_ref) {
    var _this;

    var el = _ref.el;

    _classCallCheck(this, ScrollContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollContainer).call(this, {
      el: el,
      ui: ui
    }));

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      _this.height = _this.ui.content.offsetHeight;

      if (_this.isEnabled) {
        document.body.style.height = "".concat(_this.height, "px");
      }
    });

    _this.listen();

    _this.onResize();

    return _this;
  }

  _createClass(ScrollContainer, [{
    key: "disable",
    value: function disable() {
      if (!this.isEnabled) return;
      this.isEnabled = false;
      document.body.style.height = '';
      Object.assign(this.el.style, {
        position: '',
        top: '',
        left: '',
        width: ''
      });
    }
  }, {
    key: "enable",
    value: function enable() {
      if (this.isEnabled) return;
      this.isEnabled = true;
      document.body.style.height = "".concat(this.height, "px");
      Object.assign(this.el.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%'
      });
    }
  }, {
    key: "listen",
    value: function listen() {
      EventManager.on('resize', this.onResize);
    }
  }]);

  return ScrollContainer;
}(Component);

var SmoothScroll =
/*#__PURE__*/
function () {
  function SmoothScroll(el) {
    var _this = this;

    _classCallCheck(this, SmoothScroll);

    _defineProperty(this, "onRaf", function () {
      if (!_this.isEnabled) return;

      if (_this.targetY === _this.y) {
        EventManager.off('raf', _this.onRaf);
        return;
      }

      _this.y = _this.targetY;
      _this.el.style.transform = "translate3d(0, -".concat(_this.y, "px, 0)");
    });

    _defineProperty(this, "onScroll", function (_ref) {
      var y = _ref.y;
      _this.targetY = cap(y, _this.top, _this.bottom);

      if (_this.targetY !== _this.y) {
        _this.onRaf();

        EventManager.on('raf', _this.onRaf);
        return;
      }
    });

    _defineProperty(this, "onResize", function () {
      _this.bottom = _this.sizes.bottom;
      _this.top = _this.sizes.top - SizesCache.window.height;
    });

    this.el = el;
    this.sizes = SizesCache.get(this.el);
    this.onResize();
    this.listen();
  }

  _createClass(SmoothScroll, [{
    key: "disable",
    value: function disable() {
      if (!this.isEnabled) return;
      this.isEnabled = false;
      this.el.style.transform = '';
    }
  }, {
    key: "enable",
    value: function enable() {
      if (this.isEnabled) return;
      this.isEnabled = true;
      this.el.style.transform = "translate3d(0, -".concat(this.y, "px, 0)");
    }
  }, {
    key: "listen",
    value: function listen() {
      EventManager.on('resize', this.onResize);
      EventManager.on('raf', this.onRaf);
      ScrollManager.on('scroll', this.onScroll);
    }
  }]);

  return SmoothScroll;
}();

var StickyContent =
/*#__PURE__*/
function () {
  function StickyContent(el, content, opts) {
    var _this = this;

    _classCallCheck(this, StickyContent);

    _defineProperty(this, "onScroll", function (_ref) {
      var y = _ref.y;
      if (!_this.isEnabled) return;
      var deltaY = y - _this.sizes.top;

      if (deltaY <= 0) {
        _this.y = 0;
      } else if (!_this.opts.overflow && y > _this.limitY) {
        _this.y = _this.maxY;
      } else {
        _this.y = deltaY;
      }

      _this.content.style.transform = "translate3d(0, ".concat(_this.y, "px, 0)");
    });

    _defineProperty(this, "onResize", function () {
      _this.maxY = _this.sizes.height - SizesCache.window.height;
      _this.limitY = _this.sizes.bottom - SizesCache.window.height;
    });

    this.opts = opts || {};
    this.el = el;
    this.content = content;
    this.sizes = SizesCache.get(el);
    this.onResize();
    this.listen();
  }

  _createClass(StickyContent, [{
    key: "enable",
    value: function enable() {
      if (this.isEnabled) return;
      this.isEnabled = true;
      this.content.style.transform = "translate3d(0, ".concat(this.y, "px, 0)");
    }
  }, {
    key: "disable",
    value: function disable() {
      if (!this.isEnabled) return;
      this.isEnabled = false;
      this.content.style.transform = '';
    }
  }, {
    key: "listen",
    value: function listen() {
      EventManager.on('resize', this.onResize);
      ScrollManager.on('scroll', this.onScroll);
    }
  }]);

  return StickyContent;
}();

var ViewProgress =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(ViewProgress, _EventEmitter);

  function ViewProgress(el, opts) {
    var _this;

    _classCallCheck(this, ViewProgress);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ViewProgress).call(this));

    _defineProperty(_assertThisInitialized(_this), "onScroll", function (_ref) {
      var y = _ref.y,
          rest = _objectWithoutProperties(_ref, ["y"]);

      if (!_this.opts.overflow && !_this.isInside) {
        if (y < _this.startY || y > _this.endY) return;
      }

      var progress = map(y, _this.startY, _this.endY, 0, 1);
      var isInside = progress >= 0 && progress <= 1;

      if (isInside !== _this.isInside) {
        if (isInside) {
          _this.emit('enter');
        } else {
          _this.emit('exit');
        }
      }

      _this.isInside = isInside;

      _this.emit('progress', _objectSpread2({
        progress: progress,
        isInside: isInside
      }, rest, {
        y: y
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      var _this$sizes = _this.sizes,
          top = _this$sizes.top,
          height = _this$sizes.height;
      _this.startY = top - SizesCache.window.height;
      _this.endY = _this.startY + height + SizesCache.window.height;

      if (_this.endY >= SizesCache.body.height) {
        _this.endY = _this.startY + height;
      }

      if (_this.startY < 0) {
        _this.startY = 0;
        _this.endY = height;
      }
    });

    _this.opts = opts || {};
    _this.el = el;
    _this.sizes = SizesCache.get(el);
    _this.isInside = false;

    _this.onResize();

    _this.listen();

    return _this;
  }

  _createClass(ViewProgress, [{
    key: "listen",
    value: function listen() {
      ScrollManager.on('scroll', this.onScroll);
      EventManager.on('resize', this.onResize);
    }
  }]);

  return ViewProgress;
}(EventEmitter);

export { detect as Detect, EventManager, ScrollContainer, ScrollManager, SizesCache, SmoothScroll, StickyContent, ViewProgress };
//# sourceMappingURL=index.esm.js.map
