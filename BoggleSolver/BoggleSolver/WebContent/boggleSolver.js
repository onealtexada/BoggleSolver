var app = angular.module("boggleSolverApp", []);

app.controller("boggleSolverCtrl", function($scope, $http) {
    $scope.message = "Boggle Solver Board";
    $scope.a1 = "";
    $scope.a2 = "";
    $scope.a3 = "";
    $scope.a4 = "";

    $scope.b1 = "";
    $scope.b2 = "";
    $scope.b3 = "";
    $scope.b4 = "";

    $scope.c1 = "";
    $scope.c2 = "";
    $scope.c3 = "";
    $scope.c4 = "";

    $scope.d1 = "";
    $scope.d2 = "";
    $scope.d3 = "";
    $scope.d4 = "";

    $scope.sendPost = function() {
        var boggleBoard = $scope.a1 + $scope.a2 + $scope.a3 + $scope.a4 + 
                          $scope.b1 + $scope.b2 + $scope.b3 + $scope.b4 +
                          $scope.c1 + $scope.c2 + $scope.c3 + $scope.c4 + 
                          $scope.d1 + $scope.d2 + $scope.d3 + $scope.d4;
        var data = {'boardSize': '4x4', 'boardString': boggleBoard};

        $http.post("http://localhost:8090/boggle", data)
        .then(function(response, status) {
            $scope.listWords = response.data.words;
            $scope.totalWords = response.data.totalWords;
            $scope.totalPoints = response.data.totalPoints;
        })
    }
})
