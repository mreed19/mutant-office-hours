(function() {
  'use strict';

  angular
    .module('mutantApp.account')
    .controller('AccountController', AccountController);

  AccountController.$inject = ['$state', 'user', 'authService'];
  function AccountController($state, user, authService) {
    var vm = this;

    vm.user = user;
    vm.picture = {};

    vm.updateUserObject = {
      name: user.displayName
    };
    vm.updateUser = updateUser;

    function updateUser() {
      console.log(vm.picture);
      authService.updateUser(vm.updateUserObject).then(function() {
        $state.go($state.current, {}, {reload: true});
      });
    }
  }
})();
