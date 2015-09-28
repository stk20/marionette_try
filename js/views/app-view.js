App.BloodPressureView = Marionette.ItemView.extend({
	tagName: "tr",
	template: "#row-template",
	events: {
		"click": "editView"
	},
	editView: function() {
		App.controller.showBloodPressureEdit(this.model);
	}
});

App.BloodPressureListView = Marionette.CompositeView.extend({
	childView: App.BloodPressureView,
	childViewContainer: "tbody",
	template: "#table-template"
	// tagName: "ul",
	// className: "list-group",
	// childView: App.BloodPressureView,
	// viewComparator: "date"
});

App.BloodPressureEditView = Marionette.ItemView.extend({
	tagName: "form",
	className: "form-inline",
	template: "#bp-edit-item",
	events: {
		"click #bp-save": "saveEdit",
		"click #bp-cancel": "cancelEdit"
	},
	saveEdit: function() {
		this.model.set({
			systolic: $("#systolic-edit").val(),
			diastolic: $("#diastolic-edit").val(),
			date: this.getDate()
		});
		if (!App.bps.contains(this.model)) {
			App.bps.add(this.model);
		}
		App.controller.showBloodPressureList();
	},
	cancelEdit: function() {
		App.controller.showBloodPressureList();
	},
	getDate: function() {
		var d = new Date($("#date-edit").val() + ' ' + $("#time-edit").val());
		return d.getTime();
	}
});

App.TakeBloodPressureView = Marionette.ItemView.extend({
	template: "#take-bloodpressure",
	events: {
		"click .take-bp-btn": "clickedButton"
	},
	clickedButton: function(){
		var date = new Date();
		var reading = new App.BloodPressure({
			systolic: Math.floor((Math.random() * 30) + 105),
			diastolic: Math.floor((Math.random() * 30) + 60),
			date: date.getTime()
		});
		App.controller.showBloodPressureEdit(reading);
	}
});

App.BloodPressureChartView = Marionette.ItemView.extend({
	template: "#bloodpressure-chart",
    sysData:[],
    diaData:[],
    xMin: null,
    events: {
		"click #year-sort": "yearSort",
		"click #month-sort": "monthSort",
		"click #week-sort": "weekSort"
	},
    initialize: function(){
        this.listenTo(this.collection, "add", this.render);
        this.listenTo(this.collection, 'update', this.render);                
        this.listenTo(this.collection, "change", this.render);
    },
    renderGraph: function(){
    	var self = this;
        self.sysData = [];
        self.diaData = [];
        self.updateChartData();
        var fullData = [{data:self.sysData, label:"Systolic"}, {data:self.diaData, label:"Diastolic"}]
        $.plot($(".graph-container"), fullData, {
            xaxis: {mode: "time",  timeformat: "%m/%d", min: self.xMin},
            points: {show: true},
            lines: {show: true},
            series: {shadowSize: 5},
            legend: {container: $("#legend-container")},
        });
        return self;
    },
    updateChartData: function(){
    	if (this.xMin === null) {
    		this.xMin = this.collection.last().get("date");
    	}
        this.collection.each(function(bloodPressure){
            this.sysData.push([bloodPressure.get('date'), bloodPressure.get('systolic')]);
            this.diaData.push([bloodPressure.get('date'), bloodPressure.get('diastolic')]);
        }, this);
    },
    weekSort: function() {
    	this.xMin = (new Date().getTime() - (1000*60*60*24*7));
    	this.renderGraph();
    },
    monthSort: function() {
    	this.xMin = (new Date().getTime() - (1000*60*60*24*31));
    	this.renderGraph();
    },
    yearSort: function() {
    	this.xMin = (new Date().getTime() - (1000*60*60*24*365));
    	this.renderGraph();
    }

});
