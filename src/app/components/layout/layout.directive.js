/*global document:false, componentHandler:false*/
class LayoutDirective {
  constructor() {
    'ngInject';
    let directive = {
      restrict: 'E',
      templateUrl: '/app/components/layout/layout.html',
      controller: LayoutController,
      controllerAs: 'layout',
      bindToController: true
    };

    return directive;
  }
}

class LayoutController {
  constructor($scope, UserService, LocaleService) {
    'ngInject';
    this.$scope = $scope;
    $scope.loaded = false;
    this.UserService = UserService;
    Promise.all([
      UserService.init(),
      LocaleService.init($scope)
    ]).then(()=> $scope.ready(), ()=> $scope.ready());

    $scope.ready = ()=> {
      $scope.loaded = true;
      $scope.$apply();
      $scope.user = UserService.get();
    };
    $scope.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.UserService.removeToken();
  }
}

export default LayoutDirective;
