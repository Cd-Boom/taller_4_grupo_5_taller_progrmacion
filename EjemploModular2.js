var basketModule = (function() {

    // privates

    var basket = [];

    function doSomethingPrivate() {
        //...
    }

    function doSomethingElsePrivate() {
        //...
    }

    // Return an object exposed to the public
    return {


        addItem: function(values) {
            basket.push(values);
        },


        getItemCount: function() {
            return basket.length;
        },

        // Public alias to a  private function
        doSomething: doSomethingPrivate,


        getTotal: function() {

            var itemCount = this.getItemCount(),
                total = 0;

            while (itemCount--) {
                total += basket[itemCount].price;
            }

            return total;
        }
    };
}());

basketModule.addItem({
    item: "pan",
    price: 1500
});

basketModule.addItem({
    item: "mantequilla",
    price: 1300
});

// Outputs: 2
console.log(basketModule.getItemCount());

// Outputs: 0.8
console.log(basketModule.getTotal());