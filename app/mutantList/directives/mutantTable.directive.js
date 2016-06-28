(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .directive('xtMutantTable', xtMutantTable);

  function xtMutantTable() {
    return {
      templateUrl: 'app/mutantList/directives/mutantTable',
      restrict: 'E'
    }
  }
})();
