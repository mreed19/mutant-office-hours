(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$state', 'authService'];
  function AuthController($state, authService) {
    var vm = this;

    vm.register = register;
    vm.login = login;
    vm.logout = logout;
    vm.isLoggedIn = authService.isLoggedIn;

    vm.user = {
      email: '',
      password: ''
    };

    function register(user) {
      return authService.register(user)
        .then(function() {
          vm.login(user);
        });
    }

    function login(user) {
      return authService.login(user)
      .then(function() {
        $state.go('mutantList');
      });
    }

    function logout() {
      authService.logout();
      $state.go('home');
    }
  }
})();
