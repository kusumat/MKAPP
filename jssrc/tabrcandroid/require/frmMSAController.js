define("userfrmMSAController", {
    onNavigate: function(param) {
        loadMSA(this.view);
        this.view.TopHead.topHeaderContainerBar.headerTitleLabel.text = 'MSA (Metropolitan Statistical Areas) Unemployment Rate';
    },
    onFormInit: function() {},
    postShow: function() {}
});
define("frmMSAControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Segment_b97cca763dcc4e368fdc07b0667de173: function AS_Segment_b97cca763dcc4e368fdc07b0667de173(eventobject, sectionNumber, rowNumber) {
        var self = this;
        LoadURLForMSA(eventobject.selectedRowItems);
    }
});
define("frmMSAController", ["userfrmMSAController", "frmMSAControllerActions"], function() {
    var controller = require("userfrmMSAController");
    var controllerActions = ["frmMSAControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
