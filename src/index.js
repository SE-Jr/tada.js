import "./styles/style.scss";
import Controller from "./scripts/Controller";
import Config from "./scripts/Config";
import DOM from "./scripts/util/DomValidator";

export default class Tada {
    constructor(option) {
        if (!option.selector) {
            return new Error("required selector");
        }
        if (!DOM.isString(option.selector)) {
            return new Error("selector must be string type");
        }
        const wrapper = document.querySelector(option.selector);

        if (!DOM.isElement(wrapper)) {
            return new Error("wrapper must be element node");
        }
        const config = this._createConfig(option, wrapper);
        this._loadController(config);
    }

    _createConfig(option, wrapper) {
        const config = new Config(option, wrapper);
        return config.toJson();
    }

    _loadController(config) {
        this.controller = new Controller(config);
        this.controller.load();
    }

    on(label, callback) {
        this.controller.on(label, callback);
    }
}
