const dom = {
    getElements: selector => document.querySelectorAll(selector),
    addClass: (element, className) => element.classList.add(className)
};

export default dom