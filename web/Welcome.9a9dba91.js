// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, cache, entry, mainEntry, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject.parcelRequire === 'function' &&
    globalObject.parcelRequire;
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  globalObject.parcelRequire = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5W0Mg":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');

Refresh.injectIntoGlobalHook(window);

window.$RefreshReg$ = function () {};

window.$RefreshSig$ = function () {
  return function (type) {
    return type;
  };
};
},{"react-refresh/runtime":"3NneF"}],"2YYrm":[function(require,module,exports) {
var global = arguments[3];

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "9a9dba9130be6c02ade5115835e742f6";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH */

var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function accept(fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function dispose(fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept, acceptedAssets; // eslint-disable-next-line no-redeclare

var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
  var port = HMR_PORT || location.port;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    acceptedAssets = {};
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      var assets = data.assets.filter(function (asset) {
        return asset.envHash === HMR_ENV_HASH;
      }); // Handle HMR Update

      var handled = false;
      assets.forEach(function (asset) {
        var didAccept = asset.type === 'css' || hmrAcceptCheck(global.parcelRequire, asset.id);

        if (didAccept) {
          handled = true;
        }
      });

      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });

        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];

          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'error') {
      // Log parcel errors to console
      var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ansiDiagnostic = _step.value;
          var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
          console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        } // Render the fancy html overlay

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      document.body.appendChild(overlay);
    }
  };

  ws.onerror = function (e) {
    console.error(e.message);
  };

  ws.onclose = function (e) {
    console.warn('[parcel] 🚨 Connection to the HMR server was lost');
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}

function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';

  var _iterator2 = _createForOfIteratorHelper(diagnostics),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var diagnostic = _step2.value;
      var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
      errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function (hint) {
        return '<div>' + hint + '</div>';
      }).join(''), "\n        </div>\n      </div>\n    ");
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    if (link.parentNode !== null) {
      link.parentNode.removeChild(link);
    }
  };

  newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now());
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      var absolute = /^https?:\/\//i.test(links[i].getAttribute('href'));

      if (!absolute) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    if (asset.type === 'css') {
      reloadCSS();
    } else {
      var fn = new Function('require', 'module', 'exports', asset.output);
      modules[asset.id] = [fn, asset.depsByBundle[bundle.HMR_BUNDLE_ID]];
    }
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1]);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(global.parcelRequire, id);
      });

      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }

  acceptedAssets[id] = true;
}
},{}],"4bRKj":[function(require,module,exports) {
"use strict";

var helpers = require("../../../../../node_modules/@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");

var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
helpers.prelude(module);

try {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

  var _core = require("@chakra-ui/core");

  var firebase = _interopRequireWildcard(require("~/src/services/firebase"));

  var _Hello = require("~/src/system/animations/Hello");

  var _HouseParty = _interopRequireDefault(require("~/src/system/illustrations/HouseParty"));

  var Motion = _interopRequireWildcard(require("~/src/system/Motion"));

  var _react = _interopRequireDefault(require("react"));

  var _StyledFirebaseAuth = _interopRequireDefault(require("react-firebaseui/StyledFirebaseAuth"));

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var _default = () => /*#__PURE__*/_react.default.createElement(Motion.Flex, {
    initial: "initial",
    animate: "enter",
    exit: "leave",
    variants: {
      initial: {
        opacity: 0,
        y: 200,
        transition: {
          type: "spring"
        }
      },
      enter: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          type: "spring"
        }
      },
      leave: {
        opacity: 0,
        x: -100,
        transition: {
          duration: 1
        }
      }
    },
    w: "100%",
    align: "center",
    justify: "space-around",
    wrap: "wrap-reverse"
  }, /*#__PURE__*/_react.default.createElement(Illustration, {
    w: [280, 360, 420],
    mt: [24, 24, 0]
  }), /*#__PURE__*/_react.default.createElement(Greeting, {
    w: [420, 420, 560]
  }));

  exports.default = _default;

  const Illustration = props => {
    const motion = {
      initial: {
        opacity: 0,
        scale: 0
      },
      enter: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring"
        }
      }
    };
    return /*#__PURE__*/_react.default.createElement(Motion.Box, _extends({}, props, {
      variants: motion,
      whileHover: {
        scale: 1.1
      }
    }), /*#__PURE__*/_react.default.createElement(_HouseParty.default, null));
  };

  _c = Illustration;

  const Greeting = props => {
    const motion = {
      initial: {
        opacity: 0,
        translateY: 30
      },
      enter: i => ({
        opacity: 1,
        translateY: 0,
        transition: {
          delay: 3 + i * 0.5,
          type: "spring",
          velocity: 0.7
        }
      })
    };
    return /*#__PURE__*/_react.default.createElement(_core.Stack, _extends({}, props, {
      spacing: 16
    }), /*#__PURE__*/_react.default.createElement(_core.Box, {
      w: "100%",
      maxW: 360,
      mb: 24,
      mx: "auto"
    }, /*#__PURE__*/_react.default.createElement(_Hello.Hello, null)), /*#__PURE__*/_react.default.createElement(Motion.Stack, {
      color: "gold.700",
      spacing: 4
    }, /*#__PURE__*/_react.default.createElement(Motion.Box, {
      custom: 0,
      variants: motion
    }, /*#__PURE__*/_react.default.createElement(_core.Heading, {
      textAlign: "center",
      as: "h1",
      size: "2xl"
    }, "Welcome to Pinlist!")), /*#__PURE__*/_react.default.createElement(Motion.Box, {
      custom: 1,
      variants: motion
    }, /*#__PURE__*/_react.default.createElement(_core.Text, {
      fontSize: "xl"
    }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente eligendi tenetur corporis maiores ducimus nostrum error commodi fuga sint, asperiores beatae unde, officiis quas deleniti quaerat neque doloribus facilis reprehenderit!")), /*#__PURE__*/_react.default.createElement(Motion.Box, {
      mt: 4,
      mx: [0, 4, 16],
      variants: motion,
      custom: 2
    }, /*#__PURE__*/_react.default.createElement(_core.Button, {
      w: "100%",
      size: "lg",
      variantColor: "gold",
      rightIcon: "arrow-forward"
    }, "Get Started"), /*#__PURE__*/_react.default.createElement(FirebaseLogin, null))));
  };

  _c2 = Greeting;

  const FirebaseLogin = () => /*#__PURE__*/_react.default.createElement(_StyledFirebaseAuth.default, {
    firebaseAuth: firebase.auth,
    uiConfig: {
      signInFlow: "popup",
      signInOptions: [firebase.client.auth.PhoneAuthProvider.PROVIDER_ID],
      callbacks: {
        signInFailure(error) {
          return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  debugger;

                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
        },

        uiShown() {},

        signInSuccessWithAuthResult(result) {
          debugger;
          return true;
        }

      }
    }
  });

  _c3 = FirebaseLogin;

  var _c, _c2, _c3;

  $RefreshReg$(_c, "Illustration");
  $RefreshReg$(_c2, "Greeting");
  $RefreshReg$(_c3, "FirebaseLogin");
  helpers.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"@babel/runtime/regenerator":"1ZLPP","@chakra-ui/core":"2sX8P","~/src/services/firebase":"SFBzS","~/src/system/animations/Hello":"0vmYW","~/src/system/illustrations/HouseParty":"Pn1Kf","~/src/system/Motion":"5Jodj","react":"UCOaU","react-firebaseui/StyledFirebaseAuth":"3jsRt","../../../../../node_modules/@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"38SjL"}],"1ZLPP":[function(require,module,exports) {
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":"DC1mz"}],"DC1mz":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"0vmYW":[function(require,module,exports) {
"use strict";

var helpers = require("../../../node_modules/@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");

var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
helpers.prelude(module);

try {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Hello = void 0;

  var _core = require("@emotion/core");

  var _hooks = require("@umijs/hooks");

  var _classnames = _interopRequireDefault(require("classnames"));

  var _react = _interopRequireDefault(require("react"));

  var _useDelay = require("../hooks/useDelay");

  var _theme = _interopRequireDefault(require("../theme"));

  var _s = $RefreshSig$();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  const Hello = ({
    animate = true
  }) => {
    _s();

    const _useBoolean = (0, _hooks.useBoolean)(!animate),
          state = _useBoolean.state,
          setTrue = _useBoolean.setTrue;

    (0, _useDelay.useDelay)(setTrue, 50, []);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StyleSheet, null), /*#__PURE__*/_react.default.createElement("svg", {
      id: "Hello",
      className: (0, _classnames.default)({
        animate: state
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 582 197"
    }, /*#__PURE__*/_react.default.createElement("path", {
      className: "path path-1",
      d: "M208,338c38-16.67,73.74-45.72,97.33-66,21.33-18.33,32.67-35.67,37.33-52.67C347.12,203.12,344,192,332,192c-11,0-21,10.33-24.94,27.68-4.52,19.89-22.06,107.82-29.39,149,15.67-72.33,36.33-81.33,53.67-81.33,22.33,0,24.67,18.67,19.42,39-5.43,21.07-7.42,44.32,17.91,44.32,18,0,35.53-8.17,52.67-20,14-9.67,23-24,23-40,0-13.42-8-23.33-20.67-23.33s-24.33,12-24.33,33.33c0,27,16.33,48,44,48,25.67,0,47.67-19.67,62-44.67,13.61-23.74,30.67-64.67,33.33-92.67s-5.33-36-18.67-36-24.67,17.33-28.67,43.33S486,302,491.33,330s28,37.67,46,37.67,38.17-15.67,52-37c16.54-25.51,35.87-67.45,38.67-102,2-24.67-8.67-33.33-20-33.33-14.67,0-23.33,13.33-28,38-4.5,23.81-8,64-2,94,4.64,23.21,25.33,40.33,44.67,40.33s32.67-19,36.67-42.33",
      transform: "translate(-199 -183)"
    }), /*#__PURE__*/_react.default.createElement("path", {
      className: "path path-2",
      d: "M697.33,287.33C672,287.33,661.33,305,659,327c-2.81,26.54,10.33,41.67,29.67,41.67,22,0,34.54-20.78,36.67-40.67,2-18.67-7.39-39.13-28-40.67",
      transform: "translate(-199 -183)"
    }), /*#__PURE__*/_react.default.createElement("path", {
      className: "path path-3",
      d: "M714.8,295.12c12.11,12.26,43.53,9.55,56.53-5.79",
      transform: "translate(-199 -183)"
    }), /*#__PURE__*/_react.default.createElement("line", {
      className: "path path-4",
      x1: "561",
      y1: "181.67",
      x2: "561",
      y2: "181.67"
    })));
  };

  exports.Hello = Hello;

  _s(Hello, "IPuwxdKt763f3uzBoT3+aq56bkc=", false, function () {
    return [_hooks.useBoolean, _useDelay.useDelay];
  });

  _c = Hello;

  const StyleSheet = () => /*#__PURE__*/_react.default.createElement(_core.Global, {
    styles: (0, _core.css)`
      #Hello {
        &.animate {
          .path-1,
          .path-2,
          .path-3 {
            stroke-dashoffset: 0;
          }
          .path-4 {
            stroke-width: 18px;
          }
        }
        .path {
          fill: none;
          stroke: ${_theme.default.colors.gold.base};
          stroke-width: 18px;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .path-1 {
          stroke-dasharray: 1850 2000;
          stroke-dashoffset: 1851;
          transition: 2s linear;
        }
        .path-2 {
          stroke-dasharray: 260 1000;
          stroke-dashoffset: 261;
          transition: 0.5s linear 2s;
        }
        .path-3 {
          stroke-dasharray: 100 1000;
          stroke-dashoffset: 101;
          transition: 0.35s linear 2.5s;
        }
        .path-4 {
          stroke-width: 0;
          transition: 0.2s linear 2.85s;
        }
      }
    `
  });

  _c2 = StyleSheet;

  var _c, _c2;

  $RefreshReg$(_c, "Hello");
  $RefreshReg$(_c2, "StyleSheet");
  helpers.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"@emotion/core":"1svqm","@umijs/hooks":"1Z92y","classnames":"5R8v2","react":"UCOaU","../hooks/useDelay":"5ERF1","../theme":"5YqBB","../../../node_modules/@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"38SjL"}],"1Z92y":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useRequest", {
  enumerable: true,
  get: function get() {
    return _useRequest.default;
  }
});
Object.defineProperty(exports, "useAntdTable", {
  enumerable: true,
  get: function get() {
    return _useAntdTable.default;
  }
});
Object.defineProperty(exports, "useAPI", {
  enumerable: true,
  get: function get() {
    return _useAPI.default;
  }
});
Object.defineProperty(exports, "configRequest", {
  enumerable: true,
  get: function get() {
    return _useAPI.configRequest;
  }
});
Object.defineProperty(exports, "useAsync", {
  enumerable: true,
  get: function get() {
    return _useAsync.default;
  }
});
Object.defineProperty(exports, "useLoadMore", {
  enumerable: true,
  get: function get() {
    return _useLoadMore.default;
  }
});
Object.defineProperty(exports, "useSearch", {
  enumerable: true,
  get: function get() {
    return _useSearch.default;
  }
});
Object.defineProperty(exports, "useControllableValue", {
  enumerable: true,
  get: function get() {
    return _useControllableValue.default;
  }
});
Object.defineProperty(exports, "useDynamicList", {
  enumerable: true,
  get: function get() {
    return _useDynamicList.default;
  }
});
Object.defineProperty(exports, "useEventEmitter", {
  enumerable: true,
  get: function get() {
    return _useEventEmitter.default;
  }
});
Object.defineProperty(exports, "useVirtualList", {
  enumerable: true,
  get: function get() {
    return _useVirtualList.default;
  }
});
Object.defineProperty(exports, "configResponsive", {
  enumerable: true,
  get: function get() {
    return _useResponsive.configResponsive;
  }
});
Object.defineProperty(exports, "useResponsive", {
  enumerable: true,
  get: function get() {
    return _useResponsive.useResponsive;
  }
});
Object.defineProperty(exports, "useSize", {
  enumerable: true,
  get: function get() {
    return _useSize.default;
  }
});
Object.defineProperty(exports, "useLocalStorageState", {
  enumerable: true,
  get: function get() {
    return _useLocalStorageState.default;
  }
});
Object.defineProperty(exports, "useSessionStorageState", {
  enumerable: true,
  get: function get() {
    return _useSessionStorageState.default;
  }
});
Object.defineProperty(exports, "useUpdateEffect", {
  enumerable: true,
  get: function get() {
    return _useUpdateEffect.default;
  }
});
Object.defineProperty(exports, "useUpdateLayoutEffect", {
  enumerable: true,
  get: function get() {
    return _useUpdateLayoutEffect.default;
  }
});
Object.defineProperty(exports, "usePagination", {
  enumerable: true,
  get: function get() {
    return _usePagination.default;
  }
});
Object.defineProperty(exports, "useBoolean", {
  enumerable: true,
  get: function get() {
    return _useBoolean.default;
  }
});
Object.defineProperty(exports, "useToggle", {
  enumerable: true,
  get: function get() {
    return _useToggle.default;
  }
});
Object.defineProperty(exports, "useDocumentVisibility", {
  enumerable: true,
  get: function get() {
    return _useDocumentVisibility.default;
  }
});
Object.defineProperty(exports, "useSelections", {
  enumerable: true,
  get: function get() {
    return _useSelections.default;
  }
});
Object.defineProperty(exports, "useThrottle", {
  enumerable: true,
  get: function get() {
    return _useThrottle.default;
  }
});
Object.defineProperty(exports, "useThrottleFn", {
  enumerable: true,
  get: function get() {
    return _useThrottleFn.default;
  }
});
Object.defineProperty(exports, "useDebounce", {
  enumerable: true,
  get: function get() {
    return _useDebounce.default;
  }
});
Object.defineProperty(exports, "useDebounceFn", {
  enumerable: true,
  get: function get() {
    return _useDebounceFn.default;
  }
});
Object.defineProperty(exports, "usePrevious", {
  enumerable: true,
  get: function get() {
    return _usePrevious.default;
  }
});
Object.defineProperty(exports, "useMouse", {
  enumerable: true,
  get: function get() {
    return _useMouse.default;
  }
});
Object.defineProperty(exports, "useScroll", {
  enumerable: true,
  get: function get() {
    return _useScroll.default;
  }
});
Object.defineProperty(exports, "useClickAway", {
  enumerable: true,
  get: function get() {
    return _useClickAway.default;
  }
});
Object.defineProperty(exports, "useFullscreen", {
  enumerable: true,
  get: function get() {
    return _useFullscreen.default;
  }
});
Object.defineProperty(exports, "useInViewport", {
  enumerable: true,
  get: function get() {
    return _useInViewport.default;
  }
});
Object.defineProperty(exports, "useKeyPress", {
  enumerable: true,
  get: function get() {
    return _useKeyPress.default;
  }
});
Object.defineProperty(exports, "useEventListener", {
  enumerable: true,
  get: function get() {
    return _useEventListener.default;
  }
});
Object.defineProperty(exports, "useHover", {
  enumerable: true,
  get: function get() {
    return _useHover.default;
  }
});
Object.defineProperty(exports, "useUnmount", {
  enumerable: true,
  get: function get() {
    return _useUnmount.default;
  }
});
Object.defineProperty(exports, "useFormTable", {
  enumerable: true,
  get: function get() {
    return _useFormTable.default;
  }
});
Object.defineProperty(exports, "useSet", {
  enumerable: true,
  get: function get() {
    return _useSet.default;
  }
});
Object.defineProperty(exports, "usePersistFn", {
  enumerable: true,
  get: function get() {
    return _usePersistFn.default;
  }
});
Object.defineProperty(exports, "useMap", {
  enumerable: true,
  get: function get() {
    return _useMap.default;
  }
});
Object.defineProperty(exports, "useCreation", {
  enumerable: true,
  get: function get() {
    return _useCreation.default;
  }
});
Object.defineProperty(exports, "useDrag", {
  enumerable: true,
  get: function get() {
    return _useDrop.useDrag;
  }
});
Object.defineProperty(exports, "useDrop", {
  enumerable: true,
  get: function get() {
    return _useDrop.useDrop;
  }
});
Object.defineProperty(exports, "useMount", {
  enumerable: true,
  get: function get() {
    return _useMount.default;
  }
});
Object.defineProperty(exports, "useTextSelection", {
  enumerable: true,
  get: function get() {
    return _useTextSelection.default;
  }
});
Object.defineProperty(exports, "useCounter", {
  enumerable: true,
  get: function get() {
    return _useCounter.default;
  }
});
Object.defineProperty(exports, "useUpdate", {
  enumerable: true,
  get: function get() {
    return _useUpdate.default;
  }
});
Object.defineProperty(exports, "useEventTarget", {
  enumerable: true,
  get: function get() {
    return _useEventTarget.default;
  }
});
Object.defineProperty(exports, "useHistoryTravel", {
  enumerable: true,
  get: function get() {
    return _useHistoryTravel.default;
  }
});
exports.useControlledValue = void 0;

var _useRequest = _interopRequireDefault(require("@umijs/use-request"));

var _useAntdTable = _interopRequireDefault(require("./useAntdTable"));

var _useAPI = _interopRequireWildcard(require("./useAPI"));

var _useAsync = _interopRequireDefault(require("./useAsync"));

var _useLoadMore = _interopRequireDefault(require("./useLoadMore"));

var _useSearch = _interopRequireDefault(require("./useSearch"));

var _useControllableValue = _interopRequireDefault(require("./useControllableValue"));

var _useDynamicList = _interopRequireDefault(require("./useDynamicList"));

var _useEventEmitter = _interopRequireDefault(require("./useEventEmitter"));

var _useVirtualList = _interopRequireDefault(require("./useVirtualList"));

var _useResponsive = require("./useResponsive");

var _useSize = _interopRequireDefault(require("./useSize"));

var _useLocalStorageState = _interopRequireDefault(require("./useLocalStorageState"));

var _useSessionStorageState = _interopRequireDefault(require("./useSessionStorageState"));

var _useUpdateEffect = _interopRequireDefault(require("./useUpdateEffect"));

var _useUpdateLayoutEffect = _interopRequireDefault(require("./useUpdateLayoutEffect"));

var _usePagination = _interopRequireDefault(require("./usePagination"));

var _useBoolean = _interopRequireDefault(require("./useBoolean"));

var _useToggle = _interopRequireDefault(require("./useToggle"));

var _useDocumentVisibility = _interopRequireDefault(require("./useDocumentVisibility"));

var _useSelections = _interopRequireDefault(require("./useSelections"));

var _useThrottle = _interopRequireDefault(require("./useThrottle"));

var _useThrottleFn = _interopRequireDefault(require("./useThrottleFn"));

var _useDebounce = _interopRequireDefault(require("./useDebounce"));

var _useDebounceFn = _interopRequireDefault(require("./useDebounceFn"));

var _usePrevious = _interopRequireDefault(require("./usePrevious"));

var _useMouse = _interopRequireDefault(require("./useMouse"));

var _useScroll = _interopRequireDefault(require("./useScroll"));

var _useClickAway = _interopRequireDefault(require("./useClickAway"));

var _useFullscreen = _interopRequireDefault(require("./useFullscreen"));

var _useInViewport = _interopRequireDefault(require("./useInViewport"));

var _useKeyPress = _interopRequireDefault(require("./useKeyPress"));

var _useEventListener = _interopRequireDefault(require("./useEventListener"));

var _useHover = _interopRequireDefault(require("./useHover"));

var _useUnmount = _interopRequireDefault(require("./useUnmount"));

var _useFormTable = _interopRequireDefault(require("./useFormTable"));

var _useSet = _interopRequireDefault(require("./useSet"));

var _usePersistFn = _interopRequireDefault(require("./usePersistFn"));

var _useMap = _interopRequireDefault(require("./useMap"));

var _useCreation = _interopRequireDefault(require("./useCreation"));

var _useDrop = require("./useDrop");

var _useMount = _interopRequireDefault(require("./useMount"));

var _useTextSelection = _interopRequireDefault(require("./useTextSelection"));

var _useCounter = _interopRequireDefault(require("./useCounter"));

var _useUpdate = _interopRequireDefault(require("./useUpdate"));

var _useEventTarget = _interopRequireDefault(require("./useEventTarget"));

var _useHistoryTravel = _interopRequireDefault(require("./useHistoryTravel"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useControlledValue = function useControlledValue() {
  console.warn('useControlledValue is deprecated and will be removed in the next major version. Please use useControllableValue instead.');
  return _useControllableValue.default.apply(void 0, arguments);
};

exports.useControlledValue = useControlledValue;
},{"@umijs/use-request":"5EyDt","./useAntdTable":"67dXN","./useAPI":"6abVZ","./useAsync":"6IZK6","./useLoadMore":"WeEAi","./useSearch":"h9E7k","./useControllableValue":"5mUnb","./useDynamicList":"AT8FZ","./useEventEmitter":"JCSSA","./useVirtualList":"6VayY","./useResponsive":"at9SY","./useSize":"5DuDh","./useLocalStorageState":"6yt37","./useSessionStorageState":"7MkVs","./useUpdateEffect":"1CNwa","./useUpdateLayoutEffect":"7aPZ2","./usePagination":"5uU2u","./useBoolean":"1vA5O","./useToggle":"3Kcpd","./useDocumentVisibility":"4zIgh","./useSelections":"2txMk","./useThrottle":"20g8A","./useThrottleFn":"7Ehgb","./useDebounce":"2i4ag","./useDebounceFn":"1y9sR","./usePrevious":"YkMTF","./useMouse":"3tSRM","./useScroll":"6XuGn","./useClickAway":"7khF8","./useFullscreen":"2qzg1","./useInViewport":"3HukE","./useKeyPress":"Ir12v","./useEventListener":"4YHLS","./useHover":"01FPv","./useUnmount":"7FgIn","./useFormTable":"66xDT","./useSet":"6zk73","./usePersistFn":"3zxuT","./useMap":"4ITNQ","./useCreation":"6BVOH","./useDrop":"6HHFL","./useMount":"5ZcQH","./useTextSelection":"ClcGY","./useCounter":"3g2yx","./useUpdate":"2cWpw","./useEventTarget":"21M8B","./useHistoryTravel":"35HYR"}],"5EyDt":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useAsync", {
  enumerable: true,
  get: function get() {
    return _useAsync.default;
  }
});
Object.defineProperty(exports, "useLoadMore", {
  enumerable: true,
  get: function get() {
    return _useLoadMore.default;
  }
});
Object.defineProperty(exports, "usePaginated", {
  enumerable: true,
  get: function get() {
    return _usePaginated.default;
  }
});
exports.default = exports.UseAPIProvider = void 0;

var _react = require("react");

var _umiRequest = _interopRequireDefault(require("umi-request"));

var _useAsync = _interopRequireDefault(require("./useAsync"));

var _useLoadMore = _interopRequireDefault(require("./useLoadMore"));

var _usePaginated = _interopRequireDefault(require("./usePaginated"));

var _configContext = _interopRequireDefault(require("./configContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function useRequest(service) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var contextConfig = (0, _react.useContext)(_configContext.default);

  var finalOptions = _objectSpread({}, contextConfig, {}, options);

  var paginated = finalOptions.paginated,
      loadMore = finalOptions.loadMore,
      requestMethod = finalOptions.requestMethod;
  var paginatedRef = (0, _react.useRef)(paginated);
  var loadMoreRef = (0, _react.useRef)(loadMore);

  if (paginatedRef.current !== paginated) {
    throw Error('You should not modify the paginated of options');
  }

  if (loadMoreRef.current !== loadMore) {
    throw Error('You should not modify the loadMore of options');
  }

  paginatedRef.current = paginated;
  loadMoreRef.current = loadMore;
  var finalRequestMethod = requestMethod || _umiRequest.default;
  var promiseService;

  if (typeof service === 'string') {
    promiseService = function promiseService() {
      return finalRequestMethod(service);
    };
  } else if (_typeof(service) === 'object') {
    var url = service.url,
        rest = _objectWithoutProperties(service, ["url"]);

    promiseService = function promiseService() {
      return requestMethod ? requestMethod(service) : (0, _umiRequest.default)(url, rest);
    };
  } else {
    promiseService = function promiseService() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new Promise(function (resolve, reject) {
        var result = service.apply(void 0, args);

        if (result.then) {
          result.then(function (data) {
            return resolve(data);
          }).catch(function (e) {
            return reject(e);
          });
        } else if (typeof result === 'string') {
          finalRequestMethod(result).then(function (data) {
            resolve(data);
          }).catch(function (e) {
            return reject(e);
          });
        } else if (_typeof(result) === 'object') {
          // umi-request 需要拆分下字段
          if (requestMethod) {
            finalRequestMethod(result).then(function (data) {
              resolve(data);
            }).catch(function (e) {
              return reject(e);
            });
          } else {
            var _url = result.url,
                _rest = _objectWithoutProperties(result, ["url"]);

            (0, _umiRequest.default)(_url, _rest).then(function (data) {
              resolve(data);
            }).catch(function (e) {
              return reject(e);
            });
          }
        }
      });
    };
  }

  if (loadMore) {
    return (0, _useLoadMore.default)(promiseService, finalOptions);
  }

  if (paginated) {
    return (0, _usePaginated.default)(promiseService, finalOptions);
  }

  return (0, _useAsync.default)(promiseService, finalOptions);
}

var UseAPIProvider = _configContext.default.Provider;
exports.UseAPIProvider = UseAPIProvider;
var _default = useRequest;
exports.default = _default;
},{"react":"UCOaU","umi-request":"DpU2u","./useAsync":"1AibL","./useLoadMore":"2T1VH","./usePaginated":"4uWdu","./configContext":"3LN0E"}],"DpU2u":[function(require,module,exports) {
'use strict';

var process = require("process");

Object.defineProperty(exports, '__esModule', {
  value: true
});

var qs = require('qs');

require('isomorphic-fetch');

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

var defineProperty = _defineProperty;

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var objectSpread = _objectSpread;

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

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

var createClass = _createClass;

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof2(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof2(obj) {
        return typeof obj;
      };
    } else {
      _typeof2 = function _typeof2(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof2(obj);
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
}); // 返回一个组合了所有插件的“插件”


function compose(middlewares) {
  if (!Array.isArray(middlewares)) throw new TypeError('Middlewares must be an array!');
  var middlewaresLen = middlewares.length;

  for (var i = 0; i < middlewaresLen; i++) {
    if (typeof middlewares[i] !== 'function') {
      throw new TypeError('Middleware must be componsed of function');
    }
  }

  return function wrapMiddlewares(params, next) {
    var index = -1;

    function dispatch(i) {
      if (i <= index) {
        return Promise.reject(new Error('next() should not be called multiple times in one middleware!'));
      }

      index = i;
      var fn = middlewares[i] || next;
      if (!fn) return Promise.resolve();

      try {
        return Promise.resolve(fn(params, function () {
          return dispatch(i + 1);
        }));
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return dispatch(0);
  };
}

var Onion = /*#__PURE__*/function () {
  function Onion(defaultMiddlewares) {
    classCallCheck(this, Onion);
    if (!Array.isArray(defaultMiddlewares)) throw new TypeError('Default middlewares must be an array!');
    this.defaultMiddlewares = toConsumableArray(defaultMiddlewares);
    this.middlewares = [];
  }

  createClass(Onion, [{
    key: "use",
    // 内置内核中间件长度
    value: function use(newMiddleware) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        global: false,
        core: false,
        defaultInstance: false
      };
      var core = false;
      var global = false;
      var defaultInstance = false;

      if (typeof opts === 'number') {
        if (process && process.env && "development" === 'development') {
          console.warn('use() options should be object, number property would be deprecated in future，please update use() options to "{ core: true }".');
        }

        core = true;
        global = false;
      } else if (_typeof_1(opts) === 'object' && opts) {
        global = opts.global || false;
        core = opts.core || false;
        defaultInstance = opts.defaultInstance || false;
      } // 全局中间件


      if (global) {
        Onion.globalMiddlewares.splice(Onion.globalMiddlewares.length - Onion.defaultGlobalMiddlewaresLength, 0, newMiddleware);
        return;
      } // 内核中间件


      if (core) {
        Onion.coreMiddlewares.splice(Onion.coreMiddlewares.length - Onion.defaultCoreMiddlewaresLength, 0, newMiddleware);
        return;
      } // 默认实例中间件，供开发者使用


      if (defaultInstance) {
        this.defaultMiddlewares.push(newMiddleware);
        return;
      } // 实例中间件


      this.middlewares.push(newMiddleware);
    }
  }, {
    key: "execute",
    value: function execute() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var fn = compose([].concat(toConsumableArray(this.middlewares), toConsumableArray(this.defaultMiddlewares), toConsumableArray(Onion.globalMiddlewares), toConsumableArray(Onion.coreMiddlewares)));
      return fn(params);
    }
  }]);
  return Onion;
}();

Onion.globalMiddlewares = [];
Onion.defaultGlobalMiddlewaresLength = 0;
Onion.coreMiddlewares = [];
Onion.defaultCoreMiddlewaresLength = 0;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;
var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
});
var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
});

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
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

var isNativeFunction = _isNativeFunction;
var construct = createCommonjsModule(function (module) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      module.exports = _construct = Reflect.construct;
    } else {
      module.exports = _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  module.exports = _construct;
});
var wrapNativeSuper = createCommonjsModule(function (module) {
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  module.exports = _wrapNativeSuper;
});

var MapCache = /*#__PURE__*/function () {
  function MapCache(options) {
    classCallCheck(this, MapCache);
    this.cache = new Map();
    this.timer = {};
    this.extendOptions(options);
  }

  createClass(MapCache, [{
    key: "extendOptions",
    value: function extendOptions(options) {
      this.maxCache = options.maxCache || 0;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.cache.get(JSON.stringify(key));
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var _this = this;

      var ttl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60000; // 如果超过最大缓存数, 删除头部的第一个缓存.

      if (this.maxCache > 0 && this.cache.size >= this.maxCache) {
        var deleteKey = toConsumableArray(this.cache.keys())[0];
        this.cache.delete(deleteKey);

        if (this.timer[deleteKey]) {
          clearTimeout(this.timer[deleteKey]);
        }
      }

      var cacheKey = JSON.stringify(key);
      this.cache.set(cacheKey, value);

      if (ttl > 0) {
        this.timer[cacheKey] = setTimeout(function () {
          _this.cache.delete(cacheKey);

          delete _this.timer[cacheKey];
        }, ttl);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      var cacheKey = JSON.stringify(key);
      delete this.timer[cacheKey];
      return this.cache.delete(cacheKey);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.timer = {};
      return this.cache.clear();
    }
  }]);
  return MapCache;
}();
/**
 * 请求异常
 */


var RequestError = /*#__PURE__*/function (_Error) {
  inherits(RequestError, _Error);

  function RequestError(text, request) {
    var _this2;

    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'RequestError';
    classCallCheck(this, RequestError);
    _this2 = possibleConstructorReturn(this, getPrototypeOf(RequestError).call(this, text));
    _this2.name = 'RequestError';
    _this2.request = request;
    _this2.type = type;
    return _this2;
  }

  return RequestError;
}(wrapNativeSuper(Error));
/**
 * 响应异常
 */


var ResponseError = /*#__PURE__*/function (_Error2) {
  inherits(ResponseError, _Error2);

  function ResponseError(response, text, data, request) {
    var _this3;

    var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'ResponseError';
    classCallCheck(this, ResponseError);
    _this3 = possibleConstructorReturn(this, getPrototypeOf(ResponseError).call(this, text || response.statusText));
    _this3.name = 'ResponseError';
    _this3.data = data;
    _this3.response = response;
    _this3.request = request;
    _this3.type = type;
    return _this3;
  }

  return ResponseError;
}(wrapNativeSuper(Error));
/**
 * http://gitlab.alipay-inc.com/KBSJ/gxt/blob/release_gxt_S8928905_20180531/src/util/request.js#L63
 * 支持gbk
 */


function readerGBK(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = reject;
    reader.readAsText(file, 'GBK'); // setup GBK decoding
  });
}
/**
 * 安全的JSON.parse
 */


function safeJsonParse(data) {
  var throwErrIfParseFail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var response = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var request = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  try {
    return JSON.parse(data);
  } catch (e) {
    if (throwErrIfParseFail) {
      throw new ResponseError(response, 'JSON.parse fail', data, request, 'ParseError');
    }
  } // eslint-disable-line no-empty


  return data;
}

function timeout2Throw(msec, request) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new RequestError("timeout of ".concat(msec, "ms exceeded"), request, 'Timeout'));
    }, msec);
  });
} // If request options contain 'cancelToken', reject request when token has been canceled


function cancel2Throw(opt) {
  return new Promise(function (_, reject) {
    if (opt.cancelToken) {
      opt.cancelToken.promise.then(function (cancel) {
        reject(cancel);
      });
    }
  });
}

var toString = Object.prototype.toString; // Check env is browser or node

function getEnv() {
  var env; // Only Node.JS has a process variable that is of [[Class]] process

  if (typeof process !== 'undefined' && toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    env = 'NODE';
  }

  if (typeof XMLHttpRequest !== 'undefined') {
    env = 'BROWSER';
  }

  return env;
}

function isArray(val) {
  return _typeof_1(val) === 'object' && Object.prototype.toString.call(val) === '[object Array]';
}

function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

function isDate(val) {
  return _typeof_1(val) === 'object' && Object.prototype.toString.call(val) === '[object Date]';
}

function isObject(val) {
  return val !== null && _typeof_1(val) === 'object';
}

function forEach2ObjArr(target, callback) {
  if (!target) return;

  if (_typeof_1(target) !== 'object') {
    target = [target];
  }

  if (isArray(target)) {
    for (var i = 0; i < target.length; i++) {
      callback.call(null, target[i], i, target);
    }
  } else {
    for (var key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        callback.call(null, target[key], key, target);
      }
    }
  }
}

function getParamObject(val) {
  if (isURLSearchParams(val)) {
    return qs.parse(val.toString(), {
      strictNullHandling: true
    });
  }

  if (typeof val === 'string') {
    return [val];
  }

  return val;
}

function reqStringify(val) {
  return qs.stringify(val, {
    arrayFormat: 'repeat',
    strictNullHandling: true
  });
}

function mergeRequestOptions(options, options2Merge) {
  return objectSpread({}, options, options2Merge, {
    headers: objectSpread({}, options.headers, options2Merge.headers),
    params: objectSpread({}, getParamObject(options.params), getParamObject(options2Merge.params)),
    method: (options2Merge.method || options.method || 'get').toLowerCase()
  });
} // 前后缀拦截


var addfix = function addfix(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var prefix = options.prefix,
      suffix = options.suffix;

  if (prefix) {
    url = "".concat(prefix).concat(url);
  }

  if (suffix) {
    url = "".concat(url).concat(suffix);
  }

  return {
    url: url,
    options: options
  };
};

var warnedCoreType = false; // 默认缓存判断，开放缓存判断给非 get 请求使用

function __defaultValidateCache(url, options) {
  var _options$method = options.method,
      method = _options$method === void 0 ? 'get' : _options$method;
  return method.toLowerCase() === 'get';
}

function fetchMiddleware(ctx, next) {
  if (!ctx) return next();
  var _ctx$req = ctx.req;
  _ctx$req = _ctx$req === void 0 ? {} : _ctx$req;
  var _ctx$req$options = _ctx$req.options,
      options = _ctx$req$options === void 0 ? {} : _ctx$req$options,
      _ctx$req$url = _ctx$req.url,
      url = _ctx$req$url === void 0 ? '' : _ctx$req$url,
      cache = ctx.cache,
      responseInterceptors = ctx.responseInterceptors;

  var _options$timeout = options.timeout,
      timeout = _options$timeout === void 0 ? 0 : _options$timeout,
      _options$__umiRequest = options.__umiRequestCoreType__,
      __umiRequestCoreType__ = _options$__umiRequest === void 0 ? 'normal' : _options$__umiRequest,
      _options$useCache = options.useCache,
      useCache = _options$useCache === void 0 ? false : _options$useCache,
      _options$method2 = options.method,
      method = _options$method2 === void 0 ? 'get' : _options$method2,
      params = options.params,
      ttl = options.ttl,
      _options$validateCach = options.validateCache,
      validateCache = _options$validateCach === void 0 ? __defaultValidateCache : _options$validateCach;

  if (__umiRequestCoreType__ !== 'normal') {
    if (process && process.env && "development" === 'development' && warnedCoreType === false) {
      warnedCoreType = true;
      console.warn('__umiRequestCoreType__ is a internal property that use in umi-request, change its value would affect the behavior of request! It only use when you want to extend or use request core.');
    }

    return next();
  }

  var adapter = fetch;

  if (!adapter) {
    throw new Error('Global fetch not exist!');
  } // 从缓存池检查是否有缓存数据


  var isBrowser = getEnv() === 'BROWSER';
  var needCache = validateCache(url, options) && useCache && isBrowser;

  if (needCache) {
    var responseCache = cache.get({
      url: url,
      params: params,
      method: method
    });

    if (responseCache) {
      responseCache = responseCache.clone();
      responseCache.useCache = true;
      ctx.res = responseCache;
      return next();
    }
  }

  var response; // 超时处理、取消请求处理

  if (timeout > 0) {
    response = Promise.race([cancel2Throw(options), adapter(url, options), timeout2Throw(timeout, ctx.req)]);
  } else {
    response = Promise.race([cancel2Throw(options), adapter(url, options)]);
  } // 兼容老版本 response.interceptor


  responseInterceptors.forEach(function (handler) {
    response = response.then(function (res) {
      // Fix multiple clones not working, issue: https://github.com/github/fetch/issues/504
      var clonedRes = typeof res.clone === 'function' ? res.clone() : res;
      return handler(clonedRes, options);
    });
  });
  return response.then(function (res) {
    // 是否存入缓存池
    if (needCache) {
      if (res.status === 200) {
        var copy = res.clone();
        copy.useCache = true;
        cache.set({
          url: url,
          params: params,
          method: method
        }, copy, ttl);
      }
    }

    ctx.res = res;
    return next();
  });
}

function parseResponseMiddleware(ctx, next) {
  var copy;
  return next().then(function () {
    if (!ctx) return;
    var _ctx$res = ctx.res,
        res = _ctx$res === void 0 ? {} : _ctx$res,
        _ctx$req = ctx.req,
        req = _ctx$req === void 0 ? {} : _ctx$req;

    var _ref = req || {},
        _ref$options = _ref.options;

    _ref$options = _ref$options === void 0 ? {} : _ref$options;
    var _ref$options$response = _ref$options.responseType,
        responseType = _ref$options$response === void 0 ? 'json' : _ref$options$response,
        _ref$options$charset = _ref$options.charset,
        charset = _ref$options$charset === void 0 ? 'utf8' : _ref$options$charset,
        _ref$options$getRespo = _ref$options.getResponse,
        _ref$options$throwErr = _ref$options.throwErrIfParseFail,
        throwErrIfParseFail = _ref$options$throwErr === void 0 ? false : _ref$options$throwErr,
        _ref$options$parseRes = _ref$options.parseResponse,
        parseResponse = _ref$options$parseRes === void 0 ? true : _ref$options$parseRes;

    if (!parseResponse) {
      return;
    }

    if (!res || !res.clone) {
      return;
    } // 只在浏览器环境对 response 做克隆， node 环境如果对 response 克隆会有问题：https://github.com/bitinn/node-fetch/issues/553


    copy = getEnv() === 'BROWSER' ? res.clone() : res;
    copy.useCache = res.useCache || false; // 解析数据

    if (charset === 'gbk') {
      try {
        return res.blob().then(readerGBK).then(function (d) {
          return safeJsonParse(d, false, copy, req);
        });
      } catch (e) {
        throw new ResponseError(copy, e.message, null, req, 'ParseError');
      }
    } else if (responseType === 'json') {
      return res.text().then(function (d) {
        return safeJsonParse(d, throwErrIfParseFail, copy, req);
      });
    }

    try {
      // 其他如text, blob, arrayBuffer, formData
      return res[responseType]();
    } catch (e) {
      throw new ResponseError(copy, 'responseType not support', null, req, 'ParseError');
    }
  }).then(function (body) {
    if (!ctx) return;
    var _ctx$res2 = ctx.res,
        _ctx$req2 = ctx.req,
        req = _ctx$req2 === void 0 ? {} : _ctx$req2;

    var _ref2 = req || {},
        _ref2$options = _ref2.options;

    _ref2$options = _ref2$options === void 0 ? {} : _ref2$options;
    var _ref2$options$getResp = _ref2$options.getResponse,
        getResponse = _ref2$options$getResp === void 0 ? false : _ref2$options$getResp;

    if (!copy) {
      return;
    }

    if (copy.status >= 200 && copy.status < 300) {
      // 提供源response, 以便自定义处理
      if (getResponse) {
        ctx.res = {
          data: body,
          response: copy
        };
        return;
      }

      ctx.res = body;
      return;
    }

    throw new ResponseError(copy, 'http error', body, req, 'HttpError');
  }).catch(function (e) {
    if (e instanceof RequestError || e instanceof ResponseError) {
      throw e;
    } // 对未知错误进行处理


    var req = ctx.req,
        res = ctx.res;
    e.request = e.request || req;
    e.response = e.response || res;
    e.type = e.type || e.name;
    e.data = e.data || undefined;
    throw e;
  });
}

function simplePostMiddleware(ctx, next) {
  if (!ctx) return next();
  var _ctx$req = ctx.req;
  _ctx$req = _ctx$req === void 0 ? {} : _ctx$req;
  var _ctx$req$options = _ctx$req.options,
      options = _ctx$req$options === void 0 ? {} : _ctx$req$options;
  var _options$method = options.method,
      method = _options$method === void 0 ? 'get' : _options$method;

  if (['post', 'put', 'patch', 'delete'].indexOf(method.toLowerCase()) === -1) {
    return next();
  }

  var _options$requestType = options.requestType,
      requestType = _options$requestType === void 0 ? 'json' : _options$requestType,
      data = options.data; // 数据使用类axios的新字段data, 避免引用后影响旧代码, 如将body stringify多次

  if (data) {
    var dataType = Object.prototype.toString.call(data);

    if (dataType === '[object Object]' || dataType === '[object Array]') {
      if (requestType === 'json') {
        options.headers = objectSpread({
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        }, options.headers);
        options.body = JSON.stringify(data);
      } else if (requestType === 'form') {
        options.headers = objectSpread({
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }, options.headers);
        options.body = reqStringify(data);
      }
    } else {
      // 其他 requestType 自定义header
      options.headers = objectSpread({
        Accept: 'application/json'
      }, options.headers);
      options.body = data;
    }
  }

  ctx.req.options = options;
  return next();
}

function paramsSerialize(params, paramsSerializer) {
  var serializedParams;
  var jsonStringifiedParams; // 支持参数自动拼装，其他 method 也可用，不冲突

  if (params) {
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      if (isArray(params)) {
        jsonStringifiedParams = [];
        forEach2ObjArr(params, function (item) {
          if (item === null || typeof item === 'undefined') {
            jsonStringifiedParams.push(item);
          } else {
            jsonStringifiedParams.push(isObject(item) ? JSON.stringify(item) : item);
          }
        }); // a: [1,2,3] => a=1&a=2&a=3

        serializedParams = reqStringify(jsonStringifiedParams);
      } else {
        jsonStringifiedParams = {};
        forEach2ObjArr(params, function (value, key) {
          var jsonStringifiedValue = value;

          if (value === null || typeof value === 'undefined') {
            jsonStringifiedParams[key] = value;
          } else if (isDate(value)) {
            jsonStringifiedValue = value.toISOString();
          } else if (isArray(value)) {
            jsonStringifiedValue = value;
          } else if (isObject(value)) {
            jsonStringifiedValue = JSON.stringify(value);
          }

          jsonStringifiedParams[key] = jsonStringifiedValue;
        });
        var tmp = reqStringify(jsonStringifiedParams);
        serializedParams = tmp;
      }
    }
  }

  return serializedParams;
} // 对请求参数做处理，实现 query 简化、 post 简化


function simpleGetMiddleware(ctx, next) {
  if (!ctx) return next();
  var _ctx$req = ctx.req;
  _ctx$req = _ctx$req === void 0 ? {} : _ctx$req;
  var _ctx$req$options = _ctx$req.options,
      options = _ctx$req$options === void 0 ? {} : _ctx$req$options;
  var paramsSerializer = options.paramsSerializer,
      params = options.params;
  var _ctx$req2 = ctx.req;
  _ctx$req2 = _ctx$req2 === void 0 ? {} : _ctx$req2;
  var _ctx$req2$url = _ctx$req2.url,
      url = _ctx$req2$url === void 0 ? '' : _ctx$req2$url; // 将 method 改为大写

  options.method = options.method ? options.method.toUpperCase() : 'GET'; // 设置 credentials 默认值为 same-origin，确保当开发者没有设置时，各浏览器对请求是否发送 cookies 保持一致的行为
  // - omit: 从不发送cookies.
  // - same-origin: 只有当URL与响应脚本同源才发送 cookies、 HTTP Basic authentication 等验证信息.(浏览器默认值,在旧版本浏览器，例如safari 11依旧是omit，safari 12已更改)
  // - include: 不论是不是跨域的请求,总是发送请求资源域在本地的 cookies、 HTTP Basic authentication 等验证信息.

  options.credentials = options.credentials || 'same-origin'; // 支持类似axios 参数自动拼装, 其他method也可用, 不冲突.

  var serializedParams = paramsSerialize(params, paramsSerializer);
  ctx.req.originUrl = url;

  if (serializedParams) {
    var urlSign = url.indexOf('?') !== -1 ? '&' : '?';
    ctx.req.url = "".concat(url).concat(urlSign).concat(serializedParams);
  }

  ctx.req.options = options;
  return next();
}

var globalMiddlewares = [simplePostMiddleware, simpleGetMiddleware, parseResponseMiddleware];
var coreMiddlewares = [fetchMiddleware];
Onion.globalMiddlewares = globalMiddlewares;
Onion.defaultGlobalMiddlewaresLength = globalMiddlewares.length;
Onion.coreMiddlewares = coreMiddlewares;
Onion.defaultCoreMiddlewaresLength = coreMiddlewares.length;

var Core = /*#__PURE__*/function () {
  function Core(initOptions) {
    classCallCheck(this, Core);
    this.onion = new Onion([]);
    this.fetchIndex = 0; // 【即将废弃】请求中间件位置

    this.mapCache = new MapCache(initOptions);
    this.initOptions = initOptions;
    this.instanceRequestInterceptors = [];
    this.instanceResponseInterceptors = [];
  } // 旧版拦截器为共享


  createClass(Core, [{
    key: "use",
    value: function use(newMiddleware) {
      var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        global: false,
        core: false
      };
      this.onion.use(newMiddleware, opt);
      return this;
    }
  }, {
    key: "extendOptions",
    value: function extendOptions(options) {
      this.initOptions = mergeRequestOptions(this.initOptions, options);
      this.mapCache.extendOptions(options);
    } // 执行请求前拦截器

  }, {
    key: "dealRequestInterceptors",
    value: function dealRequestInterceptors(ctx) {
      var reducer = function reducer(p1, p2) {
        return p1.then(function () {
          var ret = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          ctx.req.url = ret.url || ctx.req.url;
          ctx.req.options = ret.options || ctx.req.options;
          return p2(ctx.req.url, ctx.req.options);
        });
      };

      var allInterceptors = [].concat(toConsumableArray(Core.requestInterceptors), toConsumableArray(this.instanceRequestInterceptors));
      return allInterceptors.reduce(reducer, Promise.resolve()).then(function () {
        var ret = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        ctx.req.url = ret.url || ctx.req.url;
        ctx.req.options = ret.options || ctx.req.options;
        return Promise.resolve();
      });
    }
  }, {
    key: "request",
    value: function request(url, options) {
      var _this = this;

      var onion = this.onion;
      var obj = {
        req: {
          url: url,
          options: options
        },
        res: null,
        cache: this.mapCache,
        responseInterceptors: [].concat(toConsumableArray(Core.responseInterceptors), toConsumableArray(this.instanceResponseInterceptors))
      };

      if (typeof url !== 'string') {
        throw new Error('url MUST be a string');
      }

      return new Promise(function (resolve, reject) {
        _this.dealRequestInterceptors(obj).then(function () {
          return onion.execute(obj);
        }).then(function () {
          resolve(obj.res);
        }).catch(function (error) {
          var errorHandler = obj.req.options.errorHandler;

          if (errorHandler) {
            try {
              var data = errorHandler(error);
              resolve(data);
            } catch (e) {
              reject(e);
            }
          } else {
            reject(error);
          }
        });
      });
    }
  }], [{
    key: "requestUse",
    // 请求拦截器 默认 { global: true } 兼容旧版本拦截器
    value: function requestUse(handler) {
      var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        global: true
      };
      if (typeof handler !== 'function') throw new TypeError('Interceptor must be function!');

      if (opt.global) {
        Core.requestInterceptors.push(handler);
      } else {
        this.instanceRequestInterceptors.push(handler);
      }
    } // 响应拦截器 默认 { global: true } 兼容旧版本拦截器

  }, {
    key: "responseUse",
    value: function responseUse(handler) {
      var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        global: true
      };
      if (typeof handler !== 'function') throw new TypeError('Interceptor must be function!');

      if (opt.global) {
        Core.responseInterceptors.push(handler);
      } else {
        this.instanceResponseInterceptors.push(handler);
      }
    }
  }]);
  return Core;
}();

Core.requestInterceptors = [addfix];
Core.responseInterceptors = [];
/**
 * 当执行 “取消请求” 操作时会抛出 Cancel 对象作为一场
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return this.message ? "Cancel: ".concat(this.message) : 'Cancel';
};

Cancel.prototype.__CANCEL__ = true;
/**
 * 通过 CancelToken 来取消请求操作
 *
 * @class
 * @param {Function} executor The executor function.
 */

function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // 取消操作已被调用过
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
/**
 * 如果请求已经取消，抛出 Cancel 异常
 */


CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * 通过 source 来返回 CancelToken 实例和取消 CancelToken 的函数
 */


CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

var request = function request() {
  var initOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var coreInstance = new Core(initOptions);

  var umiInstance = function umiInstance(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var mergeOptions = mergeRequestOptions(coreInstance.initOptions, options);
    return coreInstance.request(url, mergeOptions);
  }; // 中间件


  umiInstance.use = coreInstance.use.bind(coreInstance);
  umiInstance.fetchIndex = coreInstance.fetchIndex; // 拦截器

  umiInstance.interceptors = {
    request: {
      use: Core.requestUse.bind(coreInstance)
    },
    response: {
      use: Core.responseUse.bind(coreInstance)
    }
  }; // 请求语法糖： reguest.get request.post ……

  var METHODS = ['get', 'post', 'delete', 'put', 'patch', 'head', 'options', 'rpc'];
  METHODS.forEach(function (method) {
    umiInstance[method] = function (url, options) {
      return umiInstance(url, objectSpread({}, options, {
        method: method
      }));
    };
  });
  umiInstance.Cancel = Cancel;
  umiInstance.CancelToken = CancelToken;
  umiInstance.isCancel = isCancel;
  umiInstance.extendOptions = coreInstance.extendOptions.bind(coreInstance); // 暴露各个实例的中间件，供开发者自由组合

  umiInstance.middlewares = {
    instance: coreInstance.onion.middlewares,
    defaultInstance: coreInstance.onion.defaultMiddlewares,
    global: Onion.globalMiddlewares,
    core: Onion.coreMiddlewares
  };
  return umiInstance;
};
/**
 * extend 方法参考了ky, 让用户可以定制配置.
 * initOpions 初始化参数
 * @param {number} maxCache 最大缓存数
 * @param {string} prefix url前缀
 * @param {function} errorHandler 统一错误处理方法
 * @param {object} headers 统一的headers
 */


var extend = function extend(initOptions) {
  return request(initOptions);
};
/**
 * 暴露 fetch 中间件，保障依旧可以使用
 */


var fetch$1 = request({
  parseResponse: false
});
var request$1 = request({});
exports.Onion = Onion;
exports.RequestError = RequestError;
exports.ResponseError = ResponseError;
exports.default = request$1;
exports.extend = extend;
exports.fetch = fetch$1;
},{"process":"5PcdI","qs":"VPWGj","isomorphic-fetch":"4LVvk"}],"VPWGj":[function(require,module,exports) {
'use strict';

var stringify = require('./stringify');
var parse = require('./parse');
var formats = require('./formats');

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

},{"./stringify":"5SKNZ","./parse":"5BA5S","./formats":"1ICFV"}],"5SKNZ":[function(require,module,exports) {
'use strict';

var utils = require('./utils');
var formats = require('./formats');
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        }).join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        var value = obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly,
            charset
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};

},{"./utils":"3IObk","./formats":"1ICFV"}],"3IObk":[function(require,module,exports) {
'use strict';

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};

},{}],"1ICFV":[function(require,module,exports) {
'use strict';

var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = require('./utils');

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = util.assign(
    {
        'default': Format.RFC3986,
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return String(value);
            }
        }
    },
    Format
);

},{"./utils":"3IObk"}],"5BA5S":[function(require,module,exports) {
'use strict';

var utils = require('./utils');

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj; // eslint-disable-line no-param-reassign
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};

},{"./utils":"3IObk"}],"4LVvk":[function(require,module,exports) {
// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require('whatwg-fetch');
module.exports = self.fetch.bind(self);

},{"whatwg-fetch":"OE89Q"}],"OE89Q":[function(require,module,exports) {
var define;

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.WHATWGFetch = {});
})(this, function (exports) {
  'use strict';

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj);
  }

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }

    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
      throw new TypeError('Invalid character in header field name');
    }

    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }

    return value;
  } // Build a destructive iterator for the value list


  function iteratorFor(items) {
    var iterator = {
      next: function () {
        var value = items.shift();
        return {
          done: value === undefined,
          value: value
        };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }

    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };

      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }

    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      /*
        fetch-mock wraps the Response object in an ES6 Proxy to
        provide useful test harness features such as flush. However, on
        ES5 browsers without fetch or Proxy support pollyfills must be used;
        the proxy-pollyfill is unable to proxy an attribute unless it exists
        on the object before the Proxy is created. This change ensures
        Response.bodyUsed exists on the instance, while maintaining the
        semantic of setting Request.bodyUsed in the constructor before
        _initBody is called.
      */
      this.bodyUsed = this.bodyUsed;
      this._bodyInit = body;

      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);

        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);

      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  } // HTTP methods whose capitalization should be normalized


  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }

      this.url = input.url;
      this.credentials = input.credentials;

      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }

      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;

      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';

    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }

    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }

    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, {
      body: this._bodyInit
    });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2

    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();

      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : '';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';

    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, {
      status: 0,
      statusText: ''
    });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, {
      status: status,
      headers: {
        location: url
      }
    });
  };

  exports.DOMException = self.DOMException;

  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function (message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };

    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'));
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        setTimeout(function () {
          resolve(new Response(body, options));
        }, 0);
      };

      xhr.onerror = function () {
        setTimeout(function () {
          reject(new TypeError('Network request failed'));
        }, 0);
      };

      xhr.ontimeout = function () {
        setTimeout(function () {
          reject(new TypeError('Network request failed'));
        }, 0);
      };

      xhr.onabort = function () {
        setTimeout(function () {
          reject(new exports.DOMException('Aborted', 'AbortError'));
        }, 0);
      };

      function fixUrl(url) {
        try {
          return url === '' && self.location.href ? self.location.href : url;
        } catch (e) {
          return url;
        }
      }

      xhr.open(request.method, fixUrl(request.url), true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr) {
        if (support.blob) {
          xhr.responseType = 'blob';
        } else if (support.arrayBuffer && request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1) {
          xhr.responseType = 'arraybuffer';
        }
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function () {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});
},{}],"1AibL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _lodash2 = _interopRequireDefault(require("lodash.throttle"));

var _react = require("react");

var _utils = require("./utils");

var _cache = require("./utils/cache");

var _limit = _interopRequireDefault(require("./utils/limit"));

var _usePersistFn = _interopRequireDefault(require("./utils/usePersistFn"));

var _useUpdateEffect = _interopRequireDefault(require("./utils/useUpdateEffect"));

var _windowFocus = _interopRequireDefault(require("./utils/windowFocus"));

var _windowVisible = _interopRequireDefault(require("./utils/windowVisible"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT_KEY = 'UMIJS_USE_API_DEFAULT_KEY';

var Fetch = /*#__PURE__*/function () {
  // 请求时序
  // 是否卸载
  // visible 后，是否继续轮询
  function Fetch(service, config, subscribe, initState) {
    _classCallCheck(this, Fetch);

    this.config = void 0;
    this.service = void 0;
    this.count = 0;
    this.unmountedFlag = false;
    this.pollingWhenVisibleFlag = false;
    this.pollingTimer = undefined;
    this.loadingDelayTimer = undefined;
    this.subscribe = void 0;
    this.unsubscribe = [];
    this.that = this;
    this.state = {
      loading: false,
      params: [],
      data: undefined,
      error: undefined,
      run: this.run.bind(this.that),
      mutate: this.mutate.bind(this.that),
      refresh: this.refresh.bind(this.that),
      cancel: this.cancel.bind(this.that),
      unmount: this.unmount.bind(this.that)
    };
    this.debounceRun = void 0;
    this.throttleRun = void 0;
    this.limitRefresh = void 0;
    this.service = service;
    this.config = config;
    this.subscribe = subscribe;

    if (initState) {
      this.state = _objectSpread({}, this.state, {}, initState);
    }

    this.debounceRun = this.config.debounceInterval ? (0, _lodash.default)(this._run, this.config.debounceInterval) : undefined;
    this.throttleRun = this.config.throttleInterval ? (0, _lodash2.default)(this._run, this.config.throttleInterval) : undefined;
    this.limitRefresh = (0, _limit.default)(this.refresh.bind(this), this.config.focusTimespan);

    if (this.config.pollingInterval) {
      this.unsubscribe.push((0, _windowVisible.default)(this.rePolling.bind(this)));
    }

    if (this.config.refreshOnWindowFocus) {
      this.unsubscribe.push((0, _windowFocus.default)(this.limitRefresh.bind(this)));
    }
  }

  _createClass(Fetch, [{
    key: "setState",
    value: function setState() {
      var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.state = _objectSpread({}, this.state, {}, s);
      this.subscribe(this.state);
    }
  }, {
    key: "_run",
    value: function _run() {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // 取消已有定时器
      if (this.pollingTimer) {
        clearTimeout(this.pollingTimer);
      } // 取消 loadingDelayTimer


      if (this.loadingDelayTimer) {
        clearTimeout(this.loadingDelayTimer);
      }

      this.count += 1; // 闭包存储当次请求的 count

      var currentCount = this.count;
      this.setState({
        loading: !this.config.loadingDelay,
        params: args
      });

      if (this.config.loadingDelay) {
        this.loadingDelayTimer = setTimeout(function () {
          _this.setState({
            loading: true
          });
        }, this.config.loadingDelay);
      }

      return this.service.apply(this, args).then(function (res) {
        if (!_this.unmountedFlag && currentCount === _this.count) {
          if (_this.loadingDelayTimer) {
            clearTimeout(_this.loadingDelayTimer);
          }

          var formattedResult = _this.config.formatResult ? _this.config.formatResult(res) : res;

          _this.setState({
            data: formattedResult,
            error: undefined,
            loading: false
          });

          if (_this.config.onSuccess) {
            _this.config.onSuccess(formattedResult, args);
          }

          return formattedResult;
        }
      }).catch(function (error) {
        if (!_this.unmountedFlag && currentCount === _this.count) {
          if (_this.loadingDelayTimer) {
            clearTimeout(_this.loadingDelayTimer);
          }

          _this.setState({
            data: undefined,
            error: error,
            loading: false
          });

          if (_this.config.onError) {
            _this.config.onError(error, args);
          }

          console.error(error);
          return error; // throw error;
        }
      }).finally(function () {
        if (!_this.unmountedFlag && currentCount === _this.count) {
          if (_this.config.pollingInterval) {
            // 如果屏幕隐藏，并且 !pollingWhenHidden, 则停止轮询，并记录 flag，等 visible 时，继续轮询
            if (!(0, _utils.isDocumentVisible)() && !_this.config.pollingWhenHidden) {
              _this.pollingWhenVisibleFlag = true;
              return;
            }

            _this.pollingTimer = setTimeout(function () {
              _this._run.apply(_this, args);
            }, _this.config.pollingInterval);
          }
        }
      });
    }
  }, {
    key: "run",
    value: function run() {
      if (this.debounceRun) {
        this.debounceRun.apply(this, arguments); // TODO 如果 options 存在 debounceInterval，或 throttleInterval，则 run 和 refresh 不会返回 Promise。 带类型需要修复后，此处变成 return;。

        return Promise.resolve(null);
      }

      if (this.throttleRun) {
        this.throttleRun.apply(this, arguments);
        return Promise.resolve(null);
      }

      return this._run.apply(this, arguments);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this.debounceRun) {
        this.debounceRun.cancel();
      }

      if (this.throttleRun) {
        this.throttleRun.cancel();
      }

      if (this.loadingDelayTimer) {
        clearTimeout(this.loadingDelayTimer);
      }

      if (this.pollingTimer) {
        clearTimeout(this.pollingTimer);
      }

      this.pollingWhenVisibleFlag = false;
      this.count += 1;
      this.setState({
        loading: false
      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      return this.run.apply(this, _toConsumableArray(this.state.params));
    }
  }, {
    key: "rePolling",
    value: function rePolling() {
      if (this.pollingWhenVisibleFlag) {
        this.pollingWhenVisibleFlag = false;
        this.refresh();
      }
    }
  }, {
    key: "mutate",
    value: function mutate(data) {
      if (typeof data === 'function') {
        this.setState({
          // eslint-disable-next-line react/no-access-state-in-setstate
          data: data(this.state.data) || {}
        });
      } else {
        this.setState({
          data: data
        });
      }
    }
  }, {
    key: "unmount",
    value: function unmount() {
      this.unmountedFlag = true;
      this.cancel();
      this.unsubscribe.forEach(function (s) {
        s();
      });
    }
  }]);

  return Fetch;
}();

function useAsync(service, options) {
  var _options = options || {};

  var _options$refreshDeps = _options.refreshDeps,
      refreshDeps = _options$refreshDeps === void 0 ? [] : _options$refreshDeps,
      _options$manual = _options.manual,
      manual = _options$manual === void 0 ? false : _options$manual,
      _options$onSuccess = _options.onSuccess,
      onSuccess = _options$onSuccess === void 0 ? function () {} : _options$onSuccess,
      _options$onError = _options.onError,
      onError = _options$onError === void 0 ? function () {} : _options$onError,
      _options$defaultLoadi = _options.defaultLoading,
      defaultLoading = _options$defaultLoadi === void 0 ? false : _options$defaultLoadi,
      loadingDelay = _options.loadingDelay,
      _options$pollingInter = _options.pollingInterval,
      pollingInterval = _options$pollingInter === void 0 ? 0 : _options$pollingInter,
      _options$pollingWhenH = _options.pollingWhenHidden,
      pollingWhenHidden = _options$pollingWhenH === void 0 ? true : _options$pollingWhenH,
      _options$defaultParam = _options.defaultParams,
      defaultParams = _options$defaultParam === void 0 ? [] : _options$defaultParam,
      _options$refreshOnWin = _options.refreshOnWindowFocus,
      refreshOnWindowFocus = _options$refreshOnWin === void 0 ? false : _options$refreshOnWin,
      _options$focusTimespa = _options.focusTimespan,
      focusTimespan = _options$focusTimespa === void 0 ? 5000 : _options$focusTimespa,
      fetchKey = _options.fetchKey,
      cacheKey = _options.cacheKey,
      debounceInterval = _options.debounceInterval,
      throttleInterval = _options.throttleInterval,
      initialData = _options.initialData;
  var newstFetchKey = (0, _react.useRef)(DEFAULT_KEY); // 持久化一些函数

  var servicePersist = (0, _usePersistFn.default)(service);
  var onSuccessPersist = (0, _usePersistFn.default)(onSuccess);
  var onErrorPersist = (0, _usePersistFn.default)(onError);
  var fetchKeyPersist = (0, _usePersistFn.default)(fetchKey);
  var formatResult;

  if ('formatResult' in _options) {
    // eslint-disable-next-line prefer-destructuring
    formatResult = _options.formatResult;
  }

  var formatResultPersist = (0, _usePersistFn.default)(formatResult);
  var config = {
    formatResult: formatResultPersist,
    onSuccess: onSuccessPersist,
    onError: onErrorPersist,
    loadingDelay: loadingDelay,
    pollingInterval: pollingInterval,
    pollingWhenHidden: pollingWhenHidden,
    refreshOnWindowFocus: refreshOnWindowFocus,
    focusTimespan: focusTimespan,
    debounceInterval: debounceInterval,
    throttleInterval: throttleInterval
  };
  var subscribe = (0, _usePersistFn.default)(function (key, data) {
    setFeches(function (s) {
      // eslint-disable-next-line no-param-reassign
      s[key] = data;
      return _objectSpread({}, s);
    });
  }, []);

  var _useState = (0, _react.useState)(function () {
    // 如果有 缓存，则从缓存中读数据
    if (cacheKey) {
      var cache = (0, _cache.getCache)(cacheKey);

      if (cache) {
        newstFetchKey.current = cache.newstFetchKey;
        /* 使用 initState, 重新 new Fetch */

        var newFetches = {};
        Object.keys(cache.fetches).forEach(function (key) {
          var cacheFetch = cache.fetches[key];
          var newFetch = new Fetch(servicePersist, config, subscribe.bind(null, key), {
            loading: cacheFetch.loading,
            params: cacheFetch.params,
            data: cacheFetch.data,
            error: cacheFetch.error
          });
          newFetches[key] = newFetch.state;
        });
        return newFetches;
      }
    }

    return [];
  }),
      _useState2 = _slicedToArray(_useState, 2),
      fetches = _useState2[0],
      setFeches = _useState2[1];

  var fetchesRef = (0, _react.useRef)(fetches);
  fetchesRef.current = fetches;
  var run = (0, _react.useCallback)(function () {
    var _currentFetch;

    if (fetchKeyPersist) {
      var key = fetchKeyPersist.apply(void 0, arguments);
      newstFetchKey.current = key === undefined ? DEFAULT_KEY : key;
    }

    var currentFetchKey = newstFetchKey.current; // 这里必须用 fetchsRef，而不能用 fetches。
    // 否则在 reset 完，立即 run 的时候，这里拿到的 fetches 是旧的。

    var currentFetch = fetchesRef.current[currentFetchKey];

    if (!currentFetch) {
      var newFetch = new Fetch(servicePersist, config, subscribe.bind(null, currentFetchKey), {
        data: initialData
      });
      currentFetch = newFetch.state;
      setFeches(function (s) {
        // eslint-disable-next-line no-param-reassign
        s[currentFetchKey] = currentFetch;
        return _objectSpread({}, s);
      });
    }

    return (_currentFetch = currentFetch).run.apply(_currentFetch, arguments);
  }, [fetchKey, subscribe]); // cache

  (0, _react.useEffect)(function () {
    if (cacheKey) {
      (0, _cache.setCache)(cacheKey, {
        fetches: fetches,
        newstFetchKey: newstFetchKey.current
      });
    }
  }, [cacheKey, fetches]); // 第一次默认执行

  (0, _react.useEffect)(function () {
    if (!manual) {
      // 如果有缓存
      if (Object.keys(fetches).length > 0) {
        /* 重新执行所有的 */
        Object.values(fetches).forEach(function (f) {
          f.refresh();
        });
      } else {
        // 第一次默认执行，可以通过 defaultParams 设置参数
        run.apply(void 0, _toConsumableArray(defaultParams));
      }
    }
  }, []); // 重置 fetches

  var reset = (0, _react.useCallback)(function () {
    Object.values(fetchesRef.current).forEach(function (f) {
      f.unmount();
    });
    newstFetchKey.current = DEFAULT_KEY;
    setFeches({}); // 不写会有问题。如果不写，此时立即 run，会是老的数据

    fetchesRef.current = {};
  }, [setFeches]); //  refreshDeps 变化，重新执行所有请求

  (0, _useUpdateEffect.default)(function () {
    if (!manual) {
      /* 全部重新执行 */
      Object.values(fetchesRef.current).forEach(function (f) {
        f.refresh();
      });
    }
  }, _toConsumableArray(refreshDeps)); // 卸载组件触发

  (0, _react.useEffect)(function () {
    return function () {
      Object.values(fetchesRef.current).forEach(function (f) {
        f.unmount();
      });
    };
  }, []);
  var noReady = (0, _react.useCallback)(function (name) {
    return function () {
      throw new Error("Cannot call ".concat(name, " when service not executed once."));
    };
  }, []);
  return _objectSpread({
    loading: !manual || defaultLoading,
    data: initialData,
    error: undefined,
    params: [],
    cancel: noReady('cancel'),
    refresh: noReady('refresh'),
    mutate: noReady('mutate')
  }, fetches[newstFetchKey.current] || {}, {
    run: run,
    fetches: fetches,
    reset: reset
  });
}

var _default = useAsync;
exports.default = _default;
},{"lodash.debounce":"1YA1h","lodash.throttle":"6IZSc","react":"UCOaU","./utils":"1DZeT","./utils/cache":"22PxZ","./utils/limit":"5S5BQ","./utils/usePersistFn":"2ul5u","./utils/useUpdateEffect":"1sHhv","./utils/windowFocus":"3GPIz","./utils/windowVisible":"1KSFl"}],"1YA1h":[function(require,module,exports) {
var global = arguments[3];

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
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
/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */

var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max,
    nativeMin = Math.min;
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

var now = function () {
  return root.Date.now();
};
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
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;
    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
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
  return !!value && (type == 'object' || type == 'function');
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
  return !!value && typeof value == 'object';
}
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
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
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
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = debounce;
},{}],"6IZSc":[function(require,module,exports) {
var global = arguments[3];

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
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
/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */

var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max,
    nativeMin = Math.min;
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

var now = function () {
  return root.Date.now();
};
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
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;
    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
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
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
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
  return !!value && (type == 'object' || type == 'function');
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
  return !!value && typeof value == 'object';
}
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
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
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
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = throttle;
},{}],"1DZeT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDocumentVisible = isDocumentVisible;
exports.isOnline = isOnline;

function isDocumentVisible() {
  if (typeof document !== 'undefined' && typeof document.visibilityState !== 'undefined') {
    return document.visibilityState !== 'hidden';
  }

  return true;
}

function isOnline() {
  if (typeof navigator.onLine !== 'undefined') {
    return navigator.onLine;
  }

  return true;
}
},{}],"22PxZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCache = exports.getCache = void 0;
var cache = {};

var setCache = function setCache(key, data) {
  if (cache[key]) {
    clearTimeout(cache[key].timer);
  } // 数据在不活跃 5min 后，删除掉


  var timer = setTimeout(function () {
    delete cache[key];
  }, 5 * 60 * 1000);
  cache[key] = {
    data: data,
    timer: timer
  };
};

exports.setCache = setCache;

var getCache = function getCache(key) {
  var _cache$key;

  return (_cache$key = cache[key]) === null || _cache$key === void 0 ? void 0 : _cache$key.data;
};

exports.getCache = getCache;
},{}],"5S5BQ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = limit;

function limit(fn, timespan) {
  var pending = false;
  return function () {
    if (pending) return;
    pending = true;
    fn.apply(void 0, arguments);
    setTimeout(function () {
      pending = false;
    }, timespan);
  };
}
},{}],"2ul5u":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function usePersistFn(fn) {
  var dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var ref = (0, _react.useRef)(function () {
    throw new Error('Cannot call an event handler while rendering.');
  });
  (0, _react.useEffect)(function () {
    ref.current = fn;
  }, [fn].concat(_toConsumableArray(dependencies)));
  var persist = (0, _react.useCallback)(function () {
    var refFn = ref.current;

    if (refFn) {
      return refFn.apply(void 0, arguments);
    }
  }, [ref]);

  if (typeof fn === 'function') {
    return persist;
  }

  return undefined;
}

var _default = usePersistFn;
exports.default = _default;
},{"react":"UCOaU"}],"1sHhv":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var useUpdateEffect = function useUpdateEffect(effect, deps) {
  var isMounted = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};

var _default = useUpdateEffect;
exports.default = _default;
},{"react":"UCOaU"}],"3GPIz":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("./index");

// from swr
var listeners = [];

function subscribe(listener) {
  listeners.push(listener);
  return function unsubscribe() {
    var index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  };
}

var eventsBinded = false;

if (typeof window !== 'undefined' && window.addEventListener && !eventsBinded) {
  var revalidate = function revalidate() {
    if (!(0, _index.isDocumentVisible)() || !(0, _index.isOnline)()) return;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
  };

  window.addEventListener('visibilitychange', revalidate, false);
  window.addEventListener('focus', revalidate, false); // only bind the events once

  eventsBinded = true;
}

var _default = subscribe;
exports.default = _default;
},{"./index":"1DZeT"}],"1KSFl":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("./index");

// from swr
var listeners = [];

function subscribe(listener) {
  listeners.push(listener);
  return function unsubscribe() {
    var index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  };
}

var eventsBinded = false;

if (typeof window !== 'undefined' && window.addEventListener && !eventsBinded) {
  var revalidate = function revalidate() {
    if (!(0, _index.isDocumentVisible)()) return;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
  };

  window.addEventListener('visibilitychange', revalidate, false); // only bind the events once

  eventsBinded = true;
}

var _default = subscribe;
exports.default = _default;
},{"./index":"1DZeT"}],"2T1VH":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useAsync = _interopRequireDefault(require("./useAsync"));

var _useUpdateEffect = _interopRequireDefault(require("./utils/useUpdateEffect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function useLoadMore(service, options) {
  var _options$refreshDeps = options.refreshDeps,
      refreshDeps = _options$refreshDeps === void 0 ? [] : _options$refreshDeps,
      ref = options.ref,
      isNoMore = options.isNoMore,
      _options$threshold = options.threshold,
      threshold = _options$threshold === void 0 ? 100 : _options$threshold,
      fetchKey = options.fetchKey,
      restOptions = _objectWithoutProperties(options, ["refreshDeps", "ref", "isNoMore", "threshold", "fetchKey"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loadingMore = _useState2[0],
      setLoadingMore = _useState2[1];

  (0, _react.useEffect)(function () {
    if (options.fetchKey) {
      console.warn("useRequest loadMore mode don't need fetchKey!");
    }
  }, []);
  var result = (0, _useAsync.default)(service, _objectSpread({}, restOptions, {
    fetchKey: function fetchKey(d) {
      var _d$list;

      return (d === null || d === void 0 ? void 0 : (_d$list = d.list) === null || _d$list === void 0 ? void 0 : _d$list.length) || 0;
    },
    onSuccess: function onSuccess() {
      setLoadingMore(false);

      if (options.onSuccess) {
        options.onSuccess.apply(options, arguments);
      }
    }
  }));
  var data = result.data,
      run = result.run,
      params = result.params,
      reset = result.reset,
      loading = result.loading,
      fetches = result.fetches;
  var reload = (0, _react.useCallback)(function () {
    reset();

    var _params = _toArray(params),
        restParams = _params.slice(1);

    run.apply(void 0, [undefined].concat(_toConsumableArray(restParams)));
  }, [run, reset, params]);
  var reloadRef = (0, _react.useRef)(reload);
  reloadRef.current = reload;
  /* loadMore 场景下，如果 refreshDeps 变化，重置到第一页 */

  (0, _useUpdateEffect.default)(function () {
    /* 只有自动执行的场景， refreshDeps 才有效 */
    if (!options.manual) {
      reloadRef.current();
    }
  }, _toConsumableArray(refreshDeps));
  var dataGroup = (0, _react.useMemo)(function () {
    var listGroup = []; // 在 loadMore 时，不希望清空上一次的 data。需要把最后一个 非 loading 的请求 data，放回去。

    var lastNoLoadingData = data;
    Object.values(fetches).forEach(function (h) {
      var _h$data;

      if ((_h$data = h.data) === null || _h$data === void 0 ? void 0 : _h$data.list) {
        var _h$data2;

        listGroup = listGroup.concat((_h$data2 = h.data) === null || _h$data2 === void 0 ? void 0 : _h$data2.list);
      }

      if (!h.loading) {
        lastNoLoadingData = h.data;
      }
    });
    return _objectSpread({}, lastNoLoadingData, {
      list: listGroup
    });
  }, [fetches, data]);
  var noMore = isNoMore ? !loading && !loadingMore && isNoMore(dataGroup) : false;
  var loadMore = (0, _react.useCallback)(function () {
    if (noMore) {
      return;
    }

    setLoadingMore(true);

    var _params2 = _toArray(params),
        restParams = _params2.slice(1);

    run.apply(void 0, [dataGroup].concat(_toConsumableArray(restParams)));
  }, [noMore, run, dataGroup, params]);
  /* 上拉加载的方法 */

  var scrollMethod = (0, _react.useCallback)(function () {
    if (loading || loadingMore || !ref || !ref.current) {
      return;
    }

    if (ref.current.scrollHeight - ref.current.scrollTop <= ref.current.clientHeight + threshold) {
      loadMore();
    }
  }, [loading, ref, loadMore]);
  /* 如果有 ref，则会上拉加载更多 */

  (0, _react.useEffect)(function () {
    if (!ref || !ref.current) {
      return function () {};
    }

    ref.current.addEventListener('scroll', scrollMethod);
    return function () {
      if (ref && ref.current) {
        ref.current.removeEventListener('scroll', scrollMethod);
      }
    };
  }, [scrollMethod]);
  return _objectSpread({}, result, {
    data: dataGroup,
    reload: reload,
    loading: loading && dataGroup.list.length === 0,
    loadMore: loadMore,
    loadingMore: loadingMore,
    noMore: noMore
  });
}

var _default = useLoadMore;
exports.default = _default;
},{"react":"UCOaU","./useAsync":"1AibL","./utils/useUpdateEffect":"1sHhv"}],"4uWdu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useAsync2 = _interopRequireDefault(require("./useAsync"));

var _useUpdateEffect = _interopRequireDefault(require("./utils/useUpdateEffect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function usePaginated(service, options) {
  var paginated = options.paginated,
      _options$defaultPageS = options.defaultPageSize,
      defaultPageSize = _options$defaultPageS === void 0 ? 10 : _options$defaultPageS,
      _options$refreshDeps = options.refreshDeps,
      refreshDeps = _options$refreshDeps === void 0 ? [] : _options$refreshDeps,
      fetchKey = options.fetchKey,
      restOptions = _objectWithoutProperties(options, ["paginated", "defaultPageSize", "refreshDeps", "fetchKey"]);

  (0, _react.useEffect)(function () {
    if (fetchKey) {
      console.error('useRequest pagination\'s fetchKey will not work!');
    }
  }, []);

  var _useAsync = (0, _useAsync2.default)(service, _objectSpread({
    defaultParams: [{
      current: 1,
      pageSize: defaultPageSize
    }]
  }, restOptions)),
      data = _useAsync.data,
      params = _useAsync.params,
      run = _useAsync.run,
      loading = _useAsync.loading,
      rest = _objectWithoutProperties(_useAsync, ["data", "params", "run", "loading"]);

  var _ref = params && params[0] ? params[0] : {},
      _ref$current = _ref.current,
      current = _ref$current === void 0 ? 1 : _ref$current,
      _ref$pageSize = _ref.pageSize,
      pageSize = _ref$pageSize === void 0 ? defaultPageSize : _ref$pageSize,
      _ref$sorter = _ref.sorter,
      sorter = _ref$sorter === void 0 ? {} : _ref$sorter,
      _ref$filters = _ref.filters,
      filters = _ref$filters === void 0 ? {} : _ref$filters; // 只改变 pagination，其他参数原样传递


  var runChangePaination = (0, _react.useCallback)(function (paginationParams) {
    var _params = _toArray(params),
        oldPaginationParams = _params[0],
        restParams = _params.slice(1);

    run.apply(void 0, [_objectSpread({}, oldPaginationParams, {}, paginationParams)].concat(_toConsumableArray(restParams)));
  }, [run, params]);
  var total = (data === null || data === void 0 ? void 0 : data.total) || 0;
  var totalPage = (0, _react.useMemo)(function () {
    return Math.ceil(total / pageSize);
  }, [pageSize, total]);
  var onChange = (0, _react.useCallback)(function (c, p) {
    var toCurrent = c <= 0 ? 1 : c;
    var toPageSize = p <= 0 ? 1 : p;
    var tempTotalPage = Math.ceil(total / toPageSize);

    if (toCurrent > tempTotalPage) {
      toCurrent = tempTotalPage;
    }

    runChangePaination({
      current: c,
      pageSize: p
    });
  }, [total, runChangePaination]);
  var changeCurrent = (0, _react.useCallback)(function (c) {
    onChange(c, pageSize);
  }, [onChange, pageSize]);
  var changePageSize = (0, _react.useCallback)(function (p) {
    onChange(current, p);
  }, [onChange, current]);
  var changeCurrentRef = (0, _react.useRef)(changeCurrent);
  changeCurrentRef.current = changeCurrent;
  /* 分页场景下，如果 refreshDeps 变化，重置分页 */

  (0, _useUpdateEffect.default)(function () {
    /* 只有自动执行的场景， refreshDeps 才有效 */
    if (!options.manual) {
      changeCurrentRef.current(1);
    }
  }, _toConsumableArray(refreshDeps)); // 表格翻页 排序 筛选等

  var changeTable = (0, _react.useCallback)(function (p, f, s) {
    runChangePaination({
      current: p.current,
      pageSize: p.pageSize || defaultPageSize,
      filters: f,
      sorter: s
    });
  }, [filters, sorter, runChangePaination]);
  return _objectSpread({
    loading: loading,
    data: data,
    params: params,
    run: run,
    pagination: {
      current: current,
      pageSize: pageSize,
      total: total,
      totalPage: totalPage,
      onChange: onChange,
      changeCurrent: changeCurrent,
      changePageSize: changePageSize
    },
    tableProps: {
      dataSource: (data === null || data === void 0 ? void 0 : data.list) || [],
      loading: loading,
      onChange: changeTable,
      pagination: {
        current: current,
        pageSize: pageSize,
        total: total
      }
    },
    sorter: sorter,
    filters: filters
  }, rest);
}

var _default = usePaginated;
exports.default = _default;
},{"react":"UCOaU","./useAsync":"1AibL","./utils/useUpdateEffect":"1sHhv"}],"3LN0E":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfigContext = _react.default.createContext({});

ConfigContext.displayName = 'UseAPIConfigContext';
var _default = ConfigContext;
exports.default = _default;
},{"react":"UCOaU"}],"67dXN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _useAsync2 = _interopRequireDefault(require("../useAsync"));

var _useUpdateEffect = _interopRequireDefault(require("../useUpdateEffect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UseTableInitState = function UseTableInitState() {
  _classCallCheck(this, UseTableInitState);

  this.searchType = 'simple';
  this.current = 1;
  this.pageSize = 10;
  this.total = 0;
  this.formData = {};
  this.activeFormData = {};
  this.count = 0;
  this.data = [];
  this.filters = {};
  this.sorter = {};
}; // 缓存


var cacheData = {};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'updateState':
      return _objectSpread({}, state, {}, action.payload);

    default:
      throw new Error();
  }
};

function useAntdTable(fn, deps, options) {
  var _deps = Array.isArray(deps) ? deps : [];

  var _options = _typeof(deps) === 'object' && !Array.isArray(deps) ? deps : options || {};

  var initState = (0, _react.useMemo)(function () {
    return new UseTableInitState();
  }, []);
  var _options$defaultPageS = _options.defaultPageSize,
      defaultPageSize = _options$defaultPageS === void 0 ? 10 : _options$defaultPageS,
      id = _options.id,
      form = _options.form,
      formatResult = _options.formatResult;

  var _useReducer = (0, _react.useReducer)(reducer, _objectSpread({}, initState, {
    pageSize: defaultPageSize
  })),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];
  /* 临时记录切换前的表单数据 */


  var tempFieldsValueRef = (0, _react.useRef)({});
  var stateRef = (0, _react.useRef)({});
  stateRef.current = state;

  var _useAsync = (0, _useAsync2.default)(fn, _deps, {
    manual: true
  }),
      run = _useAsync.run,
      loading = _useAsync.loading;

  var reload = (0, _react.useCallback)(function () {
    dispatch({
      type: 'updateState',
      payload: {
        current: 1,
        count: state.count + 1
      }
    });
  }, [state.count]);
  var refresh = (0, _react.useCallback)(function () {
    dispatch({
      type: 'updateState',
      payload: {
        count: state.count + 1
      }
    });
  }, [state.count]);
  /* 初始化执行 */

  (0, _react.useEffect)(function () {
    /* 有缓存，恢复 */
    if (id && cacheData[id]) {
      var cache = cacheData[id];
      /* 修改完 formData 和 searchType 之后，会触发 useUpdateEffect，给当前表单赋值 */

      dispatch({
        type: 'updateState',
        payload: {
          current: cache.current,
          pageSize: cache.pageSize,
          searchType: cache.searchType,
          activeFormData: cache.activeFormData,
          formData: cache.formData,
          filters: cache.filters,
          sorter: cache.sorter,
          count: state.count + 1
        }
      });
    } else if (form) {
      /* 如果有 form，需要走 searchSubmit，为了初始化的时候，拿到 initialValue */
      searchSubmit();
    } else {
      refresh();
    }

    if (id) {
      return function () {
        cacheData[id] = stateRef.current;
      };
    }

    return function () {};
  }, []);
  /* deps 变化后，重置表格 */

  (0, _useUpdateEffect.default)(function () {
    reload();
  }, _deps);
  /* state.count 变化时，重新请求数据 */

  (0, _useUpdateEffect.default)(function () {
    var formattedData = {};
    /* 把  undefined 的过滤掉 */

    Object.keys(state.activeFormData).forEach(function (key) {
      if (state.activeFormData[key] !== undefined) {
        formattedData[key] = state.activeFormData[key];
      }
    });

    var params = _objectSpread({
      current: state.current,
      pageSize: state.pageSize
    }, formattedData);

    if (state.filters) {
      params.filters = state.filters;
    }

    if (state.sorter) {
      params.sorter = state.sorter;
    }

    run(params).then(function (res) {
      var payload = formatResult ? formatResult(res) : res;
      dispatch({
        type: 'updateState',
        payload: payload
      });
    });
  }, [state.current, state.pageSize, state.count]);
  /* 改变了 searchType，或者 formData，恢复表单数据 */

  (0, _useUpdateEffect.default)(function () {
    if (!form) {
      return;
    }

    var targetFormData = _objectSpread({}, state.formData, {}, tempFieldsValueRef.current);

    var existFormData = {};
    Object.keys(targetFormData).forEach(function (key) {
      if (form.getFieldInstance ? form.getFieldInstance(key) : true) {
        existFormData[key] = targetFormData[key];
      }
    });

    if (form.setFieldsValue) {
      form.setFieldsValue(existFormData);
    }

    tempFieldsValueRef.current = {};
  }, [state.searchType, state.formData]);
  /* 获得当前 form 数据 */

  var getCurrentFieldsValues = (0, _react.useCallback)(function () {
    if (!form) {
      return [];
    }

    var fieldsValue = {};

    if (form.getFieldsValue) {
      fieldsValue = form.getFieldsValue();
    }

    var filterFiledsValue = {};
    Object.keys(fieldsValue).forEach(function (key) {
      if (form.getFieldInstance ? form.getFieldInstance(key) : true) {
        filterFiledsValue[key] = fieldsValue[key];
      }
    });
    return filterFiledsValue;
  }, [form]); // 表单搜索

  var searchSubmit = (0, _react.useCallback)(function (e) {
    if (!form) {
      return;
    }

    if (e && e.preventDefault) {
      e.preventDefault();
    }

    setTimeout(function () {
      var activeFormData = getCurrentFieldsValues();
      dispatch({
        type: 'updateState',
        payload: {
          activeFormData: activeFormData,
          formData: _objectSpread({}, state.formData, {}, activeFormData)
        }
      });
      reload();
    });
  }, [form, reload]); // 重置表单

  var searchReset = (0, _react.useCallback)(function () {
    if (!form) {
      return;
    } // 恢复初始值


    if (form.resetFields) {
      form.resetFields();
    } // 重置表单后，拿到当前默认值


    var activeFormData = getCurrentFieldsValues();
    dispatch({
      type: 'updateState',
      payload: {
        activeFormData: activeFormData,
        formData: activeFormData
      }
    });
    reload();
  }, [form, reload]); // 切换搜索类型

  var changeSearchType = (0, _react.useCallback)(function () {
    if (!form) {
      return;
    }

    tempFieldsValueRef.current = getCurrentFieldsValues();
    var targetSearchType = state.searchType === 'simple' ? 'advance' : 'simple';
    dispatch({
      type: 'updateState',
      payload: {
        searchType: targetSearchType
      }
    });
  }, [state.searchType]); // 表格翻页 排序 筛选等

  var changeTable = (0, _react.useCallback)(function (p) {
    var f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    // antd table 的初始状态 filter 带有 null 字段，需要先去除后再比较
    var realFilter = _objectSpread({}, f);

    Object.entries(realFilter).forEach(function (item) {
      if (item[1] === null) {
        delete realFilter[item[0]];
      }
    }); // fix: https://github.com/umijs/hooks/issues/338

    if (!s.order) {
      // eslint-disable-next-line no-param-reassign
      s.field = undefined;
    }

    var needReload = !(0, _lodash.default)(realFilter, state.filters) || s.field !== state.sorter.field || s.order !== state.sorter.order;
    dispatch({
      type: 'updateState',
      payload: {
        current: needReload ? 1 : p.current,
        pageSize: p.pageSize,
        count: state.count + 1,
        filters: f,
        sorter: s
      }
    });
  }, [state.count]);
  var result = {
    /* table 已经废弃 */
    table: {
      dataSource: state.data,
      loading: loading,
      onChange: changeTable,
      pagination: {
        current: state.current,
        pageSize: state.pageSize,
        total: state.total
      }
    },
    tableProps: {
      dataSource: state.data,
      loading: loading,
      onChange: changeTable,
      pagination: {
        current: state.current,
        pageSize: state.pageSize,
        total: state.total
      }
    },
    sorter: state.sorter,
    filters: state.filters,
    refresh: refresh
  };

  if (form) {
    result.search = {
      submit: searchSubmit,
      type: state.searchType,
      changeType: changeSearchType,
      reset: searchReset
    };
  }

  return result;
}

var _default = useAntdTable;
exports.default = _default;
},{"react":"UCOaU","lodash.isequal":"ea9rJ","../useAsync":"6IZK6","../useUpdateEffect":"1CNwa"}],"ea9rJ":[function(require,module,exports) {
var global = arguments[3];

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Detect free variable `exports`. */

var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */

function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */


function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */


function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }

  return false;
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */


function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */


function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function cacheHas(cache, key) {
  return cache.has(key);
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
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */


function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
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
  return function (arg) {
    return func(transform(arg));
  };
}
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */


function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}
/** Used for built-in method references. */


var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */

var coreJsData = root['__core-js_shared__'];
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */


var nativeObjectToString = objectProto.toString;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);
/* Built-in method references that are verified to be native. */

var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
/** Used to convert symbols to primitives and strings. */

var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
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

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
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
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
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
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
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
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
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
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
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
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */

function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
}
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */


function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);

  return this;
}
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */


function setCacheHas(value) {
  return this.__data__.has(value);
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function stackGet(key) {
  return this.__data__.get(key);
}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function stackHas(key) {
  return this.__data__.has(key);
}
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */


function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
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
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */


function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
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

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */


function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */


function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }

  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */


function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }

    objIsArr = true;
    objIsObj = false;
  }

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }

  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }

  if (!isSameTag) {
    return false;
  }

  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
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
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */


function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */


function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */


function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  } // Assume cyclic values are equal.


  var stacked = stack.get(array);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array); // Ignore non-index properties.

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }

    if (compared !== undefined) {
      if (compared) {
        continue;
      }

      result = false;
      break;
    } // Recursively compare arrays (susceptible to call stack limits).


    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }

  stack['delete'](array);
  stack['delete'](other);
  return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */


function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }

      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }

      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      } // Assume cyclic values are equal.


      var stacked = stack.get(object);

      if (stacked) {
        return stacked == other;
      }

      bitmask |= COMPARE_UNORDERED_FLAG; // Recursively compare objects (susceptible to call stack limits).

      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }

  }

  return false;
}
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */


function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }

  var index = objLength;

  while (index--) {
    var key = objProps[index];

    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  } // Assume cyclic values are equal.


  var stacked = stack.get(object);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;

  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    } // Recursively compare objects (susceptible to call stack limits).


    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }

    skipCtor || (skipCtor = key == 'constructor');
  }

  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }

  stack['delete'](object);
  stack['delete'](other);
  return result;
}
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
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
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */


var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function (value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;

        case mapCtorString:
          return mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag;

        case weakMapCtorString:
          return weakMapTag;
      }
    }

    return result;
  };
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */


function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
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
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
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
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */


function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */


function objectToString(value) {
  return nativeObjectToString.call(value);
}
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
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
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
  return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */


var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
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
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */

function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */


var isBuffer = nativeIsBuffer || stubFalse;
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */

function isEqual(value, other) {
  return baseIsEqual(value, other);
}
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
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */


function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
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
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */


var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */

function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */


function stubArray() {
  return [];
}
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */


function stubFalse() {
  return false;
}

module.exports = isEqual;
},{}],"6IZK6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

function _async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = function Timer(cb, delay) {
  var _this = this;

  _classCallCheck(this, Timer);

  this.remaining = 0;
  this.delay = 0;
  this.cb = null;
  this.start = 0;
  this.timerId = 0;

  this.stop = function () {
    clearTimeout(_this.timerId);
    _this.timerId = 0;
    _this.remaining = _this.delay;
  };

  this.pause = function () {
    clearTimeout(_this.timerId);
    _this.remaining -= Date.now() - _this.start;
  };

  this.resume = function () {
    _this.start = Date.now();
    clearTimeout(_this.timerId);
    _this.timerId = setTimeout(_async(function () {
      if (_this.cb) {
        _this.cb();
      }

      return _await();
    }), _this.remaining);
  };

  this.remaining = delay;
  this.delay = delay;
  this.start = Date.now();
  this.cb = cb;
};

var noop = function noop() {};

var promiseReturn = function promiseReturn() {
  return _await(null);
};

function useAsync(fn, deps, options) {
  var _deps = Array.isArray(deps) ? deps : [];

  var _options = _typeof(deps) === 'object' && !Array.isArray(deps) ? deps : options || {};

  var params = (0, _react.useRef)([]);
  var _options$autoCancel = _options.autoCancel,
      autoCancel = _options$autoCancel === void 0 ? true : _options$autoCancel;
  var timer = (0, _react.useRef)(undefined);
  var omitNextResume = (0, _react.useRef)(false);
  var count = (0, _react.useRef)(0);
  var fnRef = (0, _react.useRef)(fn);
  fnRef.current = fn;
  var onSuccessRef = (0, _react.useRef)(_options.onSuccess);
  onSuccessRef.current = _options.onSuccess;
  var onErrorRef = (0, _react.useRef)(_options.onError);
  onErrorRef.current = _options.onError; // initial loading state is related to manual option

  var _useState = (0, _react.useState)({
    data: undefined,
    error: undefined,
    loading: !_options.manual
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      set = _useState2[1];

  var run = (0, _react.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // 确保不会返回被取消的结果
    var runCount = count.current;
    /* 当前参数保存一下 */

    params.current = args;
    set(function (s) {
      return _objectSpread({}, s, {
        loading: true
      });
    });
    return fnRef.current.apply(fnRef, args).then(function (data) {
      if (runCount === count.current) {
        set(function (s) {
          return _objectSpread({}, s, {
            data: data,
            loading: false
          });
        });

        if (onSuccessRef.current) {
          onSuccessRef.current(data, args || []);
        }
      }

      return data;
    }).catch(function (error) {
      if (runCount === count.current) {
        set(function (s) {
          return _objectSpread({}, s, {
            error: error,
            loading: false
          });
        });

        if (onErrorRef.current) {
          onErrorRef.current(error, args || []);
        }
      }

      throw error;
    });
  }, []);
  /* 软取消，由于竞态，需要取消上一次的请求 */

  var softCancel = (0, _react.useCallback)(function () {
    if (autoCancel) {
      count.current += 1;
      set(function (s) {
        return _objectSpread({}, s, {
          loading: false
        });
      });
    }
  }, [autoCancel]);
  /* 强制取消，组件卸载，或者用户手工取消 */

  var forceCancel = (0, _react.useCallback)(function () {
    count.current += 1;
    set(function (s) {
      return _objectSpread({}, s, {
        loading: false
      });
    });
  }, []);
  var stop = (0, _react.useCallback)(function () {
    if (timer.current) {
      timer.current.stop();
      omitNextResume.current = true;
    }

    forceCancel();
  }, [forceCancel]);
  var resume = (0, _react.useCallback)(function () {
    if (timer.current) {
      omitNextResume.current = false;
      timer.current.resume();
    }
  }, []);
  var pause = (0, _react.useCallback)(function () {
    if (timer.current) {
      timer.current.pause();
      omitNextResume.current = true;
    }

    forceCancel();
  }, [forceCancel]);
  var start = (0, _react.useCallback)(_async(function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    // 有定时器的延时逻辑
    if (_options.pollingInterval) {
      if (timer.current) {
        stop();
      }

      omitNextResume.current = false;
      timer.current = new Timer(function () {
        return start.apply(void 0, args);
      }, _options.pollingInterval);
      var ret = run.apply(void 0, args);
      ret.finally(function () {
        if (timer.current && !omitNextResume.current) {
          timer.current.resume();
        }
      });
      return ret;
    } // 如果上一次异步操作还在 loading，则会尝试取消掉上一次的异步操作。


    softCancel();
    return run.apply(void 0, args);
  }), [run, softCancel, stop, _options.pollingInterval]);
  (0, _react.useEffect)(function () {
    if (!_options.manual) {
      // deps 变化时，重新执行
      start();
    }
    /* 如果 desp 变化，强制取消 */


    return function () {
      if (timer.current) {
        timer.current.stop();
      }

      forceCancel();
    };
  }, [].concat(_toConsumableArray(_deps), [forceCancel, start]));
  return {
    loading: state.loading,
    params: params.current,
    error: state.error,
    data: state.data,
    cancel: forceCancel,
    run: start,
    timer: {
      stop: stop,
      resume: resume,
      pause: pause
    }
  };
}

var _default = useAsync;
exports.default = _default;
},{"react":"UCOaU"}],"1CNwa":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var useUpdateEffect = function useUpdateEffect(effect, deps) {
  var isMounted = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};

var _default = useUpdateEffect;
exports.default = _default;
},{"react":"UCOaU"}],"6abVZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.configRequest = void 0;

var _useAsync = _interopRequireDefault(require("../useAsync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

var globalMethod;

function _async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

var configRequest = function configRequest(method) {
  globalMethod = method;
};

exports.configRequest = configRequest;

var useAPI = function useAPI(opt) {
  var requestMethod = opt.method || globalMethod || fetch;
  return (0, _useAsync.default)(_async(function () {
    return _await(requestMethod(opt.url, opt.options), function (res) {
      return res.json && typeof res.json === 'function' ? res.json() : res;
    });
  }), [JSON.stringify(opt)], {
    manual: opt.manual,
    pollingInterval: opt.pollingInterval,
    onError: opt.onError,
    onSuccess: opt.onSuccess
  });
};

var _default = useAPI;
exports.default = _default;
},{"../useAsync":"6IZK6"}],"WeEAi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useUpdateEffect = _interopRequireDefault(require("../useUpdateEffect"));

var _useAsync2 = _interopRequireDefault(require("../useAsync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function useLoadMore(fn, deps, options) {
  var _deps = Array.isArray(deps) ? deps : [];

  var _options = _typeof(deps) === 'object' && !Array.isArray(deps) ? deps : options || {};
  /* 初始化值 */


  var itemKey = _options.itemKey,
      _options$initPageSize = _options.initPageSize,
      initPageSize = _options$initPageSize === void 0 ? 10 : _options$initPageSize,
      formatResult = _options.formatResult,
      ref = _options.ref,
      _options$threshold = _options.threshold,
      threshold = _options$threshold === void 0 ? 100 : _options$threshold;
  var incrementSize = _options.incrementSize;

  if (!incrementSize) {
    incrementSize = initPageSize;
  }

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      total = _useState4[0],
      setTotal = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];
  /* 控制重新执行 */


  var _useState7 = (0, _react.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      count = _useState8[0],
      setCount = _useState8[1];
  /* 开始的时间戳 */


  var startTime = (0, _react.useRef)(new Date().getTime());

  var _useAsync = (0, _useAsync2.default)(fn, [], {
    manual: true
  }),
      run = _useAsync.run,
      loading = _useAsync.loading;
  /* id 模式下读取 Key */


  var getItemKey = (0, _react.useCallback)(function (item, index) {
    var key = typeof itemKey === 'function' ? itemKey(item, index) : item[itemKey];
    return key === undefined ? index : key;
  }, [itemKey]);
  var loadData = (0, _react.useCallback)(function () {
    var params = {
      page: page,
      pageSize: page === 1 ? initPageSize : incrementSize,
      offset: data.length,
      startTime: startTime.current
    };
    /* id 模式需要增加最后一个 id */

    if (itemKey) {
      params.id = data.length > 0 ? getItemKey(data[data.length - 1], data.length - 1) : undefined;
    }

    run(params).then(function (result) {
      if (!result) {
        return;
      }

      var _ref = formatResult ? formatResult(result) : result,
          currentTotal = _ref.total,
          currentData = _ref.data;

      setData(data.concat(currentData));
      setTotal(currentTotal);
    });
  }, [page, initPageSize, incrementSize, data]);
  var loadMore = (0, _react.useCallback)(function () {
    if (total && data.length >= total) {
      return;
    }

    setPage(page + 1);
    setCount(count + 1);
  }, [page, count, data, total]);
  var reload = (0, _react.useCallback)(function () {
    setPage(1);
    setData([]);
    startTime.current = new Date().getTime();
    setCount(count + 1);
  }, [count]);
  /* 上拉加载的方法 */

  var scrollMethod = (0, _react.useCallback)(function () {
    if (loading || !ref || !ref.current) {
      return;
    }

    if (ref.current.scrollHeight - ref.current.scrollTop <= ref.current.clientHeight + threshold) {
      loadMore();
    }
  }, [loading, ref, loadMore]);
  /* 如果有 ref，则会上拉加载更多 */

  (0, _react.useEffect)(function () {
    if (!ref || !ref.current) {
      return function () {};
    }

    ref.current.addEventListener('scroll', scrollMethod);
    return function () {
      if (ref && ref.current) {
        ref.current.removeEventListener('scroll', scrollMethod);
      }
    };
  }, [scrollMethod]);
  /* 只有初始化，或者 count 变化时，才会执行 run */

  (0, _react.useEffect)(function () {
    loadData();
  }, [count]);
  /* deps 变化后，重新 reload */

  (0, _useUpdateEffect.default)(function () {
    reload();
  }, _deps);
  return {
    data: data,
    loading: loading && page === 1,
    loadingMore: loading && page > 1,
    reload: reload,
    loadMore: loadMore,
    total: total,
    noMore: !loading && !total || !!total && data.length >= total
  };
}

var _default = useLoadMore;
exports.default = _default;
},{"react":"UCOaU","../useUpdateEffect":"1CNwa","../useAsync":"6IZK6"}],"h9E7k":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useAsync2 = _interopRequireDefault(require("../useAsync"));

var _useDebounceFn = _interopRequireDefault(require("../useDebounceFn"));

var _useUpdateEffect = _interopRequireDefault(require("../useUpdateEffect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function useSearch(fn, deps, options) {
  var _deps = Array.isArray(deps) ? deps : [];

  var _options = _typeof(deps) === 'object' && !Array.isArray(deps) ? deps : options || {};

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useAsync = (0, _useAsync2.default)(fn, [value].concat(_toConsumableArray(_deps)), {
    manual: true
  }),
      loading = _useAsync.loading,
      data = _useAsync.data,
      run = _useAsync.run,
      cancelAsync = _useAsync.cancel;

  var wait = (0, _react.useMemo)(function () {
    return _options.wait === undefined ? 300 : _options.wait;
  }, [_options.wait]);
  var debounce = (0, _useDebounceFn.default)(function () {
    run(value);
  }, [value], wait);
  /* 依赖变化时，需要立即重新请求 */

  (0, _useUpdateEffect.default)(function () {
    run(value);
  }, _deps);
  var cancel = (0, _react.useCallback)(function () {
    /* 先取消防抖 */
    debounce.cancel();
    /* 再取消 async */

    cancelAsync();
  }, [cancelAsync, debounce.cancel]);
  /* 手动触发 */

  var trigger = (0, _react.useCallback)(function () {
    run(value);
  }, [run, value]);
  return {
    data: data,
    loading: loading,
    value: value,
    onChange: setValue,
    cancel: cancel,
    run: trigger
  };
}

var _default = useSearch;
exports.default = _default;
},{"react":"UCOaU","../useAsync":"6IZK6","../useDebounceFn":"1y9sR","../useUpdateEffect":"1CNwa"}],"1y9sR":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useUpdateEffect = _interopRequireDefault(require("../useUpdateEffect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function useDebounceFn(fn, deps, wait) {
  var _deps = Array.isArray(deps) ? deps : [];

  var _wait = typeof deps === 'number' ? deps : wait || 0;

  var timer = (0, _react.useRef)();
  var fnRef = (0, _react.useRef)(fn);
  fnRef.current = fn;
  var cancel = (0, _react.useCallback)(function () {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  }, []);
  var run = (0, _react.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    cancel();
    timer.current = setTimeout(function () {
      fnRef.current.apply(fnRef, args);
    }, _wait);
  }, [_wait, cancel]);
  (0, _useUpdateEffect.default)(function () {
    run();
    return cancel;
  }, [].concat(_toConsumableArray(_deps), [run]));
  (0, _react.useEffect)(function () {
    return cancel;
  }, []);
  return {
    run: run,
    cancel: cancel
  };
}

var _default = useDebounceFn;
exports.default = _default;
},{"react":"UCOaU","../useUpdateEffect":"1CNwa"}],"5mUnb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useControllableValue;

var _react = require("react");

var _useUpdateEffect = _interopRequireDefault(require("../useUpdateEffect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useControllableValue() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaultValue = options.defaultValue,
      _options$defaultValue = options.defaultValuePropName,
      defaultValuePropName = _options$defaultValue === void 0 ? 'defaultValue' : _options$defaultValue,
      _options$valuePropNam = options.valuePropName,
      valuePropName = _options$valuePropNam === void 0 ? 'value' : _options$valuePropNam,
      _options$trigger = options.trigger,
      trigger = _options$trigger === void 0 ? 'onChange' : _options$trigger;
  var value = props[valuePropName];
  var initialValue = (0, _react.useMemo)(function () {
    if (valuePropName in props) {
      return value;
    }

    if (defaultValuePropName in props) {
      return props[defaultValuePropName];
    }

    return defaultValue;
  }, []);

  var _useState = (0, _react.useState)(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];
  /* init 的时候不用执行了 */


  (0, _useUpdateEffect.default)(function () {
    if (valuePropName in props) {
      setState(value);
    }
  }, [value]);
  var handleSetState = (0, _react.useCallback)(function (v) {
    if (!(valuePropName in props)) {
      setState(v);
    }

    if (props[trigger]) {
      props[trigger](v);
    }
  }, [props, valuePropName, trigger]);
  return [state, handleSetState];
}
},{"react":"UCOaU","../useUpdateEffect":"1CNwa"}],"AT8FZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(initialValue) {
  var counterRef = (0, _react.useRef)(-1); // key 存储器

  var keyList = (0, _react.useRef)([]); // 内部方法

  var setKey = (0, _react.useCallback)(function (index) {
    counterRef.current += 1;
    keyList.current.splice(index, 0, counterRef.current);
  }, []);

  var _useState = (0, _react.useState)(function () {
    (initialValue || []).forEach(function (_, index) {
      setKey(index);
    });
    return initialValue || [];
  }),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var resetList = function resetList() {
    var newList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    keyList.current = [];
    counterRef.current = -1;
    setList(function () {
      (newList || []).forEach(function (_, index) {
        setKey(index);
      });
      return newList || [];
    });
  };

  var insert = function insert(index, obj) {
    setList(function (l) {
      var temp = _toConsumableArray(l);

      temp.splice(index, 0, obj);
      setKey(index);
      return temp;
    });
  };

  var getKey = function getKey(index) {
    return keyList.current[index];
  };

  var getIndex = function getIndex(index) {
    return keyList.current.findIndex(function (ele) {
      return ele === index;
    });
  };

  var merge = function merge(index, obj) {
    setList(function (l) {
      var temp = _toConsumableArray(l);

      obj.forEach(function (_, i) {
        setKey(index + i);
      });
      temp.splice.apply(temp, [index, 0].concat(_toConsumableArray(obj)));
      return temp;
    });
  };

  var replace = function replace(index, obj) {
    setList(function (l) {
      var temp = _toConsumableArray(l);

      temp[index] = obj;
      return temp;
    });
  };

  var remove = function remove(index) {
    setList(function (l) {
      var temp = _toConsumableArray(l);

      temp.splice(index, 1); // remove keys if necessary

      try {
        keyList.current.splice(index, 1);
      } catch (e) {
        console.error(e);
      }

      return temp;
    });
  };

  var move = function move(oldIndex, newIndex) {
    if (oldIndex === newIndex) {
      return;
    }

    setList(function (l) {
      var newList = _toConsumableArray(l);

      var temp = newList.filter(function (_, index) {
        return index !== oldIndex;
      });
      temp.splice(newIndex, 0, newList[oldIndex]); // move keys if necessary

      try {
        var keyTemp = keyList.current.filter(function (_, index) {
          return index !== oldIndex;
        });
        keyTemp.splice(newIndex, 0, keyList.current[oldIndex]);
        keyList.current = keyTemp;
      } catch (e) {
        console.error(e);
      }

      return temp;
    });
  };

  var push = function push(obj) {
    setList(function (l) {
      setKey(l.length);
      return l.concat([obj]);
    });
  };

  var pop = function pop() {
    // remove keys if necessary
    try {
      keyList.current = keyList.current.slice(0, keyList.current.length - 1);
    } catch (e) {
      console.error(e);
    }

    setList(function (l) {
      return l.slice(0, l.length - 1);
    });
  };

  var unshift = function unshift(obj) {
    setList(function (l) {
      setKey(0);
      return [obj].concat(l);
    });
  };

  var sortForm = function sortForm(result) {
    return result.map(function (item, index) {
      return {
        key: index,
        item: item
      };
    }) // add index into obj
    .sort(function (a, b) {
      return getIndex(a.key) - getIndex(b.key);
    }) // sort based on the index of table
    .filter(function (item) {
      return !!item.item;
    }) // remove undefined(s)
    .map(function (item) {
      return item.item;
    });
  }; // retrive the data


  var shift = function shift() {
    // remove keys if necessary
    try {
      keyList.current = keyList.current.slice(1, keyList.current.length);
    } catch (e) {
      console.error(e);
    }

    setList(function (l) {
      return l.slice(1, l.length);
    });
  };

  return {
    list: list,
    insert: insert,
    merge: merge,
    replace: replace,
    remove: remove,
    getKey: getKey,
    getIndex: getIndex,
    move: move,
    push: push,
    pop: pop,
    unshift: unshift,
    shift: shift,
    sortForm: sortForm,
    resetList: resetList
  };
};

exports.default = _default;
},{"react":"UCOaU"}],"JCSSA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useEventEmitter;
exports.EventEmitter = void 0;

var _react = require("react");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function EventEmitter() {
  var _this = this;

  _classCallCheck(this, EventEmitter);

  this.subscriptions = new Set();

  this.emit = function (val) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _this.subscriptions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var subscription = _step.value;
        subscription(val);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  this.useSubscription = function (callback) {
    var callbackRef = (0, _react.useRef)();
    callbackRef.current = callback;
    (0, _react.useEffect)(function () {
      function subscription(val) {
        if (callbackRef.current) {
          callbackRef.current(val);
        }
      }

      _this.subscriptions.add(subscription);

      return function () {
        _this.subscriptions.delete(subscription);
      };
    }, []);
  };
};

exports.EventEmitter = EventEmitter;

function useEventEmitter() {
  var ref = (0, _react.useRef)();

  if (!ref.current) {
    ref.current = new EventEmitter();
  }

  return ref.current;
}
},{"react":"UCOaU"}],"6VayY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useSize3 = _interopRequireDefault(require("../useSize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(list, options) {
  var _useSize = (0, _useSize3.default)(),
      _useSize2 = _slicedToArray(_useSize, 2),
      size = _useSize2[0],
      containerRef = _useSize2[1]; // 暂时禁止 cache
  // const distanceCache = useRef<{ [key: number]: number }>({});


  var _useState = (0, _react.useState)({
    start: 0,
    end: 10
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var itemHeight = options.itemHeight,
      _options$overscan = options.overscan,
      overscan = _options$overscan === void 0 ? 5 : _options$overscan;

  if (!itemHeight) {
    console.warn('please enter a valid itemHeight');
  }

  var getViewCapacity = function getViewCapacity(containerHeight) {
    if (typeof itemHeight === 'number') {
      return Math.ceil(containerHeight / itemHeight);
    }

    var _state$start = state.start,
        start = _state$start === void 0 ? 0 : _state$start;
    var sum = 0;
    var capacity = 0;

    for (var i = start; i < list.length; i++) {
      var height = itemHeight(i);
      sum += height;

      if (sum >= containerHeight) {
        capacity = i;
        break;
      }
    }

    return capacity - start;
  };

  var getOffset = function getOffset(scrollTop) {
    if (typeof itemHeight === 'number') {
      return Math.floor(scrollTop / itemHeight) + 1;
    }

    var sum = 0;
    var offset = 0;

    for (var i = 0; i < list.length; i++) {
      var height = itemHeight(i);
      sum += height;

      if (sum >= scrollTop) {
        offset = i;
        break;
      }
    }

    return offset + 1;
  };

  var calculateRange = function calculateRange() {
    var element = containerRef.current;

    if (element) {
      var offset = getOffset(element.scrollTop);
      var viewCapacity = getViewCapacity(element.clientHeight);
      var from = offset - overscan;
      var to = offset + viewCapacity + overscan;
      setState({
        start: from < 0 ? 0 : from,
        end: to > list.length ? list.length : to
      });
    }
  };

  (0, _react.useEffect)(function () {
    calculateRange();
  }, [size.width, size.height]);
  var totalHeight = (0, _react.useMemo)(function () {
    if (typeof itemHeight === 'number') {
      return list.length * itemHeight;
    }

    return list.reduce(function (sum, _, index) {
      return sum + itemHeight(index);
    }, 0);
  }, [list.length]);

  var getDistanceTop = function getDistanceTop(index) {
    // 如果有缓存，优先返回缓存值
    // if (enableCache && distanceCache.current[index]) {
    //   return distanceCache.current[index];
    // }
    if (typeof itemHeight === 'number') {
      var _height = index * itemHeight; // if (enableCache) {
      //   distanceCache.current[index] = height;
      // }


      return _height;
    }

    var height = list.slice(0, index).reduce(function (sum, _, i) {
      return sum + itemHeight(i);
    }, 0); // if (enableCache) {
    //   distanceCache.current[index] = height;
    // }

    return height;
  };

  var scrollTo = function scrollTo(index) {
    if (containerRef.current) {
      containerRef.current.scrollTop = getDistanceTop(index);
      calculateRange();
    }
  };

  return {
    list: list.slice(state.start, state.end).map(function (ele, index) {
      return {
        data: ele,
        index: index + state.start
      };
    }),
    scrollTo: scrollTo,
    containerProps: {
      ref: function ref(ele) {
        containerRef.current = ele;
      },
      onScroll: function onScroll(e) {
        e.preventDefault();
        calculateRange();
      },
      style: {
        overflowY: 'auto'
      }
    },
    wrapperProps: {
      style: {
        width: '100%',
        height: totalHeight,
        paddingTop: getDistanceTop(state.start)
      }
    }
  };
};

exports.default = _default;
},{"react":"UCOaU","../useSize":"5DuDh"}],"5DuDh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useSize() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var hasPassedInElement = args.length === 1;
  var arg = (0, _react.useRef)(args[0]);
  arg.current = args[0];
  var element = (0, _react.useRef)();

  var _useState = (0, _react.useState)(function () {
    var initDOM = typeof arg.current === 'function' ? arg.current() : arg.current;
    return {
      width: (initDOM || {}).clientWidth,
      height: (initDOM || {}).clientHeight
    };
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  (0, _react.useLayoutEffect)(function () {
    var passedInElement = typeof arg.current === 'function' ? arg.current() : arg.current;
    var targetElement = hasPassedInElement ? passedInElement : element.current;

    if (!targetElement) {
      return function () {};
    }

    var resizeObserver = new _resizeObserverPolyfill.default(function (entries) {
      entries.forEach(function (entry) {
        setState({
          width: entry.target.clientWidth,
          height: entry.target.clientHeight
        });
      });
    });
    resizeObserver.observe(targetElement);
    return function () {
      resizeObserver.disconnect();
    };
  }, [element.current, typeof arg.current === 'function' ? undefined : arg.current]);

  if (hasPassedInElement) {
    return [state];
  }

  return [state, element];
}

var _default = useSize;
exports.default = _default;
},{"react":"UCOaU","resize-observer-polyfill":"4aRXe"}],"4aRXe":[function(require,module,exports) {
var define;
var global = arguments[3];

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.ResizeObserver = factory();
})(this, function () {
  'use strict';
  /**
   * A collection of shims that provide minimal functionality of the ES6 collections.
   *
   * These implementations are not meant to be used outside of the ResizeObserver
   * modules as they cover only a limited range of use cases.
   */

  /* eslint-disable require-jsdoc, valid-jsdoc */

  var MapShim = function () {
    if (typeof Map !== 'undefined') {
      return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */


    function getIndex(arr, key) {
      var result = -1;
      arr.some(function (entry, index) {
        if (entry[0] === key) {
          result = index;
          return true;
        }

        return false;
      });
      return result;
    }

    return (
      /** @class */
      function () {
        function class_1() {
          this.__entries__ = [];
        }

        Object.defineProperty(class_1.prototype, "size", {
          /**
           * @returns {boolean}
           */
          get: function () {
            return this.__entries__.length;
          },
          enumerable: true,
          configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */

        class_1.prototype.get = function (key) {
          var index = getIndex(this.__entries__, key);
          var entry = this.__entries__[index];
          return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */


        class_1.prototype.set = function (key, value) {
          var index = getIndex(this.__entries__, key);

          if (~index) {
            this.__entries__[index][1] = value;
          } else {
            this.__entries__.push([key, value]);
          }
        };
        /**
         * @param {*} key
         * @returns {void}
         */


        class_1.prototype.delete = function (key) {
          var entries = this.__entries__;
          var index = getIndex(entries, key);

          if (~index) {
            entries.splice(index, 1);
          }
        };
        /**
         * @param {*} key
         * @returns {void}
         */


        class_1.prototype.has = function (key) {
          return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */


        class_1.prototype.clear = function () {
          this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */


        class_1.prototype.forEach = function (callback, ctx) {
          if (ctx === void 0) {
            ctx = null;
          }

          for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
            var entry = _a[_i];
            callback.call(ctx, entry[1], entry[0]);
          }
        };

        return class_1;
      }()
    );
  }();
  /**
   * Detects whether window and document objects are available in current environment.
   */


  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document; // Returns global object of a current environment.

  var global$1 = function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
      return global;
    }

    if (typeof self !== 'undefined' && self.Math === Math) {
      return self;
    }

    if (typeof window !== 'undefined' && window.Math === Math) {
      return window;
    } // eslint-disable-next-line no-new-func


    return Function('return this')();
  }();
  /**
   * A shim for the requestAnimationFrame which falls back to the setTimeout if
   * first one is not supported.
   *
   * @returns {number} Requests' identifier.
   */


  var requestAnimationFrame$1 = function () {
    if (typeof requestAnimationFrame === 'function') {
      // It's required to use a bounded function because IE sometimes throws
      // an "Invalid calling object" error if rAF is invoked without the global
      // object on the left hand side.
      return requestAnimationFrame.bind(global$1);
    }

    return function (callback) {
      return setTimeout(function () {
        return callback(Date.now());
      }, 1000 / 60);
    };
  }(); // Defines minimum timeout before adding a trailing call.


  var trailingTimeout = 2;
  /**
   * Creates a wrapper function which ensures that provided callback will be
   * invoked only once during the specified delay period.
   *
   * @param {Function} callback - Function to be invoked after the delay period.
   * @param {number} delay - Delay after which to invoke callback.
   * @returns {Function}
   */

  function throttle(callback, delay) {
    var leadingCall = false,
        trailingCall = false,
        lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */

    function resolvePending() {
      if (leadingCall) {
        leadingCall = false;
        callback();
      }

      if (trailingCall) {
        proxy();
      }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */


    function timeoutCallback() {
      requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */


    function proxy() {
      var timeStamp = Date.now();

      if (leadingCall) {
        // Reject immediately following calls.
        if (timeStamp - lastCallTime < trailingTimeout) {
          return;
        } // Schedule new call to be in invoked when the pending one is resolved.
        // This is important for "transitions" which never actually start
        // immediately so there is a chance that we might miss one if change
        // happens amids the pending invocation.


        trailingCall = true;
      } else {
        leadingCall = true;
        trailingCall = false;
        setTimeout(timeoutCallback, delay);
      }

      lastCallTime = timeStamp;
    }

    return proxy;
  } // Minimum delay before invoking the update of observers.


  var REFRESH_DELAY = 20; // A list of substrings of CSS properties used to find transition events that
  // might affect dimensions of observed elements.

  var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; // Check if MutationObserver is available.

  var mutationObserverSupported = typeof MutationObserver !== 'undefined';
  /**
   * Singleton controller class which handles updates of ResizeObserver instances.
   */

  var ResizeObserverController =
  /** @class */
  function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
      /**
       * Indicates whether DOM listeners have been added.
       *
       * @private {boolean}
       */
      this.connected_ = false;
      /**
       * Tells that controller has subscribed for Mutation Events.
       *
       * @private {boolean}
       */

      this.mutationEventsAdded_ = false;
      /**
       * Keeps reference to the instance of MutationObserver.
       *
       * @private {MutationObserver}
       */

      this.mutationsObserver_ = null;
      /**
       * A list of connected observers.
       *
       * @private {Array<ResizeObserverSPI>}
       */

      this.observers_ = [];
      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
      this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */


    ResizeObserverController.prototype.addObserver = function (observer) {
      if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
      } // Add listeners if they haven't been added yet.


      if (!this.connected_) {
        this.connect_();
      }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */


    ResizeObserverController.prototype.removeObserver = function (observer) {
      var observers = this.observers_;
      var index = observers.indexOf(observer); // Remove observer if it's present in registry.

      if (~index) {
        observers.splice(index, 1);
      } // Remove listeners if controller has no connected observers.


      if (!observers.length && this.connected_) {
        this.disconnect_();
      }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */


    ResizeObserverController.prototype.refresh = function () {
      var changesDetected = this.updateObservers_(); // Continue running updates if changes have been detected as there might
      // be future ones caused by CSS transitions.

      if (changesDetected) {
        this.refresh();
      }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */


    ResizeObserverController.prototype.updateObservers_ = function () {
      // Collect observers that have active observations.
      var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
      }); // Deliver notifications in a separate cycle in order to avoid any
      // collisions between observers, e.g. when multiple instances of
      // ResizeObserver are tracking the same element and the callback of one
      // of them changes content dimensions of the observed target. Sometimes
      // this may result in notifications being blocked for the rest of observers.

      activeObservers.forEach(function (observer) {
        return observer.broadcastActive();
      });
      return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */


    ResizeObserverController.prototype.connect_ = function () {
      // Do nothing if running in a non-browser environment or if listeners
      // have been already added.
      if (!isBrowser || this.connected_) {
        return;
      } // Subscription to the "Transitionend" event is used as a workaround for
      // delayed transitions. This way it's possible to capture at least the
      // final state of an element.


      document.addEventListener('transitionend', this.onTransitionEnd_);
      window.addEventListener('resize', this.refresh);

      if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);
        this.mutationsObserver_.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      } else {
        document.addEventListener('DOMSubtreeModified', this.refresh);
        this.mutationEventsAdded_ = true;
      }

      this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */


    ResizeObserverController.prototype.disconnect_ = function () {
      // Do nothing if running in a non-browser environment or if listeners
      // have been already removed.
      if (!isBrowser || !this.connected_) {
        return;
      }

      document.removeEventListener('transitionend', this.onTransitionEnd_);
      window.removeEventListener('resize', this.refresh);

      if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
      }

      if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh);
      }

      this.mutationsObserver_ = null;
      this.mutationEventsAdded_ = false;
      this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */


    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
      var _b = _a.propertyName,
          propertyName = _b === void 0 ? '' : _b; // Detect whether transition may affect dimensions of an element.

      var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
      });

      if (isReflowProperty) {
        this.refresh();
      }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */


    ResizeObserverController.getInstance = function () {
      if (!this.instance_) {
        this.instance_ = new ResizeObserverController();
      }

      return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */


    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
  }();
  /**
   * Defines non-writable/enumerable properties of the provided target object.
   *
   * @param {Object} target - Object for which to define properties.
   * @param {Object} props - Properties to be defined.
   * @returns {Object} Target object.
   */


  var defineConfigurable = function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
      var key = _a[_i];
      Object.defineProperty(target, key, {
        value: props[key],
        enumerable: false,
        writable: false,
        configurable: true
      });
    }

    return target;
  };
  /**
   * Returns the global object associated with provided element.
   *
   * @param {Object} target
   * @returns {Object}
   */


  var getWindowOf = function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local global object if it's not possible extract one from
    // provided element.

    return ownerGlobal || global$1;
  }; // Placeholder of an empty content rectangle.


  var emptyRect = createRectInit(0, 0, 0, 0);
  /**
   * Converts provided string to a number.
   *
   * @param {number|string} value
   * @returns {number}
   */

  function toFloat(value) {
    return parseFloat(value) || 0;
  }
  /**
   * Extracts borders size from provided styles.
   *
   * @param {CSSStyleDeclaration} styles
   * @param {...string} positions - Borders positions (top, right, ...)
   * @returns {number}
   */


  function getBordersSize(styles) {
    var positions = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      positions[_i - 1] = arguments[_i];
    }

    return positions.reduce(function (size, position) {
      var value = styles['border-' + position + '-width'];
      return size + toFloat(value);
    }, 0);
  }
  /**
   * Extracts paddings sizes from provided styles.
   *
   * @param {CSSStyleDeclaration} styles
   * @returns {Object} Paddings box.
   */


  function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};

    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
      var position = positions_1[_i];
      var value = styles['padding-' + position];
      paddings[position] = toFloat(value);
    }

    return paddings;
  }
  /**
   * Calculates content rectangle of provided SVG element.
   *
   * @param {SVGGraphicsElement} target - Element content rectangle of which needs
   *      to be calculated.
   * @returns {DOMRectInit}
   */


  function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
  }
  /**
   * Calculates content rectangle of provided HTMLElement.
   *
   * @param {HTMLElement} target - Element for which to calculate the content rectangle.
   * @returns {DOMRectInit}
   */


  function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth,
        clientHeight = target.clientHeight; // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.

    if (!clientWidth && !clientHeight) {
      return emptyRect;
    }

    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom; // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.

    var width = toFloat(styles.width),
        height = toFloat(styles.height); // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).

    if (styles.boxSizing === 'border-box') {
      // Following conditions are required to handle Internet Explorer which
      // doesn't include paddings and borders to computed CSS dimensions.
      //
      // We can say that if CSS dimensions + paddings are equal to the "client"
      // properties then it's either IE, and thus we don't need to subtract
      // anything, or an element merely doesn't have paddings/borders styles.
      if (Math.round(width + horizPad) !== clientWidth) {
        width -= getBordersSize(styles, 'left', 'right') + horizPad;
      }

      if (Math.round(height + vertPad) !== clientHeight) {
        height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
      }
    } // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.


    if (!isDocumentElement(target)) {
      // In some browsers (only in Firefox, actually) CSS width & height
      // include scroll bars size which can be removed at this step as scroll
      // bars are the only difference between rounded dimensions + paddings
      // and "client" properties, though that is not always true in Chrome.
      var vertScrollbar = Math.round(width + horizPad) - clientWidth;
      var horizScrollbar = Math.round(height + vertPad) - clientHeight; // Chrome has a rather weird rounding of "client" properties.
      // E.g. for an element with content width of 314.2px it sometimes gives
      // the client width of 315px and for the width of 314.7px it may give
      // 314px. And it doesn't happen all the time. So just ignore this delta
      // as a non-relevant.

      if (Math.abs(vertScrollbar) !== 1) {
        width -= vertScrollbar;
      }

      if (Math.abs(horizScrollbar) !== 1) {
        height -= horizScrollbar;
      }
    }

    return createRectInit(paddings.left, paddings.top, width, height);
  }
  /**
   * Checks whether provided element is an instance of the SVGGraphicsElement.
   *
   * @param {Element} target - Element to be checked.
   * @returns {boolean}
   */


  var isSVGGraphicsElement = function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
      return function (target) {
        return target instanceof getWindowOf(target).SVGGraphicsElement;
      };
    } // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens


    return function (target) {
      return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
    };
  }();
  /**
   * Checks whether provided element is a document element (<html>).
   *
   * @param {Element} target - Element to be checked.
   * @returns {boolean}
   */


  function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
  }
  /**
   * Calculates an appropriate content rectangle for provided html or svg element.
   *
   * @param {Element} target - Element content rectangle of which needs to be calculated.
   * @returns {DOMRectInit}
   */


  function getContentRect(target) {
    if (!isBrowser) {
      return emptyRect;
    }

    if (isSVGGraphicsElement(target)) {
      return getSVGContentRect(target);
    }

    return getHTMLElementContentRect(target);
  }
  /**
   * Creates rectangle with an interface of the DOMRectReadOnly.
   * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
   *
   * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
   * @returns {DOMRectReadOnly}
   */


  function createReadOnlyRect(_a) {
    var x = _a.x,
        y = _a.y,
        width = _a.width,
        height = _a.height; // If DOMRectReadOnly is available use it as a prototype for the rectangle.

    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype); // Rectangle's properties are not writable and non-enumerable.

    defineConfigurable(rect, {
      x: x,
      y: y,
      width: width,
      height: height,
      top: y,
      right: x + width,
      bottom: height + y,
      left: x
    });
    return rect;
  }
  /**
   * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
   * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
   *
   * @param {number} x - X coordinate.
   * @param {number} y - Y coordinate.
   * @param {number} width - Rectangle's width.
   * @param {number} height - Rectangle's height.
   * @returns {DOMRectInit}
   */


  function createRectInit(x, y, width, height) {
    return {
      x: x,
      y: y,
      width: width,
      height: height
    };
  }
  /**
   * Class that is responsible for computations of the content rectangle of
   * provided DOM element and for keeping track of it's changes.
   */


  var ResizeObservation =
  /** @class */
  function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
      /**
       * Broadcasted width of content rectangle.
       *
       * @type {number}
       */
      this.broadcastWidth = 0;
      /**
       * Broadcasted height of content rectangle.
       *
       * @type {number}
       */

      this.broadcastHeight = 0;
      /**
       * Reference to the last observed content rectangle.
       *
       * @private {DOMRectInit}
       */

      this.contentRect_ = createRectInit(0, 0, 0, 0);
      this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */


    ResizeObservation.prototype.isActive = function () {
      var rect = getContentRect(this.target);
      this.contentRect_ = rect;
      return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */


    ResizeObservation.prototype.broadcastRect = function () {
      var rect = this.contentRect_;
      this.broadcastWidth = rect.width;
      this.broadcastHeight = rect.height;
      return rect;
    };

    return ResizeObservation;
  }();

  var ResizeObserverEntry =
  /** @class */
  function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
      var contentRect = createReadOnlyRect(rectInit); // According to the specification following properties are not writable
      // and are also not enumerable in the native implementation.
      //
      // Property accessors are not being used as they'd require to define a
      // private WeakMap storage which may cause memory leaks in browsers that
      // don't support this type of collections.

      defineConfigurable(this, {
        target: target,
        contentRect: contentRect
      });
    }

    return ResizeObserverEntry;
  }();

  var ResizeObserverSPI =
  /** @class */
  function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
      /**
       * Collection of resize observations that have detected changes in dimensions
       * of elements.
       *
       * @private {Array<ResizeObservation>}
       */
      this.activeObservations_ = [];
      /**
       * Registry of the ResizeObservation instances.
       *
       * @private {Map<Element, ResizeObservation>}
       */

      this.observations_ = new MapShim();

      if (typeof callback !== 'function') {
        throw new TypeError('The callback provided as parameter 1 is not a function.');
      }

      this.callback_ = callback;
      this.controller_ = controller;
      this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */


    ResizeObserverSPI.prototype.observe = function (target) {
      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
      } // Do nothing if current environment doesn't have the Element interface.


      if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
      }

      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }

      var observations = this.observations_; // Do nothing if element is already being observed.

      if (observations.has(target)) {
        return;
      }

      observations.set(target, new ResizeObservation(target));
      this.controller_.addObserver(this); // Force the update of observations.

      this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */


    ResizeObserverSPI.prototype.unobserve = function (target) {
      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
      } // Do nothing if current environment doesn't have the Element interface.


      if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
      }

      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }

      var observations = this.observations_; // Do nothing if element is not being observed.

      if (!observations.has(target)) {
        return;
      }

      observations.delete(target);

      if (!observations.size) {
        this.controller_.removeObserver(this);
      }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */


    ResizeObserverSPI.prototype.disconnect = function () {
      this.clearActive();
      this.observations_.clear();
      this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */


    ResizeObserverSPI.prototype.gatherActive = function () {
      var _this = this;

      this.clearActive();
      this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
          _this.activeObservations_.push(observation);
        }
      });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */


    ResizeObserverSPI.prototype.broadcastActive = function () {
      // Do nothing if observer doesn't have active observations.
      if (!this.hasActive()) {
        return;
      }

      var ctx = this.callbackCtx_; // Create ResizeObserverEntry instance for every active observation.

      var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
      });
      this.callback_.call(ctx, entries, ctx);
      this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */


    ResizeObserverSPI.prototype.clearActive = function () {
      this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */


    ResizeObserverSPI.prototype.hasActive = function () {
      return this.activeObservations_.length > 0;
    };

    return ResizeObserverSPI;
  }(); // Registry of internal observers. If WeakMap is not available use current shim
  // for the Map collection as it has all required methods and because WeakMap
  // can't be fully polyfilled anyway.


  var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
  /**
   * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
   * exposing only those methods and properties that are defined in the spec.
   */

  var ResizeObserver =
  /** @class */
  function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
      if (!(this instanceof ResizeObserver)) {
        throw new TypeError('Cannot call a class as a function.');
      }

      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
      }

      var controller = ResizeObserverController.getInstance();
      var observer = new ResizeObserverSPI(callback, controller, this);
      observers.set(this, observer);
    }

    return ResizeObserver;
  }(); // Expose public methods of ResizeObserver.


  ['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
      var _a;

      return (_a = observers.get(this))[method].apply(_a, arguments);
    };
  });

  var index = function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
      return global$1.ResizeObserver;
    }

    return ResizeObserver;
  }();

  return index;
});
},{}],"at9SY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configResponsive = configResponsive;
exports.useResponsive = useResponsive;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var subscribers = new Set();
var info;
var responsiveConfig = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

function init() {
  if (info) return;
  info = {};
  calculate();
  window.addEventListener('resize', function () {
    var oldInfo = info;
    calculate();
    if (oldInfo === info) return;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = subscribers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var subscriber = _step.value;
        subscriber();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
}

function calculate() {
  var width = window.innerWidth;
  var newInfo = {};
  var shouldUpdate = false;

  for (var _i = 0, _Object$keys = Object.keys(responsiveConfig); _i < _Object$keys.length; _i++) {
    var _key = _Object$keys[_i];
    newInfo[_key] = width >= responsiveConfig[_key];

    if (newInfo[_key] !== info[_key]) {
      shouldUpdate = true;
    }
  }

  if (shouldUpdate) {
    info = newInfo;
  }
}

function configResponsive(config) {
  responsiveConfig = config;
  if (info) calculate();
}

function useResponsive() {
  init();

  var _useState = (0, _react.useState)(info),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  (0, _react.useEffect)(function () {
    var subscriber = function subscriber() {
      setState(info);
    };

    subscribers.add(subscriber);
    return function () {
      subscribers.delete(subscriber);
    };
  }, []);
  return state;
}
},{"react":"UCOaU"}],"6yt37":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _useStorageState = _interopRequireDefault(require("../useStorageState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useLocalStorageState(key, defaultValue) {
  return (0, _useStorageState.default)(localStorage, key, defaultValue);
}

var _default = useLocalStorageState;
exports.default = _default;
},{"../useStorageState":"1Ltl1"}],"1Ltl1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useUpdateEffect = _interopRequireDefault(require("../useUpdateEffect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function isFunction(obj) {
  return typeof obj === 'function';
}

function useStorageState(storage, key, defaultValue) {
  var _useState = (0, _react.useState)(function () {
    return getStoredValue();
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  function getStoredValue() {
    var raw = storage.getItem(key);

    if (raw) {
      return JSON.parse(raw);
    }

    if (isFunction(defaultValue)) {
      return defaultValue();
    }

    return defaultValue;
  }

  function updateState(value) {
    if (typeof value === 'undefined') {
      storage.removeItem(key);
      setState(undefined);
    } else if (isFunction(value)) {
      var _previousState = getStoredValue();

      var currentState = value(_previousState);
      storage.setItem(key, JSON.stringify(currentState));
      setState(currentState);
    } else {
      storage.setItem(key, JSON.stringify(value));
      setState(value);
    }
  }

  (0, _useUpdateEffect.default)(function () {
    setState(getStoredValue());
  }, [key]);
  return [state, updateState];
}

var _default = useStorageState;
exports.default = _default;
},{"react":"UCOaU","../useUpdateEffect":"1CNwa"}],"7MkVs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _useStorageState = _interopRequireDefault(require("../useStorageState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useSessionStorageState(key, defaultValue) {
  return (0, _useStorageState.default)(sessionStorage, key, defaultValue);
}

var _default = useSessionStorageState;
exports.default = _default;
},{"../useStorageState":"1Ltl1"}],"7aPZ2":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

/* eslint consistent-return: 0 */
var useUpdateLayoutEffect = function useUpdateLayoutEffect(effect, deps) {
  var isMounted = (0, _react.useRef)(false);
  (0, _react.useLayoutEffect)(function () {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};

var _default = useUpdateLayoutEffect;
exports.default = _default;
},{"react":"UCOaU"}],"5uU2u":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useAsync2 = _interopRequireDefault(require("../useAsync"));

var _useUpdateEffect = _interopRequireDefault(require("../useUpdateEffect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function usePagination(fn, deps, options) {
  var _deps = Array.isArray(deps) ? deps : [];

  var _options = _typeof(deps) === 'object' && !Array.isArray(deps) ? deps : options || {};

  var _options$defaultPageS = _options.defaultPageSize,
      defaultPageSize = _options$defaultPageS === void 0 ? 10 : _options$defaultPageS,
      formatResult = _options.formatResult;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      total = _useState4[0],
      setTotal = _useState4[1];

  var _useState5 = (0, _react.useState)(1),
      _useState6 = _slicedToArray(_useState5, 2),
      current = _useState6[0],
      setCurrent = _useState6[1];

  var _useState7 = (0, _react.useState)(defaultPageSize),
      _useState8 = _slicedToArray(_useState7, 2),
      pageSize = _useState8[0],
      setPageSize = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      count = _useState10[0],
      setCount = _useState10[1]; // let shamFn!: (params: FnParams) => Promise<FormattedResult<Item>>;
  // if (Array.isArray(fn)) {
  //   shamFn = (params) => {
  //     return new Promise((resolve) => {
  //       resolve({
  //         data: fn.slice((params.current - 1) * params.pageSize, params.current * params.pageSize),
  //         total: fn.length
  //       });
  //     });
  //   }
  // }


  var _useAsync = (0, _useAsync2.default)(fn, _deps, {
    manual: true
  }),
      run = _useAsync.run,
      loading = _useAsync.loading;

  (0, _react.useEffect)(function () {
    run({
      current: current,
      pageSize: pageSize
    }).then(function (res) {
      if (!res) {
        return;
      }

      var formattedResult = formatResult ? formatResult(res) : res;

      if (formattedResult) {
        if (typeof formattedResult.total === 'number') setTotal(formattedResult.total);
        if (formattedResult.data) setData(formattedResult.data);
        if (typeof formattedResult.current === 'number') setCurrent(formattedResult.current);
        if (typeof formattedResult.pageSize === 'number') setPageSize(formattedResult.pageSize);
      }
    });
  }, [current, pageSize, count]);
  (0, _useUpdateEffect.default)(function () {
    setCurrent(1);
    setCount(function (c) {
      return c + 1;
    });
  }, _deps);
  var totalPage = (0, _react.useMemo)(function () {
    return Math.ceil(total / pageSize);
  }, [pageSize, total]);
  var onChange = (0, _react.useCallback)(function (c, p) {
    var toCurrent = c <= 0 ? 1 : c;
    var toPageSize = p <= 0 ? 1 : p;
    var tempTotalPage = Math.ceil(total / toPageSize);

    if (toCurrent > tempTotalPage) {
      toCurrent = tempTotalPage;
    }

    setCurrent(toCurrent);
    setPageSize(toPageSize);
  }, [total]);
  var changeCurrent = (0, _react.useCallback)(function (c) {
    onChange(c, pageSize);
  }, [onChange, pageSize]);
  var changePageSize = (0, _react.useCallback)(function (p) {
    onChange(current, p);
  }, [onChange, current]);
  var refresh = (0, _react.useCallback)(function () {
    setCount(function (c) {
      return c + 1;
    });
  }, []);
  return {
    data: data,
    loading: loading,
    pagination: {
      current: current,
      pageSize: pageSize,
      total: total,
      totalPage: totalPage,
      onChange: onChange,
      changeCurrent: changeCurrent,
      changePageSize: changePageSize
    },
    refresh: refresh
  };
}

var _default = usePagination;
exports.default = _default;
},{"react":"UCOaU","../useAsync":"6IZK6","../useUpdateEffect":"1CNwa"}],"1vA5O":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useToggle2 = _interopRequireDefault(require("../useToggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useBoolean = function useBoolean() {
  var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _useToggle = (0, _useToggle2.default)(defaultValue),
      state = _useToggle.state,
      toggle = _useToggle.toggle;

  var setTrue = (0, _react.useCallback)(function () {
    return toggle(true);
  }, [toggle]);
  var setFalse = (0, _react.useCallback)(function () {
    return toggle(false);
  }, [toggle]);
  return {
    state: state,
    toggle: toggle,
    setTrue: setTrue,
    setFalse: setFalse
  };
};

var _default = useBoolean;
exports.default = _default;
},{"react":"UCOaU","../useToggle":"3Kcpd"}],"3Kcpd":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useToggle() {
  var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var reverseValue = arguments.length > 1 ? arguments[1] : undefined;

  var _useState = (0, _react.useState)(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var reverseValueOrigin = (0, _react.useMemo)(function () {
    return reverseValue === undefined ? !defaultValue : reverseValue;
  }, [reverseValue]); // 切换返回值

  var toggle = (0, _react.useCallback)(function (value) {
    setState(function (oldState) {
      // 强制返回状态值，适用于点击操作
      if (value !== undefined) {
        return value;
      }

      return oldState === defaultValue ? reverseValueOrigin : defaultValue;
    });
  }, []); // 设置默认值

  var setLeft = (0, _react.useCallback)(function () {
    setState(defaultValue);
  }, [setState]); // 设置取反值

  var setRight = (0, _react.useCallback)(function () {
    setState(reverseValueOrigin);
  }, [setState]);
  return {
    state: state,
    toggle: toggle,
    setLeft: setLeft,
    setRight: setRight
  };
}

var _default = useToggle;
exports.default = _default;
},{"react":"UCOaU"}],"4zIgh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getVisibility = function getVisibility() {
  // 如果是服务端渲染，直接返回true
  if (typeof document === 'undefined') return true;
  return document.visibilityState;
};

function useDocumentVisibility() {
  var _useState = (0, _react.useState)(getVisibility()),
      _useState2 = _slicedToArray(_useState, 2),
      documentVisibility = _useState2[0],
      setDocumentVisibility = _useState2[1];

  (0, _react.useEffect)(function () {
    var handleVisibilityChange = function handleVisibilityChange() {
      setDocumentVisibility(getVisibility());
    };

    window.addEventListener('visibilitychange', handleVisibilityChange);
    return function () {
      window.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  return documentVisibility;
}

var _default = useDocumentVisibility;
exports.default = _default;
},{"react":"UCOaU"}],"2txMk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useSelections;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useSelections(items) {
  var defaultSelected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _useState = (0, _react.useState)(defaultSelected),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var _useMemo = (0, _react.useMemo)(function () {
    var selectedSet = new Set(selected);

    var isSelected = function isSelected(item) {
      return selectedSet.has(item);
    };

    var select = function select(item) {
      selectedSet.add(item);
      return setSelected(Array.from(selectedSet));
    };

    var unSelect = function unSelect(item) {
      selectedSet.delete(item);
      return setSelected(Array.from(selectedSet));
    };

    var toggle = function toggle(item) {
      if (isSelected(item)) {
        unSelect(item);
      } else {
        select(item);
      }
    };

    return {
      selectedSet: selectedSet,
      isSelected: isSelected,
      select: select,
      unSelect: unSelect,
      toggle: toggle
    };
  }, [selected]),
      selectedSet = _useMemo.selectedSet,
      isSelected = _useMemo.isSelected,
      select = _useMemo.select,
      unSelect = _useMemo.unSelect,
      toggle = _useMemo.toggle;

  var _useMemo2 = (0, _react.useMemo)(function () {
    var selectAll = function selectAll() {
      items.forEach(function (o) {
        selectedSet.add(o);
      });
      setSelected(Array.from(selectedSet));
    };

    var unSelectAll = function unSelectAll() {
      items.forEach(function (o) {
        selectedSet.delete(o);
      });
      setSelected(Array.from(selectedSet));
    };

    var noneSelected = items.every(function (o) {
      return !selectedSet.has(o);
    });
    var allSelected = items.every(function (o) {
      return selectedSet.has(o);
    }) && !noneSelected;
    var partiallySelected = !noneSelected && !allSelected;

    var toggleAll = function toggleAll() {
      return allSelected ? unSelectAll() : selectAll();
    };

    return {
      selectAll: selectAll,
      unSelectAll: unSelectAll,
      noneSelected: noneSelected,
      allSelected: allSelected,
      partiallySelected: partiallySelected,
      toggleAll: toggleAll
    };
  }, [selectedSet, items]),
      selectAll = _useMemo2.selectAll,
      unSelectAll = _useMemo2.unSelectAll,
      noneSelected = _useMemo2.noneSelected,
      allSelected = _useMemo2.allSelected,
      partiallySelected = _useMemo2.partiallySelected,
      toggleAll = _useMemo2.toggleAll;

  return {
    selected: selected,
    isSelected: isSelected,
    select: select,
    unSelect: unSelect,
    toggle: toggle,
    selectAll: selectAll,
    unSelectAll: unSelectAll,
    toggleAll: toggleAll,
    allSelected: allSelected,
    noneSelected: noneSelected,
    partiallySelected: partiallySelected,
    setSelected: setSelected
  };
}
},{"react":"UCOaU"}],"20g8A":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useThrottleFn = _interopRequireDefault(require("../useThrottleFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useThrottle(value, wait) {
  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  (0, _useThrottleFn.default)(function () {
    setState(value);
  }, [value], wait);
  return state;
}

var _default = useThrottle;
exports.default = _default;
},{"react":"UCOaU","../useThrottleFn":"7Ehgb"}],"7Ehgb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useUpdateEffect = _interopRequireDefault(require("../useUpdateEffect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function useThrottleFn(fn, deps, wait) {
  var _deps = Array.isArray(deps) ? deps : [];

  var _wait = typeof deps === 'number' ? deps : wait || 0;

  var timer = (0, _react.useRef)();
  var fnRef = (0, _react.useRef)(fn);
  fnRef.current = fn;
  var currentArgs = (0, _react.useRef)([]);
  var cancel = (0, _react.useCallback)(function () {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = undefined;
  }, []);
  var run = (0, _react.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    currentArgs.current = args;

    if (!timer.current) {
      timer.current = setTimeout(function () {
        fnRef.current.apply(fnRef, _toConsumableArray(currentArgs.current));
        timer.current = undefined;
      }, _wait);
    }
  }, [_wait, cancel]);
  (0, _useUpdateEffect.default)(function () {
    run();
  }, [].concat(_toConsumableArray(_deps), [run]));
  (0, _react.useEffect)(function () {
    return cancel;
  }, []);
  return {
    run: run,
    cancel: cancel
  };
}

var _default = useThrottleFn;
exports.default = _default;
},{"react":"UCOaU","../useUpdateEffect":"1CNwa"}],"2i4ag":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useDebounceFn = _interopRequireDefault(require("../useDebounceFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useDebounce(value, wait) {
  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  (0, _useDebounceFn.default)(function () {
    setState(value);
  }, [value], wait);
  return state;
}

var _default = useDebounce;
exports.default = _default;
},{"react":"UCOaU","../useDebounceFn":"1y9sR"}],"YkMTF":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _default = function _default(state, compare) {
  var prevRef = (0, _react.useRef)();
  var curRef = (0, _react.useRef)();
  var needUpdate = typeof compare === 'function' ? compare(curRef.current, state) : true;

  if (needUpdate) {
    prevRef.current = curRef.current;
    curRef.current = state;
  }

  return prevRef.current;
};

exports.default = _default;
},{"react":"UCOaU"}],"3tSRM":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var initState = {
  screenX: NaN,
  screenY: NaN,
  clientX: NaN,
  clientY: NaN,
  pageX: NaN,
  pageY: NaN
};

var _default = function _default() {
  var _useState = (0, _react.useState)(initState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  (0, _react.useEffect)(function () {
    var moveHandler = function moveHandler(event) {
      var screenX = event.screenX,
          screenY = event.screenY,
          clientX = event.clientX,
          clientY = event.clientY,
          pageX = event.pageX,
          pageY = event.pageY;
      setState({
        screenX: screenX,
        screenY: screenY,
        clientX: clientX,
        clientY: clientY,
        pageX: pageX,
        pageY: pageY
      });
    };

    document.addEventListener('mousemove', moveHandler);
    return function () {
      document.removeEventListener('mousemove', moveHandler);
    };
  }, []);
  return state;
};

exports.default = _default;
},{"react":"UCOaU"}],"6XuGn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useScroll() {
  var _useState = (0, _react.useState)({
    left: NaN,
    top: NaN
  }),
      _useState2 = _slicedToArray(_useState, 2),
      position = _useState2[0],
      setPosition = _useState2[1];

  var ref = (0, _react.useRef)();
  var hasPassedInElement = arguments.length === 1;
  var arg = arguments.length <= 0 ? undefined : arguments[0];
  (0, _react.useEffect)(function () {
    var passedInElement = typeof arg === 'function' ? arg() : arg;
    var element = hasPassedInElement ? passedInElement : ref.current;
    if (!element) return;

    function updatePosition(target) {
      var newPosition;

      if (target === document) {
        if (!document.scrollingElement) return;
        newPosition = {
          left: document.scrollingElement.scrollLeft,
          top: document.scrollingElement.scrollTop
        };
      } else {
        newPosition = {
          left: target.scrollLeft,
          top: target.scrollTop
        };
      }

      setPosition(newPosition);
    }

    updatePosition(element);

    function listener(event) {
      if (!event.target) return;
      updatePosition(event.target);
    }

    element.addEventListener('scroll', listener);
    return function () {
      element.removeEventListener('scroll', listener);
    };
  }, [ref.current, typeof arg === 'function' ? undefined : arg]);
  return [position, ref];
}

var _default = useScroll;
exports.default = _default;
},{"react":"UCOaU"}],"7khF8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useClickAway;

var _react = require("react");

// 鼠标点击事件，click 不会监听右键
var defaultEvent = 'click';

function useClickAway(onClickAway, dom) {
  var eventName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEvent;
  var element = (0, _react.useRef)();
  var handler = (0, _react.useCallback)(function (event) {
    var targetElement = typeof dom === 'function' ? dom() : dom;
    var el = targetElement || element.current;

    if (!el || el.contains(event.target)) {
      return;
    }

    onClickAway(event);
  }, [element.current, onClickAway, dom]);
  (0, _react.useEffect)(function () {
    document.addEventListener(eventName, handler);
    return function () {
      document.removeEventListener(eventName, handler);
    };
  }, [eventName, handler]);
  return element;
}
},{"react":"UCOaU"}],"2qzg1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _screenfull = _interopRequireDefault(require("screenfull"));

var _useBoolean2 = _interopRequireDefault(require("../useBoolean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-empty: 0 */
var _default = function _default(options) {
  var _ref = options || {},
      dom = _ref.dom,
      onExitFull = _ref.onExitFull,
      onFull = _ref.onFull;

  var onExitFullRef = (0, _react.useRef)(onExitFull);
  onExitFullRef.current = onExitFull;
  var onFullRef = (0, _react.useRef)(onFull);
  onFullRef.current = onFull;
  var element = (0, _react.useRef)();

  var _useBoolean = (0, _useBoolean2.default)(false),
      state = _useBoolean.state,
      toggle = _useBoolean.toggle,
      setTrue = _useBoolean.setTrue,
      setFalse = _useBoolean.setFalse;

  (0, _react.useLayoutEffect)(function () {
    /* 非全屏时，不需要监听任何全屏事件 */
    if (!state) {
      return;
    }

    var passedInElement = typeof dom === 'function' ? dom() : dom;
    var targetElement = passedInElement || element.current;

    if (!targetElement) {
      return;
    }
    /* 监听退出 */


    var onChange = function onChange() {
      if (_screenfull.default.isEnabled) {
        var isFullscreen = _screenfull.default.isFullscreen;
        toggle(isFullscreen);
      }
    };

    if (_screenfull.default.isEnabled) {
      try {
        _screenfull.default.request(targetElement);

        setTrue();

        if (onFullRef.current) {
          onFullRef.current();
        }
      } catch (error) {
        setFalse();

        if (onExitFullRef.current) {
          onExitFullRef.current();
        }
      }

      _screenfull.default.on('change', onChange);
    }
    /* state 从 true 变为 false，则关闭全屏 */


    return function () {
      if (_screenfull.default.isEnabled) {
        try {
          _screenfull.default.off('change', onChange);

          _screenfull.default.exit();
        } catch (error) {}
      }

      if (onExitFullRef.current) {
        onExitFullRef.current();
      }
    };
  }, [state, typeof dom === 'function' ? undefined : dom]);

  var toggleFull = function toggleFull() {
    return toggle();
  };

  var result = {
    isFullscreen: !!state,
    setFull: setTrue,
    exitFull: setFalse,
    toggleFull: toggleFull
  };

  if (!dom) {
    result.ref = element;
  }

  return result;
};

exports.default = _default;
},{"react":"UCOaU","screenfull":"7GADp","../useBoolean":"1vA5O"}],"7GADp":[function(require,module,exports) {
/*!
* screenfull
* v5.0.2 - 2020-02-13
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs = typeof module !== 'undefined' && module.exports;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (element) {
			return new Promise(function (resolve, reject) {
				var onFullScreenEntered = function () {
					this.off('change', onFullScreenEntered);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenEntered);

				element = element || document.documentElement;

				var returnPromise = element[fn.requestFullscreen]();

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenEntered).catch(reject);
				}
			}.bind(this));
		},
		exit: function () {
			return new Promise(function (resolve, reject) {
				if (!this.isFullscreen) {
					resolve();
					return;
				}

				var onFullScreenExit = function () {
					this.off('change', onFullScreenExit);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenExit);

				var returnPromise = document[fn.exitFullscreen]();

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenExit).catch(reject);
				}
			}.bind(this));
		},
		toggle: function (element) {
			return this.isFullscreen ? this.exit() : this.request(element);
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = {isEnabled: false};
		} else {
			window.screenfull = {isEnabled: false};
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		isEnabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();

},{}],"3HukE":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

require("intersection-observer");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function isInViewPort(el) {
  if (!el) {
    return false;
  }

  var viewPortWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  var rect = el.getBoundingClientRect();

  if (rect) {
    var top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right;
    return bottom > 0 && top <= viewPortHeight && left <= viewPortWidth && right > 0;
  }

  return false;
}

function useInViewport() {
  var element = (0, _react.useRef)();

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var hasPassedInElement = args.length === 1;
  var arg = (0, _react.useRef)(args[0]);
  arg.current = args[0];

  var _useState = (0, _react.useState)(function () {
    var initDOM = typeof arg.current === 'function' ? arg.current() : arg.current;
    return isInViewPort(initDOM);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      inViewPort = _useState2[0],
      setInViewport = _useState2[1];

  (0, _react.useLayoutEffect)(function () {
    var passedInElement = typeof arg.current === 'function' ? arg.current() : arg.current;
    var targetElement = hasPassedInElement ? passedInElement : element.current;

    if (!targetElement) {
      return function () {};
    }

    var observer = new IntersectionObserver(function (entries) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var entry = _step.value;

          if (entry.isIntersecting) {
            setInViewport(true);
          } else {
            setInViewport(false);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
    observer.observe(targetElement);
    return function () {
      observer.disconnect();
    };
  }, [element.current, typeof arg.current === 'function' ? undefined : arg.current]);

  if (hasPassedInElement) {
    return [inViewPort];
  }

  return [inViewPort, element];
}

var _default = useInViewport;
exports.default = _default;
},{"react":"UCOaU","intersection-observer":"1dKME"}],"1dKME":[function(require,module,exports) {
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function() {
'use strict';

// Exit early if we're not running in a browser.
if (typeof window !== 'object') {
  return;
}

// Exit early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}


/**
 * A local reference to the document.
 */
var document = window.document;


/**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observing a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */
var registry = [];


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = entry.rootBounds;
  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRect = entry.intersectionRect || getEmptyRect();
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    // Round the intersection ratio to avoid floating point math issues:
    // https://github.com/w3c/IntersectionObserver/issues/324
    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (options.root && options.root.nodeType != 1) {
    throw new Error('root must be an Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections();
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {

    return item.element != target;
  });
  if (!this._observationTargets.length) {
    this._unmonitorIntersections();
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function() {
  if (!this._monitoringIntersections) {
    this._monitoringIntersections = true;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      this._monitoringInterval = setInterval(
          this._checkForIntersections, this.POLL_INTERVAL);
    }
    else {
      addEvent(window, 'resize', this._checkForIntersections, true);
      addEvent(document, 'scroll', this._checkForIntersections, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
        this._domObserver = new MutationObserver(this._checkForIntersections);
        this._domObserver.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function() {
  if (this._monitoringIntersections) {
    this._monitoringIntersections = false;

    clearInterval(this._monitoringInterval);
    this._monitoringInterval = null;

    removeEvent(window, 'resize', this._checkForIntersections, true);
    removeEvent(document, 'scroll', this._checkForIntersections, true);

    if (this._domObserver) {
      this._domObserver.disconnect();
      this._domObserver = null;
    }
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, rootRect);

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootRect,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, rootRect) {

  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var targetRect = getBoundingClientRect(target);
  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return;

    if (parent == this.root || parent == document) {
      atRoot = true;
      parentRect = rootRect;
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      if (parent != document.body &&
          parent != document.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

      if (!intersectionRect) break;
    }
    parent = getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var html = document.documentElement;
    var body = document.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  return containsDeep(this.root || document, target);
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
  if (registry.indexOf(this) < 0) {
    registry.push(this);
  }
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
  var index = registry.indexOf(this);
  if (index != -1) registry.splice(index, 1);
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  };
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }

  if (parent && parent.assignedSlot) {
    // If the parent is distributed in a <slot>, return the parent of a slot.
    return parent.assignedSlot.parentNode;
  }

  return parent;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}());

},{}],"Ir12v":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

// 键盘事件 keyCode 别名
var aliasKeyCodeMap = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  delete: [8, 46]
}; // 键盘事件 key 别名

var aliasKeyMap = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  delete: ['Backspace', 'Delete']
}; // 修饰键

var modifierKey = {
  ctrl: function ctrl(event) {
    return event.ctrlKey;
  },
  shift: function shift(event) {
    return event.shiftKey;
  },
  alt: function alt(event) {
    return event.altKey;
  },
  meta: function meta(event) {
    return event.metaKey;
  }
}; // 返回空对象

var noop = function noop() {};
/**
 * 判断对象类型
 * @param [obj: any] 参数对象
 * @returns String
 */


function isType(obj) {
  return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
}
/**
 * 判断按键是否激活
 * @param [event: KeyboardEvent]键盘事件
 * @param [keyFilter: any] 当前键
 * @returns Boolean
 */


function genFilterKey(event, keyFilter) {
  if (!event.key || !event.keyCode) {
    return false;
  }

  var type = isType(keyFilter); // 数字类型直接匹配事件的 keyCode

  if (type === 'number') {
    return event.keyCode === keyFilter;
  } // 字符串依次判断是否有组合键


  var genArr = keyFilter.split('.');
  var genLen = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = genArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;
      // 组合键
      var genModifier = modifierKey[key]; // key 别名

      var aliasKey = aliasKeyMap[key]; // keyCode 别名

      var aliasKeyCode = aliasKeyCodeMap[key];
      /**
       * 满足以上规则
       * 1. 自定义组合键别名
       * 2. 自定义 key 别名
       * 3. 自定义 keyCode 别名
       * 4. 匹配 key 或 keyCode
       */

      if (genModifier && genModifier(event) || (aliasKey && isType(aliasKey) === 'array' ? aliasKey.includes(event.key) : aliasKey === event.key) || (aliasKeyCode && isType(aliasKeyCode) === 'array' ? aliasKeyCode.includes(event.keyCode) : aliasKeyCode === event.keyCode) || event.key.toUpperCase() === key.toUpperCase()) {
        genLen++;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return genLen === genArr.length;
}
/**
 * 键盘输入预处理方法
 * @param [keyFilter: any] 当前键
 * @returns () => Boolean
 */


function genKeyFormater(keyFilter) {
  var type = isType(keyFilter);

  if (type === 'function') {
    return keyFilter;
  }

  if (type === 'string' || type === 'number') {
    return function (event) {
      return genFilterKey(event, keyFilter);
    };
  }

  if (type === 'array') {
    return function (event) {
      return keyFilter.some(function (item) {
        return genFilterKey(event, item);
      });
    };
  }

  return keyFilter ? function () {
    return true;
  } : function () {
    return false;
  };
}

var defaultEvents = ['keydown'];

function useKeyPress(keyFilter) {
  var eventHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _option$events = option.events,
      events = _option$events === void 0 ? defaultEvents : _option$events,
      target = option.target;
  var element = (0, _react.useRef)();
  var callbackRef = (0, _react.useRef)(eventHandler);
  callbackRef.current = eventHandler;
  var callbackHandler = (0, _react.useCallback)(function (event) {
    var genGuard = genKeyFormater(keyFilter);

    if (genGuard(event)) {
      return callbackRef.current(event);
    }
  }, [keyFilter]);
  (0, _react.useEffect)(function () {
    var targetElement = typeof target === 'function' ? target() : target;
    var el = element.current || targetElement || window;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = events[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var eventName = _step2.value;
        el.addEventListener(eventName, callbackHandler);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return function () {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = events[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var eventName = _step3.value;
          el.removeEventListener(eventName, callbackHandler);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    };
  }, [events, callbackHandler, target]);
  return element;
}

var _default = useKeyPress;
exports.default = _default;
},{"react":"UCOaU"}],"4YHLS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function useEventListener(eventName, handler, options) {
  var ref = (0, _react.useRef)();
  var savedHandler = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    savedHandler.current = handler;
  }, [handler]);
  (0, _react.useEffect)(function () {
    var passedInElement = options && (typeof options.dom === 'function' ? options.dom() : options.dom);
    var element = passedInElement ? passedInElement : ref.current || window;
    var isSupported = element.addEventListener;
    if (!isSupported) return;

    var eventListener = function eventListener(event) {
      return savedHandler.current && savedHandler.current(event);
    };

    element.addEventListener(eventName, eventListener, {
      capture: options === null || options === void 0 ? void 0 : options.capture,
      once: options === null || options === void 0 ? void 0 : options.once,
      passive: options === null || options === void 0 ? void 0 : options.passive
    });
    return function () {
      element.removeEventListener(eventName, eventListener, {
        capture: options === null || options === void 0 ? void 0 : options.capture
      });
    };
  }, [eventName, options, ref.current]);
  return ref;
}

var _default = useEventListener;
exports.default = _default;
},{"react":"UCOaU"}],"01FPv":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useBoolean2 = _interopRequireDefault(require("../useBoolean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(options) {
  var _ref = options || {},
      dom = _ref.dom,
      onEnter = _ref.onEnter,
      onLeave = _ref.onLeave;

  var element = (0, _react.useRef)(null);
  var onEnterRef = (0, _react.useRef)(onEnter);
  onEnterRef.current = onEnter;
  var onLeaveRef = (0, _react.useRef)(onLeave);
  onLeaveRef.current = onLeave;

  var _useBoolean = (0, _useBoolean2.default)(false),
      state = _useBoolean.state,
      setTrue = _useBoolean.setTrue,
      setFalse = _useBoolean.setFalse;

  (0, _react.useEffect)(function () {
    var onMouseEnter = function onMouseEnter() {
      if (onEnterRef.current) onEnterRef.current();
      setTrue();
    };

    var onMouseLeave = function onMouseLeave() {
      if (onLeaveRef.current) onLeaveRef.current();
      setFalse();
    };

    var passedInElement = typeof dom === 'function' ? dom() : dom; // 如果 传入dom

    if (passedInElement) {
      passedInElement.addEventListener('mouseenter', onMouseEnter);
      passedInElement.addEventListener('mouseleave', onMouseLeave);
      return function () {
        passedInElement.removeEventListener('mouseenter', onMouseEnter);
        passedInElement.removeEventListener('mouseleave', onMouseLeave);
      };
    }

    var node = element.current;

    if (node) {
      node.addEventListener('mouseenter', onMouseEnter);
      node.addEventListener('mouseleave', onMouseLeave);
      return function () {
        node.removeEventListener('mouseenter', onMouseEnter);
        node.removeEventListener('mouseleave', onMouseLeave);
      };
    }
  }, [element.current, typeof dom === 'function' ? undefined : dom]);

  if (dom) {
    return [!!state];
  }

  return [!!state, element];
};

exports.default = _default;
},{"react":"UCOaU","../useBoolean":"1vA5O"}],"7FgIn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var useUnmount = function useUnmount(fn) {
  var fnRef = (0, _react.useRef)(fn);
  fnRef.current = fn;
  (0, _react.useEffect)(function () {
    return function () {
      if (fnRef.current && typeof fnRef.current === 'function') {
        fnRef.current();
      }
    };
  }, []);
};

var _default = useUnmount;
exports.default = _default;
},{"react":"UCOaU"}],"66xDT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CombineService", {
  enumerable: true,
  get: function get() {
    return _types.CombineService;
  }
});
Object.defineProperty(exports, "PaginatedParams", {
  enumerable: true,
  get: function get() {
    return _types.PaginatedParams;
  }
});
Object.defineProperty(exports, "BasePaginatedOptions", {
  enumerable: true,
  get: function get() {
    return _types.BasePaginatedOptions;
  }
});
Object.defineProperty(exports, "PaginatedOptionsWithFormat", {
  enumerable: true,
  get: function get() {
    return _types.PaginatedOptionsWithFormat;
  }
});
Object.defineProperty(exports, "PaginatedFormatReturn", {
  enumerable: true,
  get: function get() {
    return _types.PaginatedFormatReturn;
  }
});
Object.defineProperty(exports, "PaginatedResult", {
  enumerable: true,
  get: function get() {
    return _types.PaginatedResult;
  }
});
exports.default = void 0;

var _useRequest = _interopRequireDefault(require("@umijs/use-request"));

var _react = require("react");

var _types = require("@umijs/use-request/lib/types");

var _useUpdateEffect = _interopRequireDefault(require("../useUpdateEffect"));

var _usePersistFn = _interopRequireDefault(require("../usePersistFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function useFormTable(service, options) {
  var form = options.form,
      _options$refreshDeps = options.refreshDeps,
      refreshDeps = _options$refreshDeps === void 0 ? [] : _options$refreshDeps,
      manual = options.manual,
      _options$defaultType = options.defaultType,
      defaultType = _options$defaultType === void 0 ? 'simple' : _options$defaultType,
      defaultParams = options.defaultParams,
      restOptions = _objectWithoutProperties(options, ["form", "refreshDeps", "manual", "defaultType", "defaultParams"]);

  var result = (0, _useRequest.default)(service, _objectSpread({}, restOptions, {
    paginated: true,
    manual: true
  }));
  var params = result.params,
      run = result.run;
  var cacheFormTableData = params[2] || {}; // 优先从缓存中读

  var _useState = (0, _react.useState)(cacheFormTableData.type || defaultType),
      _useState2 = _slicedToArray(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1]; // 全量 form 数据，包括 simple 和 advance


  var _useState3 = (0, _react.useState)(cacheFormTableData.allFormData || defaultParams && defaultParams[1] || {}),
      _useState4 = _slicedToArray(_useState3, 2),
      allFormData = _useState4[0],
      setAllFormData = _useState4[1]; // 获取当前展示的 form 字段值


  var getActivetFieldValues = (0, _react.useCallback)(function () {
    if (!form) {
      return {};
    } // antd 3


    if (form.getFieldInstance) {
      var tempAllFiledsValue = form.getFieldsValue();
      var filterFiledsValue = {};
      Object.keys(tempAllFiledsValue).forEach(function (key) {
        if (form.getFieldInstance ? form.getFieldInstance(key) : true) {
          filterFiledsValue[key] = tempAllFiledsValue[key];
        }
      });
      return filterFiledsValue;
    } // antd 4


    return form.getFieldsValue(null, function () {
      return true;
    });
  }, [form]);
  var formRef = (0, _react.useRef)(form);
  formRef.current = form;
  /* 初始化，或改变了 searchType, 恢复表单数据 */

  (0, _react.useEffect)(function () {
    if (!formRef.current) {
      return;
    } // antd 3


    if (formRef.current.getFieldInstance) {
      // antd 3 需要判断字段是否存在，否则会抛警告
      var filterFiledsValue = {};
      Object.keys(allFormData).forEach(function (key) {
        if (formRef.current.getFieldInstance ? formRef.current.getFieldInstance(key) : true) {
          filterFiledsValue[key] = allFormData[key];
        }
      });
      formRef.current.setFieldsValue(filterFiledsValue);
    } else {
      // antd 4
      formRef.current.setFieldsValue(allFormData);
    }
  }, [type]); // 首次加载，手动提交。为了拿到 form 的 initial values

  (0, _react.useEffect)(function () {
    // 如果有缓存，则使用缓存，重新请求
    if (params.length > 0) {
      run.apply(void 0, _toConsumableArray(params));
      return;
    } // 如果没有缓存，触发 submit


    if (!manual) {
      _submit(defaultParams);
    }
  }, []);
  var changeType = (0, _react.useCallback)(function () {
    var currentFormData = getActivetFieldValues();
    setAllFormData(_objectSpread({}, allFormData, {}, currentFormData));
    var targetType = type === 'simple' ? 'advance' : 'simple';
    setType(targetType);
  }, [type, allFormData, getActivetFieldValues]);

  var _submit = (0, _react.useCallback)(function (initParams) {
    setTimeout(function () {
      var activeFormData = getActivetFieldValues(); // 记录全量数据

      var _allFormData = _objectSpread({}, allFormData, {}, activeFormData);

      setAllFormData(_allFormData); // has defaultParams

      if (initParams) {
        run(initParams[0], activeFormData, {
          allFormData: _allFormData,
          type: type
        });
        return;
      }

      run(_objectSpread({
        pageSize: options.defaultPageSize || 10
      }, params[0] || {}, {
        // 防止 manual 情况下，第一次触发 submit，此时没有 params[0]
        current: 1
      }), activeFormData, {
        allFormData: _allFormData,
        type: type
      });
    });
  }, [getActivetFieldValues, run, params, allFormData, type]);

  var reset = (0, _react.useCallback)(function () {
    if (form) {
      form.resetFields();
    }

    _submit();
  }, [form, _submit]);
  var resetPersistFn = (0, _usePersistFn.default)(reset); // refreshDeps 变化，reset。

  (0, _useUpdateEffect.default)(function () {
    if (!manual) {
      resetPersistFn();
    }
  }, _toConsumableArray(refreshDeps));
  return _objectSpread({}, result, {
    search: {
      submit: function submit() {
        _submit();
      },
      type: type,
      changeType: changeType,
      reset: reset
    }
  });
}

var _default = useFormTable;
exports.default = _default;
},{"@umijs/use-request":"5EyDt","react":"UCOaU","@umijs/use-request/lib/types":"23q3J","../useUpdateEffect":"1CNwa","../usePersistFn":"3zxuT"}],"23q3J":[function(require,module,exports) {
"use strict";
},{}],"3zxuT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function usePersistFn(fn) {
  var ref = (0, _react.useRef)(function () {
    throw new Error('Cannot call function while rendering.');
  });
  ref.current = fn;
  var persistFn = (0, _react.useCallback)(function () {
    return ref.current.apply(ref, arguments);
  }, [ref]);
  return persistFn;
}

var _default = usePersistFn;
exports.default = _default;
},{"react":"UCOaU"}],"6zk73":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useSet(initialValue) {
  var initialSet = (0, _react.useMemo)(function () {
    return initialValue === undefined ? new Set() : new Set(initialValue);
  }, [initialValue]);

  var _useState = (0, _react.useState)(initialSet),
      _useState2 = _slicedToArray(_useState, 2),
      set = _useState2[0],
      setSet = _useState2[1];

  var stableActions = (0, _react.useMemo)(function () {
    return {
      add: function add(key) {
        return setSet(function (prevSet) {
          return new Set([].concat(_toConsumableArray(Array.from(prevSet)), [key]));
        });
      },
      remove: function remove(key) {
        return setSet(function (prevSet) {
          return new Set(Array.from(prevSet).filter(function (i) {
            return i !== key;
          }));
        });
      },
      reset: function reset() {
        return setSet(initialSet);
      }
    };
  }, [setSet]);

  var utils = _objectSpread({
    has: (0, _react.useCallback)(function (key) {
      return set.has(key);
    }, [set])
  }, stableActions);

  return [set, utils];
}

;
var _default = useSet;
exports.default = _default;
},{"react":"UCOaU"}],"4ITNQ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useMap(initialValue) {
  var initialMap = (0, _react.useMemo)(function () {
    return initialValue === undefined ? new Map() : new Map(initialValue);
  }, [initialValue]);

  var _useState = (0, _react.useState)(initialMap),
      _useState2 = _slicedToArray(_useState, 2),
      map = _useState2[0],
      _set = _useState2[1];

  var stableActions = (0, _react.useMemo)(function () {
    return {
      set: function set(key, entry) {
        map.set(key, entry);

        _set(new Map(_toConsumableArray(map)));
      },
      setAll: function setAll(newMap) {
        _set(new Map(newMap));
      },
      remove: function remove(key) {
        map.delete(key);

        _set(new Map(_toConsumableArray(map)));
      },
      reset: function reset() {
        return _set(initialMap);
      }
    };
  }, [map, _set]);

  var utils = _objectSpread({
    get: (0, _react.useCallback)(function (key) {
      return map.get(key);
    }, [map])
  }, stableActions);

  return [map, utils];
}

;
var _default = useMap;
exports.default = _default;
},{"react":"UCOaU"}],"6BVOH":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useCreation;

var _react = require("react");

function useCreation(factory, deps) {
  var _useRef = (0, _react.useRef)({
    deps: deps,
    obj: undefined,
    initialized: false
  }),
      current = _useRef.current;

  if (current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps;
    current.obj = factory();
    current.initialized = true;
  }

  return current.obj;
}

function depsAreSame(oldDeps, deps) {
  if (oldDeps === deps) return true;

  for (var i in oldDeps) {
    if (oldDeps[i] !== deps[i]) return false;
  }

  return true;
}
},{"react":"UCOaU"}],"6HHFL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useDrag", {
  enumerable: true,
  get: function get() {
    return _useDrag.default;
  }
});
Object.defineProperty(exports, "useDrop", {
  enumerable: true,
  get: function get() {
    return _useDrop.default;
  }
});

var _useDrag = _interopRequireDefault(require("./useDrag"));

var _useDrop = _interopRequireDefault(require("./useDrop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./useDrag":"5ZjxE","./useDrop":"Rg5fz"}],"5ZjxE":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var useDrag = function useDrag() {
  var getProps = function getProps(data) {
    return {
      key: JSON.stringify(data),
      draggable: 'true',
      onDragStart: function onDragStart(e) {
        e.dataTransfer.setData('custom', JSON.stringify(data));
      }
    };
  };

  return getProps;
};

var _default = useDrag;
exports.default = _default;
},{}],"Rg5fz":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

;

var getProps = function getProps(callback, setIsHovering) {
  return {
    onDragOver: function onDragOver(event) {
      event.preventDefault();
    },
    onDragEnter: function onDragEnter(event) {
      event.preventDefault();
      setIsHovering(true);
    },
    onDragLeave: function onDragLeave() {
      setIsHovering(false);
    },
    onDrop: function onDrop(event) {
      event.preventDefault();
      event.persist();
      setIsHovering(false);
      callback(event.dataTransfer, event);
    },
    onPaste: function onPaste(event) {
      event.persist();
      callback(event.clipboardData, event);
    }
  };
};

var useDrop = function useDrop() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var optionsRef = (0, _react.useRef)(options);
  optionsRef.current = options;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHovering = _useState2[0],
      setIsHovering = _useState2[1];

  var callback = (0, _react.useCallback)(function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    var dom = dataTransfer.getData('custom');

    if (dom && optionsRef.current.onDom) {
      optionsRef.current.onDom(JSON.parse(dom), event);
      return;
    }

    if (uri && optionsRef.current.onUri) {
      optionsRef.current.onUri(uri, event);
      return;
    }

    if (dataTransfer.files && dataTransfer.files.length && optionsRef.current.onFiles) {
      optionsRef.current.onFiles(_toConsumableArray(dataTransfer.files), event);
      return;
    }

    if (dataTransfer.items && dataTransfer.items.length && optionsRef.current.onText) {
      dataTransfer.items[0].getAsString(function (text) {
        optionsRef.current.onText(text, event);
      });
    }
  }, []);
  var props = (0, _react.useMemo)(function () {
    return getProps(callback, setIsHovering);
  }, [callback, setIsHovering]);
  return [props, {
    isHovering: isHovering
  }];
};

var _default = useDrop;
exports.default = _default;
},{"react":"UCOaU"}],"5ZcQH":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _usePersistFn = _interopRequireDefault(require("../usePersistFn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useMount = function useMount(fn) {
  // 持久化函数
  var fnPersist = (0, _usePersistFn.default)(fn);
  (0, _react.useEffect)(function () {
    if (fnPersist && typeof fnPersist === 'function') {
      fnPersist();
    }
  }, []);
};

var _default = useMount;
exports.default = _default;
},{"react":"UCOaU","../usePersistFn":"3zxuT"}],"ClcGY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initRect = {
  top: NaN,
  left: NaN,
  bottom: NaN,
  right: NaN,
  height: NaN,
  width: NaN
};

var initState = _objectSpread({
  text: ''
}, initRect);

function getRectFromSelection(selection) {
  if (!selection) {
    return initRect;
  }

  if (selection.rangeCount < 1) {
    return initRect;
  }

  var range = selection.getRangeAt(0);

  var _range$getBoundingCli = range.getBoundingClientRect(),
      height = _range$getBoundingCli.height,
      width = _range$getBoundingCli.width,
      top = _range$getBoundingCli.top,
      left = _range$getBoundingCli.left,
      right = _range$getBoundingCli.right,
      bottom = _range$getBoundingCli.bottom;

  return {
    height: height,
    width: width,
    top: top,
    left: left,
    right: right,
    bottom: bottom
  };
}
/**
 * 获取用户选取的文本或当前光标插入的位置
 * */


function useTextSelection() {
  var hasPassedInArg = arguments.length === 1;
  var arg = (0, _react.useRef)(arguments.length <= 0 ? undefined : arguments[0]);
  var ref = (0, _react.useRef)();

  var _useState = (0, _react.useState)(initState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var stateRef = (0, _react.useRef)(state);
  stateRef.current = state;
  (0, _react.useEffect)(function () {
    // 获取 target 需要放在 useEffect 里，否则存在组件未加载好的情况而导致元素获取不到
    var passedInArg = typeof arg.current === 'function' ? arg.current() : arg.current;
    var target = hasPassedInArg ? passedInArg : ref.current;

    if (!target) {
      return function () {};
    }

    var mouseupHandler = function mouseupHandler() {
      var selObj = null;
      var text = '';
      var rect = initRect;
      if (!window.getSelection) return;
      selObj = window.getSelection();
      text = selObj ? selObj.toString() : '';

      if (text) {
        rect = getRectFromSelection(selObj);
        setState(_objectSpread({}, state, {
          text: text
        }, rect));
      }
    }; // 任意点击都需要清空之前的 range


    var mousedownHandler = function mousedownHandler() {
      if (!window.getSelection) return;

      if (stateRef.current.text) {
        setState(_objectSpread({}, initState));
      }

      var selObj = window.getSelection();
      if (!selObj) return;
      selObj.removeAllRanges();
    };

    target.addEventListener('mouseup', mouseupHandler);
    document.addEventListener('mousedown', mousedownHandler);
    return function () {
      target.removeEventListener('mouseup', mouseupHandler);
      document.removeEventListener('mousedown', mousedownHandler);
    };
  }, [ref.current, typeof arg.current === 'function' ? undefined : arg.current]);

  if (hasPassedInArg) {
    return [state];
  }

  return [state, ref];
}

var _default = useTextSelection;
exports.default = _default;
},{"react":"UCOaU"}],"3g2yx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useCreation = _interopRequireDefault(require("../useCreation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useCounter() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var min = options.min,
      max = options.max; // get init value

  var init = (0, _useCreation.default)(function () {
    if (typeof max === 'number') {
      return Math.min(max, initialValue);
    }

    if (typeof min === 'number') {
      return Math.max(min, initialValue);
    }

    return initialValue;
  }, []);

  var _useState = (0, _react.useState)(init),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var actions = (0, _react.useMemo)(function () {
    var setValue = function setValue(value) {
      setCurrent(function (c) {
        // get target value
        var target = typeof value === 'number' ? value : value(c);

        if (typeof max === 'number') {
          target = Math.min(max, target);
        }

        if (typeof min === 'number') {
          target = Math.max(min, target);
        }

        return target;
      });
    };

    var inc = function inc() {
      var delta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      setValue(function (c) {
        return c + delta;
      });
    };

    var dec = function dec() {
      var delta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      setValue(function (c) {
        return c - delta;
      });
    };

    var set = function set(value) {
      setValue(value);
    };

    var reset = function reset() {
      setValue(init);
    };

    return {
      inc: inc,
      dec: dec,
      set: set,
      reset: reset
    };
  }, []);
  return [current, actions];
}

var _default = useCounter;
exports.default = _default;
},{"react":"UCOaU","../useCreation":"6BVOH"}],"2cWpw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useUpdate = function useUpdate() {
  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      setState = _useState2[1];

  return (0, _react.useCallback)(function () {
    return setState(function (num) {
      return num + 1;
    });
  }, []);
};

var _default = useUpdate;
exports.default = _default;
},{"react":"UCOaU"}],"21M8B":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(initialValue, transformer) {
  var _useState = (0, _react.useState)(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var reset = (0, _react.useCallback)(function () {
    return setValue(initialValue);
  }, [setValue]);
  var transformerRef = (0, _react.useRef)(transformer);
  transformerRef.current = transformer;
  var onChange = (0, _react.useCallback)(function (e) {
    var _value = e.target.value;

    if (typeof transformerRef.current === 'function') {
      return setValue(transformerRef.current(_value));
    } // no transformer => U and T should be the same


    return setValue(_value);
  }, [setValue]);
  return [{
    value: value,
    onChange: onChange
  }, reset];
};

exports.default = _default;
},{"react":"UCOaU"}],"35HYR":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useHistoryTravel;

var _react = require("react");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var dumpIndex = function dumpIndex(step, arr) {
  var index = step > 0 ? step - 1 // move forward
  : arr.length + step; // move backward

  if (index >= arr.length - 1) {
    index = arr.length - 1;
  }

  if (index < 0) {
    index = 0;
  }

  return index;
};

var split = function split(step, targetArr) {
  var index = dumpIndex(step, targetArr);
  return {
    _current: targetArr[index],
    _before: targetArr.slice(0, index),
    _after: targetArr.slice(index + 1)
  };
};

function useHistoryTravel(initialValue) {
  var _useState = (0, _react.useState)({
    present: initialValue,
    past: [],
    future: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      history = _useState2[0],
      setHistory = _useState2[1];

  var present = history.present,
      past = history.past,
      future = history.future;
  var updateValue = (0, _react.useCallback)(function (val) {
    setHistory({
      present: val,
      future: [],
      past: [].concat(_toConsumableArray(past), [present])
    });
  }, [history, setHistory]);

  var _forward = (0, _react.useCallback)(function () {
    var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    if (future.length === 0) {
      return;
    }

    var _split = split(step, future),
        _before = _split._before,
        _current = _split._current,
        _after = _split._after;

    setHistory({
      past: [].concat(_toConsumableArray(past), [present], _toConsumableArray(_before)),
      present: _current,
      future: _after
    });
  }, [history, setHistory]);

  var _backward = (0, _react.useCallback)(function () {
    var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

    if (past.length === 0) {
      return;
    }

    var _split2 = split(step, past),
        _before = _split2._before,
        _current = _split2._current,
        _after = _split2._after;

    setHistory({
      past: _before,
      present: _current,
      future: [].concat(_toConsumableArray(_after), [present], _toConsumableArray(future))
    });
  }, [history, setHistory]);

  var go = (0, _react.useCallback)(function (step) {
    if (step === 0) {
      return;
    }

    if (step > 0) {
      return _forward(step);
    }

    _backward(step);
  }, [_backward, _forward]);
  return {
    value: present,
    setValue: updateValue,
    backLength: past.length,
    forwardLength: future.length,
    go: go,
    back: (0, _react.useCallback)(function () {
      go(-1);
    }, [go]),
    forward: (0, _react.useCallback)(function () {
      go(1);
    }, [go])
  };
}
},{"react":"UCOaU"}],"5ERF1":[function(require,module,exports) {
"use strict";

var helpers = require("../../../node_modules/@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");

var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
helpers.prelude(module);

try {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.useDelay = void 0;

  var _react = require("react");

  var _s = $RefreshSig$();

  const useDelay = (callback, delay, deps) => {
    _s();

    return (0, _react.useEffect)(() => {
      const timer = setTimeout(callback, delay);
      return () => clearTimeout(timer);
    }, deps !== null && deps !== void 0 ? deps : []);
  };

  exports.useDelay = useDelay;

  _s(useDelay, "OD7bBpZva5O2jO+Puf00hKivP7c=");

  helpers.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"UCOaU","../../../node_modules/@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"38SjL"}],"Pn1Kf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// import styled from "@emotion/styled"
// import theme from "../theme"
// import Image from "./source/HouseParty.svg"
// const { colors } = theme
// const Welcome = styled(Image)`
//   .HouseParty_svg__ {
//     &a {
//       fill: none;
//     }
//     &b {
//       fill: ${colors.green.base};
//     }
//     &c,
//     &e {
//       fill: ${colors.gold.base};
//     }
//     &d,
//     &h {
//       fill: ${colors.peach.base};
//     }
//     &f {
//       fill: ${colors.white};
//     }
//     &g,
//     &i {
//       fill: ${colors.pink.base};
//     }
//   }
// `
// export default Welcome
var _default = () => null;

exports.default = _default;
},{}],"3jsRt":[function(require,module,exports) {
module.exports=function(i){var e={};function o(t){if(e[t])return e[t].exports;var a=e[t]={i:t,l:!1,exports:{}};return i[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}return o.m=i,o.c=e,o.d=function(i,e,t){o.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:t})},o.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},o.t=function(i,e){if(1&e&&(i=o(i)),8&e)return i;if(4&e&&"object"==typeof i&&i&&i.__esModule)return i;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var a in i)o.d(t,a,function(e){return i[e]}.bind(null,a));return t},o.n=function(i){var e=i&&i.__esModule?function(){return i.default}:function(){return i};return o.d(e,"a",e),e},o.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},o.p="",o(o.s=0)}([function(i,e,o){"use strict";e.__esModule=!0;var t=function(i){return i&&i.__esModule?i:{default:i}}(o(1));var a=Promise.resolve(),r=function(i){function e(o){!function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?i:e}(this,i.call(this,o));return t.uiConfig=o.uiConfig,t.firebaseAuth=o.firebaseAuth,t.className=o.className,t.uiCallback=o.uiCallback,t.unregisterAuthObserver=function(){},t}return function(i,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)}(e,i),e.prototype.componentDidMount=function(){var i=this;o(2);var e=o(7);return a.then(function(){i.firebaseUiWidget=e.auth.AuthUI.getInstance()||new e.auth.AuthUI(i.firebaseAuth),"popup"===i.uiConfig.signInFlow&&i.firebaseUiWidget.reset(),i.userSignedIn=!1,i.unregisterAuthObserver=i.firebaseAuth.onAuthStateChanged(function(e){!e&&i.userSignedIn&&i.firebaseUiWidget.reset(),i.userSignedIn=!!e}),i.uiCallback&&i.uiCallback(i.firebaseUiWidget),i.firebaseUiWidget.start("#firebaseui_container",i.uiConfig)})},e.prototype.componentWillUnmount=function(){var i=this;return a=a.then(function(){return i.unregisterAuthObserver(),i.firebaseUiWidget.delete()})},e.prototype.render=function(){return t.default.createElement("div",{className:this.className,id:"firebaseui_container"})},e}(t.default.Component);e.default=r},function(i,e){i.exports=require("react")},function(i,e,o){var t=o(3);"string"==typeof t&&(t=[[i.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(5)(t,a);t.locals&&(i.exports=t.locals)},function(i,e,o){(e=i.exports=o(4)(!1)).push([i.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700);",""]),e.push([i.i,'.mdl-button{background:0 0;border:none;border-radius:2px;color:#000;position:relative;height:36px;margin:0;min-width:64px;padding:0 16px;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;text-transform:uppercase;line-height:1;letter-spacing:0;overflow:hidden;will-change:box-shadow;transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);outline:0;cursor:pointer;text-decoration:none;text-align:center;line-height:36px;vertical-align:middle}.mdl-button::-moz-focus-inner{border:0}.mdl-button:hover{background-color:hsla(0,0%,62%,.2)}.mdl-button:focus:not(:active){background-color:rgba(0,0,0,.12)}.mdl-button:active{background-color:hsla(0,0%,62%,.4)}.mdl-button.mdl-button--colored{color:#3f51b5}.mdl-button.mdl-button--colored:focus:not(:active){background-color:rgba(0,0,0,.12)}input.mdl-button[type=submit]{-webkit-appearance:none}.mdl-button--raised{background:hsla(0,0%,62%,.2);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-button--raised:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:hsla(0,0%,62%,.4)}.mdl-button--raised:focus:not(:active){box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);background-color:hsla(0,0%,62%,.4)}.mdl-button--raised.mdl-button--colored{background:#3f51b5;color:#fff}.mdl-button--raised.mdl-button--colored:active,.mdl-button--raised.mdl-button--colored:focus:not(:active),.mdl-button--raised.mdl-button--colored:hover{background-color:#3f51b5}.mdl-button--raised.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--fab{border-radius:50%;font-size:24px;height:56px;margin:auto;min-width:56px;width:56px;padding:0;overflow:hidden;background:hsla(0,0%,62%,.2);box-shadow:0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);position:relative;line-height:normal}.mdl-button--fab .material-icons{position:absolute;top:50%;left:50%;transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--fab.mdl-button--mini-fab{height:40px;min-width:40px;width:40px}.mdl-button--fab .mdl-button__ripple-container{border-radius:50%;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-button--fab:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:hsla(0,0%,62%,.4)}.mdl-button--fab:focus:not(:active){box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);background-color:hsla(0,0%,62%,.4)}.mdl-button--fab.mdl-button--colored{background:#ff4081;color:#fff}.mdl-button--fab.mdl-button--colored:active,.mdl-button--fab.mdl-button--colored:focus:not(:active),.mdl-button--fab.mdl-button--colored:hover{background-color:#ff4081}.mdl-button--fab.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--icon{border-radius:50%;font-size:24px;height:32px;margin-left:0;margin-right:0;min-width:32px;width:32px;padding:0;overflow:hidden;color:inherit;line-height:normal}.mdl-button--icon .material-icons{position:absolute;top:50%;left:50%;transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon{height:24px;min-width:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon .material-icons{top:0;left:0}.mdl-button--icon .mdl-button__ripple-container{border-radius:50%;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-button__ripple-container{display:block;height:100%;left:0;position:absolute;top:0;width:100%;z-index:0;overflow:hidden}.mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple,.mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple{background-color:transparent}.mdl-button--primary.mdl-button--primary{color:#3f51b5}.mdl-button--primary.mdl-button--primary .mdl-ripple{background:#fff}.mdl-button--primary.mdl-button--primary.mdl-button--fab,.mdl-button--primary.mdl-button--primary.mdl-button--raised{color:#fff;background-color:#3f51b5}.mdl-button--accent.mdl-button--accent{color:#ff4081}.mdl-button--accent.mdl-button--accent .mdl-ripple{background:#fff}.mdl-button--accent.mdl-button--accent.mdl-button--fab,.mdl-button--accent.mdl-button--accent.mdl-button--raised{color:#fff;background-color:#ff4081}.mdl-button.mdl-button--disabled.mdl-button--disabled,.mdl-button[disabled][disabled]{color:rgba(0,0,0,.26);cursor:default;background-color:transparent}.mdl-button--fab.mdl-button--disabled.mdl-button--disabled,.mdl-button--fab[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-button--raised.mdl-button--disabled.mdl-button--disabled,.mdl-button--raised[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26);box-shadow:none}.mdl-button--colored.mdl-button--disabled.mdl-button--disabled,.mdl-button--colored[disabled][disabled]{color:rgba(0,0,0,.26)}.mdl-button .material-icons{vertical-align:middle}.mdl-card{display:flex;flex-direction:column;font-size:16px;font-weight:400;min-height:200px;overflow:hidden;width:330px;z-index:1;position:relative;background:#fff;border-radius:2px;box-sizing:border-box}.mdl-card__media{background-color:#ff4081;background-repeat:repeat;background-position:50% 50%;background-size:cover;background-origin:padding-box;background-attachment:scroll;box-sizing:border-box}.mdl-card__title{align-items:center;color:#000;display:block;display:flex;justify-content:stretch;line-height:normal;padding:16px;perspective-origin:165px 56px;transform-origin:165px 56px;box-sizing:border-box}.mdl-card__title.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__title-text{align-self:flex-end;color:inherit;display:block;display:flex;font-size:24px;font-weight:300;line-height:normal;overflow:hidden;transform-origin:149px 48px;margin:0}.mdl-card__subtitle-text{font-size:14px;color:rgba(0,0,0,.54);margin:0}.mdl-card__supporting-text{color:rgba(0,0,0,.54);font-size:1rem;line-height:18px;overflow:hidden;padding:16px;width:90%}.mdl-card__supporting-text.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__actions{font-size:16px;line-height:normal;width:100%;background-color:transparent;padding:8px;box-sizing:border-box}.mdl-card__actions.mdl-card--border{border-top:1px solid rgba(0,0,0,.1)}.mdl-card--expand{flex-grow:1}.mdl-card__menu{position:absolute;right:16px;top:16px}.mdl-dialog{border:none;box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2);width:280px}.mdl-dialog__title{padding:24px 24px 0;margin:0;font-size:2.5rem}.mdl-dialog__actions{padding:8px 8px 8px 24px;display:flex;flex-direction:row-reverse;flex-wrap:wrap}.mdl-dialog__actions>*{margin-right:8px;height:36px}.mdl-dialog__actions>:first-child{margin-right:0}.mdl-dialog__actions--full-width{padding:0 0 8px}.mdl-dialog__actions--full-width>*{height:48px;flex:0 0 100%;padding-right:16px;margin-right:0;text-align:right}.mdl-dialog__content{padding:20px 24px 24px;color:rgba(0,0,0,.54)}.mdl-progress{display:block;position:relative;height:4px;width:500px;max-width:100%}.mdl-progress>.bar{display:block;position:absolute;top:0;bottom:0;width:0;transition:width .2s cubic-bezier(.4,0,.2,1)}.mdl-progress>.progressbar{background-color:#3f51b5;z-index:1;left:0}.mdl-progress>.bufferbar{background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);z-index:0;left:0}.mdl-progress>.auxbar{right:0}@supports (-webkit-appearance:none){.mdl-progress:not(.mdl-progress--indeterminate):not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate):not(.mdl-progress__indeterminate)>.auxbar{background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);mask:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=)}}.mdl-progress:not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate)>.auxbar{background-image:linear-gradient(90deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.9)),linear-gradient(90deg,#3f51b5,#3f51b5)}.mdl-progress.mdl-progress--indeterminate>.bar1,.mdl-progress.mdl-progress__indeterminate>.bar1{background-color:#3f51b5;animation-name:indeterminate1;animation-duration:2s;animation-iteration-count:infinite;animation-timing-function:linear}.mdl-progress.mdl-progress--indeterminate>.bar3,.mdl-progress.mdl-progress__indeterminate>.bar3{background-image:none;background-color:#3f51b5;animation-name:indeterminate2;animation-duration:2s;animation-iteration-count:infinite;animation-timing-function:linear}@keyframes indeterminate1{0%{left:0;width:0}50%{left:25%;width:75%}75%{left:100%;width:0}}@keyframes indeterminate2{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}to{left:100%;width:0}}.mdl-shadow--2dp{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-shadow--3dp{box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)}.mdl-shadow--4dp{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.mdl-shadow--6dp{box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.2)}.mdl-shadow--8dp{box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)}.mdl-shadow--16dp{box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2)}.mdl-shadow--24dp{box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2)}.mdl-spinner{display:inline-block;position:relative;width:28px;height:28px}.mdl-spinner:not(.is-upgraded).is-active:after{content:"Loading..."}.mdl-spinner.is-upgraded.is-active{animation:mdl-spinner__container-rotate 1.568s linear infinite}@keyframes mdl-spinner__container-rotate{to{transform:rotate(1turn)}}.mdl-spinner__layer{position:absolute;width:100%;height:100%;opacity:0}.mdl-spinner__layer-1{border-color:#42a5f5}.mdl-spinner--single-color .mdl-spinner__layer-1{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-1{animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-2{border-color:#f44336}.mdl-spinner--single-color .mdl-spinner__layer-2{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-2{animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-3{border-color:#fdd835}.mdl-spinner--single-color .mdl-spinner__layer-3{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-3{animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-4{border-color:#4caf50}.mdl-spinner--single-color .mdl-spinner__layer-4{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-4{animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}@keyframes mdl-spinner__fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@keyframes mdl-spinner__layer-1-fade-in-out{0%{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdl-spinner__layer-2-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}}@keyframes mdl-spinner__layer-3-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}}@keyframes mdl-spinner__layer-4-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}.mdl-spinner__gap-patch{position:absolute;box-sizing:border-box;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}.mdl-spinner__gap-patch .mdl-spinner__circle{width:1000%;left:-450%}.mdl-spinner__circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}.mdl-spinner__circle-clipper.mdl-spinner__left{float:left}.mdl-spinner__circle-clipper.mdl-spinner__right{float:right}.mdl-spinner__circle-clipper .mdl-spinner__circle{width:200%}.mdl-spinner__circle{box-sizing:border-box;height:100%;border-width:3px;border-style:solid;border-color:inherit;border-bottom-color:transparent!important;border-radius:50%;animation:none;position:absolute;top:0;right:0;bottom:0;left:0}.mdl-spinner__left .mdl-spinner__circle{border-right-color:transparent!important;transform:rotate(129deg)}.mdl-spinner.is-active .mdl-spinner__left .mdl-spinner__circle{animation:mdl-spinner__left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__right .mdl-spinner__circle{left:-100%;border-left-color:transparent!important;transform:rotate(-129deg)}.mdl-spinner.is-active .mdl-spinner__right .mdl-spinner__circle{animation:mdl-spinner__right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}@keyframes mdl-spinner__left-spin{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@keyframes mdl-spinner__right-spin{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}.mdl-textfield{position:relative;font-size:16px;display:inline-block;box-sizing:border-box;width:300px;max-width:100%;margin:0;padding:20px 0}.mdl-textfield .mdl-button{position:absolute;bottom:20px}.mdl-textfield--align-right{text-align:right}.mdl-textfield--full-width{width:100%}.mdl-textfield--expandable{min-width:32px;width:auto;min-height:32px}.mdl-textfield--expandable .mdl-button--icon{top:16px}.mdl-textfield__input{border:none;border-bottom:1px solid rgba(0,0,0,.12);display:block;font-size:16px;font-family:Helvetica,Arial,sans-serif;margin:0;padding:4px 0;width:100%;background:0 0;text-align:left;color:inherit}.mdl-textfield__input[type=number]{-moz-appearance:textfield}.mdl-textfield__input[type=number]::-webkit-inner-spin-button,.mdl-textfield__input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.mdl-textfield.is-focused .mdl-textfield__input{outline:0}.mdl-textfield.is-invalid .mdl-textfield__input{border-color:#d50000;box-shadow:none}.mdl-textfield.is-disabled .mdl-textfield__input,fieldset[disabled] .mdl-textfield .mdl-textfield__input{background-color:transparent;border-bottom:1px dotted rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-textfield textarea.mdl-textfield__input{display:block}.mdl-textfield__label{bottom:0;color:rgba(0,0,0,.26);font-size:16px;left:0;right:0;pointer-events:none;position:absolute;display:block;top:24px;width:100%;overflow:hidden;white-space:nowrap;text-align:left}.mdl-textfield.has-placeholder .mdl-textfield__label,.mdl-textfield.is-dirty .mdl-textfield__label{visibility:hidden}.mdl-textfield--floating-label .mdl-textfield__label{transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label{transition:none}.mdl-textfield.is-disabled.is-disabled .mdl-textfield__label,fieldset[disabled] .mdl-textfield .mdl-textfield__label{color:rgba(0,0,0,.26)}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__label{color:#3f51b5;font-size:12px;top:4px;visibility:visible}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__expandable-holder .mdl-textfield__label{top:-16px}.mdl-textfield--floating-label.is-invalid .mdl-textfield__label{color:#d50000;font-size:12px}.mdl-textfield__label:after{background-color:#3f51b5;bottom:20px;content:"";height:2px;left:45%;position:absolute;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);visibility:hidden;width:10px}.mdl-textfield.is-focused .mdl-textfield__label:after{left:0;visibility:visible;width:100%}.mdl-textfield.is-invalid .mdl-textfield__label:after{background-color:#d50000}.mdl-textfield__error{color:#d50000;position:absolute;font-size:12px;margin-top:3px;visibility:hidden;display:block}.mdl-textfield.is-invalid .mdl-textfield__error{visibility:visible}.mdl-textfield__expandable-holder{position:relative;margin-left:32px;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-block;max-width:.1px}.mdl-textfield.is-dirty .mdl-textfield__expandable-holder,.mdl-textfield.is-focused .mdl-textfield__expandable-holder{max-width:600px}.mdl-textfield__expandable-holder .mdl-textfield__label:after{bottom:0}dialog{position:absolute;left:0;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border:solid;padding:1em;background:#fff;color:#000;display:block}dialog:not([open]){display:none}dialog+.backdrop{background:rgba(0,0,0,.1)}._dialog_overlay,dialog+.backdrop{position:fixed;top:0;right:0;bottom:0;left:0}dialog.fixed{position:fixed;top:50%;transform:translateY(-50%)}.firebaseui-container{background-color:#fff;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;color:rgba(0,0,0,.87);direction:ltr;font:16px Roboto,arial,sans-serif;margin:0 auto;max-width:360px;overflow:visible;position:relative;text-align:left;width:100%}.firebaseui-container.mdl-card{overflow:visible}.firebaseui-card-header{padding:24px 24px 0}.firebaseui-card-content,.firebaseui-card-footer{padding:0 24px}.firebaseui-card-actions{box-sizing:border-box;display:table;font-size:14px;padding:8px 24px 24px;text-align:left;width:100%}.firebaseui-form-links{display:table-cell;vertical-align:middle;width:100%}.firebaseui-form-actions{display:table-cell;text-align:right;white-space:nowrap;width:100%}.firebaseui-subtitle,.firebaseui-title{color:rgba(0,0,0,.87);direction:ltr;font-size:20px;font-weight:500;line-height:24px;margin:0;padding:0;text-align:left}.firebaseui-title{padding-bottom:16px}.firebaseui-subtitle{margin:16px 0}.firebaseui-text{color:rgba(0,0,0,.87);direction:ltr;font-size:16px;line-height:24px;text-align:left}.firebaseui-id-page-password-recovery-email-sent p.firebaseui-text{margin:16px 0}.firebaseui-text-emphasis{font-weight:700}.firebaseui-error{color:#dd2c00;direction:ltr;font-size:12px;line-height:16px;margin:0;text-align:left}.firebaseui-text-input-error{margin:-16px 0 16px}.firebaseui-error-wrapper{min-height:16px}.firebaseui-list-item{direction:ltr;margin:0;padding:0;text-align:left}.firebaseui-hidden{display:none}.firebaseui-relative-wrapper{position:relative}.firebaseui-label{color:rgba(0,0,0,.54);direction:ltr;font-size:16px;text-align:left}.mdl-textfield--floating-label.is-dirty .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__label{color:#757575}.firebaseui-input,.firebaseui-input-invalid{border-radius:0;color:rgba(0,0,0,.87);direction:ltr;font-size:16px;width:100%}input.firebaseui-input,input.firebaseui-input-invalid{direction:ltr;text-align:left}.firebaseui-input-invalid{border-color:#dd2c00}.firebaseui-textfield{width:100%}.firebaseui-textfield.mdl-textfield .firebaseui-input{border-color:rgba(0,0,0,.12)}.firebaseui-textfield.mdl-textfield .firebaseui-label:after{background-color:#3f51b5}.firebaseui-textfield-invalid.mdl-textfield .firebaseui-input{border-color:#dd2c00}.firebaseui-textfield-invalid.mdl-textfield .firebaseui-label:after{background-color:#dd2c00}.firebaseui-button{display:inline-block;height:36px;margin-left:8px;min-width:88px}.firebaseui-link{color:#4285f4;font-variant:normal;font-weight:400;text-decoration:none}.firebaseui-link:hover{text-decoration:underline}.firebaseui-indent{margin-left:1em}.firebaseui-tos{color:#757575;direction:ltr;font-size:12px;line-height:16px;margin-bottom:24px;margin-top:0;text-align:left}.firebaseui-provider-sign-in-footer>.firebaseui-tos{text-align:center}.firebaseui-tos-list{list-style:none;text-align:right}.firebaseui-inline-list-item{display:inline-block;margin-left:5px;margin-right:5px}.firebaseui-page-provider-sign-in{background:inherit}.firebaseui-idp-list{list-style:none;margin:1em 0;padding:0}.firebaseui-idp-button{direction:ltr;font-weight:500;height:auto;line-height:normal;max-width:220px;min-height:40px;padding:8px 16px;text-align:left;width:100%}.firebaseui-idp-list>.firebaseui-list-item{margin-bottom:15px;text-align:center}.firebaseui-idp-icon-wrapper{display:table-cell;vertical-align:middle}.firebaseui-idp-icon{height:18px;width:18px}.firebaseui-idp-favicon,.firebaseui-idp-icon{border:none;display:inline-block;vertical-align:middle}.firebaseui-idp-favicon{height:14px;margin-right:5px;width:14px}.firebaseui-idp-text{color:#fff;display:table-cell;font-size:14px;padding-left:16px;text-transform:none;vertical-align:middle}.firebaseui-idp-text.firebaseui-idp-text-long{display:table-cell}.firebaseui-idp-text.firebaseui-idp-text-short{display:none}@media (max-width:268px){.firebaseui-idp-text.firebaseui-idp-text-long{display:none}.firebaseui-idp-text.firebaseui-idp-text-short{display:table-cell}}@media (max-width:320px){.firebaseui-recaptcha-container>div>div{transform:scale(.9);-webkit-transform:scale(.9);transform-origin:0 0;-webkit-transform-origin:0 0}}.firebaseui-idp-password,.firebaseui-idp-password:hover,.mdl-button.firebaseui-idp-password:active,.mdl-button.firebaseui-idp-password:focus{background-color:#db4437}.firebaseui-idp-phone,.firebaseui-idp-phone:hover,.mdl-button.firebaseui-idp-phone:active,.mdl-button.firebaseui-idp-phone:focus{background-color:#02bd7e}.firebaseui-idp-google,.firebaseui-idp-google:hover,.mdl-button.firebaseui-idp-google:active,.mdl-button.firebaseui-idp-google:focus{background-color:#fff}.firebaseui-idp-google>.firebaseui-idp-text{color:#757575}.firebaseui-idp-github,.firebaseui-idp-github:hover,.mdl-button.firebaseui-idp-github:active,.mdl-button.firebaseui-idp-github:focus{background-color:#333}.firebaseui-idp-facebook,.firebaseui-idp-facebook:hover,.mdl-button.firebaseui-idp-facebook:active,.mdl-button.firebaseui-idp-facebook:focus{background-color:#3b5998}.firebaseui-idp-twitter,.firebaseui-idp-twitter:hover,.mdl-button.firebaseui-idp-twitter:active,.mdl-button.firebaseui-idp-twitter:focus{background-color:#55acee}.firebaseui-idp-anonymous,.firebaseui-idp-anonymous:hover,.mdl-button.firebaseui-idp-anonymous:active,.mdl-button.firebaseui-idp-anonymous:focus{background-color:#f4b400}.firebaseui-info-bar{background-color:#f9edbe;border:1px solid #f0c36d;box-shadow:0 2px 4px rgba(0,0,0,.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);-moz-box-shadow:0 2px 4px rgba(0,0,0,.2);left:10%;padding:8px 16px;position:absolute;right:10%;text-align:center;top:0}.firebaseui-info-bar-message{font-size:12px;margin:0}.firebaseui-dialog{box-sizing:border-box;color:rgba(0,0,0,.87);font:16px Roboto,arial,sans-serif;height:auto;padding:24px;text-align:left}.firebaseui-dialog-icon-wrapper{display:table-cell;vertical-align:middle}.firebaseui-dialog-icon{float:left;height:40px;margin-right:24px;width:40px}.firebaseui-progress-dialog-message{display:table-cell;font-size:16px;font-weight:400;min-height:40px;vertical-align:middle}.firebaseui-progress-dialog-loading-icon{height:28px;margin:6px 30px 6px 6px;width:28px}.firebaseui-icon-done{background-image:url(https://www.gstatic.com/images/icons/material/system/2x/done_googgreen_36dp.png);background-position:50%;background-repeat:no-repeat;background-size:36px 36px}.firebaseui-phone-number{display:flex}.firebaseui-country-selector{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_grey600_18dp.png);background-position:100%;background-repeat:no-repeat;background-size:18px auto;border-radius:0;border-bottom:1px solid rgba(0,0,0,.12);color:rgba(0,0,0,.87);flex-shrink:0;font-size:16px;font-weight:400;height:auto;line-height:normal;margin:20px 24px 20px 0;padding:4px 20px 4px 0;width:90px}.firebaseui-country-selector-flag{display:inline-block;margin-right:1ex}.firebaseui-flag{background-image:url(https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/flags_sprite_2x.png);background-size:100% auto;filter:drop-shadow(1px 1px 1px rgba(0,0,0,.54));height:14px;width:24px}.firebaseui-list-box-dialog{max-height:90%;overflow:auto;padding:8px 0 0}.firebaseui-list-box-actions{padding-bottom:8px}.firebaseui-list-box-icon-wrapper{padding-right:24px}.firebaseui-list-box-icon-wrapper,.firebaseui-list-box-label-wrapper{display:table-cell;vertical-align:top}.firebaseui-list-box-dialog-button{color:rgba(0,0,0,.87);direction:ltr;font-size:16px;font-weight:400;height:auto;line-height:normal;min-height:48px;padding:14px 24px;text-align:left;text-transform:none;width:100%}.firebaseui-phone-number-error{margin-left:114px}.mdl-progress.firebaseui-busy-indicator{height:2px;left:0;position:absolute;top:55px;width:100%}.mdl-spinner.firebaseui-busy-indicator{height:56px;left:0;margin:auto;position:absolute;right:0;top:30%;width:56px}.firebaseui-callback-indicator-container .firebaseui-busy-indicator{top:0}.firebaseui-callback-indicator-container{height:120px}.firebaseui-new-password-component{display:inline-block;position:relative;width:100%}.firebaseui-input-floating-button{background-position:50%;background-repeat:no-repeat;display:block;height:24px;position:absolute;right:0;top:20px;width:24px}.firebaseui-input-toggle-on{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/visibility_black_24dp.png)}.firebaseui-input-toggle-off{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/visibility_off_black_24dp.png)}.firebaseui-input-toggle-focus{opacity:.87}.firebaseui-input-toggle-blur{opacity:.38}.firebaseui-recaptcha-wrapper{display:table;margin:0 auto;padding-bottom:8px}.firebaseui-recaptcha-container{display:table-cell}.firebaseui-recaptcha-error-wrapper{caption-side:bottom;display:table-caption}.firebaseui-change-phone-number-link{display:block}.firebaseui-resend-container{direction:ltr;margin:20px 0;text-align:center}.firebaseui-id-resend-countdown{color:rgba(0,0,0,.38)}.firebaseui-id-page-phone-sign-in-start .firebaseui-form-actions div{float:left}@media (max-width:480px){.firebaseui-container{box-shadow:none;max-width:none;width:100%}.firebaseui-card-header{border-bottom:1px solid #e0e0e0;margin-bottom:16px;padding:16px 24px 0}.firebaseui-title{padding-bottom:16px}.firebaseui-card-actions{padding-right:24px}.firebaseui-busy-indicator{top:0}}.mdl-textfield__label{font-weight:400;margin-bottom:0}.firebaseui-id-page-blank{background:inherit;height:64px}.firebaseui-email-sent{background-image:url(https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/success_status.png);background-position:50%;background-repeat:no-repeat;background-size:64px 64px;height:64px;margin-top:16px;text-align:center}.firebaseui-text-justify{text-align:justify}.firebaseui-flag-KY{background-position:0 0}.firebaseui-flag-AC{background-position:0 -14px}.firebaseui-flag-AE{background-position:0 -28px}.firebaseui-flag-AF{background-position:0 -42px}.firebaseui-flag-AG{background-position:0 -56px}.firebaseui-flag-AI{background-position:0 -70px}.firebaseui-flag-AL{background-position:0 -84px}.firebaseui-flag-AM{background-position:0 -98px}.firebaseui-flag-AO{background-position:0 -112px}.firebaseui-flag-AQ{background-position:0 -126px}.firebaseui-flag-AR{background-position:0 -140px}.firebaseui-flag-AS{background-position:0 -154px}.firebaseui-flag-AT{background-position:0 -168px}.firebaseui-flag-AU{background-position:0 -182px}.firebaseui-flag-AW{background-position:0 -196px}.firebaseui-flag-AX{background-position:0 -210px}.firebaseui-flag-AZ{background-position:0 -224px}.firebaseui-flag-BA{background-position:0 -238px}.firebaseui-flag-BB{background-position:0 -252px}.firebaseui-flag-BD{background-position:0 -266px}.firebaseui-flag-BE{background-position:0 -280px}.firebaseui-flag-BF{background-position:0 -294px}.firebaseui-flag-BG{background-position:0 -308px}.firebaseui-flag-BH{background-position:0 -322px}.firebaseui-flag-BI{background-position:0 -336px}.firebaseui-flag-BJ{background-position:0 -350px}.firebaseui-flag-BL{background-position:0 -364px}.firebaseui-flag-BM{background-position:0 -378px}.firebaseui-flag-BN{background-position:0 -392px}.firebaseui-flag-BO{background-position:0 -406px}.firebaseui-flag-BQ{background-position:0 -420px}.firebaseui-flag-BR{background-position:0 -434px}.firebaseui-flag-BS{background-position:0 -448px}.firebaseui-flag-BT{background-position:0 -462px}.firebaseui-flag-BV{background-position:0 -476px}.firebaseui-flag-BW{background-position:0 -490px}.firebaseui-flag-BY{background-position:0 -504px}.firebaseui-flag-BZ{background-position:0 -518px}.firebaseui-flag-CA{background-position:0 -532px}.firebaseui-flag-CC{background-position:0 -546px}.firebaseui-flag-CD{background-position:0 -560px}.firebaseui-flag-CF{background-position:0 -574px}.firebaseui-flag-CG{background-position:0 -588px}.firebaseui-flag-CH{background-position:0 -602px}.firebaseui-flag-CI{background-position:0 -616px}.firebaseui-flag-CK{background-position:0 -630px}.firebaseui-flag-CL{background-position:0 -644px}.firebaseui-flag-CM{background-position:0 -658px}.firebaseui-flag-CN{background-position:0 -672px}.firebaseui-flag-CO{background-position:0 -686px}.firebaseui-flag-CP{background-position:0 -700px}.firebaseui-flag-CR{background-position:0 -714px}.firebaseui-flag-CU{background-position:0 -728px}.firebaseui-flag-CV{background-position:0 -742px}.firebaseui-flag-CW{background-position:0 -756px}.firebaseui-flag-CX{background-position:0 -770px}.firebaseui-flag-CY{background-position:0 -784px}.firebaseui-flag-CZ{background-position:0 -798px}.firebaseui-flag-DE{background-position:0 -812px}.firebaseui-flag-DG{background-position:0 -826px}.firebaseui-flag-DJ{background-position:0 -840px}.firebaseui-flag-DK{background-position:0 -854px}.firebaseui-flag-DM{background-position:0 -868px}.firebaseui-flag-DO{background-position:0 -882px}.firebaseui-flag-DZ{background-position:0 -896px}.firebaseui-flag-EA{background-position:0 -910px}.firebaseui-flag-EC{background-position:0 -924px}.firebaseui-flag-EE{background-position:0 -938px}.firebaseui-flag-EG{background-position:0 -952px}.firebaseui-flag-EH{background-position:0 -966px}.firebaseui-flag-ER{background-position:0 -980px}.firebaseui-flag-ES{background-position:0 -994px}.firebaseui-flag-ET{background-position:0 -1008px}.firebaseui-flag-EU{background-position:0 -1022px}.firebaseui-flag-FI{background-position:0 -1036px}.firebaseui-flag-FJ{background-position:0 -1050px}.firebaseui-flag-FK{background-position:0 -1064px}.firebaseui-flag-FM{background-position:0 -1078px}.firebaseui-flag-FO{background-position:0 -1092px}.firebaseui-flag-FR{background-position:0 -1106px}.firebaseui-flag-GA{background-position:0 -1120px}.firebaseui-flag-GB{background-position:0 -1134px}.firebaseui-flag-GD{background-position:0 -1148px}.firebaseui-flag-GE{background-position:0 -1162px}.firebaseui-flag-GF{background-position:0 -1176px}.firebaseui-flag-GG{background-position:0 -1190px}.firebaseui-flag-GH{background-position:0 -1204px}.firebaseui-flag-GI{background-position:0 -1218px}.firebaseui-flag-GL{background-position:0 -1232px}.firebaseui-flag-GM{background-position:0 -1246px}.firebaseui-flag-GN{background-position:0 -1260px}.firebaseui-flag-GP{background-position:0 -1274px}.firebaseui-flag-GQ{background-position:0 -1288px}.firebaseui-flag-GR{background-position:0 -1302px}.firebaseui-flag-GS{background-position:0 -1316px}.firebaseui-flag-GT{background-position:0 -1330px}.firebaseui-flag-GU{background-position:0 -1344px}.firebaseui-flag-GW{background-position:0 -1358px}.firebaseui-flag-GY{background-position:0 -1372px}.firebaseui-flag-HK{background-position:0 -1386px}.firebaseui-flag-HM{background-position:0 -1400px}.firebaseui-flag-HN{background-position:0 -1414px}.firebaseui-flag-HR{background-position:0 -1428px}.firebaseui-flag-HT{background-position:0 -1442px}.firebaseui-flag-HU{background-position:0 -1456px}.firebaseui-flag-IC{background-position:0 -1470px}.firebaseui-flag-ID{background-position:0 -1484px}.firebaseui-flag-IE{background-position:0 -1498px}.firebaseui-flag-IL{background-position:0 -1512px}.firebaseui-flag-IM{background-position:0 -1526px}.firebaseui-flag-IN{background-position:0 -1540px}.firebaseui-flag-IO{background-position:0 -1554px}.firebaseui-flag-IQ{background-position:0 -1568px}.firebaseui-flag-IR{background-position:0 -1582px}.firebaseui-flag-IS{background-position:0 -1596px}.firebaseui-flag-IT{background-position:0 -1610px}.firebaseui-flag-JE{background-position:0 -1624px}.firebaseui-flag-JM{background-position:0 -1638px}.firebaseui-flag-JO{background-position:0 -1652px}.firebaseui-flag-JP{background-position:0 -1666px}.firebaseui-flag-KE{background-position:0 -1680px}.firebaseui-flag-KG{background-position:0 -1694px}.firebaseui-flag-KH{background-position:0 -1708px}.firebaseui-flag-KI{background-position:0 -1722px}.firebaseui-flag-KM{background-position:0 -1736px}.firebaseui-flag-KN{background-position:0 -1750px}.firebaseui-flag-KP{background-position:0 -1764px}.firebaseui-flag-KR{background-position:0 -1778px}.firebaseui-flag-KW{background-position:0 -1792px}.firebaseui-flag-AD{background-position:0 -1806px}.firebaseui-flag-KZ{background-position:0 -1820px}.firebaseui-flag-LA{background-position:0 -1834px}.firebaseui-flag-LB{background-position:0 -1848px}.firebaseui-flag-LC{background-position:0 -1862px}.firebaseui-flag-LI{background-position:0 -1876px}.firebaseui-flag-LK{background-position:0 -1890px}.firebaseui-flag-LR{background-position:0 -1904px}.firebaseui-flag-LS{background-position:0 -1918px}.firebaseui-flag-LT{background-position:0 -1932px}.firebaseui-flag-LU{background-position:0 -1946px}.firebaseui-flag-LV{background-position:0 -1960px}.firebaseui-flag-LY{background-position:0 -1974px}.firebaseui-flag-MA{background-position:0 -1988px}.firebaseui-flag-MC{background-position:0 -2002px}.firebaseui-flag-MD{background-position:0 -2016px}.firebaseui-flag-ME{background-position:0 -2030px}.firebaseui-flag-MF{background-position:0 -2044px}.firebaseui-flag-MG{background-position:0 -2058px}.firebaseui-flag-MH{background-position:0 -2072px}.firebaseui-flag-MK{background-position:0 -2086px}.firebaseui-flag-ML{background-position:0 -2100px}.firebaseui-flag-MM{background-position:0 -2114px}.firebaseui-flag-MN{background-position:0 -2128px}.firebaseui-flag-MO{background-position:0 -2142px}.firebaseui-flag-MP{background-position:0 -2156px}.firebaseui-flag-MQ{background-position:0 -2170px}.firebaseui-flag-MR{background-position:0 -2184px}.firebaseui-flag-MS{background-position:0 -2198px}.firebaseui-flag-MT{background-position:0 -2212px}.firebaseui-flag-MU{background-position:0 -2226px}.firebaseui-flag-MV{background-position:0 -2240px}.firebaseui-flag-MW{background-position:0 -2254px}.firebaseui-flag-MX{background-position:0 -2268px}.firebaseui-flag-MY{background-position:0 -2282px}.firebaseui-flag-MZ{background-position:0 -2296px}.firebaseui-flag-NA{background-position:0 -2310px}.firebaseui-flag-NC{background-position:0 -2324px}.firebaseui-flag-NE{background-position:0 -2338px}.firebaseui-flag-NF{background-position:0 -2352px}.firebaseui-flag-NG{background-position:0 -2366px}.firebaseui-flag-NI{background-position:0 -2380px}.firebaseui-flag-NL{background-position:0 -2394px}.firebaseui-flag-NO{background-position:0 -2408px}.firebaseui-flag-NP{background-position:0 -2422px}.firebaseui-flag-NR{background-position:0 -2436px}.firebaseui-flag-NU{background-position:0 -2450px}.firebaseui-flag-NZ{background-position:0 -2464px}.firebaseui-flag-OM{background-position:0 -2478px}.firebaseui-flag-PA{background-position:0 -2492px}.firebaseui-flag-PE{background-position:0 -2506px}.firebaseui-flag-PF{background-position:0 -2520px}.firebaseui-flag-PG{background-position:0 -2534px}.firebaseui-flag-PH{background-position:0 -2548px}.firebaseui-flag-PK{background-position:0 -2562px}.firebaseui-flag-PL{background-position:0 -2576px}.firebaseui-flag-PM{background-position:0 -2590px}.firebaseui-flag-PN{background-position:0 -2604px}.firebaseui-flag-PR{background-position:0 -2618px}.firebaseui-flag-PS{background-position:0 -2632px}.firebaseui-flag-PT{background-position:0 -2646px}.firebaseui-flag-PW{background-position:0 -2660px}.firebaseui-flag-PY{background-position:0 -2674px}.firebaseui-flag-QA{background-position:0 -2688px}.firebaseui-flag-RE{background-position:0 -2702px}.firebaseui-flag-RO{background-position:0 -2716px}.firebaseui-flag-RS{background-position:0 -2730px}.firebaseui-flag-RU{background-position:0 -2744px}.firebaseui-flag-RW{background-position:0 -2758px}.firebaseui-flag-SA{background-position:0 -2772px}.firebaseui-flag-SB{background-position:0 -2786px}.firebaseui-flag-SC{background-position:0 -2800px}.firebaseui-flag-SD{background-position:0 -2814px}.firebaseui-flag-SE{background-position:0 -2828px}.firebaseui-flag-SG{background-position:0 -2842px}.firebaseui-flag-SH{background-position:0 -2856px}.firebaseui-flag-SI{background-position:0 -2870px}.firebaseui-flag-SJ{background-position:0 -2884px}.firebaseui-flag-SK{background-position:0 -2898px}.firebaseui-flag-SL{background-position:0 -2912px}.firebaseui-flag-SM{background-position:0 -2926px}.firebaseui-flag-SN{background-position:0 -2940px}.firebaseui-flag-SO{background-position:0 -2954px}.firebaseui-flag-SR{background-position:0 -2968px}.firebaseui-flag-SS{background-position:0 -2982px}.firebaseui-flag-ST{background-position:0 -2996px}.firebaseui-flag-SV{background-position:0 -3010px}.firebaseui-flag-SX{background-position:0 -3024px}.firebaseui-flag-SY{background-position:0 -3038px}.firebaseui-flag-SZ{background-position:0 -3052px}.firebaseui-flag-TA{background-position:0 -3066px}.firebaseui-flag-TC{background-position:0 -3080px}.firebaseui-flag-TD{background-position:0 -3094px}.firebaseui-flag-TF{background-position:0 -3108px}.firebaseui-flag-TG{background-position:0 -3122px}.firebaseui-flag-TH{background-position:0 -3136px}.firebaseui-flag-TJ{background-position:0 -3150px}.firebaseui-flag-TK{background-position:0 -3164px}.firebaseui-flag-TL{background-position:0 -3178px}.firebaseui-flag-TM{background-position:0 -3192px}.firebaseui-flag-TN{background-position:0 -3206px}.firebaseui-flag-TO{background-position:0 -3220px}.firebaseui-flag-TR{background-position:0 -3234px}.firebaseui-flag-TT{background-position:0 -3248px}.firebaseui-flag-TV{background-position:0 -3262px}.firebaseui-flag-TW{background-position:0 -3276px}.firebaseui-flag-TZ{background-position:0 -3290px}.firebaseui-flag-UA{background-position:0 -3304px}.firebaseui-flag-UG{background-position:0 -3318px}.firebaseui-flag-UM{background-position:0 -3332px}.firebaseui-flag-UN{background-position:0 -3346px}.firebaseui-flag-US{background-position:0 -3360px}.firebaseui-flag-UY{background-position:0 -3374px}.firebaseui-flag-UZ{background-position:0 -3388px}.firebaseui-flag-VA{background-position:0 -3402px}.firebaseui-flag-VC{background-position:0 -3416px}.firebaseui-flag-VE{background-position:0 -3430px}.firebaseui-flag-VG{background-position:0 -3444px}.firebaseui-flag-VI{background-position:0 -3458px}.firebaseui-flag-VN{background-position:0 -3472px}.firebaseui-flag-VU{background-position:0 -3486px}.firebaseui-flag-WF{background-position:0 -3500px}.firebaseui-flag-WS{background-position:0 -3514px}.firebaseui-flag-XK{background-position:0 -3528px}.firebaseui-flag-YE{background-position:0 -3542px}.firebaseui-flag-YT{background-position:0 -3556px}.firebaseui-flag-ZA{background-position:0 -3570px}.firebaseui-flag-ZM{background-position:0 -3584px}.firebaseui-flag-ZW{background-position:0 -3598px}',""])},function(i,e){i.exports=function(i){var e=[];return e.toString=function(){return this.map(function(e){var o=function(i,e){var o=i[1]||"",t=i[3];if(!t)return o;if(e&&"function"==typeof btoa){var a=function(i){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"}(t),r=t.sources.map(function(i){return"/*# sourceURL="+t.sourceRoot+i+" */"});return[o].concat(r).concat([a]).join("\n")}return[o].join("\n")}(e,i);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(i,o){"string"==typeof i&&(i=[[null,i,""]]);for(var t={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(t[r]=!0)}for(a=0;a<i.length;a++){var n=i[a];"number"==typeof n[0]&&t[n[0]]||(o&&!n[2]?n[2]=o:o&&(n[2]="("+n[2]+") and ("+o+")"),e.push(n))}},e}},function(i,e,o){var t={},a=function(i){var e;return function(){return void 0===e&&(e=i.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),r=function(i){var e={};return function(i){if("function"==typeof i)return i();if(void 0===e[i]){var o=function(i){return document.querySelector(i)}.call(this,i);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(i){o=null}e[i]=o}return e[i]}}(),n=null,l=0,s=[],d=o(6);function p(i,e){for(var o=0;o<i.length;o++){var a=i[o],r=t[a.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](a.parts[n]);for(;n<a.parts.length;n++)r.parts.push(x(a.parts[n],e))}else{var l=[];for(n=0;n<a.parts.length;n++)l.push(x(a.parts[n],e));t[a.id]={id:a.id,refs:1,parts:l}}}}function b(i,e){for(var o=[],t={},a=0;a<i.length;a++){var r=i[a],n=e.base?r[0]+e.base:r[0],l={css:r[1],media:r[2],sourceMap:r[3]};t[n]?t[n].parts.push(l):o.push(t[n]={id:n,parts:[l]})}return o}function f(i,e){var o=r(i.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=s[s.length-1];if("top"===i.insertAt)t?t.nextSibling?o.insertBefore(e,t.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),s.push(e);else if("bottom"===i.insertAt)o.appendChild(e);else{if("object"!=typeof i.insertAt||!i.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=r(i.insertInto+" "+i.insertAt.before);o.insertBefore(e,a)}}function u(i){if(null===i.parentNode)return!1;i.parentNode.removeChild(i);var e=s.indexOf(i);e>=0&&s.splice(e,1)}function g(i){var e=document.createElement("style");return void 0===i.attrs.type&&(i.attrs.type="text/css"),c(e,i.attrs),f(i,e),e}function c(i,e){Object.keys(e).forEach(function(o){i.setAttribute(o,e[o])})}function x(i,e){var o,t,a,r;if(e.transform&&i.css){if(!(r=e.transform(i.css)))return function(){};i.css=r}if(e.singleton){var s=l++;o=n||(n=g(e)),t=h.bind(null,o,s,!1),a=h.bind(null,o,s,!0)}else i.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(i){var e=document.createElement("link");return void 0===i.attrs.type&&(i.attrs.type="text/css"),i.attrs.rel="stylesheet",c(e,i.attrs),f(i,e),e}(e),t=function(i,e,o){var t=o.css,a=o.sourceMap,r=void 0===e.convertToAbsoluteUrls&&a;(e.convertToAbsoluteUrls||r)&&(t=d(t));a&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var n=new Blob([t],{type:"text/css"}),l=i.href;i.href=URL.createObjectURL(n),l&&URL.revokeObjectURL(l)}.bind(null,o,e),a=function(){u(o),o.href&&URL.revokeObjectURL(o.href)}):(o=g(e),t=function(i,e){var o=e.css,t=e.media;t&&i.setAttribute("media",t);if(i.styleSheet)i.styleSheet.cssText=o;else{for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(document.createTextNode(o))}}.bind(null,o),a=function(){u(o)});return t(i),function(e){if(e){if(e.css===i.css&&e.media===i.media&&e.sourceMap===i.sourceMap)return;t(i=e)}else a()}}i.exports=function(i,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=b(i,e);return p(o,e),function(i){for(var a=[],r=0;r<o.length;r++){var n=o[r];(l=t[n.id]).refs--,a.push(l)}i&&p(b(i,e),e);for(r=0;r<a.length;r++){var l;if(0===(l=a[r]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete t[l.id]}}}};var m=function(){var i=[];return function(e,o){return i[e]=o,i.filter(Boolean).join("\n")}}();function h(i,e,o,t){var a=o?"":t.css;if(i.styleSheet)i.styleSheet.cssText=m(e,a);else{var r=document.createTextNode(a),n=i.childNodes;n[e]&&i.removeChild(n[e]),n.length?i.insertBefore(r,n[e]):i.appendChild(r)}}},function(i,e){i.exports=function(i){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!i||"string"!=typeof i)return i;var o=e.protocol+"//"+e.host,t=o+e.pathname.replace(/\/[^\/]*$/,"/");return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(i,e){var a,r=e.trim().replace(/^"(.*)"$/,function(i,e){return e}).replace(/^'(.*)'$/,function(i,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?i:(a=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:t+r.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(i,e){i.exports=require("firebaseui")}]);
//# sourceMappingURL=StyledFirebaseAuth.js.map
},{"react":"UCOaU","firebaseui":"2z6DE"}],"2z6DE":[function(require,module,exports) {
var define;
var global = arguments[3];

(function () {
  var firebase = require('firebase/app');

  require('firebase/auth');

  if (typeof firebase.default !== 'undefined') {
    firebase = firebase.default;
  }

  (function () {
    var supportCustomEvent = window.CustomEvent;

    if (!supportCustomEvent || typeof supportCustomEvent === "object") {
      supportCustomEvent = function CustomEvent(event, x) {
        x = x || {};
        var ev = document.createEvent("CustomEvent");
        ev.initCustomEvent(event, !!x.bubbles, !!x.cancelable, x.detail || null);
        return ev;
      };

      supportCustomEvent.prototype = window.Event.prototype;
    }

    function createsStackingContext(el) {
      while (el && el !== document.body) {
        var s = window.getComputedStyle(el);

        var invalid = function (k, ok) {
          return !(s[k] === undefined || s[k] === ok);
        };

        if (s.opacity < 1 || invalid("zIndex", "auto") || invalid("transform", "none") || invalid("mixBlendMode", "normal") || invalid("filter", "none") || invalid("perspective", "none") || s["isolation"] === "isolate" || s.position === "fixed" || s.webkitOverflowScrolling === "touch") return true;
        el = el.parentElement;
      }

      return false;
    }

    function findNearestDialog(el) {
      while (el) {
        if (el.localName === "dialog") return el;
        el = el.parentElement;
      }

      return null;
    }

    function safeBlur(el) {
      if (el && el.blur && el !== document.body) el.blur();
    }

    function inNodeList(nodeList, node) {
      for (var i = 0; i < nodeList.length; ++i) if (nodeList[i] === node) return true;

      return false;
    }

    function isFormMethodDialog(el) {
      if (!el || !el.hasAttribute("method")) return false;
      return el.getAttribute("method").toLowerCase() === "dialog";
    }

    function dialogPolyfillInfo(dialog) {
      this.dialog_ = dialog;
      this.replacedStyleTop_ = false;
      this.openAsModal_ = false;
      if (!dialog.hasAttribute("role")) dialog.setAttribute("role", "dialog");
      dialog.show = this.show.bind(this);
      dialog.showModal = this.showModal.bind(this);
      dialog.close = this.close.bind(this);
      if (!("returnValue" in dialog)) dialog.returnValue = "";

      if ("MutationObserver" in window) {
        var mo = new MutationObserver(this.maybeHideModal.bind(this));
        mo.observe(dialog, {
          attributes: true,
          attributeFilter: ["open"]
        });
      } else {
        var removed = false;

        var cb = function () {
          removed ? this.downgradeModal() : this.maybeHideModal();
          removed = false;
        }.bind(this);

        var timeout;

        var delayModel = function (ev) {
          if (ev.target !== dialog) return;
          var cand = "DOMNodeRemoved";
          removed |= ev.type.substr(0, cand.length) === cand;
          window.clearTimeout(timeout);
          timeout = window.setTimeout(cb, 0);
        };

        ["DOMAttrModified", "DOMNodeRemoved", "DOMNodeRemovedFromDocument"].forEach(function (name) {
          dialog.addEventListener(name, delayModel);
        });
      }

      Object.defineProperty(dialog, "open", {
        set: this.setOpen.bind(this),
        get: dialog.hasAttribute.bind(dialog, "open")
      });
      this.backdrop_ = document.createElement("div");
      this.backdrop_.className = "backdrop";
      this.backdrop_.addEventListener("click", this.backdropClick_.bind(this));
    }

    dialogPolyfillInfo.prototype = {
      get dialog() {
        return this.dialog_;
      },

      maybeHideModal: function () {
        if (this.dialog_.hasAttribute("open") && document.body.contains(this.dialog_)) return;
        this.downgradeModal();
      },
      downgradeModal: function () {
        if (!this.openAsModal_) return;
        this.openAsModal_ = false;
        this.dialog_.style.zIndex = "";

        if (this.replacedStyleTop_) {
          this.dialog_.style.top = "";
          this.replacedStyleTop_ = false;
        }

        this.backdrop_.parentNode && this.backdrop_.parentNode.removeChild(this.backdrop_);
        dialogPolyfill.dm.removeDialog(this);
      },
      setOpen: function (value) {
        if (value) this.dialog_.hasAttribute("open") || this.dialog_.setAttribute("open", "");else {
          this.dialog_.removeAttribute("open");
          this.maybeHideModal();
        }
      },
      backdropClick_: function (e) {
        if (!this.dialog_.hasAttribute("tabindex")) {
          var fake = document.createElement("div");
          this.dialog_.insertBefore(fake, this.dialog_.firstChild);
          fake.tabIndex = -1;
          fake.focus();
          this.dialog_.removeChild(fake);
        } else this.dialog_.focus();

        var redirectedEvent = document.createEvent("MouseEvents");
        redirectedEvent.initMouseEvent(e.type, e.bubbles, e.cancelable, window, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
        this.dialog_.dispatchEvent(redirectedEvent);
        e.stopPropagation();
      },
      focus_: function () {
        var target = this.dialog_.querySelector("[autofocus]:not([disabled])");
        if (!target && this.dialog_.tabIndex >= 0) target = this.dialog_;

        if (!target) {
          var opts = ["button", "input", "keygen", "select", "textarea"];
          var query = opts.map(function (el) {
            return el + ":not([disabled])";
          });
          query.push('[tabindex]:not([disabled]):not([tabindex=""])');
          target = this.dialog_.querySelector(query.join(", "));
        }

        safeBlur(document.activeElement);
        target && target.focus();
      },
      updateZIndex: function (dialogZ, backdropZ) {
        if (dialogZ < backdropZ) throw new Error("dialogZ should never be < backdropZ");
        this.dialog_.style.zIndex = dialogZ;
        this.backdrop_.style.zIndex = backdropZ;
      },
      show: function () {
        if (!this.dialog_.open) {
          this.setOpen(true);
          this.focus_();
        }
      },
      showModal: function () {
        if (this.dialog_.hasAttribute("open")) throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");
        if (!document.body.contains(this.dialog_)) throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");
        if (!dialogPolyfill.dm.pushDialog(this)) throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");
        if (createsStackingContext(this.dialog_.parentElement)) console.warn("A dialog is being shown inside a stacking context. " + "This may cause it to be unusable. For more information, see this link: " + "https://github.com/GoogleChrome/dialog-polyfill/#stacking-context");
        this.setOpen(true);
        this.openAsModal_ = true;

        if (dialogPolyfill.needsCentering(this.dialog_)) {
          dialogPolyfill.reposition(this.dialog_);
          this.replacedStyleTop_ = true;
        } else this.replacedStyleTop_ = false;

        this.dialog_.parentNode.insertBefore(this.backdrop_, this.dialog_.nextSibling);
        this.focus_();
      },
      close: function (opt_returnValue) {
        if (!this.dialog_.hasAttribute("open")) throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");
        this.setOpen(false);
        if (opt_returnValue !== undefined) this.dialog_.returnValue = opt_returnValue;
        var closeEvent = new supportCustomEvent("close", {
          bubbles: false,
          cancelable: false
        });
        this.dialog_.dispatchEvent(closeEvent);
      }
    };
    var dialogPolyfill = {};

    dialogPolyfill.reposition = function (element) {
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      var topValue = scrollTop + (window.innerHeight - element.offsetHeight) / 2;
      element.style.top = Math.max(scrollTop, topValue) + "px";
    };

    dialogPolyfill.isInlinePositionSetByStylesheet = function (element) {
      for (var i = 0; i < document.styleSheets.length; ++i) {
        var styleSheet = document.styleSheets[i];
        var cssRules = null;

        try {
          cssRules = styleSheet.cssRules;
        } catch (e) {}

        if (!cssRules) continue;

        for (var j = 0; j < cssRules.length; ++j) {
          var rule = cssRules[j];
          var selectedNodes = null;

          try {
            selectedNodes = document.querySelectorAll(rule.selectorText);
          } catch (e$0) {}

          if (!selectedNodes || !inNodeList(selectedNodes, element)) continue;
          var cssTop = rule.style.getPropertyValue("top");
          var cssBottom = rule.style.getPropertyValue("bottom");
          if (cssTop && cssTop !== "auto" || cssBottom && cssBottom !== "auto") return true;
        }
      }

      return false;
    };

    dialogPolyfill.needsCentering = function (dialog) {
      var computedStyle = window.getComputedStyle(dialog);
      if (computedStyle.position !== "absolute") return false;
      if (dialog.style.top !== "auto" && dialog.style.top !== "" || dialog.style.bottom !== "auto" && dialog.style.bottom !== "") return false;
      return !dialogPolyfill.isInlinePositionSetByStylesheet(dialog);
    };

    dialogPolyfill.forceRegisterDialog = function (element) {
      if (window.HTMLDialogElement || element.showModal) console.warn("This browser already supports <dialog>, the polyfill " + "may not work correctly", element);
      if (element.localName !== "dialog") throw new Error("Failed to register dialog: The element is not a dialog.");
      new dialogPolyfillInfo(element);
    };

    dialogPolyfill.registerDialog = function (element) {
      if (!element.showModal) dialogPolyfill.forceRegisterDialog(element);
    };

    dialogPolyfill.DialogManager = function () {
      this.pendingDialogStack = [];
      var checkDOM = this.checkDOM_.bind(this);
      this.overlay = document.createElement("div");
      this.overlay.className = "_dialog_overlay";
      this.overlay.addEventListener("click", function (e) {
        this.forwardTab_ = undefined;
        e.stopPropagation();
        checkDOM([]);
      }.bind(this));
      this.handleKey_ = this.handleKey_.bind(this);
      this.handleFocus_ = this.handleFocus_.bind(this);
      this.zIndexLow_ = 1E5;
      this.zIndexHigh_ = 1E5 + 150;
      this.forwardTab_ = undefined;
      if ("MutationObserver" in window) this.mo_ = new MutationObserver(function (records) {
        var removed = [];
        records.forEach(function (rec) {
          for (var i = 0, c; c = rec.removedNodes[i]; ++i) {
            if (!(c instanceof Element)) continue;else if (c.localName === "dialog") removed.push(c);
            removed = removed.concat(c.querySelectorAll("dialog"));
          }
        });
        removed.length && checkDOM(removed);
      });
    };

    dialogPolyfill.DialogManager.prototype.blockDocument = function () {
      document.documentElement.addEventListener("focus", this.handleFocus_, true);
      document.addEventListener("keydown", this.handleKey_);
      this.mo_ && this.mo_.observe(document, {
        childList: true,
        subtree: true
      });
    };

    dialogPolyfill.DialogManager.prototype.unblockDocument = function () {
      document.documentElement.removeEventListener("focus", this.handleFocus_, true);
      document.removeEventListener("keydown", this.handleKey_);
      this.mo_ && this.mo_.disconnect();
    };

    dialogPolyfill.DialogManager.prototype.updateStacking = function () {
      var zIndex = this.zIndexHigh_;

      for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
        dpi.updateZIndex(--zIndex, --zIndex);
        if (i === 0) this.overlay.style.zIndex = --zIndex;
      }

      var last = this.pendingDialogStack[0];

      if (last) {
        var p = last.dialog.parentNode || document.body;
        p.appendChild(this.overlay);
      } else if (this.overlay.parentNode) this.overlay.parentNode.removeChild(this.overlay);
    };

    dialogPolyfill.DialogManager.prototype.containedByTopDialog_ = function (candidate) {
      while (candidate = findNearestDialog(candidate)) {
        for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) if (dpi.dialog === candidate) return i === 0;

        candidate = candidate.parentElement;
      }

      return false;
    };

    dialogPolyfill.DialogManager.prototype.handleFocus_ = function (event) {
      if (this.containedByTopDialog_(event.target)) return;
      event.preventDefault();
      event.stopPropagation();
      safeBlur(event.target);
      if (this.forwardTab_ === undefined) return;
      var dpi = this.pendingDialogStack[0];
      var dialog = dpi.dialog;
      var position = dialog.compareDocumentPosition(event.target);
      if (position & Node.DOCUMENT_POSITION_PRECEDING) {
        if (this.forwardTab_) dpi.focus_();else document.documentElement.focus();
      } else ;
      return false;
    };

    dialogPolyfill.DialogManager.prototype.handleKey_ = function (event) {
      this.forwardTab_ = undefined;

      if (event.keyCode === 27) {
        event.preventDefault();
        event.stopPropagation();
        var cancelEvent = new supportCustomEvent("cancel", {
          bubbles: false,
          cancelable: true
        });
        var dpi = this.pendingDialogStack[0];
        if (dpi && dpi.dialog.dispatchEvent(cancelEvent)) dpi.dialog.close();
      } else if (event.keyCode === 9) this.forwardTab_ = !event.shiftKey;
    };

    dialogPolyfill.DialogManager.prototype.checkDOM_ = function (removed) {
      var clone = this.pendingDialogStack.slice();
      clone.forEach(function (dpi) {
        if (removed.indexOf(dpi.dialog) !== -1) dpi.downgradeModal();else dpi.maybeHideModal();
      });
    };

    dialogPolyfill.DialogManager.prototype.pushDialog = function (dpi) {
      var allowed = (this.zIndexHigh_ - this.zIndexLow_) / 2 - 1;
      if (this.pendingDialogStack.length >= allowed) return false;
      if (this.pendingDialogStack.unshift(dpi) === 1) this.blockDocument();
      this.updateStacking();
      return true;
    };

    dialogPolyfill.DialogManager.prototype.removeDialog = function (dpi) {
      var index = this.pendingDialogStack.indexOf(dpi);
      if (index === -1) return;
      this.pendingDialogStack.splice(index, 1);
      if (this.pendingDialogStack.length === 0) this.unblockDocument();
      this.updateStacking();
    };

    dialogPolyfill.dm = new dialogPolyfill.DialogManager();
    dialogPolyfill.formSubmitter = null;
    dialogPolyfill.useValue = null;

    if (window.HTMLDialogElement === undefined) {
      var testForm = document.createElement("form");
      testForm.setAttribute("method", "dialog");

      if (testForm.method !== "dialog") {
        var methodDescriptor = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, "method");

        if (methodDescriptor) {
          var realGet = methodDescriptor.get;

          methodDescriptor.get = function () {
            if (isFormMethodDialog(this)) return "dialog";
            return realGet.call(this);
          };

          var realSet = methodDescriptor.set;

          methodDescriptor.set = function (v) {
            if (typeof v === "string" && v.toLowerCase() === "dialog") return this.setAttribute("method", v);
            return realSet.call(this, v);
          };

          Object.defineProperty(HTMLFormElement.prototype, "method", methodDescriptor);
        }
      }

      document.addEventListener("click", function (ev) {
        dialogPolyfill.formSubmitter = null;
        dialogPolyfill.useValue = null;
        if (ev.defaultPrevented) return;
        var target = ev.target;
        if (!target || !isFormMethodDialog(target.form)) return;
        var valid = target.type === "submit" && ["button", "input"].indexOf(target.localName) > -1;

        if (!valid) {
          if (!(target.localName === "input" && target.type === "image")) return;
          dialogPolyfill.useValue = ev.offsetX + "," + ev.offsetY;
        }

        var dialog = findNearestDialog(target);
        if (!dialog) return;
        dialogPolyfill.formSubmitter = target;
      }, false);
      var nativeFormSubmit = HTMLFormElement.prototype.submit;

      var replacementFormSubmit = function () {
        if (!isFormMethodDialog(this)) return nativeFormSubmit.call(this);
        var dialog = findNearestDialog(this);
        dialog && dialog.close();
      };

      HTMLFormElement.prototype.submit = replacementFormSubmit;
      document.addEventListener("submit", function (ev) {
        var form = ev.target;
        if (!isFormMethodDialog(form)) return;
        ev.preventDefault();
        var dialog = findNearestDialog(form);
        if (!dialog) return;
        var s = dialogPolyfill.formSubmitter;
        if (s && s.form === form) dialog.close(dialogPolyfill.useValue || s.value);else dialog.close();
        dialogPolyfill.formSubmitter = null;
      }, true);
    }

    dialogPolyfill["forceRegisterDialog"] = dialogPolyfill.forceRegisterDialog;
    dialogPolyfill["registerDialog"] = dialogPolyfill.registerDialog;
    if (typeof define === "function" && "amd" in define) define(function () {
      return dialogPolyfill;
    });else if (typeof module === "object" && typeof module["exports"] === "object") module["exports"] = dialogPolyfill;else window["dialogPolyfill"] = dialogPolyfill;
  })();
  /*
  Copyright 2015 Google Inc. All Rights Reserved.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */


  var componentHandler = {
    upgradeDom: function (optJsClass, optCssClass) {},
    upgradeElement: function (element, optJsClass) {},
    upgradeElements: function (elements) {},
    upgradeAllRegistered: function () {},
    registerUpgradedCallback: function (jsClass, callback) {},
    register: function (config) {},
    downgradeElements: function (nodes) {}
  };

  componentHandler = function () {
    var registeredComponents_ = [];
    var createdComponents_ = [];
    var componentConfigProperty_ = "mdlComponentConfigInternal_";

    function findRegisteredClass_(name, optReplace) {
      for (var i = 0; i < registeredComponents_.length; i++) if (registeredComponents_[i].className === name) {
        if (typeof optReplace !== "undefined") registeredComponents_[i] = optReplace;
        return registeredComponents_[i];
      }

      return false;
    }

    function getUpgradedListOfElement_(element) {
      var dataUpgraded = element.getAttribute("data-upgraded");
      return dataUpgraded === null ? [""] : dataUpgraded.split(",");
    }

    function isElementUpgraded_(element, jsClass) {
      var upgradedList = getUpgradedListOfElement_(element);
      return upgradedList.indexOf(jsClass) !== -1;
    }

    function createEvent_(eventType, bubbles, cancelable) {
      if ("CustomEvent" in window && typeof window.CustomEvent === "function") return new CustomEvent(eventType, {
        bubbles: bubbles,
        cancelable: cancelable
      });else {
        var ev = document.createEvent("Events");
        ev.initEvent(eventType, bubbles, cancelable);
        return ev;
      }
    }

    function upgradeDomInternal(optJsClass, optCssClass) {
      if (typeof optJsClass === "undefined" && typeof optCssClass === "undefined") for (var i = 0; i < registeredComponents_.length; i++) upgradeDomInternal(registeredComponents_[i].className, registeredComponents_[i].cssClass);else {
        var jsClass = optJsClass;

        if (typeof optCssClass === "undefined") {
          var registeredClass = findRegisteredClass_(jsClass);
          if (registeredClass) optCssClass = registeredClass.cssClass;
        }

        var elements = document.querySelectorAll("." + optCssClass);

        for (var n = 0; n < elements.length; n++) upgradeElementInternal(elements[n], jsClass);
      }
    }

    function upgradeElementInternal(element, optJsClass) {
      if (!(typeof element === "object" && element instanceof Element)) throw new Error("Invalid argument provided to upgrade MDL element.");
      var upgradingEv = createEvent_("mdl-componentupgrading", true, true);
      element.dispatchEvent(upgradingEv);
      if (upgradingEv.defaultPrevented) return;
      var upgradedList = getUpgradedListOfElement_(element);
      var classesToUpgrade = [];

      if (!optJsClass) {
        var classList = element.classList;
        registeredComponents_.forEach(function (component) {
          if (classList.contains(component.cssClass) && classesToUpgrade.indexOf(component) === -1 && !isElementUpgraded_(element, component.className)) classesToUpgrade.push(component);
        });
      } else if (!isElementUpgraded_(element, optJsClass)) classesToUpgrade.push(findRegisteredClass_(optJsClass));

      for (var i = 0, n = classesToUpgrade.length, registeredClass; i < n; i++) {
        registeredClass = classesToUpgrade[i];

        if (registeredClass) {
          upgradedList.push(registeredClass.className);
          element.setAttribute("data-upgraded", upgradedList.join(","));
          var instance = new registeredClass.classConstructor(element);
          instance[componentConfigProperty_] = registeredClass;
          createdComponents_.push(instance);

          for (var j = 0, m = registeredClass.callbacks.length; j < m; j++) registeredClass.callbacks[j](element);

          if (registeredClass.widget) element[registeredClass.className] = instance;
        } else throw new Error("Unable to find a registered component for the given class.");

        var upgradedEv = createEvent_("mdl-componentupgraded", true, false);
        element.dispatchEvent(upgradedEv);
      }
    }

    function upgradeElementsInternal(elements) {
      if (!Array.isArray(elements)) if (elements instanceof Element) elements = [elements];else elements = Array.prototype.slice.call(elements);

      for (var i = 0, n = elements.length, element; i < n; i++) {
        element = elements[i];

        if (element instanceof HTMLElement) {
          upgradeElementInternal(element);
          if (element.children.length > 0) upgradeElementsInternal(element.children);
        }
      }
    }

    function registerInternal(config) {
      var widgetMissing = typeof config.widget === "undefined" && typeof config["widget"] === "undefined";
      var widget = true;
      if (!widgetMissing) widget = config.widget || config["widget"];
      var newConfig = {
        classConstructor: config.constructor || config["constructor"],
        className: config.classAsString || config["classAsString"],
        cssClass: config.cssClass || config["cssClass"],
        widget: widget,
        callbacks: []
      };
      registeredComponents_.forEach(function (item) {
        if (item.cssClass === newConfig.cssClass) throw new Error("The provided cssClass has already been registered: " + item.cssClass);
        if (item.className === newConfig.className) throw new Error("The provided className has already been registered");
      });
      if (config.constructor.prototype.hasOwnProperty(componentConfigProperty_)) throw new Error("MDL component classes must not have " + componentConfigProperty_ + " defined as a property.");
      var found = findRegisteredClass_(config.classAsString, newConfig);
      if (!found) registeredComponents_.push(newConfig);
    }

    function registerUpgradedCallbackInternal(jsClass, callback) {
      var regClass = findRegisteredClass_(jsClass);
      if (regClass) regClass.callbacks.push(callback);
    }

    function upgradeAllRegisteredInternal() {
      for (var n = 0; n < registeredComponents_.length; n++) upgradeDomInternal(registeredComponents_[n].className);
    }

    function deconstructComponentInternal(component) {
      if (component) {
        var componentIndex = createdComponents_.indexOf(component);
        createdComponents_.splice(componentIndex, 1);
        var upgrades = component.element_.getAttribute("data-upgraded").split(",");
        var componentPlace = upgrades.indexOf(component[componentConfigProperty_].classAsString);
        upgrades.splice(componentPlace, 1);
        component.element_.setAttribute("data-upgraded", upgrades.join(","));
        var ev = createEvent_("mdl-componentdowngraded", true, false);
        component.element_.dispatchEvent(ev);
      }
    }

    function downgradeNodesInternal(nodes) {
      var downgradeNode = function (node) {
        createdComponents_.filter(function (item) {
          return item.element_ === node;
        }).forEach(deconstructComponentInternal);
      };

      if (nodes instanceof Array || nodes instanceof NodeList) for (var n = 0; n < nodes.length; n++) downgradeNode(nodes[n]);else if (nodes instanceof Node) downgradeNode(nodes);else throw new Error("Invalid argument provided to downgrade MDL nodes.");
    }

    return {
      upgradeDom: upgradeDomInternal,
      upgradeElement: upgradeElementInternal,
      upgradeElements: upgradeElementsInternal,
      upgradeAllRegistered: upgradeAllRegisteredInternal,
      registerUpgradedCallback: registerUpgradedCallbackInternal,
      register: registerInternal,
      downgradeElements: downgradeNodesInternal
    };
  }();

  componentHandler.ComponentConfigPublic;
  componentHandler.ComponentConfig;
  componentHandler.Component;
  componentHandler["upgradeDom"] = componentHandler.upgradeDom;
  componentHandler["upgradeElement"] = componentHandler.upgradeElement;
  componentHandler["upgradeElements"] = componentHandler.upgradeElements;
  componentHandler["upgradeAllRegistered"] = componentHandler.upgradeAllRegistered;
  componentHandler["registerUpgradedCallback"] = componentHandler.registerUpgradedCallback;
  componentHandler["register"] = componentHandler.register;
  componentHandler["downgradeElements"] = componentHandler.downgradeElements;
  window.componentHandler = componentHandler;
  window["componentHandler"] = componentHandler;
  window.addEventListener("load", function () {
    if ("classList" in document.createElement("div") && "querySelector" in document && "addEventListener" in window && Array.prototype.forEach) {
      document.documentElement.classList.add("mdl-js");
      componentHandler.upgradeAllRegistered();
    } else {
      componentHandler.upgradeElement = function () {};

      componentHandler.register = function () {};
    }
  });

  (function () {
    var MaterialButton = function MaterialButton(element) {
      this.element_ = element;
      this.init();
    };

    window["MaterialButton"] = MaterialButton;
    MaterialButton.prototype.Constant_ = {};
    MaterialButton.prototype.CssClasses_ = {
      RIPPLE_EFFECT: "mdl-js-ripple-effect",
      RIPPLE_CONTAINER: "mdl-button__ripple-container",
      RIPPLE: "mdl-ripple"
    };

    MaterialButton.prototype.blurHandler_ = function (event) {
      if (event) this.element_.blur();
    };

    MaterialButton.prototype.disable = function () {
      this.element_.disabled = true;
    };

    MaterialButton.prototype["disable"] = MaterialButton.prototype.disable;

    MaterialButton.prototype.enable = function () {
      this.element_.disabled = false;
    };

    MaterialButton.prototype["enable"] = MaterialButton.prototype.enable;

    MaterialButton.prototype.init = function () {
      if (this.element_) {
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
          var rippleContainer = document.createElement("span");
          rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
          this.rippleElement_ = document.createElement("span");
          this.rippleElement_.classList.add(this.CssClasses_.RIPPLE);
          rippleContainer.appendChild(this.rippleElement_);
          this.boundRippleBlurHandler = this.blurHandler_.bind(this);
          this.rippleElement_.addEventListener("mouseup", this.boundRippleBlurHandler);
          this.element_.appendChild(rippleContainer);
        }

        this.boundButtonBlurHandler = this.blurHandler_.bind(this);
        this.element_.addEventListener("mouseup", this.boundButtonBlurHandler);
        this.element_.addEventListener("mouseleave", this.boundButtonBlurHandler);
      }
    };

    componentHandler.register({
      constructor: MaterialButton,
      classAsString: "MaterialButton",
      cssClass: "mdl-js-button",
      widget: true
    });
  })();

  (function () {
    var MaterialProgress = function MaterialProgress(element) {
      this.element_ = element;
      this.init();
    };

    window["MaterialProgress"] = MaterialProgress;
    MaterialProgress.prototype.Constant_ = {};
    MaterialProgress.prototype.CssClasses_ = {
      INDETERMINATE_CLASS: "mdl-progress__indeterminate"
    };

    MaterialProgress.prototype.setProgress = function (p) {
      if (this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)) return;
      this.progressbar_.style.width = p + "%";
    };

    MaterialProgress.prototype["setProgress"] = MaterialProgress.prototype.setProgress;

    MaterialProgress.prototype.setBuffer = function (p) {
      this.bufferbar_.style.width = p + "%";
      this.auxbar_.style.width = 100 - p + "%";
    };

    MaterialProgress.prototype["setBuffer"] = MaterialProgress.prototype.setBuffer;

    MaterialProgress.prototype.init = function () {
      if (this.element_) {
        var el = document.createElement("div");
        el.className = "progressbar bar bar1";
        this.element_.appendChild(el);
        this.progressbar_ = el;
        el = document.createElement("div");
        el.className = "bufferbar bar bar2";
        this.element_.appendChild(el);
        this.bufferbar_ = el;
        el = document.createElement("div");
        el.className = "auxbar bar bar3";
        this.element_.appendChild(el);
        this.auxbar_ = el;
        this.progressbar_.style.width = "0%";
        this.bufferbar_.style.width = "100%";
        this.auxbar_.style.width = "0%";
        this.element_.classList.add("is-upgraded");
      }
    };

    componentHandler.register({
      constructor: MaterialProgress,
      classAsString: "MaterialProgress",
      cssClass: "mdl-js-progress",
      widget: true
    });
  })();

  (function () {
    var MaterialSpinner = function MaterialSpinner(element) {
      this.element_ = element;
      this.init();
    };

    window["MaterialSpinner"] = MaterialSpinner;
    MaterialSpinner.prototype.Constant_ = {
      MDL_SPINNER_LAYER_COUNT: 4
    };
    MaterialSpinner.prototype.CssClasses_ = {
      MDL_SPINNER_LAYER: "mdl-spinner__layer",
      MDL_SPINNER_CIRCLE_CLIPPER: "mdl-spinner__circle-clipper",
      MDL_SPINNER_CIRCLE: "mdl-spinner__circle",
      MDL_SPINNER_GAP_PATCH: "mdl-spinner__gap-patch",
      MDL_SPINNER_LEFT: "mdl-spinner__left",
      MDL_SPINNER_RIGHT: "mdl-spinner__right"
    };

    MaterialSpinner.prototype.createLayer = function (index) {
      var layer = document.createElement("div");
      layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER);
      layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER + "-" + index);
      var leftClipper = document.createElement("div");
      leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);
      leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);
      var gapPatch = document.createElement("div");
      gapPatch.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);
      var rightClipper = document.createElement("div");
      rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);
      rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);
      var circleOwners = [leftClipper, gapPatch, rightClipper];

      for (var i = 0; i < circleOwners.length; i++) {
        var circle = document.createElement("div");
        circle.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE);
        circleOwners[i].appendChild(circle);
      }

      layer.appendChild(leftClipper);
      layer.appendChild(gapPatch);
      layer.appendChild(rightClipper);
      this.element_.appendChild(layer);
    };

    MaterialSpinner.prototype["createLayer"] = MaterialSpinner.prototype.createLayer;

    MaterialSpinner.prototype.stop = function () {
      this.element_.classList.remove("is-active");
    };

    MaterialSpinner.prototype["stop"] = MaterialSpinner.prototype.stop;

    MaterialSpinner.prototype.start = function () {
      this.element_.classList.add("is-active");
    };

    MaterialSpinner.prototype["start"] = MaterialSpinner.prototype.start;

    MaterialSpinner.prototype.init = function () {
      if (this.element_) {
        for (var i = 1; i <= this.Constant_.MDL_SPINNER_LAYER_COUNT; i++) this.createLayer(i);

        this.element_.classList.add("is-upgraded");
      }
    };

    componentHandler.register({
      constructor: MaterialSpinner,
      classAsString: "MaterialSpinner",
      cssClass: "mdl-js-spinner",
      widget: true
    });
  })();

  (function () {
    var MaterialTextfield = function MaterialTextfield(element) {
      this.element_ = element;
      this.maxRows = this.Constant_.NO_MAX_ROWS;
      this.init();
    };

    window["MaterialTextfield"] = MaterialTextfield;
    MaterialTextfield.prototype.Constant_ = {
      NO_MAX_ROWS: -1,
      MAX_ROWS_ATTRIBUTE: "maxrows"
    };
    MaterialTextfield.prototype.CssClasses_ = {
      LABEL: "mdl-textfield__label",
      INPUT: "mdl-textfield__input",
      IS_DIRTY: "is-dirty",
      IS_FOCUSED: "is-focused",
      IS_DISABLED: "is-disabled",
      IS_INVALID: "is-invalid",
      IS_UPGRADED: "is-upgraded",
      HAS_PLACEHOLDER: "has-placeholder"
    };

    MaterialTextfield.prototype.onKeyDown_ = function (event) {
      var currentRowCount = event.target.value.split("\n").length;
      if (event.keyCode === 13) if (currentRowCount >= this.maxRows) event.preventDefault();
    };

    MaterialTextfield.prototype.onFocus_ = function (event) {
      this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
    };

    MaterialTextfield.prototype.onBlur_ = function (event) {
      this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
    };

    MaterialTextfield.prototype.onReset_ = function (event) {
      this.updateClasses_();
    };

    MaterialTextfield.prototype.updateClasses_ = function () {
      this.checkDisabled();
      this.checkValidity();
      this.checkDirty();
      this.checkFocus();
    };

    MaterialTextfield.prototype.checkDisabled = function () {
      if (this.input_.disabled) this.element_.classList.add(this.CssClasses_.IS_DISABLED);else this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
    };

    MaterialTextfield.prototype["checkDisabled"] = MaterialTextfield.prototype.checkDisabled;

    MaterialTextfield.prototype.checkFocus = function () {
      if (Boolean(this.element_.querySelector(":focus"))) this.element_.classList.add(this.CssClasses_.IS_FOCUSED);else this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
    };

    MaterialTextfield.prototype["checkFocus"] = MaterialTextfield.prototype.checkFocus;

    MaterialTextfield.prototype.checkValidity = function () {
      if (this.input_.validity) if (this.input_.validity.valid) this.element_.classList.remove(this.CssClasses_.IS_INVALID);else this.element_.classList.add(this.CssClasses_.IS_INVALID);
    };

    MaterialTextfield.prototype["checkValidity"] = MaterialTextfield.prototype.checkValidity;

    MaterialTextfield.prototype.checkDirty = function () {
      if (this.input_.value && this.input_.value.length > 0) this.element_.classList.add(this.CssClasses_.IS_DIRTY);else this.element_.classList.remove(this.CssClasses_.IS_DIRTY);
    };

    MaterialTextfield.prototype["checkDirty"] = MaterialTextfield.prototype.checkDirty;

    MaterialTextfield.prototype.disable = function () {
      this.input_.disabled = true;
      this.updateClasses_();
    };

    MaterialTextfield.prototype["disable"] = MaterialTextfield.prototype.disable;

    MaterialTextfield.prototype.enable = function () {
      this.input_.disabled = false;
      this.updateClasses_();
    };

    MaterialTextfield.prototype["enable"] = MaterialTextfield.prototype.enable;

    MaterialTextfield.prototype.change = function (value) {
      this.input_.value = value || "";
      this.updateClasses_();
    };

    MaterialTextfield.prototype["change"] = MaterialTextfield.prototype.change;

    MaterialTextfield.prototype.init = function () {
      if (this.element_) {
        this.label_ = this.element_.querySelector("." + this.CssClasses_.LABEL);
        this.input_ = this.element_.querySelector("." + this.CssClasses_.INPUT);

        if (this.input_) {
          if (this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)) {
            this.maxRows = parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE), 10);
            if (isNaN(this.maxRows)) this.maxRows = this.Constant_.NO_MAX_ROWS;
          }

          if (this.input_.hasAttribute("placeholder")) this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER);
          this.boundUpdateClassesHandler = this.updateClasses_.bind(this);
          this.boundFocusHandler = this.onFocus_.bind(this);
          this.boundBlurHandler = this.onBlur_.bind(this);
          this.boundResetHandler = this.onReset_.bind(this);
          this.input_.addEventListener("input", this.boundUpdateClassesHandler);
          this.input_.addEventListener("focus", this.boundFocusHandler);
          this.input_.addEventListener("blur", this.boundBlurHandler);
          this.input_.addEventListener("reset", this.boundResetHandler);

          if (this.maxRows !== this.Constant_.NO_MAX_ROWS) {
            this.boundKeyDownHandler = this.onKeyDown_.bind(this);
            this.input_.addEventListener("keydown", this.boundKeyDownHandler);
          }

          var invalid = this.element_.classList.contains(this.CssClasses_.IS_INVALID);
          this.updateClasses_();
          this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
          if (invalid) this.element_.classList.add(this.CssClasses_.IS_INVALID);

          if (this.input_.hasAttribute("autofocus")) {
            this.element_.focus();
            this.checkFocus();
          }
        }
      }
    };

    componentHandler.register({
      constructor: MaterialTextfield,
      classAsString: "MaterialTextfield",
      cssClass: "mdl-js-textfield",
      widget: true
    });
  })();

  (function () {
    var k,
        aa = "function" == typeof Object.create ? Object.create : function (a) {
      function b() {}

      b.prototype = a;
      return new b();
    },
        ba;
    if ("function" == typeof Object.setPrototypeOf) ba = Object.setPrototypeOf;else {
      var ca;

      a: {
        var da = {
          yb: !0
        },
            ea = {};

        try {
          ea.__proto__ = da;
          ca = ea.yb;
          break a;
        } catch (a) {}

        ca = !1;
      }

      ba = ca ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      } : null;
    }
    var fa = ba;

    function m(a, b) {
      a.prototype = aa(b.prototype);
      a.prototype.constructor = a;
      if (fa) fa(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = Object.getOwnPropertyDescriptor(b, c);
        d && Object.defineProperty(a, c, d);
      } else a[c] = b[c];
      a.L = b.prototype;
    }

    var ha = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
      a != Array.prototype && a != Object.prototype && (a[b] = c.value);
    },
        ia = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function ja(a, b) {
      if (b) {
        var c = ia;
        a = a.split(".");

        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          e in c || (c[e] = {});
          c = c[e];
        }

        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && ha(c, a, {
          configurable: !0,
          writable: !0,
          value: b
        });
      }
    }

    ja("Object.is", function (a) {
      return a ? a : function (b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
      };
    });
    ja("Array.prototype.includes", function (a) {
      return a ? a : function (b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;

        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
          var f = d[c];
          if (f === b || Object.is(f, b)) return !0;
        }

        return !1;
      };
    });
    var n = this;

    function ka(a) {
      return void 0 !== a;
    }

    function q(a) {
      return "string" == typeof a;
    }

    var la = /^[\w+/_-]+[=]{0,2}$/,
        ma = null;

    function na() {}

    function oa(a) {
      a.V = void 0;

      a.Xa = function () {
        return a.V ? a.V : a.V = new a();
      };
    }

    function pa(a) {
      var b = typeof a;
      if ("object" == b) {
        if (a) {
          if (a instanceof Array) return "array";
          if (a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if ("[object Window]" == c) return "object";
          if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
          if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
        } else return "null";
      } else if ("function" == b && "undefined" == typeof a.call) return "object";
      return b;
    }

    function qa(a) {
      return "array" == pa(a);
    }

    function ra(a) {
      var b = pa(a);
      return "array" == b || "object" == b && "number" == typeof a.length;
    }

    function sa(a) {
      return "function" == pa(a);
    }

    function ta(a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b;
    }

    var ua = "closure_uid_" + (1E9 * Math.random() >>> 0),
        va = 0;

    function wa(a, b, c) {
      return a.call.apply(a.bind, arguments);
    }

    function xa(a, b, c) {
      if (!a) throw Error();

      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }

      return function () {
        return a.apply(b, arguments);
      };
    }

    function t(a, b, c) {
      Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? t = wa : t = xa;
      return t.apply(null, arguments);
    }

    function ya(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    }

    function u(a, b) {
      for (var c in b) a[c] = b[c];
    }

    var za = Date.now || function () {
      return +new Date();
    };

    function v(a, b) {
      a = a.split(".");
      var c = n;
      a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);

      for (var d; a.length && (d = a.shift());) !a.length && ka(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {};
    }

    function w(a, b) {
      function c() {}

      c.prototype = b.prototype;
      a.L = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;

      a.uc = function (d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];

        return b.prototype[e].apply(d, g);
      };
    }

    function Ba(a) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, Ba);else {
        var b = Error().stack;
        b && (this.stack = b);
      }
      a && (this.message = String(a));
    }

    w(Ba, Error);
    Ba.prototype.name = "CustomError";
    var Ca;

    function Da(a, b) {
      a = a.split("%s");

      for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");

      Ba.call(this, c + a[d]);
    }

    w(Da, Ba);
    Da.prototype.name = "AssertionError";

    function Fa(a, b) {
      throw new Da("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    }

    var Ga = Array.prototype.indexOf ? function (a, b) {
      return Array.prototype.indexOf.call(a, b, void 0);
    } : function (a, b) {
      if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, 0) : -1;

      for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;

      return -1;
    },
        Ha = Array.prototype.forEach ? function (a, b, c) {
      Array.prototype.forEach.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
    };

    function Ia(a, b) {
      for (var c = q(a) ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a);
    }

    var Ja = Array.prototype.filter ? function (a, b) {
      return Array.prototype.filter.call(a, b, void 0);
    } : function (a, b) {
      for (var c = a.length, d = [], e = 0, f = q(a) ? a.split("") : a, g = 0; g < c; g++) if (g in f) {
        var h = f[g];
        b.call(void 0, h, g, a) && (d[e++] = h);
      }

      return d;
    },
        Ka = Array.prototype.map ? function (a, b) {
      return Array.prototype.map.call(a, b, void 0);
    } : function (a, b) {
      for (var c = a.length, d = Array(c), e = q(a) ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));

      return d;
    },
        La = Array.prototype.some ? function (a, b) {
      return Array.prototype.some.call(a, b, void 0);
    } : function (a, b) {
      for (var c = a.length, d = q(a) ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return !0;

      return !1;
    };

    function Ma(a, b, c) {
      for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return f;

      return -1;
    }

    function Na(a, b) {
      return 0 <= Ga(a, b);
    }

    function Oa(a, b) {
      b = Ga(a, b);
      var c;
      (c = 0 <= b) && Pa(a, b);
      return c;
    }

    function Pa(a, b) {
      return 1 == Array.prototype.splice.call(a, b, 1).length;
    }

    function Qa(a, b) {
      b = Ma(a, b, void 0);
      0 <= b && Pa(a, b);
    }

    function Ra(a, b) {
      var c = 0;
      Ia(a, function (d, e) {
        b.call(void 0, d, e, a) && Pa(a, e) && c++;
      });
    }

    function Sa(a) {
      return Array.prototype.concat.apply([], arguments);
    }

    function Ta(a) {
      var b = a.length;

      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];

        return c;
      }

      return [];
    }

    function Ua(a, b, c, d) {
      return Array.prototype.splice.apply(a, Va(arguments, 1));
    }

    function Va(a, b, c) {
      return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
    }

    var Wa = String.prototype.trim ? function (a) {
      return a.trim();
    } : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    },
        Xa = /&/g,
        Ya = /</g,
        Za = />/g,
        $a = /"/g,
        ab = /'/g,
        bb = /\x00/g,
        cb = /[\x00&<>"']/;

    function db(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }

    function eb(a) {
      cb.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Xa, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Ya, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Za, "&gt;")), -1 != a.indexOf('"') && (a = a.replace($a, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(ab, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(bb, "&#0;")));
      return a;
    }

    function fb(a, b, c) {
      for (var d in a) b.call(c, a[d], d, a);
    }

    function gb(a) {
      var b = {},
          c;

      for (c in a) b[c] = a[c];

      return b;
    }

    var hb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function ib(a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];

        for (c in d) a[c] = d[c];

        for (var f = 0; f < hb.length; f++) c = hb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    }

    var jb = "StopIteration" in n ? n.StopIteration : {
      message: "StopIteration",
      stack: ""
    };

    function kb() {}

    kb.prototype.next = function () {
      throw jb;
    };

    kb.prototype.ha = function () {
      return this;
    };

    function lb(a) {
      if (a instanceof kb) return a;
      if ("function" == typeof a.ha) return a.ha(!1);

      if (ra(a)) {
        var b = 0,
            c = new kb();

        c.next = function () {
          for (;;) {
            if (b >= a.length) throw jb;
            if (b in a) return a[b++];
            b++;
          }
        };

        return c;
      }

      throw Error("Not implemented");
    }

    function mb(a, b) {
      if (ra(a)) try {
        Ha(a, b, void 0);
      } catch (c) {
        if (c !== jb) throw c;
      } else {
        a = lb(a);

        try {
          for (;;) b.call(void 0, a.next(), void 0, a);
        } catch (c$1) {
          if (c$1 !== jb) throw c$1;
        }
      }
    }

    function nb(a) {
      if (ra(a)) return Ta(a);
      a = lb(a);
      var b = [];
      mb(a, function (c) {
        b.push(c);
      });
      return b;
    }

    function ob(a, b) {
      this.g = {};
      this.a = [];
      this.j = this.h = 0;
      var c = arguments.length;

      if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");

        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
      } else if (a) if (a instanceof ob) for (c = a.ja(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));else for (d in a) this.set(d, a[d]);
    }

    k = ob.prototype;

    k.la = function () {
      pb(this);

      for (var a = [], b = 0; b < this.a.length; b++) a.push(this.g[this.a[b]]);

      return a;
    };

    k.ja = function () {
      pb(this);
      return this.a.concat();
    };

    k.clear = function () {
      this.g = {};
      this.j = this.h = this.a.length = 0;
    };

    function pb(a) {
      if (a.h != a.a.length) {
        for (var b = 0, c = 0; b < a.a.length;) {
          var d = a.a[b];
          qb(a.g, d) && (a.a[c++] = d);
          b++;
        }

        a.a.length = c;
      }

      if (a.h != a.a.length) {
        var e = {};

        for (c = b = 0; b < a.a.length;) d = a.a[b], qb(e, d) || (a.a[c++] = d, e[d] = 1), b++;

        a.a.length = c;
      }
    }

    k.get = function (a, b) {
      return qb(this.g, a) ? this.g[a] : b;
    };

    k.set = function (a, b) {
      qb(this.g, a) || (this.h++, this.a.push(a), this.j++);
      this.g[a] = b;
    };

    k.forEach = function (a, b) {
      for (var c = this.ja(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);
        a.call(b, f, e, this);
      }
    };

    k.ha = function (a) {
      pb(this);
      var b = 0,
          c = this.j,
          d = this,
          e = new kb();

      e.next = function () {
        if (c != d.j) throw Error("The map has changed since the iterator was created");
        if (b >= d.a.length) throw jb;
        var f = d.a[b++];
        return a ? f : d.g[f];
      };

      return e;
    };

    function qb(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }

    var rb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function sb(a, b) {
      if (a) {
        a = a.split("&");

        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
              e = null;

          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];

          b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
        }
      }
    }

    function tb(a, b, c, d) {
      for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
        var f = a.charCodeAt(b - 1);
        if (38 == f || 63 == f) if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
        b += e + 1;
      }

      return -1;
    }

    var ub = /#|$/;

    function vb(a, b) {
      var c = a.search(ub),
          d = tb(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "));
    }

    var wb = /[?&]($|#)/;

    function xb(a, b) {
      this.h = this.B = this.j = "";
      this.D = null;
      this.s = this.g = "";
      this.i = !1;
      var c;
      a instanceof xb ? (this.i = ka(b) ? b : a.i, yb(this, a.j), this.B = a.B, this.h = a.h, zb(this, a.D), this.g = a.g, Ab(this, Bb(a.a)), this.s = a.s) : a && (c = String(a).match(rb)) ? (this.i = !!b, yb(this, c[1] || "", !0), this.B = Cb(c[2] || ""), this.h = Cb(c[3] || "", !0), zb(this, c[4]), this.g = Cb(c[5] || "", !0), Ab(this, c[6] || "", !0), this.s = Cb(c[7] || "")) : (this.i = !!b, this.a = new Db(null, this.i));
    }

    xb.prototype.toString = function () {
      var a = [],
          b = this.j;
      b && a.push(Eb(b, Fb, !0), ":");
      var c = this.h;
      if (c || "file" == b) a.push("//"), (b = this.B) && a.push(Eb(b, Fb, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.D, null != c && a.push(":", String(c));
      if (c = this.g) this.h && "/" != c.charAt(0) && a.push("/"), a.push(Eb(c, "/" == c.charAt(0) ? Gb : Hb, !0));
      (c = this.a.toString()) && a.push("?", c);
      (c = this.s) && a.push("#", Eb(c, Ib));
      return a.join("");
    };

    function yb(a, b, c) {
      a.j = c ? Cb(b, !0) : b;
      a.j && (a.j = a.j.replace(/:$/, ""));
    }

    function zb(a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.D = b;
      } else a.D = null;
    }

    function Ab(a, b, c) {
      b instanceof Db ? (a.a = b, Jb(a.a, a.i)) : (c || (b = Eb(b, Kb)), a.a = new Db(b, a.i));
    }

    function Lb(a) {
      return a instanceof xb ? new xb(a) : new xb(a, void 0);
    }

    function Mb(a, b) {
      a instanceof xb || (a = Lb(a));
      b instanceof xb || (b = Lb(b));
      var c = a;
      a = new xb(c);
      var d = !!b.j;
      d ? yb(a, b.j) : d = !!b.B;
      d ? a.B = b.B : d = !!b.h;
      d ? a.h = b.h : d = null != b.D;
      var e = b.g;
      if (d) zb(a, b.D);else if (d = !!b.g) if ("/" != e.charAt(0) && (c.h && !c.g ? e = "/" + e : (c = a.g.lastIndexOf("/"), -1 != c && (e = a.g.substr(0, c + 1) + e))), ".." == e || "." == e) e = "";else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
        c = 0 == e.lastIndexOf("/", 0);
        e = e.split("/");

        for (var f = [], g = 0; g < e.length;) {
          var h = e[g++];
          "." == h ? c && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), c && g == e.length && f.push("")) : (f.push(h), c = !0);
        }

        e = f.join("/");
      }
      d ? a.g = e : d = "" !== b.a.toString();
      d ? Ab(a, Bb(b.a)) : d = !!b.s;
      d && (a.s = b.s);
      return a;
    }

    function Cb(a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    }

    function Eb(a, b, c) {
      return q(a) ? (a = encodeURI(a).replace(b, Nb), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    }

    function Nb(a) {
      a = a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    }

    var Fb = /[#\/\?@]/g,
        Hb = /[#\?:]/g,
        Gb = /[#\?]/g,
        Kb = /[#\?@]/g,
        Ib = /#/g;

    function Db(a, b) {
      this.g = this.a = null;
      this.h = a || null;
      this.j = !!b;
    }

    function Ob(a) {
      a.a || (a.a = new ob(), a.g = 0, a.h && sb(a.h, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
      }));
    }

    k = Db.prototype;

    k.add = function (a, b) {
      Ob(this);
      this.h = null;
      a = Pb(this, a);
      var c = this.a.get(a);
      c || this.a.set(a, c = []);
      c.push(b);
      this.g += 1;
      return this;
    };

    function Qb(a, b) {
      Ob(a);
      b = Pb(a, b);
      qb(a.a.g, b) && (a.h = null, a.g -= a.a.get(b).length, a = a.a, qb(a.g, b) && (delete a.g[b], a.h--, a.j++, a.a.length > 2 * a.h && pb(a)));
    }

    k.clear = function () {
      this.a = this.h = null;
      this.g = 0;
    };

    function Rb(a, b) {
      Ob(a);
      b = Pb(a, b);
      return qb(a.a.g, b);
    }

    k.forEach = function (a, b) {
      Ob(this);
      this.a.forEach(function (c, d) {
        Ha(c, function (e) {
          a.call(b, e, d, this);
        }, this);
      }, this);
    };

    k.ja = function () {
      Ob(this);

      for (var a = this.a.la(), b = this.a.ja(), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);

      return c;
    };

    k.la = function (a) {
      Ob(this);
      var b = [];
      if (q(a)) Rb(this, a) && (b = Sa(b, this.a.get(Pb(this, a))));else {
        a = this.a.la();

        for (var c = 0; c < a.length; c++) b = Sa(b, a[c]);
      }
      return b;
    };

    k.set = function (a, b) {
      Ob(this);
      this.h = null;
      a = Pb(this, a);
      Rb(this, a) && (this.g -= this.a.get(a).length);
      this.a.set(a, [b]);
      this.g += 1;
      return this;
    };

    k.get = function (a, b) {
      if (!a) return b;
      a = this.la(a);
      return 0 < a.length ? String(a[0]) : b;
    };

    k.toString = function () {
      if (this.h) return this.h;
      if (!this.a) return "";

      for (var a = [], b = this.a.ja(), c = 0; c < b.length; c++) {
        var d = b[c],
            e = encodeURIComponent(String(d));
        d = this.la(d);

        for (var f = 0; f < d.length; f++) {
          var g = e;
          "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
          a.push(g);
        }
      }

      return this.h = a.join("&");
    };

    function Bb(a) {
      var b = new Db();
      b.h = a.h;
      a.a && (b.a = new ob(a.a), b.g = a.g);
      return b;
    }

    function Pb(a, b) {
      b = String(b);
      a.j && (b = b.toLowerCase());
      return b;
    }

    function Jb(a, b) {
      b && !a.j && (Ob(a), a.h = null, a.a.forEach(function (c, d) {
        var e = d.toLowerCase();
        d != e && (Qb(this, d), Qb(this, e), 0 < c.length && (this.h = null, this.a.set(Pb(this, e), Ta(c)), this.g += c.length));
      }, a));
      a.j = b;
    }

    function Sb(a) {
      this.a = Lb(a);
    }

    function Tb(a, b) {
      b ? a.a.a.set(x.Sa, b) : Qb(a.a.a, x.Sa);
    }

    function Ub(a, b) {
      null !== b ? a.a.a.set(x.Qa, b ? "1" : "0") : Qb(a.a.a, x.Qa);
    }

    function Vb(a) {
      return a.a.a.get(x.Pa) || null;
    }

    function Wb(a, b) {
      b ? a.a.a.set(x.PROVIDER_ID, b) : Qb(a.a.a, x.PROVIDER_ID);
    }

    Sb.prototype.toString = function () {
      return this.a.toString();
    };

    var x = {
      Pa: "ui_auid",
      kc: "apiKey",
      Qa: "ui_sd",
      vb: "mode",
      $a: "oobCode",
      PROVIDER_ID: "ui_pid",
      Sa: "ui_sid",
      wb: "tenantId"
    };
    var Xb;

    a: {
      var Yb = n.navigator;

      if (Yb) {
        var Zb = Yb.userAgent;

        if (Zb) {
          Xb = Zb;
          break a;
        }
      }

      Xb = "";
    }

    function y(a) {
      return -1 != Xb.indexOf(a);
    }

    function $b() {
      return (y("Chrome") || y("CriOS")) && !y("Edge");
    }

    function ac(a) {
      ac[" "](a);
      return a;
    }

    ac[" "] = na;

    function bc(a, b) {
      var c = cc;
      return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
    }

    var dc = y("Opera"),
        z = y("Trident") || y("MSIE"),
        ec = y("Edge"),
        fc = ec || z,
        gc = y("Gecko") && !(-1 != Xb.toLowerCase().indexOf("webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"),
        hc = -1 != Xb.toLowerCase().indexOf("webkit") && !y("Edge"),
        ic = hc && y("Mobile"),
        jc = y("Macintosh");

    function kc() {
      var a = n.document;
      return a ? a.documentMode : void 0;
    }

    var lc;

    a: {
      var mc = "",
          nc = function () {
        var a = Xb;
        if (gc) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (ec) return /Edge\/([\d\.]+)/.exec(a);
        if (z) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (hc) return /WebKit\/(\S+)/.exec(a);
        if (dc) return /(?:Version)[ \/]?(\S+)/.exec(a);
      }();

      nc && (mc = nc ? nc[1] : "");

      if (z) {
        var oc = kc();

        if (null != oc && oc > parseFloat(mc)) {
          lc = String(oc);
          break a;
        }
      }

      lc = mc;
    }

    var cc = {};

    function pc(a) {
      return bc(a, function () {
        for (var b = 0, c = Wa(String(lc)).split("."), d = Wa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
          var g = c[f] || "",
              h = d[f] || "";

          do {
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
            if (0 == g[0].length && 0 == h[0].length) break;
            b = db(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || db(0 == g[2].length, 0 == h[2].length) || db(g[2], h[2]);
            g = g[3];
            h = h[3];
          } while (0 == b);
        }

        return 0 <= b;
      });
    }

    var qc;
    var rc = n.document;
    qc = rc && z ? kc() || ("CSS1Compat" == rc.compatMode ? parseInt(lc, 10) : 5) : void 0;

    function sc(a, b) {
      this.a = a === tc && b || "";
      this.g = uc;
    }

    sc.prototype.ma = !0;

    sc.prototype.ka = function () {
      return this.a;
    };

    sc.prototype.toString = function () {
      return "Const{" + this.a + "}";
    };

    function vc(a) {
      if (a instanceof sc && a.constructor === sc && a.g === uc) return a.a;
      Fa("expected object of type Const, got '" + a + "'");
      return "type_error:Const";
    }

    var uc = {},
        tc = {};

    function wc() {
      this.a = "";
      this.h = xc;
    }

    wc.prototype.ma = !0;

    wc.prototype.ka = function () {
      return this.a.toString();
    };

    wc.prototype.g = function () {
      return 1;
    };

    wc.prototype.toString = function () {
      return "TrustedResourceUrl{" + this.a + "}";
    };

    function yc(a) {
      if (a instanceof wc && a.constructor === wc && a.h === xc) return a.a;
      Fa("expected object of type TrustedResourceUrl, got '" + a + "' of type " + pa(a));
      return "type_error:TrustedResourceUrl";
    }

    var xc = {};

    function zc(a) {
      var b = new wc();
      b.a = a;
      return b;
    }

    function Ac() {
      this.a = "";
      this.h = Bc;
    }

    Ac.prototype.ma = !0;

    Ac.prototype.ka = function () {
      return this.a.toString();
    };

    Ac.prototype.g = function () {
      return 1;
    };

    Ac.prototype.toString = function () {
      return "SafeUrl{" + this.a + "}";
    };

    function Cc(a) {
      return Dc(a).toString();
    }

    function Dc(a) {
      if (a instanceof Ac && a.constructor === Ac && a.h === Bc) return a.a;
      Fa("expected object of type SafeUrl, got '" + a + "' of type " + pa(a));
      return "type_error:SafeUrl";
    }

    var Ec = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Fc(a) {
      if (a instanceof Ac) return a;
      a = "object" == typeof a && a.ma ? a.ka() : String(a);
      Ec.test(a) || (a = "about:invalid#zClosurez");
      return Gc(a);
    }

    var Bc = {};

    function Gc(a) {
      var b = new Ac();
      b.a = a;
      return b;
    }

    Gc("about:blank");

    function Hc() {
      this.a = "";
      this.g = Ic;
    }

    Hc.prototype.ma = !0;
    var Ic = {};

    Hc.prototype.ka = function () {
      return this.a;
    };

    Hc.prototype.toString = function () {
      return "SafeStyle{" + this.a + "}";
    };

    function Jc() {
      this.a = "";
      this.j = Kc;
      this.h = null;
    }

    Jc.prototype.g = function () {
      return this.h;
    };

    Jc.prototype.ma = !0;

    Jc.prototype.ka = function () {
      return this.a.toString();
    };

    Jc.prototype.toString = function () {
      return "SafeHtml{" + this.a + "}";
    };

    function Lc(a) {
      if (a instanceof Jc && a.constructor === Jc && a.j === Kc) return a.a;
      Fa("expected object of type SafeHtml, got '" + a + "' of type " + pa(a));
      return "type_error:SafeHtml";
    }

    var Kc = {};

    function Mc(a, b) {
      var c = new Jc();
      c.a = a;
      c.h = b;
      return c;
    }

    Mc("<!DOCTYPE html>", 0);
    var Nc = Mc("", 0);
    Mc("<br>", 0);

    var Oc = function (a) {
      var b = !1,
          c;
      return function () {
        b || (c = a(), b = !0);
        return c;
      };
    }(function () {
      if ("undefined" === typeof document) return !1;
      var a = document.createElement("div"),
          b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      if (!a.firstChild) return !1;
      b = a.firstChild.firstChild;
      a.innerHTML = Lc(Nc);
      return !b.parentElement;
    });

    function Pc(a, b) {
      a.src = yc(b);
      if (null === ma) b: {
        b = n.document;

        if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && la.test(b)) {
          ma = b;
          break b;
        }

        ma = "";
      }
      b = ma;
      b && a.setAttribute("nonce", b);
    }

    function Qc(a, b) {
      this.a = ka(a) ? a : 0;
      this.g = ka(b) ? b : 0;
    }

    Qc.prototype.toString = function () {
      return "(" + this.a + ", " + this.g + ")";
    };

    Qc.prototype.ceil = function () {
      this.a = Math.ceil(this.a);
      this.g = Math.ceil(this.g);
      return this;
    };

    Qc.prototype.floor = function () {
      this.a = Math.floor(this.a);
      this.g = Math.floor(this.g);
      return this;
    };

    Qc.prototype.round = function () {
      this.a = Math.round(this.a);
      this.g = Math.round(this.g);
      return this;
    };

    function Rc(a, b) {
      this.width = a;
      this.height = b;
    }

    k = Rc.prototype;

    k.toString = function () {
      return "(" + this.width + " x " + this.height + ")";
    };

    k.aspectRatio = function () {
      return this.width / this.height;
    };

    k.ceil = function () {
      this.width = Math.ceil(this.width);
      this.height = Math.ceil(this.height);
      return this;
    };

    k.floor = function () {
      this.width = Math.floor(this.width);
      this.height = Math.floor(this.height);
      return this;
    };

    k.round = function () {
      this.width = Math.round(this.width);
      this.height = Math.round(this.height);
      return this;
    };

    function Sc(a) {
      return a ? new Tc(Uc(a)) : Ca || (Ca = new Tc());
    }

    function Vc(a, b) {
      var c = b || document;
      return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Wc(document, a, b);
    }

    function Xc(a, b) {
      var c = b || document;
      if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];else {
        c = document;
        var d = b || c;
        a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : Wc(c, a, b)[0] || null;
      }
      return a || null;
    }

    function Wc(a, b, c) {
      var d;
      a = c || a;
      if (a.querySelectorAll && a.querySelector && b) return a.querySelectorAll(b ? "." + b : "");

      if (b && a.getElementsByClassName) {
        var e = a.getElementsByClassName(b);
        return e;
      }

      e = a.getElementsByTagName("*");

      if (b) {
        var f = {};

        for (c = d = 0; a = e[c]; c++) {
          var g = a.className;
          "function" == typeof g.split && Na(g.split(/\s+/), b) && (f[d++] = a);
        }

        f.length = d;
        return f;
      }

      return e;
    }

    function Yc(a, b) {
      fb(b, function (c, d) {
        c && "object" == typeof c && c.ma && (c = c.ka());
        "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Zc.hasOwnProperty(d) ? a.setAttribute(Zc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c;
      });
    }

    var Zc = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width"
    };

    function $c(a) {
      return a.scrollingElement ? a.scrollingElement : hc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
    }

    function ad(a) {
      a && a.parentNode && a.parentNode.removeChild(a);
    }

    function Uc(a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    }

    function bd(a, b) {
      if ("textContent" in a) a.textContent = b;else if (3 == a.nodeType) a.data = String(b);else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);

        a.firstChild.data = String(b);
      } else {
        for (var c; c = a.firstChild;) a.removeChild(c);

        a.appendChild(Uc(a).createTextNode(String(b)));
      }
    }

    function cd(a, b) {
      return b ? dd(a, function (c) {
        return !b || q(c.className) && Na(c.className.split(/\s+/), b);
      }) : null;
    }

    function dd(a, b) {
      for (var c = 0; a;) {
        if (b(a)) return a;
        a = a.parentNode;
        c++;
      }

      return null;
    }

    function Tc(a) {
      this.a = a || n.document || document;
    }

    Tc.prototype.O = function () {
      return q(void 0) ? this.a.getElementById(void 0) : void 0;
    };

    var ed = {
      Ec: !0
    },
        fd = {
      Gc: !0
    },
        gd = {
      Dc: !0
    },
        hd = {
      Fc: !0
    };

    function id() {
      throw Error("Do not instantiate directly");
    }

    id.prototype.va = null;

    id.prototype.toString = function () {
      return this.content;
    };

    function jd(a, b, c, d) {
      a = a(b || kd, void 0, c);
      d = (d || Sc()).a.createElement("DIV");
      a = ld(a);
      a.match(md);
      a = Mc(a, null);
      if (Oc()) for (; d.lastChild;) d.removeChild(d.lastChild);
      d.innerHTML = Lc(a);
      1 == d.childNodes.length && (a = d.firstChild, 1 == a.nodeType && (d = a));
      return d;
    }

    function ld(a) {
      if (!ta(a)) return eb(String(a));

      if (a instanceof id) {
        if (a.fa === ed) return a.content;
        if (a.fa === hd) return eb(a.content);
      }

      Fa("Soy template output is unsafe for use as HTML: " + a);
      return "zSoyz";
    }

    var md = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,
        kd = {};

    function nd(a) {
      if (null != a) switch (a.va) {
        case 1:
          return 1;

        case -1:
          return -1;

        case 0:
          return 0;
      }
      return null;
    }

    function od() {
      id.call(this);
    }

    w(od, id);
    od.prototype.fa = ed;

    function A(a) {
      return null != a && a.fa === ed ? a : a instanceof Jc ? B(Lc(a).toString(), a.g()) : B(eb(String(String(a))), nd(a));
    }

    function pd() {
      id.call(this);
    }

    w(pd, id);
    pd.prototype.fa = fd;
    pd.prototype.va = 1;

    function qd(a, b) {
      this.content = String(a);
      this.va = null != b ? b : null;
    }

    w(qd, id);
    qd.prototype.fa = hd;

    function C(a) {
      return new qd(a, void 0);
    }

    var B = function (a) {
      function b(c) {
        this.content = c;
      }

      b.prototype = a.prototype;
      return function (c, d) {
        c = new b(String(c));
        void 0 !== d && (c.va = d);
        return c;
      };
    }(od),
        rd = function (a) {
      function b(c) {
        this.content = c;
      }

      b.prototype = a.prototype;
      return function (c) {
        return new b(String(c));
      };
    }(pd);

    function ud(a) {
      function b() {}

      var c = {
        label: D("New password")
      };
      b.prototype = a;
      a = new b();

      for (var d in c) a[d] = c[d];

      return a;
    }

    function D(a) {
      return (a = String(a)) ? new qd(a, void 0) : "";
    }

    var vd = function (a) {
      function b(c) {
        this.content = c;
      }

      b.prototype = a.prototype;
      return function (c, d) {
        c = String(c);
        if (!c) return "";
        c = new b(c);
        void 0 !== d && (c.va = d);
        return c;
      };
    }(od);

    function wd(a) {
      return null != a && a.fa === ed ? String(String(a.content).replace(xd, "").replace(yd, "&lt;")).replace(zd, Ad) : eb(String(a));
    }

    function Bd(a) {
      null != a && a.fa === fd ? a = String(a).replace(Cd, Dd) : a instanceof Ac ? a = String(Cc(a)).replace(Cd, Dd) : (a = String(a), Ed.test(a) ? a = a.replace(Cd, Dd) : (Fa("Bad value `%s` for |filterNormalizeUri", [a]), a = "#zSoyz"));
      return a;
    }

    function Fd(a) {
      null != a && a.fa === gd ? a = a.content : null == a ? a = "" : a instanceof Hc ? a instanceof Hc && a.constructor === Hc && a.g === Ic ? a = a.a : (Fa("expected object of type SafeStyle, got '" + a + "' of type " + pa(a)), a = "type_error:SafeStyle") : (a = String(a), Gd.test(a) || (Fa("Bad value `%s` for |filterCssValue", [a]), a = "zSoyz"));
      return a;
    }

    var Hd = {
      "\x00": "&#0;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\x0B": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "-": "&#45;",
      "/": "&#47;",
      "<": "&lt;",
      "=": "&#61;",
      ">": "&gt;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;"
    };

    function Ad(a) {
      return Hd[a];
    }

    var Id = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\x0B": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD"
    };

    function Dd(a) {
      return Id[a];
    }

    var zd = /[\x00\x22\x27\x3c\x3e]/g,
        Cd = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Gd = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,
        Ed = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
        xd = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        yd = /</g;

    function Jd() {
      return C("Enter a valid phone number");
    }

    function Kd() {
      return C("Unable to send password reset code to specified email");
    }

    function Ld() {
      return C("Something went wrong. Please try again.");
    }

    function Md() {
      return C("This email already exists without any means of sign-in. Please reset the password to recover.");
    }

    function Nd(a) {
      a = a || {};
      var b = "";

      switch (a.code) {
        case "invalid-argument":
          b += "Client specified an invalid argument.";
          break;

        case "invalid-configuration":
          b += "Client specified an invalid project configuration.";
          break;

        case "failed-precondition":
          b += "Request can not be executed in the current system state.";
          break;

        case "out-of-range":
          b += "Client specified an invalid range.";
          break;

        case "unauthenticated":
          b += "Request not authenticated due to missing, invalid, or expired OAuth token.";
          break;

        case "permission-denied":
          b += "Client does not have sufficient permission.";
          break;

        case "not-found":
          b += "Specified resource is not found.";
          break;

        case "aborted":
          b += "Concurrency conflict, such as read-modify-write conflict.";
          break;

        case "already-exists":
          b += "The resource that a client tried to create already exists.";
          break;

        case "resource-exhausted":
          b += "Either out of resource quota or reaching rate limiting.";
          break;

        case "cancelled":
          b += "Request cancelled by the client.";
          break;

        case "data-loss":
          b += "Unrecoverable data loss or data corruption.";
          break;

        case "unknown":
          b += "Unknown server error.";
          break;

        case "internal":
          b += "Internal server error.";
          break;

        case "not-implemented":
          b += "API method not implemented by the server.";
          break;

        case "unavailable":
          b += "Service unavailable.";
          break;

        case "deadline-exceeded":
          b += "Request deadline exceeded.";
          break;

        case "auth/user-disabled":
          b += "The user account has been disabled by an administrator.";
          break;

        case "auth/timeout":
          b += "The operation has timed out.";
          break;

        case "auth/too-many-requests":
          b += "We have blocked all requests from this device due to unusual activity. Try again later.";
          break;

        case "auth/quota-exceeded":
          b += "The quota for this operation has been exceeded. Try again later.";
          break;

        case "auth/network-request-failed":
          b += "A network error has occurred. Try again later.";
          break;

        case "restart-process":
          b += "An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";
          break;

        case "no-matching-tenant-for-email":
          b += "No sign-in provider is available for the given email, please try with a different email.";
      }

      return C(b);
    }

    function Od() {
      return C("Please login again to perform this operation");
    }

    function Pd(a, b, c) {
      var d = Error.call(this);
      this.message = d.message;
      "stack" in d && (this.stack = d.stack);
      this.code = Qd + a;

      if (!(a = b)) {
        a = "";

        switch (this.code) {
          case "firebaseui/merge-conflict":
            a += "The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";
            break;

          default:
            a += Ld();
        }

        a = C(a).toString();
      }

      this.message = a || "";
      this.credential = c || null;
    }

    m(Pd, Error);

    Pd.prototype.aa = function () {
      return {
        code: this.code,
        message: this.message
      };
    };

    Pd.prototype.toJSON = function () {
      return this.aa();
    };

    var Qd = "firebaseui/";

    function Rd() {
      0 != Sd && (Td[this[ua] || (this[ua] = ++va)] = this);
      this.T = this.T;
      this.D = this.D;
    }

    var Sd = 0,
        Td = {};
    Rd.prototype.T = !1;

    Rd.prototype.o = function () {
      if (!this.T && (this.T = !0, this.m(), 0 != Sd)) {
        var a = this[ua] || (this[ua] = ++va);
        if (0 != Sd && this.D && 0 < this.D.length) throw Error(this + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
        delete Td[a];
      }
    };

    function Ud(a, b) {
      a.T ? ka(void 0) ? b.call(void 0) : b() : (a.D || (a.D = []), a.D.push(ka(void 0) ? t(b, void 0) : b));
    }

    Rd.prototype.m = function () {
      if (this.D) for (; this.D.length;) this.D.shift()();
    };

    function Vd(a) {
      a && "function" == typeof a.o && a.o();
    }

    var Wd = Object.freeze || function (a) {
      return a;
    };

    var Xd = !z || 9 <= Number(qc),
        Yd = z && !pc("9"),
        Zd = function () {
      if (!n.addEventListener || !Object.defineProperty) return !1;
      var a = !1,
          b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        }
      });

      try {
        n.addEventListener("test", na, b), n.removeEventListener("test", na, b);
      } catch (c) {}

      return a;
    }();

    function $d(a, b) {
      this.type = a;
      this.g = this.target = b;
      this.h = !1;
      this.rb = !0;
    }

    $d.prototype.stopPropagation = function () {
      this.h = !0;
    };

    $d.prototype.preventDefault = function () {
      this.rb = !1;
    };

    function ae(a, b) {
      $d.call(this, a ? a.type : "");
      this.relatedTarget = this.g = this.target = null;
      this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
      this.key = "";
      this.j = this.keyCode = 0;
      this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
      this.pointerId = 0;
      this.pointerType = "";
      this.a = null;

      if (a) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.g = b;

        if (b = a.relatedTarget) {
          if (gc) {
            a: {
              try {
                ac(b.nodeName);
                var e = !0;
                break a;
              } catch (f) {}

              e = !1;
            }

            e || (b = null);
          }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);

        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.j = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = q(a.pointerType) ? a.pointerType : be[a.pointerType] || "";
        this.a = a;
        a.defaultPrevented && this.preventDefault();
      }
    }

    w(ae, $d);
    var be = Wd({
      2: "touch",
      3: "pen",
      4: "mouse"
    });

    ae.prototype.stopPropagation = function () {
      ae.L.stopPropagation.call(this);
      this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0;
    };

    ae.prototype.preventDefault = function () {
      ae.L.preventDefault.call(this);
      var a = this.a;
      if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, Yd) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
      } catch (b) {}
    };

    var ce = "closure_listenable_" + (1E6 * Math.random() | 0),
        de = 0;

    function ee(a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.Ka = e;
      this.key = ++de;
      this.sa = this.Ha = !1;
    }

    function fe(a) {
      a.sa = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.Ka = null;
    }

    function ge(a) {
      this.src = a;
      this.a = {};
      this.g = 0;
    }

    ge.prototype.add = function (a, b, c, d, e) {
      var f = a.toString();
      a = this.a[f];
      a || (a = this.a[f] = [], this.g++);
      var g = he(a, b, d, e);
      -1 < g ? (b = a[g], c || (b.Ha = !1)) : (b = new ee(b, this.src, f, !!d, e), b.Ha = c, a.push(b));
      return b;
    };

    function ie(a, b) {
      var c = b.type;
      c in a.a && Oa(a.a[c], b) && (fe(b), 0 == a.a[c].length && (delete a.a[c], a.g--));
    }

    function he(a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.sa && f.listener == b && f.capture == !!c && f.Ka == d) return e;
      }

      return -1;
    }

    var je = "closure_lm_" + (1E6 * Math.random() | 0),
        ke = {},
        le = 0;

    function me(a, b, c, d, e) {
      if (d && d.once) return ne(a, b, c, d, e);

      if (qa(b)) {
        for (var f = 0; f < b.length; f++) me(a, b[f], c, d, e);

        return null;
      }

      c = oe(c);
      return a && a[ce] ? a.K.add(String(b), c, !1, ta(d) ? !!d.capture : !!d, e) : pe(a, b, c, !1, d, e);
    }

    function pe(a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var g = ta(e) ? !!e.capture : !!e,
          h = qe(a);
      h || (a[je] = h = new ge(a));
      c = h.add(b, c, d, g, f);
      if (c.proxy) return c;
      d = re();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) Zd || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(se(b.toString()), d);else if (a.addListener && a.removeListener) a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
      le++;
      return c;
    }

    function re() {
      var a = te,
          b = Xd ? function (c) {
        return a.call(b.src, b.listener, c);
      } : function (c) {
        c = a.call(b.src, b.listener, c);
        if (!c) return c;
      };
      return b;
    }

    function ne(a, b, c, d, e) {
      if (qa(b)) {
        for (var f = 0; f < b.length; f++) ne(a, b[f], c, d, e);

        return null;
      }

      c = oe(c);
      return a && a[ce] ? a.K.add(String(b), c, !0, ta(d) ? !!d.capture : !!d, e) : pe(a, b, c, !0, d, e);
    }

    function ue(a, b, c, d, e) {
      if (qa(b)) for (var f = 0; f < b.length; f++) ue(a, b[f], c, d, e);else (d = ta(d) ? !!d.capture : !!d, c = oe(c), a && a[ce]) ? (a = a.K, b = String(b).toString(), b in a.a && (f = a.a[b], c = he(f, c, d, e), -1 < c && (fe(f[c]), Pa(f, c), 0 == f.length && (delete a.a[b], a.g--)))) : a && (a = qe(a)) && (b = a.a[b.toString()], a = -1, b && (a = he(b, c, d, e)), (c = -1 < a ? b[a] : null) && ve(c));
    }

    function ve(a) {
      if ("number" != typeof a && a && !a.sa) {
        var b = a.src;
        if (b && b[ce]) ie(b.K, a);else {
          var c = a.type,
              d = a.proxy;
          b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(se(c), d) : b.addListener && b.removeListener && b.removeListener(d);
          le--;
          (c = qe(b)) ? (ie(c, a), 0 == c.g && (c.src = null, b[je] = null)) : fe(a);
        }
      }
    }

    function se(a) {
      return a in ke ? ke[a] : ke[a] = "on" + a;
    }

    function we(a, b, c, d) {
      var e = !0;
      if (a = qe(a)) if (b = a.a[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
        var f = b[a];
        f && f.capture == c && !f.sa && (f = xe(f, d), e = e && !1 !== f);
      }
      return e;
    }

    function xe(a, b) {
      var c = a.listener,
          d = a.Ka || a.src;
      a.Ha && ve(a);
      return c.call(d, b);
    }

    function te(a, b) {
      if (a.sa) return !0;

      if (!Xd) {
        if (!b) a: {
          b = ["window", "event"];

          for (var c = n, d = 0; d < b.length; d++) if (c = c[b[d]], null == c) {
            b = null;
            break a;
          }

          b = c;
        }
        d = b;
        b = new ae(d, this);
        c = !0;

        if (!(0 > d.keyCode || void 0 != d.returnValue)) {
          a: {
            var e = !1;
            if (0 == d.keyCode) try {
              d.keyCode = -1;
              break a;
            } catch (g) {
              e = !0;
            }
            if (e || void 0 == d.returnValue) d.returnValue = !0;
          }

          d = [];

          for (e = b.g; e; e = e.parentNode) d.push(e);

          a = a.type;

          for (e = d.length - 1; !b.h && 0 <= e; e--) {
            b.g = d[e];
            var f = we(d[e], a, !0, b);
            c = c && f;
          }

          for (e = 0; !b.h && e < d.length; e++) b.g = d[e], f = we(d[e], a, !1, b), c = c && f;
        }

        return c;
      }

      return xe(a, new ae(b, this));
    }

    function qe(a) {
      a = a[je];
      return a instanceof ge ? a : null;
    }

    var ye = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function oe(a) {
      if (sa(a)) return a;
      a[ye] || (a[ye] = function (b) {
        return a.handleEvent(b);
      });
      return a[ye];
    }

    function E() {
      Rd.call(this);
      this.K = new ge(this);
      this.xb = this;
      this.Fa = null;
    }

    w(E, Rd);
    E.prototype[ce] = !0;

    E.prototype.Za = function (a) {
      this.Fa = a;
    };

    E.prototype.removeEventListener = function (a, b, c, d) {
      ue(this, a, b, c, d);
    };

    function ze(a, b) {
      var c,
          d = a.Fa;
      if (d) for (c = []; d; d = d.Fa) c.push(d);
      a = a.xb;
      d = b.type || b;
      if (q(b)) b = new $d(b, a);else if (b instanceof $d) b.target = b.target || a;else {
        var e = b;
        b = new $d(d, a);
        ib(b, e);
      }
      e = !0;
      if (c) for (var f = c.length - 1; !b.h && 0 <= f; f--) {
        var g = b.g = c[f];
        e = Ae(g, d, !0, b) && e;
      }
      b.h || (g = b.g = a, e = Ae(g, d, !0, b) && e, b.h || (e = Ae(g, d, !1, b) && e));
      if (c) for (f = 0; !b.h && f < c.length; f++) g = b.g = c[f], e = Ae(g, d, !1, b) && e;
      return e;
    }

    E.prototype.m = function () {
      E.L.m.call(this);

      if (this.K) {
        var a = this.K,
            b = 0,
            c;

        for (c in a.a) {
          for (var d = a.a[c], e = 0; e < d.length; e++) ++b, fe(d[e]);

          delete a.a[c];
          a.g--;
        }
      }

      this.Fa = null;
    };

    function Ae(a, b, c, d) {
      b = a.K.a[String(b)];
      if (!b) return !0;
      b = b.concat();

      for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];

        if (g && !g.sa && g.capture == c) {
          var h = g.listener,
              l = g.Ka || g.src;
          g.Ha && ie(a.K, g);
          e = !1 !== h.call(l, d) && e;
        }
      }

      return e && 0 != d.rb;
    }

    var Be = {},
        Ce = 0;

    function De(a, b) {
      if (!a) throw Error("Event target element must be provided!");
      a = Ee(a);
      if (Be[a] && Be[a].length) for (var c = 0; c < Be[a].length; c++) ze(Be[a][c], b);
    }

    function Fe(a) {
      var b = Ee(a.O());
      Be[b] && Be[b].length && (Qa(Be[b], function (c) {
        return c == a;
      }), Be[b].length || delete Be[b]);
    }

    function Ee(a) {
      "undefined" === typeof a.a && (a.a = Ce, Ce++);
      return a.a;
    }

    function Ge(a) {
      if (!a) throw Error("Event target element must be provided!");
      E.call(this);
      this.a = a;
    }

    m(Ge, E);

    Ge.prototype.O = function () {
      return this.a;
    };

    Ge.prototype.register = function () {
      var a = Ee(this.O());
      Be[a] ? Na(Be[a], this) || Be[a].push(this) : Be[a] = [this];
    };

    function He(a) {
      if (!a) return !1;

      try {
        return !!a.$goog_Thenable;
      } catch (b) {
        return !1;
      }
    }

    function Ie(a, b) {
      this.h = a;
      this.j = b;
      this.g = 0;
      this.a = null;
    }

    Ie.prototype.get = function () {
      if (0 < this.g) {
        this.g--;
        var a = this.a;
        this.a = a.next;
        a.next = null;
      } else a = this.h();

      return a;
    };

    function Je(a, b) {
      a.j(b);
      100 > a.g && (a.g++, b.next = a.a, a.a = b);
    }

    function Ke() {
      this.g = this.a = null;
    }

    var Me = new Ie(function () {
      return new Le();
    }, function (a) {
      a.reset();
    });

    Ke.prototype.add = function (a, b) {
      var c = Me.get();
      c.set(a, b);
      this.g ? this.g.next = c : this.a = c;
      this.g = c;
    };

    function Ne() {
      var a = Oe,
          b = null;
      a.a && (b = a.a, a.a = a.a.next, a.a || (a.g = null), b.next = null);
      return b;
    }

    function Le() {
      this.next = this.g = this.a = null;
    }

    Le.prototype.set = function (a, b) {
      this.a = a;
      this.g = b;
      this.next = null;
    };

    Le.prototype.reset = function () {
      this.next = this.g = this.a = null;
    };

    function Pe(a) {
      n.setTimeout(function () {
        throw a;
      }, 0);
    }

    var Qe;

    function Re() {
      var a = n.MessageChannel;
      "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !y("Presto") && (a = function () {
        var e = document.createElement("IFRAME");
        e.style.display = "none";
        e.src = "";
        document.documentElement.appendChild(e);
        var f = e.contentWindow;
        e = f.document;
        e.open();
        e.write("");
        e.close();
        var g = "callImmediate" + Math.random(),
            h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
        e = t(function (l) {
          if (("*" == h || l.origin == h) && l.data == g) this.port1.onmessage();
        }, this);
        f.addEventListener("message", e, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function () {
            f.postMessage(g, h);
          }
        };
      });

      if ("undefined" !== typeof a && !y("Trident") && !y("MSIE")) {
        var b = new a(),
            c = {},
            d = c;

        b.port1.onmessage = function () {
          if (ka(c.next)) {
            c = c.next;
            var e = c.gb;
            c.gb = null;
            e();
          }
        };

        return function (e) {
          d.next = {
            gb: e
          };
          d = d.next;
          b.port2.postMessage(0);
        };
      }

      return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (e) {
        var f = document.createElement("SCRIPT");

        f.onreadystatechange = function () {
          f.onreadystatechange = null;
          f.parentNode.removeChild(f);
          f = null;
          e();
          e = null;
        };

        document.documentElement.appendChild(f);
      } : function (e) {
        n.setTimeout(e, 0);
      };
    }

    function Se(a, b) {
      Te || Ue();
      Ve || (Te(), Ve = !0);
      Oe.add(a, b);
    }

    var Te;

    function Ue() {
      if (n.Promise && n.Promise.resolve) {
        var a = n.Promise.resolve(void 0);

        Te = function () {
          a.then(We);
        };
      } else Te = function () {
        var b = We;
        !sa(n.setImmediate) || n.Window && n.Window.prototype && !y("Edge") && n.Window.prototype.setImmediate == n.setImmediate ? (Qe || (Qe = Re()), Qe(b)) : n.setImmediate(b);
      };
    }

    var Ve = !1,
        Oe = new Ke();

    function We() {
      for (var a; a = Ne();) {
        try {
          a.a.call(a.g);
        } catch (b) {
          Pe(b);
        }

        Je(Me, a);
      }

      Ve = !1;
    }

    function F(a) {
      this.a = Xe;
      this.B = void 0;
      this.j = this.g = this.h = null;
      this.s = this.i = !1;
      if (a != na) try {
        var b = this;
        a.call(void 0, function (c) {
          Ye(b, Ze, c);
        }, function (c) {
          if (!(c instanceof $e)) try {
            if (c instanceof Error) throw c;
            throw Error("Promise rejected.");
          } catch (d) {}
          Ye(b, af, c);
        });
      } catch (c) {
        Ye(this, af, c);
      }
    }

    var Xe = 0,
        Ze = 2,
        af = 3;

    function bf() {
      this.next = this.j = this.g = this.s = this.a = null;
      this.h = !1;
    }

    bf.prototype.reset = function () {
      this.j = this.g = this.s = this.a = null;
      this.h = !1;
    };

    var cf = new Ie(function () {
      return new bf();
    }, function (a) {
      a.reset();
    });

    function df(a, b, c) {
      var d = cf.get();
      d.s = a;
      d.g = b;
      d.j = c;
      return d;
    }

    function G(a) {
      if (a instanceof F) return a;
      var b = new F(na);
      Ye(b, Ze, a);
      return b;
    }

    function ef(a) {
      return new F(function (b, c) {
        c(a);
      });
    }

    F.prototype.then = function (a, b, c) {
      return ff(this, sa(a) ? a : null, sa(b) ? b : null, c);
    };

    F.prototype.$goog_Thenable = !0;
    k = F.prototype;

    k.ec = function (a, b) {
      a = df(a, a, b);
      a.h = !0;
      gf(this, a);
      return this;
    };

    k.ta = function (a, b) {
      return ff(this, null, a, b);
    };

    k.cancel = function (a) {
      this.a == Xe && Se(function () {
        var b = new $e(a);
        hf(this, b);
      }, this);
    };

    function hf(a, b) {
      if (a.a == Xe) if (a.h) {
        var c = a.h;

        if (c.g) {
          for (var d = 0, e = null, f = null, g = c.g; g && (g.h || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);

          e && (c.a == Xe && 1 == d ? hf(c, b) : (f ? (d = f, d.next == c.j && (c.j = d), d.next = d.next.next) : jf(c), kf(c, e, af, b)));
        }

        a.h = null;
      } else Ye(a, af, b);
    }

    function gf(a, b) {
      a.g || a.a != Ze && a.a != af || lf(a);
      a.j ? a.j.next = b : a.g = b;
      a.j = b;
    }

    function ff(a, b, c, d) {
      var e = df(null, null, null);
      e.a = new F(function (f, g) {
        e.s = b ? function (h) {
          try {
            var l = b.call(d, h);
            f(l);
          } catch (p) {
            g(p);
          }
        } : f;
        e.g = c ? function (h) {
          try {
            var l = c.call(d, h);
            !ka(l) && h instanceof $e ? g(h) : f(l);
          } catch (p) {
            g(p);
          }
        } : g;
      });
      e.a.h = a;
      gf(a, e);
      return e.a;
    }

    k.gc = function (a) {
      this.a = Xe;
      Ye(this, Ze, a);
    };

    k.hc = function (a) {
      this.a = Xe;
      Ye(this, af, a);
    };

    function Ye(a, b, c) {
      if (a.a == Xe) {
        a === c && (b = af, c = new TypeError("Promise cannot resolve to itself"));
        a.a = 1;

        a: {
          var d = c,
              e = a.gc,
              f = a.hc;

          if (d instanceof F) {
            gf(d, df(e || na, f || null, a));
            var g = !0;
          } else if (He(d)) d.then(e, f, a), g = !0;else {
            if (ta(d)) try {
              var h = d.then;

              if (sa(h)) {
                mf(d, h, e, f, a);
                g = !0;
                break a;
              }
            } catch (l) {
              f.call(a, l);
              g = !0;
              break a;
            }
            g = !1;
          }
        }

        g || (a.B = c, a.a = b, a.h = null, lf(a), b != af || c instanceof $e || nf(a, c));
      }
    }

    function mf(a, b, c, d, e) {
      function f(l) {
        h || (h = !0, d.call(e, l));
      }

      function g(l) {
        h || (h = !0, c.call(e, l));
      }

      var h = !1;

      try {
        b.call(a, g, f);
      } catch (l) {
        f(l);
      }
    }

    function lf(a) {
      a.i || (a.i = !0, Se(a.Gb, a));
    }

    function jf(a) {
      var b = null;
      a.g && (b = a.g, a.g = b.next, b.next = null);
      a.g || (a.j = null);
      return b;
    }

    k.Gb = function () {
      for (var a; a = jf(this);) kf(this, a, this.a, this.B);

      this.i = !1;
    };

    function kf(a, b, c, d) {
      if (c == af && b.g && !b.h) for (; a && a.s; a = a.h) a.s = !1;
      if (b.a) b.a.h = null, of(b, c, d);else try {
        b.h ? b.s.call(b.j) : of(b, c, d);
      } catch (e) {
        pf.call(null, e);
      }
      Je(cf, b);
    }

    function of(a, b, c) {
      b == Ze ? a.s.call(a.j, c) : a.g && a.g.call(a.j, c);
    }

    function nf(a, b) {
      a.s = !0;
      Se(function () {
        a.s && pf.call(null, b);
      });
    }

    var pf = Pe;

    function $e(a) {
      Ba.call(this, a);
    }

    w($e, Ba);
    $e.prototype.name = "cancel";

    function qf(a, b, c) {
      b || (b = {});
      c = c || window;
      var d = a instanceof Ac ? a : Fc("undefined" != typeof a.href ? a.href : String(a));
      a = b.target || a.target;
      var e = [];

      for (f in b) switch (f) {
        case "width":
        case "height":
        case "top":
        case "left":
          e.push(f + "=" + b[f]);
          break;

        case "target":
        case "noopener":
        case "noreferrer":
          break;

        default:
          e.push(f + "=" + (b[f] ? 1 : 0));
      }

      var f = e.join(",");
      (y("iPhone") && !y("iPod") && !y("iPad") || y("iPad") || y("iPod")) && c.navigator && c.navigator.standalone && a && "_self" != a ? (f = c.document.createElement("A"), d instanceof Ac || d instanceof Ac || (d = "object" == typeof d && d.ma ? d.ka() : String(d), Ec.test(d) || (d = "about:invalid#zClosurez"), d = Gc(d)), f.href = Dc(d), f.setAttribute("target", a), b.noreferrer && f.setAttribute("rel", "noreferrer"), b = document.createEvent("MouseEvent"), b.initMouseEvent("click", !0, !0, c, 1), f.dispatchEvent(b), c = {}) : b.noreferrer ? (c = c.open("", a, f), b = Cc(d), c && (fc && -1 != b.indexOf(";") && (b = "'" + b.replace(/'/g, "%27") + "'"), c.opener = null, b = Mc('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + eb(b) + '">', null), c.document.write(Lc(b)), c.document.close())) : (c = c.open(Cc(d), a, f)) && b.noopener && (c.opener = null);
      return c;
    }

    function rf(a) {
      window.location.assign(Cc(Fc(a)));
    }

    function sf() {
      try {
        return !!(window.opener && window.opener.location && window.opener.location.assign && window.opener.location.hostname === window.location.hostname && window.opener.location.protocol === window.location.protocol);
      } catch (a$2) {}

      return !1;
    }

    function tf(a) {
      qf(a, {
        target: window.cordova && window.cordova.InAppBrowser ? "_system" : "_blank"
      }, void 0);
    }

    function uf(a, b) {
      a = ta(a) && 1 == a.nodeType ? a : document.querySelector(String(a));
      if (null == a) throw Error(b || "Cannot find element.");
      return a;
    }

    function vf() {
      return window.location.href;
    }

    function wf() {
      var a = null;
      return new F(function (b) {
        "complete" == n.document.readyState ? b() : (a = function () {
          b();
        }, ne(window, "load", a));
      }).ta(function (b) {
        ue(window, "load", a);
        throw b;
      });
    }

    function xf() {
      for (var a = 32, b = []; 0 < a;) b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;

      return b.join("");
    }

    function yf(a, b, c) {
      c = void 0 === c ? {} : c;
      return Object.keys(a).filter(function (d) {
        return b.includes(d);
      }).reduce(function (d, e) {
        d[e] = a[e];
        return d;
      }, c);
    }

    function zf(a) {
      var b = Af;
      this.s = [];
      this.T = b;
      this.P = a || null;
      this.j = this.a = !1;
      this.h = void 0;
      this.K = this.l = this.B = !1;
      this.i = 0;
      this.g = null;
      this.D = 0;
    }

    zf.prototype.cancel = function (a) {
      if (this.a) this.h instanceof zf && this.h.cancel();else {
        if (this.g) {
          var b = this.g;
          delete this.g;
          a ? b.cancel(a) : (b.D--, 0 >= b.D && b.cancel());
        }

        this.T ? this.T.call(this.P, this) : this.K = !0;
        this.a || (a = new Bf(this), Cf(this), Df(this, !1, a));
      }
    };

    zf.prototype.M = function (a, b) {
      this.B = !1;
      Df(this, a, b);
    };

    function Df(a, b, c) {
      a.a = !0;
      a.h = c;
      a.j = !b;
      Ef(a);
    }

    function Cf(a) {
      if (a.a) {
        if (!a.K) throw new Ff(a);
        a.K = !1;
      }
    }

    zf.prototype.callback = function (a) {
      Cf(this);
      Df(this, !0, a);
    };

    function Gf(a, b, c) {
      a.s.push([b, c, void 0]);
      a.a && Ef(a);
    }

    zf.prototype.then = function (a, b, c) {
      var d,
          e,
          f = new F(function (g, h) {
        d = g;
        e = h;
      });
      Gf(this, d, function (g) {
        g instanceof Bf ? f.cancel() : e(g);
      });
      return f.then(a, b, c);
    };

    zf.prototype.$goog_Thenable = !0;

    function Hf(a) {
      return La(a.s, function (b) {
        return sa(b[1]);
      });
    }

    function Ef(a) {
      if (a.i && a.a && Hf(a)) {
        var b = a.i,
            c = If[b];
        c && (n.clearTimeout(c.a), delete If[b]);
        a.i = 0;
      }

      a.g && (a.g.D--, delete a.g);
      b = a.h;

      for (var d = c = !1; a.s.length && !a.B;) {
        var e = a.s.shift(),
            f = e[0],
            g = e[1];
        e = e[2];
        if (f = a.j ? g : f) try {
          var h = f.call(e || a.P, b);
          ka(h) && (a.j = a.j && (h == b || h instanceof Error), a.h = b = h);
          if (He(b) || "function" === typeof n.Promise && b instanceof n.Promise) d = !0, a.B = !0;
        } catch (l) {
          b = l, a.j = !0, Hf(a) || (c = !0);
        }
      }

      a.h = b;
      d && (h = t(a.M, a, !0), d = t(a.M, a, !1), b instanceof zf ? (Gf(b, h, d), b.l = !0) : b.then(h, d));
      c && (b = new Jf(b), If[b.a] = b, a.i = b.a);
    }

    function Ff() {
      Ba.call(this);
    }

    w(Ff, Ba);
    Ff.prototype.message = "Deferred has already fired";
    Ff.prototype.name = "AlreadyCalledError";

    function Bf() {
      Ba.call(this);
    }

    w(Bf, Ba);
    Bf.prototype.message = "Deferred was canceled";
    Bf.prototype.name = "CanceledError";

    function Jf(a) {
      this.a = n.setTimeout(t(this.h, this), 0);
      this.g = a;
    }

    Jf.prototype.h = function () {
      delete If[this.a];
      throw this.g;
    };

    var If = {};

    function Kf(a) {
      var b = {},
          c = b.document || document,
          d = yc(a).toString(),
          e = document.createElement("SCRIPT"),
          f = {
        sb: e,
        tb: void 0
      },
          g = new zf(f),
          h = null,
          l = null != b.timeout ? b.timeout : 5E3;
      0 < l && (h = window.setTimeout(function () {
        Lf(e, !0);
        var p = new Mf(Nf, "Timeout reached for loading script " + d);
        Cf(g);
        Df(g, !1, p);
      }, l), f.tb = h);

      e.onload = e.onreadystatechange = function () {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Lf(e, b.wc || !1, h), g.callback(null));
      };

      e.onerror = function () {
        Lf(e, !0, h);
        var p = new Mf(Of, "Error while loading script " + d);
        Cf(g);
        Df(g, !1, p);
      };

      f = b.attributes || {};
      ib(f, {
        type: "text/javascript",
        charset: "UTF-8"
      });
      Yc(e, f);
      Pc(e, a);
      Pf(c).appendChild(e);
      return g;
    }

    function Pf(a) {
      var b = (a || document).getElementsByTagName("HEAD");
      return b && 0 != b.length ? b[0] : a.documentElement;
    }

    function Af() {
      if (this && this.sb) {
        var a = this.sb;
        a && "SCRIPT" == a.tagName && Lf(a, !0, this.tb);
      }
    }

    function Lf(a, b, c) {
      null != c && n.clearTimeout(c);
      a.onload = na;
      a.onerror = na;
      a.onreadystatechange = na;
      b && window.setTimeout(function () {
        ad(a);
      }, 0);
    }

    var Of = 0,
        Nf = 1;

    function Mf(a, b) {
      var c = "Jsloader error (code #" + a + ")";
      b && (c += ": " + b);
      Ba.call(this, c);
      this.code = a;
    }

    w(Mf, Ba);

    function Qf() {
      return n.google && n.google.accounts && n.google.accounts.id || null;
    }

    function Rf(a) {
      this.a = a || Qf();
      this.h = !1;
      this.g = null;
    }

    Rf.prototype.cancel = function () {
      this.a && this.h && (this.g && this.g(null), this.a.cancel());
    };

    function Sf(a, b, c) {
      if (a.a && b) return function () {
        a.h = !0;
        return new F(function (e) {
          a.g = e;
          a.a.initialize({
            client_id: b,
            callback: e,
            auto_select: !c
          });
          a.a.prompt();
        });
      }();

      if (b) {
        var d = Tf.Xa().load().then(function () {
          a.a = Qf();
          return Sf(a, b, c);
        }).ta(function () {
          return null;
        });
        return G(d);
      }

      return G(null);
    }

    oa(Rf);
    var Uf = new sc(tc, "https://accounts.google.com/gsi/client");

    function Tf() {
      this.a = null;
    }

    Tf.prototype.load = function () {
      var a = this;
      if (this.a) return this.a;
      var b = zc(vc(Uf));
      return Qf() ? G() : this.a = wf().then(function () {
        if (!Qf()) return new F(function (c, d) {
          var e = setTimeout(function () {
            a.a = null;
            d(Error("Network error!"));
          }, 1E4);

          n.onGoogleLibraryLoad = function () {
            clearTimeout(e);
            c();
          };

          G(Kf(b)).then(function () {
            Qf() && c();
          }).ta(function (f) {
            clearTimeout(e);
            a.a = null;
            d(f);
          });
        });
      });
    };

    oa(Tf);

    function Vf(a, b) {
      this.a = a;

      this.g = b || function (c) {
        throw c;
      };
    }

    Vf.prototype.confirm = function (a) {
      return G(this.a.confirm(a)).ta(this.g);
    };

    function Wf(a, b, c) {
      this.reset(a, b, c, void 0, void 0);
    }

    Wf.prototype.a = null;
    var Xf = 0;

    Wf.prototype.reset = function (a, b, c, d, e) {
      "number" == typeof e || Xf++;
      this.h = d || za();
      this.j = a;
      this.s = b;
      this.g = c;
      delete this.a;
    };

    function Yf(a) {
      this.s = a;
      this.a = this.h = this.j = this.g = null;
    }

    function Zf(a, b) {
      this.name = a;
      this.value = b;
    }

    Zf.prototype.toString = function () {
      return this.name;
    };

    var $f = new Zf("SEVERE", 1E3),
        ag = new Zf("WARNING", 900),
        bg = new Zf("CONFIG", 700);

    function cg(a) {
      if (a.j) return a.j;
      if (a.g) return cg(a.g);
      Fa("Root logger has no level set.");
      return null;
    }

    Yf.prototype.log = function (a, b, c) {
      if (a.value >= cg(this).value) for (sa(b) && (b = b()), a = new Wf(a, String(b), this.s), c && (a.a = c), c = this; c;) {
        var d = c,
            e = a;
        if (d.a) for (var f = 0; b = d.a[f]; f++) b(e);
        c = c.g;
      }
    };

    var dg = {},
        eg = null;

    function fg() {
      eg || (eg = new Yf(""), dg[""] = eg, eg.j = bg);
    }

    function gg(a) {
      fg();
      var b;

      if (!(b = dg[a])) {
        b = new Yf(a);
        var c = a.lastIndexOf("."),
            d = a.substr(c + 1);
        c = gg(a.substr(0, c));
        c.h || (c.h = {});
        c.h[d] = b;
        b.g = c;
        dg[a] = b;
      }

      return b;
    }

    function hg() {
      this.a = za();
    }

    var ig = null;

    hg.prototype.set = function (a) {
      this.a = a;
    };

    hg.prototype.reset = function () {
      this.set(za());
    };

    hg.prototype.get = function () {
      return this.a;
    };

    function jg(a) {
      this.j = a || "";
      ig || (ig = new hg());
      this.s = ig;
    }

    jg.prototype.a = !0;
    jg.prototype.g = !0;
    jg.prototype.h = !1;

    function kg(a) {
      return 10 > a ? "0" + a : String(a);
    }

    function lg(a, b) {
      a = (a.h - b) / 1E3;
      b = a.toFixed(3);
      var c = 0;
      if (1 > a) c = 2;else for (; 100 > a;) c++, a *= 10;

      for (; 0 < c--;) b = " " + b;

      return b;
    }

    function mg(a) {
      jg.call(this, a);
    }

    w(mg, jg);

    function ng(a, b) {
      var c = [];
      c.push(a.j, " ");

      if (a.g) {
        var d = new Date(b.h);
        c.push("[", kg(d.getFullYear() - 2E3) + kg(d.getMonth() + 1) + kg(d.getDate()) + " " + kg(d.getHours()) + ":" + kg(d.getMinutes()) + ":" + kg(d.getSeconds()) + "." + kg(Math.floor(d.getMilliseconds() / 10)), "] ");
      }

      c.push("[", lg(b, a.s.get()), "s] ");
      c.push("[", b.g, "] ");
      c.push(b.s);
      a.h && (b = b.a) && c.push("\n", b instanceof Error ? b.message : b.toString());
      a.a && c.push("\n");
      return c.join("");
    }

    function og() {
      this.s = t(this.h, this);
      this.a = new mg();
      this.a.g = !1;
      this.a.h = !1;
      this.g = this.a.a = !1;
      this.j = {};
    }

    og.prototype.h = function (a) {
      function b(f) {
        if (f) {
          if (f.value >= $f.value) return "error";
          if (f.value >= ag.value) return "warn";
          if (f.value >= bg.value) return "log";
        }

        return "debug";
      }

      if (!this.j[a.g]) {
        var c = ng(this.a, a),
            d = pg;

        if (d) {
          var e = b(a.j);
          qg(d, e, c, a.a);
        }
      }
    };

    var pg = n.console;

    function qg(a, b, c, d) {
      if (a[b]) a[b](c, d || "");else a.log(c, d || "");
    }

    function rg(a, b) {
      var c = sg;
      c && c.log($f, a, b);
    }

    var sg;
    sg = gg("firebaseui");
    var tg = new og();

    if (1 != tg.g) {
      var ug;
      fg();
      ug = eg;
      var vg = tg.s;
      ug.a || (ug.a = []);
      ug.a.push(vg);
      tg.g = !0;
    }

    function wg(a) {
      var b = sg;
      b && b.log(ag, a, void 0);
    }

    function xg(a, b, c, d) {
      this.a = a;
      this.h = b || null;
      this.j = c || null;
      this.g = d || null;
    }

    xg.prototype.aa = function () {
      return {
        email: this.a,
        displayName: this.h,
        photoUrl: this.j,
        providerId: this.g
      };
    };

    function yg(a) {
      return a.email ? new xg(a.email, a.displayName, a.photoUrl, a.providerId) : null;
    }

    function zg() {
      this.a = ("undefined" == typeof document ? null : document) || {
        cookie: ""
      };
    }

    k = zg.prototype;

    k.set = function (a, b, c, d, e, f) {
      if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
      if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
      ka(c) || (c = -1);
      e = e ? ";domain=" + e : "";
      d = d ? ";path=" + d : "";
      f = f ? ";secure" : "";
      c = 0 > c ? "" : 0 == c ? ";expires=" + new Date(1970, 1, 1).toUTCString() : ";expires=" + new Date(za() + 1E3 * c).toUTCString();
      this.a.cookie = a + "=" + b + e + d + c + f;
    };

    k.get = function (a, b) {
      for (var c = a + "=", d = (this.a.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
        f = Wa(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
        if (f == a) return "";
      }

      return b;
    };

    k.ja = function () {
      return Ag(this).keys;
    };

    k.la = function () {
      return Ag(this).values;
    };

    k.clear = function () {
      for (var a = Ag(this).keys, b = a.length - 1; 0 <= b; b--) {
        var c = a[b];
        this.get(c);
        this.set(c, "", 0, void 0, void 0);
      }
    };

    function Ag(a) {
      a = (a.a.cookie || "").split(";");

      for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = Wa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));

      return {
        keys: b,
        values: c
      };
    }

    var Bg = new zg();

    function Cg() {}

    function Dg(a, b, c, d) {
      this.h = "undefined" !== typeof a && null !== a ? a : -1;
      this.g = b || null;
      this.a = c || null;
      this.j = !!d;
    }

    m(Dg, Cg);

    Dg.prototype.set = function (a, b) {
      Bg.set(a, b, this.h, this.g, this.a, this.j);
    };

    Dg.prototype.get = function (a) {
      return Bg.get(a) || null;
    };

    Dg.prototype.ra = function (a) {
      var b = this.g,
          c = this.a;
      Bg.get(a);
      Bg.set(a, "", 0, b, c);
    };

    function Eg(a, b) {
      this.g = a;
      this.a = b || null;
    }

    Eg.prototype.aa = function () {
      return {
        email: this.g,
        credential: this.a && this.a.toJSON()
      };
    };

    function Fg(a) {
      if (a && a.email) {
        var b = a.credential && firebase.auth.AuthCredential.fromJSON(a.credential);
        return new Eg(a.email, b);
      }

      return null;
    }

    function Gg(a) {
      this.a = a || null;
    }

    Gg.prototype.aa = function () {
      return {
        tenantId: this.a
      };
    };

    function Hg(a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e;
      }

      return b;
    }

    function Ig(a) {
      return Ka(a, function (b) {
        b = b.toString(16);
        return 1 < b.length ? b : "0" + b;
      }).join("");
    }

    function Jg(a) {
      this.i = a;
      this.g = this.i.length / 4;
      this.j = this.g + 6;
      this.h = [[], [], [], []];
      this.s = [[], [], [], []];
      this.a = Array(Lg * (this.j + 1));

      for (a = 0; a < this.g; a++) this.a[a] = [this.i[4 * a], this.i[4 * a + 1], this.i[4 * a + 2], this.i[4 * a + 3]];

      var b = Array(4);

      for (a = this.g; a < Lg * (this.j + 1); a++) {
        b[0] = this.a[a - 1][0];
        b[1] = this.a[a - 1][1];
        b[2] = this.a[a - 1][2];
        b[3] = this.a[a - 1][3];

        if (0 == a % this.g) {
          var c = b,
              d = c[0];
          c[0] = c[1];
          c[1] = c[2];
          c[2] = c[3];
          c[3] = d;
          Mg(b);
          b[0] ^= Ng[a / this.g][0];
          b[1] ^= Ng[a / this.g][1];
          b[2] ^= Ng[a / this.g][2];
          b[3] ^= Ng[a / this.g][3];
        } else 6 < this.g && 4 == a % this.g && Mg(b);

        this.a[a] = Array(4);
        this.a[a][0] = this.a[a - this.g][0] ^ b[0];
        this.a[a][1] = this.a[a - this.g][1] ^ b[1];
        this.a[a][2] = this.a[a - this.g][2] ^ b[2];
        this.a[a][3] = this.a[a - this.g][3] ^ b[3];
      }
    }

    Jg.prototype.B = 16;
    var Lg = Jg.prototype.B / 4;

    function Og(a, b) {
      for (var c, d = 0; d < Lg; d++) for (var e = 0; 4 > e; e++) c = 4 * e + d, c = b[c], a.h[d][e] = c;
    }

    function Pg(a) {
      for (var b = [], c = 0; c < Lg; c++) for (var d = 0; 4 > d; d++) b[4 * d + c] = a.h[c][d];

      return b;
    }

    function Qg(a, b) {
      for (var c = 0; 4 > c; c++) for (var d = 0; 4 > d; d++) a.h[c][d] ^= a.a[4 * b + d][c];
    }

    function Rg(a, b) {
      for (var c = 0; 4 > c; c++) for (var d = 0; 4 > d; d++) a.h[c][d] = b[a.h[c][d]];
    }

    function Sg(a) {
      for (var b = 1; 4 > b; b++) for (var c = 0; 4 > c; c++) a.s[b][c] = a.h[b][c];

      for (b = 1; 4 > b; b++) for (c = 0; 4 > c; c++) a.h[b][c] = a.s[b][(c + b) % Lg];
    }

    function Tg(a) {
      for (var b = 1; 4 > b; b++) for (var c = 0; 4 > c; c++) a.s[b][(c + b) % Lg] = a.h[b][c];

      for (b = 1; 4 > b; b++) for (c = 0; 4 > c; c++) a.h[b][c] = a.s[b][c];
    }

    function Mg(a) {
      a[0] = Ug[a[0]];
      a[1] = Ug[a[1]];
      a[2] = Ug[a[2]];
      a[3] = Ug[a[3]];
    }

    var Ug = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
        Vg = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
        Ng = [[0, 0, 0, 0], [1, 0, 0, 0], [2, 0, 0, 0], [4, 0, 0, 0], [8, 0, 0, 0], [16, 0, 0, 0], [32, 0, 0, 0], [64, 0, 0, 0], [128, 0, 0, 0], [27, 0, 0, 0], [54, 0, 0, 0]],
        Wg = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 246, 248, 250, 252, 254, 27, 25, 31, 29, 19, 17, 23, 21, 11, 9, 15, 13, 3, 1, 7, 5, 59, 57, 63, 61, 51, 49, 55, 53, 43, 41, 47, 45, 35, 33, 39, 37, 91, 89, 95, 93, 83, 81, 87, 85, 75, 73, 79, 77, 67, 65, 71, 69, 123, 121, 127, 125, 115, 113, 119, 117, 107, 105, 111, 109, 99, 97, 103, 101, 155, 153, 159, 157, 147, 145, 151, 149, 139, 137, 143, 141, 131, 129, 135, 133, 187, 185, 191, 189, 179, 177, 183, 181, 171, 169, 175, 173, 163, 161, 167, 165, 219, 217, 223, 221, 211, 209, 215, 213, 203, 201, 207, 205, 195, 193, 199, 197, 251, 249, 255, 253, 243, 241, 247, 245, 235, 233, 239, 237, 227, 225, 231, 229],
        Xg = [0, 3, 6, 5, 12, 15, 10, 9, 24, 27, 30, 29, 20, 23, 18, 17, 48, 51, 54, 53, 60, 63, 58, 57, 40, 43, 46, 45, 36, 39, 34, 33, 96, 99, 102, 101, 108, 111, 106, 105, 120, 123, 126, 125, 116, 119, 114, 113, 80, 83, 86, 85, 92, 95, 90, 89, 72, 75, 78, 77, 68, 71, 66, 65, 192, 195, 198, 197, 204, 207, 202, 201, 216, 219, 222, 221, 212, 215, 210, 209, 240, 243, 246, 245, 252, 255, 250, 249, 232, 235, 238, 237, 228, 231, 226, 225, 160, 163, 166, 165, 172, 175, 170, 169, 184, 187, 190, 189, 180, 183, 178, 177, 144, 147, 150, 149, 156, 159, 154, 153, 136, 139, 142, 141, 132, 135, 130, 129, 155, 152, 157, 158, 151, 148, 145, 146, 131, 128, 133, 134, 143, 140, 137, 138, 171, 168, 173, 174, 167, 164, 161, 162, 179, 176, 181, 182, 191, 188, 185, 186, 251, 248, 253, 254, 247, 244, 241, 242, 227, 224, 229, 230, 239, 236, 233, 234, 203, 200, 205, 206, 199, 196, 193, 194, 211, 208, 213, 214, 223, 220, 217, 218, 91, 88, 93, 94, 87, 84, 81, 82, 67, 64, 69, 70, 79, 76, 73, 74, 107, 104, 109, 110, 103, 100, 97, 98, 115, 112, 117, 118, 127, 124, 121, 122, 59, 56, 61, 62, 55, 52, 49, 50, 35, 32, 37, 38, 47, 44, 41, 42, 11, 8, 13, 14, 7, 4, 1, 2, 19, 16, 21, 22, 31, 28, 25, 26],
        Yg = [0, 9, 18, 27, 36, 45, 54, 63, 72, 65, 90, 83, 108, 101, 126, 119, 144, 153, 130, 139, 180, 189, 166, 175, 216, 209, 202, 195, 252, 245, 238, 231, 59, 50, 41, 32, 31, 22, 13, 4, 115, 122, 97, 104, 87, 94, 69, 76, 171, 162, 185, 176, 143, 134, 157, 148, 227, 234, 241, 248, 199, 206, 213, 220, 118, 127, 100, 109, 82, 91, 64, 73, 62, 55, 44, 37, 26, 19, 8, 1, 230, 239, 244, 253, 194, 203, 208, 217, 174, 167, 188, 181, 138, 131, 152, 145, 77, 68, 95, 86, 105, 96, 123, 114, 5, 12, 23, 30, 33, 40, 51, 58, 221, 212, 207, 198, 249, 240, 235, 226, 149, 156, 135, 142, 177, 184, 163, 170, 236, 229, 254, 247, 200, 193, 218, 211, 164, 173, 182, 191, 128, 137, 146, 155, 124, 117, 110, 103, 88, 81, 74, 67, 52, 61, 38, 47, 16, 25, 2, 11, 215, 222, 197, 204, 243, 250, 225, 232, 159, 150, 141, 132, 187, 178, 169, 160, 71, 78, 85, 92, 99, 106, 113, 120, 15, 6, 29, 20, 43, 34, 57, 48, 154, 147, 136, 129, 190, 183, 172, 165, 210, 219, 192, 201, 246, 255, 228, 237, 10, 3, 24, 17, 46, 39, 60, 53, 66, 75, 80, 89, 102, 111, 116, 125, 161, 168, 179, 186, 133, 140, 151, 158, 233, 224, 251, 242, 205, 196, 223, 214, 49, 56, 35, 42, 21, 28, 7, 14, 121, 112, 107, 98, 93, 84, 79, 70],
        Zg = [0, 11, 22, 29, 44, 39, 58, 49, 88, 83, 78, 69, 116, 127, 98, 105, 176, 187, 166, 173, 156, 151, 138, 129, 232, 227, 254, 245, 196, 207, 210, 217, 123, 112, 109, 102, 87, 92, 65, 74, 35, 40, 53, 62, 15, 4, 25, 18, 203, 192, 221, 214, 231, 236, 241, 250, 147, 152, 133, 142, 191, 180, 169, 162, 246, 253, 224, 235, 218, 209, 204, 199, 174, 165, 184, 179, 130, 137, 148, 159, 70, 77, 80, 91, 106, 97, 124, 119, 30, 21, 8, 3, 50, 57, 36, 47, 141, 134, 155, 144, 161, 170, 183, 188, 213, 222, 195, 200, 249, 242, 239, 228, 61, 54, 43, 32, 17, 26, 7, 12, 101, 110, 115, 120, 73, 66, 95, 84, 247, 252, 225, 234, 219, 208, 205, 198, 175, 164, 185, 178, 131, 136, 149, 158, 71, 76, 81, 90, 107, 96, 125, 118, 31, 20, 9, 2, 51, 56, 37, 46, 140, 135, 154, 145, 160, 171, 182, 189, 212, 223, 194, 201, 248, 243, 238, 229, 60, 55, 42, 33, 16, 27, 6, 13, 100, 111, 114, 121, 72, 67, 94, 85, 1, 10, 23, 28, 45, 38, 59, 48, 89, 82, 79, 68, 117, 126, 99, 104, 177, 186, 167, 172, 157, 150, 139, 128, 233, 226, 255, 244, 197, 206, 211, 216, 122, 113, 108, 103, 86, 93, 64, 75, 34, 41, 52, 63, 14, 5, 24, 19, 202, 193, 220, 215, 230, 237, 240, 251, 146, 153, 132, 143, 190, 181, 168, 163],
        $g = [0, 13, 26, 23, 52, 57, 46, 35, 104, 101, 114, 127, 92, 81, 70, 75, 208, 221, 202, 199, 228, 233, 254, 243, 184, 181, 162, 175, 140, 129, 150, 155, 187, 182, 161, 172, 143, 130, 149, 152, 211, 222, 201, 196, 231, 234, 253, 240, 107, 102, 113, 124, 95, 82, 69, 72, 3, 14, 25, 20, 55, 58, 45, 32, 109, 96, 119, 122, 89, 84, 67, 78, 5, 8, 31, 18, 49, 60, 43, 38, 189, 176, 167, 170, 137, 132, 147, 158, 213, 216, 207, 194, 225, 236, 251, 246, 214, 219, 204, 193, 226, 239, 248, 245, 190, 179, 164, 169, 138, 135, 144, 157, 6, 11, 28, 17, 50, 63, 40, 37, 110, 99, 116, 121, 90, 87, 64, 77, 218, 215, 192, 205, 238, 227, 244, 249, 178, 191, 168, 165, 134, 139, 156, 145, 10, 7, 16, 29, 62, 51, 36, 41, 98, 111, 120, 117, 86, 91, 76, 65, 97, 108, 123, 118, 85, 88, 79, 66, 9, 4, 19, 30, 61, 48, 39, 42, 177, 188, 171, 166, 133, 136, 159, 146, 217, 212, 195, 206, 237, 224, 247, 250, 183, 186, 173, 160, 131, 142, 153, 148, 223, 210, 197, 200, 235, 230, 241, 252, 103, 106, 125, 112, 83, 94, 73, 68, 15, 2, 21, 24, 59, 54, 33, 44, 12, 1, 22, 27, 56, 53, 34, 47, 100, 105, 126, 115, 80, 93, 74, 71, 220, 209, 198, 203, 232, 229, 242, 255, 180, 185, 174, 163, 128, 141, 154, 151],
        ah = [0, 14, 28, 18, 56, 54, 36, 42, 112, 126, 108, 98, 72, 70, 84, 90, 224, 238, 252, 242, 216, 214, 196, 202, 144, 158, 140, 130, 168, 166, 180, 186, 219, 213, 199, 201, 227, 237, 255, 241, 171, 165, 183, 185, 147, 157, 143, 129, 59, 53, 39, 41, 3, 13, 31, 17, 75, 69, 87, 89, 115, 125, 111, 97, 173, 163, 177, 191, 149, 155, 137, 135, 221, 211, 193, 207, 229, 235, 249, 247, 77, 67, 81, 95, 117, 123, 105, 103, 61, 51, 33, 47, 5, 11, 25, 23, 118, 120, 106, 100, 78, 64, 82, 92, 6, 8, 26, 20, 62, 48, 34, 44, 150, 152, 138, 132, 174, 160, 178, 188, 230, 232, 250, 244, 222, 208, 194, 204, 65, 79, 93, 83, 121, 119, 101, 107, 49, 63, 45, 35, 9, 7, 21, 27, 161, 175, 189, 179, 153, 151, 133, 139, 209, 223, 205, 195, 233, 231, 245, 251, 154, 148, 134, 136, 162, 172, 190, 176, 234, 228, 246, 248, 210, 220, 206, 192, 122, 116, 102, 104, 66, 76, 94, 80, 10, 4, 22, 24, 50, 60, 46, 32, 236, 226, 240, 254, 212, 218, 200, 198, 156, 146, 128, 142, 164, 170, 184, 182, 12, 2, 16, 30, 52, 58, 40, 38, 124, 114, 96, 110, 68, 74, 88, 86, 55, 57, 43, 37, 15, 1, 19, 29, 71, 73, 91, 85, 127, 113, 99, 109, 215, 217, 203, 197, 239, 225, 243, 253, 167, 169, 187, 181, 159, 145, 131, 141];

    function bh(a, b) {
      a = new Jg(ch(a));
      b = Hg(b);

      for (var c = Ua(b, 0, 16), d = "", e; c.length;) {
        e = 16 - c.length;

        for (var f = 0; f < e; f++) c.push(0);

        e = a;
        Og(e, c);
        Qg(e, 0);

        for (c = 1; c < e.j; ++c) {
          Rg(e, Ug);
          Sg(e);
          f = e.h;

          for (var g = e.s[0], h = 0; 4 > h; h++) g[0] = f[0][h], g[1] = f[1][h], g[2] = f[2][h], g[3] = f[3][h], f[0][h] = Wg[g[0]] ^ Xg[g[1]] ^ g[2] ^ g[3], f[1][h] = g[0] ^ Wg[g[1]] ^ Xg[g[2]] ^ g[3], f[2][h] = g[0] ^ g[1] ^ Wg[g[2]] ^ Xg[g[3]], f[3][h] = Xg[g[0]] ^ g[1] ^ g[2] ^ Wg[g[3]];

          Qg(e, c);
        }

        Rg(e, Ug);
        Sg(e);
        Qg(e, e.j);
        d += Ig(Pg(e));
        c = Ua(b, 0, 16);
      }

      return d;
    }

    function dh(a, b) {
      a = new Jg(ch(a));

      for (var c = [], d = 0; d < b.length; d += 2) c.push(parseInt(b.substring(d, d + 2), 16));

      var e = Ua(c, 0, 16);

      for (b = ""; e.length;) {
        d = a;
        Og(d, e);
        Qg(d, d.j);

        for (e = 1; e < d.j; ++e) {
          Tg(d);
          Rg(d, Vg);
          Qg(d, d.j - e);

          for (var f = d.h, g = d.s[0], h = 0; 4 > h; h++) g[0] = f[0][h], g[1] = f[1][h], g[2] = f[2][h], g[3] = f[3][h], f[0][h] = ah[g[0]] ^ Zg[g[1]] ^ $g[g[2]] ^ Yg[g[3]], f[1][h] = Yg[g[0]] ^ ah[g[1]] ^ Zg[g[2]] ^ $g[g[3]], f[2][h] = $g[g[0]] ^ Yg[g[1]] ^ ah[g[2]] ^ Zg[g[3]], f[3][h] = Zg[g[0]] ^ $g[g[1]] ^ Yg[g[2]] ^ ah[g[3]];
        }

        Tg(d);
        Rg(d, Vg);
        Qg(d, 0);
        d = Pg(d);
        if (8192 >= d.length) d = String.fromCharCode.apply(null, d);else {
          e = "";

          for (f = 0; f < d.length; f += 8192) e += String.fromCharCode.apply(null, Va(d, f, f + 8192));

          d = e;
        }
        b += d;
        e = Ua(c, 0, 16);
      }

      return b.replace(/(\x00)+$/, "");
    }

    function ch(a) {
      a = Hg(a.substring(0, 32));

      for (var b = 32 - a.length, c = 0; c < b; c++) a.push(0);

      return a;
    }

    function eh(a) {
      var b = [];
      fh(new gh(), a, b);
      return b.join("");
    }

    function gh() {}

    function fh(a, b, c) {
      if (null == b) c.push("null");else {
        if ("object" == typeof b) {
          if (qa(b)) {
            var d = b;
            b = d.length;
            c.push("[");

            for (var e = "", f = 0; f < b; f++) c.push(e), fh(a, d[f], c), e = ",";

            c.push("]");
            return;
          }

          if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
            c.push("{");
            e = "";

            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), hh(d, c), c.push(":"), fh(a, f, c), e = ","));

            c.push("}");
            return;
          }
        }

        switch (typeof b) {
          case "string":
            hh(b, c);
            break;

          case "number":
            c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
            break;

          case "boolean":
            c.push(String(b));
            break;

          case "function":
            c.push("null");
            break;

          default:
            throw Error("Unknown type: " + typeof b);
        }
      }
    }

    var ih = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\u000b"
    },
        jh = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function hh(a, b) {
      b.push('"', a.replace(jh, function (c) {
        var d = ih[c];
        d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), ih[c] = d);
        return d;
      }), '"');
    }

    function kh(a) {
      this.a = a;
    }

    kh.prototype.set = function (a, b) {
      ka(b) ? this.a.set(a, eh(b)) : this.a.ra(a);
    };

    kh.prototype.get = function (a) {
      try {
        var b = this.a.get(a);
      } catch (c) {
        return;
      }

      if (null !== b) try {
        return JSON.parse(b);
      } catch (c$3) {
        throw "Storage: Invalid value was encountered";
      }
    };

    function lh() {}

    w(lh, Cg);

    lh.prototype.clear = function () {
      var a = nb(this.ha(!0)),
          b = this;
      Ha(a, function (c) {
        b.ra(c);
      });
    };

    function mh(a) {
      this.a = a;
    }

    w(mh, lh);

    function nh(a) {
      if (!a.a) return !1;

      try {
        return a.a.setItem("__sak", "1"), a.a.removeItem("__sak"), !0;
      } catch (b) {
        return !1;
      }
    }

    k = mh.prototype;

    k.set = function (a, b) {
      try {
        this.a.setItem(a, b);
      } catch (c) {
        if (0 == this.a.length) throw "Storage mechanism: Storage disabled";
        throw "Storage mechanism: Quota exceeded";
      }
    };

    k.get = function (a) {
      a = this.a.getItem(a);
      if (!q(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
      return a;
    };

    k.ra = function (a) {
      this.a.removeItem(a);
    };

    k.ha = function (a) {
      var b = 0,
          c = this.a,
          d = new kb();

      d.next = function () {
        if (b >= c.length) throw jb;
        var e = c.key(b++);
        if (a) return e;
        e = c.getItem(e);
        if (!q(e)) throw "Storage mechanism: Invalid value was encountered";
        return e;
      };

      return d;
    };

    k.clear = function () {
      this.a.clear();
    };

    k.key = function (a) {
      return this.a.key(a);
    };

    function oh() {
      var a = null;

      try {
        a = window.localStorage || null;
      } catch (b) {}

      this.a = a;
    }

    w(oh, mh);

    function ph() {
      var a = null;

      try {
        a = window.sessionStorage || null;
      } catch (b) {}

      this.a = a;
    }

    w(ph, mh);

    function qh(a, b) {
      this.g = a;
      this.a = b + "::";
    }

    w(qh, lh);

    qh.prototype.set = function (a, b) {
      this.g.set(this.a + a, b);
    };

    qh.prototype.get = function (a) {
      return this.g.get(this.a + a);
    };

    qh.prototype.ra = function (a) {
      this.g.ra(this.a + a);
    };

    qh.prototype.ha = function (a) {
      var b = this.g.ha(!0),
          c = this,
          d = new kb();

      d.next = function () {
        for (var e = b.next(); e.substr(0, c.a.length) != c.a;) e = b.next();

        return a ? e.substr(c.a.length) : c.g.get(e);
      };

      return d;
    };

    var rh,
        sh = new oh();
    rh = nh(sh) ? new qh(sh, "firebaseui") : null;
    var th = new kh(rh),
        uh,
        vh = new ph();
    uh = nh(vh) ? new qh(vh, "firebaseui") : null;
    var wh = new kh(uh),
        xh = {
      name: "pendingEmailCredential",
      storage: wh
    },
        yh = {
      name: "redirectStatus",
      storage: wh
    },
        zh = {
      name: "redirectUrl",
      storage: wh
    },
        Ah = {
      name: "rememberAccount",
      storage: wh
    },
        Bh = {
      name: "rememberedAccounts",
      storage: th
    },
        Ch = {
      name: "emailForSignIn",
      storage: new kh(new Dg(3600, "/"))
    },
        Dh = {
      name: "pendingEncryptedCredential",
      storage: new kh(new Dg(3600, "/"))
    };

    function Eh(a, b) {
      return a.storage.get(b ? a.name + ":" + b : a.name);
    }

    function Fh(a, b) {
      a.storage.a.ra(b ? a.name + ":" + b : a.name);
    }

    function Gh(a, b, c) {
      a.storage.set(c ? a.name + ":" + c : a.name, b);
    }

    function Hh(a) {
      return Eh(zh, a) || null;
    }

    function Ih(a, b) {
      Gh(zh, a, b);
    }

    function Jh(a, b) {
      Gh(Ah, a, b);
    }

    function Kh(a) {
      a = Eh(Bh, a) || [];
      a = Ka(a, function (b) {
        return yg(b);
      });
      return Ja(a, function (b) {
        return null != b;
      });
    }

    function Lh(a, b) {
      var c = Kh(b),
          d = Ma(c, function (e) {
        return e.a == a.a && (e.g || null) == (a.g || null);
      });
      -1 < d && Pa(c, d);
      c.unshift(a);
      Gh(Bh, Ka(c, function (e) {
        return e.aa();
      }), b);
    }

    function Mh(a) {
      a = Eh(xh, a) || null;
      return Fg(a);
    }

    function Nh(a) {
      Fh(xh, a);
    }

    function Oh(a, b) {
      Gh(xh, a.aa(), b);
    }

    function Ph(a) {
      return (a = Eh(yh, a) || null) && "undefined" !== typeof a.tenantId ? new Gg(a.tenantId) : null;
    }

    function Qh(a, b) {
      Gh(yh, a.aa(), b);
    }

    function Rh(a, b) {
      b = Eh(Ch, b);
      var c = null;
      if (b) try {
        var d = dh(a, b),
            e = JSON.parse(d);
        c = e && e.email || null;
      } catch (f) {}
      return c;
    }

    function Sh(a, b) {
      b = Eh(Dh, b);
      var c = null;
      if (b) try {
        var d = dh(a, b);
        c = JSON.parse(d);
      } catch (e) {}
      return Fg(c || null);
    }

    function Th(a, b, c) {
      Gh(Dh, bh(a, JSON.stringify(b.aa())), c);
    }

    function Uh() {
      this.V = {};
    }

    function H(a, b, c) {
      if (b.toLowerCase() in a.V) throw Error("Configuration " + b + " has already been defined.");
      a.V[b.toLowerCase()] = c;
    }

    function Vh(a, b, c) {
      if (!(b.toLowerCase() in a.V)) throw Error("Configuration " + b + " is not defined.");
      a.V[b.toLowerCase()] = c;
    }

    Uh.prototype.get = function (a) {
      if (!(a.toLowerCase() in this.V)) throw Error("Configuration " + a + " is not defined.");
      return this.V[a.toLowerCase()];
    };

    function Wh(a, b) {
      a = a.get(b);
      if (!a) throw Error("Configuration " + b + " is required.");
      return a;
    }

    function Xh() {
      this.g = void 0;
      this.a = {};
    }

    k = Xh.prototype;

    k.set = function (a, b) {
      Yh(this, a, b, !1);
    };

    k.add = function (a, b) {
      Yh(this, a, b, !0);
    };

    function Yh(a, b, c, d) {
      for (var e = 0; e < b.length; e++) {
        var f = b.charAt(e);
        a.a[f] || (a.a[f] = new Xh());
        a = a.a[f];
      }

      if (d && void 0 !== a.g) throw Error('The collection already contains the key "' + b + '"');
      a.g = c;
    }

    k.get = function (a) {
      a: {
        for (var b = this, c = 0; c < a.length; c++) if (b = b.a[a.charAt(c)], !b) {
          a = void 0;
          break a;
        }

        a = b;
      }

      return a ? a.g : void 0;
    };

    k.la = function () {
      var a = [];
      Zh(this, a);
      return a;
    };

    function Zh(a, b) {
      void 0 !== a.g && b.push(a.g);

      for (var c in a.a) Zh(a.a[c], b);
    }

    k.ja = function () {
      var a = [];
      $h(this, "", a);
      return a;
    };

    function $h(a, b, c) {
      void 0 !== a.g && c.push(b);

      for (var d in a.a) $h(a.a[d], b + d, c);
    }

    k.clear = function () {
      this.a = {};
      this.g = void 0;
    };

    function ai(a) {
      this.a = a;
      this.g = new Xh();

      for (a = 0; a < this.a.length; a++) {
        var b = this.g.get("+" + this.a[a].b);
        b ? b.push(this.a[a]) : this.g.add("+" + this.a[a].b, [this.a[a]]);
      }
    }

    function bi(a, b) {
      a = a.g;
      var c = {},
          d = 0;
      void 0 !== a.g && (c[d] = a.g);

      for (; d < b.length; d++) {
        var e = b.charAt(d);
        if (!(e in a.a)) break;
        a = a.a[e];
        void 0 !== a.g && (c[d] = a.g);
      }

      for (var f in c) if (c.hasOwnProperty(f)) return c[f];

      return [];
    }

    function ci(a) {
      for (var b = 0; b < di.length; b++) if (di[b].c === a) return di[b];

      return null;
    }

    function ei(a) {
      a = a.toUpperCase();

      for (var b = [], c = 0; c < di.length; c++) di[c].f === a && b.push(di[c]);

      return b;
    }

    function fi(a) {
      if (0 < a.length && "+" == a.charAt(0)) {
        a = a.substring(1);

        for (var b = [], c = 0; c < di.length; c++) di[c].b == a && b.push(di[c]);

        a = b;
      } else a = ei(a);

      return a;
    }

    function gi(a) {
      a.sort(function (b, c) {
        return b.name.localeCompare(c.name, "en");
      });
    }

    var di = [{
      name: "Afghanistan",
      c: "93-AF-0",
      b: "93",
      f: "AF"
    }, {
      name: "\u00c5land Islands",
      c: "358-AX-0",
      b: "358",
      f: "AX"
    }, {
      name: "Albania",
      c: "355-AL-0",
      b: "355",
      f: "AL"
    }, {
      name: "Algeria",
      c: "213-DZ-0",
      b: "213",
      f: "DZ"
    }, {
      name: "American Samoa",
      c: "1-AS-0",
      b: "1",
      f: "AS"
    }, {
      name: "Andorra",
      c: "376-AD-0",
      b: "376",
      f: "AD"
    }, {
      name: "Angola",
      c: "244-AO-0",
      b: "244",
      f: "AO"
    }, {
      name: "Anguilla",
      c: "1-AI-0",
      b: "1",
      f: "AI"
    }, {
      name: "Antigua and Barbuda",
      c: "1-AG-0",
      b: "1",
      f: "AG"
    }, {
      name: "Argentina",
      c: "54-AR-0",
      b: "54",
      f: "AR"
    }, {
      name: "Armenia",
      c: "374-AM-0",
      b: "374",
      f: "AM"
    }, {
      name: "Aruba",
      c: "297-AW-0",
      b: "297",
      f: "AW"
    }, {
      name: "Ascension Island",
      c: "247-AC-0",
      b: "247",
      f: "AC"
    }, {
      name: "Australia",
      c: "61-AU-0",
      b: "61",
      f: "AU"
    }, {
      name: "Austria",
      c: "43-AT-0",
      b: "43",
      f: "AT"
    }, {
      name: "Azerbaijan",
      c: "994-AZ-0",
      b: "994",
      f: "AZ"
    }, {
      name: "Bahamas",
      c: "1-BS-0",
      b: "1",
      f: "BS"
    }, {
      name: "Bahrain",
      c: "973-BH-0",
      b: "973",
      f: "BH"
    }, {
      name: "Bangladesh",
      c: "880-BD-0",
      b: "880",
      f: "BD"
    }, {
      name: "Barbados",
      c: "1-BB-0",
      b: "1",
      f: "BB"
    }, {
      name: "Belarus",
      c: "375-BY-0",
      b: "375",
      f: "BY"
    }, {
      name: "Belgium",
      c: "32-BE-0",
      b: "32",
      f: "BE"
    }, {
      name: "Belize",
      c: "501-BZ-0",
      b: "501",
      f: "BZ"
    }, {
      name: "Benin",
      c: "229-BJ-0",
      b: "229",
      f: "BJ"
    }, {
      name: "Bermuda",
      c: "1-BM-0",
      b: "1",
      f: "BM"
    }, {
      name: "Bhutan",
      c: "975-BT-0",
      b: "975",
      f: "BT"
    }, {
      name: "Bolivia",
      c: "591-BO-0",
      b: "591",
      f: "BO"
    }, {
      name: "Bosnia and Herzegovina",
      c: "387-BA-0",
      b: "387",
      f: "BA"
    }, {
      name: "Botswana",
      c: "267-BW-0",
      b: "267",
      f: "BW"
    }, {
      name: "Brazil",
      c: "55-BR-0",
      b: "55",
      f: "BR"
    }, {
      name: "British Indian Ocean Territory",
      c: "246-IO-0",
      b: "246",
      f: "IO"
    }, {
      name: "British Virgin Islands",
      c: "1-VG-0",
      b: "1",
      f: "VG"
    }, {
      name: "Brunei",
      c: "673-BN-0",
      b: "673",
      f: "BN"
    }, {
      name: "Bulgaria",
      c: "359-BG-0",
      b: "359",
      f: "BG"
    }, {
      name: "Burkina Faso",
      c: "226-BF-0",
      b: "226",
      f: "BF"
    }, {
      name: "Burundi",
      c: "257-BI-0",
      b: "257",
      f: "BI"
    }, {
      name: "Cambodia",
      c: "855-KH-0",
      b: "855",
      f: "KH"
    }, {
      name: "Cameroon",
      c: "237-CM-0",
      b: "237",
      f: "CM"
    }, {
      name: "Canada",
      c: "1-CA-0",
      b: "1",
      f: "CA"
    }, {
      name: "Cape Verde",
      c: "238-CV-0",
      b: "238",
      f: "CV"
    }, {
      name: "Caribbean Netherlands",
      c: "599-BQ-0",
      b: "599",
      f: "BQ"
    }, {
      name: "Cayman Islands",
      c: "1-KY-0",
      b: "1",
      f: "KY"
    }, {
      name: "Central African Republic",
      c: "236-CF-0",
      b: "236",
      f: "CF"
    }, {
      name: "Chad",
      c: "235-TD-0",
      b: "235",
      f: "TD"
    }, {
      name: "Chile",
      c: "56-CL-0",
      b: "56",
      f: "CL"
    }, {
      name: "China",
      c: "86-CN-0",
      b: "86",
      f: "CN"
    }, {
      name: "Christmas Island",
      c: "61-CX-0",
      b: "61",
      f: "CX"
    }, {
      name: "Cocos [Keeling] Islands",
      c: "61-CC-0",
      b: "61",
      f: "CC"
    }, {
      name: "Colombia",
      c: "57-CO-0",
      b: "57",
      f: "CO"
    }, {
      name: "Comoros",
      c: "269-KM-0",
      b: "269",
      f: "KM"
    }, {
      name: "Democratic Republic Congo",
      c: "243-CD-0",
      b: "243",
      f: "CD"
    }, {
      name: "Republic of Congo",
      c: "242-CG-0",
      b: "242",
      f: "CG"
    }, {
      name: "Cook Islands",
      c: "682-CK-0",
      b: "682",
      f: "CK"
    }, {
      name: "Costa Rica",
      c: "506-CR-0",
      b: "506",
      f: "CR"
    }, {
      name: "C\u00f4te d'Ivoire",
      c: "225-CI-0",
      b: "225",
      f: "CI"
    }, {
      name: "Croatia",
      c: "385-HR-0",
      b: "385",
      f: "HR"
    }, {
      name: "Cuba",
      c: "53-CU-0",
      b: "53",
      f: "CU"
    }, {
      name: "Cura\u00e7ao",
      c: "599-CW-0",
      b: "599",
      f: "CW"
    }, {
      name: "Cyprus",
      c: "357-CY-0",
      b: "357",
      f: "CY"
    }, {
      name: "Czech Republic",
      c: "420-CZ-0",
      b: "420",
      f: "CZ"
    }, {
      name: "Denmark",
      c: "45-DK-0",
      b: "45",
      f: "DK"
    }, {
      name: "Djibouti",
      c: "253-DJ-0",
      b: "253",
      f: "DJ"
    }, {
      name: "Dominica",
      c: "1-DM-0",
      b: "1",
      f: "DM"
    }, {
      name: "Dominican Republic",
      c: "1-DO-0",
      b: "1",
      f: "DO"
    }, {
      name: "East Timor",
      c: "670-TL-0",
      b: "670",
      f: "TL"
    }, {
      name: "Ecuador",
      c: "593-EC-0",
      b: "593",
      f: "EC"
    }, {
      name: "Egypt",
      c: "20-EG-0",
      b: "20",
      f: "EG"
    }, {
      name: "El Salvador",
      c: "503-SV-0",
      b: "503",
      f: "SV"
    }, {
      name: "Equatorial Guinea",
      c: "240-GQ-0",
      b: "240",
      f: "GQ"
    }, {
      name: "Eritrea",
      c: "291-ER-0",
      b: "291",
      f: "ER"
    }, {
      name: "Estonia",
      c: "372-EE-0",
      b: "372",
      f: "EE"
    }, {
      name: "Ethiopia",
      c: "251-ET-0",
      b: "251",
      f: "ET"
    }, {
      name: "Falkland Islands [Islas Malvinas]",
      c: "500-FK-0",
      b: "500",
      f: "FK"
    }, {
      name: "Faroe Islands",
      c: "298-FO-0",
      b: "298",
      f: "FO"
    }, {
      name: "Fiji",
      c: "679-FJ-0",
      b: "679",
      f: "FJ"
    }, {
      name: "Finland",
      c: "358-FI-0",
      b: "358",
      f: "FI"
    }, {
      name: "France",
      c: "33-FR-0",
      b: "33",
      f: "FR"
    }, {
      name: "French Guiana",
      c: "594-GF-0",
      b: "594",
      f: "GF"
    }, {
      name: "French Polynesia",
      c: "689-PF-0",
      b: "689",
      f: "PF"
    }, {
      name: "Gabon",
      c: "241-GA-0",
      b: "241",
      f: "GA"
    }, {
      name: "Gambia",
      c: "220-GM-0",
      b: "220",
      f: "GM"
    }, {
      name: "Georgia",
      c: "995-GE-0",
      b: "995",
      f: "GE"
    }, {
      name: "Germany",
      c: "49-DE-0",
      b: "49",
      f: "DE"
    }, {
      name: "Ghana",
      c: "233-GH-0",
      b: "233",
      f: "GH"
    }, {
      name: "Gibraltar",
      c: "350-GI-0",
      b: "350",
      f: "GI"
    }, {
      name: "Greece",
      c: "30-GR-0",
      b: "30",
      f: "GR"
    }, {
      name: "Greenland",
      c: "299-GL-0",
      b: "299",
      f: "GL"
    }, {
      name: "Grenada",
      c: "1-GD-0",
      b: "1",
      f: "GD"
    }, {
      name: "Guadeloupe",
      c: "590-GP-0",
      b: "590",
      f: "GP"
    }, {
      name: "Guam",
      c: "1-GU-0",
      b: "1",
      f: "GU"
    }, {
      name: "Guatemala",
      c: "502-GT-0",
      b: "502",
      f: "GT"
    }, {
      name: "Guernsey",
      c: "44-GG-0",
      b: "44",
      f: "GG"
    }, {
      name: "Guinea Conakry",
      c: "224-GN-0",
      b: "224",
      f: "GN"
    }, {
      name: "Guinea-Bissau",
      c: "245-GW-0",
      b: "245",
      f: "GW"
    }, {
      name: "Guyana",
      c: "592-GY-0",
      b: "592",
      f: "GY"
    }, {
      name: "Haiti",
      c: "509-HT-0",
      b: "509",
      f: "HT"
    }, {
      name: "Heard Island and McDonald Islands",
      c: "672-HM-0",
      b: "672",
      f: "HM"
    }, {
      name: "Honduras",
      c: "504-HN-0",
      b: "504",
      f: "HN"
    }, {
      name: "Hong Kong",
      c: "852-HK-0",
      b: "852",
      f: "HK"
    }, {
      name: "Hungary",
      c: "36-HU-0",
      b: "36",
      f: "HU"
    }, {
      name: "Iceland",
      c: "354-IS-0",
      b: "354",
      f: "IS"
    }, {
      name: "India",
      c: "91-IN-0",
      b: "91",
      f: "IN"
    }, {
      name: "Indonesia",
      c: "62-ID-0",
      b: "62",
      f: "ID"
    }, {
      name: "Iran",
      c: "98-IR-0",
      b: "98",
      f: "IR"
    }, {
      name: "Iraq",
      c: "964-IQ-0",
      b: "964",
      f: "IQ"
    }, {
      name: "Ireland",
      c: "353-IE-0",
      b: "353",
      f: "IE"
    }, {
      name: "Isle of Man",
      c: "44-IM-0",
      b: "44",
      f: "IM"
    }, {
      name: "Israel",
      c: "972-IL-0",
      b: "972",
      f: "IL"
    }, {
      name: "Italy",
      c: "39-IT-0",
      b: "39",
      f: "IT"
    }, {
      name: "Jamaica",
      c: "1-JM-0",
      b: "1",
      f: "JM"
    }, {
      name: "Japan",
      c: "81-JP-0",
      b: "81",
      f: "JP"
    }, {
      name: "Jersey",
      c: "44-JE-0",
      b: "44",
      f: "JE"
    }, {
      name: "Jordan",
      c: "962-JO-0",
      b: "962",
      f: "JO"
    }, {
      name: "Kazakhstan",
      c: "7-KZ-0",
      b: "7",
      f: "KZ"
    }, {
      name: "Kenya",
      c: "254-KE-0",
      b: "254",
      f: "KE"
    }, {
      name: "Kiribati",
      c: "686-KI-0",
      b: "686",
      f: "KI"
    }, {
      name: "Kosovo",
      c: "377-XK-0",
      b: "377",
      f: "XK"
    }, {
      name: "Kosovo",
      c: "381-XK-0",
      b: "381",
      f: "XK"
    }, {
      name: "Kosovo",
      c: "386-XK-0",
      b: "386",
      f: "XK"
    }, {
      name: "Kuwait",
      c: "965-KW-0",
      b: "965",
      f: "KW"
    }, {
      name: "Kyrgyzstan",
      c: "996-KG-0",
      b: "996",
      f: "KG"
    }, {
      name: "Laos",
      c: "856-LA-0",
      b: "856",
      f: "LA"
    }, {
      name: "Latvia",
      c: "371-LV-0",
      b: "371",
      f: "LV"
    }, {
      name: "Lebanon",
      c: "961-LB-0",
      b: "961",
      f: "LB"
    }, {
      name: "Lesotho",
      c: "266-LS-0",
      b: "266",
      f: "LS"
    }, {
      name: "Liberia",
      c: "231-LR-0",
      b: "231",
      f: "LR"
    }, {
      name: "Libya",
      c: "218-LY-0",
      b: "218",
      f: "LY"
    }, {
      name: "Liechtenstein",
      c: "423-LI-0",
      b: "423",
      f: "LI"
    }, {
      name: "Lithuania",
      c: "370-LT-0",
      b: "370",
      f: "LT"
    }, {
      name: "Luxembourg",
      c: "352-LU-0",
      b: "352",
      f: "LU"
    }, {
      name: "Macau",
      c: "853-MO-0",
      b: "853",
      f: "MO"
    }, {
      name: "Macedonia",
      c: "389-MK-0",
      b: "389",
      f: "MK"
    }, {
      name: "Madagascar",
      c: "261-MG-0",
      b: "261",
      f: "MG"
    }, {
      name: "Malawi",
      c: "265-MW-0",
      b: "265",
      f: "MW"
    }, {
      name: "Malaysia",
      c: "60-MY-0",
      b: "60",
      f: "MY"
    }, {
      name: "Maldives",
      c: "960-MV-0",
      b: "960",
      f: "MV"
    }, {
      name: "Mali",
      c: "223-ML-0",
      b: "223",
      f: "ML"
    }, {
      name: "Malta",
      c: "356-MT-0",
      b: "356",
      f: "MT"
    }, {
      name: "Marshall Islands",
      c: "692-MH-0",
      b: "692",
      f: "MH"
    }, {
      name: "Martinique",
      c: "596-MQ-0",
      b: "596",
      f: "MQ"
    }, {
      name: "Mauritania",
      c: "222-MR-0",
      b: "222",
      f: "MR"
    }, {
      name: "Mauritius",
      c: "230-MU-0",
      b: "230",
      f: "MU"
    }, {
      name: "Mayotte",
      c: "262-YT-0",
      b: "262",
      f: "YT"
    }, {
      name: "Mexico",
      c: "52-MX-0",
      b: "52",
      f: "MX"
    }, {
      name: "Micronesia",
      c: "691-FM-0",
      b: "691",
      f: "FM"
    }, {
      name: "Moldova",
      c: "373-MD-0",
      b: "373",
      f: "MD"
    }, {
      name: "Monaco",
      c: "377-MC-0",
      b: "377",
      f: "MC"
    }, {
      name: "Mongolia",
      c: "976-MN-0",
      b: "976",
      f: "MN"
    }, {
      name: "Montenegro",
      c: "382-ME-0",
      b: "382",
      f: "ME"
    }, {
      name: "Montserrat",
      c: "1-MS-0",
      b: "1",
      f: "MS"
    }, {
      name: "Morocco",
      c: "212-MA-0",
      b: "212",
      f: "MA"
    }, {
      name: "Mozambique",
      c: "258-MZ-0",
      b: "258",
      f: "MZ"
    }, {
      name: "Myanmar [Burma]",
      c: "95-MM-0",
      b: "95",
      f: "MM"
    }, {
      name: "Namibia",
      c: "264-NA-0",
      b: "264",
      f: "NA"
    }, {
      name: "Nauru",
      c: "674-NR-0",
      b: "674",
      f: "NR"
    }, {
      name: "Nepal",
      c: "977-NP-0",
      b: "977",
      f: "NP"
    }, {
      name: "Netherlands",
      c: "31-NL-0",
      b: "31",
      f: "NL"
    }, {
      name: "New Caledonia",
      c: "687-NC-0",
      b: "687",
      f: "NC"
    }, {
      name: "New Zealand",
      c: "64-NZ-0",
      b: "64",
      f: "NZ"
    }, {
      name: "Nicaragua",
      c: "505-NI-0",
      b: "505",
      f: "NI"
    }, {
      name: "Niger",
      c: "227-NE-0",
      b: "227",
      f: "NE"
    }, {
      name: "Nigeria",
      c: "234-NG-0",
      b: "234",
      f: "NG"
    }, {
      name: "Niue",
      c: "683-NU-0",
      b: "683",
      f: "NU"
    }, {
      name: "Norfolk Island",
      c: "672-NF-0",
      b: "672",
      f: "NF"
    }, {
      name: "North Korea",
      c: "850-KP-0",
      b: "850",
      f: "KP"
    }, {
      name: "Northern Mariana Islands",
      c: "1-MP-0",
      b: "1",
      f: "MP"
    }, {
      name: "Norway",
      c: "47-NO-0",
      b: "47",
      f: "NO"
    }, {
      name: "Oman",
      c: "968-OM-0",
      b: "968",
      f: "OM"
    }, {
      name: "Pakistan",
      c: "92-PK-0",
      b: "92",
      f: "PK"
    }, {
      name: "Palau",
      c: "680-PW-0",
      b: "680",
      f: "PW"
    }, {
      name: "Palestinian Territories",
      c: "970-PS-0",
      b: "970",
      f: "PS"
    }, {
      name: "Panama",
      c: "507-PA-0",
      b: "507",
      f: "PA"
    }, {
      name: "Papua New Guinea",
      c: "675-PG-0",
      b: "675",
      f: "PG"
    }, {
      name: "Paraguay",
      c: "595-PY-0",
      b: "595",
      f: "PY"
    }, {
      name: "Peru",
      c: "51-PE-0",
      b: "51",
      f: "PE"
    }, {
      name: "Philippines",
      c: "63-PH-0",
      b: "63",
      f: "PH"
    }, {
      name: "Poland",
      c: "48-PL-0",
      b: "48",
      f: "PL"
    }, {
      name: "Portugal",
      c: "351-PT-0",
      b: "351",
      f: "PT"
    }, {
      name: "Puerto Rico",
      c: "1-PR-0",
      b: "1",
      f: "PR"
    }, {
      name: "Qatar",
      c: "974-QA-0",
      b: "974",
      f: "QA"
    }, {
      name: "R\u00e9union",
      c: "262-RE-0",
      b: "262",
      f: "RE"
    }, {
      name: "Romania",
      c: "40-RO-0",
      b: "40",
      f: "RO"
    }, {
      name: "Russia",
      c: "7-RU-0",
      b: "7",
      f: "RU"
    }, {
      name: "Rwanda",
      c: "250-RW-0",
      b: "250",
      f: "RW"
    }, {
      name: "Saint Barth\u00e9lemy",
      c: "590-BL-0",
      b: "590",
      f: "BL"
    }, {
      name: "Saint Helena",
      c: "290-SH-0",
      b: "290",
      f: "SH"
    }, {
      name: "St. Kitts",
      c: "1-KN-0",
      b: "1",
      f: "KN"
    }, {
      name: "St. Lucia",
      c: "1-LC-0",
      b: "1",
      f: "LC"
    }, {
      name: "Saint Martin",
      c: "590-MF-0",
      b: "590",
      f: "MF"
    }, {
      name: "Saint Pierre and Miquelon",
      c: "508-PM-0",
      b: "508",
      f: "PM"
    }, {
      name: "St. Vincent",
      c: "1-VC-0",
      b: "1",
      f: "VC"
    }, {
      name: "Samoa",
      c: "685-WS-0",
      b: "685",
      f: "WS"
    }, {
      name: "San Marino",
      c: "378-SM-0",
      b: "378",
      f: "SM"
    }, {
      name: "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
      c: "239-ST-0",
      b: "239",
      f: "ST"
    }, {
      name: "Saudi Arabia",
      c: "966-SA-0",
      b: "966",
      f: "SA"
    }, {
      name: "Senegal",
      c: "221-SN-0",
      b: "221",
      f: "SN"
    }, {
      name: "Serbia",
      c: "381-RS-0",
      b: "381",
      f: "RS"
    }, {
      name: "Seychelles",
      c: "248-SC-0",
      b: "248",
      f: "SC"
    }, {
      name: "Sierra Leone",
      c: "232-SL-0",
      b: "232",
      f: "SL"
    }, {
      name: "Singapore",
      c: "65-SG-0",
      b: "65",
      f: "SG"
    }, {
      name: "Sint Maarten",
      c: "1-SX-0",
      b: "1",
      f: "SX"
    }, {
      name: "Slovakia",
      c: "421-SK-0",
      b: "421",
      f: "SK"
    }, {
      name: "Slovenia",
      c: "386-SI-0",
      b: "386",
      f: "SI"
    }, {
      name: "Solomon Islands",
      c: "677-SB-0",
      b: "677",
      f: "SB"
    }, {
      name: "Somalia",
      c: "252-SO-0",
      b: "252",
      f: "SO"
    }, {
      name: "South Africa",
      c: "27-ZA-0",
      b: "27",
      f: "ZA"
    }, {
      name: "South Georgia and the South Sandwich Islands",
      c: "500-GS-0",
      b: "500",
      f: "GS"
    }, {
      name: "South Korea",
      c: "82-KR-0",
      b: "82",
      f: "KR"
    }, {
      name: "South Sudan",
      c: "211-SS-0",
      b: "211",
      f: "SS"
    }, {
      name: "Spain",
      c: "34-ES-0",
      b: "34",
      f: "ES"
    }, {
      name: "Sri Lanka",
      c: "94-LK-0",
      b: "94",
      f: "LK"
    }, {
      name: "Sudan",
      c: "249-SD-0",
      b: "249",
      f: "SD"
    }, {
      name: "Suriname",
      c: "597-SR-0",
      b: "597",
      f: "SR"
    }, {
      name: "Svalbard and Jan Mayen",
      c: "47-SJ-0",
      b: "47",
      f: "SJ"
    }, {
      name: "Swaziland",
      c: "268-SZ-0",
      b: "268",
      f: "SZ"
    }, {
      name: "Sweden",
      c: "46-SE-0",
      b: "46",
      f: "SE"
    }, {
      name: "Switzerland",
      c: "41-CH-0",
      b: "41",
      f: "CH"
    }, {
      name: "Syria",
      c: "963-SY-0",
      b: "963",
      f: "SY"
    }, {
      name: "Taiwan",
      c: "886-TW-0",
      b: "886",
      f: "TW"
    }, {
      name: "Tajikistan",
      c: "992-TJ-0",
      b: "992",
      f: "TJ"
    }, {
      name: "Tanzania",
      c: "255-TZ-0",
      b: "255",
      f: "TZ"
    }, {
      name: "Thailand",
      c: "66-TH-0",
      b: "66",
      f: "TH"
    }, {
      name: "Togo",
      c: "228-TG-0",
      b: "228",
      f: "TG"
    }, {
      name: "Tokelau",
      c: "690-TK-0",
      b: "690",
      f: "TK"
    }, {
      name: "Tonga",
      c: "676-TO-0",
      b: "676",
      f: "TO"
    }, {
      name: "Trinidad/Tobago",
      c: "1-TT-0",
      b: "1",
      f: "TT"
    }, {
      name: "Tunisia",
      c: "216-TN-0",
      b: "216",
      f: "TN"
    }, {
      name: "Turkey",
      c: "90-TR-0",
      b: "90",
      f: "TR"
    }, {
      name: "Turkmenistan",
      c: "993-TM-0",
      b: "993",
      f: "TM"
    }, {
      name: "Turks and Caicos Islands",
      c: "1-TC-0",
      b: "1",
      f: "TC"
    }, {
      name: "Tuvalu",
      c: "688-TV-0",
      b: "688",
      f: "TV"
    }, {
      name: "U.S. Virgin Islands",
      c: "1-VI-0",
      b: "1",
      f: "VI"
    }, {
      name: "Uganda",
      c: "256-UG-0",
      b: "256",
      f: "UG"
    }, {
      name: "Ukraine",
      c: "380-UA-0",
      b: "380",
      f: "UA"
    }, {
      name: "United Arab Emirates",
      c: "971-AE-0",
      b: "971",
      f: "AE"
    }, {
      name: "United Kingdom",
      c: "44-GB-0",
      b: "44",
      f: "GB"
    }, {
      name: "United States",
      c: "1-US-0",
      b: "1",
      f: "US"
    }, {
      name: "Uruguay",
      c: "598-UY-0",
      b: "598",
      f: "UY"
    }, {
      name: "Uzbekistan",
      c: "998-UZ-0",
      b: "998",
      f: "UZ"
    }, {
      name: "Vanuatu",
      c: "678-VU-0",
      b: "678",
      f: "VU"
    }, {
      name: "Vatican City",
      c: "379-VA-0",
      b: "379",
      f: "VA"
    }, {
      name: "Venezuela",
      c: "58-VE-0",
      b: "58",
      f: "VE"
    }, {
      name: "Vietnam",
      c: "84-VN-0",
      b: "84",
      f: "VN"
    }, {
      name: "Wallis and Futuna",
      c: "681-WF-0",
      b: "681",
      f: "WF"
    }, {
      name: "Western Sahara",
      c: "212-EH-0",
      b: "212",
      f: "EH"
    }, {
      name: "Yemen",
      c: "967-YE-0",
      b: "967",
      f: "YE"
    }, {
      name: "Zambia",
      c: "260-ZM-0",
      b: "260",
      f: "ZM"
    }, {
      name: "Zimbabwe",
      c: "263-ZW-0",
      b: "263",
      f: "ZW"
    }];
    gi(di);
    var hi = new ai(di);

    function ii(a, b) {
      this.a = a;
      this.za = b;
    }

    function ji(a) {
      a = Wa(a);
      var b = bi(hi, a);
      return 0 < b.length ? new ii("1" == b[0].b ? "1-US-0" : b[0].c, Wa(a.substr(b[0].b.length + 1))) : null;
    }

    function ki(a) {
      var b = ci(a.a);
      if (!b) throw Error("Country ID " + a.a + " not found.");
      return "+" + b.b + a.za;
    }

    function li(a, b) {
      for (var c = 0; c < a.length; c++) if (!Na(mi, a[c]) && (null !== ni && a[c] in ni || Na(b, a[c]))) return a[c];

      return null;
    }

    var mi = ["emailLink", "password", "phone"],
        ni = {
      "facebook.com": "FacebookAuthProvider",
      "github.com": "GithubAuthProvider",
      "google.com": "GoogleAuthProvider",
      password: "EmailAuthProvider",
      "twitter.com": "TwitterAuthProvider",
      phone: "PhoneAuthProvider"
    };

    function oi() {
      this.a = new Uh();
      H(this.a, "acUiConfig");
      H(this.a, "autoUpgradeAnonymousUsers");
      H(this.a, "callbacks");
      H(this.a, "credentialHelper", pi);
      H(this.a, "immediateFederatedRedirect", !1);
      H(this.a, "popupMode", !1);
      H(this.a, "privacyPolicyUrl");
      H(this.a, "queryParameterForSignInSuccessUrl", "signInSuccessUrl");
      H(this.a, "queryParameterForWidgetMode", "mode");
      H(this.a, "signInFlow");
      H(this.a, "signInOptions");
      H(this.a, "signInSuccessUrl");
      H(this.a, "siteName");
      H(this.a, "tosUrl");
      H(this.a, "widgetUrl");
    }

    function qi(a) {
      return a.a.get("acUiConfig") || null;
    }

    function ri(a) {
      var b = a.a.get("widgetUrl") || vf();
      return si(a, b);
    }

    function si(a, b) {
      a = ti(a);

      for (var c = b.search(ub), d = 0, e, f = []; 0 <= (e = tb(b, d, a, c));) f.push(b.substring(d, e)), d = Math.min(b.indexOf("&", e) + 1 || c, c);

      f.push(b.substr(d));
      b = f.join("").replace(wb, "$1");
      c = "=" + encodeURIComponent("select");
      (a += c) ? (c = b.indexOf("#"), 0 > c && (c = b.length), d = b.indexOf("?"), 0 > d || d > c ? (d = c, e = "") : e = b.substring(d + 1, c), b = [b.substr(0, d), e, b.substr(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
      return a;
    }

    function ui(a) {
      var b = !!a.a.get("autoUpgradeAnonymousUsers");
      b && !vi(a) && rg('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.', void 0);
      return b;
    }

    function wi(a) {
      a = a.a.get("signInOptions") || [];

      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c];
        d = ta(d) ? d : {
          provider: d
        };
        d.provider && b.push(d);
      }

      return b;
    }

    function xi(a, b) {
      a = wi(a);

      for (var c = 0; c < a.length; c++) if (a[c].provider === b) return a[c];

      return null;
    }

    function yi(a) {
      return Ka(wi(a), function (b) {
        return b.provider;
      });
    }

    function zi(a, b) {
      a = Ai(a);

      for (var c = 0; c < a.length; c++) if (a[c].providerId === b) return a[c];

      return null;
    }

    function Ai(a) {
      return Ka(wi(a), function (b) {
        return ni[b.provider] || Na(Bi, b.provider) ? {
          providerId: b.provider
        } : {
          providerId: b.provider,
          qb: b.providerName || null,
          Ga: b.buttonColor || null,
          Ma: b.iconUrl ? Cc(Fc(b.iconUrl)) : null,
          Nb: b.loginHintKey || null
        };
      });
    }

    function Ci(a) {
      var b = xi(a, firebase.auth.GoogleAuthProvider.PROVIDER_ID);
      return b && b.clientId && Di(a) === Ei ? b.clientId || null : null;
    }

    function Fi(a) {
      var b = null;
      Ha(wi(a), function (d) {
        d.provider == firebase.auth.PhoneAuthProvider.PROVIDER_ID && ta(d.recaptchaParameters) && !qa(d.recaptchaParameters) && (b = gb(d.recaptchaParameters));
      });

      if (b) {
        var c = [];
        Ha(Gi, function (d) {
          "undefined" !== typeof b[d] && (c.push(d), delete b[d]);
        });
        c.length && wg('The following provided "recaptchaParameters" keys are not allowed: ' + c.join(", "));
      }

      return b;
    }

    function Hi(a, b) {
      a = (a = xi(a, b)) && a.scopes;
      return qa(a) ? a : [];
    }

    function Ii(a, b) {
      a = (a = xi(a, b)) && a.customParameters;
      return ta(a) ? (a = gb(a), b === firebase.auth.GoogleAuthProvider.PROVIDER_ID && delete a.login_hint, b === firebase.auth.GithubAuthProvider.PROVIDER_ID && delete a.login, a) : null;
    }

    function Ji(a) {
      a = xi(a, firebase.auth.PhoneAuthProvider.PROVIDER_ID);
      var b = null;
      a && "string" === typeof a.loginHint && (b = ji(a.loginHint));
      return a && a.defaultNationalNumber || b && b.za || null;
    }

    function Ki(a) {
      var b = (a = xi(a, firebase.auth.PhoneAuthProvider.PROVIDER_ID)) && a.defaultCountry || null;
      b = b && ei(b);
      var c = null;
      a && "string" === typeof a.loginHint && (c = ji(a.loginHint));
      return b && b[0] || c && ci(c.a) || null;
    }

    function Li(a) {
      a = xi(a, firebase.auth.PhoneAuthProvider.PROVIDER_ID);
      if (!a) return null;
      var b = a.whitelistedCountries,
          c = a.blacklistedCountries;
      if ("undefined" !== typeof b && (!qa(b) || 0 == b.length)) throw Error("WhitelistedCountries must be a non-empty array.");
      if ("undefined" !== typeof c && !qa(c)) throw Error("BlacklistedCountries must be an array.");
      if (b && c) throw Error("Both whitelistedCountries and blacklistedCountries are provided.");
      if (!b && !c) return di;
      a = [];

      if (b) {
        c = {};

        for (var d = 0; d < b.length; d++) {
          var e = fi(b[d]);

          for (var f = 0; f < e.length; f++) c[e[f].c] = e[f];
        }

        for (var g in c) c.hasOwnProperty(g) && a.push(c[g]);
      } else {
        g = {};

        for (b = 0; b < c.length; b++) for (e = fi(c[b]), d = 0; d < e.length; d++) g[e[d].c] = e[d];

        for (e = 0; e < di.length; e++) null !== g && di[e].c in g || a.push(di[e]);
      }

      return a;
    }

    function ti(a) {
      return Wh(a.a, "queryParameterForWidgetMode");
    }

    function I(a) {
      var b = a.a.get("tosUrl") || null;
      a = a.a.get("privacyPolicyUrl") || null;
      b && !a && wg("Privacy Policy URL is missing, the link will not be displayed.");

      if (b && a) {
        if (sa(b)) return b;
        if ("string" === typeof b) return function () {
          tf(b);
        };
      }

      return null;
    }

    function Mi(a) {
      var b = a.a.get("tosUrl") || null,
          c = a.a.get("privacyPolicyUrl") || null;
      c && !b && wg("Term of Service URL is missing, the link will not be displayed.");

      if (b && c) {
        if (sa(c)) return c;
        if ("string" === typeof c) return function () {
          tf(c);
        };
      }

      return null;
    }

    function Ni(a) {
      return (a = xi(a, firebase.auth.EmailAuthProvider.PROVIDER_ID)) && "undefined" !== typeof a.requireDisplayName ? !!a.requireDisplayName : !0;
    }

    function Oi(a) {
      a = xi(a, firebase.auth.EmailAuthProvider.PROVIDER_ID);
      return !(!a || a.signInMethod !== firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD);
    }

    function Pi(a) {
      a = xi(a, firebase.auth.EmailAuthProvider.PROVIDER_ID);
      return !(!a || !a.forceSameDevice);
    }

    function Qi(a) {
      if (Oi(a)) {
        var b = {
          url: vf(),
          handleCodeInApp: !0
        };
        (a = xi(a, firebase.auth.EmailAuthProvider.PROVIDER_ID)) && "function" === typeof a.emailLinkSignIn && ib(b, a.emailLinkSignIn());
        b.url = Mb(vf(), b.url).toString();
        return b;
      }

      return null;
    }

    function Ri(a) {
      var b = !!a.a.get("immediateFederatedRedirect"),
          c = yi(a);
      a = Si(a);
      return b && 1 == c.length && !Na(mi, c[0]) && a == Ti;
    }

    function Si(a) {
      a = a.a.get("signInFlow");

      for (var b in Ui) if (Ui[b] == a) return Ui[b];

      return Ti;
    }

    function Vi(a) {
      return Wi(a).uiShown || null;
    }

    function Xi(a) {
      return Wi(a).signInSuccess || null;
    }

    function Yi(a) {
      return Wi(a).signInSuccessWithAuthResult || null;
    }

    function vi(a) {
      return Wi(a).signInFailure || null;
    }

    function Wi(a) {
      return a.a.get("callbacks") || {};
    }

    function Di(a) {
      if ("http:" !== (window.location && window.location.protocol) && "https:" !== (window.location && window.location.protocol)) return Zi;
      a = a.a.get("credentialHelper");

      for (var b in $i) if ($i[b] == a) return $i[b];

      return pi;
    }

    var pi = "accountchooser.com",
        Ei = "googleyolo",
        Zi = "none",
        $i = {
      jc: pi,
      mc: Ei,
      NONE: Zi
    },
        Ti = "redirect",
        Ui = {
      pc: "popup",
      qc: Ti
    },
        aj = {
      lc: "callback",
      RECOVER_EMAIL: "recoverEmail",
      rc: "resetPassword",
      REVERT_SECOND_FACTOR_ADDITION: "revertSecondFactorAddition",
      sc: "select",
      tc: "signIn",
      VERIFY_AND_CHANGE_EMAIL: "verifyAndChangeEmail",
      VERIFY_EMAIL: "verifyEmail"
    },
        Bi = ["anonymous"],
        Gi = ["sitekey", "tabindex", "callback", "expired-callback"];
    var bj,
        cj,
        dj,
        ej,
        J = {};

    function L(a, b, c, d) {
      J[a].apply(null, Array.prototype.slice.call(arguments, 1));
    }

    var fj = null;

    function gj(a) {
      return !(!a || -32E3 != a.code || "Service unavailable" != a.message);
    }

    function hj(a, b, c, d) {
      fj || (a = {
        callbacks: {
          empty: a,
          select: function (e, f) {
            e && e.account && b ? b(yg(e.account)) : c && c(!gj(f));
          },
          store: a,
          update: a
        },
        language: "en",
        providers: void 0,
        ui: d
      }, "undefined" != typeof accountchooser && accountchooser.Api && accountchooser.Api.init ? fj = accountchooser.Api.init(a) : (fj = new ij(a), jj()));
    }

    function kj(a, b, c) {
      function d() {
        var e = Mb(window.location.href, c).toString();
        fj.select(Ka(b || [], function (f) {
          return f.aa();
        }), {
          clientCallbackUrl: e
        });
      }

      b && b.length ? d() : fj.checkEmpty(function (e, f) {
        e || f ? a(!gj(f)) : d();
      });
    }

    function ij(a) {
      this.a = a;
      this.a.callbacks = this.a.callbacks || {};
    }

    function jj() {
      var a = fj;
      sa(a.a.callbacks.empty) && a.a.callbacks.empty();
    }

    k = ij.prototype;

    k.store = function () {
      sa(this.a.callbacks.store) && this.a.callbacks.store(void 0, lj);
    };

    k.select = function () {
      sa(this.a.callbacks.select) && this.a.callbacks.select(void 0, lj);
    };

    k.update = function () {
      sa(this.a.callbacks.update) && this.a.callbacks.update(void 0, lj);
    };

    k.checkDisabled = function (a) {
      a(!0);
    };

    k.checkEmpty = function (a) {
      a(void 0, lj);
    };

    k.checkAccountExist = function (a, b) {
      b(void 0, lj);
    };

    k.checkShouldUpdate = function (a, b) {
      b(void 0, lj);
    };

    var lj = {
      code: -32E3,
      message: "Service unavailable",
      data: "Service is unavailable."
    };
    var mj = /MSIE ([\d.]+).*Windows NT ([\d.]+)/,
        nj = /Firefox\/([\d.]+)/,
        oj = /Opera[ \/]([\d.]+)(.*Version\/([\d.]+))?/,
        pj = /Chrome\/([\d.]+)/,
        qj = /((Windows NT ([\d.]+))|(Mac OS X ([\d_]+))).*Version\/([\d.]+).*Safari/,
        rj = /Mac OS X;.*(?!(Version)).*Safari/,
        sj = /Android ([\d.]+).*Safari/,
        tj = /OS ([\d_]+) like Mac OS X.*Mobile.*Safari/,
        uj = /Konqueror\/([\d.]+)/,
        vj = /MSIE ([\d.]+).*Windows Phone OS ([\d.]+)/;

    function wj(a, b) {
      a = a.split(b || ".");
      this.a = [];

      for (b = 0; b < a.length; b++) this.a.push(parseInt(a[b], 10));
    }

    function xj(a, b) {
      b instanceof wj || (b = new wj(String(b)));

      for (var c = Math.max(a.a.length, b.a.length), d = 0; d < c; d++) {
        var e = a.a[d],
            f = b.a[d];
        if (void 0 !== e && void 0 !== f && e !== f) return e - f;
        if (void 0 === e) return -1;
        if (void 0 === f) return 1;
      }

      return 0;
    }

    function yj(a, b) {
      return 0 <= xj(a, b);
    }

    function zj() {
      var a = window.navigator && window.navigator.userAgent;

      if (a) {
        var b;

        if (b = a.match(oj)) {
          var c = new wj(b[3] || b[1]);
          return 0 <= a.indexOf("Opera Mini") ? !1 : 0 <= a.indexOf("Opera Mobi") ? 0 <= a.indexOf("Android") && yj(c, "10.1") : yj(c, "8.0");
        }

        if (b = a.match(nj)) return yj(new wj(b[1]), "2.0");
        if (b = a.match(pj)) return yj(new wj(b[1]), "6.0");
        if (b = a.match(qj)) return c = new wj(b[6]), a = b[3] && new wj(b[3]), b = b[5] && new wj(b[5], "_"), (!(!a || !yj(a, "6.0")) || !(!b || !yj(b, "10.5.6"))) && yj(c, "3.0");
        if (b = a.match(sj)) return yj(new wj(b[1]), "3.0");
        if (b = a.match(tj)) return yj(new wj(b[1], "_"), "4.0");
        if (b = a.match(uj)) return yj(new wj(b[1]), "4.7");
        if (b = a.match(vj)) return c = new wj(b[1]), a = new wj(b[2]), yj(c, "7.0") && yj(a, "7.0");
        if (b = a.match(mj)) return c = new wj(b[1]), a = new wj(b[2]), yj(c, "7.0") && yj(a, "6.0");
        if (a.match(rj)) return !1;
      }

      return !0;
    }

    function Aj(a) {
      if (a.classList) return a.classList;
      a = a.className;
      return q(a) && a.match(/\S+/g) || [];
    }

    function Bj(a, b) {
      return a.classList ? a.classList.contains(b) : Na(Aj(a), b);
    }

    function Cj(a, b) {
      a.classList ? a.classList.add(b) : Bj(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
    }

    function Dj(a, b) {
      a.classList ? a.classList.remove(b) : Bj(a, b) && (a.className = Ja(Aj(a), function (c) {
        return c != b;
      }).join(" "));
    }

    function Ej(a) {
      var b = a.type;

      switch (q(b) && b.toLowerCase()) {
        case "checkbox":
        case "radio":
          return a.checked ? a.value : null;

        case "select-one":
          return b = a.selectedIndex, 0 <= b ? a.options[b].value : null;

        case "select-multiple":
          b = [];

          for (var c, d = 0; c = a.options[d]; d++) c.selected && b.push(c.value);

          return b.length ? b : null;

        default:
          return null != a.value ? a.value : null;
      }
    }

    function Fj(a, b) {
      var c = a.type;

      switch (q(c) && c.toLowerCase()) {
        case "checkbox":
        case "radio":
          a.checked = b;
          break;

        case "select-one":
          a.selectedIndex = -1;
          if (q(b)) for (var d = 0; c = a.options[d]; d++) if (c.value == b) {
            c.selected = !0;
            break;
          }
          break;

        case "select-multiple":
          q(b) && (b = [b]);

          for (d = 0; c = a.options[d]; d++) if (c.selected = !1, b) for (var e, f = 0; e = b[f]; f++) c.value == e && (c.selected = !0);

          break;

        default:
          a.value = null != b ? b : "";
      }
    }

    function Gj(a) {
      if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
      if (Hj(a.keyCode)) return !0;

      switch (a.keyCode) {
        case 18:
        case 20:
        case 93:
        case 17:
        case 40:
        case 35:
        case 27:
        case 36:
        case 45:
        case 37:
        case 224:
        case 91:
        case 144:
        case 12:
        case 34:
        case 33:
        case 19:
        case 255:
        case 44:
        case 39:
        case 145:
        case 16:
        case 38:
        case 252:
        case 224:
        case 92:
          return !1;

        case 0:
          return !gc;

        default:
          return 166 > a.keyCode || 183 < a.keyCode;
      }
    }

    function Ij(a, b, c, d, e, f) {
      if (hc && !pc("525")) return !0;
      if (jc && e) return Hj(a);
      if (e && !d) return !1;

      if (!gc) {
        "number" == typeof b && (b = Jj(b));
        var g = 17 == b || 18 == b || jc && 91 == b;
        if ((!c || jc) && g || jc && 16 == b && (d || f)) return !1;
      }

      if ((hc || ec) && d && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
          return !1;
      }
      if (z && d && b == a) return !1;

      switch (a) {
        case 13:
          return gc ? f || e ? !1 : !(c && d) : !0;

        case 27:
          return !(hc || ec || gc);
      }

      return gc && (d || e || f) ? !1 : Hj(a);
    }

    function Hj(a) {
      if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (hc || ec) && 0 == a) return !0;

      switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
        case 163:
          return !0;

        case 173:
          return gc;

        default:
          return !1;
      }
    }

    function Jj(a) {
      if (gc) a = Kj(a);else if (jc && hc) switch (a) {
        case 93:
          a = 91;
      }
      return a;
    }

    function Kj(a) {
      switch (a) {
        case 61:
          return 187;

        case 59:
          return 186;

        case 173:
          return 189;

        case 224:
          return 91;

        case 0:
          return 224;

        default:
          return a;
      }
    }

    function Lj(a) {
      E.call(this);
      this.a = a;
      me(a, "keydown", this.g, !1, this);
      me(a, "click", this.h, !1, this);
    }

    w(Lj, E);

    Lj.prototype.g = function (a) {
      (13 == a.keyCode || hc && 3 == a.keyCode) && Mj(this, a);
    };

    Lj.prototype.h = function (a) {
      Mj(this, a);
    };

    function Mj(a, b) {
      var c = new Nj(b);

      if (ze(a, c)) {
        c = new Oj(b);

        try {
          ze(a, c);
        } finally {
          b.stopPropagation();
        }
      }
    }

    Lj.prototype.m = function () {
      Lj.L.m.call(this);
      ue(this.a, "keydown", this.g, !1, this);
      ue(this.a, "click", this.h, !1, this);
      delete this.a;
    };

    function Oj(a) {
      ae.call(this, a.a);
      this.type = "action";
    }

    w(Oj, ae);

    function Nj(a) {
      ae.call(this, a.a);
      this.type = "beforeaction";
    }

    w(Nj, ae);

    function Pj(a) {
      E.call(this);
      this.a = a;
      a = z ? "focusout" : "blur";
      this.g = me(this.a, z ? "focusin" : "focus", this, !z);
      this.h = me(this.a, a, this, !z);
    }

    w(Pj, E);

    Pj.prototype.handleEvent = function (a) {
      var b = new ae(a.a);
      b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
      ze(this, b);
    };

    Pj.prototype.m = function () {
      Pj.L.m.call(this);
      ve(this.g);
      ve(this.h);
      delete this.a;
    };

    function Qj(a, b) {
      E.call(this);
      this.g = a || 1;
      this.a = b || n;
      this.h = t(this.fc, this);
      this.j = za();
    }

    w(Qj, E);
    k = Qj.prototype;
    k.Ja = !1;
    k.$ = null;

    k.fc = function () {
      if (this.Ja) {
        var a = za() - this.j;
        0 < a && a < .8 * this.g ? this.$ = this.a.setTimeout(this.h, this.g - a) : (this.$ && (this.a.clearTimeout(this.$), this.$ = null), ze(this, "tick"), this.Ja && (Rj(this), this.start()));
      }
    };

    k.start = function () {
      this.Ja = !0;
      this.$ || (this.$ = this.a.setTimeout(this.h, this.g), this.j = za());
    };

    function Rj(a) {
      a.Ja = !1;
      a.$ && (a.a.clearTimeout(a.$), a.$ = null);
    }

    k.m = function () {
      Qj.L.m.call(this);
      Rj(this);
      delete this.a;
    };

    function Sj(a, b) {
      if (sa(a)) b && (a = t(a, b));else if (a && "function" == typeof a.handleEvent) a = t(a.handleEvent, a);else throw Error("Invalid listener argument");
      return 2147483647 < Number(0) ? -1 : n.setTimeout(a, 0);
    }

    function Tj(a) {
      Rd.call(this);
      this.g = a;
      this.a = {};
    }

    w(Tj, Rd);
    var Uj = [];

    function Vj(a, b, c, d) {
      qa(c) || (c && (Uj[0] = c.toString()), c = Uj);

      for (var e = 0; e < c.length; e++) {
        var f = me(b, c[e], d || a.handleEvent, !1, a.g || a);
        if (!f) break;
        a.a[f.key] = f;
      }
    }

    function Wj(a) {
      fb(a.a, function (b, c) {
        this.a.hasOwnProperty(c) && ve(b);
      }, a);
      a.a = {};
    }

    Tj.prototype.m = function () {
      Tj.L.m.call(this);
      Wj(this);
    };

    Tj.prototype.handleEvent = function () {
      throw Error("EventHandler.handleEvent not implemented");
    };

    function Xj(a) {
      E.call(this);
      this.a = null;
      this.g = a;
      a = z || ec || hc && !pc("531") && "TEXTAREA" == a.tagName;
      this.h = new Tj(this);
      Vj(this.h, this.g, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this);
    }

    w(Xj, E);

    Xj.prototype.handleEvent = function (a) {
      if ("input" == a.type) z && pc(10) && 0 == a.keyCode && 0 == a.j || (Yj(this), ze(this, Zj(a)));else if ("keydown" != a.type || Gj(a)) {
        var b = "keydown" == a.type ? this.g.value : null;
        z && 229 == a.keyCode && (b = null);
        var c = Zj(a);
        Yj(this);
        this.a = Sj(function () {
          this.a = null;
          this.g.value != b && ze(this, c);
        }, this);
      }
    };

    function Yj(a) {
      null != a.a && (n.clearTimeout(a.a), a.a = null);
    }

    function Zj(a) {
      a = new ae(a.a);
      a.type = "input";
      return a;
    }

    Xj.prototype.m = function () {
      Xj.L.m.call(this);
      this.h.o();
      Yj(this);
      delete this.g;
    };

    function ak(a, b) {
      E.call(this);
      a && (this.Oa && bk(this), this.qa = a, this.Na = me(this.qa, "keypress", this, b), this.Ya = me(this.qa, "keydown", this.Ib, b, this), this.Oa = me(this.qa, "keyup", this.Jb, b, this));
    }

    w(ak, E);
    k = ak.prototype;
    k.qa = null;
    k.Na = null;
    k.Ya = null;
    k.Oa = null;
    k.S = -1;
    k.W = -1;
    k.Ua = !1;
    var ck = {
      3: 13,
      12: 144,
      63232: 38,
      63233: 40,
      63234: 37,
      63235: 39,
      63236: 112,
      63237: 113,
      63238: 114,
      63239: 115,
      63240: 116,
      63241: 117,
      63242: 118,
      63243: 119,
      63244: 120,
      63245: 121,
      63246: 122,
      63247: 123,
      63248: 44,
      63272: 46,
      63273: 36,
      63275: 35,
      63276: 33,
      63277: 34,
      63289: 144,
      63302: 45
    },
        dk = {
      Up: 38,
      Down: 40,
      Left: 37,
      Right: 39,
      Enter: 13,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      "U+007F": 46,
      Home: 36,
      End: 35,
      PageUp: 33,
      PageDown: 34,
      Insert: 45
    },
        ek = !hc || pc("525"),
        fk = jc && gc;
    k = ak.prototype;

    k.Ib = function (a) {
      if (hc || ec) if (17 == this.S && !a.ctrlKey || 18 == this.S && !a.altKey || jc && 91 == this.S && !a.metaKey) this.W = this.S = -1;
      -1 == this.S && (a.ctrlKey && 17 != a.keyCode ? this.S = 17 : a.altKey && 18 != a.keyCode ? this.S = 18 : a.metaKey && 91 != a.keyCode && (this.S = 91));
      ek && !Ij(a.keyCode, this.S, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.W = Jj(a.keyCode), fk && (this.Ua = a.altKey));
    };

    k.Jb = function (a) {
      this.W = this.S = -1;
      this.Ua = a.altKey;
    };

    k.handleEvent = function (a) {
      var b = a.a,
          c = b.altKey;

      if (z && "keypress" == a.type) {
        var d = this.W;
        var e = 13 != d && 27 != d ? b.keyCode : 0;
      } else (hc || ec) && "keypress" == a.type ? (d = this.W, e = 0 <= b.charCode && 63232 > b.charCode && Hj(d) ? b.charCode : 0) : dc && !hc ? (d = this.W, e = Hj(d) ? b.keyCode : 0) : ("keypress" == a.type ? (fk && (c = this.Ua), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.W, e = b.charCode) : (d = b.keyCode || this.W, e = b.charCode || 0)) : (d = b.keyCode || this.W, e = b.charCode || 0), jc && 63 == e && 224 == d && (d = 191));

      var f = d = Jj(d);
      d ? 63232 <= d && d in ck ? f = ck[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in dk && (f = dk[b.keyIdentifier]);
      gc && ek && "keypress" == a.type && !Ij(f, this.S, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.S, this.S = f, b = new gk(f, e, a, b), b.altKey = c, ze(this, b));
    };

    k.O = function () {
      return this.qa;
    };

    function bk(a) {
      a.Na && (ve(a.Na), ve(a.Ya), ve(a.Oa), a.Na = null, a.Ya = null, a.Oa = null);
      a.qa = null;
      a.S = -1;
      a.W = -1;
    }

    k.m = function () {
      ak.L.m.call(this);
      bk(this);
    };

    function gk(a, b, c, d) {
      ae.call(this, d);
      this.type = "key";
      this.keyCode = a;
      this.j = b;
      this.repeat = c;
    }

    w(gk, ae);

    function hk(a, b, c, d) {
      this.top = a;
      this.right = b;
      this.bottom = c;
      this.left = d;
    }

    hk.prototype.toString = function () {
      return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)";
    };

    hk.prototype.ceil = function () {
      this.top = Math.ceil(this.top);
      this.right = Math.ceil(this.right);
      this.bottom = Math.ceil(this.bottom);
      this.left = Math.ceil(this.left);
      return this;
    };

    hk.prototype.floor = function () {
      this.top = Math.floor(this.top);
      this.right = Math.floor(this.right);
      this.bottom = Math.floor(this.bottom);
      this.left = Math.floor(this.left);
      return this;
    };

    hk.prototype.round = function () {
      this.top = Math.round(this.top);
      this.right = Math.round(this.right);
      this.bottom = Math.round(this.bottom);
      this.left = Math.round(this.left);
      return this;
    };

    function ik(a, b) {
      var c = Uc(a);
      return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : "";
    }

    function jk(a) {
      try {
        var b = a.getBoundingClientRect();
      } catch (c) {
        return {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        };
      }

      z && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
      return b;
    }

    function kk(a, b) {
      b = b || $c(document);
      var c = b || $c(document);
      var d = lk(a),
          e = lk(c);

      if (!z || 9 <= Number(qc)) {
        g = ik(c, "borderLeftWidth");
        var f = ik(c, "borderRightWidth");
        h = ik(c, "borderTopWidth");
        l = ik(c, "borderBottomWidth");
        f = new hk(parseFloat(h), parseFloat(f), parseFloat(l), parseFloat(g));
      } else {
        var g = mk(c, "borderLeft");
        f = mk(c, "borderRight");
        var h = mk(c, "borderTop"),
            l = mk(c, "borderBottom");
        f = new hk(h, f, l, g);
      }

      c == $c(document) ? (g = d.a - c.scrollLeft, d = d.g - c.scrollTop, !z || 10 <= Number(qc) || (g += f.left, d += f.top)) : (g = d.a - e.a - f.left, d = d.g - e.g - f.top);
      e = a.offsetWidth;
      f = a.offsetHeight;
      h = hc && !e && !f;
      ka(e) && !h || !a.getBoundingClientRect ? a = new Rc(e, f) : (a = jk(a), a = new Rc(a.right - a.left, a.bottom - a.top));
      e = c.clientHeight - a.height;
      f = c.scrollLeft;
      h = c.scrollTop;
      f += Math.min(g, Math.max(g - (c.clientWidth - a.width), 0));
      h += Math.min(d, Math.max(d - e, 0));
      c = new Qc(f, h);
      b.scrollLeft = c.a;
      b.scrollTop = c.g;
    }

    function lk(a) {
      var b = Uc(a),
          c = new Qc(0, 0);
      var d = b ? Uc(b) : document;
      d = !z || 9 <= Number(qc) || "CSS1Compat" == Sc(d).a.compatMode ? d.documentElement : d.body;
      if (a == d) return c;
      a = jk(a);
      d = Sc(b).a;
      b = $c(d);
      d = d.parentWindow || d.defaultView;
      b = z && pc("10") && d.pageYOffset != b.scrollTop ? new Qc(b.scrollLeft, b.scrollTop) : new Qc(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
      c.a = a.left + b.a;
      c.g = a.top + b.g;
      return c;
    }

    var nk = {
      thin: 2,
      medium: 4,
      thick: 6
    };

    function mk(a, b) {
      if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
      var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
      if (c in nk) a = nk[c];else if (/^\d+px?$/.test(c)) a = parseInt(c, 10);else {
        b = a.style.left;
        var d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = b;
        a.runtimeStyle.left = d;
        a = +c;
      }
      return a;
    }

    function ok() {}

    oa(ok);
    ok.prototype.a = 0;

    function pk(a) {
      E.call(this);
      this.s = a || Sc();
      this.cb = null;
      this.na = !1;
      this.g = null;
      this.M = void 0;
      this.oa = this.Ca = this.X = null;
    }

    w(pk, E);
    k = pk.prototype;
    k.Kb = ok.Xa();

    k.O = function () {
      return this.g;
    };

    function M(a, b) {
      return a.g ? Xc(b, a.g || a.s.a) : null;
    }

    function qk(a) {
      a.M || (a.M = new Tj(a));
      return a.M;
    }

    k.Za = function (a) {
      if (this.X && this.X != a) throw Error("Method not supported");
      pk.L.Za.call(this, a);
    };

    k.kb = function () {
      this.g = this.s.a.createElement("DIV");
    };

    k.render = function (a) {
      if (this.na) throw Error("Component already rendered");
      this.g || this.kb();
      a ? a.insertBefore(this.g, null) : this.s.a.body.appendChild(this.g);
      this.X && !this.X.na || this.v();
    };

    k.v = function () {
      this.na = !0;
      rk(this, function (a) {
        !a.na && a.O() && a.v();
      });
    };

    k.ya = function () {
      rk(this, function (a) {
        a.na && a.ya();
      });
      this.M && Wj(this.M);
      this.na = !1;
    };

    k.m = function () {
      this.na && this.ya();
      this.M && (this.M.o(), delete this.M);
      rk(this, function (a) {
        a.o();
      });
      this.g && ad(this.g);
      this.X = this.g = this.oa = this.Ca = null;
      pk.L.m.call(this);
    };

    function rk(a, b) {
      a.Ca && Ha(a.Ca, b, void 0);
    }

    k.removeChild = function (a, b) {
      if (a) {
        var c = q(a) ? a : a.cb || (a.cb = ":" + (a.Kb.a++).toString(36));
        this.oa && c ? (a = this.oa, a = (null !== a && c in a ? a[c] : void 0) || null) : a = null;

        if (c && a) {
          var d = this.oa;
          c in d && delete d[c];
          Oa(this.Ca, a);
          b && (a.ya(), a.g && ad(a.g));
          b = a;
          if (null == b) throw Error("Unable to set parent component");
          b.X = null;
          pk.L.Za.call(b, null);
        }
      }

      if (!a) throw Error("Child is not in parent component");
      return a;
    };

    function N(a, b) {
      var c = cd(a, "firebaseui-textfield");
      b ? (Dj(a, "firebaseui-input-invalid"), Cj(a, "firebaseui-input"), c && Dj(c, "firebaseui-textfield-invalid")) : (Dj(a, "firebaseui-input"), Cj(a, "firebaseui-input-invalid"), c && Cj(c, "firebaseui-textfield-invalid"));
    }

    function sk(a, b, c) {
      b = new Xj(b);
      Ud(a, ya(Vd, b));
      Vj(qk(a), b, "input", c);
    }

    function tk(a, b, c) {
      b = new ak(b);
      Ud(a, ya(Vd, b));
      Vj(qk(a), b, "key", function (d) {
        13 == d.keyCode && (d.stopPropagation(), d.preventDefault(), c(d));
      });
    }

    function uk(a, b, c) {
      b = new Pj(b);
      Ud(a, ya(Vd, b));
      Vj(qk(a), b, "focusin", c);
    }

    function vk(a, b, c) {
      b = new Pj(b);
      Ud(a, ya(Vd, b));
      Vj(qk(a), b, "focusout", c);
    }

    function O(a, b, c) {
      b = new Lj(b);
      Ud(a, ya(Vd, b));
      Vj(qk(a), b, "action", function (d) {
        d.stopPropagation();
        d.preventDefault();
        c(d);
      });
    }

    function wk(a) {
      Cj(a, "firebaseui-hidden");
    }

    function xk(a, b) {
      b && bd(a, b);
      Dj(a, "firebaseui-hidden");
    }

    function yk(a) {
      return !Bj(a, "firebaseui-hidden") && "none" != a.style.display;
    }

    function zk(a) {
      a = a || {};
      var b = a.email,
          c = a.disabled,
          d = '<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';
      d = a.vc ? d + "Enter new email address" : d + "Email";
      d += '</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="' + wd(null != b ? b : "") + '"' + (c ? "disabled" : "") + '></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>';
      return B(d);
    }

    function Ak(a) {
      a = a || {};
      a = a.label;
      var b = '<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';
      b = a ? b + A(a) : b + "Next";
      return B(b + "</button>");
    }

    function Bk() {
      var a = "" + Ak({
        label: D("Sign In")
      });
      return B(a);
    }

    function Ck() {
      var a = "" + Ak({
        label: D("Save")
      });
      return B(a);
    }

    function Dk() {
      var a = "" + Ak({
        label: D("Continue")
      });
      return B(a);
    }

    function Ek(a) {
      a = a || {};
      a = a.label;
      var b = '<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';
      b = a ? b + A(a) : b + "Choose password";
      return B(b + '</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>');
    }

    function Fk() {
      var a = {};
      var b = '<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';
      b = a.current ? b + "Current password" : b + "Password";
      return B(b + '</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>');
    }

    function Gk() {
      return B('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>');
    }

    function Hk(a) {
      a = a || {};
      a = a.label;
      var b = '<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';
      b = a ? b + A(a) : b + "Cancel";
      return B(b + "</button>");
    }

    function Ik(a) {
      var b = "";
      a.G && a.F && (b += '<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>');
      return B(b);
    }

    function Jk(a) {
      var b = "";
      a.G && a.F && (b += '<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>');
      return B(b);
    }

    function Kk(a) {
      a = '<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">' + A(a.message) + '&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>';
      return B(a);
    }

    Kk.w = "firebaseui.auth.soy2.element.infoBar";

    function Lk(a) {
      var b = a.content;
      a = a.Ab;
      return B('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog' + (a ? " " + wd(a) : "") + '">' + A(b) + "</dialog>");
    }

    function Mk(a) {
      var b = a.message;
      return B(Lk({
        content: vd('<div class="firebaseui-dialog-icon-wrapper"><div class="' + wd(a.La) + ' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">' + A(b) + "</div>")
      }));
    }

    Mk.w = "firebaseui.auth.soy2.element.progressDialog";

    function Nk(a) {
      var b = '<div class="firebaseui-list-box-actions">';
      a = a.items;

      for (var c = a.length, d = 0; d < c; d++) {
        var e = a[d];
        b += '<button type="button" data-listboxid="' + wd(e.id) + '" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">' + (e.La ? '<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon ' + wd(e.La) + '"></div></div>' : "") + '<div class="firebaseui-list-box-label-wrapper">' + A(e.label) + "</div></button>";
      }

      b = "" + Lk({
        Ab: D("firebaseui-list-box-dialog"),
        content: vd(b + "</div>")
      });
      return B(b);
    }

    Nk.w = "firebaseui.auth.soy2.element.listBoxDialog";

    function Ok(a) {
      a = a || {};
      return B(a.ub ? '<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>' : '<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>');
    }

    Ok.w = "firebaseui.auth.soy2.element.busyIndicator";

    function Pk(a, b) {
      a = a || {};
      a = a.ga;
      return C(a.qb ? a.qb : b.hb[a.providerId] ? "" + b.hb[a.providerId] : 0 == ("" + a.providerId).indexOf("saml.") ? ("" + a.providerId).substring(5) : 0 == ("" + a.providerId).indexOf("oidc.") ? ("" + a.providerId).substring(5) : "" + a.providerId);
    }

    function Qk(a) {
      Rk(a, "upgradeElement");
    }

    function Sk(a) {
      Rk(a, "downgradeElements");
    }

    var Tk = ["mdl-js-textfield", "mdl-js-progress", "mdl-js-spinner", "mdl-js-button"];

    function Rk(a, b) {
      a && window.componentHandler && window.componentHandler[b] && Ha(Tk, function (c) {
        if (Bj(a, c)) window.componentHandler[b](a);
        Ha(Vc(c, a), function (d) {
          window.componentHandler[b](d);
        });
      });
    }

    function Uk(a, b, c) {
      Vk.call(this);
      document.body.appendChild(a);
      a.showModal || window.dialogPolyfill.registerDialog(a);
      a.showModal();
      Qk(a);
      b && O(this, a, function (f) {
        var g = a.getBoundingClientRect();
        (f.clientX < g.left || g.left + g.width < f.clientX || f.clientY < g.top || g.top + g.height < f.clientY) && Vk.call(this);
      });

      if (!c) {
        var d = this.O().parentElement || this.O().parentNode;

        if (d) {
          var e = this;

          this.da = function () {
            if (a.open) {
              var f = a.getBoundingClientRect().height,
                  g = d.getBoundingClientRect().height,
                  h = d.getBoundingClientRect().top - document.body.getBoundingClientRect().top,
                  l = d.getBoundingClientRect().left - document.body.getBoundingClientRect().left,
                  p = a.getBoundingClientRect().width,
                  r = d.getBoundingClientRect().width;
              a.style.top = (h + (g - f) / 2).toString() + "px";
              f = l + (r - p) / 2;
              a.style.left = f.toString() + "px";
              a.style.right = (document.body.getBoundingClientRect().width - f - p).toString() + "px";
            } else window.removeEventListener("resize", e.da);
          };

          this.da();
          window.addEventListener("resize", this.da, !1);
        }
      }
    }

    function Vk() {
      var a = Wk.call(this);
      a && (Sk(a), a.open && a.close(), ad(a), this.da && window.removeEventListener("resize", this.da));
    }

    function Wk() {
      return Xc("firebaseui-id-dialog");
    }

    function Xk() {
      ad(Yk.call(this));
    }

    function Yk() {
      return M(this, "firebaseui-id-info-bar");
    }

    function Zk() {
      return M(this, "firebaseui-id-dismiss-info-bar");
    }

    var $k = {
      xa: {
        "google.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",
        "github.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg",
        "facebook.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg",
        "twitter.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",
        password: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",
        phone: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",
        anonymous: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png",
        "microsoft.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg",
        "yahoo.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg",
        "apple.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",
        saml: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",
        oidc: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"
      },
      wa: {
        "google.com": "#ffffff",
        "github.com": "#333333",
        "facebook.com": "#3b5998",
        "twitter.com": "#55acee",
        password: "#db4437",
        phone: "#02bd7e",
        anonymous: "#f4b400",
        "microsoft.com": "#2F2F2F",
        "yahoo.com": "#720E9E",
        "apple.com": "#000000",
        saml: "#007bff",
        oidc: "#007bff"
      },
      hb: {
        "google.com": "Google",
        "github.com": "GitHub",
        "facebook.com": "Facebook",
        "twitter.com": "Twitter",
        password: "Password",
        phone: "Phone",
        anonymous: "Guest",
        "microsoft.com": "Microsoft",
        "yahoo.com": "Yahoo",
        "apple.com": "Apple"
      }
    };

    function al(a, b, c) {
      $d.call(this, a, b);

      for (var d in c) this[d] = c[d];
    }

    w(al, $d);

    function P(a, b, c, d, e) {
      pk.call(this, c);
      this.fb = a;
      this.eb = b;
      this.Da = !1;
      this.Ea = d || null;
      this.B = this.ca = null;
      this.Y = gb($k);
      ib(this.Y, e || {});
    }

    w(P, pk);
    k = P.prototype;

    k.kb = function () {
      var a = jd(this.fb, this.eb, this.Y, this.s);
      Qk(a);
      this.g = a;
    };

    k.v = function () {
      P.L.v.call(this);
      De(Q(this), new al("pageEnter", Q(this), {
        pageId: this.Ea
      }));

      if (this.bb() && this.Y.G) {
        var a = this.Y.G;
        O(this, this.bb(), function () {
          a();
        });
      }

      if (this.ab() && this.Y.F) {
        var b = this.Y.F;
        O(this, this.ab(), function () {
          b();
        });
      }
    };

    k.ya = function () {
      De(Q(this), new al("pageExit", Q(this), {
        pageId: this.Ea
      }));
      P.L.ya.call(this);
    };

    k.m = function () {
      window.clearTimeout(this.ca);
      this.eb = this.fb = this.ca = null;
      this.Da = !1;
      this.B = null;
      Sk(this.O());
      P.L.m.call(this);
    };

    function bl(a) {
      a.Da = !0;
      var b = Bj(a.O(), "firebaseui-use-spinner");
      a.ca = window.setTimeout(function () {
        a.O() && null === a.B && (a.B = jd(Ok, {
          ub: b
        }, null, a.s), a.O().appendChild(a.B), Qk(a.B));
      }, 500);
    }

    k.J = function (a, b, c, d) {
      function e() {
        if (f.T) return null;
        f.Da = !1;
        window.clearTimeout(f.ca);
        f.ca = null;
        f.B && (Sk(f.B), ad(f.B), f.B = null);
      }

      var f = this;
      if (f.Da) return null;
      bl(f);
      return a.apply(null, b).then(c, d).then(e, e);
    };

    function Q(a) {
      return a.O().parentElement || a.O().parentNode;
    }

    function cl(a, b, c) {
      tk(a, b, function () {
        c.focus();
      });
    }

    function dl(a, b, c) {
      tk(a, b, function () {
        c();
      });
    }

    u(P.prototype, {
      a: function (a) {
        Xk.call(this);
        var b = jd(Kk, {
          message: a
        }, null, this.s);
        this.O().appendChild(b);
        O(this, Zk.call(this), function () {
          ad(b);
        });
      },
      xc: Xk,
      zc: Yk,
      yc: Zk,
      Z: function (a, b) {
        a = jd(Mk, {
          La: a,
          message: b
        }, null, this.s);
        Uk.call(this, a);
      },
      h: Vk,
      Cb: Wk,
      Bc: function () {
        return M(this, "firebaseui-tos");
      },
      bb: function () {
        return M(this, "firebaseui-tos-link");
      },
      ab: function () {
        return M(this, "firebaseui-pp-link");
      },
      Cc: function () {
        return M(this, "firebaseui-tos-list");
      }
    });

    function el(a, b, c) {
      a = a || {};
      b = a.Va;
      var d = a.ia;
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">' + zk(a) + '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + (b ? Hk(null) : "") + Ak(null) + '</div></div><div class="firebaseui-card-footer">' + (d ? Jk(c) : Ik(c)) + "</div></form></div>";
      return B(a);
    }

    el.w = "firebaseui.auth.soy2.page.signIn";

    function fl(a, b, c) {
      a = a || {};
      b = a.ia;
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">' + zk(a) + Fk() + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' + Gk() + '</div><div class="firebaseui-form-actions">' + Bk() + '</div></div><div class="firebaseui-card-footer">' + (b ? Jk(c) : Ik(c)) + "</div></form></div>";
      return B(a);
    }

    fl.w = "firebaseui.auth.soy2.page.passwordSignIn";

    function gl(a, b, c) {
      a = a || {};
      var d = a.Sb;
      b = a.Ta;
      var e = a.ia,
          f = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">' + zk(a);
      d ? (a = a || {}, a = a.name, a = '<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="' + wd(null != a ? a : "") + '"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>', a = B(a)) : a = "";
      c = f + a + Ek(null) + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + (b ? Hk(null) : "") + Ck() + '</div></div><div class="firebaseui-card-footer">' + (e ? Jk(c) : Ik(c)) + "</div></form></div>";
      return B(c);
    }

    gl.w = "firebaseui.auth.soy2.page.passwordSignUp";

    function hl(a, b, c) {
      a = a || {};
      b = a.Ta;
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>' + zk(a) + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + (b ? Hk(null) : "") + Ak({
        label: D("Send")
      }) + '</div></div><div class="firebaseui-card-footer">' + Ik(c) + "</div></form></div>";
      return B(a);
    }

    hl.w = "firebaseui.auth.soy2.page.passwordRecovery";

    function il(a, b, c) {
      b = a.H;
      var d = "";
      a = "Follow the instructions sent to <strong>" + (A(a.email) + "</strong> to recover your password");
      d += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + a + '</p></div><div class="firebaseui-card-actions">';
      b && (d += '<div class="firebaseui-form-actions">' + Ak({
        label: D("Done")
      }) + "</div>");
      d += '</div><div class="firebaseui-card-footer">' + Ik(c) + "</div></div>";
      return B(d);
    }

    il.w = "firebaseui.auth.soy2.page.passwordRecoveryEmailSent";

    function jl(a, b, c) {
      return B('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">' + Ok(null, null, c) + "</div></div>");
    }

    jl.w = "firebaseui.auth.soy2.page.callback";

    function kl(a, b, c) {
      return B('<div class="firebaseui-container firebaseui-id-page-spinner">' + Ok({
        ub: !0
      }, null, c) + "</div>");
    }

    kl.w = "firebaseui.auth.soy2.page.spinner";

    function ll() {
      return B('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>');
    }

    ll.w = "firebaseui.auth.soy2.page.blank";

    function ml(a, b, c) {
      b = "";
      a = "A sign-in email with additional instructions was sent to <strong>" + (A(a.email) + "</strong>. Check your email to complete sign-in.");
      var d = B('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>');
      b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">' + a + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' + d + '</div><div class="firebaseui-form-actions">' + Hk({
        label: D("Back")
      }) + '</div></div><div class="firebaseui-card-footer">' + Ik(c) + "</div></form></div>";
      return B(b);
    }

    ml.w = "firebaseui.auth.soy2.page.emailLinkSignInSent";

    function nl(a, b, c) {
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn\'t work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' + B('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>') + '</div><div class="firebaseui-form-actions">' + Hk({
        label: D("Back")
      }) + '</div></div><div class="firebaseui-card-footer">' + Ik(c) + "</div></form></div>";
      return B(a);
    }

    nl.w = "firebaseui.auth.soy2.page.emailNotReceived";

    function ol(a, b, c) {
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">' + zk(a) + '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Hk(null) + Ak(null) + '</div></div><div class="firebaseui-card-footer">' + Ik(c) + "</div></form></div>";
      return B(a);
    }

    ol.w = "firebaseui.auth.soy2.page.emailLinkSignInConfirmation";

    function pl() {
      var a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Hk({
        label: D("Dismiss")
      }) + "</div></div></div>";
      return B(a);
    }

    pl.w = "firebaseui.auth.soy2.page.differentDeviceError";

    function ql() {
      var a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Hk({
        label: D("Dismiss")
      }) + "</div></div></div>";
      return B(a);
    }

    ql.w = "firebaseui.auth.soy2.page.anonymousUserMismatch";

    function rl(a, b, c) {
      b = "";
      a = "You\u2019ve already used <strong>" + (A(a.email) + "</strong> to sign in. Enter your password for that account.");
      b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">' + a + "</p>" + Fk() + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' + Gk() + '</div><div class="firebaseui-form-actions">' + Bk() + '</div></div><div class="firebaseui-card-footer">' + Ik(c) + "</div></form></div>";
      return B(b);
    }

    rl.w = "firebaseui.auth.soy2.page.passwordLinking";

    function sl(a, b, c) {
      var d = a.email;
      b = "";
      a = "" + Pk(a, c);
      a = D(a);
      d = "You\u2019ve already used <strong>" + (A(d) + ("</strong>. You can connect your <strong>" + (A(a) + ("</strong> account with <strong>" + (A(d) + "</strong> by signing in with email link below.")))));
      a = "For this flow to successfully connect your " + (A(a) + " account with this email, you have to open the link on the same device or browser.");
      b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">' + d + '<p class="firebaseui-text firebaseui-text-justify">' + a + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Bk() + '</div></div><div class="firebaseui-card-footer">' + Ik(c) + "</div></form></div>";
      return B(b);
    }

    sl.w = "firebaseui.auth.soy2.page.emailLinkSignInLinking";

    function tl(a, b, c) {
      b = "";
      var d = "" + Pk(a, c);
      d = D(d);
      a = "You originally intended to connect <strong>" + (A(d) + "</strong> to your email account but have opened the link on a different device where you are not signed in.");
      d = "If you still want to connect your <strong>" + (A(d) + "</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device.");
      b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">' + a + '</p><p class="firebaseui-text firebaseui-text-justify">' + d + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Dk() + '</div></div><div class="firebaseui-card-footer">' + Ik(c) + "</div></form></div>";
      return B(b);
    }

    tl.w = "firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice";

    function ul(a, b, c) {
      var d = a.email;
      b = "";
      a = "" + Pk(a, c);
      a = D(a);
      d = "You\u2019ve already used <strong>" + (A(d) + ("</strong>. Sign in with " + (A(a) + " to continue.")));
      b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">' + d + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Ak({
        label: D("Sign in with " + a)
      }) + '</div></div><div class="firebaseui-card-footer">' + Ik(c) + "</div></form></div>";
      return B(b);
    }

    ul.w = "firebaseui.auth.soy2.page.federatedLinking";

    function vl(a, b, c) {
      b = "";
      a = "To continue sign in with <strong>" + (A(a.email) + "</strong> on this device, you have to recover the password.");
      b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + a + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Hk(null) + Ak({
        label: D("Recover password")
      }) + '</div></div><div class="firebaseui-card-footer">' + Ik(c) + "</div></form></div>";
      return B(b);
    }

    vl.w = "firebaseui.auth.soy2.page.unsupportedProvider";

    function wl(a) {
      var b = "",
          c = '<p class="firebaseui-text">for <strong>' + (A(a.email) + "</strong></p>");
      b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">' + c + Ek(ud(a)) + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Ck() + "</div></div></form></div>";
      return B(b);
    }

    wl.w = "firebaseui.auth.soy2.page.passwordReset";

    function xl(a) {
      a = a || {};
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">' + (a.H ? '<div class="firebaseui-form-actions">' + Dk() + "</div>" : "") + "</div></div>";
      return B(a);
    }

    xl.w = "firebaseui.auth.soy2.page.passwordResetSuccess";

    function yl(a) {
      a = a || {};
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">' + (a.H ? '<div class="firebaseui-form-actions">' + Dk() + "</div>" : "") + "</div></div>";
      return B(a);
    }

    yl.w = "firebaseui.auth.soy2.page.passwordResetFailure";

    function zl(a) {
      var b = a.H,
          c = "";
      a = "Your sign-in email address has been changed back to <strong>" + (A(a.email) + "</strong>.");
      c += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + a + '</p><p class="firebaseui-text">If you didn\u2019t ask to change your sign-in email, it\u2019s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">' + (b ? '<div class="firebaseui-form-actions">' + Dk() + "</div>" : "") + "</div></form></div>";
      return B(c);
    }

    zl.w = "firebaseui.auth.soy2.page.emailChangeRevokeSuccess";

    function Al(a) {
      a = a || {};
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can\u2019t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">' + (a.H ? '<div class="firebaseui-form-actions">' + Dk() + "</div>" : "") + "</div></div>";
      return B(a);
    }

    Al.w = "firebaseui.auth.soy2.page.emailChangeRevokeFailure";

    function Bl(a) {
      a = a || {};
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">' + (a.H ? '<div class="firebaseui-form-actions">' + Dk() + "</div>" : "") + "</div></div>";
      return B(a);
    }

    Bl.w = "firebaseui.auth.soy2.page.emailVerificationSuccess";

    function Cl(a) {
      a = a || {};
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">' + (a.H ? '<div class="firebaseui-form-actions">' + Dk() + "</div>" : "") + "</div></div>";
      return B(a);
    }

    Cl.w = "firebaseui.auth.soy2.page.emailVerificationFailure";

    function El(a) {
      var b = a.H,
          c = "";
      a = "You can now sign in with your new email <strong>" + (A(a.email) + "</strong>.");
      c += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + a + '</p></div><div class="firebaseui-card-actions">' + (b ? '<div class="firebaseui-form-actions">' + Dk() + "</div>" : "") + "</div></div>";
      return B(c);
    }

    El.w = "firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess";

    function Fl(a) {
      a = a || {};
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">' + (a.H ? '<div class="firebaseui-form-actions">' + Dk() + "</div>" : "") + "</div></div>";
      return B(a);
    }

    Fl.w = "firebaseui.auth.soy2.page.verifyAndChangeEmailFailure";

    function Gl(a) {
      var b = a.factorId,
          c = a.phoneNumber;
      a = a.H;
      var d = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';

      switch (b) {
        case "phone":
          b = "The <strong>" + (A(b) + (" " + (A(c) + "</strong> was removed as a second authentication step.")));
          d += b;
          break;

        default:
          d += "The device or app was removed as a second authentication step.";
      }

      d += '</p><p class="firebaseui-text">If you don\'t recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">' + (a ? '<div class="firebaseui-form-actions">' + Dk() + "</div>" : "") + "</div></form></div>";
      return B(d);
    }

    Gl.w = "firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess";

    function Hl(a) {
      a = a || {};
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn\'t remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn\'t work, contact support for assistance.</p></div><div class="firebaseui-card-actions">' + (a.H ? '<div class="firebaseui-form-actions">' + Dk() + "</div>" : "") + "</div></div>";
      return B(a);
    }

    Hl.w = "firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure";

    function Il(a) {
      var b = a.zb;
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + A(a.errorMessage) + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">';
      b && (a += Ak({
        label: D("Retry")
      }));
      return B(a + "</div></div></div>");
    }

    Il.w = "firebaseui.auth.soy2.page.recoverableError";

    function Jl(a) {
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + A(a.errorMessage) + "</p></div></div>";
      return B(a);
    }

    Jl.w = "firebaseui.auth.soy2.page.unrecoverableError";

    function Kl(a, b, c) {
      var d = a.Pb;
      b = "";
      a = "Continue with " + (A(a.ic) + "?");
      d = "You originally wanted to sign in with " + A(d);
      b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">' + a + '</h2><p class="firebaseui-text">' + d + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Hk(null) + Ak({
        label: D("Continue")
      }) + '</div></div><div class="firebaseui-card-footer">' + Ik(c) + "</div></form></div>";
      return B(b);
    }

    Kl.w = "firebaseui.auth.soy2.page.emailMismatch";

    function Ll(a, b, c) {
      var d = '<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';
      a = a.Rb;
      b = a.length;

      for (var e = 0; e < b; e++) {
        var f = {
          ga: a[e]
        };
        var g = c;
        f = f || {};
        var h = f.ga,
            l = f;
        l = l || {};
        var p = "";

        switch (l.ga.providerId) {
          case "google.com":
            p += "firebaseui-idp-google";
            break;

          case "github.com":
            p += "firebaseui-idp-github";
            break;

          case "facebook.com":
            p += "firebaseui-idp-facebook";
            break;

          case "twitter.com":
            p += "firebaseui-idp-twitter";
            break;

          case "phone":
            p += "firebaseui-idp-phone";
            break;

          case "anonymous":
            p += "firebaseui-idp-anonymous";
            break;

          case "password":
            p += "firebaseui-idp-password";
            break;

          default:
            p += "firebaseui-idp-generic";
        }

        l = '<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised ' + wd(C(p)) + ' firebaseui-id-idp-button" data-provider-id="' + wd(h.providerId) + '" style="background-color:';
        p = (p = f) || {};
        p = p.ga;
        l = l + wd(Fd(C(p.Ga ? p.Ga : g.wa[p.providerId] ? "" + g.wa[p.providerId] : 0 == p.providerId.indexOf("saml.") ? "" + g.wa.saml : 0 == p.providerId.indexOf("oidc.") ? "" + g.wa.oidc : "" + g.wa.password))) + '"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';
        var r = f;
        p = g;
        r = r || {};
        r = r.ga;
        p = rd(r.Ma ? Bd(r.Ma) : p.xa[r.providerId] ? Bd(p.xa[r.providerId]) : 0 == r.providerId.indexOf("saml.") ? Bd(p.xa.saml) : 0 == r.providerId.indexOf("oidc.") ? Bd(p.xa.oidc) : Bd(p.xa.password));
        l = l + wd(Bd(p)) + '"></span>';
        "password" == h.providerId ? l += '<span class="firebaseui-idp-text firebaseui-idp-text-long">Sign in with email</span><span class="firebaseui-idp-text firebaseui-idp-text-short">Email</span>' : "phone" == h.providerId ? l += '<span class="firebaseui-idp-text firebaseui-idp-text-long">Sign in with phone</span><span class="firebaseui-idp-text firebaseui-idp-text-short">Phone</span>' : "anonymous" == h.providerId ? l += '<span class="firebaseui-idp-text firebaseui-idp-text-long">Continue as guest</span><span class="firebaseui-idp-text firebaseui-idp-text-short">Guest</span>' : (h = "Sign in with " + A(Pk(f, g)), l += '<span class="firebaseui-idp-text firebaseui-idp-text-long">' + h + '</span><span class="firebaseui-idp-text firebaseui-idp-text-short">' + A(Pk(f, g)) + "</span>");
        f = B(l + "</button>");
        d += '<li class="firebaseui-list-item">' + f + "</li>";
      }

      d += '</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">' + Jk(c) + "</div></div>";
      return B(d);
    }

    Ll.w = "firebaseui.auth.soy2.page.providerSignIn";

    function Ml(a, b, c) {
      a = a || {};
      var d = a.Fb,
          e = a.Va;
      b = a.ia;
      a = a || {};
      a = a.za;
      a = '<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="' + wd(null != a ? a : "") + '"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>';
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">' + B(a);
      var f;
      d ? f = B('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>') : f = "";
      f = a + f + '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + (e ? Hk(null) : "") + Ak({
        label: D("Verify")
      }) + '</div></div><div class="firebaseui-card-footer">';
      b ? (b = '<p class="firebaseui-tos firebaseui-phone-tos">', b = c.G && c.F ? b + 'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.' : b + "By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.", c = B(b + "</p>")) : c = B('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>') + Ik(c);
      return B(f + c + "</div></form></div>");
    }

    Ml.w = "firebaseui.auth.soy2.page.phoneSignInStart";

    function Nl(a, b, c) {
      a = a || {};
      b = a.phoneNumber;
      var d = "";
      a = 'Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;' + (A(b) + "</a>");
      A(b);
      b = d;
      d = B('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>');
      c = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + a + "</p>" + d + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Hk(null) + Ak({
        label: D("Continue")
      }) + '</div></div><div class="firebaseui-card-footer">' + Ik(c) + "</div></form>";
      a = B('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>');
      return B(b + (c + a + "</div>"));
    }

    Nl.w = "firebaseui.auth.soy2.page.phoneSignInFinish";

    function Ol() {
      return B('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>');
    }

    Ol.w = "firebaseui.auth.soy2.page.signOut";

    function Pl(a, b, c) {
      var d = '<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';
      a = a.dc;
      b = a.length;

      for (var e = 0; e < b; e++) {
        var f = a[e];
        var g = "",
            h = "Sign in to " + A(f.displayName),
            l = A(f.displayName),
            p = f.tenantId ? f.tenantId : "top-level-project";
        p = D(p);
        g += '<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-' + wd(p) + ' firebaseui-id-tenant-selection-button"' + (f.tenantId ? 'data-tenant-id="' + wd(f.tenantId) + '"' : "") + 'style="background-color:' + wd(Fd(f.Ga)) + '"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="' + wd(Bd(f.Ma)) + '"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">' + h + '</span><span class="firebaseui-idp-text firebaseui-idp-text-short">' + l + "</span></button>";
        f = B(g);
        d += '<li class="firebaseui-list-item">' + f + "</li>";
      }

      d += '</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">' + Jk(c) + "</div></div>";
      return B(d);
    }

    Pl.w = "firebaseui.auth.soy2.page.selectTenant";

    function Ql(a, b, c) {
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">' + zk(null) + '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Ak(null) + '</div></div><div class="firebaseui-card-footer">' + Jk(c) + "</div></form></div>";
      return B(a);
    }

    Ql.w = "firebaseui.auth.soy2.page.providerMatchByEmail";

    function Rl() {
      return M(this, "firebaseui-id-submit");
    }

    function Sl() {
      return M(this, "firebaseui-id-secondary-link");
    }

    function Tl(a, b) {
      O(this, Rl.call(this), function (d) {
        a(d);
      });
      var c = Sl.call(this);
      c && b && O(this, c, function (d) {
        b(d);
      });
    }

    function Ul() {
      return M(this, "firebaseui-id-password");
    }

    function Vl() {
      return M(this, "firebaseui-id-password-error");
    }

    function Wl() {
      var a = Ul.call(this),
          b = Vl.call(this);
      sk(this, a, function () {
        yk(b) && (N(a, !0), wk(b));
      });
    }

    function Xl() {
      var a = Ul.call(this);
      var b = Vl.call(this);
      Ej(a) ? (N(a, !0), wk(b), b = !0) : (N(a, !1), xk(b, C("Enter your password").toString()), b = !1);
      return b ? Ej(a) : null;
    }

    function Yl(a, b, c, d, e, f) {
      P.call(this, rl, {
        email: a
      }, f, "passwordLinking", {
        G: d,
        F: e
      });
      this.A = b;
      this.I = c;
    }

    m(Yl, P);

    Yl.prototype.v = function () {
      this.R();
      this.N(this.A, this.I);
      dl(this, this.i(), this.A);
      this.i().focus();
      P.prototype.v.call(this);
    };

    Yl.prototype.m = function () {
      this.A = null;
      P.prototype.m.call(this);
    };

    Yl.prototype.j = function () {
      return Ej(M(this, "firebaseui-id-email"));
    };

    u(Yl.prototype, {
      i: Ul,
      C: Vl,
      R: Wl,
      u: Xl,
      ea: Rl,
      ba: Sl,
      N: Tl
    });
    var Zl = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;

    function $l() {
      return M(this, "firebaseui-id-email");
    }

    function am() {
      return M(this, "firebaseui-id-email-error");
    }

    function bm(a) {
      var b = $l.call(this),
          c = am.call(this);
      sk(this, b, function () {
        yk(c) && (N(b, !0), wk(c));
      });
      a && tk(this, b, function () {
        a();
      });
    }

    function cm() {
      return Wa(Ej($l.call(this)) || "");
    }

    function dm() {
      var a = $l.call(this);
      var b = am.call(this);
      var c = Ej(a) || "";
      c ? Zl.test(c) ? (N(a, !0), wk(b), b = !0) : (N(a, !1), xk(b, C("That email address isn't correct").toString()), b = !1) : (N(a, !1), xk(b, C("Enter your email address to continue").toString()), b = !1);
      return b ? Wa(Ej(a)) : null;
    }

    function em(a, b, c, d, e, f, g) {
      P.call(this, fl, {
        email: c,
        ia: !!f
      }, g, "passwordSignIn", {
        G: d,
        F: e
      });
      this.A = a;
      this.I = b;
    }

    m(em, P);

    em.prototype.v = function () {
      this.R();
      this.ea();
      this.ba(this.A, this.I);
      cl(this, this.l(), this.i());
      dl(this, this.i(), this.A);
      Ej(this.l()) ? this.i().focus() : this.l().focus();
      P.prototype.v.call(this);
    };

    em.prototype.m = function () {
      this.I = this.A = null;
      P.prototype.m.call(this);
    };

    u(em.prototype, {
      l: $l,
      U: am,
      R: bm,
      N: cm,
      j: dm,
      i: Ul,
      C: Vl,
      ea: Wl,
      u: Xl,
      ua: Rl,
      pa: Sl,
      ba: Tl
    });

    function R(a, b, c, d, e, f) {
      P.call(this, a, b, d, e || "notice", f);
      this.i = c || null;
    }

    w(R, P);

    R.prototype.v = function () {
      this.i && (this.u(this.i), this.l().focus());
      R.L.v.call(this);
    };

    R.prototype.m = function () {
      this.i = null;
      R.L.m.call(this);
    };

    u(R.prototype, {
      l: Rl,
      A: Sl,
      u: Tl
    });

    function fm(a, b, c, d, e) {
      R.call(this, il, {
        email: a,
        H: !!b
      }, b, e, "passwordRecoveryEmailSent", {
        G: c,
        F: d
      });
    }

    w(fm, R);

    function gm(a, b) {
      R.call(this, Bl, {
        H: !!a
      }, a, b, "emailVerificationSuccess");
    }

    w(gm, R);

    function hm(a, b) {
      R.call(this, Cl, {
        H: !!a
      }, a, b, "emailVerificationFailure");
    }

    w(hm, R);

    function im(a, b, c) {
      R.call(this, El, {
        email: a,
        H: !!b
      }, b, c, "verifyAndChangeEmailSuccess");
    }

    w(im, R);

    function jm(a, b) {
      R.call(this, Fl, {
        H: !!a
      }, a, b, "verifyAndChangeEmailFailure");
    }

    w(jm, R);

    function km(a, b) {
      R.call(this, Hl, {
        H: !!a
      }, a, b, "revertSecondFactorAdditionFailure");
    }

    w(km, R);

    function lm(a) {
      R.call(this, Ol, void 0, void 0, a, "signOut");
    }

    w(lm, R);

    function mm(a, b) {
      R.call(this, xl, {
        H: !!a
      }, a, b, "passwordResetSuccess");
    }

    w(mm, R);

    function nm(a, b) {
      R.call(this, yl, {
        H: !!a
      }, a, b, "passwordResetFailure");
    }

    w(nm, R);

    function om(a, b) {
      R.call(this, Al, {
        H: !!a
      }, a, b, "emailChangeRevokeFailure");
    }

    w(om, R);

    function pm(a, b, c) {
      R.call(this, Il, {
        errorMessage: a,
        zb: !!b
      }, b, c, "recoverableError");
    }

    w(pm, R);

    function qm(a, b) {
      R.call(this, Jl, {
        errorMessage: a
      }, void 0, b, "unrecoverableError");
    }

    w(qm, R);
    var rm = !1,
        sm = null;

    function tm(a, b) {
      rm = !!b;
      sm || ("undefined" == typeof accountchooser && zj() ? (b = zc(vc(new sc(tc, "//www.gstatic.com/accountchooser/client.js"))), sm = G(Kf(b)).ta(function () {})) : sm = G());
      sm.then(a, a);
    }

    function um(a, b) {
      a = S(a);
      (a = Wi(a).accountChooserInvoked || null) ? a(b) : b();
    }

    function vm(a, b, c) {
      a = S(a);
      (a = Wi(a).accountChooserResult || null) ? a(b, c) : c();
    }

    function wm(a, b, c, d, e) {
      d ? (L("callback", a, b), rm && c()) : um(a, function () {
        Qh(new Gg(a.a.tenantId || null), T(a));
        kj(function (f) {
          Fh(yh, T(a));
          vm(a, f ? "empty" : "unavailable", function () {
            L("signIn", a, b);
            (f || rm) && c();
          });
        }, Kh(T(a)), e);
      });
    }

    function xm(a, b, c, d) {
      function e(f) {
        f = U(f);
        V(b, c, void 0, f);
        d();
      }

      vm(b, "accountSelected", function () {
        Jh(!1, T(b));
        var f = ym(b);
        W(b, X(b).fetchSignInMethodsForEmail(a.a).then(function (g) {
          zm(b, c, g, a.a, a.h || void 0, void 0, f);
          d();
        }, e));
      });
    }

    function Am(a, b, c, d) {
      vm(b, a ? "addAccount" : "unavailable", function () {
        L("signIn", b, c);
        (a || rm) && d();
      });
    }

    function Bm(a, b, c, d) {
      function e() {
        var f = a();
        f && (f = Vi(S(f))) && f();
      }

      hj(function () {
        var f = a();
        f && wm(f, b, e, c, d);
      }, function (f) {
        var g = a();
        g && xm(f, g, b, e);
      }, function (f) {
        var g = a();
        g && Am(f, g, b, e);
      }, a() && qi(S(a())));
    }

    function Cm(a, b, c, d) {
      function e(g) {
        if (!g.name || "cancel" != g.name) {
          a: {
            var h = g.message;

            try {
              var l = ((JSON.parse(h).error || {}).message || "").toLowerCase().match(/invalid.+(access|id)_token/);

              if (l && l.length) {
                var p = !0;
                break a;
              }
            } catch (r) {}

            p = !1;
          }

          if (p) g = Q(b), b.o(), V(a, g, void 0, C("Your sign-in session has expired. Please try again.").toString());else {
            p = g && g.message || "";

            if (g.code) {
              if ("auth/email-already-in-use" == g.code || "auth/credential-already-in-use" == g.code) return;
              p = U(g);
            }

            b.a(p);
          }
        }
      }

      Dm(a);
      if (d) return Em(a, c), G();
      if (!c.credential) throw Error("No credential found!");
      d = X(a).currentUser || c.user;
      if (!d) throw Error("User not logged in.");
      d = new xg(d.email, d.displayName, d.photoURL, "password" == c.credential.providerId ? null : c.credential.providerId);
      null != Eh(Ah, T(a)) && !Eh(Ah, T(a)) || Lh(d, T(a));
      Fh(Ah, T(a));

      try {
        var f = Fm(a, c);
      } catch (g) {
        return rg(g.code || g.message, g), b.a(g.code || g.message), G();
      }

      c = f.then(function (g) {
        Em(a, g);
      }, e).then(void 0, e);
      W(a, f);
      return G(c);
    }

    function Em(a, b) {
      if (!b.user) throw Error("No user found");
      var c = Yi(S(a));
      Xi(S(a)) && c && wg("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked.");

      if (c) {
        c = Yi(S(a));
        var d = Hh(T(a)) || void 0;
        Fh(zh, T(a));
        var e = !1;

        if (sf()) {
          if (!c || c(b, d)) e = !0, window.opener.location.assign(Cc(Fc(Gm(a, d))));
          c || window.close();
        } else if (!c || c(b, d)) e = !0, rf(Gm(a, d));

        e || a.reset();
      } else {
        c = b.user;
        b = b.credential;
        d = Xi(S(a));
        e = Hh(T(a)) || void 0;
        Fh(zh, T(a));
        var f = !1;

        if (sf()) {
          if (!d || d(c, b, e)) f = !0, window.opener.location.assign(Cc(Fc(Gm(a, e))));
          d || window.close();
        } else if (!d || d(c, b, e)) f = !0, rf(Gm(a, e));

        f || a.reset();
      }
    }

    function Gm(a, b) {
      a = b || S(a).a.get("signInSuccessUrl");
      if (!a) throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");
      return a;
    }

    function U(a) {
      var b = {
        code: a.code
      };
      b = b || {};
      var c = "";

      switch (b.code) {
        case "auth/email-already-in-use":
          c += "The email address is already used by another account";
          break;

        case "auth/requires-recent-login":
          c += Od();
          break;

        case "auth/too-many-requests":
          c += "You have entered an incorrect password too many times. Please try again in a few minutes.";
          break;

        case "auth/user-cancelled":
          c += "Please authorize the required permissions to sign in to the application";
          break;

        case "auth/user-not-found":
          c += "That email address doesn't match an existing account";
          break;

        case "auth/user-token-expired":
          c += Od();
          break;

        case "auth/weak-password":
          c += "Strong passwords have at least 6 characters and a mix of letters and numbers";
          break;

        case "auth/wrong-password":
          c += "The email and password you entered don't match";
          break;

        case "auth/network-request-failed":
          c += "A network error has occurred";
          break;

        case "auth/invalid-phone-number":
          c += Jd();
          break;

        case "auth/invalid-verification-code":
          c += C("Wrong code. Try again.");
          break;

        case "auth/code-expired":
          c += "This code is no longer valid";
          break;

        case "auth/expired-action-code":
          c += "This code has expired.";
          break;

        case "auth/invalid-action-code":
          c += "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.";
      }

      if (b = C(c).toString()) return b;

      try {
        return JSON.parse(a.message), rg("Internal error: " + a.message, void 0), Ld().toString();
      } catch (d) {
        return a.message;
      }
    }

    function Hm(a, b, c) {
      var d = ni[b] && firebase.auth[ni[b]] ? new firebase.auth[ni[b]]() : 0 == b.indexOf("saml.") ? new firebase.auth.SAMLAuthProvider(b) : new firebase.auth.OAuthProvider(b);
      if (!d) throw Error("Invalid Firebase Auth provider!");
      var e = Hi(S(a), b);
      if (d.addScope) for (var f = 0; f < e.length; f++) d.addScope(e[f]);
      e = Ii(S(a), b) || {};
      c && (b == firebase.auth.GoogleAuthProvider.PROVIDER_ID ? a = "login_hint" : b == firebase.auth.GithubAuthProvider.PROVIDER_ID ? a = "login" : a = (a = zi(S(a), b)) && a.Nb, a && (e[a] = c));
      d.setCustomParameters && d.setCustomParameters(e);
      return d;
    }

    function Im(a, b, c, d) {
      function e() {
        Qh(new Gg(a.a.tenantId || null), T(a));
        W(a, b.J(t(a.cc, a), [l], function () {
          if ("file:" === (window.location && window.location.protocol)) return W(a, Jm(a).then(function (p) {
            b.o();
            Fh(yh, T(a));
            L("callback", a, h, G(p));
          }, f));
        }, g));
      }

      function f(p) {
        Fh(yh, T(a));
        if (!p.name || "cancel" != p.name) switch (p.code) {
          case "auth/popup-blocked":
            e();
            break;

          case "auth/popup-closed-by-user":
          case "auth/cancelled-popup-request":
            break;

          case "auth/credential-already-in-use":
            break;

          case "auth/network-request-failed":
          case "auth/too-many-requests":
          case "auth/user-cancelled":
            b.a(U(p));
            break;

          default:
            b.o(), L("callback", a, h, ef(p));
        }
      }

      function g(p) {
        Fh(yh, T(a));
        p.name && "cancel" == p.name || (rg("signInWithRedirect: " + p.code, void 0), p = U(p), "blank" == b.Ea && Ri(S(a)) ? (b.o(), L("providerSignIn", a, h, p)) : b.a(p));
      }

      var h = Q(b),
          l = Hm(a, c, d);
      Si(S(a)) == Ti ? e() : W(a, Km(a, l).then(function (p) {
        b.o();
        L("callback", a, h, G(p));
      }, f));
    }

    function Lm(a, b) {
      W(a, b.J(t(a.Zb, a), [], function (c) {
        b.o();
        return Cm(a, b, c, !0);
      }, function (c) {
        c.name && "cancel" == c.name || (rg("ContinueAsGuest: " + c.code, void 0), c = U(c), b.a(c));
      }));
    }

    function Mm(a, b, c) {
      function d(f) {
        var g = !1;
        f = b.J(t(a.$b, a), [f], function (h) {
          var l = Q(b);
          b.o();
          L("callback", a, l, G(h));
          g = !0;
        }, function (h) {
          if (!h.name || "cancel" != h.name) if (!h || "auth/credential-already-in-use" != h.code) if (h && "auth/email-already-in-use" == h.code && h.email && h.credential) {
            var l = Q(b);
            b.o();
            L("callback", a, l, ef(h));
          } else h = U(h), b.a(h);
        });
        W(a, f);
        return f.then(function () {
          return g;
        }, function () {
          return !1;
        });
      }

      if (c && c.credential && c.clientId === Ci(S(a))) {
        if (Hi(S(a), firebase.auth.GoogleAuthProvider.PROVIDER_ID).length) {
          try {
            var e = JSON.parse(atob(c.credential.split(".")[1])).email;
          } catch (f) {}

          Im(a, b, firebase.auth.GoogleAuthProvider.PROVIDER_ID, e);
          return G(!0);
        }

        return d(firebase.auth.GoogleAuthProvider.credential(c.credential));
      }

      c && b.a(C("The selected credential for the authentication provider is not supported!").toString());
      return G(!1);
    }

    function Nm(a, b) {
      var c = b.j(),
          d = b.u();
      if (c) {
        if (d) {
          var e = firebase.auth.EmailAuthProvider.credential(c, d);
          W(a, b.J(t(a.ac, a), [c, d], function (f) {
            return Cm(a, b, {
              user: f.user,
              credential: e,
              operationType: f.operationType,
              additionalUserInfo: f.additionalUserInfo
            });
          }, function (f) {
            if (!f.name || "cancel" != f.name) switch (f.code) {
              case "auth/email-already-in-use":
                break;

              case "auth/email-exists":
                N(b.l(), !1);
                xk(b.U(), U(f));
                break;

              case "auth/too-many-requests":
              case "auth/wrong-password":
                N(b.i(), !1);
                xk(b.C(), U(f));
                break;

              default:
                rg("verifyPassword: " + f.message, void 0), b.a(U(f));
            }
          }));
        } else b.i().focus();
      } else b.l().focus();
    }

    function ym(a) {
      a = yi(S(a));
      return 1 == a.length && a[0] == firebase.auth.EmailAuthProvider.PROVIDER_ID;
    }

    function Om(a) {
      a = yi(S(a));
      return 1 == a.length && a[0] == firebase.auth.PhoneAuthProvider.PROVIDER_ID;
    }

    function V(a, b, c, d) {
      ym(a) ? d ? L("signIn", a, b, c, d) : Pm(a, b, c) : a && Om(a) && !d ? L("phoneSignInStart", a, b) : a && Ri(S(a)) && !d ? L("federatedRedirect", a, b, c) : L("providerSignIn", a, b, d, c);
    }

    function Qm(a, b, c, d) {
      var e = Q(b);
      W(a, b.J(t(X(a).fetchSignInMethodsForEmail, X(a)), [c], function (f) {
        Jh(Di(S(a)) == pi, T(a));
        b.o();
        zm(a, e, f, c, void 0, d);
      }, function (f) {
        f = U(f);
        b.a(f);
      }));
    }

    function zm(a, b, c, d, e, f, g) {
      c.length || Oi(S(a)) ? !c.length && Oi(S(a)) ? L("sendEmailLinkForSignIn", a, b, d, function () {
        L("signIn", a, b);
      }) : Na(c, firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD) ? L("passwordSignIn", a, b, d, g) : 1 == c.length && c[0] === firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD ? Oi(S(a)) ? L("sendEmailLinkForSignIn", a, b, d, function () {
        L("signIn", a, b);
      }) : L("unsupportedProvider", a, b, d) : (c = li(c, yi(S(a)))) ? (Oh(new Eg(d), T(a)), L("federatedSignIn", a, b, d, c, f)) : L("unsupportedProvider", a, b, d) : L("passwordSignUp", a, b, d, e, void 0, g);
    }

    function Rm(a, b, c, d, e, f) {
      var g = Q(b);
      W(a, b.J(t(a.Hb, a), [c, f], function () {
        b.o();
        L("emailLinkSignInSent", a, g, c, d, f);
      }, e));
    }

    function Pm(a, b, c) {
      Di(S(a)) == pi ? tm(function () {
        fj ? um(a, function () {
          Qh(new Gg(a.a.tenantId || null), T(a));
          kj(function (d) {
            Fh(yh, T(a));
            vm(a, d ? "empty" : "unavailable", function () {
              c ? L("prefilledEmailSignIn", a, b, c) : L("signIn", a, b);
            });
          }, Kh(T(a)), ri(S(a)));
        }) : (Y(a), Bm(Sm, b, !1, ri(S(a))));
      }, !1) : (rm = !1, um(a, function () {
        vm(a, "unavailable", function () {
          c ? L("prefilledEmailSignIn", a, b, c) : L("signIn", a, b);
        });
      }));
    }

    function Tm(a) {
      var b = vf();
      a = ti(S(a));
      b = vb(b, a) || "";

      for (var c in aj) if (aj[c].toLowerCase() == b.toLowerCase()) return aj[c];

      return "callback";
    }

    function Um(a) {
      var b = vf();
      a = Wh(S(a).a, "queryParameterForSignInSuccessUrl");
      return (b = vb(b, a)) ? Cc(Fc(b)) : null;
    }

    function Vm() {
      return vb(vf(), "oobCode");
    }

    function Wm() {
      var a = vb(vf(), "continueUrl");
      return a ? function () {
        rf(a);
      } : null;
    }

    function Xm(a, b) {
      var c = uf(b, "Could not find the FirebaseUI widget element on the page.");
      b = Um(a);

      switch (Tm(a)) {
        case "callback":
          b && Ih(b, T(a));
          a.nb() ? L("callback", a, c) : V(a, c, Ym(a));
          break;

        case "resetPassword":
          L("passwordReset", a, c, Vm(), Wm());
          break;

        case "recoverEmail":
          L("emailChangeRevocation", a, c, Vm());
          break;

        case "revertSecondFactorAddition":
          L("revertSecondFactorAddition", a, c, Vm());
          break;

        case "verifyEmail":
          L("emailVerification", a, c, Vm(), Wm());
          break;

        case "verifyAndChangeEmail":
          L("verifyAndChangeEmail", a, c, Vm(), Wm());
          break;

        case "signIn":
          L("emailLinkSignInCallback", a, c, vf());
          Zm();
          break;

        case "select":
          if (b && Ih(b, T(a)), fj) {
            V(a, c);
            break;
          } else {
            tm(function () {
              Y(a);
              Bm(Sm, c, !0);
            }, !0);
            return;
          }

        default:
          throw Error("Unhandled widget operation.");
      }

      (b = Vi(S(a))) && b();
    }

    function $m(a, b) {
      P.call(this, ql, void 0, b, "anonymousUserMismatch");
      this.i = a;
    }

    m($m, P);

    $m.prototype.v = function () {
      var a = this;
      O(this, this.l(), function () {
        a.i();
      });
      this.l().focus();
      P.prototype.v.call(this);
    };

    $m.prototype.m = function () {
      this.i = null;
      P.prototype.m.call(this);
    };

    u($m.prototype, {
      l: Sl
    });

    J.anonymousUserMismatch = function (a, b) {
      var c = new $m(function () {
        c.o();
        V(a, b);
      });
      c.render(b);
      Z(a, c);
    };

    function an(a) {
      P.call(this, jl, void 0, a, "callback");
    }

    m(an, P);

    an.prototype.J = function (a, b, c, d) {
      return a.apply(null, b).then(c, d);
    };

    function bn(a, b, c) {
      if (c.user) {
        var d = {
          user: c.user,
          credential: c.credential,
          operationType: c.operationType,
          additionalUserInfo: c.additionalUserInfo
        },
            e = Mh(T(a)),
            f = e && e.g;
        if (f && !cn(c.user, f)) dn(a, b, d);else {
          var g = e && e.a;
          g ? W(a, c.user.linkWithCredential(g).then(function (h) {
            d = {
              user: h.user,
              credential: g,
              operationType: h.operationType,
              additionalUserInfo: h.additionalUserInfo
            };
            en(a, b, d);
          }, function (h) {
            fn(a, b, h);
          })) : en(a, b, d);
        }
      } else c = Q(b), b.o(), Nh(T(a)), V(a, c);
    }

    function en(a, b, c) {
      Nh(T(a));
      Cm(a, b, c);
    }

    function fn(a, b, c) {
      var d = Q(b);
      Nh(T(a));
      c = U(c);
      b.o();
      V(a, d, void 0, c);
    }

    function gn(a, b, c, d) {
      var e = Q(b);
      W(a, X(a).fetchSignInMethodsForEmail(c).then(function (f) {
        b.o();
        f.length ? Na(f, firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD) ? L("passwordLinking", a, e, c) : 1 == f.length && f[0] === firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD ? L("emailLinkSignInLinking", a, e, c) : (f = li(f, yi(S(a)))) ? L("federatedLinking", a, e, c, f, d) : (Nh(T(a)), L("unsupportedProvider", a, e, c)) : (Nh(T(a)), L("passwordRecovery", a, e, c, !1, Md().toString()));
      }, function (f) {
        fn(a, b, f);
      }));
    }

    function dn(a, b, c) {
      var d = Q(b);
      W(a, hn(a).then(function () {
        b.o();
        L("emailMismatch", a, d, c);
      }, function (e) {
        e.name && "cancel" == e.name || (e = U(e.code), b.a(e));
      }));
    }

    function cn(a, b) {
      if (b == a.email) return !0;
      if (a.providerData) for (var c = 0; c < a.providerData.length; c++) if (b == a.providerData[c].email) return !0;
      return !1;
    }

    J.callback = function (a, b, c) {
      var d = new an();
      d.render(b);
      Z(a, d);
      b = c || Jm(a);
      W(a, b.then(function (e) {
        bn(a, d, e);
      }, function (e) {
        if (e && ("auth/account-exists-with-different-credential" == e.code || "auth/email-already-in-use" == e.code) && e.email && e.credential) Oh(new Eg(e.email, e.credential), T(a)), gn(a, d, e.email);else if (e && "auth/user-cancelled" == e.code) {
          var f = Mh(T(a)),
              g = U(e);
          f && f.a ? gn(a, d, f.g, g) : f ? Qm(a, d, f.g, g) : fn(a, d, e);
        } else e && "auth/credential-already-in-use" == e.code || (e && "auth/operation-not-supported-in-this-environment" == e.code && ym(a) ? bn(a, d, {
          user: null,
          credential: null
        }) : fn(a, d, e));
      }));
    };

    function jn(a, b) {
      P.call(this, pl, void 0, b, "differentDeviceError");
      this.i = a;
    }

    m(jn, P);

    jn.prototype.v = function () {
      var a = this;
      O(this, this.l(), function () {
        a.i();
      });
      this.l().focus();
      P.prototype.v.call(this);
    };

    jn.prototype.m = function () {
      this.i = null;
      P.prototype.m.call(this);
    };

    u(jn.prototype, {
      l: Sl
    });

    J.differentDeviceError = function (a, b) {
      var c = new jn(function () {
        c.o();
        V(a, b);
      });
      c.render(b);
      Z(a, c);
    };

    function kn(a, b, c, d) {
      P.call(this, zl, {
        email: a,
        H: !!c
      }, d, "emailChangeRevoke");
      this.l = b;
      this.i = c || null;
    }

    m(kn, P);

    kn.prototype.v = function () {
      var a = this;
      O(this, M(this, "firebaseui-id-reset-password-link"), function () {
        a.l();
      });
      this.i && (this.A(this.i), this.u().focus());
      P.prototype.v.call(this);
    };

    kn.prototype.m = function () {
      this.l = this.i = null;
      P.prototype.m.call(this);
    };

    u(kn.prototype, {
      u: Rl,
      C: Sl,
      A: Tl
    });

    function ln() {
      return M(this, "firebaseui-id-new-password");
    }

    function mn() {
      return M(this, "firebaseui-id-password-toggle");
    }

    function nn() {
      this.Ra = !this.Ra;
      var a = mn.call(this),
          b = ln.call(this);
      this.Ra ? (b.type = "text", Cj(a, "firebaseui-input-toggle-off"), Dj(a, "firebaseui-input-toggle-on")) : (b.type = "password", Cj(a, "firebaseui-input-toggle-on"), Dj(a, "firebaseui-input-toggle-off"));
      b.focus();
    }

    function on() {
      return M(this, "firebaseui-id-new-password-error");
    }

    function pn() {
      this.Ra = !1;
      var a = ln.call(this);
      a.type = "password";
      var b = on.call(this);
      sk(this, a, function () {
        yk(b) && (N(a, !0), wk(b));
      });
      var c = mn.call(this);
      Cj(c, "firebaseui-input-toggle-on");
      Dj(c, "firebaseui-input-toggle-off");
      uk(this, a, function () {
        Cj(c, "firebaseui-input-toggle-focus");
        Dj(c, "firebaseui-input-toggle-blur");
      });
      vk(this, a, function () {
        Cj(c, "firebaseui-input-toggle-blur");
        Dj(c, "firebaseui-input-toggle-focus");
      });
      O(this, c, t(nn, this));
    }

    function qn() {
      var a = ln.call(this);
      var b = on.call(this);
      Ej(a) ? (N(a, !0), wk(b), b = !0) : (N(a, !1), xk(b, C("Enter your password").toString()), b = !1);
      return b ? Ej(a) : null;
    }

    function rn(a, b, c) {
      P.call(this, wl, {
        email: a
      }, c, "passwordReset");
      this.l = b;
    }

    m(rn, P);

    rn.prototype.v = function () {
      this.I();
      this.C(this.l);
      dl(this, this.i(), this.l);
      this.i().focus();
      P.prototype.v.call(this);
    };

    rn.prototype.m = function () {
      this.l = null;
      P.prototype.m.call(this);
    };

    u(rn.prototype, {
      i: ln,
      A: on,
      N: mn,
      I: pn,
      u: qn,
      U: Rl,
      R: Sl,
      C: Tl
    });

    function sn(a, b, c, d, e) {
      P.call(this, Gl, {
        factorId: a,
        phoneNumber: c || null,
        H: !!d
      }, e, "revertSecondFactorAdditionSuccess");
      this.l = b;
      this.i = d || null;
    }

    m(sn, P);

    sn.prototype.v = function () {
      var a = this;
      O(this, M(this, "firebaseui-id-reset-password-link"), function () {
        a.l();
      });
      this.i && (this.A(this.i), this.u().focus());
      P.prototype.v.call(this);
    };

    sn.prototype.m = function () {
      this.l = this.i = null;
      P.prototype.m.call(this);
    };

    u(sn.prototype, {
      u: Rl,
      C: Sl,
      A: Tl
    });

    function tn(a, b, c, d, e) {
      var f = c.u();
      f && W(a, c.J(t(X(a).confirmPasswordReset, X(a)), [d, f], function () {
        c.o();
        var g = new mm(e);
        g.render(b);
        Z(a, g);
      }, function (g) {
        un(a, b, c, g);
      }));
    }

    function un(a, b, c, d) {
      "auth/weak-password" == (d && d.code) ? (a = U(d), N(c.i(), !1), xk(c.A(), a), c.i().focus()) : (c && c.o(), c = new nm(), c.render(b), Z(a, c));
    }

    function vn(a, b, c) {
      var d = new kn(c, function () {
        W(a, d.J(t(X(a).sendPasswordResetEmail, X(a)), [c], function () {
          d.o();
          d = new fm(c, void 0, I(S(a)), Mi(S(a)));
          d.render(b);
          Z(a, d);
        }, function () {
          d.a(Kd().toString());
        }));
      });
      d.render(b);
      Z(a, d);
    }

    function wn(a, b, c, d) {
      var e = new sn(d.factorId, function () {
        e.J(t(X(a).sendPasswordResetEmail, X(a)), [c], function () {
          e.o();
          e = new fm(c, void 0, I(S(a)), Mi(S(a)));
          e.render(b);
          Z(a, e);
        }, function () {
          e.a(Kd().toString());
        });
      }, d.phoneNumber);
      e.render(b);
      Z(a, e);
    }

    J.passwordReset = function (a, b, c, d) {
      W(a, X(a).verifyPasswordResetCode(c).then(function (e) {
        var f = new rn(e, function () {
          tn(a, b, f, c, d);
        });
        f.render(b);
        Z(a, f);
      }, function () {
        un(a, b);
      }));
    };

    J.emailChangeRevocation = function (a, b, c) {
      var d = null;
      W(a, X(a).checkActionCode(c).then(function (e) {
        d = e.data.email;
        return X(a).applyActionCode(c);
      }).then(function () {
        vn(a, b, d);
      }, function () {
        var e = new om();
        e.render(b);
        Z(a, e);
      }));
    };

    J.emailVerification = function (a, b, c, d) {
      W(a, X(a).applyActionCode(c).then(function () {
        var e = new gm(d);
        e.render(b);
        Z(a, e);
      }, function () {
        var e = new hm();
        e.render(b);
        Z(a, e);
      }));
    };

    J.revertSecondFactorAddition = function (a, b, c) {
      var d = null,
          e = null;
      W(a, X(a).checkActionCode(c).then(function (f) {
        d = f.data.email;
        e = f.data.multiFactorInfo;
        return X(a).applyActionCode(c);
      }).then(function () {
        wn(a, b, d, e);
      }, function () {
        var f = new km();
        f.render(b);
        Z(a, f);
      }));
    };

    J.verifyAndChangeEmail = function (a, b, c, d) {
      var e = null;
      W(a, X(a).checkActionCode(c).then(function (f) {
        e = f.data.email;
        return X(a).applyActionCode(c);
      }).then(function () {
        var f = new im(e, d);
        f.render(b);
        Z(a, f);
      }, function () {
        var f = new jm();
        f.render(b);
        Z(a, f);
      }));
    };

    function xn(a, b) {
      try {
        var c = "number" == typeof a.selectionStart;
      } catch (d) {
        c = !1;
      }

      c ? (a.selectionStart = b, a.selectionEnd = b) : z && !pc("9") && ("textarea" == a.type && (b = a.value.substring(0, b).replace(/(\r\n|\r|\n)/g, "\n").length), a = a.createTextRange(), a.collapse(!0), a.move("character", b), a.select());
    }

    function yn(a, b, c, d, e, f) {
      P.call(this, ol, {
        email: c
      }, f, "emailLinkSignInConfirmation", {
        G: d,
        F: e
      });
      this.l = a;
      this.u = b;
    }

    m(yn, P);

    yn.prototype.v = function () {
      this.A(this.l);
      this.C(this.l, this.u);
      this.i().focus();
      xn(this.i(), (this.i().value || "").length);
      P.prototype.v.call(this);
    };

    yn.prototype.m = function () {
      this.u = this.l = null;
      P.prototype.m.call(this);
    };

    u(yn.prototype, {
      i: $l,
      N: am,
      A: bm,
      I: cm,
      j: dm,
      U: Rl,
      R: Sl,
      C: Tl
    });

    J.emailLinkConfirmation = function (a, b, c, d, e, f) {
      var g = new yn(function () {
        var h = g.j();
        h ? (g.o(), d(a, b, h, c)) : g.i().focus();
      }, function () {
        g.o();
        V(a, b, e || void 0);
      }, e || void 0, I(S(a)), Mi(S(a)));
      g.render(b);
      Z(a, g);
      f && g.a(f);
    };

    function zn(a, b, c, d, e) {
      P.call(this, tl, {
        ga: a
      }, e, "emailLinkSignInLinkingDifferentDevice", {
        G: c,
        F: d
      });
      this.i = b;
    }

    m(zn, P);

    zn.prototype.v = function () {
      this.u(this.i);
      this.l().focus();
      P.prototype.v.call(this);
    };

    zn.prototype.m = function () {
      this.i = null;
      P.prototype.m.call(this);
    };

    u(zn.prototype, {
      l: Rl,
      u: Tl
    });

    J.emailLinkNewDeviceLinking = function (a, b, c, d) {
      var e = new Sb(c);
      c = e.a.a.get(x.PROVIDER_ID) || null;
      Wb(e, null);

      if (c) {
        var f = new zn(zi(S(a), c), function () {
          f.o();
          d(a, b, e.toString());
        }, I(S(a)), Mi(S(a)));
        f.render(b);
        Z(a, f);
      } else V(a, b);
    };

    function An(a) {
      P.call(this, ll, void 0, a, "blank");
    }

    m(An, P);

    function Bn(a, b, c, d, e) {
      var f = new An(),
          g = new Sb(c),
          h = g.a.a.get(x.$a) || "",
          l = g.a.a.get(x.Sa) || "",
          p = "1" === g.a.a.get(x.Qa),
          r = Vb(g),
          K = g.a.a.get(x.PROVIDER_ID) || null;
      g = g.a.a.get(x.wb) || null;
      Cn(a, g);
      var Ea = !Eh(Ch, T(a)),
          Dl = d || Rh(l, T(a)),
          sd = (d = Sh(l, T(a))) && d.a;
      K && sd && sd.providerId !== K && (sd = null);
      f.render(b);
      Z(a, f);
      W(a, f.J(function () {
        var Aa = G(null);
        Aa = r && Ea || Ea && p ? ef(Error("anonymous-user-not-found")) : Dn(a, c).then(function (Kg) {
          if (K && !sd) throw Error("pending-credential-not-found");
          return Kg;
        });
        var td = null;
        return Aa.then(function (Kg) {
          td = Kg;
          return e ? null : X(a).checkActionCode(h);
        }).then(function () {
          return td;
        });
      }, [], function (Aa) {
        Dl ? En(a, f, Dl, c, sd, Aa) : p ? (f.o(), L("differentDeviceError", a, b)) : (f.o(), L("emailLinkConfirmation", a, b, c, Fn));
      }, function (Aa) {
        var td = void 0;
        if (!Aa || !Aa.name || "cancel" != Aa.name) switch (f.o(), Aa && Aa.message) {
          case "anonymous-user-not-found":
            L("differentDeviceError", a, b);
            break;

          case "anonymous-user-mismatch":
            L("anonymousUserMismatch", a, b);
            break;

          case "pending-credential-not-found":
            L("emailLinkNewDeviceLinking", a, b, c, Gn);
            break;

          default:
            Aa && (td = U(Aa)), V(a, b, void 0, td);
        }
      }));
    }

    function Fn(a, b, c, d) {
      Bn(a, b, d, c, !0);
    }

    function Gn(a, b, c) {
      Bn(a, b, c);
    }

    function En(a, b, c, d, e, f) {
      var g = Q(b);
      b.Z("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon", C("Signing in...").toString());
      var h = null;
      e = (f ? Hn(a, f, c, d, e) : In(a, c, d, e)).then(function (l) {
        Fh(Dh, T(a));
        Fh(Ch, T(a));
        b.h();
        b.Z("firebaseui-icon-done", C("Signed in!").toString());
        h = setTimeout(function () {
          b.h();
          Cm(a, b, l, !0);
        }, 1E3);
        W(a, function () {
          b && (b.h(), b.o());
          clearTimeout(h);
        });
      }, function (l) {
        b.h();
        b.o();

        if (!l.name || "cancel" != l.name) {
          var p = U(l);
          "auth/email-already-in-use" == l.code || "auth/credential-already-in-use" == l.code ? (Fh(Dh, T(a)), Fh(Ch, T(a))) : "auth/invalid-email" == l.code ? (p = C("The email provided does not match the current sign-in session.").toString(), L("emailLinkConfirmation", a, g, d, Fn, null, p)) : V(a, g, c, p);
        }
      });
      W(a, e);
    }

    J.emailLinkSignInCallback = Bn;

    function Jn(a, b, c, d, e, f) {
      P.call(this, sl, {
        email: a,
        ga: b
      }, f, "emailLinkSignInLinking", {
        G: d,
        F: e
      });
      this.i = c;
    }

    m(Jn, P);

    Jn.prototype.v = function () {
      this.u(this.i);
      this.l().focus();
      P.prototype.v.call(this);
    };

    Jn.prototype.m = function () {
      this.i = null;
      P.prototype.m.call(this);
    };

    u(Jn.prototype, {
      l: Rl,
      u: Tl
    });

    function Kn(a, b, c, d) {
      var e = Q(b);
      Rm(a, b, c, function () {
        V(a, e, c);
      }, function (f) {
        if (!f.name || "cancel" != f.name) {
          var g = U(f);
          f && "auth/network-request-failed" == f.code ? b.a(g) : (b.o(), V(a, e, c, g));
        }
      }, d);
    }

    J.emailLinkSignInLinking = function (a, b, c) {
      var d = Mh(T(a));
      Nh(T(a));

      if (d) {
        var e = d.a.providerId,
            f = new Jn(c, zi(S(a), e), function () {
          Kn(a, f, c, d);
        }, I(S(a)), Mi(S(a)));
        f.render(b);
        Z(a, f);
      } else V(a, b);
    };

    function Ln(a, b, c, d, e, f) {
      P.call(this, ml, {
        email: a
      }, f, "emailLinkSignInSent", {
        G: d,
        F: e
      });
      this.u = b;
      this.i = c;
    }

    m(Ln, P);

    Ln.prototype.v = function () {
      var a = this;
      O(this, this.l(), function () {
        a.i();
      });
      O(this, M(this, "firebaseui-id-trouble-getting-email-link"), function () {
        a.u();
      });
      this.l().focus();
      P.prototype.v.call(this);
    };

    Ln.prototype.m = function () {
      this.i = this.u = null;
      P.prototype.m.call(this);
    };

    u(Ln.prototype, {
      l: Sl
    });

    J.emailLinkSignInSent = function (a, b, c, d, e) {
      var f = new Ln(c, function () {
        f.o();
        L("emailNotReceived", a, b, c, d, e);
      }, function () {
        f.o();
        d();
      }, I(S(a)), Mi(S(a)));
      f.render(b);
      Z(a, f);
    };

    function Mn(a, b, c, d, e, f, g) {
      P.call(this, Kl, {
        ic: a,
        Pb: b
      }, g, "emailMismatch", {
        G: e,
        F: f
      });
      this.l = c;
      this.i = d;
    }

    m(Mn, P);

    Mn.prototype.v = function () {
      this.A(this.l, this.i);
      this.u().focus();
      P.prototype.v.call(this);
    };

    Mn.prototype.m = function () {
      this.i = null;
      P.prototype.m.call(this);
    };

    u(Mn.prototype, {
      u: Rl,
      C: Sl,
      A: Tl
    });

    J.emailMismatch = function (a, b, c) {
      var d = Mh(T(a));

      if (d) {
        var e = new Mn(c.user.email, d.g, function () {
          var f = e;
          Nh(T(a));
          Cm(a, f, c);
        }, function () {
          var f = c.credential.providerId,
              g = Q(e);
          e.o();
          d.a ? L("federatedLinking", a, g, d.g, f) : L("federatedSignIn", a, g, d.g, f);
        }, I(S(a)), Mi(S(a)));
        e.render(b);
        Z(a, e);
      } else V(a, b);
    };

    function Nn(a, b, c, d, e) {
      P.call(this, nl, void 0, e, "emailNotReceived", {
        G: c,
        F: d
      });
      this.l = a;
      this.i = b;
    }

    m(Nn, P);

    Nn.prototype.v = function () {
      var a = this;
      O(this, this.u(), function () {
        a.i();
      });
      O(this, this.Ba(), function () {
        a.l();
      });
      this.u().focus();
      P.prototype.v.call(this);
    };

    Nn.prototype.Ba = function () {
      return M(this, "firebaseui-id-resend-email-link");
    };

    Nn.prototype.m = function () {
      this.i = this.l = null;
      P.prototype.m.call(this);
    };

    u(Nn.prototype, {
      u: Sl
    });

    J.emailNotReceived = function (a, b, c, d, e) {
      var f = new Nn(function () {
        Rm(a, f, c, d, function (g) {
          g = U(g);
          f.a(g);
        }, e);
      }, function () {
        f.o();
        V(a, b, c);
      }, I(S(a)), Mi(S(a)));
      f.render(b);
      Z(a, f);
    };

    function On(a, b, c, d, e, f) {
      P.call(this, ul, {
        email: a,
        ga: b
      }, f, "federatedLinking", {
        G: d,
        F: e
      });
      this.i = c;
    }

    m(On, P);

    On.prototype.v = function () {
      this.u(this.i);
      this.l().focus();
      P.prototype.v.call(this);
    };

    On.prototype.m = function () {
      this.i = null;
      P.prototype.m.call(this);
    };

    u(On.prototype, {
      l: Rl,
      u: Tl
    });

    J.federatedLinking = function (a, b, c, d, e) {
      var f = Mh(T(a));

      if (f && f.a) {
        var g = new On(c, zi(S(a), d), function () {
          Im(a, g, d, c);
        }, I(S(a)), Mi(S(a)));
        g.render(b);
        Z(a, g);
        e && g.a(e);
      } else V(a, b);
    };

    J.federatedRedirect = function (a, b, c) {
      var d = new An();
      d.render(b);
      Z(a, d);
      b = yi(S(a))[0];
      Im(a, d, b, c);
    };

    J.federatedSignIn = function (a, b, c, d, e) {
      var f = new On(c, zi(S(a), d), function () {
        Im(a, f, d, c);
      }, I(S(a)), Mi(S(a)));
      f.render(b);
      Z(a, f);
      e && f.a(e);
    };

    function Pn(a, b, c, d) {
      var e = b.u();
      e ? W(a, b.J(t(a.Wb, a), [c, e], function (f) {
        f = f.user.linkWithCredential(d).then(function (g) {
          return Cm(a, b, {
            user: g.user,
            credential: d,
            operationType: g.operationType,
            additionalUserInfo: g.additionalUserInfo
          });
        });
        W(a, f);
        return f;
      }, function (f) {
        if (!f.name || "cancel" != f.name) switch (f.code) {
          case "auth/wrong-password":
            N(b.i(), !1);
            xk(b.C(), U(f));
            break;

          case "auth/too-many-requests":
            b.a(U(f));
            break;

          default:
            rg("signInWithEmailAndPassword: " + f.message, void 0), b.a(U(f));
        }
      })) : b.i().focus();
    }

    J.passwordLinking = function (a, b, c) {
      var d = Mh(T(a));
      Nh(T(a));
      var e = d && d.a;

      if (e) {
        var f = new Yl(c, function () {
          Pn(a, f, c, e);
        }, function () {
          f.o();
          L("passwordRecovery", a, b, c);
        }, I(S(a)), Mi(S(a)));
        f.render(b);
        Z(a, f);
      } else V(a, b);
    };

    function Qn(a, b, c, d, e, f) {
      P.call(this, hl, {
        email: c,
        Ta: !!b
      }, f, "passwordRecovery", {
        G: d,
        F: e
      });
      this.l = a;
      this.u = b;
    }

    m(Qn, P);

    Qn.prototype.v = function () {
      this.C();
      this.I(this.l, this.u);
      Ej(this.i()) || this.i().focus();
      dl(this, this.i(), this.l);
      P.prototype.v.call(this);
    };

    Qn.prototype.m = function () {
      this.u = this.l = null;
      P.prototype.m.call(this);
    };

    u(Qn.prototype, {
      i: $l,
      A: am,
      C: bm,
      N: cm,
      j: dm,
      U: Rl,
      R: Sl,
      I: Tl
    });

    function Rn(a, b) {
      var c = b.j();

      if (c) {
        var d = Q(b);
        W(a, b.J(t(X(a).sendPasswordResetEmail, X(a)), [c], function () {
          b.o();
          var e = new fm(c, function () {
            e.o();
            V(a, d);
          }, I(S(a)), Mi(S(a)));
          e.render(d);
          Z(a, e);
        }, function (e) {
          N(b.i(), !1);
          xk(b.A(), U(e));
        }));
      } else b.i().focus();
    }

    J.passwordRecovery = function (a, b, c, d, e) {
      var f = new Qn(function () {
        Rn(a, f);
      }, d ? void 0 : function () {
        f.o();
        V(a, b);
      }, c, I(S(a)), Mi(S(a)));
      f.render(b);
      Z(a, f);
      e && f.a(e);
    };

    J.passwordSignIn = function (a, b, c, d) {
      var e = new em(function () {
        Nm(a, e);
      }, function () {
        var f = e.N();
        e.o();
        L("passwordRecovery", a, b, f);
      }, c, I(S(a)), Mi(S(a)), d);
      e.render(b);
      Z(a, e);
    };

    function Sn() {
      return M(this, "firebaseui-id-name");
    }

    function Tn() {
      return M(this, "firebaseui-id-name-error");
    }

    function Un(a, b, c, d, e, f, g, h, l) {
      P.call(this, gl, {
        email: d,
        Sb: a,
        name: e,
        Ta: !!c,
        ia: !!h
      }, l, "passwordSignUp", {
        G: f,
        F: g
      });
      this.A = b;
      this.I = c;
      this.C = a;
    }

    m(Un, P);

    Un.prototype.v = function () {
      this.ea();
      this.C && this.Ia();
      this.ua();
      this.pa(this.A, this.I);
      this.C ? (cl(this, this.i(), this.u()), cl(this, this.u(), this.l())) : cl(this, this.i(), this.l());
      this.A && dl(this, this.l(), this.A);
      Ej(this.i()) ? this.C && !Ej(this.u()) ? this.u().focus() : this.l().focus() : this.i().focus();
      P.prototype.v.call(this);
    };

    Un.prototype.m = function () {
      this.I = this.A = null;
      P.prototype.m.call(this);
    };

    u(Un.prototype, {
      i: $l,
      U: am,
      ea: bm,
      jb: cm,
      j: dm,
      u: Sn,
      Ac: Tn,
      Ia: function () {
        var a = Sn.call(this),
            b = Tn.call(this);
        sk(this, a, function () {
          yk(b) && (N(a, !0), wk(b));
        });
      },
      N: function () {
        var a = Sn.call(this);
        var b = Tn.call(this);
        var c = Ej(a);
        c = !/^[\s\xa0]*$/.test(null == c ? "" : String(c));
        N(a, c);
        c ? (wk(b), b = !0) : (xk(b, C("Enter your account name").toString()), b = !1);
        return b ? Wa(Ej(a)) : null;
      },
      l: ln,
      ba: on,
      lb: mn,
      ua: pn,
      R: qn,
      Mb: Rl,
      Lb: Sl,
      pa: Tl
    });

    function Vn(a, b) {
      var c = Ni(S(a)),
          d = b.j(),
          e = null;
      c && (e = b.N());
      var f = b.R();

      if (d) {
        if (c) if (e) e = eb(e);else {
          b.u().focus();
          return;
        }

        if (f) {
          var g = firebase.auth.EmailAuthProvider.credential(d, f);
          W(a, b.J(t(a.Xb, a), [d, f], function (h) {
            var l = {
              user: h.user,
              credential: g,
              operationType: h.operationType,
              additionalUserInfo: h.additionalUserInfo
            };
            return c ? (h = h.user.updateProfile({
              displayName: e
            }).then(function () {
              return Cm(a, b, l);
            }), W(a, h), h) : Cm(a, b, l);
          }, function (h) {
            if (!h.name || "cancel" != h.name) {
              var l = U(h);

              switch (h.code) {
                case "auth/email-already-in-use":
                  return Wn(a, b, d, h);

                case "auth/too-many-requests":
                  l = C("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();

                case "auth/operation-not-allowed":
                case "auth/weak-password":
                  N(b.l(), !1);
                  xk(b.ba(), l);
                  break;

                default:
                  h = "setAccountInfo: " + eh(h), rg(h, void 0), b.a(l);
              }
            }
          }));
        } else b.l().focus();
      } else b.i().focus();
    }

    function Wn(a, b, c, d) {
      function e() {
        var g = U(d);
        N(b.i(), !1);
        xk(b.U(), g);
        b.i().focus();
      }

      var f = X(a).fetchSignInMethodsForEmail(c).then(function (g) {
        g.length ? e() : (g = Q(b), b.o(), L("passwordRecovery", a, g, c, !1, Md().toString()));
      }, function () {
        e();
      });
      W(a, f);
      return f;
    }

    J.passwordSignUp = function (a, b, c, d, e, f) {
      function g() {
        h.o();
        V(a, b);
      }

      var h = new Un(Ni(S(a)), function () {
        Vn(a, h);
      }, e ? void 0 : g, c, d, I(S(a)), Mi(S(a)), f);
      h.render(b);
      Z(a, h);
    };

    function Xn() {
      return M(this, "firebaseui-id-phone-confirmation-code");
    }

    function Yn() {
      return M(this, "firebaseui-id-phone-confirmation-code-error");
    }

    function Zn() {
      return M(this, "firebaseui-id-resend-countdown");
    }

    function $n(a, b, c, d, e, f, g, h, l) {
      P.call(this, Nl, {
        phoneNumber: e
      }, l, "phoneSignInFinish", {
        G: g,
        F: h
      });
      this.jb = f;
      this.i = new Qj(1E3);
      this.C = f;
      this.R = a;
      this.l = b;
      this.I = c;
      this.N = d;
    }

    m($n, P);

    $n.prototype.v = function () {
      var a = this;
      this.U(this.jb);
      me(this.i, "tick", this.A, !1, this);
      this.i.start();
      O(this, M(this, "firebaseui-id-change-phone-number-link"), function () {
        a.R();
      });
      O(this, this.Ba(), function () {
        a.N();
      });
      this.Ia(this.l);
      this.ea(this.l, this.I);
      this.u().focus();
      P.prototype.v.call(this);
    };

    $n.prototype.m = function () {
      this.N = this.I = this.l = this.R = null;
      Rj(this.i);
      ue(this.i, "tick", this.A);
      this.i = null;
      P.prototype.m.call(this);
    };

    $n.prototype.A = function () {
      --this.C;
      0 < this.C ? this.U(this.C) : (Rj(this.i), ue(this.i, "tick", this.A), this.ua(), this.lb());
    };

    u($n.prototype, {
      u: Xn,
      pa: Yn,
      Ia: function (a) {
        var b = Xn.call(this),
            c = Yn.call(this);
        sk(this, b, function () {
          yk(c) && (N(b, !0), wk(c));
        });
        a && tk(this, b, function () {
          a();
        });
      },
      ba: function () {
        var a = Wa(Ej(Xn.call(this)) || "");
        return /^\d{6}$/.test(a) ? a : null;
      },
      Eb: Zn,
      U: function (a) {
        bd(Zn.call(this), C("Resend code in " + ((9 < a ? "0:" : "0:0") + a)).toString());
      },
      ua: function () {
        wk(this.Eb());
      },
      Ba: function () {
        return M(this, "firebaseui-id-resend-link");
      },
      lb: function () {
        xk(this.Ba());
      },
      Mb: Rl,
      Lb: Sl,
      ea: Tl
    });

    function ao(a, b, c, d) {
      function e(g) {
        b.u().focus();
        N(b.u(), !1);
        xk(b.pa(), g);
      }

      var f = b.ba();
      f ? (b.Z("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon", C("Verifying...").toString()), W(a, b.J(t(d.confirm, d), [f], function (g) {
        b.h();
        b.Z("firebaseui-icon-done", C("Verified!").toString());
        var h = setTimeout(function () {
          b.h();
          b.o();
          var l = {
            user: bo(a).currentUser,
            credential: null,
            operationType: g.operationType,
            additionalUserInfo: g.additionalUserInfo
          };
          Cm(a, b, l, !0);
        }, 1E3);
        W(a, function () {
          b && b.h();
          clearTimeout(h);
        });
      }, function (g) {
        if (g.name && "cancel" == g.name) b.h();else {
          var h = U(g);

          switch (g.code) {
            case "auth/credential-already-in-use":
              b.h();
              break;

            case "auth/code-expired":
              g = Q(b);
              b.h();
              b.o();
              L("phoneSignInStart", a, g, c, h);
              break;

            case "auth/missing-verification-code":
            case "auth/invalid-verification-code":
              b.h();
              e(h);
              break;

            default:
              b.h(), b.a(h);
          }
        }
      }))) : e(C("Wrong code. Try again.").toString());
    }

    J.phoneSignInFinish = function (a, b, c, d, e, f) {
      var g = new $n(function () {
        g.o();
        L("phoneSignInStart", a, b, c);
      }, function () {
        ao(a, g, c, e);
      }, function () {
        g.o();
        V(a, b);
      }, function () {
        g.o();
        L("phoneSignInStart", a, b, c);
      }, ki(c), d, I(S(a)), Mi(S(a)));
      g.render(b);
      Z(a, g);
      f && g.a(f);
    };

    var co = !z && !(y("Safari") && !($b() || y("Coast") || y("Opera") || y("Edge") || y("Firefox") || y("FxiOS") || y("Silk") || y("Android")));

    function eo(a, b) {
      if (/-[a-z]/.test(b)) return null;

      if (co && a.dataset) {
        if (!(!y("Android") || $b() || y("Firefox") || y("FxiOS") || y("Opera") || y("Silk") || b in a.dataset)) return null;
        a = a.dataset[b];
        return void 0 === a ? null : a;
      }

      return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase());
    }

    function fo(a, b, c) {
      var d = this;
      a = jd(Nk, {
        items: a
      }, null, this.s);
      Uk.call(this, a, !0, !0);
      c && (c = go(a, c)) && (c.focus(), kk(c, a));
      O(this, a, function (e) {
        if (e = (e = cd(e.target, "firebaseui-id-list-box-dialog-button")) && eo(e, "listboxid")) Vk.call(d), b(e);
      });
    }

    function go(a, b) {
      a = (a || document).getElementsByTagName("BUTTON");

      for (var c = 0; c < a.length; c++) if (eo(a[c], "listboxid") === b) return a[c];

      return null;
    }

    function ho() {
      return M(this, "firebaseui-id-phone-number");
    }

    function io() {
      return M(this, "firebaseui-id-country-selector");
    }

    function jo() {
      return M(this, "firebaseui-id-phone-number-error");
    }

    function ko(a, b) {
      var c = a.a,
          d = lo("1-US-0", c),
          e = null;
      b && lo(b, c) ? e = b : d ? e = "1-US-0" : e = 0 < c.length ? c[0].c : null;
      if (!e) throw Error("No available default country");
      mo.call(this, e, a);
    }

    function lo(a, b) {
      a = ci(a);
      return !(!a || !Na(b, a));
    }

    function no(a) {
      return Ka(a, function (b) {
        return {
          id: b.c,
          La: "firebaseui-flag " + oo(b),
          label: b.name + " " + ("\u200e+" + b.b)
        };
      });
    }

    function oo(a) {
      return "firebaseui-flag-" + a.f;
    }

    function po(a) {
      var b = this;
      fo.call(this, no(a.a), function (c) {
        mo.call(b, c, a, !0);
        b.P().focus();
      }, this.Aa);
    }

    function mo(a, b, c) {
      var d = ci(a);
      d && (c && (c = Wa(Ej(ho.call(this)) || ""), b = bi(b, c), b.length && b[0].b != d.b && (c = "+" + d.b + c.substr(b[0].b.length + 1), Fj(ho.call(this), c))), b = ci(this.Aa), this.Aa = a, a = M(this, "firebaseui-id-country-selector-flag"), b && Dj(a, oo(b)), Cj(a, oo(d)), bd(M(this, "firebaseui-id-country-selector-code"), "\u200e+" + d.b));
    }

    function qo(a, b, c, d, e, f, g, h, l, p) {
      P.call(this, Ml, {
        Fb: b,
        za: l || null,
        Va: !!c,
        ia: !!f
      }, p, "phoneSignInStart", {
        G: d,
        F: e
      });
      this.I = h || null;
      this.N = b;
      this.l = a;
      this.A = c || null;
      this.pa = g || null;
    }

    m(qo, P);

    qo.prototype.v = function () {
      this.ea(this.pa, this.I);
      this.R(this.l, this.A || void 0);
      this.N || cl(this, this.P(), this.i());
      dl(this, this.i(), this.l);
      this.P().focus();
      xn(this.P(), (this.P().value || "").length);
      P.prototype.v.call(this);
    };

    qo.prototype.m = function () {
      this.A = this.l = null;
      P.prototype.m.call(this);
    };

    u(qo.prototype, {
      Cb: Wk,
      P: ho,
      C: jo,
      ea: function (a, b, c) {
        var d = this,
            e = ho.call(this),
            f = io.call(this),
            g = jo.call(this),
            h = a || hi,
            l = h.a;
        if (0 == l.length) throw Error("No available countries provided.");
        ko.call(d, h, b);
        O(this, f, function () {
          po.call(d, h);
        });
        sk(this, e, function () {
          yk(g) && (N(e, !0), wk(g));
          var p = Wa(Ej(e) || ""),
              r = ci(this.Aa),
              K = bi(h, p);
          p = lo("1-US-0", l);
          K.length && K[0].b != r.b && (r = K[0], mo.call(d, "1" == r.b && p ? "1-US-0" : r.c, h));
        });
        c && tk(this, e, function () {
          c();
        });
      },
      U: function (a) {
        var b = Wa(Ej(ho.call(this)) || "");
        a = a || hi;
        var c = a.a,
            d = bi(hi, b);
        if (d.length && !Na(c, d[0])) throw Fj(ho.call(this)), ho.call(this).focus(), xk(jo.call(this), C("The country code provided is not supported.").toString()), Error("The country code provided is not supported.");
        c = ci(this.Aa);
        d.length && d[0].b != c.b && mo.call(this, d[0].c, a);
        d.length && (b = b.substr(d[0].b.length + 1));
        return b ? new ii(this.Aa, b) : null;
      },
      Ia: io,
      ba: function () {
        return M(this, "firebaseui-recaptcha-container");
      },
      u: function () {
        return M(this, "firebaseui-id-recaptcha-error");
      },
      i: Rl,
      ua: Sl,
      R: Tl
    });

    function ro(a, b, c, d) {
      try {
        var e = b.U(dj);
      } catch (f) {
        return;
      }

      e ? bj ? (b.Z("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon", C("Verifying...").toString()), W(a, b.J(t(a.bc, a), [ki(e), c], function (f) {
        var g = Q(b);
        b.Z("firebaseui-icon-done", C("Code sent!").toString());
        var h = setTimeout(function () {
          b.h();
          b.o();
          L("phoneSignInFinish", a, g, e, 15, f);
        }, 1E3);
        W(a, function () {
          b && b.h();
          clearTimeout(h);
        });
      }, function (f) {
        b.h();

        if (!f.name || "cancel" != f.name) {
          grecaptcha.reset(ej);
          bj = null;
          var g = f && f.message || "";
          if (f.code) switch (f.code) {
            case "auth/too-many-requests":
              g = C("This phone number has been used too many times").toString();
              break;

            case "auth/invalid-phone-number":
            case "auth/missing-phone-number":
              b.P().focus();
              xk(b.C(), Jd().toString());
              return;

            default:
              g = U(f);
          }
          b.a(g);
        }
      }))) : cj ? xk(b.u(), C("Solve the reCAPTCHA").toString()) : !cj && d && b.i().click() : (b.P().focus(), xk(b.C(), Jd().toString()));
    }

    J.phoneSignInStart = function (a, b, c, d) {
      var e = Fi(S(a)) || {};
      bj = null;
      cj = !(e && "invisible" === e.size);
      var f = Om(a),
          g = Ki(S(a)),
          h = f ? Ji(S(a)) : null;
      g = c && c.a || g && g.c || null;
      c = c && c.za || h;
      (h = Li(S(a))) && gi(h);
      dj = h ? new ai(Li(S(a))) : hi;
      var l = new qo(function (r) {
        ro(a, l, p, !(!r || !r.keyCode));
      }, cj, f ? null : function () {
        p.clear();
        l.o();
        V(a, b);
      }, I(S(a)), Mi(S(a)), f, dj, g, c);
      l.render(b);
      Z(a, l);
      d && l.a(d);

      e.callback = function (r) {
        l.u() && wk(l.u());
        bj = r;
        cj || ro(a, l, p);
      };

      e["expired-callback"] = function () {
        bj = null;
      };

      var p = new firebase.auth.RecaptchaVerifier(cj ? l.ba() : l.i(), e, bo(a).app);
      W(a, l.J(t(p.render, p), [], function (r) {
        ej = r;
      }, function (r) {
        r.name && "cancel" == r.name || (r = U(r), l.o(), V(a, b, void 0, r));
      }));
    };

    J.prefilledEmailSignIn = function (a, b, c) {
      var d = new An();
      d.render(b);
      Z(a, d);
      W(a, d.J(t(X(a).fetchSignInMethodsForEmail, X(a)), [c], function (e) {
        d.o();
        var f = !(!ym(a) || !Ym(a));
        zm(a, b, e, c, void 0, void 0, f);
      }, function (e) {
        e = U(e);
        d.o();
        L("signIn", a, b, c, e);
      }));
    };

    function so(a, b, c, d, e) {
      P.call(this, Ll, {
        Rb: b
      }, e, "providerSignIn", {
        G: c,
        F: d
      });
      this.i = a;
    }

    m(so, P);

    so.prototype.v = function () {
      this.l(this.i);
      P.prototype.v.call(this);
    };

    so.prototype.m = function () {
      this.i = null;
      P.prototype.m.call(this);
    };

    u(so.prototype, {
      l: function (a) {
        function b(g) {
          a(g);
        }

        for (var c = this.g ? Vc("firebaseui-id-idp-button", this.g || this.s.a) : [], d = 0; d < c.length; d++) {
          var e = c[d],
              f = eo(e, "providerId");
          O(this, e, ya(b, f));
        }
      }
    });

    J.providerSignIn = function (a, b, c, d) {
      var e = new so(function (f) {
        f == firebase.auth.EmailAuthProvider.PROVIDER_ID ? (e.o(), Pm(a, b, d)) : f == firebase.auth.PhoneAuthProvider.PROVIDER_ID ? (e.o(), L("phoneSignInStart", a, b)) : "anonymous" == f ? Lm(a, e) : Im(a, e, f, d);
        Y(a);
        a.l.cancel();
      }, Ai(S(a)), I(S(a)), Mi(S(a)));
      e.render(b);
      Z(a, e);
      c && e.a(c);
      to(a);
    };

    J.sendEmailLinkForSignIn = function (a, b, c, d) {
      var e = new an();
      e.render(b);
      Z(a, e);
      Rm(a, e, c, d, function (f) {
        e.o();
        f = U(f);
        L("signIn", a, b, c, f);
      });
    };

    function uo(a, b, c, d, e, f, g) {
      P.call(this, el, {
        email: c,
        Va: !!b,
        ia: !!f
      }, g, "signIn", {
        G: d,
        F: e
      });
      this.i = a;
      this.u = b;
    }

    m(uo, P);

    uo.prototype.v = function () {
      this.A(this.i);
      this.C(this.i, this.u || void 0);
      this.l().focus();
      xn(this.l(), (this.l().value || "").length);
      P.prototype.v.call(this);
    };

    uo.prototype.m = function () {
      this.u = this.i = null;
      P.prototype.m.call(this);
    };

    u(uo.prototype, {
      l: $l,
      N: am,
      A: bm,
      I: cm,
      j: dm,
      U: Rl,
      R: Sl,
      C: Tl
    });

    J.signIn = function (a, b, c, d) {
      var e = ym(a),
          f = e && Di(S(a)) != pi,
          g = new uo(function () {
        var h = g,
            l = h.j() || "";
        l && Qm(a, h, l);
      }, f ? null : function () {
        g.o();
        V(a, b, c);
      }, c, I(S(a)), Mi(S(a)), e);
      g.render(b);
      Z(a, g);
      d && g.a(d);
    };

    function vo(a, b, c, d, e, f) {
      P.call(this, vl, {
        email: a
      }, f, "unsupportedProvider", {
        G: d,
        F: e
      });
      this.l = b;
      this.i = c;
    }

    m(vo, P);

    vo.prototype.v = function () {
      this.A(this.l, this.i);
      this.u().focus();
      P.prototype.v.call(this);
    };

    vo.prototype.m = function () {
      this.i = this.l = null;
      P.prototype.m.call(this);
    };

    u(vo.prototype, {
      u: Rl,
      C: Sl,
      A: Tl
    });

    J.unsupportedProvider = function (a, b, c) {
      var d = new vo(c, function () {
        d.o();
        L("passwordRecovery", a, b, c);
      }, function () {
        d.o();
        V(a, b, c);
      }, I(S(a)), Mi(S(a)));
      d.render(b);
      Z(a, d);
    };

    function wo(a, b) {
      this.Z = !1;
      var c = xo(b);
      if (yo[c]) throw Error('An AuthUI instance already exists for the key "' + c + '"');
      yo[c] = this;
      this.g = a;
      this.u = null;
      this.X = !1;
      zo(this.g);
      this.a = firebase.initializeApp({
        apiKey: a.app.options.apiKey,
        authDomain: a.app.options.authDomain
      }, a.app.name + "-firebaseui-temp").auth();
      zo(this.a);
      this.a.setPersistence && this.a.setPersistence(firebase.auth.Auth.Persistence.SESSION);
      this.oa = b;
      this.ca = new oi();
      this.h = this.T = this.i = this.K = this.P = null;
      this.s = [];
      this.Y = !1;
      this.l = Rf.Xa();
      this.j = this.D = null;
      this.da = this.B = !1;
    }

    function zo(a) {
      a && a.INTERNAL && a.INTERNAL.logFramework && a.INTERNAL.logFramework("FirebaseUI-web");
    }

    var yo = {};

    function xo(a) {
      return a || "[DEFAULT]";
    }

    function Jm(a) {
      Y(a);
      a.i || (a.i = Ao(a, function (b) {
        return b && !Mh(T(a)) ? G(bo(a).getRedirectResult().then(function (c) {
          return c;
        }, function (c) {
          if (c && "auth/email-already-in-use" == c.code && c.email && c.credential) throw c;
          return Bo(a, c);
        })) : G(X(a).getRedirectResult().then(function (c) {
          return ui(S(a)) && !c.user && a.j && !a.j.isAnonymous ? bo(a).getRedirectResult() : c;
        }));
      }));
      return a.i;
    }

    function Z(a, b) {
      Y(a);
      a.h = b;
    }

    var Co = null;

    function Sm() {
      return Co;
    }

    function X(a) {
      Y(a);
      return a.a;
    }

    function bo(a) {
      Y(a);
      return a.g;
    }

    function T(a) {
      Y(a);
      return a.oa;
    }

    function Ym(a) {
      Y(a);
      return a.P ? a.P.emailHint : void 0;
    }

    k = wo.prototype;

    k.nb = function () {
      Y(this);
      return !!Ph(T(this)) || Do(vf());
    };

    function Do(a) {
      a = new Sb(a);
      return "signIn" === (a.a.a.get(x.vb) || null) && !!a.a.a.get(x.$a);
    }

    k.start = function (a, b) {
      Eo(this, a, b);
    };

    function Eo(a, b, c, d) {
      Y(a);
      "undefined" !== typeof a.g.languageCode && (a.u = a.g.languageCode);
      var e = "en".replace(/_/g, "-");
      a.g.languageCode = e;
      a.a.languageCode = e;
      a.X = !0;
      "undefined" !== typeof a.g.tenantId && (a.a.tenantId = a.g.tenantId);
      a.ib(c);
      a.P = d || null;
      var f = n.document;
      a.D ? a.D.then(function () {
        "complete" == f.readyState ? Fo(a, b) : ne(window, "load", function () {
          Fo(a, b);
        });
      }) : "complete" == f.readyState ? Fo(a, b) : ne(window, "load", function () {
        Fo(a, b);
      });
    }

    function Fo(a, b) {
      var c = uf(b, "Could not find the FirebaseUI widget element on the page.");
      c.setAttribute("lang", "en".replace(/_/g, "-"));

      if (Co) {
        var d = Co;
        Y(d);
        Mh(T(d)) && wg("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset.");
        Co.reset();
      }

      Co = a;
      a.T = c;
      Go(a, c);
      nh(new oh()) && nh(new ph()) ? Xm(a, b) : (b = uf(b, "Could not find the FirebaseUI widget element on the page."), c = new qm(C("The browser you are using does not support Web Storage. Please try again in a different browser.").toString()), c.render(b), Z(a, c));
      b = a.h && "blank" == a.h.Ea && Ri(S(a));
      Ph(T(a)) && !b && (b = Ph(T(a)), Cn(a, b.a), Fh(yh, T(a)));
    }

    function Ao(a, b) {
      if (a.B) return b(Ho(a));
      W(a, function () {
        a.B = !1;
      });

      if (ui(S(a))) {
        var c = new F(function (d) {
          W(a, a.g.onAuthStateChanged(function (e) {
            a.j = e;
            a.B || (a.B = !0, d(b(Ho(a))));
          }));
        });
        W(a, c);
        return c;
      }

      a.B = !0;
      return b(null);
    }

    function Ho(a) {
      Y(a);
      return ui(S(a)) && a.j && a.j.isAnonymous ? a.j : null;
    }

    function W(a, b) {
      Y(a);

      if (b) {
        a.s.push(b);

        var c = function () {
          Ra(a.s, function (d) {
            return d == b;
          });
        };

        "function" != typeof b && b.then(c, c);
      }
    }

    k.Db = function () {
      Y(this);
      this.Y = !0;
    };

    function Io(a) {
      Y(a);
      var b;
      (b = a.Y) || (a = S(a), a = Ii(a, firebase.auth.GoogleAuthProvider.PROVIDER_ID), b = !(!a || "select_account" !== a.prompt));
      return b;
    }

    function Dm(a) {
      "undefined" !== typeof a.g.languageCode && a.X && (a.X = !1, a.g.languageCode = a.u);
    }

    function Cn(a, b) {
      a.g.tenantId = b;
      a.a.tenantId = b;
    }

    k.reset = function () {
      Y(this);
      var a = this;
      this.T && this.T.removeAttribute("lang");
      this.K && Fe(this.K);
      Dm(this);
      this.P = null;
      Zm();
      Fh(yh, T(this));
      Y(this);
      this.l.cancel();
      this.i = G({
        user: null,
        credential: null
      });
      Co == this && (Co = null);
      this.T = null;

      for (var b = 0; b < this.s.length; b++) if ("function" == typeof this.s[b]) this.s[b]();else this.s[b].cancel && this.s[b].cancel();

      this.s = [];
      Nh(T(this));
      this.h && (this.h.o(), this.h = null);
      this.M = null;
      this.a && (this.D = hn(this).then(function () {
        a.D = null;
      }, function () {
        a.D = null;
      }));
    };

    function Go(a, b) {
      a.M = null;
      a.K = new Ge(b);
      a.K.register();
      me(a.K, "pageEnter", function (c) {
        c = c && c.pageId;

        if (a.M != c) {
          var d = S(a);
          (d = Wi(d).uiChanged || null) && d(a.M, c);
          a.M = c;
        }
      });
    }

    k.ib = function (a) {
      Y(this);
      var b = this.ca,
          c;

      for (c in a) try {
        Vh(b.a, c, a[c]);
      } catch (d) {
        rg('Invalid config: "' + c + '"', void 0);
      }

      ic && Vh(b.a, "popupMode", !1);
      Li(b);
      !this.da && Xi(S(this)) && (wg("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."), this.da = !0);
    };

    function S(a) {
      Y(a);
      return a.ca;
    }

    k.Vb = function () {
      Y(this);
      var a = S(this),
          b = Wh(a.a, "widgetUrl");
      var c = si(a, b);
      S(this).a.get("popupMode") ? (a = (window.screen.availHeight - 600) / 2, b = (window.screen.availWidth - 500) / 2, c = c || "about:blank", a = {
        width: 500,
        height: 600,
        top: 0 < a ? a : 0,
        left: 0 < b ? b : 0,
        location: !0,
        resizable: !0,
        statusbar: !0,
        toolbar: !1
      }, a.target = a.target || c.target || "google_popup", a.width = a.width || 690, a.height = a.height || 500, (a = qf(c, a)) && a.focus()) : rf(c);
    };

    function Y(a) {
      if (a.Z) throw Error("AuthUI instance is deleted!");
    }

    k.Wa = function () {
      var a = this;
      Y(this);
      return this.a.app.delete().then(function () {
        var b = xo(T(a));
        delete yo[b];
        a.reset();
        a.Z = !0;
      });
    };

    function to(a) {
      Y(a);

      try {
        Sf(a.l, Ci(S(a)), Io(a)).then(function (b) {
          return a.h ? Mm(a, a.h, b) : !1;
        });
      } catch (b) {}
    }

    k.Hb = function (a, b) {
      Y(this);
      var c = this,
          d = xf();
      if (!Oi(S(this))) return ef(Error("Email link sign-in should be enabled to trigger email sending."));
      var e = Qi(S(this)),
          f = new Sb(e.url);
      Tb(f, d);
      b && b.a && (Th(d, b, T(this)), Wb(f, b.a.providerId));
      Ub(f, Pi(S(this)));
      return Ao(this, function (g) {
        g && ((g = g.uid) ? f.a.a.set(x.Pa, g) : Qb(f.a.a, x.Pa));
        e.url = f.toString();
        return X(c).sendSignInLinkToEmail(a, e);
      }).then(function () {
        var g = T(c),
            h = {};
        h.email = a;
        Gh(Ch, bh(d, JSON.stringify(h)), g);
      }, function (g) {
        Fh(Dh, T(c));
        Fh(Ch, T(c));
        throw g;
      });
    };

    function Dn(a, b) {
      var c = Vb(new Sb(b));
      if (!c) return G(null);
      b = new F(function (d, e) {
        var f = bo(a).onAuthStateChanged(function (g) {
          f();
          g && g.isAnonymous && g.uid === c ? d(g) : g && g.isAnonymous && g.uid !== c ? e(Error("anonymous-user-mismatch")) : e(Error("anonymous-user-not-found"));
        });
        W(a, f);
      });
      W(a, b);
      return b;
    }

    function Hn(a, b, c, d, e) {
      Y(a);
      var f = e || null,
          g = firebase.auth.EmailAuthProvider.credentialWithLink(c, d);
      c = f ? X(a).signInWithEmailLink(c, d).then(function (h) {
        return h.user.linkWithCredential(f);
      }).then(function () {
        return hn(a);
      }).then(function () {
        return Bo(a, {
          code: "auth/email-already-in-use"
        }, f);
      }) : X(a).fetchSignInMethodsForEmail(c).then(function (h) {
        return h.length ? Bo(a, {
          code: "auth/email-already-in-use"
        }, g) : b.linkWithCredential(g);
      });
      W(a, c);
      return c;
    }

    function In(a, b, c, d) {
      Y(a);
      var e = d || null,
          f;
      b = X(a).signInWithEmailLink(b, c).then(function (g) {
        f = {
          user: g.user,
          credential: null,
          operationType: g.operationType,
          additionalUserInfo: g.additionalUserInfo
        };
        if (e) return g.user.linkWithCredential(e).then(function (h) {
          f = {
            user: h.user,
            credential: e,
            operationType: f.operationType,
            additionalUserInfo: h.additionalUserInfo
          };
        });
      }).then(function () {
        hn(a);
      }).then(function () {
        return bo(a).updateCurrentUser(f.user);
      }).then(function () {
        f.user = bo(a).currentUser;
        return f;
      });
      W(a, b);
      return b;
    }

    function Zm() {
      var a = vf();

      if (Do(a)) {
        a = new Sb(a);

        for (var b in x) x.hasOwnProperty(b) && Qb(a.a.a, x[b]);

        b = {
          state: "signIn",
          mode: "emailLink",
          operation: "clear"
        };
        var c = n.document.title;
        n.history && n.history.replaceState && n.history.replaceState(b, c, a.toString());
      }
    }

    k.ac = function (a, b) {
      Y(this);
      var c = this;
      return X(this).signInWithEmailAndPassword(a, b).then(function (d) {
        return Ao(c, function (e) {
          return e ? hn(c).then(function () {
            return Bo(c, {
              code: "auth/email-already-in-use"
            }, firebase.auth.EmailAuthProvider.credential(a, b));
          }) : d;
        });
      });
    };

    k.Xb = function (a, b) {
      Y(this);
      var c = this;
      return Ao(this, function (d) {
        if (d) {
          var e = firebase.auth.EmailAuthProvider.credential(a, b);
          return d.linkWithCredential(e);
        }

        return X(c).createUserWithEmailAndPassword(a, b);
      });
    };

    k.$b = function (a) {
      Y(this);
      var b = this;
      return Ao(this, function (c) {
        return c ? c.linkWithCredential(a).then(function (d) {
          return d;
        }, function (d) {
          if (d && "auth/email-already-in-use" == d.code && d.email && d.credential) throw d;
          return Bo(b, d, a);
        }) : X(b).signInWithCredential(a);
      });
    };

    function Km(a, b) {
      Y(a);
      return Ao(a, function (c) {
        return c && !Mh(T(a)) ? c.linkWithPopup(b).then(function (d) {
          return d;
        }, function (d) {
          if (d && "auth/email-already-in-use" == d.code && d.email && d.credential) throw d;
          return Bo(a, d);
        }) : X(a).signInWithPopup(b);
      });
    }

    k.cc = function (a) {
      Y(this);
      var b = this,
          c = this.i;
      this.i = null;
      return Ao(this, function (d) {
        return d && !Mh(T(b)) ? d.linkWithRedirect(a) : X(b).signInWithRedirect(a);
      }).then(function () {}, function (d) {
        b.i = c;
        throw d;
      });
    };

    k.bc = function (a, b) {
      Y(this);
      var c = this;
      return Ao(this, function (d) {
        return d ? d.linkWithPhoneNumber(a, b).then(function (e) {
          return new Vf(e, function (f) {
            if ("auth/credential-already-in-use" == f.code) return Bo(c, f);
            throw f;
          });
        }) : bo(c).signInWithPhoneNumber(a, b).then(function (e) {
          return new Vf(e);
        });
      });
    };

    k.Zb = function () {
      Y(this);
      return bo(this).signInAnonymously();
    };

    function Fm(a, b) {
      Y(a);
      return Ao(a, function (c) {
        if (a.j && !a.j.isAnonymous && ui(S(a)) && !X(a).currentUser) return hn(a).then(function () {
          "password" == b.credential.providerId && (b.credential = null);
          return b;
        });
        if (c) return hn(a).then(function () {
          return c.linkWithCredential(b.credential);
        }).then(function (d) {
          b.user = d.user;
          b.credential = d.credential;
          b.operationType = d.operationType;
          b.additionalUserInfo = d.additionalUserInfo;
          return b;
        }, function (d) {
          if (d && "auth/email-already-in-use" == d.code && d.email && d.credential) throw d;
          return Bo(a, d, b.credential);
        });
        if (!b.user) throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');
        return hn(a).then(function () {
          return bo(a).updateCurrentUser(b.user);
        }).then(function () {
          b.user = bo(a).currentUser;
          b.operationType = "signIn";
          b.credential && b.credential.providerId && "password" == b.credential.providerId && (b.credential = null);
          return b;
        });
      });
    }

    k.Wb = function (a, b) {
      Y(this);
      return X(this).signInWithEmailAndPassword(a, b);
    };

    function hn(a) {
      Y(a);
      return X(a).signOut();
    }

    function Bo(a, b, c) {
      Y(a);

      if (b && b.code && ("auth/email-already-in-use" == b.code || "auth/credential-already-in-use" == b.code)) {
        var d = vi(S(a));
        return G().then(function () {
          return d(new Pd("anonymous-upgrade-merge-conflict", null, c || b.credential));
        }).then(function () {
          a.h && (a.h.o(), a.h = null);
          throw b;
        });
      }

      return ef(b);
    }

    function Jo(a, b, c, d) {
      P.call(this, Ql, void 0, d, "providerMatchByEmail", {
        G: b,
        F: c
      });
      this.i = a;
    }

    m(Jo, P);

    Jo.prototype.v = function () {
      this.u(this.i);
      this.A(this.i);
      this.l().focus();
      xn(this.l(), (this.l().value || "").length);
      P.prototype.v.call(this);
    };

    Jo.prototype.m = function () {
      this.i = null;
      P.prototype.m.call(this);
    };

    u(Jo.prototype, {
      l: $l,
      I: am,
      u: bm,
      C: cm,
      j: dm,
      N: Rl,
      A: Tl
    });

    function Ko(a, b, c, d, e) {
      P.call(this, Pl, {
        dc: b
      }, e, "selectTenant", {
        G: c,
        F: d
      });
      this.i = a;
    }

    m(Ko, P);

    Ko.prototype.v = function () {
      Lo(this, this.i);
      P.prototype.v.call(this);
    };

    Ko.prototype.m = function () {
      this.i = null;
      P.prototype.m.call(this);
    };

    function Lo(a, b) {
      function c(h) {
        b(h);
      }

      for (var d = a.g ? Vc("firebaseui-id-tenant-selection-button", a.g || a.s.a) : [], e = 0; e < d.length; e++) {
        var f = d[e],
            g = eo(f, "tenantId");
        O(a, f, ya(c, g));
      }
    }

    function Mo(a) {
      P.call(this, kl, void 0, a, "spinner");
    }

    m(Mo, P);

    function No(a) {
      this.a = new Uh();
      H(this.a, "authDomain");
      H(this.a, "displayMode", Oo);
      H(this.a, "tenants");
      H(this.a, "callbacks");
      H(this.a, "tosUrl");
      H(this.a, "privacyPolicyUrl");

      for (var b in a) if (a.hasOwnProperty(b)) try {
        Vh(this.a, b, a[b]);
      } catch (c) {
        rg('Invalid config: "' + b + '"', void 0);
      }
    }

    function Po(a) {
      a = a.a.get("displayMode");

      for (var b in Qo) if (Qo[b] === a) return Qo[b];

      return Oo;
    }

    function Ro(a) {
      return a.a.get("callbacks") || {};
    }

    function So(a) {
      var b = a.a.get("tosUrl") || null;
      a = a.a.get("privacyPolicyUrl") || null;
      b && !a && wg("Privacy Policy URL is missing, the link will not be displayed.");

      if (b && a) {
        if ("function" === typeof b) return b;
        if ("string" === typeof b) return function () {
          tf(b);
        };
      }

      return null;
    }

    function To(a) {
      var b = a.a.get("tosUrl") || null,
          c = a.a.get("privacyPolicyUrl") || null;
      c && !b && wg("Terms of Service URL is missing, the link will not be displayed.");

      if (b && c) {
        if ("function" === typeof c) return c;
        if ("string" === typeof c) return function () {
          tf(c);
        };
      }

      return null;
    }

    function Uo(a, b) {
      a = a.a.get("tenants");
      if (!a || !a.hasOwnProperty(b) && !a.hasOwnProperty(Vo)) throw Error("Invalid tenant configuration!");
    }

    function Wo(a, b, c) {
      a = a.a.get("tenants");
      if (!a) throw Error("Invalid tenant configuration!");
      var d = [];
      a = a[b] || a[Vo];
      if (!a) return rg("Invalid tenant configuration: " + (b + " is not configured!"), void 0), d;
      b = a.signInOptions;
      if (!b) throw Error("Invalid tenant configuration: signInOptions are invalid!");
      b.forEach(function (e) {
        if ("string" === typeof e) d.push(e);else if ("string" === typeof e.provider) {
          var f = e.hd;
          f && c ? (f instanceof RegExp ? f : new RegExp("@" + f.replace(".", "\\.") + "$")).test(c) && d.push(e.provider) : d.push(e.provider);
        } else e = "Invalid tenant configuration: signInOption " + (JSON.stringify(e) + " is invalid!"), rg(e, void 0);
      });
      return d;
    }

    function Xo(a, b, c) {
      a = Yo(a, b);
      (b = a.signInOptions) && c && (b = b.filter(function (d) {
        return "string" === typeof d ? c.includes(d) : c.includes(d.provider);
      }), a.signInOptions = b);
      return a;
    }

    function Yo(a, b) {
      var c = Zo;
      var d = void 0 === d ? {} : d;
      Uo(a, b);
      a = a.a.get("tenants");
      return yf(a[b] || a[Vo], c, d);
    }

    var Zo = ["immediateFederatedRedirect", "privacyPolicyUrl", "signInFlow", "signInOptions", "tosUrl"],
        Oo = "optionFirst",
        Qo = {
      oc: Oo,
      nc: "identifierFirst"
    },
        Vo = "*";

    function $o(a, b) {
      var c = this;
      this.s = uf(a);
      this.a = {};
      Object.keys(b).forEach(function (d) {
        c.a[d] = new No(b[d]);
      });
      this.ob = this.g = this.B = this.h = this.i = this.j = null;
      Object.defineProperty(this, "languageCode", {
        get: function () {
          return this.ob;
        },
        set: function (d) {
          this.ob = d || null;
        },
        enumerable: !1
      });
    }

    k = $o.prototype;

    k.Tb = function (a, b) {
      var c = this;
      ap(this);
      var d = a.apiKey;
      return new F(function (e, f) {
        if (c.a.hasOwnProperty(d)) {
          var g = Ro(c.a[d]).selectTenantUiHidden || null;

          if (Po(c.a[d]) === Oo) {
            var h = [];
            b.forEach(function (r) {
              r = r || "_";
              var K = c.a[d].a.get("tenants");
              if (!K) throw Error("Invalid tenant configuration!");
              (K = K[r] || K[Vo]) ? r = {
                tenantId: "_" !== r ? r : null,
                displayName: K.displayName,
                Ma: K.iconUrl,
                Ga: K.buttonColor
              } : (rg("Invalid tenant configuration: " + (r + " is not configured!"), void 0), r = null);
              r && h.push(r);
            });

            var l = function (r) {
              r = {
                tenantId: r,
                providerIds: Wo(c.a[d], r || "_")
              };
              e(r);
            };

            if (1 === h.length) {
              l(h[0].tenantId);
              return;
            }

            c.g = new Ko(function (r) {
              ap(c);
              g && g();
              l(r);
            }, h, So(c.a[d]), To(c.a[d]));
          } else c.g = new Jo(function () {
            var r = c.g.j();

            if (r) {
              for (var K = 0; K < b.length; K++) {
                var Ea = Wo(c.a[d], b[K] || "_", r);

                if (0 !== Ea.length) {
                  r = {
                    tenantId: b[K],
                    providerIds: Ea,
                    email: r
                  };
                  ap(c);
                  g && g();
                  e(r);
                  return;
                }
              }

              c.g.a(Nd({
                code: "no-matching-tenant-for-email"
              }).toString());
            }
          }, So(c.a[d]), To(c.a[d]));

          c.g.render(c.s);
          (f = Ro(c.a[d]).selectTenantUiShown || null) && f();
        } else {
          var p = Error("Invalid project configuration: API key is invalid!");
          p.code = "invalid-configuration";
          c.pb(p);
          f(p);
        }
      });
    };

    k.Ob = function (a, b) {
      if (!this.a.hasOwnProperty(a)) throw Error("Invalid project configuration: API key is invalid!");
      var c = b || void 0;
      Uo(this.a[a], b || "_");

      try {
        this.i = firebase.app(c).auth();
      } catch (e) {
        var d = this.a[a].a.get("authDomain");
        if (!d) throw Error("Invalid project configuration: authDomain is required!");
        a = firebase.initializeApp({
          apiKey: a,
          authDomain: d
        }, c);
        a.auth().tenantId = b;
        this.i = a.auth();
      }

      return this.i;
    };

    k.Yb = function (a, b) {
      var c = this;
      return new F(function (d, e) {
        function f(K, Ea) {
          c.j = new wo(a);
          Eo(c.j, c.s, K, Ea);
        }

        var g = a.app.options.apiKey;
        c.a.hasOwnProperty(g) || e(Error("Invalid project configuration: API key is invalid!"));
        var h = Xo(c.a[g], a.tenantId || "_", b && b.providerIds);
        ap(c);
        e = {
          signInSuccessWithAuthResult: function (K) {
            d(K);
            return !1;
          }
        };
        var l = Ro(c.a[g]).signInUiShown || null,
            p = !1;

        e.uiChanged = function (K, Ea) {
          null === K && "callback" === Ea ? ((K = Xc("firebaseui-id-page-callback", c.s)) && wk(K), c.h = new Mo(), c.h.render(c.s)) : p || null === K && "spinner" === Ea || "blank" === Ea || (c.h && (c.h.o(), c.h = null), p = !0, l && l(a.tenantId));
        };

        h.callbacks = e;
        h.credentialHelper = "none";
        var r;
        b && b.email && (r = {
          emailHint: b.email
        });
        c.j ? c.j.Wa().then(function () {
          f(h, r);
        }) : f(h, r);
      });
    };

    k.reset = function () {
      var a = this;
      return G().then(function () {
        a.j && a.j.Wa();
      }).then(function () {
        a.j = null;
        ap(a);
      });
    };

    k.Ub = function () {
      var a = this;
      this.h || this.B || (this.B = window.setTimeout(function () {
        ap(a);
        a.h = new Mo();
        a.g = a.h;
        a.h.render(a.s);
        a.B = null;
      }, 500));
    };

    k.mb = function () {
      window.clearTimeout(this.B);
      this.B = null;
      this.h && (this.h.o(), this.h = null);
    };

    k.Bb = function () {
      ap(this);
      this.g = new lm();
      this.g.render(this.s);
      return G();
    };

    function ap(a) {
      a.j && a.j.reset();
      a.mb();
      a.g && a.g.o();
    }

    k.pb = function (a) {
      var b = this,
          c = Nd({
        code: a.code
      }).toString() || a.message;
      ap(this);
      var d;
      a.retry && sa(a.retry) && (d = function () {
        b.reset();
        a.retry();
      });
      this.g = new pm(c, d);
      this.g.render(this.s);
    };

    k.Qb = function (a) {
      var b = this;
      return G().then(function () {
        var c = b.i && b.i.app.options.apiKey;
        if (!b.a.hasOwnProperty(c)) throw Error("Invalid project configuration: API key is invalid!");
        Uo(b.a[c], a.tenantId || "_");
        if (!b.i.currentUser || b.i.currentUser.uid !== a.uid) throw Error("The user being processed does not match the signed in user!");
        return (c = Ro(b.a[c]).beforeSignInSuccess || null) ? c(a) : a;
      }).then(function (c) {
        if (c.uid !== a.uid) throw Error("User with mismatching UID returned.");
        return c;
      });
    };

    v("firebaseui.auth.FirebaseUiHandler", $o);
    v("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant", $o.prototype.Tb);
    v("firebaseui.auth.FirebaseUiHandler.prototype.getAuth", $o.prototype.Ob);
    v("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn", $o.prototype.Yb);
    v("firebaseui.auth.FirebaseUiHandler.prototype.reset", $o.prototype.reset);
    v("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar", $o.prototype.Ub);
    v("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar", $o.prototype.mb);
    v("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut", $o.prototype.Bb);
    v("firebaseui.auth.FirebaseUiHandler.prototype.handleError", $o.prototype.pb);
    v("firebaseui.auth.FirebaseUiHandler.prototype.processUser", $o.prototype.Qb);
    v("firebaseui.auth.AuthUI", wo);
    v("firebaseui.auth.AuthUI.getInstance", function (a) {
      a = xo(a);
      return yo[a] ? yo[a] : null;
    });
    v("firebaseui.auth.AuthUI.prototype.disableAutoSignIn", wo.prototype.Db);
    v("firebaseui.auth.AuthUI.prototype.start", wo.prototype.start);
    v("firebaseui.auth.AuthUI.prototype.setConfig", wo.prototype.ib);
    v("firebaseui.auth.AuthUI.prototype.signIn", wo.prototype.Vb);
    v("firebaseui.auth.AuthUI.prototype.reset", wo.prototype.reset);
    v("firebaseui.auth.AuthUI.prototype.delete", wo.prototype.Wa);
    v("firebaseui.auth.AuthUI.prototype.isPendingRedirect", wo.prototype.nb);
    v("firebaseui.auth.AuthUIError", Pd);
    v("firebaseui.auth.AuthUIError.prototype.toJSON", Pd.prototype.toJSON);
    v("firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM", pi);
    v("firebaseui.auth.CredentialHelper.GOOGLE_YOLO", Ei);
    v("firebaseui.auth.CredentialHelper.NONE", Zi);
    v("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID", "anonymous");
    F.prototype["catch"] = F.prototype.ta;
    F.prototype["finally"] = F.prototype.ec;
  }).apply(typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : window);

  if (typeof window !== 'undefined') {
    window.dialogPolyfill = require('dialog-polyfill');
  }
})();

module.exports = firebaseui;
},{"firebase/app":"KioNl","firebase/auth":"7dlv5","dialog-polyfill":"5Lkz6"}],"5Lkz6":[function(require,module,exports) {
var define;

(function () {
  // nb. This is for IE10 and lower _only_.
  var supportCustomEvent = window.CustomEvent;

  if (!supportCustomEvent || typeof supportCustomEvent === 'object') {
    supportCustomEvent = function CustomEvent(event, x) {
      x = x || {};
      var ev = document.createEvent('CustomEvent');
      ev.initCustomEvent(event, !!x.bubbles, !!x.cancelable, x.detail || null);
      return ev;
    };

    supportCustomEvent.prototype = window.Event.prototype;
  }
  /**
   * @param {Element} el to check for stacking context
   * @return {boolean} whether this el or its parents creates a stacking context
   */


  function createsStackingContext(el) {
    while (el && el !== document.body) {
      var s = window.getComputedStyle(el);

      var invalid = function (k, ok) {
        return !(s[k] === undefined || s[k] === ok);
      };

      if (s.opacity < 1 || invalid('zIndex', 'auto') || invalid('transform', 'none') || invalid('mixBlendMode', 'normal') || invalid('filter', 'none') || invalid('perspective', 'none') || s['isolation'] === 'isolate' || s.position === 'fixed' || s.webkitOverflowScrolling === 'touch') {
        return true;
      }

      el = el.parentElement;
    }

    return false;
  }
  /**
   * Finds the nearest <dialog> from the passed element.
   *
   * @param {Element} el to search from
   * @return {HTMLDialogElement} dialog found
   */


  function findNearestDialog(el) {
    while (el) {
      if (el.localName === 'dialog') {
        return (
          /** @type {HTMLDialogElement} */
          el
        );
      }

      el = el.parentElement;
    }

    return null;
  }
  /**
   * Blur the specified element, as long as it's not the HTML body element.
   * This works around an IE9/10 bug - blurring the body causes Windows to
   * blur the whole application.
   *
   * @param {Element} el to blur
   */


  function safeBlur(el) {
    if (el && el.blur && el !== document.body) {
      el.blur();
    }
  }
  /**
   * @param {!NodeList} nodeList to search
   * @param {Node} node to find
   * @return {boolean} whether node is inside nodeList
   */


  function inNodeList(nodeList, node) {
    for (var i = 0; i < nodeList.length; ++i) {
      if (nodeList[i] === node) {
        return true;
      }
    }

    return false;
  }
  /**
   * @param {HTMLFormElement} el to check
   * @return {boolean} whether this form has method="dialog"
   */


  function isFormMethodDialog(el) {
    if (!el || !el.hasAttribute('method')) {
      return false;
    }

    return el.getAttribute('method').toLowerCase() === 'dialog';
  }
  /**
   * @param {!HTMLDialogElement} dialog to upgrade
   * @constructor
   */


  function dialogPolyfillInfo(dialog) {
    this.dialog_ = dialog;
    this.replacedStyleTop_ = false;
    this.openAsModal_ = false; // Set a11y role. Browsers that support dialog implicitly know this already.

    if (!dialog.hasAttribute('role')) {
      dialog.setAttribute('role', 'dialog');
    }

    dialog.show = this.show.bind(this);
    dialog.showModal = this.showModal.bind(this);
    dialog.close = this.close.bind(this);

    if (!('returnValue' in dialog)) {
      dialog.returnValue = '';
    }

    if ('MutationObserver' in window) {
      var mo = new MutationObserver(this.maybeHideModal.bind(this));
      mo.observe(dialog, {
        attributes: true,
        attributeFilter: ['open']
      });
    } else {
      // IE10 and below support. Note that DOMNodeRemoved etc fire _before_ removal. They also
      // seem to fire even if the element was removed as part of a parent removal. Use the removed
      // events to force downgrade (useful if removed/immediately added).
      var removed = false;

      var cb = function () {
        removed ? this.downgradeModal() : this.maybeHideModal();
        removed = false;
      }.bind(this);

      var timeout;

      var delayModel = function (ev) {
        if (ev.target !== dialog) {
          return;
        } // not for a child element


        var cand = 'DOMNodeRemoved';
        removed |= ev.type.substr(0, cand.length) === cand;
        window.clearTimeout(timeout);
        timeout = window.setTimeout(cb, 0);
      };

      ['DOMAttrModified', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument'].forEach(function (name) {
        dialog.addEventListener(name, delayModel);
      });
    } // Note that the DOM is observed inside DialogManager while any dialog
    // is being displayed as a modal, to catch modal removal from the DOM.


    Object.defineProperty(dialog, 'open', {
      set: this.setOpen.bind(this),
      get: dialog.hasAttribute.bind(dialog, 'open')
    });
    this.backdrop_ = document.createElement('div');
    this.backdrop_.className = 'backdrop';
    this.backdrop_.addEventListener('click', this.backdropClick_.bind(this));
  }

  dialogPolyfillInfo.prototype = {
    get dialog() {
      return this.dialog_;
    },

    /**
     * Maybe remove this dialog from the modal top layer. This is called when
     * a modal dialog may no longer be tenable, e.g., when the dialog is no
     * longer open or is no longer part of the DOM.
     */
    maybeHideModal: function () {
      if (this.dialog_.hasAttribute('open') && document.body.contains(this.dialog_)) {
        return;
      }

      this.downgradeModal();
    },

    /**
     * Remove this dialog from the modal top layer, leaving it as a non-modal.
     */
    downgradeModal: function () {
      if (!this.openAsModal_) {
        return;
      }

      this.openAsModal_ = false;
      this.dialog_.style.zIndex = ''; // This won't match the native <dialog> exactly because if the user set top on a centered
      // polyfill dialog, that top gets thrown away when the dialog is closed. Not sure it's
      // possible to polyfill this perfectly.

      if (this.replacedStyleTop_) {
        this.dialog_.style.top = '';
        this.replacedStyleTop_ = false;
      } // Clear the backdrop and remove from the manager.


      this.backdrop_.parentNode && this.backdrop_.parentNode.removeChild(this.backdrop_);
      dialogPolyfill.dm.removeDialog(this);
    },

    /**
     * @param {boolean} value whether to open or close this dialog
     */
    setOpen: function (value) {
      if (value) {
        this.dialog_.hasAttribute('open') || this.dialog_.setAttribute('open', '');
      } else {
        this.dialog_.removeAttribute('open');
        this.maybeHideModal(); // nb. redundant with MutationObserver
      }
    },

    /**
     * Handles clicks on the fake .backdrop element, redirecting them as if
     * they were on the dialog itself.
     *
     * @param {!Event} e to redirect
     */
    backdropClick_: function (e) {
      if (!this.dialog_.hasAttribute('tabindex')) {
        // Clicking on the backdrop should move the implicit cursor, even if dialog cannot be
        // focused. Create a fake thing to focus on. If the backdrop was _before_ the dialog, this
        // would not be needed - clicks would move the implicit cursor there.
        var fake = document.createElement('div');
        this.dialog_.insertBefore(fake, this.dialog_.firstChild);
        fake.tabIndex = -1;
        fake.focus();
        this.dialog_.removeChild(fake);
      } else {
        this.dialog_.focus();
      }

      var redirectedEvent = document.createEvent('MouseEvents');
      redirectedEvent.initMouseEvent(e.type, e.bubbles, e.cancelable, window, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
      this.dialog_.dispatchEvent(redirectedEvent);
      e.stopPropagation();
    },

    /**
     * Focuses on the first focusable element within the dialog. This will always blur the current
     * focus, even if nothing within the dialog is found.
     */
    focus_: function () {
      // Find element with `autofocus` attribute, or fall back to the first form/tabindex control.
      var target = this.dialog_.querySelector('[autofocus]:not([disabled])');

      if (!target && this.dialog_.tabIndex >= 0) {
        target = this.dialog_;
      }

      if (!target) {
        // Note that this is 'any focusable area'. This list is probably not exhaustive, but the
        // alternative involves stepping through and trying to focus everything.
        var opts = ['button', 'input', 'keygen', 'select', 'textarea'];
        var query = opts.map(function (el) {
          return el + ':not([disabled])';
        }); // TODO(samthor): tabindex values that are not numeric are not focusable.

        query.push('[tabindex]:not([disabled]):not([tabindex=""])'); // tabindex != "", not disabled

        target = this.dialog_.querySelector(query.join(', '));
      }

      safeBlur(document.activeElement);
      target && target.focus();
    },

    /**
     * Sets the zIndex for the backdrop and dialog.
     *
     * @param {number} dialogZ
     * @param {number} backdropZ
     */
    updateZIndex: function (dialogZ, backdropZ) {
      if (dialogZ < backdropZ) {
        throw new Error('dialogZ should never be < backdropZ');
      }

      this.dialog_.style.zIndex = dialogZ;
      this.backdrop_.style.zIndex = backdropZ;
    },

    /**
     * Shows the dialog. If the dialog is already open, this does nothing.
     */
    show: function () {
      if (!this.dialog_.open) {
        this.setOpen(true);
        this.focus_();
      }
    },

    /**
     * Show this dialog modally.
     */
    showModal: function () {
      if (this.dialog_.hasAttribute('open')) {
        throw new Error('Failed to execute \'showModal\' on dialog: The element is already open, and therefore cannot be opened modally.');
      }

      if (!document.body.contains(this.dialog_)) {
        throw new Error('Failed to execute \'showModal\' on dialog: The element is not in a Document.');
      }

      if (!dialogPolyfill.dm.pushDialog(this)) {
        throw new Error('Failed to execute \'showModal\' on dialog: There are too many open modal dialogs.');
      }

      if (createsStackingContext(this.dialog_.parentElement)) {
        console.warn('A dialog is being shown inside a stacking context. ' + 'This may cause it to be unusable. For more information, see this link: ' + 'https://github.com/GoogleChrome/dialog-polyfill/#stacking-context');
      }

      this.setOpen(true);
      this.openAsModal_ = true; // Optionally center vertically, relative to the current viewport.

      if (dialogPolyfill.needsCentering(this.dialog_)) {
        dialogPolyfill.reposition(this.dialog_);
        this.replacedStyleTop_ = true;
      } else {
        this.replacedStyleTop_ = false;
      } // Insert backdrop.


      this.dialog_.parentNode.insertBefore(this.backdrop_, this.dialog_.nextSibling); // Focus on whatever inside the dialog.

      this.focus_();
    },

    /**
     * Closes this HTMLDialogElement. This is optional vs clearing the open
     * attribute, however this fires a 'close' event.
     *
     * @param {string=} opt_returnValue to use as the returnValue
     */
    close: function (opt_returnValue) {
      if (!this.dialog_.hasAttribute('open')) {
        throw new Error('Failed to execute \'close\' on dialog: The element does not have an \'open\' attribute, and therefore cannot be closed.');
      }

      this.setOpen(false); // Leave returnValue untouched in case it was set directly on the element

      if (opt_returnValue !== undefined) {
        this.dialog_.returnValue = opt_returnValue;
      } // Triggering "close" event for any attached listeners on the <dialog>.


      var closeEvent = new supportCustomEvent('close', {
        bubbles: false,
        cancelable: false
      });
      this.dialog_.dispatchEvent(closeEvent);
    }
  };
  var dialogPolyfill = {};

  dialogPolyfill.reposition = function (element) {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var topValue = scrollTop + (window.innerHeight - element.offsetHeight) / 2;
    element.style.top = Math.max(scrollTop, topValue) + 'px';
  };

  dialogPolyfill.isInlinePositionSetByStylesheet = function (element) {
    for (var i = 0; i < document.styleSheets.length; ++i) {
      var styleSheet = document.styleSheets[i];
      var cssRules = null; // Some browsers throw on cssRules.

      try {
        cssRules = styleSheet.cssRules;
      } catch (e) {}

      if (!cssRules) {
        continue;
      }

      for (var j = 0; j < cssRules.length; ++j) {
        var rule = cssRules[j];
        var selectedNodes = null; // Ignore errors on invalid selector texts.

        try {
          selectedNodes = document.querySelectorAll(rule.selectorText);
        } catch (e) {}

        if (!selectedNodes || !inNodeList(selectedNodes, element)) {
          continue;
        }

        var cssTop = rule.style.getPropertyValue('top');
        var cssBottom = rule.style.getPropertyValue('bottom');

        if (cssTop && cssTop !== 'auto' || cssBottom && cssBottom !== 'auto') {
          return true;
        }
      }
    }

    return false;
  };

  dialogPolyfill.needsCentering = function (dialog) {
    var computedStyle = window.getComputedStyle(dialog);

    if (computedStyle.position !== 'absolute') {
      return false;
    } // We must determine whether the top/bottom specified value is non-auto.  In
    // WebKit/Blink, checking computedStyle.top == 'auto' is sufficient, but
    // Firefox returns the used value. So we do this crazy thing instead: check
    // the inline style and then go through CSS rules.


    if (dialog.style.top !== 'auto' && dialog.style.top !== '' || dialog.style.bottom !== 'auto' && dialog.style.bottom !== '') {
      return false;
    }

    return !dialogPolyfill.isInlinePositionSetByStylesheet(dialog);
  };
  /**
   * @param {!Element} element to force upgrade
   */


  dialogPolyfill.forceRegisterDialog = function (element) {
    if (window.HTMLDialogElement || element.showModal) {
      console.warn('This browser already supports <dialog>, the polyfill ' + 'may not work correctly', element);
    }

    if (element.localName !== 'dialog') {
      throw new Error('Failed to register dialog: The element is not a dialog.');
    }

    new dialogPolyfillInfo(
    /** @type {!HTMLDialogElement} */
    element);
  };
  /**
   * @param {!Element} element to upgrade, if necessary
   */


  dialogPolyfill.registerDialog = function (element) {
    if (!element.showModal) {
      dialogPolyfill.forceRegisterDialog(element);
    }
  };
  /**
   * @constructor
   */


  dialogPolyfill.DialogManager = function () {
    /** @type {!Array<!dialogPolyfillInfo>} */
    this.pendingDialogStack = [];
    var checkDOM = this.checkDOM_.bind(this); // The overlay is used to simulate how a modal dialog blocks the document.
    // The blocking dialog is positioned on top of the overlay, and the rest of
    // the dialogs on the pending dialog stack are positioned below it. In the
    // actual implementation, the modal dialog stacking is controlled by the
    // top layer, where z-index has no effect.

    this.overlay = document.createElement('div');
    this.overlay.className = '_dialog_overlay';
    this.overlay.addEventListener('click', function (e) {
      this.forwardTab_ = undefined;
      e.stopPropagation();
      checkDOM([]); // sanity-check DOM
    }.bind(this));
    this.handleKey_ = this.handleKey_.bind(this);
    this.handleFocus_ = this.handleFocus_.bind(this);
    this.zIndexLow_ = 100000;
    this.zIndexHigh_ = 100000 + 150;
    this.forwardTab_ = undefined;

    if ('MutationObserver' in window) {
      this.mo_ = new MutationObserver(function (records) {
        var removed = [];
        records.forEach(function (rec) {
          for (var i = 0, c; c = rec.removedNodes[i]; ++i) {
            if (!(c instanceof Element)) {
              continue;
            } else if (c.localName === 'dialog') {
              removed.push(c);
            }

            removed = removed.concat(c.querySelectorAll('dialog'));
          }
        });
        removed.length && checkDOM(removed);
      });
    }
  };
  /**
   * Called on the first modal dialog being shown. Adds the overlay and related
   * handlers.
   */


  dialogPolyfill.DialogManager.prototype.blockDocument = function () {
    document.documentElement.addEventListener('focus', this.handleFocus_, true);
    document.addEventListener('keydown', this.handleKey_);
    this.mo_ && this.mo_.observe(document, {
      childList: true,
      subtree: true
    });
  };
  /**
   * Called on the first modal dialog being removed, i.e., when no more modal
   * dialogs are visible.
   */


  dialogPolyfill.DialogManager.prototype.unblockDocument = function () {
    document.documentElement.removeEventListener('focus', this.handleFocus_, true);
    document.removeEventListener('keydown', this.handleKey_);
    this.mo_ && this.mo_.disconnect();
  };
  /**
   * Updates the stacking of all known dialogs.
   */


  dialogPolyfill.DialogManager.prototype.updateStacking = function () {
    var zIndex = this.zIndexHigh_;

    for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
      dpi.updateZIndex(--zIndex, --zIndex);

      if (i === 0) {
        this.overlay.style.zIndex = --zIndex;
      }
    } // Make the overlay a sibling of the dialog itself.


    var last = this.pendingDialogStack[0];

    if (last) {
      var p = last.dialog.parentNode || document.body;
      p.appendChild(this.overlay);
    } else if (this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
  };
  /**
   * @param {Element} candidate to check if contained or is the top-most modal dialog
   * @return {boolean} whether candidate is contained in top dialog
   */


  dialogPolyfill.DialogManager.prototype.containedByTopDialog_ = function (candidate) {
    while (candidate = findNearestDialog(candidate)) {
      for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
        if (dpi.dialog === candidate) {
          return i === 0; // only valid if top-most
        }
      }

      candidate = candidate.parentElement;
    }

    return false;
  };

  dialogPolyfill.DialogManager.prototype.handleFocus_ = function (event) {
    if (this.containedByTopDialog_(event.target)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    safeBlur(
    /** @type {Element} */
    event.target);

    if (this.forwardTab_ === undefined) {
      return;
    } // move focus only from a tab key


    var dpi = this.pendingDialogStack[0];
    var dialog = dpi.dialog;
    var position = dialog.compareDocumentPosition(event.target);

    if (position & Node.DOCUMENT_POSITION_PRECEDING) {
      if (this.forwardTab_) {
        // forward
        dpi.focus_();
      } else {
        // backwards
        document.documentElement.focus();
      }
    } else {// TODO: Focus after the dialog, is ignored.
    }

    return false;
  };

  dialogPolyfill.DialogManager.prototype.handleKey_ = function (event) {
    this.forwardTab_ = undefined;

    if (event.keyCode === 27) {
      event.preventDefault();
      event.stopPropagation();
      var cancelEvent = new supportCustomEvent('cancel', {
        bubbles: false,
        cancelable: true
      });
      var dpi = this.pendingDialogStack[0];

      if (dpi && dpi.dialog.dispatchEvent(cancelEvent)) {
        dpi.dialog.close();
      }
    } else if (event.keyCode === 9) {
      this.forwardTab_ = !event.shiftKey;
    }
  };
  /**
   * Finds and downgrades any known modal dialogs that are no longer displayed. Dialogs that are
   * removed and immediately readded don't stay modal, they become normal.
   *
   * @param {!Array<!HTMLDialogElement>} removed that have definitely been removed
   */


  dialogPolyfill.DialogManager.prototype.checkDOM_ = function (removed) {
    // This operates on a clone because it may cause it to change. Each change also calls
    // updateStacking, which only actually needs to happen once. But who removes many modal dialogs
    // at a time?!
    var clone = this.pendingDialogStack.slice();
    clone.forEach(function (dpi) {
      if (removed.indexOf(dpi.dialog) !== -1) {
        dpi.downgradeModal();
      } else {
        dpi.maybeHideModal();
      }
    });
  };
  /**
   * @param {!dialogPolyfillInfo} dpi
   * @return {boolean} whether the dialog was allowed
   */


  dialogPolyfill.DialogManager.prototype.pushDialog = function (dpi) {
    var allowed = (this.zIndexHigh_ - this.zIndexLow_) / 2 - 1;

    if (this.pendingDialogStack.length >= allowed) {
      return false;
    }

    if (this.pendingDialogStack.unshift(dpi) === 1) {
      this.blockDocument();
    }

    this.updateStacking();
    return true;
  };
  /**
   * @param {!dialogPolyfillInfo} dpi
   */


  dialogPolyfill.DialogManager.prototype.removeDialog = function (dpi) {
    var index = this.pendingDialogStack.indexOf(dpi);

    if (index === -1) {
      return;
    }

    this.pendingDialogStack.splice(index, 1);

    if (this.pendingDialogStack.length === 0) {
      this.unblockDocument();
    }

    this.updateStacking();
  };

  dialogPolyfill.dm = new dialogPolyfill.DialogManager();
  dialogPolyfill.formSubmitter = null;
  dialogPolyfill.useValue = null;
  /**
   * Installs global handlers, such as click listers and native method overrides. These are needed
   * even if a no dialog is registered, as they deal with <form method="dialog">.
   */

  if (window.HTMLDialogElement === undefined) {
    /**
     * If HTMLFormElement translates method="DIALOG" into 'get', then replace the descriptor with
     * one that returns the correct value.
     */
    var testForm = document.createElement('form');
    testForm.setAttribute('method', 'dialog');

    if (testForm.method !== 'dialog') {
      var methodDescriptor = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, 'method');

      if (methodDescriptor) {
        // nb. Some older iOS and older PhantomJS fail to return the descriptor. Don't do anything
        // and don't bother to update the element.
        var realGet = methodDescriptor.get;

        methodDescriptor.get = function () {
          if (isFormMethodDialog(this)) {
            return 'dialog';
          }

          return realGet.call(this);
        };

        var realSet = methodDescriptor.set;

        methodDescriptor.set = function (v) {
          if (typeof v === 'string' && v.toLowerCase() === 'dialog') {
            return this.setAttribute('method', v);
          }

          return realSet.call(this, v);
        };

        Object.defineProperty(HTMLFormElement.prototype, 'method', methodDescriptor);
      }
    }
    /**
     * Global 'click' handler, to capture the <input type="submit"> or <button> element which has
     * submitted a <form method="dialog">. Needed as Safari and others don't report this inside
     * document.activeElement.
     */


    document.addEventListener('click', function (ev) {
      dialogPolyfill.formSubmitter = null;
      dialogPolyfill.useValue = null;

      if (ev.defaultPrevented) {
        return;
      } // e.g. a submit which prevents default submission


      var target =
      /** @type {Element} */
      ev.target;

      if (!target || !isFormMethodDialog(target.form)) {
        return;
      }

      var valid = target.type === 'submit' && ['button', 'input'].indexOf(target.localName) > -1;

      if (!valid) {
        if (!(target.localName === 'input' && target.type === 'image')) {
          return;
        } // this is a <input type="image">, which can submit forms


        dialogPolyfill.useValue = ev.offsetX + ',' + ev.offsetY;
      }

      var dialog = findNearestDialog(target);

      if (!dialog) {
        return;
      }

      dialogPolyfill.formSubmitter = target;
    }, false);
    /**
     * Replace the native HTMLFormElement.submit() method, as it won't fire the
     * submit event and give us a chance to respond.
     */

    var nativeFormSubmit = HTMLFormElement.prototype.submit;

    var replacementFormSubmit = function () {
      if (!isFormMethodDialog(this)) {
        return nativeFormSubmit.call(this);
      }

      var dialog = findNearestDialog(this);
      dialog && dialog.close();
    };

    HTMLFormElement.prototype.submit = replacementFormSubmit;
    /**
     * Global form 'dialog' method handler. Closes a dialog correctly on submit
     * and possibly sets its return value.
     */

    document.addEventListener('submit', function (ev) {
      var form =
      /** @type {HTMLFormElement} */
      ev.target;

      if (!isFormMethodDialog(form)) {
        return;
      }

      ev.preventDefault();
      var dialog = findNearestDialog(form);

      if (!dialog) {
        return;
      } // Forms can only be submitted via .submit() or a click (?), but anyway: sanity-check that
      // the submitter is correct before using its value as .returnValue.


      var s = dialogPolyfill.formSubmitter;

      if (s && s.form === form) {
        dialog.close(dialogPolyfill.useValue || s.value);
      } else {
        dialog.close();
      }

      dialogPolyfill.formSubmitter = null;
    }, true);
  }

  dialogPolyfill['forceRegisterDialog'] = dialogPolyfill.forceRegisterDialog;
  dialogPolyfill['registerDialog'] = dialogPolyfill.registerDialog;

  if (typeof define === 'function' && 'amd' in define) {
    // AMD support
    define(function () {
      return dialogPolyfill;
    });
  } else if (typeof module === 'object' && typeof module['exports'] === 'object') {
    // CommonJS support
    module['exports'] = dialogPolyfill;
  } else {
    // all others
    window['dialogPolyfill'] = dialogPolyfill;
  }
})();
},{}]},{},["5W0Mg","2YYrm"], null, null)

//# sourceMappingURL=Welcome.9a9dba91.js.map
