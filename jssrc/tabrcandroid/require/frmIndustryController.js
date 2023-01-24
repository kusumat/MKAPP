define("userfrmIndustryController", {
    onNavigate: function(param) {
        loadIndustryJobs(this.view);
        this.view.TopHead.topHeaderContainerBar.headerTitleLabel.text = 'INDUSTRY JOBS';
    },
    onFormInit: function() {},
    postShow: function() {}
});
define("frmIndustryControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Segment_c4c74aefc3dc4d23b4b9d2b9189cfda6: function AS_Segment_c4c74aefc3dc4d23b4b9d2b9189cfda6(eventobject, sectionNumber, rowNumber) {
        var self = this;
        LoadURLForIndustryJobs(eventobject.selectedRowItems);
    }
});
define("frmIndustryController", ["userfrmIndustryController", "frmIndustryControllerActions"], function() {
    var controller = require("userfrmIndustryController");
    var controllerActions = ["frmIndustryControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
