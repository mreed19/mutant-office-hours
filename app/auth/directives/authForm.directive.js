(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .directive('xtAuthForm', xtAuthForm);

  function xtAuthForm() {
    return {
      templateUrl: 'app/auth/directives/authForm.html',
      restrict: 'E'
    };
  }
})();
