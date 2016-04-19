/**
 * Created by jhipster on 30/03/16.
 */

angular.module("ligabaloncestoApp")
    .controller("jugadorCtrl", function($scope, $http) {

       //$scope.jugadores = entity;

        //Falla

        /*
        JugadorExtra.query(function(response){
            //$scope.jugadores = response;
        })
        */

        $http.get("api/jugadors").then(function (response) {
            $scope.jugadores = response.data;
        });


        $scope.numcanastas= function(){
            var canastas = $scope.num;


            /*
            JugadorExtra.maxcanasta(canastas), function(response){
                $scope.jugadores = response.data;
            }
            */

            $http.get("api/jugadors/canastas/"+canastas).then(
                function(response){
                    $scope.jugadores = response.data;
                },function errorCallback(response) {
                    console.log(response);
                });


        };

 });

// .controller("jugadorCtrl", ['$scope','$http','JugadorServiceExtra','entity', function($scope, $http, JugadorServiceExtra, entity) {
