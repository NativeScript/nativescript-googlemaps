import { TnsGoogleMapsBase, markerProperty, MarkerInfo } from "./googlemaps.common";

export { markerProperty, MarkerInfo };

export class TnsGoogleMaps extends TnsGoogleMapsBase {
    constructor() {
        super();
        this.ios = GMSMapView.mapWithFrameCamera(CGRectZero, null);
        this.ios.myLocationEnabled = true;
        let settings = this.ios.settings;
        settings.myLocationButton = true;
        settings.compassButton = true;
    }

    public onLoaded() {
        super.onLoaded();
        this.notify({ eventName: TnsGoogleMaps.mapLoadedEvent, object: this, map: this.ios });
    }

    public addMarker(marker: MarkerInfo) {
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

    [markerProperty.getDefault](): MarkerInfo {
        return undefined;
    }

    [markerProperty.setNative](value: MarkerInfo) {
        if (value) {
            this.addMarker(value);
        } else {
            this.clearMap();
        }
    }
}
