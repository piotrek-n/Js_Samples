//The only difference is that the revealing module pattern was engineered as a way to ensure that 
//all methods and variables are kept private until they are explicitly exposed;
//https://carldanley.com/js-revealing-module-pattern/

var MyModule = (function (window, undefined) {

    function myMethod() {
        alert('my method');
    }

    function myOtherMethod() {
        alert('my other method');
    }

    // explicitly return public methods when this object is instantiated
    return {
        someMethod: myMethod,
        someOtherMethod: myOtherMethod
    };

})(window);