import { View, Property } from "tns-core-modules/ui/core/view";
import { MarkerInfo, TnsGoogleMaps } from "./nativescript-googlemaps";

export { MarkerInfo };
export class TnsGoogleMapsBase extends View implements TnsGoogleMaps {
    marker: MarkerInfo;

    public static mapLoadedEvent: string = "mapLoaded";

    public get android(): any {
        return this.nativeView;
    }

    public set android(value) {
        this.nativeView = value;
    }

    public get ios(): any {
        return this.nativeView;
    }

    public set ios(value) {
        this.nativeView = value;
    }

    public addMarker(marker: MarkerInfo) {
        //
    }

    public clearMap() {
        //
    }
}

export const markerProperty = new Property<TnsGoogleMapsBase, MarkerInfo>({ name: "marker" });
markerProperty.register(TnsGoogleMapsBase);