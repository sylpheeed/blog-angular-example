class RegistrationService {
  constructor($http, params) {
    'ngInject';
    this._host = params.host;
    this.$http = $http;
  }

  create(data) {
    return this.$http.post(this._host + '/registration', {registration: data})
  }

}

export default RegistrationService;

