define({ 

 //Type your controller code here 
  
   /** onClick defined for btnComeBack **/
    btnOnClickComeBack: function(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmHome");
        ntf.navigate();
    }

 });