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
      link: function (scope, element, attrs) {
        scope.load = ()=> {
          //disable mdl layout shadow if active
          let layoutDrawer = $('.mdl-layout__drawer');
          let shadow = false;
          scope.$on('$routeChangeStart', function (next, current) {
            if (layoutDrawer.hasClass('is-visible')) {
              if (!shadow) {
                shadow = $('.mdl-layout__obfuscator');
              }
              shadow.trigger('click');
            }
          });
        }
      }
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
      $scope.load();
      $scope.user = UserService.get();
    };
    $scope.signOut = this.signOut.bind(this);
    $scope.isAuthorized = ()=> {
      return $scope.user && $scope.user.id;
    }
  }

  signOut() {
    this.UserService.removeToken();
  }
}

export default LayoutDirective;
