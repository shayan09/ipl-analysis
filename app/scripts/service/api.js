'use strict';


class Events{
    constructor($state,$http){
        this.$state = $state;
        this.$http = $http;
    }

    getWeatherApi(zipCode){
        console.log("zip requested is ",zipCode);
        return this.$http.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=3b7bc1fd628e07379305e67707643203`).then(success=>{
            console.log(success);
            return success;
        }).catch(error=>{

        });
    }

    getBusinessDetails(bObj){
        console.log("zip requested is ",bObj);
        return this.$http.post("http://localhost:8000/verifyBusiness",bObj).then(success=>{
            console.log(success);
            return success;
        }).catch(error=>{

        });
    }

}

angular
    .module('feApp')
    .service('Events',
        function($state,$http){
            return new Events($state,$http);
        });
