angular.module('app', ['ionic', 'app.controllers', 'app.services', 'LocalForageModule'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(['$compileProvider', function($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|app):/);
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|app):/);
    }
])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('index', {
      url: '/index',
      templateUrl: 'templates/index.tpl',
      controller: 'SalatCtrl'

    })

    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.tpl'
    })

    .state('about/krossware', {
      url: '/about/krossware',
      templateUrl: 'templates/about_kw.tpl'
    })

    .state('help', {
      url: '/help',
      templateUrl: 'templates/help.tpl'
    })

    .state('settings', {
      url: '/settings',
      templateUrl: 'templates/settings.tpl',
      controller: 'SettingsCtrl'
    })

    .state('about/licenses', {
      url: '/about/licenses',
      templateUrl: 'templates/about_osi.tpl'
    });

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/index');
  

});
