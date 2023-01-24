//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "OhioLMI",
    appName: "OhioLMIKRA",
    appVersion: "5.8.2",
    isturlbase: "https://odjfs-uat.hclvoltmx.net/services",
    isDebug: false,
    isMFApp: true,
    appKey: "e7740da3607d711728c6e50fe13e4e36",
    appSecret: "e2e09619b1042deb274f287f7bf122c0",
    serviceUrl: "https://100000057.auth.hclvoltmx.net/appconfig",
    svcDoc: {
        "selflink": "https://100000057.auth.hclvoltmx.net/appconfig",
        "app_version": "1.0",
        "messagingsvc": {
            "appId": "28b47cd3-63aa-4d71-bb6b-4f4400b56156",
            "url": "https://odjfs-uat.messaging.hclvoltmx.net/api/v1"
        },
        "integsvc": {
            "_internal_logout": "https://odjfs-uat.hclvoltmx.net/services/IST"
        },
        "service_doc_etag": "000001850CD517D0",
        "appId": "28b47cd3-63aa-4d71-bb6b-4f4400b56156",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "OhioLMI",
        "reportingsvc": {
            "session": "https://odjfs-uat.hclvoltmx.net/services/IST",
            "custom": "https://odjfs-uat.hclvoltmx.net/services/CMS"
        },
        "baseId": "b125b722-edca-4653-bf8b-bceddab8d763",
        "app_default_version": "1.0",
        "services_meta": {}
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
};
sessionID = "";

function setAppBehaviors() {
    voltmx.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        isMVC: true,
        APILevel: 9200,
        isCompositeApp: false
    });
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    voltmx.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        preappinit: applicationController.AS_AppEvents_a3961043c8934fc9951321824ec39c84,
        postappinit: function(eventObj) {
            return applicationController.postAppInitCallBack(eventObj);
        },
        showstartupform: function() {
            new voltmx.mvc.Navigation("frmMain").navigate();
        }
    });
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function loadResources() {
    _kony.mvc.initCompositeApp(false);
    globalhttpheaders = {};
    voltmx.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    voltmx.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    voltmx.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    voltmx.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
voltmx.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
voltmx.print = function() {
    return;
};
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
voltmx.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);