const ELEMENT_TYPE = 1;

const DOM = {
  isString(data) {
    return typeof data === 'string';
  },
  isElement(node) {
    if (!node) { return false; }
    return node.nodeType === ELEMENT_TYPE;
  },
};

export default DOM;
