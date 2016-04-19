/**
 * Created by jhipster on 29/03/16.
 */
angular.module("ligabaloncestoApp")
    .controller("equipoCtrl", function($scope, $http) {

        $http.get("api/equipos").then(function (response) {
            $scope.equipos = response.data;
        });

        $scope.save = function(){
           var equipo = $scope.equipo;
            var canastas = $scope.canastas;

            $http.get("api/jugadors/equipocanastas/"+equipo+"/"+canastas).then(function (response) {
                $scope.jugadores = response.data;
            },function errorCallback(response){
                console.log(response);
            });

        };


/*
        $http.get("api/jugadors").then(function (response) {
            $scope.jugadores = response.data;
        });
 /jugadors/equipocanastas/
 */
        $scope.numcanastas= function(){
            var canastas = $scope.num;
            $http.get("api/jugadors/canastas/"+canastas).then(
                function(response){
                    $scope.jugadores = response.data;
                },function errorCallback(response) {
                    console.log(response);
                });
        };

    });
