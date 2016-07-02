(function() {
  'use strict';

  angular.module('mutantApp', [
    // Angular modules
    'ui.router',

    // Third-party modules
    'firebase',
    'ui.gravatar',

    // Custom modules
    'mutantApp.home',
    'mutantApp.mutantList',
    'mutantApp.auth',
    'mutantApp.core',
    'mutantApp.layout',
    'mutantApp.account'
  ])
  .config(configFunction)
  .run(runFunction);

  configFunction.$inject = ['$urlRouterProvider'];
  function configFunction($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

  runFunction.$inject = ['$rootScope', '$state'];
  function runFunction($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      if (error === 'AUTH_REQUIRED') {
        $state.go('login');
      }
    });
  }
})();
