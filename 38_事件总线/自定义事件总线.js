class ITCEventBus{
    constructor() {
        this.eventBus = {}
    }
    on(eventName,eventCallback,thisArgs) {
        const handlers = this.eventBus[eventName]
        if (!handlers) {
            handlers = [] 
            this.eventBus[eventName] = handlers
        }
        handlers.push({
            eventCallback,
            thisArgs
        })
    }
    off() {

    }
    emit() {

    }
}

const eventBus = new ITCEventBus();

eventBus.on("abc",function (params) {
    
})

eventBus.emit("abc",123)