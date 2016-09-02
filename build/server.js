require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _stringify = __webpack_require__(1);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _toConsumableArray2 = __webpack_require__(2);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _keys = __webpack_require__(3);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _set = __webpack_require__(4);
  
  var _set2 = _interopRequireDefault(_set);
  
  var _extends2 = __webpack_require__(5);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _regenerator = __webpack_require__(6);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  __webpack_require__(8);
  
  var _path = __webpack_require__(9);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(10);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _cookieParser = __webpack_require__(11);
  
  var _cookieParser2 = _interopRequireDefault(_cookieParser);
  
  var _bodyParser = __webpack_require__(12);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var _expressJwt = __webpack_require__(13);
  
  var _expressJwt2 = _interopRequireDefault(_expressJwt);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _server = __webpack_require__(15);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _Html = __webpack_require__(16);
  
  var _Html2 = _interopRequireDefault(_Html);
  
  var _ErrorPage = __webpack_require__(22);
  
  var _ErrorPage2 = __webpack_require__(24);
  
  var _ErrorPage3 = _interopRequireDefault(_ErrorPage2);
  
  var _universalRouter = __webpack_require__(31);
  
  var _universalRouter2 = _interopRequireDefault(_universalRouter);
  
  var _prettyError = __webpack_require__(32);
  
  var _prettyError2 = _interopRequireDefault(_prettyError);
  
  var _routes = __webpack_require__(33);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _assets = __webpack_require__(112);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  var _config = __webpack_require__(66);
  
  var _cookiesManager = __webpack_require__(113);
  
  var _UserInfo = __webpack_require__(60);
  
  var _syncStore = __webpack_require__(67);
  
  var _HTTPUtils = __webpack_require__(68);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import expressGraphQL from 'express-graphql';
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var app = (0, _express2.default)();
  
  //
  // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
  // user agent is not known.
  // -----------------------------------------------------------------------------
  
  
  // import { getToken } from './core/token';
  // eslint-disable-line import/no-unresolved
  
  // import passport from './core/passport';
  // import models from './data/models';
  // import schema from './data/schema';
  global.navigator = global.navigator || {};
  global.navigator.userAgent = global.navigator.userAgent || 'all';
  
  //
  // Register Node.js middleware
  // -----------------------------------------------------------------------------
  app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
  app.use((0, _cookieParser2.default)());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json());
  
  //
  // Authentication
  // -----------------------------------------------------------------------------
  app.use((0, _expressJwt2.default)({
      secret: _config.auth.jwt.secret,
      credentialsRequired: false,
      getToken: function getToken(req) {
          return req.cookies.id_token;
      }
  }));
  // app.use(passport.initialize());
  
  app.post('/validate', function (req, res) {
      // TODO change to backend API
      res.send(false);
  });
  
  app.post('/signin', function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
          return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                  switch (_context.prev = _context.next) {
                      case 0:
                          // TODO: send the body to server to validate and fetch userInfo
                          (0, _HTTPUtils.httpPostJSON)('/validate', { username: 'hah', nike: 'gogo' }).then(function (data) {
                              // if the user is valid then generateCookie
                              //   generateCookie(userinfo, auth, res);
                              // if invalide then sync error state
                              if (!data) {
                                  _UserInfo.userInfo.loginErr = true;
                                  res.redirect('/detail/88');
                              }
                              // redirect to the page login
                              // if valid
                              // TODO update user state
                              res.redirect('/');
                          });
  
                      case 1:
                      case 'end':
                          return _context.stop();
                  }
              }
          }, _callee, undefined);
      }));
  
      return function (_x, _x2) {
          return _ref.apply(this, arguments);
      };
  }());
  
  app.post('/signup', function (req, res) {
      console.log('signup here');
      // TODO: send the body to server and fetch userInfo
      var userinfo = {
          id: '1111',
          name: 'testName',
          userPreviligy: 'admin'
      };
      //  test the http post
      // res.send(userinfo)
      (0, _cookiesManager.generateCookie)(userinfo, _config.auth, res);
      // TODO update user state
  
      res.redirect('/');
  });
  
  app.use(function (req, res, next) {
      if (!!req.user) {
          // get userInfo
          _UserInfo.userInfo.update((0, _extends3.default)({}, req.user, { authorize: true }));
          next();
      } else {
          next();
      }
  });
  
  // app.get('/login/facebook/return',
  //     (req, res) => {
  //         const expiresIn = 60 * 60 * 24 * 180; // 180 days
  //         const token = jwt.sign(req.user, auth.jwt.secret, { expiresIn });
  //         res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
  //         res.redirect('/');
  //     }
  // );
  
  //
  // Register API middleware
  // -----------------------------------------------------------------------------
  // app.use('/graphql', expressGraphQL(req => ({
  //   schema,
  //   graphiql: true,
  //   rootValue: { request: req },
  //   pretty: process.env.NODE_ENV !== 'production',
  // })));
  
  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  app.get('*', function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(req, res, next) {
          return _regenerator2.default.wrap(function _callee3$(_context3) {
              while (1) {
                  switch (_context3.prev = _context3.next) {
                      case 0:
                          _context3.prev = 0;
                          return _context3.delegateYield(_regenerator2.default.mark(function _callee2() {
                              var css, statusCode, scripts, data, html;
                              return _regenerator2.default.wrap(function _callee2$(_context2) {
                                  while (1) {
                                      switch (_context2.prev = _context2.next) {
                                          case 0:
                                              css = new _set2.default();
                                              statusCode = 200;
                                              scripts = (0, _keys2.default)(_assets2.default).map(function (key) {
                                                  return _assets2.default[key];
                                              });
                                              data = {
                                                  title: '',
                                                  description: '',
                                                  style: '',
                                                  script: scripts.map(function (key) {
                                                      return key.js;
                                                  }),
                                                  children: ''
                                              };
                                              _context2.next = 6;
                                              return _universalRouter2.default.resolve(_routes2.default, {
                                                  path: req.path,
                                                  query: req.query,
                                                  context: {
                                                      insertCss: function insertCss() {
                                                          for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
                                                              styles[_key] = arguments[_key];
                                                          }
  
                                                          styles.forEach(function (style) {
                                                              return css.add(style._getCss());
                                                          }); // eslint-disable-line no-underscore-dangle, max-len
                                                      },
                                                      setTitle: function setTitle(value) {
                                                          return data.title = value;
                                                      },
                                                      setMeta: function setMeta(key, value) {
                                                          return data[key] = value;
                                                      }
                                                  },
                                                  render: function render(component) {
                                                      var status = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];
  
                                                      css = new _set2.default();
                                                      statusCode = status;
                                                      data.children = _server2.default.renderToString(component);
                                                      data.style = [].concat((0, _toConsumableArray3.default)(css)).join('');
                                                      return true;
                                                  }
                                              });
  
                                          case 6:
                                              // console.log(JSON.stringify(getStore()), 'before embem in html');
                                              html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, (0, _extends3.default)({}, data, { store: (0, _stringify2.default)((0, _syncStore.getStore)())
                                              })));
  
                                              (0, _syncStore.clearStore)();
  
                                              res.status(statusCode);res.send('<!doctype html>' + html);
  
                                          case 10:
                                          case 'end':
                                              return _context2.stop();
                                      }
                                  }
                              }, _callee2, undefined);
                          })(), 't0', 2);
  
                      case 2:
                          _context3.next = 7;
                          break;
  
                      case 4:
                          _context3.prev = 4;
                          _context3.t1 = _context3['catch'](0);
  
                          next(_context3.t1);
  
                      case 7:
                      case 'end':
                          return _context3.stop();
                  }
              }
          }, _callee3, undefined, [[0, 4]]);
      }));
  
      return function (_x3, _x4, _x5) {
          return _ref2.apply(this, arguments);
      };
  }());
  
  //
  // Error handling
  // -----------------------------------------------------------------------------
  var pe = new _prettyError2.default();pe.skipNodeFiles();pe.skipPackage('express');
  
  app.use(function (err, req, res, next) {
      // eslint-disable-line no-unused-vars
      console.log(pe.render(err)); // eslint-disable-line no-console
      var statusCode = err.status || 500;
      var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(
          _Html2.default,
          {
              title: 'Internal Server Error',
              description: err.message,
              style: _ErrorPage3.default._getCss() },
          ' ',
          _server2.default.renderToString(_react2.default.createElement(_ErrorPage.ErrorPage, { error: err }))
      ));
      res.status(statusCode);
      res.send('<!doctype html>' + html);
  });
  
  //
  // Launch the server
  // -----------------------------------------------------------------------------
  /* eslint-disable no-console */
  
  app.listen(_config.port, function () {
      console.log('The server is running at http://localhost:' + _config.port + '/');
  });
  
  /* eslint-enable no-console */

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/keys");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/set");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ },
/* 9 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("cookie-parser");

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("express-jwt");

/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(20);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Html = function (_Component) {
    (0, _inherits3.default)(Html, _Component);
  
    function Html() {
      (0, _classCallCheck3.default)(this, Html);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Html).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Html, [{
      key: "render",
      value: function render() {
        var _props = this.props;
        var title = _props.title;
        var description = _props.description;
        var style = _props.style;
        var script = _props.script;
        var children = _props.children;
        var store = _props.store;
  
        return _react2.default.createElement(
          "html",
          { className: "no-js", lang: "" },
          _react2.default.createElement(
            "head",
            null,
            _react2.default.createElement("meta", { charSet: "utf-8" }),
            _react2.default.createElement("meta", { httpEquiv: "x-ua-compatible", content: "ie=edge" }),
            _react2.default.createElement(
              "title",
              null,
              title
            ),
            _react2.default.createElement("meta", { name: "description", content: description }),
            _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
            _react2.default.createElement("link", { rel: "apple-touch-icon", href: "apple-touch-icon.png" }),
            _react2.default.createElement("style", { id: "css", dangerouslySetInnerHTML: { __html: style } }),
            _react2.default.createElement("script", { id: "store", "data-initial-state": store })
          ),
          _react2.default.createElement(
            "body",
            null,
            _react2.default.createElement("div", { id: "app", dangerouslySetInnerHTML: { __html: children } }),
            script && script.map(function (add, index) {
              return _react2.default.createElement("script", { key: index, src: add });
            })
          )
        );
      }
    }]);
    return Html;
  }(_react.Component);
  
  Html.propTypes = {
    title: _react.PropTypes.string.isRequired,
    description: _react.PropTypes.string.isRequired,
    style: _react.PropTypes.string.isRequired,
    script: _react.PropTypes.array,
    children: _react.PropTypes.string,
    store: _react.PropTypes.string
  };
  
  exports.default = Html;

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ErrorPage = ErrorPage;
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(23);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ErrorPage = __webpack_require__(24);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function ErrorPage(_ref, context) {
    var error = _ref.error;
  
    var title = 'Error';
    var content = 'Sorry, a critical error occurred on this page.';
    var errorMessage = null;
  
    if (error.status === 404) {
      title = 'Page Not Found';
      content = 'Sorry, the page you were trying to view does not exist.';
    } else if (true) {
      errorMessage = _react2.default.createElement(
        'pre',
        null,
        error.stack
      );
    }
  
    if (context.setTitle) {
      context.setTitle(title);
    }
  
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        title
      ),
      _react2.default.createElement(
        'p',
        null,
        content
      ),
      errorMessage
    );
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  ErrorPage.propTypes = { error: _react.PropTypes.object.isRequired };
  ErrorPage.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_ErrorPage2.default)(ErrorPage);

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(25);
      var insertCss = __webpack_require__(27);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./ErrorPage.css", function() {
          content = require("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./ErrorPage.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(26)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  /* stylelint-disable */\n  margin: 2em auto;\n  /* stylelint-enable */\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 32px;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n\n}\n", "", {"version":3,"sources":["/./routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,iBAAiB;EACjB,UAAU;CACX;;AAED;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,oBAAoB;EACpB,uBAAuB;EACvB,uBAAuB;EACvB,iBAAiB;EACjB,sBAAsB;CACvB;;AAED;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;EACE,iBAAiB;EACjB,iBAAiB;EAAjB,iBAAiB;CAClB;;AAED;;EAEE;;IAEE,WAAW;GACZ;;EAED;IACE,iBAAiB;IACjB,kBAAkB;GACnB;;CAEF","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  /* stylelint-disable */\n  margin: 2em auto;\n  /* stylelint-enable */\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 26 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(28);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _stringify = __webpack_require__(1);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _slicedToArray2 = __webpack_require__(29);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _getIterator2 = __webpack_require__(30);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Isomorphic CSS style loader for Webpack
   *
   * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var prefix = 's';
  var inserted = {};
  
  // Base64 encoding and decoding - The "Unicode Problem"
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
  }
  
  /**
   * Remove style/link elements for specified node IDs
   * if they are no longer referenced by UI components.
   */
  function removeCss(ids) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
  
    try {
      for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;
  
        if (--inserted[id] <= 0) {
          var elem = document.getElementById(prefix + id);
          if (elem) {
            elem.parentNode.removeChild(elem);
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  
  /**
   * Example:
   *   // Insert CSS styles object generated by `css-loader` into DOM
   *   var removeCss = insertCss([[1, 'body { color: red; }']]);
   *
   *   // Remove it from the DOM
   *   removeCss();
   */
  function insertCss(styles, options) {
    var _Object$assign = (0, _assign2.default)({
      replace: false,
      prepend: false
    }, options);
  
    var replace = _Object$assign.replace;
    var prepend = _Object$assign.prepend;
  
  
    var ids = [];
    for (var i = 0; i < styles.length; i++) {
      var _styles$i = (0, _slicedToArray3.default)(styles[i], 4);
  
      var moduleId = _styles$i[0];
      var css = _styles$i[1];
      var media = _styles$i[2];
      var sourceMap = _styles$i[3];
  
      var id = moduleId + '-' + i;
  
      ids.push(id);
  
      if (inserted[id]) {
        if (!replace) {
          inserted[id]++;
          continue;
        }
      }
  
      inserted[id] = 1;
  
      var elem = document.getElementById(prefix + id);
      var create = false;
  
      if (!elem) {
        create = true;
  
        elem = document.createElement('style');
        elem.setAttribute('type', 'text/css');
        elem.id = prefix + id;
  
        if (media) {
          elem.setAttribute('media', media);
        }
      }
  
      var cssText = css;
      if (sourceMap) {
        cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
        cssText += '\n/*# sourceURL=' + sourceMap.file + '*/';
      }
  
      if ('textContent' in elem) {
        elem.textContent = cssText;
      } else {
        elem.styleSheet.cssText = cssText;
      }
  
      if (create) {
        if (prepend) {
          document.head.insertBefore(elem, document.head.childNodes[0]);
        } else {
          document.head.appendChild(elem);
        }
      }
    }
  
    return removeCss.bind(null, ids);
  }
  
  module.exports = insertCss;

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/assign");

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 30 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 31 */
/***/ function(module, exports) {

  module.exports = require("universal-router");

/***/ },
/* 32 */
/***/ function(module, exports) {

  module.exports = require("pretty-error");

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(6);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _App = __webpack_require__(34);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _home = __webpack_require__(58);
  
  var _home2 = _interopRequireDefault(_home);
  
  var _contact = __webpack_require__(73);
  
  var _contact2 = _interopRequireDefault(_contact);
  
  var _login = __webpack_require__(88);
  
  var _login2 = _interopRequireDefault(_login);
  
  var _register = __webpack_require__(92);
  
  var _register2 = _interopRequireDefault(_register);
  
  var _content = __webpack_require__(99);
  
  var _content2 = _interopRequireDefault(_content);
  
  var _error = __webpack_require__(105);
  
  var _error2 = _interopRequireDefault(_error);
  
  var _detail = __webpack_require__(106);
  
  var _detail2 = _interopRequireDefault(_detail);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/',
  
    // keep in mind, routes are evaluated in order
    children: [_home2.default, _contact2.default, _login2.default, _register2.default, _detail2.default,
    // place new routes before...
    _content2.default, _error2.default],
  
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next;
      var render = _ref.render;
      var context = _ref.context;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                component = _context.sent;
  
                if (!(component === undefined)) {
                  _context.next = 5;
                  break;
                }
  
                return _context.abrupt('return', component);
  
              case 5:
                return _context.abrupt('return', render(_react2.default.createElement(
                  _App2.default,
                  { context: context },
                  component
                )));
  
              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };
  
  // Child routes
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(20);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _temp; /**
                      * React Starter Kit (https://www.reactstarterkit.com/)
                      *
                      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                      *
                      * This source code is licensed under the MIT license found in the
                      * LICENSE.txt file in the root directory of this source tree.
                      */
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _emptyFunction = __webpack_require__(35);
  
  var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
  
  var _App = __webpack_require__(36);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _Header = __webpack_require__(38);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Feedback = __webpack_require__(52);
  
  var _Feedback2 = _interopRequireDefault(_Feedback);
  
  var _Footer = __webpack_require__(55);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var App = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(App, _Component);
  
    function App() {
      (0, _classCallCheck3.default)(this, App);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
    }
  
    (0, _createClass3.default)(App, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var context = this.props.context;
        return {
          insertCss: context.insertCss || _emptyFunction2.default,
          setTitle: context.setTitle || _emptyFunction2.default,
          setMeta: context.setMeta || _emptyFunction2.default
        };
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var insertCss = this.props.context.insertCss;
  
        this.removeCss = insertCss(_App2.default);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.removeCss();
      }
    }, {
      key: 'render',
      value: function render() {
        return !this.props.error ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Header2.default, null),
          this.props.children,
          _react2.default.createElement(_Feedback2.default, null),
          _react2.default.createElement(_Footer2.default, null)
        ) : this.props.children;
      }
    }]);
    return App;
  }(_react.Component), _class.propTypes = {
    context: _react.PropTypes.shape({
      insertCss: _react.PropTypes.func,
      setTitle: _react.PropTypes.func,
      setMeta: _react.PropTypes.func
    }),
    children: _react.PropTypes.element.isRequired,
    error: _react.PropTypes.object
  }, _class.childContextTypes = {
    insertCss: _react.PropTypes.func.isRequired,
    setTitle: _react.PropTypes.func.isRequired,
    setMeta: _react.PropTypes.func.isRequired
  }, _temp);
  exports.default = App;

/***/ },
/* 35 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/emptyFunction");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(37);
      var insertCss = __webpack_require__(27);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./App.css", function() {
          content = require("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./App.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(26)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/./components/App/App.css","/../node_modules/normalize.css/normalize.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH,4EAA4E;;AAE5E;;;GAGG;;AAEH;EACE,wBAAwB,CAAC,OAAO;EAChC,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;gFACgF;;AAEhF;;;;GAIG;;AAEH;;;;;;;;;;;UAWU,OAAO;EACf,eAAe;CAChB;;AAED;;GAEG;;AAEH;;;;EAIE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;;EAEE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,sCAAsC,CAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;;EAEE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,oBAAoB,CAAC,OAAO;EAC5B,2BAA2B,CAAC,OAAO;EACnC,kCAAkC,CAAC,OAAO;CAC3C;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;EAIE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,gCAAwB;UAAxB,wBAAwB,CAAC,OAAO;EAChC,UAAU,CAAC,OAAO;EAClB,kBAAkB,CAAC,OAAO;CAC3B;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;EAIE,cAAc,CAAC,OAAO;EACtB,UAAU,CAAC,OAAO;CACnB;;AAED;;GAEG;;AAEH;EACE,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;SACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,CAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,0BAA0B;EAC1B,cAAc;EACd,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,+BAAuB;UAAvB,uBAAuB,CAAC,OAAO;EAC/B,eAAe,CAAC,OAAO;EACvB,eAAe,CAAC,OAAO;EACvB,gBAAgB,CAAC,OAAO;EACxB,WAAW,CAAC,OAAO;EACnB,oBAAoB,CAAC,OAAO;CAC7B;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,+BAAuB;UAAvB,uBAAuB,CAAC,OAAO;EAC/B,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,qBAAqB,CAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,cAAc;CACf;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,CAAC,OAAO;EACnC,cAAc,CAAC,OAAO;CACvB;;ADvZD,yEAAyE;;AEXzE;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AFfD;;gFAEgF;;AAEhF;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe,CAAC,YAAY;EAC5B,2DAAqC;EACrC,mBAAmB,CAAC,WAAW;CAChC;;AAED;EACE,eAAe;CAChB;;AAGD;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAED;;;;GAIG;;AAEH;;;;;;EAME,uBAAuB;CACxB;;AAED;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAED;;;;gFAIgF;;AAEhF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,oCAA4B;YAA5B,4BAA4B;IAC5B,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"App.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../../node_modules/normalize.css/normalize.css';\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n@import '../variables.css';\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: var(--font-family-base);\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n","/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(20);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _dec, _class; /**
                     * React Starter Kit (https://www.reactstarterkit.com/)
                     *
                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                     *
                     * This source code is licensed under the MIT license found in the
                     * LICENSE.txt file in the root directory of this source tree.
                     */
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(23);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Header = __webpack_require__(39);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Link = __webpack_require__(41);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _Navigation = __webpack_require__(47);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var _logoSmall = __webpack_require__(51);
  
  var _logoSmall2 = _interopRequireDefault(_logoSmall);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // function Header() {
  //   return (
  //     <div className={s.root}>
  //       <div className={s.container}>
  //         <Navigation className={s.nav} />
  //         <Link className={s.brand} to="/">
  //           <img src={logoUrl} width="38" height="38" alt="React" />
  //           <span className={s.brandTxt}>Your Company</span>
  //         </Link>
  //         <div className={s.banner}>
  //           <h1 className={s.bannerTitle}>React</h1>
  //           <p className={s.bannerDesc}>Complex web apps made easy</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  
  var Header = (_dec = (0, _withStyles2.default)(_Header2.default), _dec(_class = function (_Component) {
    (0, _inherits3.default)(Header, _Component);
  
    function Header() {
      (0, _classCallCheck3.default)(this, Header);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Header).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Header, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Header2.default.root },
          _react2.default.createElement(
            'div',
            { className: _Header2.default.container },
            _react2.default.createElement(_Navigation2.default, { className: _Header2.default.nav }),
            _react2.default.createElement(
              _Link2.default,
              { className: _Header2.default.brand, to: '/' },
              _react2.default.createElement('img', { src: _logoSmall2.default, width: '38', height: '38', alt: 'React' }),
              _react2.default.createElement(
                'span',
                { className: _Header2.default.brandTxt },
                'Your Company'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _Header2.default.banner },
              _react2.default.createElement(
                'h1',
                { className: _Header2.default.bannerTitle },
                'React'
              ),
              _react2.default.createElement(
                'p',
                { className: _Header2.default.bannerDesc },
                'Complex web apps made easy'
              )
            )
          )
        );
      }
    }]);
    return Header;
  }(_react.Component)) || _class);
  exports.default = Header;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(40);
      var insertCss = __webpack_require__(27);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Header.css", function() {
          content = require("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Header.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(26)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Header_root_AA5 {\n  background: #373277;\n  color: #fff;\n}\n\n.Header_container_2Ar {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: 1000px;\n}\n\n.Header_brand_w2l {\n  color: rgb(146, 229, 252);\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.Header_brandTxt_Qj7 {\n  margin-left: 10px;\n}\n\n.Header_nav_2n3 {\n  float: right;\n  margin-top: 6px;\n}\n\n.Header_banner_2t0 {\n  text-align: center;\n}\n\n.Header_bannerTitle_3Hr {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.Header_bannerDesc_32d {\n  padding: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 1.25em;\n  margin: 0;\n}\n", "", {"version":3,"sources":["/./components/Header/Header.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADfD;EACE,oBAAoB;EACpB,YAAY;CACb;;AAED;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAoC;CACrC;;AAED;EACE,0BAAiD;EACjD,sBAAsB;EACtB,kBAAkB,CAAC,WAAW;CAC/B;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,aAAa;EACb,gBAAgB;CACjB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,UAAU;EACV,cAAc;EACd,oBAAoB;EACpB,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,WAAW;EACX,gCAAgC;EAChC,kBAAkB;EAClB,UAAU;CACX","file":"Header.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n:root {\n  --brand-color: #61dafb;\n}\n\n.root {\n  background: #373277;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: var(--max-content-width);\n}\n\n.brand {\n  color: color(var(--brand-color) lightness(+10%));\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.brandTxt {\n  margin-left: 10px;\n}\n\n.nav {\n  float: right;\n  margin-top: 6px;\n}\n\n.banner {\n  text-align: center;\n}\n\n.bannerTitle {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.bannerDesc {\n  padding: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 1.25em;\n  margin: 0;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Header_root_AA5",
  	"container": "Header_container_2Ar",
  	"brand": "Header_brand_w2l",
  	"brandTxt": "Header_brandTxt_Qj7",
  	"nav": "Header_nav_2n3",
  	"banner": "Header_banner_2t0",
  	"bannerTitle": "Header_bannerTitle_3Hr",
  	"bannerDesc": "Header_bannerDesc_32d"
  };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(5);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _objectWithoutProperties2 = __webpack_require__(42);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(20);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _temp2; /**
                       * React Starter Kit (https://www.reactstarterkit.com/)
                       *
                       * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                       *
                       * This source code is licensed under the MIT license found in the
                       * LICENSE.txt file in the root directory of this source tree.
                       */
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(43);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function isLeftClickEvent(event) {
    return event.button === 0;
  }
  
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  
  var Link = (_temp2 = _class = function (_Component) {
    (0, _inherits3.default)(Link, _Component);
  
    function Link() {
      var _Object$getPrototypeO;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, Link);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Link)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function (event) {
        var allowTransition = true;
  
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
  
        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }
  
        if (event.defaultPrevented === true) {
          allowTransition = false;
        }
  
        event.preventDefault();
  
        if (allowTransition) {
          if (_this.props.to) {
            _history2.default.push(_this.props.to);
          } else {
            _history2.default.push({
              pathname: event.currentTarget.pathname,
              search: event.currentTarget.search
            });
          }
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    } // eslint-disable-line react/prefer-stateless-function
  
    (0, _createClass3.default)(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var props = (0, _objectWithoutProperties3.default)(_props, ['to']); // eslint-disable-line no-use-before-define
  
        return _react2.default.createElement('a', (0, _extends3.default)({ href: _history2.default.createHref(to) }, props, { onClick: this.handleClick }));
      }
    }]);
    return Link;
  }(_react.Component), _class.propTypes = {
    to: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired,
    onClick: _react.PropTypes.func
  }, _temp2);
  exports.default = Link;

/***/ },
/* 42 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createBrowserHistory = __webpack_require__(44);
  
  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
  
  var _createMemoryHistory = __webpack_require__(45);
  
  var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
  
  var _useQueries = __webpack_require__(46);
  
  var _useQueries2 = _interopRequireDefault(_useQueries);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var history = (0, _useQueries2.default)( false ? _createBrowserHistory2.default : _createMemoryHistory2.default)(); /**
                                                                                                                                    * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                                    *
                                                                                                                                    * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                                    *
                                                                                                                                    * This source code is licensed under the MIT license found in the
                                                                                                                                    * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                    */
  
  exports.default = history;

/***/ },
/* 44 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 45 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 46 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(20);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _dec, _class, _class2, _temp; /**
                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                     *
                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                     *
                                     * This source code is licensed under the MIT license found in the
                                     * LICENSE.txt file in the root directory of this source tree.
                                     */
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(48);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _withStyles = __webpack_require__(23);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Navigation = __webpack_require__(49);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var _Link = __webpack_require__(41);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _history = __webpack_require__(43);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Navigation = (_dec = (0, _withStyles2.default)(_Navigation2.default), _dec(_class = (_temp = _class2 = function (_Component) {
    (0, _inherits3.default)(Navigation, _Component);
  
    function Navigation() {
      (0, _classCallCheck3.default)(this, Navigation);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Navigation).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Navigation, [{
      key: 'jump',
      value: function jump() {
        _history2.default.push('/detail/gogogogo');
      }
    }, {
      key: 'render',
      value: function render() {
        var className = this.props.className;
  
        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(_Navigation2.default.root, className), role: 'navigation' },
          _react2.default.createElement(
            'a',
            { href: 'http://www.baidu.com' },
            '去百度吧, 非路由'
          ),
          _react2.default.createElement(
            _Link2.default,
            { className: _Navigation2.default.link, to: '/content' },
            ' Sample'
          ),
          _react2.default.createElement(
            _Link2.default,
            { className: _Navigation2.default.link, to: '/contact' },
            ' Contact'
          ),
          _react2.default.createElement(
            _Link2.default,
            { className: _Navigation2.default.link, to: '/detail/88' },
            ' Detail'
          ),
          _react2.default.createElement(
            'div',
            { onClick: this.jump },
            'jump to "/detail/gogogogo"'
          ),
          _react2.default.createElement(
            'span',
            { className: _Navigation2.default.spacer },
            '|'
          ),
          _react2.default.createElement(
            _Link2.default,
            { className: _Navigation2.default.link, to: '/login' },
            ' Log in'
          ),
          _react2.default.createElement(
            _Link2.default,
            { className: _Navigation2.default.link, to: '/contact/name?tab=0' },
            ' contact Name'
          ),
          _react2.default.createElement(
            'span',
            { className: _Navigation2.default.spacer },
            'or'
          ),
          _react2.default.createElement(
            _Link2.default,
            { className: (0, _classnames2.default)(_Navigation2.default.link, _Navigation2.default.highlight), to: '/register' },
            ' Sign up'
          )
        );
      }
    }]);
    return Navigation;
  }(_react.Component), _class2.propTypes = {
    className: _react.PropTypes.string
  }, _temp)) || _class);
  exports.default = Navigation;

/***/ },
/* 48 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(50);
      var insertCss = __webpack_require__(27);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Navigation.css", function() {
          content = require("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Navigation.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(26)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\r\n * React Starter Kit (https://www.reactstarterkit.com/)\r\n *\r\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\r\n *\r\n * This source code is licensed under the MIT license found in the\r\n * LICENSE.txt file in the root directory of this source tree.\r\n */\r\n\r\n.Navigation_root_1XY {\r\n  margin: 0;\r\n}\r\n\r\n.Navigation_link_3AL {\r\n  display: inline-block;\r\n  padding: 3px 8px;\r\n  text-decoration: none;\r\n  font-size: 1.125em; /* ~18px */\r\n}\r\n\r\n.Navigation_link_3AL,\r\n.Navigation_link_3AL:active,\r\n.Navigation_link_3AL:visited {\r\n  color: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.Navigation_link_3AL:hover {\r\n  color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n.Navigation_highlight_2nH {\r\n  margin-right: 8px;\r\n  margin-left: 8px;\r\n  border-radius: 3px;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  color: #fff;\r\n}\r\n\r\n.Navigation_highlight_2nH:hover {\r\n  background: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.Navigation_spacer_3NE {\r\n  color: rgba(255, 255, 255, 0.3);\r\n}\r\n", "", {"version":3,"sources":["/./components/Navigation/Navigation.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,UAAU;CACX;;AAED;EACE,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB,CAAC,WAAW;CAChC;;AAED;;;EAGE,gCAAgC;CACjC;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,gCAAgC;EAChC,YAAY;CACb;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,gCAAgC;CACjC","file":"Navigation.css","sourcesContent":["/**\r\n * React Starter Kit (https://www.reactstarterkit.com/)\r\n *\r\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\r\n *\r\n * This source code is licensed under the MIT license found in the\r\n * LICENSE.txt file in the root directory of this source tree.\r\n */\r\n\r\n.root {\r\n  margin: 0;\r\n}\r\n\r\n.link {\r\n  display: inline-block;\r\n  padding: 3px 8px;\r\n  text-decoration: none;\r\n  font-size: 1.125em; /* ~18px */\r\n}\r\n\r\n.link,\r\n.link:active,\r\n.link:visited {\r\n  color: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.link:hover {\r\n  color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n.highlight {\r\n  margin-right: 8px;\r\n  margin-left: 8px;\r\n  border-radius: 3px;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  color: #fff;\r\n}\r\n\r\n.highlight:hover {\r\n  background: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.spacer {\r\n  color: rgba(255, 255, 255, 0.3);\r\n}\r\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Navigation_root_1XY",
  	"link": "Navigation_link_3AL",
  	"highlight": "Navigation_highlight_2nH",
  	"spacer": "Navigation_spacer_3NE"
  };

/***/ },
/* 51 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACrRJREFUeNqcWAlQlFcSnosBhmFmBAaVG0RAEBQVUUh2jRKjiKJGEfFE8YisGkw066rrmd2o5bWaaIyaQuMRo/EAiRG8SojxwAMFEQWEkUMYkBlmmHtmu//9f+rtXzhFQlXXPN7r192vX/fX/X4+x/4fF4gHxAcSADnQvwJ6jksThxhz6TU+zU/u4RH8dv/43TCKMUhIkyP9y2cZx+Z3ZPGTh/nThpFKGOFOBAlp5Xyaj+1Vht+Z4O/KMNu7DBPYMZoxDJU4i739xe/96+BIB1epXFtf+7p4x9p7quoKLayZgUxAFuKw1PVJA0NcBn+2JcbFy8/H1K5qLvzHwmuauhoNbRwaZaWpS8+8y5NC+rSiPhPSfOM2f3NY4OwSzjBYLea3bRWlh36dl3hc39JkJBTwnNw9hR8dyZshC4nI4PEFPZg9Zp227Pb6pRkvzx+rhX87gPRARuJQdq+SuUZHmkSjD+duAk9Flh/fn1mweNJ2LpdbiB6UBvSdEzZ94QhQ+Kz58V30mnP47L/1HbX/7D5xb9/xHU0N1yt+PPTV1cwp2/lCx0J59LCpntGx3qVHdl+ljbHSHrd1x2Nc2lsYHyJZnzC3iZce33n7/En2heQhh0nXx67dNThk6ryNPAcHSVn23i04Fz5n6VqryaSu+OnI+jtbsorJ0JiY82C+rG/EnPPjBsS2VZa30l7T0V6zsePILkyEpMwP4PJ4opbShw/p0xlpMoHikivzxy0ztLUqIuYu34iEY5zDNTr2GH4zePUhygpJyQgkEof7rgB/l2GUcc4ePakY0b6pa6dPxQQtrgve3C/Uvzjz/UUun++I9PzHQxdwjk4cLs1L7etobkQZHGcPTxlhFPePZGUnSJp1HdSEk8xdyuKnsi8wMcU/Iv3TJR3NDdU4GZnxWWbbizJFdd5pDWEcpctR5ib53yHr9SwctOsxNspT+NV4v7ANFx1lPXrDjwtJrj4BkrhNX6+2mk3G/PlJ+5BwjHO4xuIXOcncUAZHWXJPQwC2oKtr5XWB2gw4Ur/VOafUoKxd7BOIUOEKJIPrlQeNnx764eFLWUKJzKfl6YPf+89fEYWEY5zDNeRBXtwDJBF7B/RDWbX5Fzro5HJkVYZOe9i1jTmFC22EBLBLOqWgfJfAWSTVKZsUzp69Ah1EYo/ulhaMLVOHRqlraqyG2PKF0FCdSQjLAohRwZoaCONOSyQJwoiFSxRYIVFyRKGpC/qGz14629UvKAEwCE/M6XhT97JdUV1lUL1V+Y1Mmqypr31y64t5Bw1tLUZNvQKFc8Revi6OMnfh+1uPLBR7+UXWXsv92VHaQ+rqGxgk6ukdjDwWo6GtvbaqoOzo3qPPT333ggBbBnDNfFZtE/mOTPIceyx/U9C4aeuEUpl/e01lUX1RQUGP0MiYF2ezT9/4NC0/In35MGd5T+9bK9O3wVqzvqXZaDUarEgwNkHZ0amrKyoCk1ISTJr2lkupfzkFRurlA2OHVOWc3A8HbZcEBI/0Gzl+Zmhqhr/61csHwG8is55PFFrR8PV7Bw/+/MtsBxfXUOWT4oNXP5m85eGeDYU1V87VAKK/J5L3loC3GsJnZabX3bpy9uHeTQ/wSoOSUv1j1+xIDJ40K8pqNmveVjxVq2tedsijYmy9Y0ckqaqe3wtJmTcSMMycOyV+D1SQm4pruWfcw6PbwMBJAWM+ngSyH72++UszAUdUYHoHjJ0ydM4znXLmo7fPgifOGgtz0UCDEOCBRo0+fCl7brnBlHKzqhR4Wpzc5HNhPjV62fptc5/pTekVJhsSjqOXb9iOa3Clc4C3GffgXpSBsmiZKDsadaFO1I02oC1oUyc8DMxcm8Ll8lxv/zNzJRTZRhq19XTJ0BXvWJPDsdksLr19wxVXc87oW5sxLmxhMxanArB24huOw9IWTcM1iD0d8P6Me2CvtXjXulxGHi3bhLpQJ+pGGxj46ExPoavE12LQ11VePNFM9EpWJktayh6pda1NL9C4h3s3/8bUNiG0Qew0JOZsFC/swb0AJSpGHlEROKgTdYMNPky28xgDdMo3pQAJ/tA/hbDQn8pav4RkL5FHr36AMPyhq7ePZjBH19xYzTZM19TAzPEoXtgDe8NQRhetOQd1om6woYyJLx7T6EHanwVsqQSQ3Dl8w76BdLZSHQb+Ri74PBnA0QCB/ZtXfEKyrG84lihO8c51P9CYxPRcquLd64+hUuQB3gm4B/o3Q9SiVcmkTNSBulAn6kYb6BBCmygmdyC/kKnp8TOKlXcgiC0pNypz+s1ckobBCnGTjEE84dzdm5DyWRCohqSfin7FAEeC8jMfWqDdSDhm5pEHeXEP7gUZSpSFMlE26kBdoPMu6kYbaFtEXKIkUJABqC5KPHkjHU67gCdwkEJ3Wgqg+gqEJwF07Hz09ZdlCQfOjfX9YNzE2xuXris/8W0l09SS9RcayCDwxhYA2HMAO5cHZq4Jh2xd0fzoTi6AbQB0uRFwAyoo+N/lTR/xPVSHDrKr5RL3TT46RNKgUI+Yv2+b4B4RPQbioz/GCQjSQxzUAIi+cQ8fGG9QtdaVnzx4wmY2WyFLNVQX4iYXcwUCHhiW5ih184GkKXRyl/eEmukPB3XCROhQNj6F/u7yva9WXQCMayEMMjBlqat3oJC+XglNrqlFit0AjkLoOp9AS+0PWecpcBF7QD/vZK9IQlzpzVqN0tiuaoJqUAPdcKTNajWcivfNIuqkmjbMSDxqLAI6Ky2sVwuPKejQKTiBF/q8KS46/cvMUSfIKxtzND+t97ARsxQ38k7XFlwsx0m/hAlhviMSUxp+v3Hs8uwP/49/7PFr03sOipsGMk1GdZueqI962ihGv43HwiymdTYwG+CFJMPOFAp4BX06FU3qgkUTj2sbX5d4xyeMh67BZtJqbDjGufyMpB/Y/PDse46yoB6LCB3M9ZlJbOOxHp82AgApIz0iB1NdJ7Q8DTRiM0GqgxTXQWBvA3BUx23clxm/+ZtMHFNzRoOOza9vVaIMjnzAUAn76gj9dnv+TgO5PD715oOs0RKIbaGFmiCIW0sObj/gIJZ4IOEY51gPYWoPyNBRlUEs4bPRv7s9P7PBqm1QoBKOxC/Ig04Q8jFigRbIa8Anq5dY9DqKD8fQ/rx+emRXC6s75tEyOLRMK9lJdPeV1FknS77dVg3Z1SYfEBtHwgqkvhCCeVLMqq3/sVnM2qK1i1cUrlmUBWPNkJX/3oNryEO2zh5RQ4ejLJBZxbrCbnmMTASzSdtu0NYrzgMozgBlNVCIK9z6DQj2iBryMYBxCAR63lV4nQNeUc8pVeWz9FEHzq3sFfP+F2n3myYrS+6faX32+KV7/0Eh4LGp7a9fHQeZTLC/8zrtfbtwYL7YyIL7uY3JvrLVWd4rkfkgYlS9vVt/+9qh68tSi4iM6vwY88Gek3FecaMyhNIescweKPh5+YuSV8PhlGTr09W3C66ddyX5SYnqcqEI+8mCwz0V1/Nq4d3YQgS4mfW1h+kg8N3p7vPXj/wA4ZvgCmuJHs9A7LX9EcPYb0zyicUhIMXUlceIL4l8IqHITwx2r5LfnecXK+7I7xFGAo/MREBbWIaTfORB3gkX3THMShhFKjN1cWobq7SZCTLZA9Q/YxjbaxbWr81OZlu74LV2R+F/BRgA2E9xgXp3xzgAAAAASUVORK5CYII="

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(20);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _dec, _class; /**
                     * React Starter Kit (https://www.reactstarterkit.com/)
                     *
                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                     *
                     * This source code is licensed under the MIT license found in the
                     * LICENSE.txt file in the root directory of this source tree.
                     */
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(23);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Feedback = __webpack_require__(53);
  
  var _Feedback2 = _interopRequireDefault(_Feedback);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Feedback = (_dec = (0, _withStyles2.default)(_Feedback2.default), _dec(_class = function (_Component) {
    (0, _inherits3.default)(Feedback, _Component);
  
    function Feedback() {
      (0, _classCallCheck3.default)(this, Feedback);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Feedback).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Feedback, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Feedback2.default.root },
          _react2.default.createElement(
            'div',
            { className: _Feedback2.default.container },
            _react2.default.createElement(
              'a',
              {
                className: _Feedback2.default.link,
                href: 'https://gitter.im/kriasoft/react-starter-kit'
              },
              'Ask a question'
            ),
            _react2.default.createElement(
              'span',
              { className: _Feedback2.default.spacer },
              '|'
            ),
            _react2.default.createElement(
              'a',
              {
                className: _Feedback2.default.link,
                href: 'https://github.com/kriasoft/react-starter-kit/issues/new'
              },
              'Report an issue'
            )
          )
        );
      }
    }]);
    return Feedback;
  }(_react.Component)) || _class);
  exports.default = Feedback;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(54);
      var insertCss = __webpack_require__(27);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Feedback.css", function() {
          content = require("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Feedback.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(26)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Feedback_root_2M- {\n  background: #f5f5f5;\n  color: #333;\n}\n\n.Feedback_container_2RO {\n  margin: 0 auto;\n  padding: 20px 8px;\n  max-width: 1000px;\n  text-align: center;\n  font-size: 1.5em; /* ~24px */\n}\n\n.Feedback_link_w25,\n.Feedback_link_w25:active,\n.Feedback_link_w25:hover,\n.Feedback_link_w25:visited {\n  color: #333;\n  text-decoration: none;\n}\n\n.Feedback_link_w25:hover {\n  text-decoration: underline;\n}\n\n.Feedback_spacer_1Ur {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n", "", {"version":3,"sources":["/./components/Feedback/Feedback.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,oBAAoB;EACpB,YAAY;CACb;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;EACpC,mBAAmB;EACnB,iBAAiB,CAAC,WAAW;CAC9B;;AAED;;;;EAIE,YAAY;EACZ,sBAAsB;CACvB;;AAED;EACE,2BAA2B;CAC5B;;AAED;EACE,oBAAoB;EACpB,mBAAmB;CACpB","file":"Feedback.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.root {\n  background: #f5f5f5;\n  color: #333;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 8px;\n  max-width: var(--max-content-width);\n  text-align: center;\n  font-size: 1.5em; /* ~24px */\n}\n\n.link,\n.link:active,\n.link:hover,\n.link:visited {\n  color: #333;\n  text-decoration: none;\n}\n\n.link:hover {\n  text-decoration: underline;\n}\n\n.spacer {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Feedback_root_2M-",
  	"container": "Feedback_container_2RO",
  	"link": "Feedback_link_w25",
  	"spacer": "Feedback_spacer_1Ur"
  };

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(20);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _dec, _class; /**
                     * React Starter Kit (https://www.reactstarterkit.com/)
                     *
                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                     *
                     * This source code is licensed under the MIT license found in the
                     * LICENSE.txt file in the root directory of this source tree.
                     */
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(23);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Footer = __webpack_require__(56);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  var _Link = __webpack_require__(41);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Footer = (_dec = (0, _withStyles2.default)(_Footer2.default), _dec(_class = function (_Component) {
    (0, _inherits3.default)(Footer, _Component);
  
    function Footer() {
      (0, _classCallCheck3.default)(this, Footer);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Footer).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Footer, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Footer2.default.root },
          _react2.default.createElement(
            'div',
            { className: _Footer2.default.container },
            _react2.default.createElement(
              'span',
              { className: _Footer2.default.text },
              '© Your Company'
            ),
            _react2.default.createElement(
              'span',
              { className: _Footer2.default.spacer },
              '·'
            ),
            _react2.default.createElement(
              _Link2.default,
              { className: _Footer2.default.link, to: '/' },
              'Home'
            ),
            _react2.default.createElement(
              'span',
              { className: _Footer2.default.spacer },
              '·'
            ),
            _react2.default.createElement(
              _Link2.default,
              { className: _Footer2.default.link, to: '/privacy' },
              'Privacy'
            ),
            _react2.default.createElement(
              'span',
              { className: _Footer2.default.spacer },
              '·'
            ),
            _react2.default.createElement(
              _Link2.default,
              { className: _Footer2.default.link, to: '/not-found' },
              'Not Found'
            )
          )
        );
      }
    }]);
    return Footer;
  }(_react.Component)) || _class);
  exports.default = Footer;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(57);
      var insertCss = __webpack_require__(27);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Footer.css", function() {
          content = require("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Footer.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(26)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Footer_root_3mW {\n  background: #333;\n  color: #fff;\n}\n\n.Footer_container_3k8 {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  text-align: center;\n}\n\n.Footer_text_jeh {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.Footer_textMuted_1yA {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.Footer_spacer_2ei {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.Footer_text_jeh,\n.Footer_link_2Cg {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.Footer_link_2Cg,\n.Footer_link_2Cg:active,\n.Footer_link_2Cg:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.Footer_link_2Cg:hover {\n  color: rgba(255, 255, 255, 1);\n}\n", "", {"version":3,"sources":["/./components/Footer/Footer.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAoC;EACpC,mBAAmB;CACpB;;AAED;EACE,gCAAgC;CACjC;;AAED;EAEE,gCAAgC;CACjC;;AAED;EACE,gCAAgC;CACjC;;AAED;;EAEE,iBAAiB;EACjB,eAAe;CAChB;;AAED;;;EAGE,gCAAgC;EAChC,sBAAsB;CACvB;;AAED;EACE,8BAA8B;CAC/B","file":"Footer.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.root {\n  background: #333;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: var(--max-content-width);\n  text-align: center;\n}\n\n.text {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.textMuted {\n  composes: text;\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.text,\n.link {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Footer_root_3mW",
  	"container": "Footer_container_3k8",
  	"text": "Footer_text_jeh",
  	"textMuted": "Footer_textMuted_1yA Footer_text_jeh",
  	"spacer": "Footer_spacer_2ei",
  	"link": "Footer_link_2Cg"
  };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(6);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _promise = __webpack_require__(59);
  
  var _promise2 = _interopRequireDefault(_promise);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _UserInfo = __webpack_require__(60);
  
  var _syncStore = __webpack_require__(67);
  
  var _HTTPUtils = __webpack_require__(68);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  exports.default = {
  
    path: '/',
  
    action: function action() {
      var _this = this;
  
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var Home, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _promise2.default(function (resolve) {
                  !/* require.ensure */(function (require) {
                    return resolve(__webpack_require__(69).default);
                  }(__webpack_require__));
                });
  
              case 2:
                Home = _context.sent;
  
                // avoid the duplicated requrest from client
                console.log('check the noFetch: ', _UserInfo.userInfo.noFetch);
  
                if (_UserInfo.userInfo.noFetch) {
                  _context.next = 12;
                  break;
                }
  
                _context.next = 7;
                return (0, _HTTPUtils.httpGetJSON)('http://jsonplaceholder.typicode.com/posts');
  
              case 7:
                data = _context.sent;
  
                _UserInfo.userInfo.news = data;
                // make it available to client side when state sync
                (0, _syncStore.updateStore)({ userInfo: _UserInfo.userInfo });
  
                if (data) {
                  _context.next = 12;
                  break;
                }
  
                throw new Error('Failed to load the news feed.');
  
              case 12:
  
                // recover the noFetch status
                _UserInfo.userInfo.noFetch = false;
  
                // to reproduce the warning
                // userInfo.fetchNews();
  
                return _context.abrupt('return', _react2.default.createElement(Home, null));
  
              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };
  // import Home from './Home';
  // import fetch from '../../core/fetch';

/***/ },
/* 59 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.userInfo = undefined;
  
  var _defineProperty = __webpack_require__(61);
  
  var _defineProperty2 = _interopRequireDefault(_defineProperty);
  
  var _regenerator = __webpack_require__(6);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
  
  var _mobx = __webpack_require__(62);
  
  var _fetch = __webpack_require__(63);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _initDefineProp(target, property, descriptor, context) {
      if (!descriptor) return;
      (0, _defineProperty2.default)(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }
  
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
  
      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }
  
      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);
  
      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }
  
      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }
  
      return desc;
  }
  
  function _initializerWarningHelper(descriptor, context) {
      throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }
  
  // import filter from 'lodash/filter'
  
  
  var UserInfo = (_class = function () {
      function UserInfo() {
          (0, _classCallCheck3.default)(this, UserInfo);
  
          _initDefineProp(this, 'id', _descriptor, this);
  
          _initDefineProp(this, 'name', _descriptor2, this);
  
          _initDefineProp(this, 'userPreviligy', _descriptor3, this);
  
          _initDefineProp(this, 'authorize', _descriptor4, this);
  
          _initDefineProp(this, 'news', _descriptor5, this);
  
          _initDefineProp(this, 'loginErr', _descriptor6, this);
  
          this.noFetch = undefined;
      }
  
      (0, _createClass3.default)(UserInfo, [{
          key: 'update',
          value: function update(user) {
              this.id = user.id;
              this.name = user.name;
              this.userPreviligy = user.userPreviligy;
              this.authorize = user.authorize;
          }
          // @action
  
      }, {
          key: 'deleteNewsById',
          value: function deleteNewsById(newsid) {
              // require.ensure([], (require) => {
              // const filter = require('lodash/filter');
              this.news = this.news.filter(function (o) {
                  return o.id !== newsid;
              });
              // })
  
              // this.news = this.news.filter(x => x.id !== newsid)
          }
      }, {
          key: 'fetchNews',
          value: function () {
              var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                  var resp, data;
                  return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                          switch (_context.prev = _context.next) {
                              case 0:
                                  if (!(this.news.length === 0)) {
                                      _context.next = 12;
                                      break;
                                  }
  
                                  _context.next = 3;
                                  return (0, _fetch2.default)('http://jsonplaceholder.typicode.com/posts', {
                                      method: 'get',
                                      headers: {
                                          Accept: 'application/json',
                                          'Content-Type': 'application/json'
                                      }
                                  });
  
                              case 3:
                                  resp = _context.sent;
  
                                  console.log('browser', (false));
                                  _context.next = 7;
                                  return resp.json();
  
                              case 7:
                                  data = _context.sent;
  
                                  this.news = data;
                                  console.log('get data');
  
                                  if (data) {
                                      _context.next = 12;
                                      break;
                                  }
  
                                  throw new Error('Failed to load the news feed.');
  
                              case 12:
                              case 'end':
                                  return _context.stop();
                          }
                      }
                  }, _callee, this);
              }));
  
              function fetchNews() {
                  return _ref.apply(this, arguments);
              }
  
              return fetchNews;
          }()
      }, {
          key: 'initial',
          value: function initial(store) {
              this.id = store.id;
              this.name = store.name;
              this.userPreviligy = store.userPreviligy;
              this.authorize = store.authorize;
              this.news = store.news;
              this.loginErr = store.loginErr;
          }
      }, {
          key: 'clear',
          value: function clear() {
              this.initial({});
          }
      }]);
      return UserInfo;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'id', [_mobx.observable], {
      enumerable: true,
      initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'name', [_mobx.observable], {
      enumerable: true,
      initializer: function initializer() {
          return undefined;
      }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'userPreviligy', [_mobx.observable], {
      enumerable: true,
      initializer: function initializer() {
          return undefined;
      }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'authorize', [_mobx.observable], {
      enumerable: true,
      initializer: function initializer() {
          return undefined;
      }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'news', [_mobx.observable], {
      enumerable: true,
      initializer: function initializer() {
          return undefined;
      }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'loginErr', [_mobx.observable], {
      enumerable: true,
      initializer: function initializer() {
          return undefined;
      }
  })), _class);
  var userInfo = exports.userInfo = new UserInfo();

/***/ },
/* 61 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/define-property");

/***/ },
/* 62 */
/***/ function(module, exports) {

  module.exports = require("mobx");

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Response = exports.Headers = exports.Request = exports.default = undefined;
  
  var _bluebird = __webpack_require__(64);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _nodeFetch = __webpack_require__(65);
  
  var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
  
  var _config = __webpack_require__(66);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  _nodeFetch2.default.Promise = _bluebird2.default; /**
                                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                                     *
                                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                     *
                                                     * This source code is licensed under the MIT license found in the
                                                     * LICENSE.txt file in the root directory of this source tree.
                                                     */
  
  _nodeFetch.Response.Promise = _bluebird2.default;
  
  function localUrl(url) {
    if (url.startsWith('//')) {
      return 'https:' + url;
    }
  
    if (url.startsWith('http')) {
      return url;
    }
  
    return 'http://' + _config.host + url;
  }
  
  function localFetch(url, options) {
    return (0, _nodeFetch2.default)(localUrl(url), options);
  }
  
  exports.default = localFetch;
  exports.Request = _nodeFetch.Request;
  exports.Headers = _nodeFetch.Headers;
  exports.Response = _nodeFetch.Response;

/***/ },
/* 64 */
/***/ function(module, exports) {

  module.exports = require("bluebird");

/***/ },
/* 65 */
/***/ function(module, exports) {

  module.exports = require("node-fetch");

/***/ },
/* 66 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /* eslint-disable max-len */
  
  var port = exports.port = process.env.PORT || 3000;
  var host = exports.host = process.env.WEBSITE_HOSTNAME || 'localhost:' + port;
  
  // export const databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
  
  var analytics = exports.analytics = {
  
    // https://analytics.google.com/
    google: {
      trackingId: process.env.GOOGLE_TRACKING_ID }
  
  };
  
  var auth = exports.auth = {
  
    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },
  
    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '186244551745631',
      secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
    },
  
    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },
  
    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }
  
  };

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.clearStore = exports.getStore = exports.updateStore = undefined;
  
  var _keys = __webpack_require__(3);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var syncStore = undefined;
  var updateStore = exports.updateStore = function updateStore(store) {
      syncStore = store;
  };
  
  var getStore = exports.getStore = function getStore() {
      return syncStore;
  };
  var clearStore = exports.clearStore = function clearStore() {
      if (!!syncStore) {
          (0, _keys2.default)(syncStore).forEach(function (key) {
              syncStore[key].clear();
          });
          syncStore = undefined;
      }
  };

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.httpPostJSON = exports.httpGetJSON = exports.postBase = undefined;
  
  var _stringify = __webpack_require__(1);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _regenerator = __webpack_require__(6);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _fetch = __webpack_require__(63);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var HEADERWITHJSON = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
  };
  
  var getBase = function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(url, header) {
          var resp, data;
          return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                  switch (_context.prev = _context.next) {
                      case 0:
                          _context.next = 2;
                          return (0, _fetch2.default)(url, header);
  
                      case 2:
                          resp = _context.sent;
                          _context.next = 5;
                          return resp.json();
  
                      case 5:
                          data = _context.sent;
                          return _context.abrupt('return', data);
  
                      case 7:
                      case 'end':
                          return _context.stop();
                  }
              }
          }, _callee, undefined);
      }));
  
      return function getBase(_x, _x2) {
          return _ref.apply(this, arguments);
      };
  }();
  
  var postBase = exports.postBase = function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(url, postHeader, postBody) {
          var resp, data;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
              while (1) {
                  switch (_context2.prev = _context2.next) {
                      case 0:
                          _context2.next = 2;
                          return (0, _fetch2.default)(url, {
                              method: 'post',
                              header: postHeader,
                              body: postBody
                          });
  
                      case 2:
                          resp = _context2.sent;
                          _context2.next = 5;
                          return resp.json();
  
                      case 5:
                          data = _context2.sent;
                          return _context2.abrupt('return', data);
  
                      case 7:
                      case 'end':
                          return _context2.stop();
                  }
              }
          }, _callee2, undefined);
      }));
  
      return function postBase(_x3, _x4, _x5) {
          return _ref2.apply(this, arguments);
      };
  }();
  
  var httpGetJSON = exports.httpGetJSON = function httpGetJSON(url) {
      return getBase(url, HEADERWITHJSON);
  };
  var httpPostJSON = exports.httpPostJSON = function httpPostJSON(url, body) {
      return postBase(url, HEADERWITHJSON, (0, _stringify2.default)(body));
  };

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(20);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class; /**
               * React Starter Kit (https://www.reactstarterkit.com/)
               *
               * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
               *
               * This source code is licensed under the MIT license found in the
               * LICENSE.txt file in the root directory of this source tree.
               */
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(23);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Home = __webpack_require__(70);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _mobxReact = __webpack_require__(72);
  
  var _UserInfo = __webpack_require__(60);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'React Starter Kit';
  
  // function Home({ news }, context) {
  //   context.setTitle(title);
  //   return (
  //     <div className={s.root}>
  //       <div className={s.container}>
  //         <h1 className={s.title}>React.js News</h1>
  //         <ul className={s.news}>
  //           {news.map((item) => (
  //             <li key={item.id} className={s.newsItem}>
  //               <a href={item.link} className={s.newsTitle}>{item.title}</a>
  //               <span className={s.newsDesc} >
  //                 {item.body}
  //               </span>
  //             </li>
  //           ))
  //           }
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // }
  
  
  var Home = (0, _mobxReact.observer)(_class = function (_Component) {
    (0, _inherits3.default)(Home, _Component);
  
    function Home() {
      (0, _classCallCheck3.default)(this, Home);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Home).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Home, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(title);
      }
    }, {
      key: 'delete',
      value: function _delete(id) {
        console.log('delete', id);
        _UserInfo.userInfo.deleteNewsById(id);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        var news = _UserInfo.userInfo.news;
  
        return _react2.default.createElement(
          'div',
          { className: _Home2.default.root },
          _react2.default.createElement(
            'div',
            { className: _Home2.default.container },
            _react2.default.createElement(
              'h1',
              { className: _Home2.default.title },
              'React.js News'
            ),
            _react2.default.createElement(
              'ul',
              { className: _Home2.default.news },
              news.map(function (item) {
                return _react2.default.createElement(
                  'li',
                  { key: item.id, className: _Home2.default.newsItem },
                  _react2.default.createElement(
                    'a',
                    { href: item.link, className: _Home2.default.newsTitle },
                    item.title
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: _Home2.default.newsDesc },
                    item.body
                  ),
                  _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                        return _this2.delete(item.id);
                      } },
                    'delete this one '
                  )
                );
              })
            )
          )
        );
      }
    }]);
    return Home;
  }(_react.Component)) || _class;
  
  // Home.propTypes = {
  //   news: propTypes.arrayOrObservableArray,
  // };
  
  
  Home.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Home2.default)(Home);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(71);
      var insertCss = __webpack_require__(27);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Home.css", function() {
          content = require("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Home.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(26)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Home_root_3mf {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Home_container_2ac {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n\n.Home_news_1G- {\n  padding: 0;\n}\n\n.Home_newsItem_3n- {\n  list-style-type: none;\n  padding-bottom: 6px;\n}\n\n.Home_newsTitle_Pdo {\n  font-size: 1.125em;\n}\n\n.Home_newsTitle_Pdo,\n.Home_newsDesc_1JF {\n  display: block;\n}\n", "", {"version":3,"sources":["/./routes/home/Home.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC;;AAED;EACE,WAAW;CACZ;;AAED;EACE,sBAAsB;EACtB,oBAAoB;CACrB;;AAED;EACE,mBAAmB;CACpB;;AAED;;EAEE,eAAe;CAChB","file":"Home.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n\n.news {\n  padding: 0;\n}\n\n.newsItem {\n  list-style-type: none;\n  padding-bottom: 6px;\n}\n\n.newsTitle {\n  font-size: 1.125em;\n}\n\n.newsTitle,\n.newsDesc {\n  display: block;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Home_root_3mf",
  	"container": "Home_container_2ac",
  	"news": "Home_news_1G-",
  	"newsItem": "Home_newsItem_3n-",
  	"newsTitle": "Home_newsTitle_Pdo",
  	"newsDesc": "Home_newsDesc_1JF"
  };

/***/ },
/* 72 */
/***/ function(module, exports) {

  module.exports = require("mobx-react");

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(6);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Contact = __webpack_require__(74);
  
  var _Contact2 = _interopRequireDefault(_Contact);
  
  var _Tabs = __webpack_require__(82);
  
  var _Tabs2 = _interopRequireDefault(_Tabs);
  
  var _Test = __webpack_require__(85);
  
  var _Test2 = _interopRequireDefault(_Test);
  
  var _testModel = __webpack_require__(77);
  
  var _syncStore = __webpack_require__(67);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  exports.default = {
  
    path: '/contact',
  
    // async action() {
    //   const Contact = await new Promise((resolve) => {
    //     require.ensure([], (require) => resolve(require('./Contact').default));
    //   });
  
  
    //   return <Contact />;
    // },
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                component = _context.sent;
                return _context.abrupt('return', component);
  
              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
  
    children: [{
      path: '/', // Same as /parent
      action: function action() {
        return _react2.default.createElement(_Contact2.default, null);
      }
    }, {
      path: '/name',
      action: function action() {
        (0, _syncStore.updateStore)({ testInstance: _testModel.testInstance });
        _testModel.testInstance.noFetch = false;
        // console.log(context.query.tab, 'in name router')
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'good'
          ),
          _react2.default.createElement(
            _Tabs2.default,
            null,
            _react2.default.createElement(_Test2.default, null),
            _react2.default.createElement(_Test2.default, null),
            _react2.default.createElement(_Test2.default, null)
          )
        );
      }
    }]
  
  };

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(20);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class; /**
               * React Starter Kit (https://www.reactstarterkit.com/)
               *
               * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
               *
               * This source code is licensed under the MIT license found in the
               * LICENSE.txt file in the root directory of this source tree.
               */
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(23);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _history = __webpack_require__(43);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _Contact = __webpack_require__(75);
  
  var _Contact2 = _interopRequireDefault(_Contact);
  
  var _mobxReact = __webpack_require__(72);
  
  var _testModel = __webpack_require__(77);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Contact Us';
  
  // function Contact (props, context) {
  //   context.setTitle(title)
  //   return (
  //     <div className={s.root}>
  //       <div className={s.container}>
  //         <h1>{title}</h1>
  //         <input>
  //         </input>
  //       </div>
  //     </div>
  //   )
  // }
  
  // Contact.contextTypes = { setTitle: PropTypes.func.isRequired }
  
  var Contact = (0, _mobxReact.observer)(_class = function (_Component) {
    (0, _inherits3.default)(Contact, _Component);
  
    function Contact() {
      (0, _classCallCheck3.default)(this, Contact);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Contact).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Contact, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(title);
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        _testModel.testInstance.count();
        this.unlisten = _history2.default.listenBefore(function (location) {
          console.log(location);
          if (location.pathname !== '/contact') {
            return 'Are you sure you want to leave this page?';
          }
          return true;
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.unlisten();
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'span',
          null,
          'Seconds passed: ',
          _testModel.testInstance.timerData.secondsPassed
        );
      }
    }]);
    return Contact;
  }(_react.Component)) || _class;
  
  Contact.propTypes = {
    data: _react.PropTypes.object
  };
  
  Contact.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  };
  
  exports.default = (0, _withStyles2.default)(_Contact2.default)(Contact);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(76);
      var insertCss = __webpack_require__(27);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Contact.css", function() {
          content = require("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Contact.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(26)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Contact_root_sD4 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Contact_container_PcA {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n\n.Contact_black_24u{\n  background-color:  black\n}\n", "", {"version":3,"sources":["/./routes/contact/Contact.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC;;AACD;EACE,wBAAwB;CACzB","file":"Contact.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n.black{\n  background-color:  black\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Contact_root_sD4",
  	"container": "Contact_container_PcA",
  	"black": "Contact_black_24u"
  };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.testInstance = undefined;
  
  var _defineProperty = __webpack_require__(61);
  
  var _defineProperty2 = _interopRequireDefault(_defineProperty);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _desc, _value, _class, _descriptor;
  
  var _mobx = __webpack_require__(62);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _initDefineProp(target, property, descriptor, context) {
      if (!descriptor) return;
      (0, _defineProperty2.default)(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }
  
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
  
      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }
  
      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);
  
      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }
  
      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }
  
      return desc;
  }
  
  function _initializerWarningHelper(descriptor, context) {
      throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }
  
  var test = (_class = function () {
      function test() {
          (0, _classCallCheck3.default)(this, test);
  
          _initDefineProp(this, 'timerData', _descriptor, this);
  
          this.noFetch = false;
      }
  
      (0, _createClass3.default)(test, [{
          key: 'count',
          value: function count() {
              var _this = this;
  
              setInterval(function () {
                  _this.timerData.secondsPassed++;
              }, 1000);
          }
      }, {
          key: 'initial',
          value: function initial(store) {
              this.timerData = store.timerData;
          }
      }, {
          key: 'clear',
          value: function clear() {
              this.initial({});
          }
      }]);
      return test;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'timerData', [_mobx.observable], {
      enumerable: true,
      initializer: function initializer() {
          return {
              secondsPassed: 0
          };
      }
  })), _class);
  var testInstance = exports.testInstance = new test();

/***/ },
/* 78 */,
/* 79 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-own-property-descriptor");

/***/ },
/* 80 */,
/* 81 */,
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _defineProperty = __webpack_require__(61);
  
  var _defineProperty2 = _interopRequireDefault(_defineProperty);
  
  var _getOwnPropertyDescriptor = __webpack_require__(79);
  
  var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(20);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _desc, _value, _class2, _descriptor, _descriptor2; /**
                                                                  * React Starter Kit (https://www.reactstarterkit.com/)
                                                                  *
                                                                  * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                  *
                                                                  * This source code is licensed under the MIT license found in the
                                                                  * LICENSE.txt file in the root directory of this source tree.
                                                                  */
  
  // import Link from '../Link'
  // import history from './../../core/history'
  
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(23);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Tabs = __webpack_require__(83);
  
  var _Tabs2 = _interopRequireDefault(_Tabs);
  
  var _mobxReact = __webpack_require__(72);
  
  var _mobx = __webpack_require__(62);
  
  var _HTTPUtils = __webpack_require__(68);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _initDefineProp(target, property, descriptor, context) {
      if (!descriptor) return;
      (0, _defineProperty2.default)(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }
  
  function _initializerWarningHelper(descriptor, context) {
      throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }
  
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
  
      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }
  
      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);
  
      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }
  
      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }
  
      return desc;
  }
  
  var Tabs = (0, _mobxReact.observer)(_class = (_class2 = function (_Component) {
      (0, _inherits3.default)(Tabs, _Component);
  
      function Tabs() {
          var _Object$getPrototypeO;
  
          var _temp, _this, _ret;
  
          (0, _classCallCheck3.default)(this, Tabs);
  
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }
  
          return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Tabs)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _initDefineProp(_this, 'selectedIndex', _descriptor, _this), _initDefineProp(_this, 'childContent', _descriptor2, _this), _this.config = [{ navText: 'A', navLink: 'name', navAPI: 'http://jsonplaceholder.typicode.com/posts/1' }, { navText: 'B', navLink: 'B', navAPI: 'http://jsonplaceholder.typicode.com/posts/2' }, { navText: 'C', navLink: 'C', navAPI: 'http://jsonplaceholder.typicode.com/posts/3' }], _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }
  
      (0, _createClass3.default)(Tabs, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              // console.log(this.config[this.selectedIndex], this.selectedIndex)
              // this.selectedIndex = this.props.selectedTab || this.selectedIndex
              this.getTabData(this.selectedIndex);
          }
      }, {
          key: 'getTabData',
          value: function getTabData(index) {
              var _this2 = this;
  
              console.log(index);
              (0, _HTTPUtils.httpGetJSON)(this.config[index].navAPI).then(function (data) {
                  console.log(data, 'before update');
                  _this2.updateObs(data, index);
              });
          }
      }, {
          key: 'updateObs',
          value: function updateObs(data, index) {
              this.selectedIndex = index;
              this.childContent = data;
          }
      }, {
          key: 'navRender',
          value: function navRender() {
              var _this3 = this;
  
              return this.config.map(function (item, index) {
                  return _react2.default.createElement(
                      'div',
                      {
                          className: _Tabs2.default.tabItem,
                          key: index,
                          onClick: function onClick() {
                              return _this3.getTabData(index);
                          },
                          to: item.navLink },
                      item.navText
                  );
              });
          }
      }, {
          key: 'render',
          value: function render() {
              console.log('ready to render');
              return _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                      'nav',
                      null,
                      this.navRender()
                  ),
                  _react2.default.createElement(
                      'section',
                      null,
                      this.props.children && _react2.default.cloneElement(this.props.children[this.selectedIndex], { data: this.childContent })
                  )
              );
          }
      }]);
      return Tabs;
  }(_react.Component), (_applyDecoratedDescriptor(_class2.prototype, 'updateObs', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'updateObs'), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, 'selectedIndex', [_mobx.observable], {
      enumerable: true,
      initializer: function initializer() {
          return 0;
      }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'childContent', [_mobx.observable], {
      enumerable: true,
      initializer: function initializer() {
          return undefined;
      }
  })), _class2)) || _class;
  
  Tabs.propTypes = {
      children: _react.PropTypes.array
  };
  
  exports.default = (0, _withStyles2.default)(_Tabs2.default)(Tabs);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(84);
      var insertCss = __webpack_require__(27);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Tabs.css", function() {
          content = require("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Tabs.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(26)();
  // imports
  
  
  // module
  exports.push([module.id, "nav{\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex\r\n}\r\n\r\n    section{\r\n        width:500px;\r\n        height:500px;\r\n        background-color: green;\r\n    }\r\n\r\n    .Tabs_tabItem_3d7{\r\n    width:100px;\r\n    height: 100px;\r\n    background-color: palegreen;\r\n    color:white;\r\n}", "", {"version":3,"sources":["/./components/Tabs/Tabs.css"],"names":[],"mappings":"AAAA;IACI,qBAAa;IAAb,sBAAa;IAAb,qBAAa;IAAb,aAAa;CAChB;;IAEG;QACI,YAAY;QACZ,aAAa;QACb,wBAAwB;KAC3B;;IACL;IACI,YAAY;IACZ,cAAc;IACd,4BAA4B;IAC5B,YAAY;CACf","file":"Tabs.css","sourcesContent":["nav{\r\n    display: flex\r\n}\r\n\r\n    section{\r\n        width:500px;\r\n        height:500px;\r\n        background-color: green;\r\n    }\r\n.tabItem{\r\n    width:100px;\r\n    height: 100px;\r\n    background-color: palegreen;\r\n    color:white;\r\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"tabItem": "Tabs_tabItem_3d7"
  };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _objectWithoutProperties2 = __webpack_require__(42);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(20);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _temp; /**
                      * React Starter Kit (https://www.reactstarterkit.com/)
                      *
                      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                      *
                      * This source code is licensed under the MIT license found in the
                      * LICENSE.txt file in the root directory of this source tree.
                      */
  
  // import React, { Component, PropTypes } from 'react';
  // import withStyles from 'isomorphic-style-loader/lib/withStyles';
  // import s from './Test.css';
  // // import Link from '../Link'
  // // import history from './../../core/history'
  // import { observer } from 'mobx-react'
  
  // @observer
  // class Test extends Component {
  //     render() {
  //         return (
  //             <div className={s.good}>
  //                 <div className={s.bad}>test info</div>
  //                 {JSON.stringify(this.props) }
  //             </div>
  //         );
  //     }
  // }
  // Test.propTypes = {
  //     data: PropTypes.any,
  // };
  
  // export default withStyles(s)(Test);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _DropDownMenuDecorator = __webpack_require__(121);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var DropDownButton = (_temp = _class = function (_Component) {
      (0, _inherits3.default)(DropDownButton, _Component);
  
      function DropDownButton() {
          (0, _classCallCheck3.default)(this, DropDownButton);
          return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DropDownButton).apply(this, arguments));
      }
  
      (0, _createClass3.default)(DropDownButton, [{
          key: 'render',
          value: function render() {
              var prop = (0, _objectWithoutProperties3.default)(this.props, []);
  
              return _react2.default.createElement(
                  'div',
                  prop,
                  'HOC button',
                  this.props.children
              );
          }
      }]);
      return DropDownButton;
  }(_react.Component), _class.propTypes = {
      children: _react.PropTypes.any
  }, _temp);
  
  var DropContent = function (_Component2) {
      (0, _inherits3.default)(DropContent, _Component2);
  
      function DropContent() {
          (0, _classCallCheck3.default)(this, DropContent);
          return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DropContent).apply(this, arguments));
      }
  
      (0, _createClass3.default)(DropContent, [{
          key: 'render',
          value: function render() {
              return _react2.default.createElement(
                  'div',
                  null,
                  'pop area'
              );
          }
      }]);
      return DropContent;
  }(_react.Component);
  
  exports.default = (0, _DropDownMenuDecorator.dropDownMenu)(DropContent)(DropDownButton);

/***/ },
/* 86 */,
/* 87 */,
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(6);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _promise = __webpack_require__(59);
  
  var _promise2 = _interopRequireDefault(_promise);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import Login from './Login';
  
  exports.default = {
  
    path: '/login',
  
    action: function action() {
      var _this = this;
  
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var Login;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _promise2.default(function (resolve) {
                  !/* require.ensure */(function (require) {
                    return resolve(__webpack_require__(89).default);
                  }(__webpack_require__));
                });
  
              case 2:
                Login = _context.sent;
                return _context.abrupt('return', _react2.default.createElement(Login, null));
  
              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(23);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Login = __webpack_require__(90);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Log In'; /**
                         * React Starter Kit (https://www.reactstarterkit.com/)
                         *
                         * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                         *
                         * This source code is licensed under the MIT license found in the
                         * LICENSE.txt file in the root directory of this source tree.
                         */
  
  function Login(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      { className: _Login2.default.root },
      _react2.default.createElement(
        'div',
        { className: _Login2.default.container },
        _react2.default.createElement(
          'h1',
          null,
          title
        ),
        _react2.default.createElement(
          'p',
          { className: _Login2.default.lead },
          'Log in with your username or company email address.'
        ),
        _react2.default.createElement(
          'div',
          { className: _Login2.default.formGroup },
          _react2.default.createElement(
            'a',
            { className: _Login2.default.facebook, href: '/login/facebook' },
            _react2.default.createElement(
              'svg',
              {
                className: _Login2.default.icon,
                width: '30',
                height: '30',
                viewBox: '0 0 30 30',
                xmlns: 'http://www.w3.org/2000/svg'
              },
              _react2.default.createElement('path', {
                d: 'M22 16l1-5h-5V7c0-1.544.784-2 3-2h2V0h-4c-4.072 0-7 2.435-7 7v4H7v5h5v14h6V16h4z'
              })
            ),
            _react2.default.createElement(
              'span',
              null,
              'Log in with Facebook'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _Login2.default.formGroup },
          _react2.default.createElement(
            'a',
            { className: _Login2.default.google, href: '/login/google' },
            _react2.default.createElement(
              'svg',
              {
                className: _Login2.default.icon,
                width: '30',
                height: '30',
                viewBox: '0 0 30 30',
                xmlns: 'http://www.w3.org/2000/svg'
              },
              _react2.default.createElement('path', {
                d: 'M30 13h-4V9h-2v4h-4v2h4v4h2v-4h4m-15 2s-2-1.15-2-2c0 0-.5-1.828 1-3 ' + '1.537-1.2 3-3.035 3-5 0-2.336-1.046-5-3-6h3l2.387-1H10C5.835 0 2 3.345 2 7c0 ' + '3.735 2.85 6.56 7.086 6.56.295 0 .58-.006.86-.025-.273.526-.47 1.12-.47 1.735 ' + '0 1.037.817 2.042 1.523 2.73H9c-5.16 0-9 2.593-9 6 0 3.355 4.87 6 10.03 6 5.882 ' + '0 9.97-3 9.97-7 0-2.69-2.545-4.264-5-6zm-4-4c-2.395 0-5.587-2.857-6-6C4.587 ' + '3.856 6.607.93 9 1c2.394.07 4.603 2.908 5.017 6.052C14.43 10.195 13 13 11 ' + '13zm-1 15c-3.566 0-7-1.29-7-4 0-2.658 3.434-5.038 7-5 .832.01 2 0 2 0 1 0 ' + '2.88.88 4 2 1 1 1 2.674 1 3 0 3-1.986 4-7 4z'
              })
            ),
            _react2.default.createElement(
              'span',
              null,
              'Log in with Google'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _Login2.default.formGroup },
          _react2.default.createElement(
            'a',
            { className: _Login2.default.twitter, href: '/login/twitter' },
            _react2.default.createElement(
              'svg',
              {
                className: _Login2.default.icon,
                width: '30',
                height: '30',
                viewBox: '0 0 30 30',
                xmlns: 'http://www.w3.org/2000/svg'
              },
              _react2.default.createElement('path', {
                d: 'M30 6.708c-1.105.49-2.756 1.143-4 1.292 1.273-.762 2.54-2.56 ' + '3-4-.97.577-2.087 1.355-3.227 1.773L25 5c-1.12-1.197-2.23-2-4-2-3.398 0-6 ' + '2.602-6 6 0 .4.047.7.11.956L15 10C9 10 5.034 8.724 2 5c-.53.908-1 1.872-1 ' + '3 0 2.136 1.348 3.894 3 5-1.01-.033-2.17-.542-3-1 0 2.98 4.186 6.432 7 7-1 ' + '1-4.623.074-5 0 .784 2.447 3.31 3.95 6 4-2.105 1.648-4.647 2.51-7.53 2.51-.5 ' + '0-.988-.03-1.47-.084C2.723 27.17 6.523 28 10 28c11.322 0 17-8.867 17-17 ' + '0-.268.008-.736 0-1 1.2-.868 2.172-2.058 3-3.292z'
              })
            ),
            _react2.default.createElement(
              'span',
              null,
              'Log in with Twitter'
            )
          )
        ),
        _react2.default.createElement(
          'strong',
          { className: _Login2.default.lineThrough },
          'OR'
        ),
        _react2.default.createElement(
          'form',
          { method: 'post' },
          _react2.default.createElement(
            'div',
            { className: _Login2.default.formGroup },
            _react2.default.createElement(
              'label',
              { className: _Login2.default.label, htmlFor: 'usernameOrEmail' },
              'Username or email address:'
            ),
            _react2.default.createElement('input', {
              className: _Login2.default.input,
              id: 'usernameOrEmail',
              type: 'text',
              name: 'usernameOrEmail',
              autoFocus: true
            })
          ),
          _react2.default.createElement(
            'div',
            { className: _Login2.default.formGroup },
            _react2.default.createElement(
              'label',
              { className: _Login2.default.label, htmlFor: 'password' },
              'Password:'
            ),
            _react2.default.createElement('input', {
              className: _Login2.default.input,
              id: 'password',
              type: 'password',
              name: 'password'
            })
          ),
          _react2.default.createElement(
            'div',
            { className: _Login2.default.formGroup },
            _react2.default.createElement(
              'button',
              { className: _Login2.default.button, type: 'submit' },
              'Log in'
            )
          )
        )
      )
    );
  }
  
  Login.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Login2.default)(Login);

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(91);
      var insertCss = __webpack_require__(27);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Login.css", function() {
          content = require("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Login.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(26)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n.Login_root_AfB {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.Login_container_2g2 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n.Login_lead_ri6 {\n  font-size: 1.25em;\n}\n.Login_formGroup_3_X {\n  margin-bottom: 15px;\n}\n.Login_label_2Z7 {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n.Login_input_PvY {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n}\n.Login_input_PvY:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login_button_10W {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.Login_button_10W:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.Login_button_10W:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login_facebook_3CI {\n  border-color: #3b5998;\n  background: #3b5998;\n}\n.Login_facebook_3CI:hover {\n  background: #2d4373;\n}\n.Login_google_1Ig {\n  border-color: #dd4b39;\n  background: #dd4b39;\n}\n.Login_google_1Ig:hover {\n  background: #c23321;\n}\n.Login_twitter_3Vq {\n  border-color: #55acee;\n  background: #55acee;\n}\n.Login_twitter_3Vq:hover {\n  background: #2795e9;\n}\n.Login_icon_97U {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.Login_lineThrough_3eY {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.Login_lineThrough_3eY::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.Login_lineThrough_3eY::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n", "", {"version":3,"sources":["/./routes/login/Login.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;ACPH;;;;;;;GAOG;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;ADpBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;CAClB;AAED;EACE,kBAAkB;CACnB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;CAClB;AAED;EACE,eAAe;EACf,+BAAuB;UAAvB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,yDAAiD;UAAjD,iDAAiD;EACjD,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,yFAAyE;EAAzE,iFAAyE;EAAzE,4EAAyE;EAAzE,yEAAyE;EAAzE,+GAAyE;CAC1E;AAED;EACE,sBAAsB;EACtB,yFAAiF;UAAjF,iFAAiF;CAClF;AAED;EACE,eAAe;EACf,+BAAuB;UAAvB,uBAAuB;EACvB,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;CACjB;AAED;EACE,mCAAmC;CACpC;AAED;EACE,sBAAsB;EACtB,mDAA2C;UAA3C,2CAA2C;CAC5C;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;CACpB;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,eAAe;CAChB;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;CACb;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,YAAY;CACb","file":"Login.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n\n.lead {\n  font-size: 1.25em;\n}\n\n.formGroup {\n  margin-bottom: 15px;\n}\n\n.label {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n\n.input {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.input:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.button {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n\n.button:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n\n.button:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.facebook {\n  border-color: #3b5998;\n  background: #3b5998;\n  composes: button;\n}\n\n.facebook:hover {\n  background: #2d4373;\n}\n\n.google {\n  border-color: #dd4b39;\n  background: #dd4b39;\n  composes: button;\n}\n\n.google:hover {\n  background: #c23321;\n}\n\n.twitter {\n  border-color: #55acee;\n  background: #55acee;\n  composes: button;\n}\n\n.twitter:hover {\n  background: #2795e9;\n}\n\n.icon {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.lineThrough {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n\n.lineThrough::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n\n.lineThrough::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Login_root_AfB",
  	"container": "Login_container_2g2",
  	"lead": "Login_lead_ri6",
  	"formGroup": "Login_formGroup_3_X",
  	"label": "Login_label_2Z7",
  	"input": "Login_input_PvY",
  	"button": "Login_button_10W",
  	"facebook": "Login_facebook_3CI Login_button_10W",
  	"google": "Login_google_1Ig Login_button_10W",
  	"twitter": "Login_twitter_3Vq Login_button_10W",
  	"icon": "Login_icon_97U",
  	"lineThrough": "Login_lineThrough_3eY"
  };

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(6);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _promise = __webpack_require__(59);
  
  var _promise2 = _interopRequireDefault(_promise);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import Register from './Register';
  
  exports.default = {
  
    path: '/register',
  
    action: function action() {
      var _this = this;
  
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var Register;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _promise2.default(function (resolve) {
                  !/* require.ensure */(function (require) {
                    return resolve(__webpack_require__(93).default);
                  }(__webpack_require__));
                });
  
              case 2:
                Register = _context.sent;
                return _context.abrupt('return', _react2.default.createElement(Register, null));
  
              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(20);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class; /**
               * React Starter Kit (https://www.reactstarterkit.com/)
               *
               * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
               *
               * This source code is licensed under the MIT license found in the
               * LICENSE.txt file in the root directory of this source tree.
               */
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(23);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Register = __webpack_require__(94);
  
  var _Register2 = _interopRequireDefault(_Register);
  
  var _mobxReact = __webpack_require__(72);
  
  var _Carousel = __webpack_require__(96);
  
  var _Carousel2 = _interopRequireDefault(_Carousel);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'New User Registration';
  
  var Register = (0, _mobxReact.observer)(_class = function (_Component) {
    (0, _inherits3.default)(Register, _Component);
  
    function Register() {
      (0, _classCallCheck3.default)(this, Register);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Register).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Register, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(title);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _Carousel2.default,
            null,
            _react2.default.createElement(
              'h1',
              { style: { width: '400px' } },
              'hah'
            )
          )
        );
      }
    }]);
    return Register;
  }(_react.Component)) || _class;
  
  Register.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Register2.default)(Register);

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(95);
      var insertCss = __webpack_require__(27);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Register.css", function() {
          content = require("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Register.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(26)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\r\n * React Starter Kit (https://www.reactstarterkit.com/)\r\n *\r\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\r\n *\r\n * This source code is licensed under the MIT license found in the\r\n * LICENSE.txt file in the root directory of this source tree.\r\n */\r\n\r\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\r\n\r\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\r\n\r\n.Register_root_3RB {\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n}\r\n\r\n.Register_container_1Lf {\r\n  margin: 0 auto;\r\n  padding: 0 0 40px;\r\n  max-width: 1000px;\r\n}\r\n\r\n.Register_wrap_2Jx {\r\n    width: 400px;\r\n    height: 320px;\r\n    overflow: hidden;\r\n    border: 1px solid #eee;\r\n    margin: 0 auto;\r\n    position: relative;\r\n}\r\n\r\n.Register_list_2Nu {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 320px;\r\n    width: 2000px;\r\n    padding-left: 0;\r\n    margin: 0;\r\n    -webkit-transition: .3s;\r\n    -o-transition: .3s;\r\n    transition: .3s;\r\n}\r\n\r\n.Register_list_2Nu li {\r\n    list-style: none;\r\n    float: left;\r\n    width: 400px;\r\n}\r\n\r\n.Register_list_2Nu li img {\r\n    vertical-align: top;\r\n    background-color: blue;\r\n}\r\n\r\n.Register_btn_3hS {\r\n    position: absolute;\r\n    overflow: hidden;\r\n    bottom: 0;\r\n    left: 125px;\r\n    padding: 0;\r\n    width: 150px;\r\n}\r\n\r\n.Register_btn_3hS li {\r\n    margin: 10px;\r\n    cursor: pointer;\r\n    background: blue;\r\n    float: left;\r\n    width: 10px;\r\n    height: 10px;\r\n    list-style: none;\r\n}\r\n\r\n.Register_btn_3hS .Register_active_rEz {\r\n    background: red;\r\n}", "", {"version":3,"sources":["/./routes/register/Register.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC;;AACD;IACI,aAAa;IACb,cAAc;IACd,iBAAiB;IACjB,uBAAuB;IACvB,eAAe;IACf,mBAAmB;CACtB;;AAED;IACI,mBAAmB;IACnB,OAAO;IACP,QAAQ;IACR,cAAc;IACd,cAAc;IACd,gBAAgB;IAChB,UAAU;IACV,wBAAgB;IAAhB,mBAAgB;IAAhB,gBAAgB;CACnB;;AAED;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;CAChB;;AAED;IACI,oBAAoB;IACpB,uBAAuB;CAC1B;;AAED;IACI,mBAAmB;IACnB,iBAAiB;IACjB,UAAU;IACV,YAAY;IACZ,WAAW;IACX,aAAa;CAChB;;AAED;IACI,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,iBAAiB;CACpB;;AAED;IACI,gBAAgB;CACnB","file":"Register.css","sourcesContent":["/**\r\n * React Starter Kit (https://www.reactstarterkit.com/)\r\n *\r\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\r\n *\r\n * This source code is licensed under the MIT license found in the\r\n * LICENSE.txt file in the root directory of this source tree.\r\n */\r\n\r\n@import '../../components/variables.css';\r\n\r\n.root {\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n}\r\n\r\n.container {\r\n  margin: 0 auto;\r\n  padding: 0 0 40px;\r\n  max-width: var(--max-content-width);\r\n}\r\n.wrap {\r\n    width: 400px;\r\n    height: 320px;\r\n    overflow: hidden;\r\n    border: 1px solid #eee;\r\n    margin: 0 auto;\r\n    position: relative;\r\n}\r\n\r\n.list {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 320px;\r\n    width: 2000px;\r\n    padding-left: 0;\r\n    margin: 0;\r\n    transition: .3s;\r\n}\r\n\r\n.list li {\r\n    list-style: none;\r\n    float: left;\r\n    width: 400px;\r\n}\r\n\r\n.list li img {\r\n    vertical-align: top;\r\n    background-color: blue;\r\n}\r\n\r\n.btn {\r\n    position: absolute;\r\n    overflow: hidden;\r\n    bottom: 0;\r\n    left: 125px;\r\n    padding: 0;\r\n    width: 150px;\r\n}\r\n\r\n.btn li {\r\n    margin: 10px;\r\n    cursor: pointer;\r\n    background: blue;\r\n    float: left;\r\n    width: 10px;\r\n    height: 10px;\r\n    list-style: none;\r\n}\r\n\r\n.btn .active {\r\n    background: red;\r\n}","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Register_root_3RB",
  	"container": "Register_container_1Lf",
  	"wrap": "Register_wrap_2Jx",
  	"list": "Register_list_2Nu",
  	"btn": "Register_btn_3hS",
  	"active": "Register_active_rEz"
  };

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _defineProperty = __webpack_require__(61);
  
  var _defineProperty2 = _interopRequireDefault(_defineProperty);
  
  var _getOwnPropertyDescriptor = __webpack_require__(79);
  
  var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(20);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _desc, _value, _class2, _descriptor; /**
                                                    * React Starter Kit (https://www.reactstarterkit.com/)
                                                    *
                                                    * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                    *
                                                    * This source code is licensed under the MIT license found in the
                                                    * LICENSE.txt file in the root directory of this source tree.
                                                    */
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(23);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Carousel = __webpack_require__(97);
  
  var _Carousel2 = _interopRequireDefault(_Carousel);
  
  var _mobxReact = __webpack_require__(72);
  
  var _mobx = __webpack_require__(62);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _initDefineProp(target, property, descriptor, context) {
      if (!descriptor) return;
      (0, _defineProperty2.default)(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }
  
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
  
      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }
  
      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);
  
      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }
  
      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }
  
      return desc;
  }
  
  function _initializerWarningHelper(descriptor, context) {
      throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }
  
  var Carousel = (0, _mobxReact.observer)(_class = (_class2 = function (_Component) {
      (0, _inherits3.default)(Carousel, _Component);
  
      function Carousel() {
          var _Object$getPrototypeO;
  
          var _temp, _this, _ret;
  
          (0, _classCallCheck3.default)(this, Carousel);
  
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }
  
          return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Carousel)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _initDefineProp(_this, 'currentIndex', _descriptor, _this), _this.imgData = [{
              imgSrc: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png',
              alt: 'hah'
          }, {
              imgSrc: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png',
              alt: 'hah'
          }, {
              imgSrc: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png',
              alt: 'hah'
          }], _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }
  
      (0, _createClass3.default)(Carousel, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.startPlay();
          }
      }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
              this.destroyTimer();
          }
      }, {
          key: 'startPlay',
          value: function startPlay() {
              var _this2 = this;
  
              this.handler = setInterval(function () {
                  if (_this2.currentIndex >= _this2.imgData.length - 1) {
                      _this2.currentIndex = 0;
                  } else {
                      _this2.currentIndex++;
                  }
              }, 3000);
          }
      }, {
          key: 'destroyTimer',
          value: function destroyTimer() {
              window.clearInterval(this.handler);
          }
      }, {
          key: 'changeImage',
          value: function changeImage(index) {
              this.currentIndex = index;
              this.destroyTimer();
              this.startPlay();
          }
          //     <li key={index}>
          //     <img alt={item.alt} src={item.imgSrc} />
          // </li>
  
      }, {
          key: 'imgRender',
          value: function imgRender() {
              var _this3 = this;
  
              return this.imgData.map(function (item, index) {
                  var child = _this3.props.children && _react2.default.cloneElement(_this3.props.children, { key: index });
                  return child;
              });
          }
      }, {
          key: 'dotRender',
          value: function dotRender() {
              var _this4 = this;
  
              return this.imgData.map(function (item, index) {
                  return _react2.default.createElement('li', {
                      key: index,
                      onClick: function onClick() {
                          return _this4.changeImage(index);
                      },
                      className: index === _this4.currentIndex ? _Carousel2.default.active : '' });
              });
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2.default.createElement(
                  'div',
                  { className: _Carousel2.default.wrap },
                  _react2.default.createElement(
                      'ul',
                      { className: _Carousel2.default.list, style: { left: this.leftValue } },
                      this.imgRender()
                  ),
                  _react2.default.createElement(
                      'ul',
                      { className: _Carousel2.default.btn },
                      this.dotRender()
                  )
              );
          }
      }, {
          key: 'leftValue',
          get: function get() {
              // 400 is the width of the visible area
              return -this.currentIndex * 400;
          }
      }]);
      return Carousel;
  }(_react.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'currentIndex', [_mobx.observable], {
      enumerable: true,
      initializer: function initializer() {
          return 0;
      }
  }), _applyDecoratedDescriptor(_class2.prototype, 'leftValue', [_mobx.computed], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'leftValue'), _class2.prototype)), _class2)) || _class;
  
  Carousel.propTypes = {
      children: _react.PropTypes.element
  };
  
  exports.default = (0, _withStyles2.default)(_Carousel2.default)(Carousel);

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(98);
      var insertCss = __webpack_require__(27);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Carousel.css", function() {
          content = require("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Carousel.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(26)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\r\n * React Starter Kit (https://www.reactstarterkit.com/)\r\n *\r\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\r\n *\r\n * This source code is licensed under the MIT license found in the\r\n * LICENSE.txt file in the root directory of this source tree.\r\n */\r\n\r\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\r\n\r\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\r\n\r\n.Carousel_root_17X {\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n}\r\n\r\n.Carousel_container_2RI {\r\n  margin: 0 auto;\r\n  padding: 0 0 40px;\r\n  max-width: 1000px;\r\n}\r\n\r\n.Carousel_wrap_vD6 {\r\n    width: 400px;\r\n    height: 320px;\r\n    overflow: hidden;\r\n    border: 1px solid #eee;\r\n    margin: 0 auto;\r\n    position: relative;\r\n}\r\n\r\n.Carousel_list_1Rr {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 320px;\r\n    width: 2000px;\r\n    padding-left: 0;\r\n    margin: 0;\r\n    -webkit-transition: .3s;\r\n    -o-transition: .3s;\r\n    transition: .3s;\r\n}\r\n\r\n.Carousel_list_1Rr li {\r\n    list-style: none;\r\n    float: left;\r\n    width: 400px;\r\n}\r\n\r\n.Carousel_list_1Rr li img {\r\n    vertical-align: top;\r\n    background-color: blue;\r\n}\r\n\r\n.Carousel_btn_1jr {\r\n    position: absolute;\r\n    overflow: hidden;\r\n    bottom: 0;\r\n    left: 125px;\r\n    padding: 0;\r\n    width: 150px;\r\n}\r\n\r\n.Carousel_btn_1jr li {\r\n    margin: 10px;\r\n    cursor: pointer;\r\n    background: blue;\r\n    float: left;\r\n    width: 10px;\r\n    height: 10px;\r\n    list-style: none;\r\n}\r\n\r\n.Carousel_btn_1jr .Carousel_active_2wn {\r\n    background: red;\r\n}", "", {"version":3,"sources":["/./components/Carousel/Carousel.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC;;AACD;IACI,aAAa;IACb,cAAc;IACd,iBAAiB;IACjB,uBAAuB;IACvB,eAAe;IACf,mBAAmB;CACtB;;AAED;IACI,mBAAmB;IACnB,OAAO;IACP,QAAQ;IACR,cAAc;IACd,cAAc;IACd,gBAAgB;IAChB,UAAU;IACV,wBAAgB;IAAhB,mBAAgB;IAAhB,gBAAgB;CACnB;;AAED;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;CAChB;;AAED;IACI,oBAAoB;IACpB,uBAAuB;CAC1B;;AAED;IACI,mBAAmB;IACnB,iBAAiB;IACjB,UAAU;IACV,YAAY;IACZ,WAAW;IACX,aAAa;CAChB;;AAED;IACI,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,iBAAiB;CACpB;;AAED;IACI,gBAAgB;CACnB","file":"Carousel.css","sourcesContent":["/**\r\n * React Starter Kit (https://www.reactstarterkit.com/)\r\n *\r\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\r\n *\r\n * This source code is licensed under the MIT license found in the\r\n * LICENSE.txt file in the root directory of this source tree.\r\n */\r\n\r\n@import '../../components/variables.css';\r\n\r\n.root {\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n}\r\n\r\n.container {\r\n  margin: 0 auto;\r\n  padding: 0 0 40px;\r\n  max-width: var(--max-content-width);\r\n}\r\n.wrap {\r\n    width: 400px;\r\n    height: 320px;\r\n    overflow: hidden;\r\n    border: 1px solid #eee;\r\n    margin: 0 auto;\r\n    position: relative;\r\n}\r\n\r\n.list {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 320px;\r\n    width: 2000px;\r\n    padding-left: 0;\r\n    margin: 0;\r\n    transition: .3s;\r\n}\r\n\r\n.list li {\r\n    list-style: none;\r\n    float: left;\r\n    width: 400px;\r\n}\r\n\r\n.list li img {\r\n    vertical-align: top;\r\n    background-color: blue;\r\n}\r\n\r\n.btn {\r\n    position: absolute;\r\n    overflow: hidden;\r\n    bottom: 0;\r\n    left: 125px;\r\n    padding: 0;\r\n    width: 150px;\r\n}\r\n\r\n.btn li {\r\n    margin: 10px;\r\n    cursor: pointer;\r\n    background: blue;\r\n    float: left;\r\n    width: 10px;\r\n    height: 10px;\r\n    list-style: none;\r\n}\r\n\r\n.btn .active {\r\n    background: red;\r\n}","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Carousel_root_17X",
  	"container": "Carousel_container_2RI",
  	"wrap": "Carousel_wrap_vD6",
  	"list": "Carousel_list_1Rr",
  	"btn": "Carousel_btn_1jr",
  	"active": "Carousel_active_2wn"
  };

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(6);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ExcelTable = __webpack_require__(100);
  
  var _ExcelTable2 = _interopRequireDefault(_ExcelTable);
  
  var _Chart = __webpack_require__(103);
  
  var _Chart2 = _interopRequireDefault(_Chart);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import Content from './Content';
  // import fetch from '../../core/fetch';
  
  exports.default = {
  
    path: '/content',
  
    action: function action(context) {
      var _this = this;
  
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var config;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // eslint-disable-line react/prop-types
                // const resp = await fetch('/graphql', {
                //   method: 'post',
                //   headers: {
                //     Accept: 'application/json',
                //     'Content-Type': 'application/json',
                //   },
                //   body: JSON.stringify({
                //     query: `{content(path:"${path}"){path,title,content,component}}`,
                //   }),
                //   credentials: 'include',
                // });
                // if (resp.status !== 200) throw new Error(resp.statusText);
                // const { data } = await resp.json();
                // if (!data || !data.content) return undefined;
                console.log('before require');
                try {
                  // var SimpleChartComponent = await new Promise((resolve) => {
                  //   require.ensure([], (require) =>
                  //     resolve(require('./../../components/Chart/Chart').default));
                  // });
  
                  // the config structure for the excel
                  config = {
                    type: 'horizontal', // horizontal
                    data: [{ header: 'aaa', value: [1, 2, 3, 4, 5, 6, 6, 6, 6] }, { header: 'aaa', value: [1, 2, 3, 4, 5, 6, 6, 6, 6] }]
                  };
                } catch (e) {
                  console.log(context);
                  console.log(e);
                }
                return _context.abrupt('return', _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_Chart2.default, null),
                  _react2.default.createElement(_ExcelTable2.default, { data: config })
                ));
  
              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(20);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(23);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ExcelTable = __webpack_require__(101);
  
  var _ExcelTable2 = _interopRequireDefault(_ExcelTable);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var ExcelTable = function (_Component) {
      (0, _inherits3.default)(ExcelTable, _Component);
  
      function ExcelTable() {
          (0, _classCallCheck3.default)(this, ExcelTable);
          return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ExcelTable).apply(this, arguments));
      }
  
      (0, _createClass3.default)(ExcelTable, [{
          key: 'render',
          value: function render() {
              var _props$data = this.props.data;
              var type = _props$data.type;
              var data = _props$data.data;
  
              return _react2.default.createElement(
                  'div',
                  { className: type === 'vertical' ? _ExcelTable2.default.vertical : _ExcelTable2.default.horizontal },
                  data.map(function (table, index) {
                      return _react2.default.createElement(
                          'div',
                          {
                              key: index,
                              className: _ExcelTable2.default.table },
                          _react2.default.createElement(
                              'div',
                              {
                                  className: _ExcelTable2.default.header },
                              table.header
                          ),
                          table.value.map(function (item, indexer) {
                              return _react2.default.createElement(
                                  'div',
                                  {
                                      className: _ExcelTable2.default.content,
                                      key: indexer },
                                  item
                              );
                          })
                      );
                  })
              );
          }
      }]);
      return ExcelTable;
  }(_react.Component);
  
  ExcelTable.propTypes = {
      data: _react.PropTypes.object
  };
  
  exports.default = (0, _withStyles2.default)(_ExcelTable2.default)(ExcelTable);

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(102);
      var insertCss = __webpack_require__(27);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./ExcelTable.css", function() {
          content = require("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./ExcelTable.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(26)();
  // imports
  
  
  // module
  exports.push([module.id, "/*.vertical .header {\r\n    width: 100px;\r\n    text-align: center;\r\n}\r\n\r\n.vertical .number {\r\n    width: 100px;\r\n    text-align: center;\r\n}\r\n\r\n.horizontal {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.horizontal .header {\r\n    width: 100px;\r\n    text-align: center;\r\n}\r\n\r\n.horizontal .number {\r\n    width: 100px;\r\n    text-align: center;\r\n}\r\n\r\n.horizontal .table {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    float: left;\r\n}\r\n\r\n.vertical .table {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}*/\r\n\r\n.ExcelTable_vertical_1KV {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex\r\n}\r\n\r\n.ExcelTable_vertical_1KV .ExcelTable_table_2JN {\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex-grow: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n}\r\n\r\n.ExcelTable_horizontal_3F- {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -webkit-flex-direction: column;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column\r\n}\r\n\r\n.ExcelTable_header_Bdr, .ExcelTable_content_u1r {\r\n    text-align: center\r\n}\r\n\r\n.ExcelTable_horizontal_3F- .ExcelTable_table_2JN {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.ExcelTable_horizontal_3F- .ExcelTable_table_2JN .ExcelTable_header_Bdr, .ExcelTable_horizontal_3F- .ExcelTable_table_2JN .ExcelTable_content_u1r {\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex-grow: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n}", "", {"version":3,"sources":["/./components/ExcelTable/ExcelTable.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAqCG;;AAEH;IACI,qBAAa;IAAb,sBAAa;IAAb,qBAAa;IAAb,aAAa;CAChB;;AAED;IACI,oBAAa;IAAb,qBAAa;QAAb,qBAAa;YAAb,aAAa;CAChB;;AAED;IACI,qBAAc;IAAd,sBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,6BAAsB;IAAtB,8BAAsB;IAAtB,+BAAsB;QAAtB,2BAAsB;YAAtB,sBAAsB;CACzB;;AAED;IACI,kBAAkB;CACrB;;AAED;IACI,qBAAc;IAAd,sBAAc;IAAd,qBAAc;IAAd,cAAc;CACjB;;AAED;IACI,oBAAa;IAAb,qBAAa;QAAb,qBAAa;YAAb,aAAa;CAChB","file":"ExcelTable.css","sourcesContent":["/*.vertical .header {\r\n    width: 100px;\r\n    text-align: center;\r\n}\r\n\r\n.vertical .number {\r\n    width: 100px;\r\n    text-align: center;\r\n}\r\n\r\n.horizontal {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.horizontal .header {\r\n    width: 100px;\r\n    text-align: center;\r\n}\r\n\r\n.horizontal .number {\r\n    width: 100px;\r\n    text-align: center;\r\n}\r\n\r\n.horizontal .table {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    float: left;\r\n}\r\n\r\n.vertical .table {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}*/\r\n\r\n.vertical {\r\n    display: flex\r\n}\r\n\r\n.vertical .table {\r\n    flex-grow: 1;\r\n}\r\n\r\n.horizontal {\r\n    display: flex;\r\n    flex-direction: column\r\n}\r\n\r\n.header, .content {\r\n    text-align: center\r\n}\r\n\r\n.horizontal .table {\r\n    display: flex;\r\n}\r\n\r\n.horizontal .table .header, .horizontal .table .content {\r\n    flex-grow: 1;\r\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"vertical": "ExcelTable_vertical_1KV",
  	"table": "ExcelTable_table_2JN",
  	"horizontal": "ExcelTable_horizontal_3F-",
  	"header": "ExcelTable_header_Bdr",
  	"content": "ExcelTable_content_u1r"
  };

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _defineProperty = __webpack_require__(61);
  
  var _defineProperty2 = _interopRequireDefault(_defineProperty);
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(20);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _desc, _value, _class2, _descriptor;
  // import withStyles from 'isomorphic-style-loader/lib/withStyles';
  // import s from './Tabs.css';
  // import Link from '../Link'
  // import history from './../../core/history'
  
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _echartsForReact = __webpack_require__(104);
  
  var _echartsForReact2 = _interopRequireDefault(_echartsForReact);
  
  var _mobxReact = __webpack_require__(72);
  
  var _mobx = __webpack_require__(62);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _initDefineProp(target, property, descriptor, context) {
      if (!descriptor) return;
      (0, _defineProperty2.default)(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }
  
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
  
      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }
  
      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);
  
      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }
  
      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }
  
      return desc;
  }
  
  function _initializerWarningHelper(descriptor, context) {
      throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }
  
  // import { httpGetJSON } from './../../core/HTTPUtils'
  
  var SimpleChartComponent = (0, _mobxReact.observer)(_class = (_class2 = function (_Component) {
      (0, _inherits3.default)(SimpleChartComponent, _Component);
  
      function SimpleChartComponent() {
          var _Object$getPrototypeO;
  
          var _temp, _this, _ret;
  
          (0, _classCallCheck3.default)(this, SimpleChartComponent);
  
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }
  
          return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(SimpleChartComponent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _initDefineProp(_this, 'option', _descriptor, _this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }
  
      (0, _createClass3.default)(SimpleChartComponent, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.option = {
                  title: {
                      text: '堆叠区域图'
                  },
                  tooltip: {
                      trigger: 'axis'
                  },
                  legend: {
                      data: ['邮件营销', '联盟广告', '视频广告']
                  },
                  toolbox: {
                      feature: {
                          saveAsImage: {}
                      }
                  },
                  grid: {
                      left: '3%',
                      right: '4%',
                      bottom: '3%',
                      containLabel: true
                  },
                  xAxis: [{
                      type: 'category',
                      boundaryGap: false,
                      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                  }],
                  yAxis: [{
                      type: 'value'
                  }],
                  series: [{
                      name: '邮件营销',
                      type: 'line',
                      stack: '总量',
                      areaStyle: { normal: {} },
                      data: [120, 132, 101, 134, 90, 230, 210]
                  }, {
                      name: '联盟广告',
                      type: 'line',
                      stack: '总量',
                      areaStyle: { normal: {} },
                      data: [220, 182, 191, 234, 290, 330, 310]
                  }, {
                      name: '视频广告',
                      type: 'line',
                      stack: '总量',
                      areaStyle: { normal: {} },
                      data: [150, 232, 201, 154, 190, 330, 410]
                  }]
              };
          }
      }, {
          key: 'onChartReady',
          value: function onChartReady(chart) {
              setTimeout(function () {
                  chart.hideLoading();
              }, 3000);
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2.default.createElement(
                  'div',
                  { className: 'examples' },
                  _react2.default.createElement(
                      'div',
                      { className: 'parent' },
                      _react2.default.createElement(
                          'label',
                          null,
                          ' render a Simple echart With ',
                          _react2.default.createElement(
                              'strong',
                              null,
                              'option and height'
                          ),
                          ': '
                      ),
                      !!this.option ? _react2.default.createElement(_echartsForReact2.default, {
                          option: this.option,
                          style: { height: '350px', width: '100%' },
                          className: 'react_for_echarts',
                          showLoading: true,
                          onChartReady: this.onChartReady,
                          modules: ['echarts/lib/chart/bar', 'echarts/lib/component/tooltip', 'echarts/lib/component/title']
                      }) : undefined
                  )
              );
          }
      }]);
      return SimpleChartComponent;
  }(_react.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'option', [_mobx.observable], {
      enumerable: true,
      initializer: function initializer() {
          return undefined;
      }
  })), _class2)) || _class;
  
  exports.default = SimpleChartComponent;

/***/ },
/* 104 */
/***/ function(module, exports) {

  module.exports = require("echarts-for-react");

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _App = __webpack_require__(34);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _ErrorPage = __webpack_require__(22);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/error',
  
    action: function action(_ref) {
      var render = _ref.render;
      var context = _ref.context;
      var error = _ref.error;
  
      return render(_react2.default.createElement(
        _App2.default,
        { context: context, error: error },
        _react2.default.createElement(_ErrorPage2.default, { error: error })
      ), error.status || 500);
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(6);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _promise = __webpack_require__(59);
  
  var _promise2 = _interopRequireDefault(_promise);
  
  var _asyncToGenerator2 = __webpack_require__(7);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _syncStore = __webpack_require__(67);
  
  var _UserInfo = __webpack_require__(60);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import Login from './Login';
  exports.default = {
  
    path: '/detail/:id',
  
    action: function action(context) {
      var _this = this;
  
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var Detail;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _promise2.default(function (resolve) {
                  !/* require.ensure */(function (require) {
                    return resolve(__webpack_require__(107).default);
                  }(__webpack_require__));
                });
  
              case 2:
                Detail = _context.sent;
  
                (0, _syncStore.updateStore)({ userInfo: _UserInfo.userInfo });
                _UserInfo.userInfo.noFetch = false;
                return _context.abrupt('return', _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(Detail, { id: context.params.id })
                ));
  
              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(20);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _temp; /**
                      * React Starter Kit (https://www.reactstarterkit.com/)
                      *
                      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                      *
                      * This source code is licensed under the MIT license found in the
                      * LICENSE.txt file in the root directory of this source tree.
                      */
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(23);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Detail = __webpack_require__(108);
  
  var _Detail2 = _interopRequireDefault(_Detail);
  
  var _UserInfo = __webpack_require__(60);
  
  var _Test = __webpack_require__(85);
  
  var _Test2 = _interopRequireDefault(_Test);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Detail page with params';
  
  // Test section
  //---------------------------------------------------------------------------------------
  
  
  //-----------------------------------------------------------------------------------
  
  var Detail = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Detail, _Component);
  
    function Detail() {
      (0, _classCallCheck3.default)(this, Detail);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Detail).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Detail, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.setTitle(title);
      }
    }, {
      key: 'postTest',
      value: function postTest() {
        console.log('post test now');
      }
    }, {
      key: 'preventForm',
      value: function preventForm() {
        // e.preventDefault();
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Test2.default, null),
          'this is the params got from path ',
          this.props.id,
          _react2.default.createElement(
            'form',
            { ref: 'myForm', action: '/signin', method: 'post' },
            _react2.default.createElement(
              'label',
              null,
              'name: '
            ),
            _react2.default.createElement('input', { name: 'name' }),
            _react2.default.createElement(
              'label',
              null,
              'password: '
            ),
            _react2.default.createElement('input', { type: 'password', name: 'pwd' }),
            _react2.default.createElement(
              'button',
              { onClick: this.preventForm.bind(this), type: 'submit' },
              'submit'
            )
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.postTest.bind(this) },
            'POST test'
          ),
          _UserInfo.userInfo.loginErr ? 'error here' : 'no error'
        );
      }
    }]);
    return Detail;
  }(_react.Component), _class.contextTypes = {
    setTitle: _react.PropTypes.func.isRequired
  }, _class.propTypes = {
    id: _react.PropTypes.string
  }, _temp);
  exports.default = (0, _withStyles2.default)(_Detail2.default)(Detail);

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(109);
      var insertCss = __webpack_require__(27);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Detail.css", function() {
          content = require("!!./../../../node_modules/.0.23.1@css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/.0.9.1@postcss-loader/index.js?pack=default!./Detail.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(26)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n.Detail_root_1eI {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.Detail_container_3f9 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n.Detail_lead_1xS {\n  font-size: 1.25em;\n}\n.Detail_formGroup_3nj {\n  margin-bottom: 15px;\n}\n.Detail_label_2ke {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n.Detail_input_2J8 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n}\n.Detail_input_2J8:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Detail_button_2JE {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.Detail_button_2JE:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.Detail_button_2JE:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Detail_facebook_3kH {\n  border-color: #3b5998;\n  background: #3b5998;\n}\n.Detail_facebook_3kH:hover {\n  background: #2d4373;\n}\n.Detail_google_HjY {\n  border-color: #dd4b39;\n  background: #dd4b39;\n}\n.Detail_google_HjY:hover {\n  background: #c23321;\n}\n.Detail_twitter_1Nc {\n  border-color: #55acee;\n  background: #55acee;\n}\n.Detail_twitter_1Nc:hover {\n  background: #2795e9;\n}\n.Detail_icon_1Xl {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.Detail_lineThrough_1sT {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.Detail_lineThrough_1sT::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.Detail_lineThrough_1sT::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n", "", {"version":3,"sources":["/./routes/detail/Detail.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;ACPH;;;;;;;GAOG;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;ADpBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;CAClB;AAED;EACE,kBAAkB;CACnB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;CAClB;AAED;EACE,eAAe;EACf,+BAAuB;UAAvB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,yDAAiD;UAAjD,iDAAiD;EACjD,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,yFAAyE;EAAzE,iFAAyE;EAAzE,4EAAyE;EAAzE,yEAAyE;EAAzE,+GAAyE;CAC1E;AAED;EACE,sBAAsB;EACtB,yFAAiF;UAAjF,iFAAiF;CAClF;AAED;EACE,eAAe;EACf,+BAAuB;UAAvB,uBAAuB;EACvB,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;CACjB;AAED;EACE,mCAAmC;CACpC;AAED;EACE,sBAAsB;EACtB,mDAA2C;UAA3C,2CAA2C;CAC5C;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;CACpB;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,eAAe;CAChB;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;CACb;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,YAAY;CACb","file":"Detail.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n\n.lead {\n  font-size: 1.25em;\n}\n\n.formGroup {\n  margin-bottom: 15px;\n}\n\n.label {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n\n.input {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.input:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.button {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n\n.button:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n\n.button:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.facebook {\n  border-color: #3b5998;\n  background: #3b5998;\n  composes: button;\n}\n\n.facebook:hover {\n  background: #2d4373;\n}\n\n.google {\n  border-color: #dd4b39;\n  background: #dd4b39;\n  composes: button;\n}\n\n.google:hover {\n  background: #c23321;\n}\n\n.twitter {\n  border-color: #55acee;\n  background: #55acee;\n  composes: button;\n}\n\n.twitter:hover {\n  background: #2795e9;\n}\n\n.icon {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.lineThrough {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n\n.lineThrough::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n\n.lineThrough::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Detail_root_1eI",
  	"container": "Detail_container_3f9",
  	"lead": "Detail_lead_1xS",
  	"formGroup": "Detail_formGroup_3nj",
  	"label": "Detail_label_2ke",
  	"input": "Detail_input_2J8",
  	"button": "Detail_button_2JE",
  	"facebook": "Detail_facebook_3kH Detail_button_2JE",
  	"google": "Detail_google_HjY Detail_button_2JE",
  	"twitter": "Detail_twitter_1Nc Detail_button_2JE",
  	"icon": "Detail_icon_1Xl",
  	"lineThrough": "Detail_lineThrough_1sT"
  };

/***/ },
/* 110 */,
/* 111 */,
/* 112 */
/***/ function(module, exports) {

  module.exports = require("./assets");

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.generateCookie = undefined;
  
  var _jsonwebtoken = __webpack_require__(114);
  
  var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var generateCookie = exports.generateCookie = function generateCookie(info, auth, res) {
      // const expiresIn = 60; // 180 days
      var expiresIn = 60 * 60 * 24 * 180; // 180 days
      var token = _jsonwebtoken2.default.sign(info, auth.jwt.secret, { expiresIn: expiresIn });
  
      //  TODO: store the {userId,token} in redis if we need
      //  set token in cookies
      res.cookie('id_token', token, {
          expires: new Date(Date.now() + 900000),
          maxAge: 1000 * expiresIn,
          httpOnly: true
      });
  };

/***/ },
/* 114 */
/***/ function(module, exports) {

  module.exports = require("jsonwebtoken");

/***/ },
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.dropDownMenu = undefined;
  
  var _defineProperty = __webpack_require__(61);
  
  var _defineProperty2 = _interopRequireDefault(_defineProperty);
  
  var _getOwnPropertyDescriptor = __webpack_require__(79);
  
  var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(20);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(14);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _mobxReact = __webpack_require__(72);
  
  var _mobx = __webpack_require__(62);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _initDefineProp(target, property, descriptor, context) {
      if (!descriptor) return;
      (0, _defineProperty2.default)(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
  }
  
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
  
      if ('value' in desc || desc.initializer) {
          desc.writable = true;
      }
  
      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
      }, desc);
  
      if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
      }
  
      if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
      }
  
      return desc;
  }
  
  function _initializerWarningHelper(descriptor, context) {
      throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }
  // import withStyles from 'isomorphic-style-loader/lib/withStyles';
  // import s from './DropDownMenu.css';
  
  
  var dropDownMenu = exports.dropDownMenu = function dropDownMenu(PopComponent) {
      return function (Target) {
          var _class, _desc, _value, _class2, _descriptor;
  
          return (0, _mobxReact.observer)(_class = (_class2 = function (_Component) {
              (0, _inherits3.default)(ComposedComponent, _Component);
  
              function ComposedComponent() {
                  var _Object$getPrototypeO;
  
                  var _temp, _this, _ret;
  
                  (0, _classCallCheck3.default)(this, ComposedComponent);
  
                  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                      args[_key] = arguments[_key];
                  }
  
                  return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(ComposedComponent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _initDefineProp(_this, 'show', _descriptor, _this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
              }
  
              (0, _createClass3.default)(ComposedComponent, [{
                  key: 'showMenu',
                  value: function showMenu() {
                      this.show = true;
                  }
              }, {
                  key: 'hideMenu',
                  value: function hideMenu() {
                      this.show = false;
                  }
              }, {
                  key: 'render',
                  value: function render() {
                      return _react2.default.createElement(
                          Target,
                          {
                              onMouseOver: this.showMenu.bind(this),
                              onMouseLeave: this.hideMenu.bind(this) },
                          this.show ? _react2.default.createElement(PopComponent, null) : undefined
                      );
                  }
              }]);
              return ComposedComponent;
          }(_react.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'show', [_mobx.observable], {
              enumerable: true,
              initializer: function initializer() {
                  return false;
              }
          }), _applyDecoratedDescriptor(_class2.prototype, 'showMenu', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'showMenu'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'hideMenu', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'hideMenu'), _class2.prototype)), _class2)) || _class;
      };
  };

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map