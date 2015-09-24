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
  }
});