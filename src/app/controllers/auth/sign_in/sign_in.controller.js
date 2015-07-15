class SignInController {
  constructor($scope, SessionService) {
    'ngInject';
    this.SessionService = SessionService;
    this.$scope = $scope;
    this.$scope.signIn = this.signIn.bind(this);
  }

  signIn() {
    this.$scope.error = false;
    this.SessionService.create(this.$scope.user)
      .then((data)=> {
        console.warn(data);
      }, (response)=> {
        if (response.data) {
          this.$scope.error = response.data.message;
        }
      });
  }

}

export default SignInController;
