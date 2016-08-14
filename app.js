/**
 * Created by Nathan on 7/24/16.
 */

(function() {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('CustomerController', function(){
       this.customer = person;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: '. . .',
            canPurchase: false,
            soldOut: false,
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: '. . .',
            canPurchase: true,
            soldOut: false,
        }
    ];



    var person = {
        name: 'John Smith',
        age: 25,
        location: 'United States',
        favoriteProduct: 'gem'
    };
})();
