/* global toastr:false, moment:false */
import LayoutDirective from '../app/components/layout/layout.directive';
import BRouteDirective from '../app/directives/b-route.directive';
import params from './index.params';

angular.module('blogAngularExample.directives', [])
  .constant('toastr', toastr)
  .constant('moment', moment)
  .value('params', params)
  .directive('layout', ['$timeout', ($timeout) => new LayoutDirective($timeout)])
  .directive('bRoute', ()=> new BRouteDirective);

