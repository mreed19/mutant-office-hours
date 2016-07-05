(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .factory('authService', authService);

  authService.$inject = ['$firebaseAuth', 'firebaseDataService', 'mutantService'];
  function authService($firebaseAuth, firebaseDataService, mutantService) {
    var auth = $firebaseAuth();

    var service = {
      auth: auth,
      register: register,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
      sendWelcomeEmail: sendWelcomeEmail,
      addName: addName,
      forgotPassword: forgotPassword
      updateUser: updateUser
    };

    return service;

    ///////////////

    function register(user) {
      return auth.$createUserWithEmailAndPassword(user.email, user.password);
    }

    function login(user) {
      return auth.$signInWithEmailAndPassword(user.email, user.password);
    }

    function logout() {
      mutantService.reset();
      auth.$signOut();
    }

    function isLoggedIn() {
      return auth.$getAuth();
    }

    function sendWelcomeEmail(emailAddress) {
      firebaseDataService.emails.push({
        emailAddress: emailAddress
      });
    }

    function addName(name) {
      return auth.$getAuth().updateProfile({displayName: name});
    }

    function forgotPassword(userEmail) {
      var auth = firebase.auth();

      auth.sendPasswordResetEmail(userEmail)
      .then(function() {
        console.log('email sent');
      }, function (error) {
        console.log(error);
      });

    }

    function updateUser(user) {
      return auth.$getAuth().updateProfile({displayName: user.name});
    }
  }
})();
