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
        "date":1442507999,
        "systolic":105,
        "diastolic":55
        },
        {
        "date":1442528449,
        "systolic":120,
        "diastolic":73
        },
        {
        "date":1442548168,
        "systolic":110,
        "diastolic":83
        },
        {
        "date":1442567283,
        "systolic":115,
        "diastolic":66
        },
        {
        "date":1442590374,
        "systolic":123,
        "diastolic":86
        },
        {
        "date":1442611236,
        "systolic":125,
        "diastolic":80
        },
        {
        "date":1442633549,
        "systolic":120,
        "diastolic":68
        },
        {
        "date":1442654025,
        "systolic":111,
        "diastolic":69
        },
        {
        "date":1442678995,
        "systolic":116,
        "diastolic":82
        },
        {
        "date":1442699449,
        "systolic":139,
        "diastolic":87
        },
        {
        "date":1442717809,
        "systolic":108,
        "diastolic":53
        },
        {
        "date":1442742596,
        "systolic":122,
        "diastolic":72
        },
        {
        "date":1442761466,
        "systolic":123,
        "diastolic":84
        },
        {
        "date":1442784390,
        "systolic":128,
        "diastolic":93
        },
        {
        "date":1442809317,
        "systolic":123,
        "diastolic":81
        },
        {
        "date":1442834484,
        "systolic":137,
        "diastolic":102
        },
        {
        "date":1442859438,
        "systolic":100,
        "diastolic":45
        },
        {
        "date":1442882349,
        "systolic":102,
        "diastolic":68
        },
        {
        "date":1442902613,
        "systolic":106,
        "diastolic":64
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