//import makeRoutes from 'make-routes';

function routerConfig($routeProvider, $locationProvider) {
  'ngInject';

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $routeProvider
    .when('/', {
      templateUrl: '/app/controllers/main/main.html',
      controller: 'MainController'
    })
    .when('/auth/sign_in', {
      templateUrl: '/app/controllers/auth/sign_in/sign_in.html',
      controller: 'SignInController'
    })
    .when('/auth/sign_up', {
      templateUrl: '/app/controllers/auth/sign_up/sign_up.html',
      controller: 'SignInController'
    })
    .otherwise({
      redirectTo: '/'
    });
}

export default routerConfig;
