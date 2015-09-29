/*
 * Controller used by the main router.
 * ToDo: Marionette controllers are deprecated... use plain object?
 */
App.AppController = Marionette.Controller.extend({
  initialize: function() {
    Backbone.on("view:change", this.onViewChange, this);
  },

  onViewChange: function(viewName, options) {
    if(window[viewName] === undefined) {
      alert("Undefined view: " + viewName);
    }

    // Call the current view's beforeNextView callback if available
    if(app.main.currentView && _.isFunction(app.main.currentView.beforeNextView)) {
      app.main.currentView.beforeNextView();
    }

    app.main.show(new window[viewName](options));
  },

  // Display 'Take Measurement' Screen
  showTakePressure: function() { 
    var view = new App.TakeBloodPressureView();
    App.regions.main.show(view);
  },
  
  // Display Table of previous measurements
  showBloodPressureTable: function(){
    var view = new App.BloodPressureListView({
      collection: App.bpCollection
    });
    App.regions.main.show(view);
  },

  // Edit a Measurement (both just captured, and previous measurements)
  showBloodPressureEdit: function(bp){
    var view = new App.BloodPressureEditView({
      model: bp
    });
    App.regions.main.show(view);
  },

  // Display a graphical representation of the measurements
  showBloodPressureChart: function(){
    var view = new App.BloodPressureChartView({
      collection: App.bpCollection
    });
    App.regions.main.show(view);
    view.renderGraph();
  }
});