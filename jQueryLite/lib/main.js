const DOMNodeCollection = require('./dom_node_collection')

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
