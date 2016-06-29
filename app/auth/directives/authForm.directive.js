(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .directive('xtAuthForm', xtAuthForm);

  function xtAuthForm() {
    return {
      templateUrl: 'app/auth/directives/authForm.html',
      restrict: 'E',
      controller: AuthFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        submitFunction: '&',
        formName: '@'
      }
    };
  }

  AuthFormController.$inject = [];
  function AuthFormController() {
    var vm = this;

    vm.user = {
      email: '',
      password: ''
    };
  }
})();
