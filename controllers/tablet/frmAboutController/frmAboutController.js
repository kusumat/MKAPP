define({
  params : null,
  onNavigate: function (param) {
   
	params = param;
    this.view.TopHead.topHeaderContainerBar.headerTitleLabel.text = param.title;
	populateAbout(this.view, param.title);
    this.view.RemoveItem.onTouchStart = this.back;
    
  },
  
  onFormInit: function () {
  },
  
  back: function () {
	var ntf = new voltmx.mvc.Navigation("frmBrowser");
    ntf.navigate(params);
  }

});