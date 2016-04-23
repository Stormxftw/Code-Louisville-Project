var app = angular.module('project', []);


//GET FOR MUFFINS
app.controller('muffins', function ($scope, $http) {
    $http.get('/recipelist')
    .success(function(response) {
            $scope.recipelist = response;
            console.log('GET RECIVED!');
      });

    });

//GET FOR CHILLI
app.controller('chilli', function ($scope, $http) {
    $http.get('/recipelist')
    .success(function(response) {
            $scope.recipelist = response;
            console.log('GET RECIVED!');
      });

    });

//GET FOR ECHILADES
app.controller('ench', function ($scope, $http) {
    $http.get('/recipelist/enchiladas')
    .success(function(response) {
            $scope.recipelist = response;
            console.log('GET RECIVED!');
      });

    });


//<div>                     
//<p ng-repeat="recipe in recipelist">{{recipe.ing}}</p>
//</div>               