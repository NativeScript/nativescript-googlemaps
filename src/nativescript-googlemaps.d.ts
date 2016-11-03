import { View } from "ui/core/view";
import { Property } from "ui/core/dependency-observable";

export class TnsGoogleMaps extends View {
    public android: any;
    public ios: any;
    public _nativeView: any;
    public googleMap: any;

    public static mapLoadedEvent: string;

    public static markerProperty: Property;

    public addMarker(marker);

    public clearMap();
}