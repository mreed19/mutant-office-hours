(function() {
  'use strict';

  angular
    .module('mutantApp.account')
    .controller('AccountController', AccountController);

  AccountController.$inject = ['user'];
  function AccountController(user) {
    var vm = this;
    vm.user = user;
  }
})();
