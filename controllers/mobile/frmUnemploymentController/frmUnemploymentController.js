define({

  onNavigate: function (param) {

    loadCounties(this.view);
    this.view.TopHead.topHeaderContainerBar.headerTitleLabel.text = 'County Unemployment Rate';

  },
  onFormInit: function () {
  },
  postShow: function () {

  }

});