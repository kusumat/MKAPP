define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_AppEvents_a3961043c8934fc9951321824ec39c84: function AS_AppEvents_a3961043c8934fc9951321824ec39c84(eventobject) {
        var self = this;
        return setPustNotificationCallbacks.call(this);
    },
    appInit: function(params) {
        skinsInit();
        voltmx.mvc.registry.add("com.ohio.lmi.Head", {
            "viewName": "Head",
            "controllerName": "HeadController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.ohio.lmi",
            "classname": "Head",
            "name": "com.ohio.lmi.Head"
        });
        voltmx.mvc.registry.add("com.ohio.lmi.MainHead", {
            "viewName": "MainHead",
            "controllerName": "MainHeadController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.ohio.lmi",
            "classname": "MainHead",
            "name": "com.ohio.lmi.MainHead"
        });
        voltmx.mvc.registry.add("com.ohio.lmi.TopHead", {
            "viewName": "TopHead",
            "controllerName": "TopHeadController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.ohio.lmi",
            "classname": "TopHead",
            "name": "com.ohio.lmi.TopHead"
        });
        voltmx.mvc.registry.add("com.ohio.lmi.foot.Foot", {
            "viewName": "Foot",
            "controllerName": "FootController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.ohio.lmi.foot",
            "classname": "Foot",
            "name": "com.ohio.lmi.foot.Foot"
        });
        voltmx.mvc.registry.add("flxSampleRowTemplate", {
            "viewName": "flxSampleRowTemplate",
            "controllerName": "flxSampleRowTemplateController"
        });
        voltmx.mvc.registry.add("flxSectionHeaderTemplate", {
            "viewName": "flxSectionHeaderTemplate",
            "controllerName": "flxSectionHeaderTemplateController"
        });
        voltmx.mvc.registry.add("frmAbout", {
            "viewName": "frmAbout",
            "controllerName": "frmAboutController"
        });
        voltmx.mvc.registry.add("frmBrowser", {
            "viewName": "frmBrowser",
            "controllerName": "frmBrowserController"
        });
        voltmx.mvc.registry.add("frmEconomy", {
            "viewName": "frmEconomy",
            "controllerName": "frmEconomyController"
        });
        voltmx.mvc.registry.add("frmIndustry", {
            "viewName": "frmIndustry",
            "controllerName": "frmIndustryController"
        });
        voltmx.mvc.registry.add("frmLabor", {
            "viewName": "frmLabor",
            "controllerName": "frmLaborController"
        });
        voltmx.mvc.registry.add("frmMSA", {
            "viewName": "frmMSA",
            "controllerName": "frmMSAController"
        });
        voltmx.mvc.registry.add("frmMain", {
            "viewName": "frmMain",
            "controllerName": "frmMainController"
        });
        voltmx.mvc.registry.add("frmSettings", {
            "viewName": "frmSettings",
            "controllerName": "frmSettingsController"
        });
        voltmx.mvc.registry.add("frmUnemployment", {
            "viewName": "frmUnemployment",
            "controllerName": "frmUnemploymentController"
        });
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new voltmx.mvc.Navigation("frmMain").navigate();
    }
});