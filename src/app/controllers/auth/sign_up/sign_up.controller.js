class SignUpController {
  constructor($scope, RegistrationService) {
    'ngInject';
    this.RegistrationService = RegistrationService;
    this.$scope = $scope;
    this.$scope.signUp = this.signUp.bind(this);
  }

  signUp(user) {
    this.$scope.error = false;
    this.RegistrationService.create(user)
      .then((data)=> {
        console.warn(data);
      }, (response)=> {
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
