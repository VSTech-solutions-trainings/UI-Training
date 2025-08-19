var Person = /** @class */ (function () {
    function Person(name) {
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (name.length > 0) {
                this._name = name;
            }
            else {
                throw new Error("Name should be more");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var mike = new Person("Mike");
mike.name = "";
