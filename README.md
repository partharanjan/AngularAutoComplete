# AngularAutoComplete
jQuery UI AutoComplete using AngularJs

**How To Use**
```
app.controller('CompanyController', ['$scope', '$http', function ($scope, $http) {
$scope.companyName="";
$scope.onInit = function () {
        var _companySuggest = new ngAutoComplete("Company", $http);
        _companySuggest.onReceive = function (item) {
            return {
                label: item.Name,
                value: item.Name
            }
        }
        _companySuggest.onSelect = function (item) {
            $scope.companyName = item.value;
            $scope.$apply();
        }
        _companySuggest.init("/Ajax/CompanySuggestion");
  };
});
```

**Dependancy**

[jQuery UI](https://jqueryui.com/autocomplete/)

[Angular Js](https://angularjs.org/)

**Enjoy! Happy Coding :)**
