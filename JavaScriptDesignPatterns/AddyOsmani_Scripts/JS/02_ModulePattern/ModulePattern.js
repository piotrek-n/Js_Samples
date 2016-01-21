//
//Object Literals
//

var myModule = {

    myProperty: "someValue",

    // object literals can contain properties and methods.
    // e.g we can define a further object for module configuration:
    myConfig: {
        useCaching: true,
        language: "en"
    },

    // a very basic method
    saySomething: function () {
        console.log("Where in the world is Paul Irish today?");
    },

    // output a value based on the current configuration
    reportMyConfig: function () {
        console.log("Caching is: " + (this.myConfig.useCaching ? "enabled" : "disabled"));
    },

    // override the current configuration
    updateMyConfig: function (newConfig) {

        if (typeof newConfig === "object") {
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }
};

//
//Module Pattern
//
var testModule = (function () {

    var counter = 0;

    return {

                incrementCounter: function () {
                    return counter++;
                },

                resetCounter: function () {
                    console.log("counter value prior to reset: " + counter);
                    counter = 0;
                }

            };

})();

//Simple template!!!!
var myNamespace = (function () {

    var myPrivateVar, myPrivateMethod;

    // A private counter variable
    myPrivateVar = 0;

    // A private function which logs any arguments
    myPrivateMethod = function (foo) {
        console.log(foo);
    };

    return {

        // A public variable
        myPublicVar: "foo",

        // A public function utilizing privates
        myPublicFunction: function (bar) {

            // Increment our private counter
            myPrivateVar++;

            // Call our private method using bar
            myPrivateMethod(bar);

        }
    };

})();

//
var basketModule = (function () {

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

        // Add items to our basket
        addItem: function (values) {
            basket.push(values);
        },

        // Get the count of items in the basket
        getItemCount: function () {
            return basket.length;
        },

        // Public alias to a private function
        doSomething: doSomethingPrivate,

        // Get the total value of items in the basket
        getTotal: function () {

            var q = this.getItemCount(),
                p = 0;

            while (q--) {
                p += basket[q].price;
            }

            return p;
        }
    };
})();

///
///Module Pattern Variations
///

//mix
// Global module
var myModule = (function (jQ, _) {

    function privateMethod1() {
        jQ(".container").html("test");
    }

    function privateMethod2() {
        console.log(_.min([10, 5, 100, 2, 1000]));
    }

    return {
        publicMethod: function () {
            privateMethod1();
        }
    };

    // Pull in jQuery and Underscore
})(jQuery, _);

//Exports

// Global module
var myModule = (function () {

    // Module object
    var module = {},
      privateVariable = "Hello World";

    function privateMethod() {
        // ...
    }

    module.publicProperty = "Foobar";
    module.publicMethod = function () {
        console.log(privateVariable);
    };

    return module;

})();

//jQuery

//In the following example, a library function is defined which declares a new library and automatically binds up the init function to document.ready when new libraries (ie. modules) are created.
function library(module) {

    $(function () {
        if (module.init) {
            module.init();
        }
    });

    return module;
}

var myLibrary = library(function () {

    return {
        init: function () {
            // module implementation
        }
    };
}());
