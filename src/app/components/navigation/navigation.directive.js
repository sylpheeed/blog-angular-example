class NavigationDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/navigation/navigation.html',
      scope: {
          creationDate: '='
      },
      controller: NavigationController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class NavigationController {
  constructor (moment) {
    'ngInject';
  }
}

export default NavigationDirective;
