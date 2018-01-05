//https://davidwalsh.name/pubsub-javascript
export default class Events{
    constructor(){
        this.events = {};
    }

    subscribe(event, listener){
        if(!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(listener);
    }

    publish(event, info){
        if(!this.events[event]) {
            return;
        }

        this.events[event].forEach(function(listener){
            listener(info !== undefined ? info : {});
        });
    }

}