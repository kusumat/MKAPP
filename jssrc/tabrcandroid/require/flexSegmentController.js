define("userflexSegmentController", {
    //Type your controller code here 
});
define("flexSegmentControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flexSegmentController", ["userflexSegmentController", "flexSegmentControllerActions"], function() {
    var controller = require("userflexSegmentController");
    var controllerActions = ["flexSegmentControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
