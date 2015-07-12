import makeRoutes from 'make-routes';

function routerConfig($routeProvider, $locationProvider) {
  'ngInject';


  makeRoutes.init({
    root: {path: '/', to: '/app/controllers/main/main.html', _extra: 'MainController'},
    auth: {
      sign_in: {to: '/app/controllers/auth/sign_in/sign_in.html', _extra: 'SignInController'},
      sign_up: {to: '/app/controllers/auth/sign_in/sign_up.html', _extra: 'SignUpController'}
    }
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  let routes = makeRoutes.all();
  for (let route in routes) {
    let current = routes[route];
    $routeProvider.when(current.path, {
      templateUrl: current.to,
      controller: current._extra
    });
  }

  $routeProvider.otherwise({
    redirectTo: '/'
  });
}

export default routerConfig;
