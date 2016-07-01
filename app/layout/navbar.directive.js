(function() {
  'use strict';

  angular
    .module('mutantApp.layout')
    .directive('xtNavbar', xtNavbar);

  function xtNavbar() {
    return {
      templateUrl: 'app/layout/navbar.html',
      restrict: 'E',
      controller: NavbarController,
      controllerAs: 'vm',
      scope: {}
    };
  }

  NavbarController.$inject = ['$state', 'authService'];
  function NavbarController($state, authService) {
    var vm = this;

    vm.logout = logout;
    vm.isLoggedIn = authService.isLoggedIn;
    vm.getDisplayName = getDisplayName;

    function logout() {
      authService.logout();
      $state.go('home');
    }

    function getDisplayName() {
      if (vm.isLoggedIn()) {
        return authService.auth.$getAuth().displayName;
      }
    }
  }
})();
