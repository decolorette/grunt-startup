(function($){
    /**
     * Global namespace.
     * It checks if APP object is already created, if so will use the global object,
     * otherwise it will initialize the empty project.
     * @type {*|{}}
     */
    var APP = APP || {};

    // Create a sub namespace.
    APP.event = {
        addListener: function(el, type, fn) {
            // code stuff
        },
        removeListener: function(el, type, fn) {
            // code stuff
        },
        getEvent: function(e) {
            // code stuff
        }
    };
    // Call method.
    APP.event.addListener("myElement", "type", callback);

    // Custom objects
    var Person = function (firstName) {
        this.firstName = firstName;
        console.log("Instance created !");
    };
    Person.prototype.say = function () {
        console.log (firstName + " open the box.");
    }
    var myPerson = new Person('Pandora');
    myPerson.say();

})(jQuery);