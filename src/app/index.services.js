/* global toastr:false, moment:false */
import params from './index.params';
import UserService from './services/user.service';
import LocaleService from './services/locale.service';

angular.module('blogAngularExample.services', [])
  .value('params', params)
  .service('UserService', UserService)
  .service('LocaleService', LocaleService);

