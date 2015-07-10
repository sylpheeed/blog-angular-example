/* global toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';
import NavigationDirective from '../app/components/navigation/navigation.directive';
import LayoutDirective from '../app/components/layout/layout.directive';
import UserService from '../app/services/user';
import params from './index.params';

angular.module('blogAngularExample', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute'])
  .constant('toastr', toastr)
  .constant('moment', moment)
  .value('params', params)
  .service('UserService', UserService)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('navigation', () => new NavigationDirective())
  .directive('layout', () => new LayoutDirective());

