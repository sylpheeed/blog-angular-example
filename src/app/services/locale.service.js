class LocaleService {
  constructor($http, params) {
    'ngInject';
    this._locale = false;
    this._host = params.host;
    this.$http = $http;
  }

  init() {
    return new Promise(
      (resolve, reject)=> {
        this.$http.get(this._host + '/locale').success((data) => {
          this.set(data);
          resolve(data);
        }).error(reject);
      }
    );
  }

  set(data) {
    this._locale = data
  }


}

export default LocaleService;

