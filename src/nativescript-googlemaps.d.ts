import { View, Property } from "tns-core-modules/ui/core/view";

export class TnsGoogleMaps extends View {
    public android: any;
    public ios: any;
    public _nativeView: any;
    public googleMap: any;

    public static mapLoadedEvent: string;

    public addMarker(marker);

    public clearMap();
}