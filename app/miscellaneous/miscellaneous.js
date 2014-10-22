(function() {
  "use strict";

  function config($stateProvider) {
    $stateProvider
      .state('miscellaneous', {
        url: 'miscellaneous',
        abstract: true,
        views: {
          'header': {
            templateUrl: 'app/common/header.tpl.html',
            controller: 'HeaderCtrl'
          }
        }
      })
      .state('root.miscellaneous', {
        url: '/miscellaneous',
        views: {
          '@': {
            templateUrl: 'app/miscellaneous/miscellaneous.tpl.html',
            controller: 'MiscellaneousCtrl as miscellaneous'
          }
        }
      });
  }

  function miscellaneousCtrl() {
    /*jshint validthis:true */
    var miscellaneous = this;
    miscellaneous.data = {};
    miscellaneous.data.percentage = 10;
  }

  angular.module('miscellanoeous', [])
    .config(config)
    .controller('MiscellaneousCtrl', miscellaneousCtrl);
})();
