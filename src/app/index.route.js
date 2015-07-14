import makeRoutes from 'make-routes';

function routerConfig($routeProvider, $locationProvider) {
  'ngInject';


  makeRoutes.init({
    root: {path: '/', to: '/app/controllers/main/main.html', _extra: 'MainController'},
    auth: {
      sign_in: {to: '/app/controllers/auth/sign_in/sign_in.html', _extra: 'SignInController'},
      sign_up: {to: '/app/controllers/auth/sign_up/sign_up.html', _extra: 'SignUpController'}
    }
  }).each((route)=> {
    $routeProvider.when(route.path, {
      templateUrl: route.to,
      controller: route._extra
    });
  }, ()=> {
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}

export default routerConfig;
