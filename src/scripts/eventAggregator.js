const eventAggregator = (function() {
    const eventToHandlerMap = {};

    const _subscribe = function(event, handler) {
        if (!eventToHandlerMap[event]) {
            eventToHandlerMap[event] = [];
        }

        eventToHandlerMap[event].push(handler);
    };

    const _publish = function(event, data) {
        if (!eventToHandlerMap[event]) {
            return;
        }

        eventToHandlerMap[event].forEach(function(handler) {
            handler(data);
        });
    };

    return {
        subscribe: _subscribe,
        publish: _publish
    };
})();

export default eventAggregator