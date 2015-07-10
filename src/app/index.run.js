function runBlock($log, UserService, $rootScope) {
  'ngInject';
  UserService.init().then(()=> {
    $rootScope.$broadcast('loaded');
  }, ()=> {
    $rootScope.$broadcast('loaded');
  });
  $log.debug('runBlock end');
}

export default runBlock;
