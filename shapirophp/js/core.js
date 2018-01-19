var app = angular.module("shapiro",[],function($httpProvider){

  // РСЃРїРѕР»СЊР·СѓРµРј x-www-form-urlencoded Content-Type
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
 
  // РџРµСЂРµРѕРїСЂРµРґРµР»СЏРµРј РґРµС„РѕР»С‚РЅС‹Р№ transformRequest РІ $http-СЃРµСЂРІРёСЃРµ
  $httpProvider.defaults.transformRequest = [function(data)
  {
    /**
     * СЂР°Р±РѕС‡Р°СЏ Р»РѕС€Р°РґРєР°; РїСЂРµРѕР±СЂР°Р·СѓРµС‚ РѕР±СЉРµРєС‚ РІ x-www-form-urlencoded СЃС‚СЂРѕРєСѓ.
     * @param {Object} obj
     * @return {String}
     */ 
    var param = function(obj)
    {
      var query = '';
      var name, value, fullSubName, subValue, innerObj, i;
      
      for(name in obj)
      {
        value = obj[name];
        
        if(value instanceof Array)
        {
          for(i=0; i<value.length; ++i)
          {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if(value instanceof Object)
        {
          for(subName in value)
          {
            subValue = value[subName];
            fullSubName = name + '[' + subName + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if(value !== undefined && value !== null)
        {
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }
      }
      
      return query.length ? query.substr(0, query.length - 1) : query;
    };
    
    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
  }];
});

app.filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);