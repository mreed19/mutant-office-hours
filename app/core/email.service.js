(function() {
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('emailService', emailService);

  emailService.$inject = [];
  function emailService() {
    var service = {};

    return service;
  }
})();
