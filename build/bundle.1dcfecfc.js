/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "build/" + ({}[chunkId]||chunkId) + "." + {}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-styleguidist/loaders/examples-loader.js!./src/index.md":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-styleguidist/loaders/examples-loader.js!./src/index.md ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\n\nvar requireMap = { 'react': __webpack_require__(/*! react */ \"./node_modules/react/index.js\") };\nvar requireInRuntimeBase = __webpack_require__(/*! ./node_modules/react-styleguidist/loaders/utils/client/requireInRuntime */ \"./node_modules/react-styleguidist/loaders/utils/client/requireInRuntime.js\");\nvar requireInRuntime = requireInRuntimeBase.bind(null, requireMap);\nvar evalInContextBase = __webpack_require__(/*! ./node_modules/react-styleguidist/loaders/utils/client/evalInContext */ \"./node_modules/react-styleguidist/loaders/utils/client/evalInContext.js\");\nvar evalInContext = evalInContextBase.bind(null, \"var React = require('react');\", requireInRuntime);\n\nmodule.exports = [\n    {\n        'type': 'markdown',\n        'content': 'basic example:'\n    },\n    {\n        'type': 'code',\n        'content': '<FlickrHero api_key=\\'1b4e5b0203fab0d5731afe68f0a543e1\\' user_id=\\'132343752@N06\\' limit={9} />',\n        'settings': {},\n        'evalInContext': evalInContext\n    },\n    {\n        'type': 'markdown',\n        'content': 'providing album id example:'\n    },\n    {\n        'type': 'code',\n        'content': '<FlickrHero api_key=\\'1b4e5b0203fab0d5731afe68f0a543e1\\' user_id=\\'132343752@N06\\' album_id=\\'72157694825254121\\' />',\n        'settings': {},\n        'evalInContext': evalInContext\n    },\n    {\n        'type': 'markdown',\n        'content': 'just searchTerm example:'\n    },\n    {\n        'type': 'code',\n        'content': '<FlickrHero api_key=\\'1b4e5b0203fab0d5731afe68f0a543e1\\' searchTerm=\\'cats\\' limit={3} />',\n        'settings': {},\n        'evalInContext': evalInContext\n    },\n    {\n        'type': 'markdown',\n        'content': 'no user id, album id or searchTerm example:'\n    },\n    {\n        'type': 'code',\n        'content': '<FlickrHero api_key=\\'1b4e5b0203fab0d5731afe68f0a543e1\\' />',\n        'settings': {},\n        'evalInContext': evalInContext\n    }\n]\n\t\n\n//# sourceURL=webpack:///./src/index.md?./node_modules/react-styleguidist/loaders/examples-loader.js");

/***/ }),

/***/ "./node_modules/react-styleguidist/loaders/props-loader.js!./src/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-styleguidist/loaders/props-loader.js!./src/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\n\nmodule.exports = {\n    'description': 'generates a hero image using the given flickr api key and details\\n',\n    'displayName': 'FlickrHero',\n    'methods': [],\n    'props': [\n        {\n            'type': { 'name': 'string' },\n            'required': true,\n            'description': 'api key for accessing flickr (see [here](https://www.flickr.com/services/api/misc.api_keys.html) for more details)',\n            'tags': {},\n            'name': 'api_key'\n        },\n        {\n            'type': { 'name': 'string' },\n            'required': false,\n            'description': 'flickr album id to fetch photos from',\n            'tags': {},\n            'name': 'album_id'\n        },\n        {\n            'type': { 'name': 'string' },\n            'required': false,\n            'description': 'class name to be applied to root div',\n            'tags': {},\n            'name': 'className'\n        },\n        {\n            'type': { 'name': 'bool' },\n            'required': false,\n            'description': 'sets container to fill page if passed',\n            'tags': {},\n            'name': 'fillPage'\n        },\n        {\n            'type': { 'name': 'number' },\n            'required': false,\n            'description': 'integer limit of photos to picked from',\n            'tags': {},\n            'name': 'limit'\n        },\n        {\n            'type': { 'name': 'string' },\n            'required': false,\n            'description': 'search term used to filter photos (searches using title, description and tags)',\n            'tags': {},\n            'name': 'searchTerm'\n        },\n        {\n            'type': { 'name': 'string' },\n            'required': false,\n            'description': 'flickr user id of user to fetch photos from',\n            'tags': {},\n            'name': 'user_id'\n        }\n    ],\n    'doclets': {},\n    'tags': {},\n    'examples': __webpack_require__(/*! !./node_modules/react-styleguidist/loaders/examples-loader.js!./src/index.md */ \"./node_modules/react-styleguidist/loaders/examples-loader.js!./src/index.md\")\n}\n\t\n\n//# sourceURL=webpack:///./src/index.js?./node_modules/react-styleguidist/loaders/props-loader.js");

/***/ }),

/***/ "./src/components/hero.js":
/*!********************************!*\
  !*** ./src/components/hero.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_load_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-load-image */ \"./node_modules/react-load-image/lib/index.js\");\n/* harmony import */ var react_load_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_load_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject = _taggedTemplateLiteralLoose(['\\n  overflow: hidden;\\n\\n  ', '\\n\\n  ', '\\n'], ['\\n  overflow: hidden;\\n\\n  ', '\\n\\n  ', '\\n']),\n    _templateObject2 = _taggedTemplateLiteralLoose(['\\n    padding-top: 0;\\n    width: 100vw;\\n    height: 100vh;\\n  '], ['\\n    padding-top: 0;\\n    width: 100vw;\\n    height: 100vh;\\n  ']),\n    _templateObject3 = _taggedTemplateLiteralLoose(['\\n    &:after {\\n      background: #292929;\\n      opacity: 0.4;\\n      content: \"\";\\n      width: 100%;\\n      height: auto;\\n      position: absolute;\\n      top: 0;\\n      right: 0;\\n      left: 0;\\n      bottom: 0;\\n    }\\n  '], ['\\n    &:after {\\n      background: #292929;\\n      opacity: 0.4;\\n      content: \"\";\\n      width: 100%;\\n      height: auto;\\n      position: absolute;\\n      top: 0;\\n      right: 0;\\n      left: 0;\\n      bottom: 0;\\n    }\\n  ']),\n    _templateObject4 = _taggedTemplateLiteralLoose(['\\n  position: relative;\\n  margin: 0;\\n  padding: 0;\\n  width: 100%;\\n  background: #4966B1;\\n  padding-top: calc(100% * ', ');\\n  filter: blur(30px);\\n  transform: scale(1.1);\\n\\n  @keyframes reveal { from { filter:blur(30px); transform: scale(1.1); } to { filter:blur(0px); transform: scale(1.0); }  }\\n\\n  ', '\\n\\n  ', '\\n\\n  ', '\\n'], ['\\n  position: relative;\\n  margin: 0;\\n  padding: 0;\\n  width: 100%;\\n  background: #4966B1;\\n  padding-top: calc(100% * ', ');\\n  filter: blur(30px);\\n  transform: scale(1.1);\\n\\n  @keyframes reveal { from { filter:blur(30px); transform: scale(1.1); } to { filter:blur(0px); transform: scale(1.0); }  }\\n\\n  ', '\\n\\n  ', '\\n\\n  ', '\\n']),\n    _templateObject5 = _taggedTemplateLiteralLoose(['\\n    background: url(', ');\\n    background-repeat: no-repeat;\\n    background-size: contain;\\n    image-rendering: -webkit-optimize-contrast;\\n    animation: 0.5s linear forwards reveal;\\n  '], ['\\n    background: url(', ');\\n    background-repeat: no-repeat;\\n    background-size: contain;\\n    image-rendering: -webkit-optimize-contrast;\\n    animation: 0.5s linear forwards reveal;\\n  ']),\n    _templateObject6 = _taggedTemplateLiteralLoose(['\\n    background-image: url(', ');\\n    background-repeat: no-repeat;\\n    background-size: contain;\\n    image-rendering: -webkit-optimize-contrast;\\n  '], ['\\n    background-image: url(', ');\\n    background-repeat: no-repeat;\\n    background-size: contain;\\n    image-rendering: -webkit-optimize-contrast;\\n  ']),\n    _templateObject7 = _taggedTemplateLiteralLoose(['\\n    background-size: cover;\\n    height: 100vh;\\n  '], ['\\n    background-size: cover;\\n    height: 100vh;\\n  ']);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }\n\n\n\n\n\nvar HeroContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(react_load_image__WEBPACK_IMPORTED_MODULE_1___default.a)(_templateObject, function (props) {\n  return props.fillPage && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject2);\n}, function (props) {\n  return props.fillPage && props.overlay && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject3);\n});\nvar HeroImage = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4, function (props) {\n  return props.aspectRatio;\n}, function (props) {\n  return props.src && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject5, function (props) {\n    return props.src;\n  });\n}, function (props) {\n  return props.thumbnail && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject6, function (props) {\n    return props.thumbnail;\n  });\n}, function (props) {\n  return props.fillPage && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject7);\n});\n\nvar Hero = function (_React$Component) {\n  _inherits(Hero, _React$Component);\n\n  function Hero() {\n    _classCallCheck(this, Hero);\n\n    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));\n  }\n\n  Hero.prototype.render = function render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      HeroContainer,\n      { overlay: true, src: this.props.img, fillPage: this.props.fillPage },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroImage, { aspectRatio: this.props.aspectRatio, fillPage: this.props.fillPage }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: this.props.img }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroImage, { aspectRatio: this.props.aspectRatio, thumbnail: this.props.thumbnail, fillPage: this.props.fillPage })\n    );\n  };\n\n  return Hero;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\n//# sourceURL=webpack:///./src/components/hero.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var build_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! build-url */ \"./node_modules/build-url/dist/build-url.js\");\n/* harmony import */ var build_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(build_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/hero */ \"./src/components/hero.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _class, _temp, _initialiseProps;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n/**\n * generates a hero image using the given flickr api key and details\n */\nvar FlickrHero = (_temp = _class = function (_Component) {\n  _inherits(FlickrHero, _Component);\n\n  function FlickrHero(props) {\n    _classCallCheck(this, FlickrHero);\n\n    var _this = _possibleConstructorReturn(this, _Component.call(this, props));\n\n    _initialiseProps.call(_this);\n\n    _this.state = { images: [] };\n    return _this;\n  }\n\n  FlickrHero.prototype.componentWillMount = function componentWillMount() {\n    this.queryFlickrApi(this.props);\n  };\n\n  FlickrHero.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {\n    this.queryFlickrApi(nextProps);\n  };\n\n  FlickrHero.prototype.render = function render() {\n    var image = this.state.images[Math.floor(Math.random() * this.state.images.length)];\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _extends({\n      img: image ? image.src : '',\n      thumbnail: image ? image.thumbnail : '',\n      aspectRatio: image ? image.aspectRatio : 0\n    }, this.props));\n  };\n\n  return FlickrHero;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]), _initialiseProps = function _initialiseProps() {\n  var _this2 = this;\n\n  this.generateApiUrl = function (props) {\n    var extras = [\"url_o\", \"url_m\", \"url_t\"];\n    return build_url__WEBPACK_IMPORTED_MODULE_2___default()('https://api.flickr.com', {\n      path: 'services/rest/',\n      queryParams: {\n        method: props.album_id ? 'flickr.photosets.getPhotos' : props.user_id || props.searchTerm ? 'flickr.photos.search' : 'flickr.photos.getRecent',\n        format: 'json',\n        api_key: props.api_key || '',\n        user_id: props.user_id || '',\n        photoset_id: props.album_id || '',\n        text: props.searchTerm || '',\n        per_page: props.limit || (props.album_id ? Number.MAX_SAFE_INTEGER : 1),\n        nojsoncallback: '?',\n        extras: extras.join(',')\n      }\n    });\n  };\n\n  this.queryFlickrApi = function (props) {\n    isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default()(_this2.generateApiUrl(props)).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      var photos = [];\n      if (data.photoset) {\n        photos = data.photoset.photo;\n      } else if (data.photos) {\n        photos = data.photos.photo;\n      } else {\n        throw data;\n      }\n      _this2.setState({\n        images: photos.map(function (p) {\n          return {\n            src: p.url_o || p.url_m || 'https://s.yimg.com/pw/images/en-us/photo_unavailable.png',\n            thumbnail: p.url_t,\n            aspectRatio: Math.min(p.height_t, p.width_t) / Math.max(p.height_t, p.width_t)\n          };\n        })\n      });\n    }).catch(function (e) {\n      return console.error(e);\n    });\n  };\n}, _temp);\n\n\nFlickrHero.propTypes = {\n  /**\n  * api key for accessing flickr (see [here](https://www.flickr.com/services/api/misc.api_keys.html) for more details)\n  */\n  api_key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  /**\n  * flickr user id of user to fetch photos from\n  */\n  user_id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  /**\n  * flickr album id to fetch photos from\n  */\n  album_id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  /**\n  * integer limit of photos to picked from\n  */\n  limit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  /**\n  * search term used to filter photos (searches using title, description and tags)\n  */\n  searchTerm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  /**\n  * sets container to fill page if passed\n  */\n  fillPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  /**\n  * class name to be applied to root div\n  */\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlickrHero);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!*********************************************************!*\
  !*** multi ./node_modules/react-styleguidist/lib/index ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/ubuntu/react-flickr-hero/node_modules/react-styleguidist/lib/index */\"./node_modules/react-styleguidist/lib/index.js\");\n\n\n//# sourceURL=webpack:///multi_./node_modules/react-styleguidist/lib/index?");

/***/ })

/******/ });