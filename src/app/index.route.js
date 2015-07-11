function routerConfig ($routeProvider, $locationProvider) {
  'ngInject';

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $routeProvider
    .when('/', {
      templateUrl: '/app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/auth/sign_in', {
      templateUrl: '/app/sign_in/sign_in.html',
      controller: 'SignInController',
      controllerAs: 'main'
    })
    .otherwise({
      redirectTo: '/'
    });
}

export default routerConfig;
