class LayoutDirective {
  constructor($timeout) {
    'ngInject';
    let directive = {
      restrict: 'E',
      templateUrl: '/app/components/layout/layout.html',
      scope: {
        creationDate: '='
      },
      controller: LayoutController,
      controllerAs: 'vm',
      bindToController: true,
      link: function postLink() {
        $timeout(function () {
          var layoutBlock = document.getElementById('layout-block');
          componentHandler.upgradeElement(layoutBlock, 'MaterialLayout');
        }, 100);
      }
    };

    return directive;
  }
}

class LayoutController {
  constructor($scope, $timeout) {
    'ngInject';
    $scope.loaded = false;

    $scope.$on('loaded', function (event, args) {
      $scope.loaded = true;
      $scope.$apply();
    });
  }
}

export default LayoutDirective;
