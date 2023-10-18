(function() {
    angular.module('data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        // Existing code...

        this.getItemsForCategory = function(categoryShortName) {
            return $http.get(`https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/${categoryShortName}.json`)
                .then(function(response) {
                    return response.data;
                });
        };
    }
})();
