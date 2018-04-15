const ELEMENT_TYPE = 1;

const Validator = {
  isString(data) {
    return typeof data === 'string';
  },
  isElement(node) {
    if (!node) { return false; }
    return node.nodeType === ELEMENT_TYPE;
  },
  isBoolean(data) {
    return typeof data === 'boolean';
  },
};

export default Validator;
