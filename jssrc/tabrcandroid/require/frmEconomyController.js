define("userfrmEconomyController", {
    onNavigate: function(param) {
        loadEconomy(this.view);
        this.view.TopHead.topHeaderContainerBar.headerTitleLabel.text = 'SUBSTATE ECONOMY';
    },
    onFormInit: function() {},
    postShow: function() {}
});
define("frmEconomyControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Segment_g39c7d684cd544bd8b482d952e7fb960: function AS_Segment_g39c7d684cd544bd8b482d952e7fb960(eventobject, sectionNumber, rowNumber) {
        var self = this;
        loadURLEconomy(eventobject.selectedRowItems);
    }
});
define("frmEconomyController", ["userfrmEconomyController", "frmEconomyControllerActions"], function() {
    var controller = require("userfrmEconomyController");
    var controllerActions = ["frmEconomyControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
