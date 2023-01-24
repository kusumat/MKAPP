define({

  onNavigate: function (param) {

    loadEconomy(this.view);
    this.view.TopHead.topHeaderContainerBar.headerTitleLabel.text = 'SUBSTATE ECONOMY';

  },
  onFormInit: function () {
  },
  postShow: function () {

  }

});