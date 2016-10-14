var Wire = (function () {
    function Wire(listeners, method, nodeParent) {
        var _this = this;
        this.controlHandler = function (e) {
            _this.control(e);
        };
        this.listeners = listeners;
        this.method = method;
        this.nodeParent = nodeParent || document;
        this.listenerRegister = {};
        for (var i = 0; i < this.listeners.length; i++) {
            this.nodeParent.addEventListener(this.listeners[i], this.controlHandler);
            this.listenerRegister[this.listeners[i]] = {
                checked: false,
                event: {}
            };
        }
    }
    Wire.prototype.control = function (e) {
        var isComplete = true;
        var keys = Object.keys(this.listenerRegister);
        for (var i = 0; i < keys.length; i++)
            if (keys[i] == e.type) {
                this.listenerRegister[keys[i]]["checked"] = true;
                this.listenerRegister[keys[i]]["event"] = e;
            }
        for (var j in this.listenerRegister)
            if (this.listenerRegister[j]["checked"] == false)
                isComplete = false;
        if (isComplete) {
            this.method();
        }
    };
    Wire.prototype.removeEvents = function (listEvents) {
        var listEventsErase = listEvents;
        for (var j in this.listenerRegister) {
            for (var i = 0; i < listEvents.length; i++) {
                var listenerToRemove = this.listenerRegister[j]["event"]["type"];
                if (this.listenerRegister[j]["event"]["type"] == listEventsErase[i])
                    this.nodeParent.removeEventListener(this.listenerRegister[j]["event"]["type"], this.controlHandler);
            }
        }
    };
    return Wire;
})();