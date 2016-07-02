(function() {
  'use strict';

  angular
    .module('mutantApp.account')
    .controller('AccountController', AccountController);

  AccountController.$inject = ['user', 'authService'];
  function AccountController(user, authService) {
    var vm = this;

    vm.user = user;
    vm.user.name = user.displayName;
    vm.updateUser = updateUser;

    function updateUser() {
      authService.updateUser(vm.user);
    }
  }
})();
