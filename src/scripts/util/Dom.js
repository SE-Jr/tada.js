import { INVALID_STRING_TYPE } from './error'

let instance = null;
class Dom {

    constructor() {
        if(!instance) {
            instance = this;
        }

        return instance;
    }

    createElement = (selector) => {
        this.validate( !this.isString(selector), INVALID_STRING_TYPE );
        return document.createElement(selector);
    }

    isDataType = (data) => {
        return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
    }

    isString = (data) => {
        return this.isDataType(data) === 'string';
    }

    isFunction = (data) => {
        return this.isDataType(data) === 'function';
    }

    isElement = (node) => {
        if (!node) { return false; }
        return node.nodeType === 1;
    }

    isDocument = (node) => {
        return node.nodeType === 9;
    }

    validate = (condition, error_message) => {
        if (condition) { throw new Error(error_message); }
    }

    isValidate = (condition, success, fail) => {
        if ( condition && success && this.isFunction(success) ) { success(); }
        if ( !condition && fail && this.isFunction(fail) ) { fail(); }
        return condition ? true : false;
    }

    queryAll = (selector, context ) => {
        this.validate( !this.isString(selector), INVALID_STRING_TYPE );

        context = (this.isString(context) ? this.query(context) : context) || document;
        this.validate( !this.isElement(context) && !this.isDocument(context), 'Second Element must be element node' );
        return context.querySelectorAll(selector);
    }

    query(selector, context) {
        return this.queryAll(selector, context)[0];
    }

    hasClass = (target, className) => {
        this.validate( !this.isString(className), INVALID_STRING_TYPE );
        const classes = target.className.split(' ');
        if (classes.indexOf(className) === -1) {
            return false;
        } else {
            return true;
        }
    }

    addClass = (target, className) => {
        this.validate( !this.isString(className), INVALID_STRING_TYPE );

        if(!this.hasClass(target, className)) {
            target.className = target.className + ' ' + className;
        }
    }
}

export default new Dom();