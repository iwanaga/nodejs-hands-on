'use strict';

angular.module('todoApp')
  .controller('TodoCtrl', function ($scope, socket, todoService) {
    $scope.todoList = [];
    $scope.newTodo = {};

    /* 一覧を取得 */
    todoService.query(function (data) {
      $scope.todoList = data;
      /* WebSocket で更新を同期する */
      socket.syncUpdates('todo', $scope.todoList);
    });

    /* 作成 */
    $scope.saveTodo = function () {
      todoService.save($scope.newTodo, function () {
        /* 次の入力をスムーズにするためフォームをクリア */
        $scope.newTodo.task = '';
      });
    };

    /* 更新 */
    $scope.updateTodo = function (todo) {
      todoService.put(todo);
    };
  });
