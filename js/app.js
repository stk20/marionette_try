App.on("before:start", function(){
	var RegionContainer = Marionette.LayoutView.extend({
		el:"#app-container",
		regions: {
			main: "#main-region"
		}
	});
	App.regions = new RegionContainer();
});

App.on("start", function(){
	App.bps = new App.BloodPressureCollection(randomBpData());
	App.controller = new App.AppController();
	App.router = new App.AppRouter({
		controller: App.controller
	});
	App.controller.showBloodPressureList();
	Backbone.history.start();
});
App.start();