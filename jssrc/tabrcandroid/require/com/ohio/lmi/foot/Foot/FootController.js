define("com/ohio/lmi/foot/Foot/userFootController", function() {
    return {};
});
define("com/ohio/lmi/foot/Foot/FootControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_g030f3b16fd649fea50db66e17cc3501: function AS_Button_g030f3b16fd649fea50db66e17cc3501(eventobject) {
        var self = this;
        voltmx.application.openURL('https://ohiolmi.com');
    }
});
define("com/ohio/lmi/foot/Foot/FootController", ["com/ohio/lmi/foot/Foot/userFootController", "com/ohio/lmi/foot/Foot/FootControllerActions"], function() {
    var controller = require("com/ohio/lmi/foot/Foot/userFootController");
    var actions = require("com/ohio/lmi/foot/Foot/FootControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
