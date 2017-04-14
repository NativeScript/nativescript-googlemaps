import { View, Property } from "tns-core-modules/ui/core/view";

export class TnsGoogleMaps extends View {
    marker: any;

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

    public addMarker(marker) {
        //
    }

    public clearMap() {
        //
    }
}

export const markerProperty = new Property<TnsGoogleMaps, any>({
    name: "marker",
    defaultValue: null,
    valueChanged: (target, oldValue, newValue) => {
        if (newValue) {
            target.addMarker(newValue);
        } else {
            target.clearMap();
        }
    }
});
markerProperty.register(TnsGoogleMaps);