/* global toastr:false, moment:false */
import params from './index.params';
import MainController from './controllers/main/main.controller';
import Auth from './controllers/auth/index';

angular.module('blogAngularExample.controllers', [])
  .constant('toastr', toastr)
  .constant('moment', moment)
  .value('params', params)
  .controller('MainController', MainController)
  .controller('SignInController', Auth.SignInController)
  .controller('SignUpController', Auth.SignUpController);

