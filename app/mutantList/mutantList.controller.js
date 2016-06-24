(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject = ['mutantService', 'textMessageService', 'user'];
  function MutantListController(mutantService, textMessageService, user) {
    var vm = this;

    vm.addMutant = addMutant;
    vm.deleteMutant = deleteMutant;
    vm.toggleComplete = toggleComplete;
    vm.sendText = sendText;
    vm.mutants = mutantService.mutantsByUser(user.uid);
    vm.newMutant = new mutantService.Mutant();

    function addMutant() {
      vm.mutants.$add(vm.newMutant);
      vm.newMutant = new mutantService.Mutant();
    }

    function deleteMutant(mutant) {
      vm.mutants.$remove(mutant);
    }

    function toggleComplete(mutant) {
      vm.mutants.$save(mutant);
    }

    function sendText(mutant) {
      textMessageService.sendText(mutant, vm.mutants);
    }
  }
})();
