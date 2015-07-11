/* global toastr:false, moment:false */
import config from './index.config';
import directives from './index.directives';
import controllers from './index.controllers.js';
import routerConfig from './index.route';

import runBlock from './index.run';
import UserService from '../app/services/user';
import params from './index.params';


angular.module('blogAngularExample',
  ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute',
    'blogAngularExample.directives', 'blogAngularExample.controllers'])
  .service('UserService', UserService)
  .config(config)
  .config(routerConfig)
  .run(runBlock);

