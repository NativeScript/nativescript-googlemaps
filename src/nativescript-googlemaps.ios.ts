import common = require("./nativescript-googlemaps-common");

global.moduleMerge(common, exports);

export class TnsGoogleMaps extends common.TnsGoogleMaps {
    constructor() {
        super();
        this.ios = GMSMapView.mapWithFrameCamera(CGRectZero, null);
        this.ios.myLocationEnabled = true;
        let settings = this.ios.settings;
        settings.myLocationButton = true;
        settings.compassButton = true;
        // this._nativeView = this.ios;
    }

    public onLoaded() {
        super.onLoaded();
        this.notify({ eventName: TnsGoogleMaps.mapLoadedEvent, object: this, map: this.ios });
    }

    public addMarker(marker) {
        if (marker && this.ios) {
            let newMarker = new GMSMarker();
            newMarker.position = CLLocationCoordinate2DMake(marker.latitude, marker.longitude);
            let cameraUpdate = GMSCameraUpdate.setTargetZoom(newMarker.position, this.ios.maxZoom);
            newMarker.map = this.ios;
            this.ios.animateWithCameraUpdate(cameraUpdate);
        }
    }

    public clearMap() {
        if (this.ios) {
            this.ios.clear();
        }
    }
}
