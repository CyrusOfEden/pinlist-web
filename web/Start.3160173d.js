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
},{"react-refresh/runtime":"3NneF"}],"2XBLN":[function(require,module,exports) {
var global = arguments[3];

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "3160173d055c80542b184deedc603f5f";
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
},{}],"27AxX":[function(require,module,exports) {
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

  var _core = require("@chakra-ui/core");

  var Motion = _interopRequireWildcard(require("~/src/system/Motion"));

  var _react = _interopRequireDefault(require("react"));

  var _reactHookForm = require("react-hook-form");

  var _s = $RefreshSig$();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var _default = () => /*#__PURE__*/_react.default.createElement(Motion.Flex, {
    initial: "initial",
    animate: "enter",
    exit: "leave",
    variants: {
      initial: {
        opacity: 0,
        y: 50,
        transition: {
          type: "spring"
        }
      },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring"
        }
      },
      leave: {
        opacity: 0,
        y: -50,
        transition: {
          duration: 1
        }
      }
    },
    w: "100%",
    align: "center",
    justify: "space-around"
  }, /*#__PURE__*/_react.default.createElement(_core.Stack, {
    w: 420,
    color: "gold.700"
  }, /*#__PURE__*/_react.default.createElement(_core.Heading, null, "Get Started"), /*#__PURE__*/_react.default.createElement(LoginForm, null)));

  exports.default = _default;

  const LoginForm = () => {
    _s();

    const _useForm = (0, _reactHookForm.useForm)(),
          register = _useForm.register,
          handleSubmit = _useForm.handleSubmit,
          errors = _useForm.errors,
          formState = _useForm.formState;

    const motion = {
      initial: {
        opacity: 0,
        y: 50
      },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring"
        }
      },
      exit: {
        opacity: 0,
        y: 50
      }
    };
    return /*#__PURE__*/_react.default.createElement(Motion.Box, {
      initial: "initial",
      animate: "enter",
      variants: motion
    }, /*#__PURE__*/_react.default.createElement("form", {
      onSubmit: handleSubmit(data => console.log(data))
    }, /*#__PURE__*/_react.default.createElement(_core.FormControl, {
      isInvalid: formState.isDirty && errors.phoneNumber
    }, /*#__PURE__*/_react.default.createElement(_core.Input, {
      type: "tel",
      name: "phoneNumber",
      id: "phoneNumber",
      placeholder: "Phone Number",
      borderColor: "transparent",
      focusBorderColor: "gold.500",
      autoFocus: true
    }), errors.phoneNumber && /*#__PURE__*/_react.default.createElement(Motion.Box, {
      exit: "exit",
      variants: motion
    }))));
  };

  _s(LoginForm, "v6L4r+Z3z9X/uegwqtTD911CD4s=", false, function () {
    return [_reactHookForm.useForm];
  });

  _c = LoginForm;

  var _c;

  $RefreshReg$(_c, "LoginForm");
  helpers.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"@chakra-ui/core":"2sX8P","~/src/system/Motion":"5Jodj","react":"UCOaU","react-hook-form":"3uIMC","../../../../../node_modules/@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"38SjL"}],"3uIMC":[function(require,module,exports) {
'use strict';

if ("development" === 'production') {
  module.exports = require('./index.cjs.production.min.js');
} else {
  module.exports = require('./index.cjs.development.js');
}
},{"./index.cjs.development.js":"5GJTm"}],"5GJTm":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var isHTMLElement = (value) => value instanceof HTMLElement;

const EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
    INPUT: 'input',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    all: 'all',
};
const VALUE = 'value';
const SELECT = 'select';
const UNDEFINED = 'undefined';
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

function attachEventListeners({ field: { ref }, handleChange, isRadioOrCheckbox, }) {
    if (isHTMLElement(ref) && handleChange) {
        ref.addEventListener(isRadioOrCheckbox ? EVENTS.CHANGE : EVENTS.INPUT, handleChange);
        ref.addEventListener(EVENTS.BLUR, handleChange);
    }
}

var isNullOrUndefined = (value) => value == null;

var isArray = (value) => Array.isArray(value);

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) && !isArray(value) && isObjectType(value);

var isKey = (value) => !isArray(value) &&
    (/^\w*$/.test(value) ||
        !/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/.test(value));

var stringToPath = (input) => {
    const result = [];
    input.replace(/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, (match, mathNumber, mathQuote, originalString) => {
        result.push(mathQuote
            ? originalString.replace(/\\(\\)?/g, '$1')
            : mathNumber || match);
    });
    return result;
};

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

var transformToNestObject = (data) => Object.entries(data).reduce((previous, [key, value]) => {
    if (!isKey(key)) {
        set(previous, key, value);
        return previous;
    }
    return Object.assign(Object.assign({}, previous), { [key]: value });
}, {});

var isUndefined = (val) => val === undefined;

var unique = (value) => value.filter(Boolean);

var get = (obj, path, defaultValue) => {
    const result = unique(path.split(/[,[\].]+?/)).reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
    return isUndefined(result) || result === obj
        ? isUndefined(obj[path])
            ? defaultValue
            : obj[path]
        : result;
};

var focusOnErrorField = (fields, fieldErrors) => {
    for (const key in fields) {
        if (get(fieldErrors, key)) {
            const field = fields[key];
            if (field) {
                if (field.ref.focus) {
                    field.ref.focus();
                    break;
                }
                else if (field.options) {
                    field.options[0].ref.focus();
                    break;
                }
            }
        }
    }
};

var removeAllEventListeners = (ref, validateWithStateUpdate) => {
    if (isHTMLElement(ref) && ref.removeEventListener) {
        ref.removeEventListener(EVENTS.INPUT, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.CHANGE, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.BLUR, validateWithStateUpdate);
    }
};

const defaultReturn = {
    isValid: false,
    value: '',
};
var getRadioValue = (options) => isArray(options)
    ? options.reduce((previous, option) => option && option.ref.checked
        ? {
            isValid: true,
            value: option.ref.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

var getMultipleSelectValue = (options) => [...options]
    .filter(({ selected }) => selected)
    .map(({ value }) => value);

var isRadioInput = (element) => element.type === 'radio';

var isFileInput = (element) => element.type === 'file';

var isCheckBoxInput = (element) => element.type === 'checkbox';

var isMultipleSelect = (element) => element.type === `${SELECT}-multiple`;

var isEmptyString = (value) => value === '';

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.ref.checked)
                .map(({ ref: { value } }) => value);
            return { value: values, isValid: !!values.length };
        }
        const { checked, value, attributes } = options[0].ref;
        return checked
            ? attributes && !isUndefined(attributes.value)
                ? isUndefined(value) || isEmptyString(value)
                    ? validResult
                    : { value: value, isValid: true }
                : validResult
            : defaultResult;
    }
    return defaultResult;
};

function getFieldValue(fields, name) {
    if (fields[name]) {
        const field = fields[name];
        const { ref: { value }, ref, } = field;
        if (isFileInput(ref)) {
            return ref.files;
        }
        if (isRadioInput(ref)) {
            return field ? getRadioValue(field.options).value : '';
        }
        if (isMultipleSelect(ref)) {
            return getMultipleSelectValue(ref.options);
        }
        if (isCheckBoxInput(ref)) {
            return field ? getCheckboxValue(field.options).value : false;
        }
        return value;
    }
}

function isDetached(element) {
    if (!element) {
        return true;
    }
    if (!(element instanceof HTMLElement) ||
        element.nodeType === Node.DOCUMENT_NODE) {
        return false;
    }
    return isDetached(element.parentNode);
}

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

function baseGet(object, updatePath) {
    const path = updatePath.slice(0, -1);
    const length = path.length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return index == length ? object : undefined;
}
function unset(object, path) {
    const updatePath = isKey(path) ? [path] : stringToPath(path);
    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    let previousObjRef = undefined;
    if (childObject) {
        delete childObject[key];
    }
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef = undefined;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index &&
                ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (isArray(objectRef) &&
                        !objectRef.filter((data) => isObject(data) && !isEmptyObject(data))
                            .length))) {
                previousObjRef ? delete previousObjRef[item] : delete object[item];
            }
            previousObjRef = objectRef;
        }
    }
    return object;
}

const isSameRef = (fieldValue, ref) => fieldValue && fieldValue.ref === ref;
function findRemovedFieldAndRemoveListener(fields, handleChange, field, unmountFieldsStateRef, shouldUnregister, forceDelete) {
    const { ref, ref: { name, type }, mutationWatcher, } = field;
    const fieldRef = fields[name];
    if (!shouldUnregister) {
        const value = getFieldValue(fields, name);
        if (!isUndefined(value)) {
            unmountFieldsStateRef.current[name] = value;
        }
    }
    if (!type) {
        delete fields[name];
        return;
    }
    if ((isRadioInput(ref) || isCheckBoxInput(ref)) && fieldRef) {
        const { options } = fieldRef;
        if (isArray(options) && options.length) {
            unique(options).forEach((option, index) => {
                const { ref, mutationWatcher } = option;
                if ((ref && isDetached(ref) && isSameRef(option, ref)) || forceDelete) {
                    removeAllEventListeners(ref, handleChange);
                    if (mutationWatcher) {
                        mutationWatcher.disconnect();
                    }
                    unset(options, `[${index}]`);
                }
            });
            if (options && !unique(options).length) {
                delete fields[name];
            }
        }
        else {
            delete fields[name];
        }
    }
    else if ((isDetached(ref) && isSameRef(fieldRef, ref)) || forceDelete) {
        removeAllEventListeners(ref, handleChange);
        if (mutationWatcher) {
            mutationWatcher.disconnect();
        }
        delete fields[name];
    }
}

var isString = (value) => typeof value === 'string';

var getFieldsValues = (fields, search) => {
    const output = {};
    for (const name in fields) {
        if (isUndefined(search) ||
            (isString(search)
                ? name.startsWith(search)
                : isArray(search) && search.find((data) => name.startsWith(data)))) {
            output[name] = getFieldValue(fields, name);
        }
    }
    return output;
};

var compareObject = (objectA = {}, objectB = {}) => {
    const objectAKeys = Object.keys(objectA);
    return (objectAKeys.length === Object.keys(objectB).length &&
        objectAKeys.every((key) => objectB[key] && objectB[key] === objectA[key]));
};

var isSameError = (error, { type, types, message }) => isObject(error) &&
    error.type === type &&
    error.message === message &&
    compareObject(error.types, types);

function shouldRenderBasedOnError({ errors, name, error, validFields, fieldsWithValidation, }) {
    const isFieldValid = isEmptyObject(error);
    const isFormValid = isEmptyObject(errors);
    const currentFieldError = get(error, name);
    const existFieldError = get(errors, name);
    if (isFieldValid && validFields.has(name)) {
        return false;
    }
    if (isFormValid !== isFieldValid ||
        (!isFormValid && !existFieldError) ||
        (isFieldValid && fieldsWithValidation.has(name) && !validFields.has(name))) {
        return true;
    }
    return currentFieldError && !isSameError(existFieldError, currentFieldError);
}

var isRegex = (value) => value instanceof RegExp;

const isValueMessage = (value) => isObject(value) && !isRegex(value);
var getValueAndMessage = (validationData) => isValueMessage(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var isFunction = (value) => typeof value === 'function';

var isBoolean = (value) => typeof value === 'boolean';

var isMessage = (value) => isString(value) || (isObject(value) && React.isValidElement(value));

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) || (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => {
    if (validateAllFieldCriteria) {
        const error = errors[name];
        return Object.assign(Object.assign({}, error), { types: Object.assign(Object.assign({}, (error && error.types ? error.types : {})), { [type]: message || true }) });
    }
    return {};
};

var validateField = async (fieldsRef, validateAllFieldCriteria, { ref, ref: { type, value }, options, required, maxLength, minLength, min, max, pattern, validate, }) => {
    var _a;
    const fields = fieldsRef.current;
    const name = ref.name;
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = isEmptyString(value);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
            ref }, (exceedMax
            ? appendErrorsCurry(maxType, message)
            : appendErrorsCurry(minType, message)));
    };
    if (required &&
        ((!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(value))) ||
            (isBoolean(value) && !value) ||
            (isCheckBox && !getCheckboxValue(options).isValid) ||
            (isRadio && !getRadioValue(options).isValid))) {
        const { value: requiredValue, message: requiredMessage } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (requiredValue) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message: requiredMessage, ref: isRadioOrCheckbox ? (_a = fields[name].options) === null || _a === void 0 ? void 0 : _a[0].ref : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, requiredMessage));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (!isNullOrUndefined(min) || !isNullOrUndefined(max)) {
        let exceedMax;
        let exceedMin;
        const { value: maxValue, message: maxMessage } = getValueAndMessage(max);
        const { value: minValue, message: minMessage } = getValueAndMessage(min);
        if (type === 'number' || (!type && !isNaN(value))) {
            const valueNumber = ref.valueAsNumber || parseFloat(value);
            if (!isNullOrUndefined(maxValue)) {
                exceedMax = valueNumber > maxValue;
            }
            if (!isNullOrUndefined(minValue)) {
                exceedMin = valueNumber < minValue;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(value);
            if (isString(maxValue)) {
                exceedMax = valueDate > new Date(maxValue);
            }
            if (isString(minValue)) {
                exceedMin = valueDate < new Date(minValue);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxMessage, minMessage, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (isString(value) && !isEmpty && (maxLength || minLength)) {
        const { value: maxLengthValue, message: maxLengthMessage, } = getValueAndMessage(maxLength);
        const { value: minLengthValue, message: minLengthMessage, } = getValueAndMessage(minLength);
        const inputLength = value.toString().length;
        const exceedMax = !isNullOrUndefined(maxLengthValue) && inputLength > maxLengthValue;
        const exceedMin = !isNullOrUndefined(minLengthValue) && inputLength < minLengthValue;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxLengthMessage, minLengthMessage);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (pattern && !isEmpty) {
        const { value: patternValue, message: patternMessage } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !patternValue.test(value)) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message: patternMessage, ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, patternMessage));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (validate) {
        const fieldValue = getFieldValue(fields, name);
        const validateRef = isRadioOrCheckbox && options ? options[0].ref : ref;
        if (isFunction(validate)) {
            const result = await validate(fieldValue);
            const validateError = getValidateError(result, validateRef);
            if (validateError) {
                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const [key, validateFunction] of Object.entries(validate)) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateResult = await validateFunction(fieldValue);
                const validateError = getValidateError(validateResult, validateRef, key);
                if (validateError) {
                    validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = Object.assign({ ref: validateRef }, validationResult);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    return error;
};

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

const getPath = (path, values) => {
    const getInnerPath = (value, key, isObject) => {
        const pathWithIndex = isObject ? `${path}.${key}` : `${path}[${key}]`;
        return isPrimitive(value) ? pathWithIndex : getPath(pathWithIndex, value);
    };
    return isArray(values)
        ? values.map((value, key) => getInnerPath(value, key))
        : Object.entries(values).map(([key, value]) => getInnerPath(value, key, true));
};
var getPath$1 = (parentPath, value) => getPath(parentPath, value).flat(Infinity);

var assignWatchFields = (fieldValues, fieldName, watchFields, inputValue, isSingleField) => {
    let value;
    watchFields.add(fieldName);
    if (isEmptyObject(fieldValues)) {
        value = undefined;
    }
    else if (!isUndefined(fieldValues[fieldName])) {
        value = fieldValues[fieldName];
    }
    else {
        value = get(transformToNestObject(fieldValues), fieldName);
        if (!isUndefined(value)) {
            getPath$1(fieldName, value).forEach((name) => watchFields.add(name));
        }
    }
    return isUndefined(value)
        ? isSingleField
            ? inputValue
            : get(inputValue, fieldName)
        : value;
};

var skipValidation = ({ isOnChange, hasError, isBlurEvent, isOnSubmit, isReValidateOnSubmit, isOnBlur, isReValidateOnBlur, isSubmitted, }) => (isOnChange && isBlurEvent) ||
    (isOnSubmit && isReValidateOnSubmit) ||
    (isOnSubmit && !isSubmitted) ||
    (isOnBlur && !isBlurEvent && !hasError) ||
    (isReValidateOnBlur && !isBlurEvent && hasError) ||
    (isReValidateOnSubmit && isSubmitted);

var getFieldArrayParentName = (name) => name.substring(0, name.indexOf('['));

var getFieldValueByName = (fields, name) => {
    const results = transformToNestObject(getFieldsValues(fields));
    return name ? get(results, name, results) : results;
};

function getIsFieldsDifferent(referenceArray, differenceArray) {
    if (!isArray(referenceArray) ||
        !isArray(differenceArray) ||
        referenceArray.length !== differenceArray.length) {
        return true;
    }
    for (let i = 0; i < referenceArray.length; i++) {
        const dataA = referenceArray[i];
        const dataB = differenceArray[i];
        if (isUndefined(dataB) ||
            Object.keys(dataA).length !== Object.keys(dataB).length) {
            return true;
        }
        for (const key in dataA) {
            if (dataA[key] !== dataB[key]) {
                return true;
            }
        }
    }
    return false;
}

const isMatchFieldArrayName = (name, searchName) => RegExp(`^${searchName}[\\d+]`.replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(name);
var isNameInFieldArray = (names, name) => [...names].some((current) => isMatchFieldArrayName(name, current));

var isSelectInput = (element) => element.type === `${SELECT}-one`;

function onDomRemove(element, onDetachCallback) {
    const observer = new MutationObserver(() => {
        if (isDetached(element)) {
            observer.disconnect();
            onDetachCallback();
        }
    });
    observer.observe(window.document, {
        childList: true,
        subtree: true,
    });
    return observer;
}

var modeChecker = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
});

var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, resolver, context, defaultValues = {}, shouldFocusError = true, shouldUnregister = true, criteriaMode, } = {}) {
    const fieldsRef = React.useRef({});
    const errorsRef = React.useRef({});
    const touchedFieldsRef = React.useRef({});
    const fieldArrayDefaultValues = React.useRef({});
    const watchFieldsRef = React.useRef(new Set());
    const dirtyFieldsRef = React.useRef({});
    const watchFieldsHookRef = React.useRef({});
    const watchFieldsHookRenderRef = React.useRef({});
    const fieldsWithValidationRef = React.useRef(new Set());
    const validFieldsRef = React.useRef(new Set());
    const isValidRef = React.useRef(true);
    const defaultValuesRef = React.useRef(defaultValues);
    const defaultValuesAtRenderRef = React.useRef({});
    const isUnMount = React.useRef(false);
    const isWatchAllRef = React.useRef(false);
    const isSubmittedRef = React.useRef(false);
    const isDirtyRef = React.useRef(false);
    const submitCountRef = React.useRef(0);
    const isSubmittingRef = React.useRef(false);
    const handleChangeRef = React.useRef();
    const unmountFieldsStateRef = React.useRef({});
    const resetFieldArrayFunctionRef = React.useRef({});
    const contextRef = React.useRef(context);
    const resolverRef = React.useRef(resolver);
    const fieldArrayNamesRef = React.useRef(new Set());
    const [, render] = React.useState();
    const { isOnBlur, isOnSubmit, isOnChange, isOnAll } = React.useRef(modeChecker(mode)).current;
    const validateAllFieldCriteria = criteriaMode === VALIDATION_MODE.all;
    const isWindowUndefined = typeof window === UNDEFINED;
    const isWeb = typeof document !== UNDEFINED &&
        !isWindowUndefined &&
        !isUndefined(window.HTMLElement);
    const isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== UNDEFINED;
    const readFormStateRef = React.useRef({
        isDirty: !isProxyEnabled,
        dirtyFields: !isProxyEnabled,
        isSubmitted: isOnSubmit,
        submitCount: !isProxyEnabled,
        touched: !isProxyEnabled,
        isSubmitting: !isProxyEnabled,
        isValid: !isProxyEnabled,
    });
    const { isOnBlur: isReValidateOnBlur, isOnSubmit: isReValidateOnSubmit, } = React.useRef(modeChecker(reValidateMode)).current;
    contextRef.current = context;
    resolverRef.current = resolver;
    const reRender = React.useCallback(() => {
        if (!isUnMount.current) {
            render({});
        }
    }, []);
    const shouldRenderBaseOnError = React.useCallback((name, error, shouldRender = false) => {
        let shouldReRender = shouldRender ||
            shouldRenderBasedOnError({
                errors: errorsRef.current,
                error,
                name,
                validFields: validFieldsRef.current,
                fieldsWithValidation: fieldsWithValidationRef.current,
            });
        const previousError = get(errorsRef.current, name);
        if (isEmptyObject(error)) {
            if (fieldsWithValidationRef.current.has(name) || resolverRef.current) {
                validFieldsRef.current.add(name);
                shouldReRender = shouldReRender || previousError;
            }
            errorsRef.current = unset(errorsRef.current, name);
        }
        else {
            validFieldsRef.current.delete(name);
            shouldReRender =
                shouldReRender ||
                    !previousError ||
                    !isSameError(previousError, error[name]);
            set(errorsRef.current, name, error[name]);
        }
        if (shouldReRender && !isNullOrUndefined(shouldRender)) {
            reRender();
            return true;
        }
    }, [reRender, resolverRef]);
    const setFieldValue = React.useCallback(({ ref, options }, rawValue) => {
        const value = isWeb && isHTMLElement(ref) && isNullOrUndefined(rawValue)
            ? ''
            : rawValue;
        if (isRadioInput(ref) && options) {
            options.forEach(({ ref: radioRef }) => (radioRef.checked = radioRef.value === value));
        }
        else if (isFileInput(ref)) {
            if (isString(value)) {
                ref.value = value;
            }
            else {
                ref.files = value;
            }
        }
        else if (isMultipleSelect(ref)) {
            [...ref.options].forEach((selectRef) => (selectRef.selected = value.includes(selectRef.value)));
        }
        else if (isCheckBoxInput(ref) && options) {
            options.length > 1
                ? options.forEach(({ ref: checkboxRef }) => (checkboxRef.checked = value.includes(checkboxRef.value)))
                : (options[0].ref.checked = !!value);
        }
        else {
            ref.value = value;
        }
    }, [isWeb]);
    const setDirty = React.useCallback((name) => {
        const { isDirty, dirtyFields } = readFormStateRef.current;
        if (!fieldsRef.current[name] || (!isDirty && !dirtyFields)) {
            return false;
        }
        const isFieldDirty = defaultValuesAtRenderRef.current[name] !==
            getFieldValue(fieldsRef.current, name);
        const isDirtyFieldExist = get(dirtyFieldsRef.current, name);
        const isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
        const previousIsDirty = isDirtyRef.current;
        if (isFieldDirty) {
            set(dirtyFieldsRef.current, name, true);
        }
        else {
            unset(dirtyFieldsRef.current, name);
        }
        isDirtyRef.current =
            (isFieldArray &&
                getIsFieldsDifferent(getFieldValueByName(fieldsRef.current, getFieldArrayParentName(name)), get(defaultValuesRef.current, getFieldArrayParentName(name)))) ||
                !isEmptyObject(dirtyFieldsRef.current);
        return ((isDirty && previousIsDirty !== isDirtyRef.current) ||
            (dirtyFields && isDirtyFieldExist !== get(dirtyFieldsRef.current, name)));
    }, []);
    const executeValidation = React.useCallback(async (name, skipReRender) => {
        if (fieldsRef.current[name]) {
            const error = await validateField(fieldsRef, validateAllFieldCriteria, fieldsRef.current[name]);
            shouldRenderBaseOnError(name, error, skipReRender ? null : false);
            return isEmptyObject(error);
        }
        return false;
    }, [shouldRenderBaseOnError, validateAllFieldCriteria]);
    const executeSchemaOrResolverValidation = React.useCallback(async (payload) => {
        const { errors } = await resolverRef.current(getFieldValueByName(fieldsRef.current), contextRef.current, validateAllFieldCriteria);
        const previousFormIsValid = isValidRef.current;
        isValidRef.current = isEmptyObject(errors);
        if (isArray(payload)) {
            const isInputsValid = payload
                .map((name) => {
                const error = get(errors, name);
                if (error) {
                    set(errorsRef.current, name, error);
                }
                else {
                    unset(errorsRef.current, name);
                }
                return !error;
            })
                .every(Boolean);
            reRender();
            return isInputsValid;
        }
        else {
            const error = get(errors, payload);
            shouldRenderBaseOnError(payload, (error ? { [payload]: error } : {}), previousFormIsValid !== isValidRef.current);
            return !error;
        }
    }, [reRender, shouldRenderBaseOnError, validateAllFieldCriteria, resolverRef]);
    const trigger = React.useCallback(async (name) => {
        const fields = name || Object.keys(fieldsRef.current);
        if (resolverRef.current) {
            return executeSchemaOrResolverValidation(fields);
        }
        if (isArray(fields)) {
            const result = await Promise.all(fields.map(async (data) => await executeValidation(data, true)));
            reRender();
            return result.every(Boolean);
        }
        return await executeValidation(fields);
    }, [
        executeSchemaOrResolverValidation,
        executeValidation,
        reRender,
        resolverRef,
    ]);
    const setInternalValues = React.useCallback((name, value, config, parentFieldName) => {
        for (const key in value) {
            const fieldName = `${parentFieldName || name}${isArray(value) ? `[${key}]` : `.${key}`}`;
            const field = fieldsRef.current[fieldName];
            if (isObject(value[key])) {
                setInternalValues(name, value[key], config, fieldName);
            }
            if (field) {
                setFieldValue(field, value[key]);
                if (config.shouldDirty) {
                    setDirty(fieldName);
                }
                if (config.shouldValidate) {
                    trigger(fieldName);
                }
            }
        }
    }, [trigger, setFieldValue, setDirty]);
    const setInternalValue = React.useCallback((name, value, config) => {
        if (fieldsRef.current[name]) {
            setFieldValue(fieldsRef.current[name], value);
            return config.shouldDirty && setDirty(name);
        }
        else if (!isPrimitive(value)) {
            setInternalValues(name, value, config);
        }
    }, [setDirty, setFieldValue, setInternalValues]);
    const isFieldWatched = (name) => isWatchAllRef.current ||
        watchFieldsRef.current.has(name) ||
        watchFieldsRef.current.has((name.match(/\w+/) || [])[0]);
    const renderWatchedInputs = (name, found = true) => {
        if (!isEmptyObject(watchFieldsHookRef.current)) {
            for (const key in watchFieldsHookRef.current) {
                if (watchFieldsHookRef.current[key].has(name) ||
                    !watchFieldsHookRef.current[key].size ||
                    isNameInFieldArray(fieldArrayNamesRef.current, name)) {
                    watchFieldsHookRenderRef.current[key]();
                    found = false;
                }
            }
        }
        return found;
    };
    function setValue(name, value, config = {}) {
        const shouldRender = setInternalValue(name, value, config) ||
            !isPrimitive(value) ||
            isFieldWatched(name);
        renderWatchedInputs(name);
        if (shouldRender) {
            reRender();
        }
        if (config.shouldValidate) {
            trigger(name);
        }
    }
    handleChangeRef.current = handleChangeRef.current
        ? handleChangeRef.current
        : async ({ type, target }) => {
            const name = target ? target.name : '';
            const field = fieldsRef.current[name];
            let error;
            if (!field) {
                return;
            }
            const isBlurEvent = type === EVENTS.BLUR;
            const shouldSkipValidation = !isOnAll &&
                skipValidation({
                    hasError: !!get(errorsRef.current, name),
                    isOnChange,
                    isBlurEvent,
                    isOnSubmit,
                    isReValidateOnSubmit,
                    isOnBlur,
                    isReValidateOnBlur,
                    isSubmitted: isSubmittedRef.current,
                });
            let shouldRender = setDirty(name) || isFieldWatched(name);
            if (isBlurEvent &&
                !get(touchedFieldsRef.current, name) &&
                readFormStateRef.current.touched) {
                set(touchedFieldsRef.current, name, true);
                shouldRender = true;
            }
            if (shouldSkipValidation) {
                renderWatchedInputs(name);
                return shouldRender && reRender();
            }
            if (resolver) {
                const { errors } = await resolver(getFieldValueByName(fieldsRef.current), contextRef.current, validateAllFieldCriteria);
                const previousFormIsValid = isValidRef.current;
                isValidRef.current = isEmptyObject(errors);
                error = (get(errors, name)
                    ? { [name]: get(errors, name) }
                    : {});
                if (previousFormIsValid !== isValidRef.current) {
                    shouldRender = true;
                }
            }
            else {
                error = await validateField(fieldsRef, validateAllFieldCriteria, field);
            }
            renderWatchedInputs(name);
            if (!shouldRenderBaseOnError(name, error) && shouldRender) {
                reRender();
            }
        };
    const validateResolver = React.useCallback((values = {}) => {
        const fieldValues = isEmptyObject(defaultValuesRef.current)
            ? getFieldsValues(fieldsRef.current)
            : defaultValuesRef.current;
        resolverRef.current(transformToNestObject(Object.assign(Object.assign({}, fieldValues), values)), contextRef.current, validateAllFieldCriteria).then(({ errors }) => {
            const previousFormIsValid = isValidRef.current;
            isValidRef.current = isEmptyObject(errors);
            if (previousFormIsValid !== isValidRef.current) {
                reRender();
            }
        });
    }, [reRender, validateAllFieldCriteria, resolverRef]);
    const removeFieldEventListener = React.useCallback((field, forceDelete) => {
        findRemovedFieldAndRemoveListener(fieldsRef.current, handleChangeRef.current, field, unmountFieldsStateRef, shouldUnregister, forceDelete);
    }, [shouldUnregister]);
    const removeFieldEventListenerAndRef = React.useCallback((field, forceDelete) => {
        if (field &&
            (!isNameInFieldArray(fieldArrayNamesRef.current, field.ref.name) ||
                forceDelete)) {
            removeFieldEventListener(field, forceDelete);
            if (shouldUnregister) {
                [
                    errorsRef,
                    touchedFieldsRef,
                    dirtyFieldsRef,
                    defaultValuesAtRenderRef,
                ].forEach((data) => unset(data.current, field.ref.name));
                [
                    fieldsWithValidationRef,
                    validFieldsRef,
                    watchFieldsRef,
                ].forEach((data) => data.current.delete(field.ref.name));
                if (readFormStateRef.current.isValid ||
                    readFormStateRef.current.touched) {
                    reRender();
                    if (resolverRef.current) {
                        validateResolver();
                    }
                }
            }
        }
    }, [reRender, validateResolver, removeFieldEventListener, resolverRef]);
    function clearErrors(name) {
        if (name) {
            (isArray(name) ? name : [name]).forEach((inputName) => unset(errorsRef.current, inputName));
        }
        else {
            errorsRef.current = {};
        }
        reRender();
    }
    function setError(name, error) {
        isValidRef.current = false;
        set(errorsRef.current, name, Object.assign(Object.assign({}, error), { ref: (fieldsRef.current[name] || {}).ref }));
        reRender();
    }
    const watchInternal = React.useCallback((fieldNames, defaultValue, watchId) => {
        const watchFields = watchId
            ? watchFieldsHookRef.current[watchId]
            : watchFieldsRef.current;
        const combinedDefaultValues = isUndefined(defaultValue)
            ? defaultValuesRef.current
            : defaultValue;
        const fieldValues = getFieldsValues(fieldsRef.current, fieldNames);
        if (isString(fieldNames)) {
            return assignWatchFields(fieldValues, fieldNames, watchFields, isUndefined(defaultValue)
                ? get(combinedDefaultValues, fieldNames)
                : defaultValue, true);
        }
        if (isArray(fieldNames)) {
            return fieldNames.reduce((previous, name) => (Object.assign(Object.assign({}, previous), { [name]: assignWatchFields(fieldValues, name, watchFields, combinedDefaultValues) })), {});
        }
        if (isUndefined(watchId)) {
            isWatchAllRef.current = true;
        }
        return transformToNestObject((!isEmptyObject(fieldValues) && fieldValues) ||
            combinedDefaultValues);
    }, []);
    function watch(fieldNames, defaultValue) {
        return watchInternal(fieldNames, defaultValue);
    }
    function unregister(name) {
        (isArray(name) ? name : [name]).forEach((fieldName) => removeFieldEventListenerAndRef(fieldsRef.current[fieldName], true));
    }
    function registerFieldsRef(ref, validateOptions = {}) {
        if (!ref.name) {
            // eslint-disable-next-line no-console
            return console.warn('Missing name @', ref);
        }
        const { name, type, value } = ref;
        const fieldRefAndValidationOptions = Object.assign({ ref }, validateOptions);
        const fields = fieldsRef.current;
        const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
        let field = fields[name];
        let isEmptyDefaultValue = true;
        let isFieldArray;
        let defaultValue;
        if (field &&
            (isRadioOrCheckbox
                ? isArray(field.options) &&
                    unique(field.options).find((option) => {
                        return value === option.ref.value && option.ref === ref;
                    })
                : ref === field.ref)) {
            fields[name] = Object.assign(Object.assign({}, field), validateOptions);
            return;
        }
        if (type) {
            const mutationWatcher = onDomRemove(ref, () => removeFieldEventListenerAndRef(field));
            field = isRadioOrCheckbox
                ? Object.assign({ options: [
                        ...unique((field && field.options) || []),
                        {
                            ref,
                            mutationWatcher,
                        },
                    ], ref: { type, name } }, validateOptions) : Object.assign(Object.assign({}, fieldRefAndValidationOptions), { mutationWatcher });
        }
        else {
            field = fieldRefAndValidationOptions;
        }
        fields[name] = field;
        const isEmptyUnmountFields = isUndefined(unmountFieldsStateRef.current[name]);
        if (!isEmptyObject(defaultValuesRef.current) || !isEmptyUnmountFields) {
            defaultValue = isEmptyUnmountFields
                ? get(defaultValuesRef.current, name)
                : unmountFieldsStateRef.current[name];
            isEmptyDefaultValue = isUndefined(defaultValue);
            isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
            if (!isEmptyDefaultValue && !isFieldArray) {
                setFieldValue(field, defaultValue);
            }
        }
        if (resolver && !isFieldArray && readFormStateRef.current.isValid) {
            validateResolver();
        }
        else if (!isEmptyObject(validateOptions)) {
            fieldsWithValidationRef.current.add(name);
            if (!isOnSubmit && readFormStateRef.current.isValid) {
                validateField(fieldsRef, validateAllFieldCriteria, field).then((error) => {
                    const previousFormIsValid = isValidRef.current;
                    isEmptyObject(error)
                        ? validFieldsRef.current.add(name)
                        : (isValidRef.current = false);
                    if (previousFormIsValid !== isValidRef.current) {
                        reRender();
                    }
                });
            }
        }
        if (!defaultValuesAtRenderRef.current[name] &&
            !(isFieldArray && isEmptyDefaultValue)) {
            defaultValuesAtRenderRef.current[name] = isEmptyDefaultValue
                ? getFieldValue(fields, name)
                : defaultValue;
        }
        if (type) {
            attachEventListeners({
                field: isRadioOrCheckbox && field.options
                    ? field.options[field.options.length - 1]
                    : field,
                isRadioOrCheckbox: isRadioOrCheckbox || isSelectInput(ref),
                handleChange: handleChangeRef.current,
            });
        }
    }
    function register(refOrValidationOptions, rules) {
        if (!isWindowUndefined) {
            if (isString(refOrValidationOptions)) {
                registerFieldsRef({ name: refOrValidationOptions }, rules);
            }
            else if (isObject(refOrValidationOptions) &&
                'name' in refOrValidationOptions) {
                registerFieldsRef(refOrValidationOptions, rules);
            }
            else {
                return (ref) => ref && registerFieldsRef(ref, refOrValidationOptions);
            }
        }
    }
    const handleSubmit = React.useCallback((callback) => async (e) => {
        if (e) {
            e.preventDefault();
            e.persist();
        }
        let fieldErrors = {};
        let fieldValues = Object.assign(Object.assign({}, unmountFieldsStateRef.current), getFieldsValues(fieldsRef.current));
        if (readFormStateRef.current.isSubmitting) {
            isSubmittingRef.current = true;
            reRender();
        }
        try {
            if (resolverRef.current) {
                const { errors, values } = await resolverRef.current(transformToNestObject(fieldValues), contextRef.current, validateAllFieldCriteria);
                errorsRef.current = errors;
                fieldErrors = errors;
                fieldValues = values;
            }
            else {
                for (const field of Object.values(fieldsRef.current)) {
                    if (field) {
                        const { ref: { name }, } = field;
                        const fieldError = await validateField(fieldsRef, validateAllFieldCriteria, field);
                        if (fieldError[name]) {
                            set(fieldErrors, name, fieldError[name]);
                            validFieldsRef.current.delete(name);
                        }
                        else if (fieldsWithValidationRef.current.has(name)) {
                            validFieldsRef.current.add(name);
                        }
                    }
                }
            }
            if (isEmptyObject(fieldErrors) &&
                Object.keys(errorsRef.current).every((name) => Object.keys(fieldsRef.current).includes(name))) {
                errorsRef.current = {};
                reRender();
                await callback(transformToNestObject(fieldValues), e);
            }
            else {
                errorsRef.current = Object.assign(Object.assign({}, errorsRef.current), fieldErrors);
                if (shouldFocusError && isWeb) {
                    focusOnErrorField(fieldsRef.current, fieldErrors);
                }
            }
        }
        finally {
            isSubmittedRef.current = true;
            isSubmittingRef.current = false;
            submitCountRef.current = submitCountRef.current + 1;
            reRender();
        }
    }, [isWeb, reRender, resolverRef, shouldFocusError, validateAllFieldCriteria]);
    const resetRefs = ({ errors, isDirty, isSubmitted, touched, isValid, submitCount, dirtyFields, }) => {
        fieldsRef.current = {};
        if (!errors) {
            errorsRef.current = {};
        }
        if (!touched) {
            touchedFieldsRef.current = {};
        }
        if (!isValid) {
            validFieldsRef.current = new Set();
            fieldsWithValidationRef.current = new Set();
            isValidRef.current = true;
        }
        if (!isDirty) {
            isDirtyRef.current = false;
        }
        if (!dirtyFields) {
            dirtyFieldsRef.current = {};
        }
        if (!isSubmitted) {
            isSubmittedRef.current = false;
        }
        if (!submitCount) {
            submitCountRef.current = 0;
        }
        defaultValuesAtRenderRef.current = {};
        fieldArrayDefaultValues.current = {};
        unmountFieldsStateRef.current = {};
        watchFieldsRef.current = new Set();
        isWatchAllRef.current = false;
    };
    const reset = (values, omitResetState = {}) => {
        if (isWeb) {
            for (const field of Object.values(fieldsRef.current)) {
                if (field) {
                    const { ref, options } = field;
                    const inputRef = isRadioOrCheckboxFunction(ref) && isArray(options)
                        ? options[0].ref
                        : ref;
                    if (isHTMLElement(inputRef)) {
                        try {
                            inputRef.closest('form').reset();
                            break;
                        }
                        catch (_a) { }
                    }
                }
            }
        }
        if (values) {
            defaultValuesRef.current = values;
        }
        Object.values(resetFieldArrayFunctionRef.current).forEach((resetFieldArray) => isFunction(resetFieldArray) && resetFieldArray());
        resetRefs(omitResetState);
        reRender();
    };
    const getValue = (name) => getFieldValue(fieldsRef.current, name);
    function getValues(payload) {
        const fields = fieldsRef.current;
        if (isString(payload)) {
            return getValue(payload);
        }
        if (isArray(payload)) {
            return payload.reduce((previous, name) => (Object.assign(Object.assign({}, previous), { [name]: getValue(name) })), {});
        }
        return transformToNestObject(getFieldsValues(fields));
    }
    React.useEffect(() => {
        isUnMount.current = false;
        return () => {
            isUnMount.current = true;
            fieldsRef.current &&
                "development" === 'production' &&
                Object.values(fieldsRef.current).forEach((field) => removeFieldEventListenerAndRef(field, true));
        };
    }, [removeFieldEventListenerAndRef]);
    if (!resolver) {
        isValidRef.current =
            validFieldsRef.current.size >= fieldsWithValidationRef.current.size &&
                isEmptyObject(errorsRef.current);
    }
    const formState = {
        dirtyFields: dirtyFieldsRef.current,
        isSubmitted: isSubmittedRef.current,
        submitCount: submitCountRef.current,
        touched: touchedFieldsRef.current,
        isDirty: isDirtyRef.current,
        isSubmitting: isSubmittingRef.current,
        isValid: isOnSubmit
            ? isSubmittedRef.current && isEmptyObject(errorsRef.current)
            : isValidRef.current,
    };
    const commonProps = {
        trigger,
        setValue: React.useCallback(setValue, [
            reRender,
            setInternalValue,
            trigger,
        ]),
        getValues: React.useCallback(getValues, []),
        register: React.useCallback(register, [defaultValuesRef.current]),
        unregister: React.useCallback(unregister, []),
        formState: isProxyEnabled
            ? new Proxy(formState, {
                get: (obj, prop) => {
                    if (prop in obj) {
                        readFormStateRef.current[prop] = true;
                        return obj[prop];
                    }
                    return undefined;
                },
            })
            : formState,
    };
    const control = Object.assign(Object.assign(Object.assign({ removeFieldEventListener,
        renderWatchedInputs,
        watchInternal,
        reRender }, (resolver ? { validateSchemaIsValid: validateResolver } : {})), { mode: {
            isOnBlur,
            isOnSubmit,
            isOnChange,
        }, reValidateMode: {
            isReValidateOnBlur,
            isReValidateOnSubmit,
        }, errorsRef,
        touchedFieldsRef,
        fieldsRef,
        isWatchAllRef,
        watchFieldsRef,
        resetFieldArrayFunctionRef,
        watchFieldsHookRef,
        watchFieldsHookRenderRef,
        fieldArrayDefaultValues,
        validFieldsRef,
        dirtyFieldsRef,
        fieldsWithValidationRef,
        fieldArrayNamesRef,
        isDirtyRef,
        isSubmittedRef,
        readFormStateRef,
        defaultValuesRef,
        unmountFieldsStateRef }), commonProps);
    return Object.assign({ watch,
        control,
        handleSubmit, reset: React.useCallback(reset, []), clearErrors: React.useCallback(clearErrors, []), setError: React.useCallback(setError, []), errors: errorsRef.current }, commonProps);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const FormContext = React.createContext(null);
FormContext.displayName = 'RHFContext';
const useFormContext = () => React.useContext(FormContext);
const FormProvider = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (React.createElement(FormContext.Provider, { value: Object.assign({}, props) }, children));
};

var generateId = () => {
    const d = typeof performance === UNDEFINED ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

const appendId = (value, keyName) => (Object.assign({ [keyName]: generateId() }, (isObject(value) ? value : { value })));
const mapIds = (data, keyName) => (isArray(data) ? data : []).map((value) => appendId(value, keyName));

const removeAt = (data, index) => [
    ...data.slice(0, index),
    ...data.slice(index + 1),
];
function removeAtIndexes(data, index) {
    let k = -1;
    while (++k < data.length) {
        if (index.indexOf(k) >= 0) {
            delete data[k];
        }
    }
    return unique(data);
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : isArray(index)
        ? removeAtIndexes(data, index)
        : removeAt(data, index);

var moveArrayAt = (data, from, to) => isArray(data) ? data.splice(to, 0, data.splice(from, 1)[0]) : [];

var swapArrayAt = (data, indexA, indexB) => {
    const temp = [data[indexB], data[indexA]];
    data[indexA] = temp[0];
    data[indexB] = temp[1];
};

function prepend(data, value) {
    return [...(isArray(value) ? value : [value || null]), ...data];
}

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...(isArray(value) ? value : [value || null]),
        ...data.slice(index),
    ];
}

var fillEmptyArray = (value) => isArray(value) ? Array(value.length).fill(null) : null;

function mapValueToBoolean(value) {
    if (isObject(value)) {
        const object = {};
        for (const key in value) {
            object[key] = true;
        }
        return [object];
    }
    return [true];
}
const filterBooleanArray = (value) => isArray(value)
    ? value.map(mapValueToBoolean).flat()
    : mapValueToBoolean(value);

const useFieldArray = ({ control, name, keyName = 'id', }) => {
    const methods = useFormContext();
    const focusIndexRef = React.useRef(-1);
    const { isWatchAllRef, resetFieldArrayFunctionRef, fieldArrayNamesRef, reRender, fieldsRef, defaultValuesRef, removeFieldEventListener, errorsRef, dirtyFieldsRef, isDirtyRef, touchedFieldsRef, readFormStateRef, watchFieldsRef, validFieldsRef, fieldsWithValidationRef, fieldArrayDefaultValues, validateSchemaIsValid, renderWatchedInputs, } = control || methods.control;
    let shouldRender;
    const getDefaultValues = () => [
        ...get(fieldArrayDefaultValues.current[getFieldArrayParentName(name)]
            ? fieldArrayDefaultValues.current
            : defaultValuesRef.current, name, []),
    ];
    const memoizedDefaultValues = React.useRef(getDefaultValues());
    const [fields, setField] = React.useState(mapIds(memoizedDefaultValues.current, keyName));
    const [isDeleted, setIsDeleted] = React.useState(false);
    const allFields = React.useRef(fields);
    const isNameKey = isKey(name);
    allFields.current = fields;
    if (isNameKey) {
        fieldArrayDefaultValues.current[name] = memoizedDefaultValues.current;
    }
    const appendValueWithKey = (values) => values.map((value) => appendId(value, keyName));
    const setFieldAndValidState = (fieldsValues) => {
        setField(fieldsValues);
        if (readFormStateRef.current.isValid && validateSchemaIsValid) {
            validateSchemaIsValid({
                [name]: fieldsValues,
            });
        }
    };
    const shouldRenderFieldArray = (shouldRender) => {
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            shouldRender = true;
        }
        renderWatchedInputs(name);
        shouldRender && !isWatchAllRef.current && reRender();
    };
    const resetFields = (flagOrFields) => {
        if (readFormStateRef.current.isDirty) {
            isDirtyRef.current =
                isUndefined(flagOrFields) ||
                    getIsFieldsDifferent(flagOrFields, get(defaultValuesRef.current, name, []));
        }
        for (const key in fieldsRef.current) {
            if (isMatchFieldArrayName(key, name) && fieldsRef.current[key]) {
                removeFieldEventListener(fieldsRef.current[key], true);
            }
        }
    };
    const append = (value, shouldFocus = true) => {
        shouldRender = false;
        setFieldAndValidState([
            ...allFields.current,
            ...(isArray(value)
                ? appendValueWithKey(value)
                : [appendId(value, keyName)]),
        ]);
        if (readFormStateRef.current.dirtyFields) {
            dirtyFieldsRef.current[name] = [
                ...(dirtyFieldsRef.current[name] || fillEmptyArray(fields.slice(0, 1))),
                ...filterBooleanArray(value),
            ];
            isDirtyRef.current = true;
            shouldRender = true;
        }
        focusIndexRef.current = shouldFocus ? allFields.current.length : -1;
        shouldRenderFieldArray(shouldRender);
    };
    const prepend$1 = (value, shouldFocus = true) => {
        const emptyArray = fillEmptyArray(value);
        shouldRender = false;
        resetFields();
        setFieldAndValidState(prepend(allFields.current, isArray(value) ? appendValueWithKey(value) : [appendId(value, keyName)]));
        if (isArray(get(errorsRef.current, name))) {
            errorsRef.current[name] = prepend(get(errorsRef.current, name), emptyArray);
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            touchedFieldsRef.current[name] = prepend(touchedFieldsRef.current[name], emptyArray);
            shouldRender = true;
        }
        if ((readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) &&
            dirtyFieldsRef.current[name]) {
            dirtyFieldsRef.current[name] = prepend(dirtyFieldsRef.current[name], filterBooleanArray(value));
            shouldRender = true;
        }
        shouldRenderFieldArray(shouldRender);
        focusIndexRef.current = shouldFocus ? 0 : -1;
    };
    const remove = (index) => {
        shouldRender = false;
        resetFields(removeArrayAt(getFieldValueByName(fieldsRef.current, name), index));
        setFieldAndValidState(removeArrayAt(allFields.current, index));
        setIsDeleted(true);
        if (isArray(get(errorsRef.current, name))) {
            errorsRef.current[name] = removeArrayAt(get(errorsRef.current, name), index);
            if (!unique(errorsRef.current[name]).length) {
                delete errorsRef.current[name];
            }
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            touchedFieldsRef.current[name] = removeArrayAt(touchedFieldsRef.current[name], index);
            shouldRender = true;
        }
        if ((readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) &&
            dirtyFieldsRef.current[name]) {
            dirtyFieldsRef.current[name] = removeArrayAt(dirtyFieldsRef.current[name], index);
            if (!dirtyFieldsRef.current[name].length) {
                delete dirtyFieldsRef.current[name];
            }
            shouldRender = true;
        }
        if (readFormStateRef.current.isValid && !validateSchemaIsValid) {
            let fieldIndex = -1;
            let isFound = false;
            const isIndexUndefined = isUndefined(index);
            while (fieldIndex++ < fields.length) {
                const isLast = fieldIndex === fields.length - 1;
                const isCurrentIndex = (isArray(index) ? index : [index]).indexOf(fieldIndex) >= 0;
                if (isCurrentIndex || isIndexUndefined) {
                    isFound = true;
                }
                if (!isFound) {
                    continue;
                }
                for (const key in fields[fieldIndex]) {
                    const currentFieldName = `${name}[${fieldIndex}].${key}`;
                    if (isCurrentIndex || isLast || isIndexUndefined) {
                        validFieldsRef.current.delete(currentFieldName);
                        fieldsWithValidationRef.current.delete(currentFieldName);
                    }
                    else {
                        const previousFieldName = `${name}[${fieldIndex - 1}].${key}`;
                        if (validFieldsRef.current.has(currentFieldName)) {
                            validFieldsRef.current.add(previousFieldName);
                        }
                        if (fieldsWithValidationRef.current.has(currentFieldName)) {
                            fieldsWithValidationRef.current.add(previousFieldName);
                        }
                    }
                }
            }
        }
        shouldRenderFieldArray(shouldRender);
    };
    const insert$1 = (index, value, shouldFocus = true) => {
        shouldRender = false;
        const emptyArray = fillEmptyArray(value);
        resetFields(insert(getFieldValueByName(fieldsRef.current, name), index));
        setFieldAndValidState(insert(allFields.current, index, isArray(value) ? appendValueWithKey(value) : [appendId(value, keyName)]));
        if (isArray(get(errorsRef.current, name))) {
            errorsRef.current[name] = insert(get(errorsRef.current, name), index, emptyArray);
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            touchedFieldsRef.current[name] = insert(touchedFieldsRef.current[name], index, emptyArray);
            shouldRender = true;
        }
        if ((readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) &&
            dirtyFieldsRef.current[name]) {
            dirtyFieldsRef.current[name] = insert(dirtyFieldsRef.current[name], index, filterBooleanArray(value));
            shouldRender = true;
        }
        shouldRenderFieldArray(shouldRender);
        focusIndexRef.current = shouldFocus ? index : -1;
    };
    const swap = (indexA, indexB) => {
        shouldRender = false;
        const fieldValues = getFieldValueByName(fieldsRef.current, name);
        swapArrayAt(fieldValues, indexA, indexB);
        resetFields(fieldValues);
        swapArrayAt(allFields.current, indexA, indexB);
        setFieldAndValidState([...allFields.current]);
        if (isArray(get(errorsRef.current, name))) {
            swapArrayAt(get(errorsRef.current, name), indexA, indexB);
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            swapArrayAt(touchedFieldsRef.current[name], indexA, indexB);
            shouldRender = true;
        }
        if ((readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) &&
            dirtyFieldsRef.current[name]) {
            swapArrayAt(dirtyFieldsRef.current[name], indexA, indexB);
            shouldRender = true;
        }
        shouldRenderFieldArray(shouldRender);
    };
    const move = (from, to) => {
        shouldRender = false;
        const fieldValues = getFieldValueByName(fieldsRef.current, name);
        moveArrayAt(fieldValues, from, to);
        resetFields(fieldValues);
        moveArrayAt(allFields.current, from, to);
        setFieldAndValidState([...allFields.current]);
        if (isArray(get(errorsRef.current, name))) {
            moveArrayAt(get(errorsRef.current, name), from, to);
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            moveArrayAt(touchedFieldsRef.current[name], from, to);
            shouldRender = true;
        }
        if ((readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) &&
            dirtyFieldsRef.current[name]) {
            moveArrayAt(dirtyFieldsRef.current[name], from, to);
            shouldRender = true;
        }
        shouldRenderFieldArray(shouldRender);
    };
    const reset = () => {
        resetFields();
        memoizedDefaultValues.current = getDefaultValues();
        setField(mapIds(memoizedDefaultValues.current, keyName));
    };
    React.useEffect(() => {
        if (isNameKey &&
            isDeleted &&
            fieldArrayDefaultValues.current[name] &&
            fields.length < fieldArrayDefaultValues.current[name].length) {
            fieldArrayDefaultValues.current[name].pop();
        }
        if (isWatchAllRef && isWatchAllRef.current) {
            reRender();
        }
        else if (watchFieldsRef) {
            for (const watchField of watchFieldsRef.current) {
                if (watchField.startsWith(name)) {
                    reRender();
                    break;
                }
            }
        }
        if (focusIndexRef.current > -1) {
            for (const key in fieldsRef.current) {
                const field = fieldsRef.current[key];
                if (key.startsWith(`${name}[${focusIndexRef.current}]`) &&
                    field.ref.focus) {
                    field.ref.focus();
                    break;
                }
            }
        }
        focusIndexRef.current = -1;
    }, [
        fields,
        name,
        fieldArrayDefaultValues,
        isDeleted,
        isNameKey,
        reRender,
        fieldsRef,
        watchFieldsRef,
        isWatchAllRef,
    ]);
    React.useEffect(() => {
        const resetFunctions = resetFieldArrayFunctionRef.current;
        const fieldArrayNames = fieldArrayNamesRef.current;
        fieldArrayNames.add(name);
        resetFunctions[name] = reset;
        return () => {
            resetFields();
            delete resetFunctions[name];
            fieldArrayNames.delete(name);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        swap: React.useCallback(swap, [name]),
        move: React.useCallback(move, [name]),
        prepend: React.useCallback(prepend$1, [name]),
        append: React.useCallback(append, [name]),
        remove: React.useCallback(remove, [fields, name]),
        insert: React.useCallback(insert$1, [name]),
        fields,
    };
};

function useWatch({ control, name, defaultValue, }) {
    const methods = useFormContext();
    const { watchFieldsHookRef, watchFieldsHookRenderRef, watchInternal, defaultValuesRef, } = control || methods.control;
    const [value, setValue] = React.useState(isUndefined(defaultValue)
        ? isString(name)
            ? get(defaultValuesRef.current, name)
            : isArray(name)
                ? name.reduce((previous, inputName) => (Object.assign(Object.assign({}, previous), { [inputName]: get(defaultValuesRef.current, inputName) })), {})
                : defaultValuesRef.current
        : defaultValue);
    const idRef = React.useRef();
    const defaultValueRef = React.useRef(defaultValue);
    const nameRef = React.useRef(name);
    const updateWatchValue = React.useCallback(() => setValue(watchInternal(nameRef.current, defaultValueRef.current, idRef.current)), [setValue, watchInternal, defaultValueRef, nameRef, idRef]);
    React.useEffect(() => {
        const id = (idRef.current = generateId());
        const watchFieldsHookRender = watchFieldsHookRenderRef.current;
        const watchFieldsHook = watchFieldsHookRef.current;
        watchFieldsHook[id] = new Set();
        watchFieldsHookRender[id] = updateWatchValue;
        watchInternal(nameRef.current, defaultValueRef.current, id);
        return () => {
            delete watchFieldsHook[id];
            delete watchFieldsHookRender[id];
        };
    }, [
        nameRef,
        updateWatchValue,
        watchFieldsHookRenderRef,
        watchFieldsHookRef,
        watchInternal,
        defaultValueRef,
    ]);
    return (isUndefined(value) ? defaultValue : value);
}

var getInputValue = (event, isCheckboxInput) => isPrimitive(event) ||
    !isObject(event.target) ||
    (isObject(event.target) && !event.type)
    ? event
    : isCheckboxInput || isUndefined(event.target.value)
        ? event.target.checked
        : event.target.value;

const Controller = (_a) => {
    var { name, rules, as, render, defaultValue, control, onFocus } = _a, rest = __rest(_a, ["name", "rules", "as", "render", "defaultValue", "control", "onFocus"]);
    const methods = useFormContext();
    const { defaultValuesRef, setValue, register, unregister, errorsRef, trigger, mode: { isOnSubmit, isOnBlur, isOnChange }, reValidateMode: { isReValidateOnBlur, isReValidateOnSubmit }, isSubmittedRef, touchedFieldsRef, readFormStateRef, reRender, fieldsRef, fieldArrayNamesRef, unmountFieldsStateRef, formState, } = control || methods.control;
    const isNotFieldArray = !isNameInFieldArray(fieldArrayNamesRef.current, name);
    const getInitialValue = () => !isUndefined(unmountFieldsStateRef.current[name]) && isNotFieldArray
        ? unmountFieldsStateRef.current[name]
        : isUndefined(defaultValue)
            ? get(defaultValuesRef.current, name)
            : defaultValue;
    const [value, setInputStateValue] = React.useState(getInitialValue());
    const valueRef = React.useRef(value);
    const isCheckboxInput = isBoolean(value);
    const onFocusRef = React.useRef(onFocus);
    const isSubmitted = isSubmittedRef.current;
    const shouldValidate = () => !skipValidation({
        hasError: !!get(errorsRef.current, name),
        isOnBlur,
        isOnSubmit,
        isOnChange,
        isReValidateOnBlur,
        isReValidateOnSubmit,
        isSubmitted,
    });
    const commonTask = (event) => {
        const data = getInputValue(event[0], isCheckboxInput);
        setInputStateValue(data);
        valueRef.current = data;
        return data;
    };
    const registerField = React.useCallback(() => {
        if (fieldsRef.current[name]) {
            fieldsRef.current[name] = Object.assign({ ref: fieldsRef.current[name].ref }, rules);
        }
        else {
            register(Object.defineProperty({ name, focus: onFocusRef.current }, VALUE, {
                set(data) {
                    setInputStateValue(data);
                    valueRef.current = data;
                },
                get() {
                    return valueRef.current;
                },
            }), rules);
        }
    }, [fieldsRef, rules, name, onFocusRef, register]);
    React.useEffect(() => () => {
        !isNameInFieldArray(fieldArrayNamesRef.current, name) && unregister(name);
    }, [unregister, name, fieldArrayNamesRef]);
    React.useEffect(() => {
        registerField();
    }, [registerField]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(() => {
        if (!fieldsRef.current[name]) {
            registerField();
            if (isNotFieldArray) {
                setInputStateValue(getInitialValue());
            }
        }
    });
    const onBlur = () => {
        if (readFormStateRef.current.touched &&
            !get(touchedFieldsRef.current, name)) {
            set(touchedFieldsRef.current, name, true);
            reRender();
        }
        if (isOnBlur || (formState.isSubmitted && isReValidateOnBlur)) {
            trigger(name);
        }
    };
    const onChange = (...event) => setValue(name, commonTask(event), {
        shouldValidate: shouldValidate(),
        shouldDirty: true,
    });
    const props = Object.assign(Object.assign(Object.assign({}, rest), { onChange,
        onBlur }), { [isCheckboxInput ? 'checked' : VALUE]: value });
    return as
        ? React.isValidElement(as)
            ? React.cloneElement(as, props)
            : React.createElement(as, props)
        : render
            ? render({
                onChange,
                onBlur,
                value,
            })
            : null;
};

exports.Controller = Controller;
exports.FormContext = FormContext;
exports.FormProvider = FormProvider;
exports.appendErrors = appendErrors;
exports.get = get;
exports.transformToNestObject = transformToNestObject;
exports.useFieldArray = useFieldArray;
exports.useForm = useForm;
exports.useFormContext = useFormContext;
exports.useWatch = useWatch;
//# sourceMappingURL=index.cjs.development.js.map

},{"react":"UCOaU"}]},{},["5W0Mg","2XBLN"], null, null)

//# sourceMappingURL=Start.3160173d.js.map
