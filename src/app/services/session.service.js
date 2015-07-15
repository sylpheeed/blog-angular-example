class UserService {
  constructor($http, params) {
    'ngInject';
    this._host = params.host;
    this.$http = $http;
  }

  index() {
    return this.$http.get(this._host + '/session')
  }

  create(data) {
    return this.$http.post(this._host + '/session', {user: data})
  }

}

export default UserService;

