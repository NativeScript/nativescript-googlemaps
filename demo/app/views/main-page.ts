import * as geolocation from "nativescript-geolocation";
import { topmost } from "ui/frame";
import { Accuracy } from "ui/enums";
import { fromObject as observableFromObject } from "data/observable";
import { Page } from "ui/page";

var currentLocation: geolocation.Location;

function getLocationAndShowOnMap() {
    getCurrentLocation().then((currentLocation: geolocation.Location) => {
        showMap(currentLocation);
    });
}

function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, updateDistance: 0.1, maximumAge: Infinity, timeout: 20000 }).then((loc) => {
            resolve(loc);
        }, (e) => {
            console.log("Error: " + e.message);
            reject();
        });
    })
}

export function showCurrentLocationOnMap() {
    if (!geolocation.isEnabled()) {
        geolocation.enableLocationRequest().then(() => {
            getLocationAndShowOnMap();
        }, (error) => {
            console.log(JSON.stringify(error));
        });
    } else {
        getLocationAndShowOnMap();
    }
}

export function showMap(location?: geolocation.Location) {
    var mapPageModel = observableFromObject({ location: location });
    topmost().navigate({
        moduleName: "views/mapPage",
        context: mapPageModel
    });
}
