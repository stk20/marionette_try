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
	App.bps = new App.BloodPressureCollection([
		{
			systolic: 120,
			diastolic: 80,
			date: "07/31/2015"
		},
		{
			systolic: 130,
			diastolic: 85,
			date: "08/05/2015"
		},
		{
			systolic: 111,
			diastolic: 70,
			date: "08/02/2015"
		}
	]);
	App.controller = new App.AppController();
	App.router = new App.AppRouter({
		controller: App.controller
	});
	App.controller.showBloodPressureList();
	Backbone.history.start();
});
App.start();