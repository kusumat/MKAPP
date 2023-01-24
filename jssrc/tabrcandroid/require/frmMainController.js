define("userfrmMainController", {
    //Type your controller code here 
});
define("frmMainControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_de63d56cbdfa468a80b81250eb95757a: function AS_Form_de63d56cbdfa468a80b81250eb95757a(eventobject) {
        var self = this;
        loadHomePage(this.view);
        let env = 'UAT v';
        if (appConfig.isturlbase.toLowerCase().includes('dev')) env = 'DEV v';
        this.view.Foot.FooterHyperLinkButton.btnVersion.text = env + appConfig.appVersion;
    },
    AS_Segment_ieadc85f33c34e58887fb598c7fa2389: function AS_Segment_ieadc85f33c34e58887fb598c7fa2389(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return populateSegment.call(this, this.view);
    }
});
define("frmMainController", ["userfrmMainController", "frmMainControllerActions"], function() {
    var controller = require("userfrmMainController");
    var controllerActions = ["frmMainControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
