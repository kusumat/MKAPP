define("com/ohio/lmi/MainHead/userMainHeadController", function() {
    return {};
});
define("com/ohio/lmi/MainHead/MainHeadControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Label_i53997b4fb7b4ad9bf5ae2fae0cff8c1: function AS_Label_i53997b4fb7b4ad9bf5ae2fae0cff8c1(eventobject, x, y) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmSettings");
        ntf.navigate();
    }
});
define("com/ohio/lmi/MainHead/MainHeadController", ["com/ohio/lmi/MainHead/userMainHeadController", "com/ohio/lmi/MainHead/MainHeadControllerActions"], function() {
    var controller = require("com/ohio/lmi/MainHead/userMainHeadController");
    var actions = require("com/ohio/lmi/MainHead/MainHeadControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
