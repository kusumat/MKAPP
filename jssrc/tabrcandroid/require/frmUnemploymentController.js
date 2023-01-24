define("userfrmUnemploymentController", {
    onNavigate: function(param) {
        loadCounties(this.view);
        this.view.TopHead.topHeaderContainerBar.headerTitleLabel.text = 'County Unemployment Rate';
    },
    onFormInit: function() {},
    postShow: function() {}
});
define("frmUnemploymentControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Segment_da881188cc1540879660321166ab0642: function AS_Segment_da881188cc1540879660321166ab0642(eventobject, sectionNumber, rowNumber) {
        var self = this;
        LoadURLForUnemploymentCounties(eventobject.selectedRowItems);
    }
});
define("frmUnemploymentController", ["userfrmUnemploymentController", "frmUnemploymentControllerActions"], function() {
    var controller = require("userfrmUnemploymentController");
    var controllerActions = ["frmUnemploymentControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
