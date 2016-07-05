(function() {
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('firebaseStorageService', firebaseStorageService);

  firebaseStorageService.$inject = [];
  function firebaseStorageService() {
    var service = {};

    return service;
  }
})();
