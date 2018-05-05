export default class EventEmitter {
    constructor() {
        this.listeners = new Map();
    }

    addListener(label, callback) {
        if (!this.listeners.has(label)) {
            this.listeners.set(label, []);
        }
        this.listeners.get(label).push(callback);
    }

    emit(label, ...args) {
        const listeners = this.listeners.get(label);

        if (listeners && listeners.length) {
            listeners.forEach((listener) => {
                listener(...args);
            });
            return true;
        }
        return false;
    }
}
