App.BloodPressureCollection = Backbone.Collection.extend({
	model: App.BloodPressure,
	comparator: function(bloodPressure) {
		return -bloodPressure.get("date");
	}
});