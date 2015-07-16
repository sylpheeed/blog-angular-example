class UserService {
  constructor($http, params, SessionService) {
    'ngInject';
    this._user = {id: false};
    this._host = params.host;
    this.$http = $http;
    this.SessionService = SessionService
  }

  init() {
    this.setToken();
    return new Promise(
      (resolve, reject)=> {
        this.SessionService.index()
          .success((response) => {
            this.set(response.user);
            resolve(response);
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

  setToken() {
    let token = localStorage.getItem('Token');
    if (token && token != 'undefined') {
      this.$http.defaults.headers.common['Token'] = token;
    }
  }

  saveToken(token) {
    localStorage.setItem('Token', token);
    this.setToken();
  }

  removeToken() {
    localStorage.removeItem('Token');
    this.set({id: false});
  }

}

export default UserService;

