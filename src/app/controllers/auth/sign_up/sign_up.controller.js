class SignUpController {
  constructor($scope, RegistrationService, UserService) {
    'ngInject';
    this.RegistrationService = RegistrationService;
    this.UserService = UserService;
    this.$scope = $scope;
    this.$scope.signUp = this.signUp.bind(this);
  }

  signUp(user) {
    this.$scope.error = false;
    if (!user || !user.email || !user.password) {
      this.$scope.error = this.$scope.t('auth.error.complete_fields');
      return false;
    }
    this.RegistrationService.create(user)
      .then(
      (response)=> {
        this.UserService.saveToken(response.data.token);
        this.UserService.set(response.data.user);
      },
      (response)=> {
        if (response.data) {
          if (Array.isArray(response.data.message)) {
            response.data.message.forEach((v)=> {
              if (this.$scope.error) {
                this.$scope.error += ', ' + v;
              } else {
                this.$scope.error = v;
              }
            });
          } else {
            this.$scope.error = response.data.message;
          }
        }
      });
  }

}

export default SignUpController;
