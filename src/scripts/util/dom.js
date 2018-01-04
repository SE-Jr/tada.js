const dom = {
    addClass: (element, className) => element.classList.add(className),
    addEvent: (element, event, handler) => element.addEventListener(event, handler),
    createTag: tagName => document.createElement(tagName),
    getChildrenByTagName: (element, tagName) => element.getElementsByTagName(tagName),
    getElements: selector => document.querySelectorAll(selector),
    removeClass: (element, className) => element.classList.remove(className),
    setAttr: (element, name, value) => element.setAttribute(name, value),
    setStyle: (element, property, value) => element.style[property] = value
};

export default dom