var eventEmitter = (function eventEmitter() {

    var events = {};

    function addEventListener(userEventName, userFunc) {
        if(events[userEventName]) {
            events[userEventName].push(userFunc);
            return userFunc;
        } else {
            console.error("event - " + userEventName + " does not exist");
        }
    }

    function removeEventListener(userEventName, userFunc) {
        var index,
            NOT_FOUND = -1;

        if (events[userEventName]) {
            index = events[userEventName].indexOf(userFunc);
            if (index === NOT_FOUND) {
                console.error("function - " + userFunc.name + " does not exist in event - " + events[userEventName]);
            } else {
                events[userEventName].splice(index,1);
            }
        } else {
            console.error("event - " + userEventName + " does not exist");
        }
    }

    function registerEvent(userEventName) {
        if(events[userEventName]) {
            console.error("event - " + userEventName + "  already exist");
        } else {
            events[userEventName] = [];
        }
    }

    function removeEvent(userEventName) {
        if(events[userEventName]) {
            delete events[userEventName];
        } else {
            console.error("event - " + userEventName + " does not exist");
        }
    }

    function dispatchEvent(userEventName, userData) {
        if (events[userEventName]) {
            events[userEventName].forEach(function(listener) {
                setTimeout(function() {
                    listener(userData);
                }, 0);
            });
        } else {
            console.error("event - " + userEventName + " does not exist");
        }
    }

    return {
        addEventListener: addEventListener,
        removeEventListener: removeEventListener,
        dispatchEvent: dispatchEvent,
        registerEvent: registerEvent,
        removeEvent: removeEvent
    }
}());
