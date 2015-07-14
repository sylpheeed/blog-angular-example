import makeRoutes from 'make-routes';

class BRouteDirective {
  constructor() {
    'ngInject';
    let directive = {
      link: function (scope, element, attrs) {
        element.attr('href', makeRoutes.route(attrs.bRoute));
      }
    };

    return directive;
  }
}

export default BRouteDirective;
