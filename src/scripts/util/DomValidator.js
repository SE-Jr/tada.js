const DOM = {
  isDataType(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
  },
  isString(data) {
    return DOM.isDataType(data) === 'string';
  },
  isElement(node) {
    if (!node) { return false; }
    return node.nodeType === 1;
  },
};

export default DOM;
