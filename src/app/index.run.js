function runBlock($log, UserService, LocaleService, $rootScope) {
  'ngInject';
  Promise.all([UserService.init(), LocaleService.init()]).then(()=> {
    $rootScope.$broadcast('loaded');
  }, ()=> {
    $rootScope.$broadcast('loaded');
  });
  $log.debug('runBlock end');
}

export default runBlock;
