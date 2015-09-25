App.AppController = Marionette.Controller.extend({
  showTakePressure: function() {
    var view = new App.TakeBloodPressureView();
    App.regions.main.show(view);
  },
  
  showBloodPressureList: function(){
    var view = new App.BloodPressureListView({
      collection: App.bps
    });
    App.regions.main.show(view);
  },

  showBloodPressureEdit: function(bp){
    var view = new App.BloodPressureEditView({
      model: bp
    });
    App.regions.main.show(view);
  },

  showBloodPressureChart: function(){
    var view = new App.BloodPressureChartView({
      collection: App.bps
    });
    App.regions.main.show(view);
  }
});