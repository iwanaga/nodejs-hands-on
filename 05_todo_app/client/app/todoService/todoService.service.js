'use strict';

angular.module('todoApp')
  .service('todoService', function ($resource) {
    return $resource('/api/todos/:id', { id: '@_id' }, {
      put: { method: 'PUT' }
    });
  });
