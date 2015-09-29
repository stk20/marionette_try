// Not 100% sure if I need this 'ajax links initializer'...
// I guess the alternative is adding the #'s in the index.html routes
App.AppRouter = Marionette.AppRouter.extend({
    initialize: function (){
		// setup the ajax links for the html5 push navigation
		$("body").on("click","a:not(a[data-bypass])",function(e){
		        // block the default link behavior
		        e.preventDefault();
		        // take the href of the link clicked
		        var href = $(this).attr("href");
		        // pass this link to Backbone
		        Backbone.history.navigate(href,true);
		});
	},
 	appRoutes: {
    	'': 'showTakePressure',
    	'home': 'showTakePressure',
    	'table': 'showBloodPressureTable',
    	'edit/:id': 'showBloodPressureEdit',
    	'chart': 'showBloodPressureChart'
  	}
});