/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1)

$l = function(selectors) {
  if ((selectors instanceof HTMLLIElement) || (selectors instanceof HTMLElement)) {
    return new DOMNodeCollection([selectors]);
  } else {
    const selected = document.querySelectorAll(selectors);
    if (selected instanceof NodeList) {
      return new DOMNodeCollection(selected);
    } 
  }
}

// const el = $('#55')[0]


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor (elements) {
    this.elements = Array.from(elements);
  }
  
  html (str) {
    if (str) {
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].innerHTML = str;
      }
      return this.elements;
    } else {
      return this.elements[0].innerHTML;
    }
  }
  
  empty () {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].innerHTML = "";
    }
  }
  
  append (el) {
    if (el.constructor === String) {
      var param = el;
    } else if ((el instanceof HTMLLIElement) || (el instanceof HTMLElement)) {
      var param = el.outerHTML;
    } else if (el.constructor === DOMNodeCollection) {
      for (var i = 0; i < this.elements.length; i++) {
        for (var j = 0; j < el.elements.length; j++) {
          this.elements[i].innerHTML += el.elements[j].outerHTML;
        }
      }
      return this.elemenets;
    }
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].innerHTML += param;
    }
  }
  
  attr (key, value) {
    if (value) {
      // define said value
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].setAttribute(key, value);
      }
      return this.elements;
    } else {
      return this.elements[0].getAttribute(key);
    }
  }
  
  addClass(className) {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].className = className;
    }
  }
  
  removeClass() {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].removeAttribute("class");
    }
    
  }
  
  children() {
    const result = [];
    for (var i = 0; i < this.elements.length; i++) {
      result.push(this.elements[i].children);
    }
    return new DOMNodeCollection(result);
  }
  
  parent() {
    const result = [this.elements[0].parentElement];
    return new DOMNodeCollection(result);
  }
  
  on(type, callback) {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].addEventListener(type, callback)
    }
  }
  
}







module.exports = DOMNodeCollection;

/***/ })
/******/ ]);