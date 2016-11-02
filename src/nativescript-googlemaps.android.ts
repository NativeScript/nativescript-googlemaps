import common = require("./nativescript-googlemaps-common");

global.moduleMerge(common, exports);

export class TnsGoogleMaps extends common.TnsGoogleMaps {
    private googleMap: any;

    // public get googleMap(): any {
    //     return this._googleMap;
    // }

    // public set googleMap(value) {
    //     this._googleMap = value;
    // }

    public _createUI() {
        this._nativeView = new org.nativescript.widgets.ContentLayout(this._context);
        let id = android.view.View.generateViewId();
        this._nativeView.setId(id);
        let activity = this._context;
        let googleMapOptions = new com.google.android.gms.maps.GoogleMapOptions().
            compassEnabled(true);
        let mapFragment = com.google.android.gms.maps.MapFragment.newInstance(googleMapOptions);
        this.android = mapFragment;
        let transaction = activity.getFragmentManager().beginTransaction();
        transaction.add(id, mapFragment, "MAP_FRAGMENT");
        transaction.commit();
        let that = new WeakRef(this);
        let callback = new com.google.android.gms.maps.OnMapReadyCallback({
            onMapReady: function (gMap) {
                gMap.setMyLocationEnabled(true);
                let owner = that.get();
                if (owner) {
                    owner.googleMap = gMap;
                    if (owner.marker) {
                        owner.addMarker(owner.marker);
                    }
                    owner.notify({ eventName: TnsGoogleMaps.mapLoadedEvent, object: owner, map: gMap });
                }
            }
        });
        mapFragment.getMapAsync(callback);
    }

    public addMarker(marker) {
        if (this.googleMap) {
            let newMarkerPosition = new com.google.android.gms.maps.model.LatLng(marker.latitude, marker.longitude);
            this.googleMap.addMarker(new com.google.android.gms.maps.model.MarkerOptions().position(newMarkerPosition));
            this.googleMap.moveCamera(com.google.android.gms.maps.CameraUpdateFactory.newLatLngZoom(newMarkerPosition, this.googleMap.getMaxZoomLevel()));
        }
    }
}
