define("userfrmLaborController", {
    onNavigate: function(param) {
        loadLabor(this.view);
        this.view.TopHead.topHeaderContainerBar.headerTitleLabel.text = 'LABOR FORCE';
    },
    onFormInit: function() {},
    postShow: function() {}
});
define("frmLaborControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Segment_a38a213452f041c5b284f1410dbc1817: function AS_Segment_a38a213452f041c5b284f1410dbc1817(eventobject, sectionNumber, rowNumber) {
        var self = this;
        LoadURLForLabor(eventobject.selectedRowItems);
    }
});
define("frmLaborController", ["userfrmLaborController", "frmLaborControllerActions"], function() {
    var controller = require("userfrmLaborController");
    var controllerActions = ["frmLaborControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
