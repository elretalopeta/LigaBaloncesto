'use strict';

angular.module('ligabaloncestoApp')
    .factory('JugadorServiceExtra', function ($resource) {

        //Falla
        return $resource('api/jugadors', {}, {
            'get': { method: 'GET', isArray: true}, //hace referencia a la ruta de arriba ??
            'maxcanastas': {method: 'GET', isArray: true, url: 'api/jugadors/canastas/:canastas'}

        });
    });

// .factory('JugadorServiceExtra', ['$resource', function ($resource) {
