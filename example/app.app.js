(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./example/src/App/HotAirBalloon.svg":
/*!*******************************************!*\
  !*** ./example/src/App/HotAirBalloon.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f4d685d1556b5c037c53f15815b8a3e7.svg\";\n\n//# sourceURL=webpack:///./example/src/App/HotAirBalloon.svg?");

/***/ }),

/***/ "./example/src/App/index.styl":
/*!************************************!*\
  !*** ./example/src/App/index.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/stylus-loader??ref--5-2!./index.styl */ \"./node_modules/css-loader/index.js?!./node_modules/stylus-loader/index.js?!./example/src/App/index.styl\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"sourceMap\":true,\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./example/src/App/index.styl?");

/***/ }),

/***/ "./example/src/App/index.tsx":
/*!***********************************!*\
  !*** ./example/src/App/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar src_1 = __webpack_require__(/*! ../../../src */ \"./src/index.ts\");\n__webpack_require__(/*! ./index.styl */ \"./example/src/App/index.styl\");\nvar App = (function (_super) {\n    __extends(App, _super);\n    function App() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.container = null;\n        _this.ctx = null;\n        _this.image = new Image();\n        _this.state = {\n            width: 800,\n            height: 600\n        };\n        _this.onAnimationFrame = function (ctx, _time) {\n            var _a = _this.image, width = _a.width, height = _a.height;\n            ctx.drawImage(_this.image, 0, 0, width, height);\n        };\n        _this.updateContainer = function (node) {\n            _this.container = node;\n        };\n        _this.updateDimensions = function () {\n            if (!_this.container)\n                return;\n            var _a = _this.container.getBoundingClientRect(), width = _a.width, height = _a.height;\n            _this.setState({ width: width, height: height });\n        };\n        return _this;\n    }\n    App.prototype.componentWillMount = function () {\n        this.image.src = __webpack_require__(/*! ./HotAirBalloon.svg */ \"./example/src/App/HotAirBalloon.svg\");\n    };\n    App.prototype.componentDidMount = function () {\n        var _this = this;\n        setTimeout(function () { return _this.updateDimensions(); }, 100);\n        window.addEventListener('resize', function () { return _this.updateDimensions(); });\n    };\n    App.prototype.componentWillUnmount = function () {\n        var _this = this;\n        window.removeEventListener('resize', function () { return _this.updateDimensions(); });\n    };\n    App.prototype.render = function () {\n        var _this = this;\n        var _a = this.state, width = _a.width, height = _a.height;\n        return (React.createElement(\"div\", { className: \"App\", ref: this.updateContainer },\n            React.createElement(src_1.Touch, { onScale: function (x, y) { return _this.ctx.scale(x, y); }, onTranslate: function (x, y) { return _this.ctx.translate(x, y); } },\n                React.createElement(src_1.Canvas, { width: width, height: height, onAnimationFrame: this.onAnimationFrame, getContext: function (ctx) { return _this.ctx = ctx; } }))));\n    };\n    return App;\n}(React.Component));\nexports.default = App;\n\n\n//# sourceURL=webpack:///./example/src/App/index.tsx?");

/***/ }),

/***/ "./example/src/index.styl":
/*!********************************!*\
  !*** ./example/src/index.styl ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/stylus-loader??ref--5-2!./index.styl */ \"./node_modules/css-loader/index.js?!./node_modules/stylus-loader/index.js?!./example/src/index.styl\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"sourceMap\":true,\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./example/src/index.styl?");

/***/ }),

/***/ "./example/src/index.tsx":
/*!*******************************!*\
  !*** ./example/src/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar react_dom_1 = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\nvar App_1 = __webpack_require__(/*! ./App */ \"./example/src/App/index.tsx\");\n__webpack_require__(/*! ./index.styl */ \"./example/src/index.styl\");\nif (process.env.REMOTE_LOG) {\n    __webpack_require__(/*! remote-log-websocket */ \"./node_modules/remote-log-websocket/lib/client.js\")(process.env.REMOTE_LOG);\n    setTimeout(function () { return console.log('Hello remote!'); }, 500);\n}\nvar element = document.createElement('div');\ndocument.body.appendChild(element);\nreact_dom_1.render(React.createElement(App_1.default, null), element, null);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./example/src/index.tsx?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/stylus-loader/index.js?!./example/src/App/index.styl":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/stylus-loader??ref--5-2!./example/src/App/index.styl ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \".App {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n}\\n.App canvas {\\n  background-color: #0ff;\\n  margin: 0;\\n  padding: 0;\\n}\\n/*# sourceMappingURL=example/src/App/index.css.map */\", \"\", {\"version\":3,\"sources\":[\"/Users/jami/dev/react-touch-zoom-pan-canvas/example/src/App/example/src/App/index.styl\",\"/Users/jami/dev/react-touch-zoom-pan-canvas/example/src/App/index.styl\"],\"names\":[],\"mappings\":\"AAAA;EACE,mBAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;CCCD;ADCC;EACE,uBAAA;EACA,UAAA;EACA,WAAA;CCCH;AACD,qDAAqD\",\"file\":\"index.styl\",\"sourcesContent\":[\".App\\n  position absolute\\n  top 0\\n  left 0\\n  right 0\\n  bottom 0\\n  \\n  canvas\\n    background-color cyan\\n    margin 0\\n    padding 0\",\".App {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n}\\n.App canvas {\\n  background-color: #0ff;\\n  margin: 0;\\n  padding: 0;\\n}\\n/*# sourceMappingURL=example/src/App/index.css.map */\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./example/src/App/index.styl?./node_modules/css-loader??ref--5-1!./node_modules/stylus-loader??ref--5-2");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/stylus-loader/index.js?!./example/src/index.styl":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/stylus-loader??ref--5-2!./example/src/index.styl ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"html,\\nbody {\\n  position: fixed;\\n  overflow: hidden;\\n  margin: 0;\\n  padding: 0;\\n}\\nbody > div {\\n  width: 100vw;\\n  height: 100vh;\\n  overflow-y: scroll;\\n  -webkit-overflow-scrolling: touch;\\n}\\n/*# sourceMappingURL=example/src/index.css.map */\", \"\", {\"version\":3,\"sources\":[\"/Users/jami/dev/react-touch-zoom-pan-canvas/example/src/example/src/index.styl\",\"/Users/jami/dev/react-touch-zoom-pan-canvas/example/src/index.styl\"],\"names\":[],\"mappings\":\"AAAA;;EACE,gBAAA;EACA,iBAAA;EACA,UAAA;EACA,WAAA;CCED;ADAD;EACE,aAAA;EACA,cAAA;EACA,mBAAA;EACA,kCAAA;CCED;AACD,iDAAiD\",\"file\":\"index.styl\",\"sourcesContent\":[\"html, body\\n  position fixed\\n  overflow hidden\\n  margin 0\\n  padding 0\\n\\nbody > div\\n  width 100vw\\n  height 100vh\\n  overflow-y scroll\\n  -webkit-overflow-scrolling touch\\n\",\"html,\\nbody {\\n  position: fixed;\\n  overflow: hidden;\\n  margin: 0;\\n  padding: 0;\\n}\\nbody > div {\\n  width: 100vw;\\n  height: 100vh;\\n  overflow-y: scroll;\\n  -webkit-overflow-scrolling: touch;\\n}\\n/*# sourceMappingURL=example/src/index.css.map */\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./example/src/index.styl?./node_modules/css-loader??ref--5-1!./node_modules/stylus-loader??ref--5-2");

/***/ }),

/***/ "./src/Canvas.tsx":
/*!************************!*\
  !*** ./src/Canvas.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)\n            t[p[i]] = s[p[i]];\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nvar Canvas = (function (_super) {\n    __extends(Canvas, _super);\n    function Canvas() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.canvas = null;\n        _this.ctx = null;\n        _this.matrix = null;\n        _this.requestAnimationFrameId = null;\n        _this._setupCanvas = function (node) {\n            var getContext = _this.props.getContext;\n            _this.canvas = node;\n            _this.ctx = _this.canvas.getContext('2d');\n            if (getContext)\n                getContext(_this.ctx);\n            _this._updateDimensions();\n        };\n        _this._updateDimensions = function () {\n            var _a = _this.props, _b = _a.width, width = _b === void 0 ? 640 : _b, _c = _a.height, height = _c === void 0 ? 480 : _c;\n            _this.canvas.width = width;\n            _this.canvas.height = height;\n            _this.canvas.style.display = 'block';\n            _this.canvas.style.margin = '0px';\n            _this.canvas.style.padding = '0px';\n            _this.canvas.style.width = width + \"px\";\n            _this.canvas.style.height = height + \"px\";\n        };\n        _this._onAnimationFrame = function (time) {\n            var onAnimationFrame = _this.props.onAnimationFrame;\n            if (!_this.canvas || !onAnimationFrame)\n                return;\n            var p1 = utils_1.transformedPoint(0, 0);\n            var p2 = utils_1.transformedPoint(_this.canvas.width, _this.canvas.height);\n            _this.ctx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);\n            onAnimationFrame(_this.ctx, time);\n            _this.requestAnimationFrameId = requestAnimationFrame(_this._onAnimationFrame);\n        };\n        return _this;\n    }\n    Canvas.prototype.componentDidMount = function () {\n        this.requestAnimationFrameId = requestAnimationFrame(this._onAnimationFrame);\n        window.addEventListener('resize', this._updateDimensions);\n    };\n    Canvas.prototype.componentDidUpdate = function () {\n        this._updateDimensions();\n    };\n    Canvas.prototype.componentWillUnmount = function () {\n        cancelAnimationFrame(this.requestAnimationFrameId);\n        window.removeEventListener('resize', this._updateDimensions);\n    };\n    Canvas.prototype.translate = function (x, y) {\n        utils_1.translate(x, y);\n        this.ctx.translate(x, y);\n    };\n    Canvas.prototype.scale = function (x, y) {\n        utils_1.scale(x, y);\n        this.ctx.scale(x, y);\n    };\n    Canvas.prototype.render = function () {\n        var _a = this.props, width = _a.width, height = _a.height, onAnimationFrame = _a.onAnimationFrame, getContext = _a.getContext, props = __rest(_a, [\"width\", \"height\", \"onAnimationFrame\", \"getContext\"]);\n        return React.createElement(\"canvas\", __assign({ ref: this._setupCanvas }, props));\n    };\n    return Canvas;\n}(React.Component));\nexports.Canvas = Canvas;\n\n\n//# sourceURL=webpack:///./src/Canvas.tsx?");

/***/ }),

/***/ "./src/Touch.tsx":
/*!***********************!*\
  !*** ./src/Touch.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)\n            t[p[i]] = s[p[i]];\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nvar WHEEL_MAX = 5;\nvar TOUCH_SENSITIVITY = 5;\nvar Touch = (function (_super) {\n    __extends(Touch, _super);\n    function Touch() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.node = null;\n        _this.lastX = null;\n        _this.lastY = null;\n        _this.panStart = null;\n        _this.panned = false;\n        _this.lastDistance = 0;\n        _this.zoomLevel = 0;\n        _this._setup = function (node) {\n            _this.node = node;\n            _this.node.style.display = 'block';\n            _this.node.style.margin = '0px';\n            _this.node.style.padding = '0px';\n        };\n        _this._updateCoordinatesMouse = function (event) {\n            _this.lastX = event.pageX - _this.node.offsetLeft;\n            _this.lastY = event.pageY - _this.node.offsetTop;\n        };\n        _this._updateCoordinatesTouch = function (event) {\n            _this.lastX = event.targetTouches[0].pageX - _this.node.offsetLeft;\n            _this.lastY = event.targetTouches[0].pageY - _this.node.offsetTop;\n        };\n        _this._onMouseDown = function (event) {\n            event.preventDefault();\n            _this._updateCoordinatesMouse(event);\n            return _this._onPanStart(event);\n        };\n        _this._onTouchStart = function (event) {\n            _this._updateCoordinatesTouch(event);\n            if (event.targetTouches.length > 1)\n                return _this._onPinchStart(event);\n            return _this._onPanStart(event);\n        };\n        _this._onPanStart = function (event) {\n            var onPanStart = _this.props.onPanStart;\n            _this.panStart = utils_1.transformedPoint(_this.lastX, _this.lastY);\n            _this.panned = false;\n            if (onPanStart)\n                onPanStart(event);\n        };\n        _this._onMouseMove = function (event) {\n            event.preventDefault();\n            _this._updateCoordinatesMouse(event);\n            return _this._onPanMove(event);\n        };\n        _this._onTouchMove = function (event) {\n            _this._updateCoordinatesTouch(event);\n            if (event.targetTouches.length > 1)\n                return _this._onPinch(event);\n            return _this._onPanMove(event);\n        };\n        _this._onPanMove = function (event) {\n            var _a = _this.props, onPan = _a.onPan, onTranslate = _a.onTranslate;\n            _this.panned = true;\n            if (_this.panStart) {\n                var pt = utils_1.transformedPoint(_this.lastX, _this.lastY);\n                var x = pt.x - _this.panStart.x;\n                var y = pt.y - _this.panStart.y;\n                utils_1.translate(x, y);\n                if (onTranslate)\n                    onTranslate(x, y);\n            }\n            if (onPan)\n                onPan(event);\n        };\n        _this._onMouseUp = function (event) {\n            event.preventDefault();\n            return _this._onPanEnd(event);\n        };\n        _this._onMouseLeave = function (event) {\n            event.preventDefault();\n            return _this._onPanEnd(event);\n        };\n        _this._onTouchEnd = function (event) {\n            event.preventDefault();\n            if (event.targetTouches.length > 1)\n                return _this._onPinchEnd(event);\n            return _this._onPanEnd(event);\n        };\n        _this._onPanEnd = function (event) {\n            var onPanEnd = _this.props.onPanEnd;\n            _this.panStart = null;\n            if (!_this.panned)\n                _this._zoom(event.shiftKey ? -1 : 1);\n            if (onPanEnd)\n                onPanEnd(event);\n        };\n        _this._zoom = function (clicks) {\n            var _a = _this.props, _b = _a.scaleFactor, scaleFactor = _b === void 0 ? 1.1 : _b, onScale = _a.onScale, onTranslate = _a.onTranslate;\n            if ((_this.zoomLevel + clicks) < 0)\n                return;\n            _this.zoomLevel += clicks;\n            var _c = utils_1.transformedPoint(_this.lastX, _this.lastY), x = _c.x, y = _c.y;\n            utils_1.translate(x, y);\n            if (onTranslate)\n                onTranslate(x, y);\n            var factor = Math.pow(scaleFactor, clicks);\n            utils_1.scale(factor, factor);\n            if (onScale)\n                onScale(factor, factor);\n            utils_1.translate(-x, -y);\n            if (onTranslate)\n                onTranslate(-x, -y);\n        };\n        _this._onPinchStart = function (event) {\n            var onPinchStart = _this.props.onPinchStart;\n            _this.touchCache = [];\n            for (var i = 0; i < event.targetTouches.length; i += 1) {\n                var touch = event.targetTouches[i];\n                _this.touchCache.push(touch);\n            }\n            _this.lastDistance = 0;\n            if (onPinchStart)\n                onPinchStart(event);\n        };\n        _this._onPinch = function (event) {\n            var _a = _this.props, onPinch = _a.onPinch, _b = _a.touchSensitivity, touchSensitivity = _b === void 0 ? TOUCH_SENSITIVITY : _b;\n            var touch1 = event.targetTouches[0];\n            var touch2 = event.targetTouches[1];\n            var startTouch1 = _this.touchCache.find(function (touch) { return touch.identifier === touch1.identifier; });\n            var startTouch2 = _this.touchCache.find(function (touch) { return touch.identifier === touch2.identifier; });\n            _this.lastX = ((touch1.clientX + touch2.clientX) / 2) - _this.node.offsetLeft;\n            _this.lastY = ((touch1.clientY + touch2.clientY) / 2) - _this.node.offsetTop;\n            if (startTouch1 && startTouch2) {\n                var distance = utils_1.getDistance(touch1, touch2);\n                if (_this.lastDistance) {\n                    var initialDistance = utils_1.getDistance(startTouch1, startTouch2);\n                    var ratio = (distance - _this.lastDistance) / initialDistance;\n                    _this._zoom(ratio * touchSensitivity);\n                }\n                _this.lastDistance = distance;\n            }\n            if (onPinch)\n                onPinch(event);\n        };\n        _this._onPinchEnd = function (event) {\n            var onPinchEnd = _this.props.onPinchEnd;\n            if (onPinchEnd)\n                onPinchEnd(event);\n        };\n        _this._onWheel = function (event) {\n            var _a = _this.props.wheelMax, wheelMax = _a === void 0 ? WHEEL_MAX : _a;\n            event.preventDefault();\n            var delta = Math.round(event.deltaY / 10);\n            if (delta < 0 || delta > 0) {\n                if (delta > wheelMax)\n                    delta = wheelMax;\n                else if (delta < -wheelMax)\n                    delta = -wheelMax;\n                _this._zoom(delta);\n            }\n        };\n        return _this;\n    }\n    Touch.prototype.render = function () {\n        var _a = this.props, onPanStart = _a.onPanStart, onPan = _a.onPan, onPanEnd = _a.onPanEnd, onTranslate = _a.onTranslate, onScale = _a.onScale, props = __rest(_a, [\"onPanStart\", \"onPan\", \"onPanEnd\", \"onTranslate\", \"onScale\"]);\n        return (React.createElement(\"div\", __assign({ onMouseDown: this._onMouseDown, onMouseMove: this._onMouseMove, onMouseUp: this._onMouseUp, onMouseLeave: this._onMouseLeave, onWheel: this._onWheel, onTouchStart: this._onTouchStart, onTouchMove: this._onTouchMove, onTouchEnd: this._onTouchEnd, ref: this._setup }, props)));\n    };\n    return Touch;\n}(React.Component));\nexports.Touch = Touch;\n\n\n//# sourceURL=webpack:///./src/Touch.tsx?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./Canvas */ \"./src/Canvas.tsx\"));\n__export(__webpack_require__(/*! ./Touch */ \"./src/Touch.tsx\"));\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\nvar matrix = svg.createSVGMatrix();\nfunction translate(x, y) {\n    return matrix = matrix.translate(x, y);\n}\nexports.translate = translate;\nfunction scale(x, y) {\n    return matrix = matrix.scaleNonUniform(x, y);\n}\nexports.scale = scale;\nfunction transformedPoint(x, y) {\n    var pt = svg.createSVGPoint();\n    pt.x = x;\n    pt.y = y;\n    return pt.matrixTransform(matrix.inverse());\n}\nexports.transformedPoint = transformedPoint;\nfunction getDistance(touch1, touch2) {\n    var a = touch1.clientX - touch2.clientX;\n    var b = touch1.clientY - touch2.clientY;\n    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));\n}\nexports.getDistance = getDistance;\n\n\n//# sourceURL=webpack:///./src/utils.ts?");

/***/ })

},[["./example/src/index.tsx","runtime","vendor"]]]);