import { View, Property } from "tns-core-modules/ui/core/view";


// var markerProperty = new Property("marker", "TnsGoogleMaps", new PropertyMetadata(null, PropertyMetadataSettings.None));

// function onMarkerPropertyChanged(data) {
//     let maps = data.object;
//     maps._onMarkerPropertyChanged(data);
// }

// (<PropertyMetadata>markerProperty.metadata).onSetNativeValue = onMarkerPropertyChanged;

export const markerProperty = new Property<TnsGoogleMaps, any>({ name: "marker", defaultValue: null, valueChanged: this._onMarkerPropertyChanged });
markerProperty.register(TnsGoogleMaps);

function _onMarkerPropertyChanged(target, oldValue, newValue) {
    if (newValue) {
        this.addMarker(newValue);
    } else {
        this.clearMap();
    }
}

export class TnsGoogleMaps extends View {
    marker: any;

    public static mapLoadedEvent: string = "mapLoaded";

    private _android: any;
    private _ios: any;
    // private __nativeView: any;

    public get android(): any {
        return this._android;
    }

    public set android(value) {
        this._android = value;
    }

    public get ios(): any {
        return this._ios;
    }

    public set ios(value) {
        this._ios = value;
    }

    // public get _nativeView(): any {
    //     return this.__nativeView;
    // }

    // public set _nativeView(value) {
    //     this.__nativeView = value;
    // }

    public addMarker(marker) {
        //
    }

    public clearMap() {
        //
    }
}
