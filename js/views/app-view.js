App.BloodPressureView = Marionette.ItemView.extend({
	tagName: "li",
	className: "list-group-item",
	template: "#bp-list-item",
	events: {
		"click": "editView"
	},
	editView: function() {
		App.controller.showBloodPressureEdit(this.model);
	}
});

App.BloodPressureListView = Marionette.CollectionView.extend({
	tagName: "ul",
	className: "list-group",
	childView: App.BloodPressureView,
	viewComparator: "date"
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
			date: $("#date-edit").val()
		});
		if (!App.bps.contains(this.model)) {
			App.bps.add(this.model);
		}
		App.controller.showBloodPressureList();
	},
	cancelEdit: function() {
		App.controller.showBloodPressureList();
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
			date: date.toString()
		});
		App.controller.showBloodPressureEdit(reading);
	}
});

App.BloodPressureChartView = Marionette.CollectionView.extend({
    sysData:[],
    diaData:[],
    attributes: {
    	id: "graph-container",
    	style: "width:250px;height:250px;padding:100px"
    },
    initialize: function(){
        this.listenTo(this.collection, "add", this.render);
        this.listenTo(this.collection, 'update', this.render);                
        this.listenTo(this.collection, "change", this.render);
        this.render();
    },
    renderGraph: function(){
        this.sysData = [];
        this.diaData = [];
        this.updateChartData();
        $.plot(this.el, [this.sysData], {
            xaxis: {mode: "time"}
        });
        return this;
    },
    updateChartData: function(){
        this.collection.each(function(bloodPressure){
            var date = new Date(bloodPressure.get('date'));
            var utcDate = date.getTime();
            this.sysData.push([utcDate, bloodPressure.get('systolic')]);
            this.diaData.push([utcDate, bloodPressure.get('diastolic')]);
        }, this);
    }
});
