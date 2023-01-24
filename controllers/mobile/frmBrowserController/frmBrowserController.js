define({
  params : null,
  onNavigate: function (param) {
	params = param;
    this.view.brwWidget.requestURLConfig = param.urlConf;
    this.view.Head.topHeaderContainerBar.headerTitleLabel.text = param.title;
    
    this.view.Head.topHeaderContainerBar.Gear.onTouchStart = this.navigateToAbout;

  },
  onFormInit: function () {
  },
  navigateToAbout: function () {
    
    var ntf = new voltmx.mvc.Navigation("frmAbout");
    ntf.navigate(params);
  }

});