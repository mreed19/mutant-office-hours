(function() {
  'use strict';

  angular
    .module('mutantApp.account')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];
  function configFunction($stateProvider) {
    $stateProvider.state('account', {
      url: '/account',
      templateUrl: 'app/account/account.html',
      controller: 'AccountController',
      controllerAs: 'vm',
      resolve: {
        user: resolveUser
      }
    });
  }

  resolveUser.$inject = ['authService'];
  function resolveUser(authService) {
    return authService.auth.$requireSignIn();
  }
})();
