var Googlemaps = require("nativescript-googlemaps").Googlemaps;
var googlemaps = new Googlemaps();

describe("greet function", function() {
    it("exists", function() {
        expect(googlemaps.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(googlemaps.greet()).toEqual("Hello, NS");
    });
});