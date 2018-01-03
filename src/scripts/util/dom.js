const dom = {
    addClass: (element, className) => element.classList.add(className),
    createTag: tagName => document.createElement(tagName),
    getElements: selector => document.querySelectorAll(selector),
    setAttr: (element, name, value) => element.setAttribute(name, value)
};

export default dom