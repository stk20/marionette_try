App.BloodPressureView = Marionette.ItemView.extend({
	tagName: "li",
	className: "list-group-item",
	template: "#bp-list-item"
});

App.BloodPressureListView = Marionette.CollectionView.extend({
	tagName: "ul",
	className: "list-group",
	childView: App.BloodPressureView,
	viewComparator: "date"
});

App.TakeBloodPressureView = Marionette.ItemView.extend({
	template: "#take-bloodpressure",
	events: {
		"click .take-bp-btn": "clickedButton"
	},
	clickedButton: function(){
		App.bps.add({systolic:90, diastolic:80, date:"09/21/31"})
		console.log('Button clicked');
	}
});
