"use strict";

var widgetBuilder = function widgetBuilder(widgetJson) {

    var widget;
    
    function build(componentJSON, component) {
        var component;
        
        if(componentJSON["component-data"]) {
            component = abstractUIFactory(componentJSON["component-data"].type);
            return build(componentJSON["component-data"], component);
        } else {
            
        }


    }

    build(widgetJson, document.createElement('div'));

    return widget;
};