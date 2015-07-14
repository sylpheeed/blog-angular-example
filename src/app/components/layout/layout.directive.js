/*global document:false, componentHandler:false*/
class LayoutDirective {
  constructor() {
    'ngInject';
    let directive = {
      restrict: 'E',
      templateUrl: '/app/components/layout/layout.html',
      controller: LayoutController,
      controllerAs: 'layout',
      bindToController: true,
      link: function postLink($scope) {
        $scope.updateBlock = function () {
          var layoutBlock = document.getElementById('layout-block');
          componentHandler.upgradeElement(layoutBlock, 'MaterialLayout');
        };
      }
    };

    return directive;
  }
}

class LayoutController {
  constructor($scope, UserService, LocaleService) {
    'ngInject';
    $scope.loaded = false;
    Promise.all([
      UserService.init(),
      LocaleService.init($scope)
    ]).then(()=> $scope.ready(), ()=> $scope.ready());
    $scope.ready = ()=> {
      $scope.loaded = true;
      $scope.$apply();
      $scope.updateBlock();
    };
  }
}

export default LayoutDirective;
