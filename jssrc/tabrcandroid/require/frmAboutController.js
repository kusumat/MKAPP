define("userfrmAboutController", {
    params: null,
    onNavigate: function(param) {
        params = param;
        this.view.TopHead.topHeaderContainerBar.headerTitleLabel.text = param.title;
        populateAbout(this.view, param.title);
        this.view.RemoveItem.onTouchStart = this.back;
    },
    onFormInit: function() {},
    back: function() {
        var ntf = new voltmx.mvc.Navigation("frmBrowser");
        ntf.navigate(params);
    }
});
define("frmAboutControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_cb09390c30474315b444bf2e2aa693ef: function AS_Button_cb09390c30474315b444bf2e2aa693ef(eventobject) {
        var self = this;
        return loadAbout.call(this);
    },
    AS_Button_da184cec1c42466aac59a65061787ed8: function AS_Button_da184cec1c42466aac59a65061787ed8(eventobject) {
        var self = this;
        voltmx.application.openURL('http://ohiolmi.com');
    }
});
define("frmAboutController", ["userfrmAboutController", "frmAboutControllerActions"], function() {
    var controller = require("userfrmAboutController");
    var controllerActions = ["frmAboutControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
