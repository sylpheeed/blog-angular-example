/* jshint ignore:start */
import directives from './index.directives';
import controllers from './index.controllers';
import services from './index.services';
/* jshint ignore:end */

import config from './index.config';
import routerConfig from './index.route';
import runBlock from './index.run';


angular.module('blogAngularExample',
  ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute',
    'blogAngularExample.directives', 'blogAngularExample.controllers',
    'blogAngularExample.services'])
  .config(config)
  .config(routerConfig)
  .run(runBlock);

