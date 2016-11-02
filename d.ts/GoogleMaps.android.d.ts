declare module com {
    module google {
        module android {
            module gms {
                module maps {
                    export class GoogleMapOptions {
                        constructor();
                        public compassEnabled(enable: boolean);
                    }
                    export class MapFragment {
                        public static newInstance(options: com.google.android.gms.maps.GoogleMapOptions): MapFragment;
                        public getMapAsync(mapCallback: OnMapReadyCallback);
                    }
                    interface OnMapReadyCallback {
                        onMapReady(gMap: GoogleMap);
                    }
                    export class OnMapReadyCallback implements OnMapReadyCallback {
                        constructor(implementation: OnMapReadyCallback);
                    }
                    export class GoogleMap {
                        setMyLocationEnabled(enabled: boolean);
                    }
                    export class CameraUpdate {

                    }
                    export class CameraUpdateFactory {
                        public static newLatLngZoom(latLng: model.LatLng, zoom: number): CameraUpdate;
                    }
                    module model {
                        export class LatLng {
                            constructor(latitude: number, longitude: number);
                        }
                        export class MarkerOptions {
                            constructor();
                            public position(position: LatLng): MarkerOptions;
                        }
                    }
                }
            }
        }
    }
}