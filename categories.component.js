(function() {
    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'categories.template.html',
            controller: CategoriesController
        });

    CategoriesController.$inject = ['MenuDataService'];
    function CategoriesController(MenuDataService) {
        var $ctrl = this;
        // Implement controller logic here
    }
})();
