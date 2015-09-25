App.AppRouter = Marionette.AppRouter.extend({
  appRoutes: {
    '': 'showTakePressure',
    'Home': 'showTakePressure',
    'History': 'showBloodPressureList',
    'Edit': 'showBloodPressureEdit',
    'Chart': 'showBloodPressureChart'
  }
});