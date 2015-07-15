class UserService {
  constructor($http, params, SessionService) {
    'ngInject';
    this._user = {id: false};
    this._host = params.host;
    this.$http = $http;
    this.SessionService = SessionService
  }

  init() {
    return new Promise(
      (resolve, reject)=> {
        this.SessionService.index().success((data) => {
          this.set(data);
          resolve(data);
        }).error(reject);
      }
    );
  }

  set(data) {
    for (let el in data) {
      this._user[el] = data[el];
    }
  }

  get() {
    return this._user;
  }

}

export default UserService;

