function initializeMobileFabricService() {

  kony.print("Inside initializeMobileFabricService");
  kony.application.showLoadingScreen("sknLoading", "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
  var KonyFabricEnv = "PROD";
  var appkey = "";
  var appsecret = "";
  var service_url = "";
  switch(KonyFabricEnv) {
    case "DEV":
      appkey = "8918f8fed8bad404f81797120070451a";
      appsecret = "edee542f5b97beb849d38e113feea09f";
      service_url = "https://mobile-dev.jfs.ohio.gov/authService/100000002/appconfig";
      break;      
    case "SYS":
      appkey = "8918f8fed8bad404f81797120070451a";
      appsecret = "edee542f5b97beb849d38e113feea09f";
      service_url = "https://mobile-sys.jfs.ohio.gov/authService/100000002/appconfig";
      break;      
      
    case "UAT":
      appkey = "8918f8fed8bad404f81797120070451a";
      appsecret = "edee542f5b97beb849d38e113feea09f";
      service_url = "https://mobile-uat.jfs.ohio.gov/authService/100000002/appconfig";
      break;      
    case "PROD":
      appkey = "8918f8fed8bad404f81797120070451a";
      appsecret = "edee542f5b97beb849d38e113feea09f";
      service_url = "https://mobile.jfs.ohio.gov/authService/100000002/appconfig";
      break;      
  }
  client = new kony.sdk();
  kony.print("Inside client initiated...");
  if(isNetworkAvailable()) {
    client.init(appkey, appsecret, service_url, function(response) {
      kony.print("Mobile Fabric has been successfully initiated.");
      kony.print("Inside Mobile Fabric successResponse: " + JSON.stringify(response));     
      kony.application.dismissLoadingScreen();
    }, function(response) {
      try {
        kony.print("Mobile Fabric has failed to initialize");
        kony.print("Inside Mobile Fabric errorResponse: " + JSON.stringify(response));
        kony.application.dismissLoadingScreen();
      } catch (e) {
        log("Exception is errorcallback: " + e);
      }
    });
  } else {
    kony.print("inside no internet connecion");
    kony.application.dismissLoadingScreen();
    alert("No Internet Connection");
  }
}
function isNetworkAvailable() {
  kony.print("network type - all:"+kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY));
  return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
}