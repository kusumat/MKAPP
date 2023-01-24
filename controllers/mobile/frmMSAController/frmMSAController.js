define({

  onNavigate: function (param) {

    loadMSA(this.view);
    this.view.TopHead.topHeaderContainerBar.headerTitleLabel.text = 'MSA (Metropolitan Statistical Areas) Unemployment Rate';

  },
  onFormInit: function () {
  },
  postShow: function () {

  }

});