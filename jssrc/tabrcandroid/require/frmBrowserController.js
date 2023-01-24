define("userfrmBrowserController", {
    params: null,
    onNavigate: function(param) {
        params = param;
        this.view.brwWidget.requestURLConfig = param.urlConf;
        this.view.Head.topHeaderContainerBar.headerTitleLabel.text = param.title;
        this.view.Head.topHeaderContainerBar.Gear.onTouchStart = this.navigateToAbout;
    },
    onFormInit: function() {},
    navigateToAbout: function() {
        var ntf = new voltmx.mvc.Navigation("frmAbout");
        ntf.navigate(params);
    }
});
define("frmBrowserControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Browser_i01e63c2b77d4760be0377c528dd1d5d: function AS_Browser_i01e63c2b77d4760be0377c528dd1d5d(eventobject) {
        var self = this;
    },
    AS_Button_d1952297dcb445a1b65a2766a784bf9f: function AS_Button_d1952297dcb445a1b65a2766a784bf9f(eventobject) {
        var self = this;
    },
    AS_Button_ea013db5192b4405917f0c49461389d4: function AS_Button_ea013db5192b4405917f0c49461389d4(eventobject) {
        var self = this;
        var previousForm = kony.application.getPreviousForm();
        previousForm.show();
    },
    AS_Button_ea3e6b8ee83e4212b791e5f2339b87cb: function AS_Button_ea3e6b8ee83e4212b791e5f2339b87cb(eventobject) {
        var self = this;
    }
});
define("frmBrowserController", ["userfrmBrowserController", "frmBrowserControllerActions"], function() {
    var controller = require("userfrmBrowserController");
    var controllerActions = ["frmBrowserControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
