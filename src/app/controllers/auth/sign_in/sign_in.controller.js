import makeRoutes from 'make-routes';

class SignInController {
  constructor($scope, SessionService, UserService, $location) {
    'ngInject';
    this.SessionService = SessionService;
    this.UserService = UserService;
    this.$location = $location;
    this.$scope = $scope;
    this.$scope.signIn = this.signIn.bind(this);
  }

  signIn(user) {
    this.$scope.error = false;
    if (!user || !user.email || !user.password) {
      this.$scope.error = this.$scope.t('auth.error.complete_fields');
      return false;
    }

    this.SessionService.create(user)
      .then((response)=> {
        this.UserService.saveToken(response.data.token);
        this.UserService.set(response.data.user);
        this.$location.path(makeRoutes.route('root'));
      }, (response)=> {
        if (response.data) {
          this.$scope.error = response.data.message;
        }
      });

  }

}

export default SignInController;
