(function() {
  'use script';

  angular
    .module('mutantApp.core')
    .directive('autofocus', autofocus);

  autofocus.$inject = ['$timeout'];
  function autofocus($timeout) {
    return {
      restrict: 'A',
      link: function($scope, $element) {
        $timeout(function() {
          $element[0].focus();
        });
      }
    };
  }
})();
