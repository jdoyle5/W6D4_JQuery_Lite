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