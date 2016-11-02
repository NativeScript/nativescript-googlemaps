import { View } from "ui/core/view";
import { PropertyMetadata } from "ui/core/proxy";
import { Property, PropertyMetadataSettings } from "ui/core/dependency-observable";
import { Observable } from "data/observable";

var markerProperty = new Property("marker", "TnsGoogleMaps", new PropertyMetadata(null, PropertyMetadataSettings.None));

function onMarkerPropertyChanged(data) {
    let maps = data.object;
    maps._onMarkerPropertyChanged(data);
}

(<PropertyMetadata>markerProperty.metadata).onSetNativeValue = onMarkerPropertyChanged;

export class TnsGoogleMaps extends View {
    public static markerProperty: Property = markerProperty;

    public static mapLoadedEvent: string = "mapLoaded";

    private _android: any;
    private _ios: any;
    private __nativeView: any;
    
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

    public get _nativeView(): any {
        return this.__nativeView;
    }

    public set _nativeView(value) {
        this.__nativeView = value;
    }

    public get marker(): any {
        return this._getValue(TnsGoogleMaps.markerProperty);
    }

    public set marker(value) {
        this._setValue(TnsGoogleMaps.markerProperty, value);
    }

    public _onMarkerPropertyChanged(data) {
        this.addMarker(data.newValue);
    }

    public addMarker(marker) {
        //
    }
}