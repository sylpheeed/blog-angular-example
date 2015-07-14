import easyLocale from 'easy-locale';

class LocaleService {
  constructor($http, params) {
    'ngInject';
    this._locale = false;
    this._host = params.host;
    this.$http = $http;
  }

  init($scope) {
    return new Promise(
      (resolve, reject)=> {
        this.$http.get(this._host + '/locale').success((data) => {
          easyLocale.init(data.locale, data.translations, {singleLocale: true});
          $scope.t = this.t;
          resolve(data);
        }).error(reject);
      }
    );
  }

  t(str, hash) {
    return easyLocale.t(str, hash);
  }

}

export default LocaleService;

