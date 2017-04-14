import { View, Property } from "tns-core-modules/ui/core/view";

export interface MarkerInfo {
    /**
     * The latitude of the geolocation, in degrees.
     */
    latitude: number;

    /**
     * The longitude of the geolocation, in degrees.
     */
    longitude: number;
}

export class TnsGoogleMaps extends View {
    public android: any;
    public ios: any;

    public static mapLoadedEvent: string;

    public addMarker(marker: MarkerInfo);

    public clearMap();
}