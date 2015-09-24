App.AppRouter = Marionette.AppRouter.extend({
  appRoutes: {
    '': 'showTakePressure',
    'History': 'showBloodPressureList'
  }
});