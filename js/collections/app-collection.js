App.BloodPressureCollection = Backbone.Collection.extend({
	model: App.BloodPressure,

	// Latest measurements on top
	comparator: function(bloodPressure) {
		return -bloodPressure.get("date");
	}
});