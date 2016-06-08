
var abstractUIFactory = function abstractUIFactory() {
    var types = {};

    getComponent: function getComponent(userType, userCustomizations) {
        if(!types[userType]) {
            console.error("type " + userType + " does not exist");
        } else {
            return types[userType](userCustomizations);
        }
    }

    registerComponent: function registerComponent(userType, userFactoryMethod) {
        if(types[userType]) {
            console.error("type " + userType + " already exist");
        } else {
            types[userType] = userFactoryMethod;
        }
    }

    return {
        getComponent: getComponent,
        registerComponent: registerComponent
    }
};
