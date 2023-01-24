define({ 

 //Type your controller code here 
  
   /** onClick defined for btnClickMe **/
    btnOnClickMe: function(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmIndex");
        ntf.navigate();
    }

 });