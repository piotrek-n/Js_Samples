

///////////////////////////////////
////////////Object Creation////////
///////////////////////////////////

// Each of the following options will create a new empty object:
var newObject = {};

// or
var newObject = Object.create(Object.prototype);

// or
var newObject = new Object();

// ECMAScript 3 compatible approaches

// 1. Dot syntax

// Set properties
newObject.someKey = "Hello World";

// Get properties
var value = newObject.someKey;



// 2. Square bracket syntax

// Set properties
newObject["someKey"] = "Hello World";

// Get properties
var value = newObject["someKey"];

//https://www.kainos.pl/blog/wprowadzenie-do-ecmascript-5-czesc-1/

// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/


// 3. Object.defineProperty

// Set properties
Object.defineProperty(newObject, "someOtherKey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});

// If the above feels a little difficult to read, a short-hand could
// be written as follows:

var defineProp = function (obj, key, value) {
    var config = {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
    };
    Object.defineProperty(obj, key, config);
};

var person = Object.create(Object.prototype);

defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", false);


// 4. Object.defineProperties

// Set properties
Object.defineProperties(newObject, {

    "someAndOtherKey": {
        value: "Hello World",
        writable: true
    },

    "anotherKey": {
        value: "Foo bar",
        writable: false
    }

});

// Getting properties for 3. and 4. can be done using any of the
// options in 1. and 2.

///////////////////////////////////
/////////Basic Constructors////////
///////////////////////////////////

//As we saw earlier, JavaScript doesn't support the concept of classes but it does support special constructor functions that work with objects.
//By simply prefixing a call to a constructor function with the keyword "new", we can tell JavaScript we would like the function to behave like 
//a constructor and instantiate a new object with the members defined by that function.

function Car(model, year, miles)
{
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function () {
        return this.model + " has done" + this.miles + "miles";
    }
}