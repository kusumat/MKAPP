define({

  onNavigate: function (param) {

    loadIndustryJobs(this.view);
    this.view.TopHead.topHeaderContainerBar.headerTitleLabel.text = 'INDUSTRY JOBS';

  },
  onFormInit: function () {
  },
  postShow: function () {

  }

});