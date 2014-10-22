(function() {
  "use strict";

  function versionDirective(version) {
    return {
      restrict: 'A',
      link: function(scope, elm, attrs) {
        elm.text(version);
      }
    };
  }

  angular.module('directives.version', [])
    .directive('appVersion', versionDirective);
})();
