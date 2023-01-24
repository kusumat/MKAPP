/*****************************************************************
*	Name    : Settings
*	Author  : Mehmet Turkoglu
*	Purpose : Push Notification Settings
******************************************************************/
var KMSPROP = {};

function setPustNotificationCallbacks() {
  var pushNotificationsCallbacks = {
    onsuccessfulregistration: regSuccessCallback,
    onfailureregistration: regFailureCallback,
    onlinenotification: onlinePushNotificationCallback,
    offlinenotification: offlinePushNotificationCallback,
    onsuccessfulderegistration: deregSuccessCallback,
    onfailurederegistration: deregFailureCallback
  };
  //#ifdef iphone
  kony.application.setApplicationBadgeValue("0");
  //#endif
  //#ifdef ipad
  kony.application.setApplicationBadgeValue("0");
  //#endif

  try {
    kony.push.setCallbacks(pushNotificationsCallbacks);
  } 
  catch (err) {
    kony.print("KMS Module" + JSON.stringify(err));
  }
}

function SetiOSPushNotifications(frmSettings){  
  var PushNotification = frmSettings.SwitchPushNotification.selectedIndex;  
  kony.store.setItem("PushNotification", PushNotification);
  KMSPROP.osType = "iphone";
  if (frmSettings.SwitchPushNotification.selectedIndex == 1)
  {        
    var configInfo = {};
    var UI = kony.push.deRegister(configInfo);
  }
  else
  {
    var config = [0,1,2];
    kony.push.register(config);
  }
}

function SetAndroidPushNotifications(frmSettings){
  PushNotification = frmSettings.SwitchPushNotification.selectedIndex;
  kony.store.setItem("PushNotification", PushNotification);
  KMSPROP.osType = "android";
  try {
    if (frmSettings.SwitchPushNotification.selectedIndex == 1)
    {    
      var configInfo = {};
      var UI = kony.push.deRegister(configInfo);
      kony.print("OhioLMI Android deRegister");
    }
    else
    {               
      var config = {senderid:"913111013533"}; //Firebase Cloud Services
      kony.push.register(config);  
//       alert("Attempt To Register");
      kony.print("OhioLMI Android Register");
    }
  }
  catch (err) {
    alert(JSON.stringify(err));
  }
}

function successCallbackForSubscribe(res) {  
  kony.application.dismissLoadingScreen();
  kony.print(JSON.stringify(res));
}

function failureCallbackForSubscribe(err) {
  kony.store.removeItem("isRegisteredForKMS");
  kony.application.dismissLoadingScreen();
  kony.print(JSON.stringify(err));
  kony.print("Subscription Failed.");
}    

function regSuccessCallback(regId) {
  kony.print("inside registrationSuccess() and Registration Successful : "+JSON.stringify(regId));	
  subscribeMFMessaging(regId,kony.os.deviceInfo().name.toLowerCase());   
  //   if(kony.os.deviceInfo().name == "iPhone") {
  //    subscribeMFMessaging(regId,"iphone");    
  //   } else { 
  //     subscribeMFMessaging(regId,"android");
  //   }
}

function regFailureCallback(errormsg) {
  kony.print("Registration Failed ");
  kony.print(errormsg);
}

function onlinePushNotificationCallback(pushMsg) {
  kony.print("inside Received online push message: "+JSON.stringify(pushMsg));
  if(kony.os.deviceInfo().name === "android") {
    basicConfig = {message: pushMsg.content , alertType:constants.ALERT_TYPE_INFO, alertTitle: pushMsg.title , yesLabel:"OK", alertHandler: null, alertIcon: "ohiolmi_icon.png"};  
  } else {
    basicConfig = {message: pushMsg.alert.body , alertType:constants.ALERT_TYPE_INFO, alertTitle: pushMsg.alert.title , yesLabel:"OK", alertHandler: null};  
  }
  var platformSpecificProperties = {};
  kony.ui.Alert(basicConfig, platformSpecificProperties);
}

function offlinePushNotificationCallback(pushMsg) {
  kony.print("inside Received offline push message: "+JSON.stringify(pushMsg));	
  if(kony.os.deviceInfo().name === "android") {
    basicConfig = {message: pushMsg.content , alertType:constants.ALERT_TYPE_INFO, alertTitle: pushMsg.title , yesLabel:"OK", alertHandler: null, alertIcon: "ohiolmi_icon.png"};  
  } else {
    basicConfig = {message: pushMsg.alert.body , alertType:constants.ALERT_TYPE_INFO, alertTitle: pushMsg.alert.title , yesLabel:"OK", alertHandler: null};  
  }
  var platformSpecificProperties = {};
  kony.ui.Alert(basicConfig, platformSpecificProperties);
}

function deregSuccessCallback() {
  kony.print("Unregisterd Succesfully!!");
  unsubscribeMFMessaging();
}

function deregFailureCallback(errormsg) {
  kony.print("Unregistration Failed!!" + errormsg);
}

function subscribeMFMessaging(regId,ostype) {
  kony.print("inside subscribeMFMessaging()");
  messagingClient = "";
  var deviceID = kony.os.deviceInfo().deviceid;
  var ufID = "ohiolmi@jfs.ohio.gov";
  try {
    messagingClient = VMXFoundry.getMessagingService();
  } catch(exception) {
    kony.print("Exception in initializing messagingClient: " + exception.message);
  }
  kony.print("messagingClient: " + JSON.stringify(messagingClient));
  messagingClient.register(ostype,deviceID, regId, ufID,
                           function(response) {
    // Displaying the service call status on the screen along with previous log 
    kony.print("Subscription is successful & KSID: "+response.id);
    kony.store.setItem("ksid", response.id);
    kony.store.setItem("PushNotifications", "ON");
    kony.print("Response from subscription service: " + JSON.stringify(response));
  },
                           function(error) {
    kony.print("Subscription Failed: " + JSON.stringify(error));
  }
                          );
}
function unsubscribeMFMessaging() {
  kony.print("inside unsubscribeMFMessaging");
  try {
    messagingClient = VMXFoundry.getMessagingService();
  } catch(exception) {
    kony.print("Exception in initializing messagingClient (unsubscribeMFMessaging()): " + exception.message);
  }
  //kony.print("messagingClient: " + JSON.stringify(messagingClient));
  messagingClient.unregister(
    function(response){
      kony.print("Unsubscription Success for KSID: " + response.id);
      kony.print("Response from unsubscribe service " +JSON.stringify(response));
      kony.store.setItem("ksid", "");
      kony.store.setItem("PushNotifications", "OFF");
    },
    function(error) {
      kony.print("Unsubscribe Failed: " +JSON.stringify(error)); 
    }
  );
}