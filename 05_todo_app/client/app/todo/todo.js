'use strict';

angular.module('todoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('todo', {
        url: '/',
        templateUrl: 'app/todo/todo.html',
        controller: 'TodoCtrl'
      });
  });
