class LayoutDirective {
  constructor() {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/layout/layout.html',
      scope: {
        creationDate: '='
      },
      controller: LayoutController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class LayoutController {
  constructor($scope) {
    'ngInject';
    $scope.loaded = false;

    $scope.$on('loaded', function (event, args) {
      $scope.loaded = true;
      $scope.$apply();
    });
  }
}

export default LayoutDirective;
