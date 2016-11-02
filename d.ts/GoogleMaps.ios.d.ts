
declare class GMSAddress extends NSObject implements NSCopying {

	static alloc(): GMSAddress; // inherited from NSObject

	static new(): GMSAddress; // inherited from NSObject

	/* readonly */ administrativeArea: string;

	/* readonly */ coordinate: CLLocationCoordinate2D;

	/* readonly */ country: string;

	/* readonly */ lines: NSArray<string>;

	/* readonly */ locality: string;

	/* readonly */ postalCode: string;

	/* readonly */ subLocality: string;

	/* readonly */ thoroughfare: string;

	addressLine1(): string;

	addressLine2(): string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class GMSAddressComponent extends NSObject {

	static alloc(): GMSAddressComponent; // inherited from NSObject

	static new(): GMSAddressComponent; // inherited from NSObject

	/* readonly */ name: string;

	/* readonly */ type: string;
}

declare class GMSAutocompleteFetcher extends NSObject {

	static alloc(): GMSAutocompleteFetcher; // inherited from NSObject

	static new(): GMSAutocompleteFetcher; // inherited from NSObject

	autocompleteBounds: GMSCoordinateBounds;

	autocompleteFilter: GMSAutocompleteFilter;

	delegate: GMSAutocompleteFetcherDelegate;

	constructor(o: { bounds: GMSCoordinateBounds; filter: GMSAutocompleteFilter; });

	initWithBoundsFilter(bounds: GMSCoordinateBounds, filter: GMSAutocompleteFilter): this;

	sourceTextHasChanged(text: string): void;
}

interface GMSAutocompleteFetcherDelegate extends NSObjectProtocol {

	didAutocompleteWithPredictions(predictions: NSArray<GMSAutocompletePrediction>): void;

	didFailAutocompleteWithError(error: NSError): void;
}
declare var GMSAutocompleteFetcherDelegate: {

	prototype: GMSAutocompleteFetcherDelegate;
};

declare class GMSAutocompleteFilter extends NSObject {

	static alloc(): GMSAutocompleteFilter; // inherited from NSObject

	static new(): GMSAutocompleteFilter; // inherited from NSObject

	country: string;

	type: GMSPlacesAutocompleteTypeFilter;
}

declare class GMSAutocompleteMatchFragment extends NSObject {

	static alloc(): GMSAutocompleteMatchFragment; // inherited from NSObject

	static new(): GMSAutocompleteMatchFragment; // inherited from NSObject

	/* readonly */ length: number;

	/* readonly */ offset: number;
}

declare class GMSAutocompletePrediction extends NSObject {

	static alloc(): GMSAutocompletePrediction; // inherited from NSObject

	static new(): GMSAutocompletePrediction; // inherited from NSObject

	/* readonly */ attributedFullText: NSAttributedString;

	/* readonly */ attributedPrimaryText: NSAttributedString;

	/* readonly */ attributedSecondaryText: NSAttributedString;

	/* readonly */ placeID: string;

	/* readonly */ types: NSArray<string>;
}

declare class GMSAutocompleteResultsViewController extends UIViewController implements UISearchResultsUpdating {

	static alloc(): GMSAutocompleteResultsViewController; // inherited from NSObject

	static new(): GMSAutocompleteResultsViewController; // inherited from NSObject

	autocompleteBounds: GMSCoordinateBounds;

	autocompleteFilter: GMSAutocompleteFilter;

	delegate: GMSAutocompleteResultsViewControllerDelegate;

	primaryTextColor: UIColor;

	primaryTextHighlightColor: UIColor;

	secondaryTextColor: UIColor;

	tableCellBackgroundColor: UIColor;

	tableCellSeparatorColor: UIColor;

	tintColor: UIColor;

	/* readonly */ debugDescription: string; // inherited from NSObjectProtocol

	/* readonly */ description: string; // inherited from NSObjectProtocol

	/* readonly */ hash: number; // inherited from NSObjectProtocol

	/* readonly */ isProxy: boolean; // inherited from NSObjectProtocol

	/* readonly */ superclass: typeof NSObject; // inherited from NSObjectProtocol

	/* readonly */  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateSearchResultsForSearchController(searchController: UISearchController): void;
}

interface GMSAutocompleteResultsViewControllerDelegate extends NSObjectProtocol {

	didRequestAutocompletePredictionsForResultsController?(resultsController: GMSAutocompleteResultsViewController): void;

	didUpdateAutocompletePredictionsForResultsController?(resultsController: GMSAutocompleteResultsViewController): void;

	resultsControllerDidAutocompleteWithPlace(resultsController: GMSAutocompleteResultsViewController, place: GMSPlace): void;

	resultsControllerDidFailAutocompleteWithError(resultsController: GMSAutocompleteResultsViewController, error: NSError): void;

	resultsControllerDidSelectPrediction?(resultsController: GMSAutocompleteResultsViewController, prediction: GMSAutocompletePrediction): boolean;
}
declare var GMSAutocompleteResultsViewControllerDelegate: {

	prototype: GMSAutocompleteResultsViewControllerDelegate;
};

declare class GMSAutocompleteTableDataSource extends NSObject implements UITableViewDataSource, UITableViewDelegate {

	static alloc(): GMSAutocompleteTableDataSource; // inherited from NSObject

	static new(): GMSAutocompleteTableDataSource; // inherited from NSObject

	autocompleteBounds: GMSCoordinateBounds;

	autocompleteFilter: GMSAutocompleteFilter;

	delegate: GMSAutocompleteTableDataSourceDelegate;

	primaryTextColor: UIColor;

	primaryTextHighlightColor: UIColor;

	secondaryTextColor: UIColor;

	tableCellBackgroundColor: UIColor;

	tableCellSeparatorColor: UIColor;

	tintColor: UIColor;

	/* readonly */ debugDescription: string; // inherited from NSObjectProtocol

	/* readonly */ description: string; // inherited from NSObjectProtocol

	/* readonly */ hash: number; // inherited from NSObjectProtocol

	/* readonly */ isProxy: boolean; // inherited from NSObjectProtocol

	/* readonly */ superclass: typeof NSObject; // inherited from NSObjectProtocol

	/* readonly */  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	sourceTextHasChanged(text: string): void;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface GMSAutocompleteTableDataSourceDelegate extends NSObjectProtocol {

	didRequestAutocompletePredictionsForTableDataSource?(tableDataSource: GMSAutocompleteTableDataSource): void;

	didUpdateAutocompletePredictionsForTableDataSource?(tableDataSource: GMSAutocompleteTableDataSource): void;

	tableDataSourceDidAutocompleteWithPlace(tableDataSource: GMSAutocompleteTableDataSource, place: GMSPlace): void;

	tableDataSourceDidFailAutocompleteWithError(tableDataSource: GMSAutocompleteTableDataSource, error: NSError): void;

	tableDataSourceDidSelectPrediction?(tableDataSource: GMSAutocompleteTableDataSource, prediction: GMSAutocompletePrediction): boolean;
}
declare var GMSAutocompleteTableDataSourceDelegate: {

	prototype: GMSAutocompleteTableDataSourceDelegate;
};

declare class GMSAutocompleteViewController extends UIViewController {

	static alloc(): GMSAutocompleteViewController; // inherited from NSObject

	static new(): GMSAutocompleteViewController; // inherited from NSObject

	autocompleteBounds: GMSCoordinateBounds;

	autocompleteFilter: GMSAutocompleteFilter;

	delegate: GMSAutocompleteViewControllerDelegate;

	primaryTextColor: UIColor;

	primaryTextHighlightColor: UIColor;

	secondaryTextColor: UIColor;

	tableCellBackgroundColor: UIColor;

	tableCellSeparatorColor: UIColor;

	tintColor: UIColor;
}

interface GMSAutocompleteViewControllerDelegate extends NSObjectProtocol {

	didRequestAutocompletePredictions?(viewController: GMSAutocompleteViewController): void;

	didUpdateAutocompletePredictions?(viewController: GMSAutocompleteViewController): void;

	viewControllerDidAutocompleteWithPlace(viewController: GMSAutocompleteViewController, place: GMSPlace): void;

	viewControllerDidFailAutocompleteWithError(viewController: GMSAutocompleteViewController, error: NSError): void;

	viewControllerDidSelectPrediction?(viewController: GMSAutocompleteViewController, prediction: GMSAutocompletePrediction): boolean;

	wasCancelled(viewController: GMSAutocompleteViewController): void;
}
declare var GMSAutocompleteViewControllerDelegate: {

	prototype: GMSAutocompleteViewControllerDelegate;
};

declare class GMSCALayer extends CALayer {

	static alloc(): GMSCALayer; // inherited from NSObject

	static layer(): GMSCALayer; // inherited from CALayer

	static new(): GMSCALayer; // inherited from NSObject
}

declare class GMSCameraPosition extends NSObject implements NSCopying, NSMutableCopying {

	static alloc(): GMSCameraPosition; // inherited from NSObject

	static cameraWithLatitudeLongitudeZoom(latitude: number, longitude: number, zoom: number): GMSCameraPosition;

	static cameraWithLatitudeLongitudeZoomBearingViewingAngle(latitude: number, longitude: number, zoom: number, bearing: number, viewingAngle: number): GMSCameraPosition;

	static cameraWithTargetZoom(target: CLLocationCoordinate2D, zoom: number): GMSCameraPosition;

	static cameraWithTargetZoomBearingViewingAngle(target: CLLocationCoordinate2D, zoom: number, bearing: number, viewingAngle: number): GMSCameraPosition;

	static new(): GMSCameraPosition; // inherited from NSObject

	static zoomAtCoordinateForMetersPerPoints(coordinate: CLLocationCoordinate2D, meters: number, points: number): number;

	/* readonly */ bearing: number;

	/* readonly */ target: CLLocationCoordinate2D;

	/* readonly */ viewingAngle: number;

	/* readonly */ zoom: number;

	constructor(o: { target: CLLocationCoordinate2D; zoom: number; bearing: number; viewingAngle: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithTargetZoomBearingViewingAngle(target: CLLocationCoordinate2D, zoom: number, bearing: number, viewingAngle: number): this;

	mutableCopyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class GMSCameraUpdate extends NSObject {

	static alloc(): GMSCameraUpdate; // inherited from NSObject

	static fitBounds(bounds: GMSCoordinateBounds): GMSCameraUpdate;

	static fitBoundsWithEdgeInsets(bounds: GMSCoordinateBounds, edgeInsets: UIEdgeInsets): GMSCameraUpdate;

	static fitBoundsWithPadding(bounds: GMSCoordinateBounds, padding: number): GMSCameraUpdate;

	static new(): GMSCameraUpdate; // inherited from NSObject

	static scrollByXY(dX: number, dY: number): GMSCameraUpdate;

	static setCamera(camera: GMSCameraPosition): GMSCameraUpdate;

	static setTarget(target: CLLocationCoordinate2D): GMSCameraUpdate;

	static setTargetZoom(target: CLLocationCoordinate2D, zoom: number): GMSCameraUpdate;

	static zoomBy(delta: number): GMSCameraUpdate;

	static zoomByAtPoint(zoom: number, point: CGPoint): GMSCameraUpdate;

	static zoomIn(): GMSCameraUpdate;

	static zoomOut(): GMSCameraUpdate;

	static zoomTo(zoom: number): GMSCameraUpdate;
}

declare class GMSCircle extends GMSOverlay {

	static alloc(): GMSCircle; // inherited from NSObject

	static circleWithPositionRadius(position: CLLocationCoordinate2D, radius: number): GMSCircle;

	static new(): GMSCircle; // inherited from NSObject

	fillColor: UIColor;

	position: CLLocationCoordinate2D;

	radius: number;

	strokeColor: UIColor;

	strokeWidth: number;
}

declare class GMSCoordinateBounds extends NSObject {

	static alloc(): GMSCoordinateBounds; // inherited from NSObject

	static new(): GMSCoordinateBounds; // inherited from NSObject

	/* readonly */ northEast: CLLocationCoordinate2D;

	/* readonly */ southWest: CLLocationCoordinate2D;

	/* readonly */ valid: boolean;

	constructor(o: { coordinate: CLLocationCoordinate2D; coordinate2: CLLocationCoordinate2D; });

	constructor(o: { path: GMSPath; });

	constructor(o: { region: GMSVisibleRegion; });

	containsCoordinate(coordinate: CLLocationCoordinate2D): boolean;

	includingBounds(other: GMSCoordinateBounds): GMSCoordinateBounds;

	includingCoordinate(coordinate: CLLocationCoordinate2D): GMSCoordinateBounds;

	includingPath(path: GMSPath): GMSCoordinateBounds;

	initWithCoordinateCoordinate(coord1: CLLocationCoordinate2D, coord2: CLLocationCoordinate2D): this;

	initWithPath(path: GMSPath): this;

	initWithRegion(region: GMSVisibleRegion): this;

	intersectsBounds(other: GMSCoordinateBounds): boolean;
}

declare const enum GMSFrameRate {

	kGMSFrameRatePowerSave = 0,

	kGMSFrameRateConservative = 1,

	kGMSFrameRateMaximum = 2
}

declare class GMSGeocoder extends NSObject {

	static alloc(): GMSGeocoder; // inherited from NSObject

	static geocoder(): GMSGeocoder;

	static new(): GMSGeocoder; // inherited from NSObject

	reverseGeocodeCoordinateCompletionHandler(coordinate: CLLocationCoordinate2D, handler: (p1: GMSReverseGeocodeResponse, p2: NSError) => void): void;
}

declare const enum GMSGeocoderErrorCode {

	kGMSGeocoderErrorInvalidCoordinate = 1,

	kGMSGeocoderErrorInternal = 2
}

declare function GMSGeometryArea(path: GMSPath): number;

declare function GMSGeometryContainsLocation(point: CLLocationCoordinate2D, path: GMSPath, geodesic: boolean): boolean;

declare function GMSGeometryDistance(from: CLLocationCoordinate2D, to: CLLocationCoordinate2D): number;

declare function GMSGeometryHeading(from: CLLocationCoordinate2D, to: CLLocationCoordinate2D): number;

declare function GMSGeometryInterpolate(from: CLLocationCoordinate2D, to: CLLocationCoordinate2D, fraction: number): CLLocationCoordinate2D;

declare function GMSGeometryIsLocationOnPath(point: CLLocationCoordinate2D, path: GMSPath, geodesic: boolean): boolean;

declare function GMSGeometryIsLocationOnPathTolerance(point: CLLocationCoordinate2D, path: GMSPath, geodesic: boolean, tolerance: number): boolean;

declare function GMSGeometryLength(path: GMSPath): number;

declare function GMSGeometryOffset(from: CLLocationCoordinate2D, distance: number, heading: number): CLLocationCoordinate2D;

declare function GMSGeometrySignedArea(path: GMSPath): number;

declare class GMSGroundOverlay extends GMSOverlay {

	static alloc(): GMSGroundOverlay; // inherited from NSObject

	static groundOverlayWithBoundsIcon(bounds: GMSCoordinateBounds, icon: UIImage): GMSGroundOverlay;

	static groundOverlayWithPositionIconZoomLevel(position: CLLocationCoordinate2D, icon: UIImage, zoomLevel: number): GMSGroundOverlay;

	static new(): GMSGroundOverlay; // inherited from NSObject

	anchor: CGPoint;

	bearing: number;

	bounds: GMSCoordinateBounds;

	icon: UIImage;

	opacity: number;

	position: CLLocationCoordinate2D;
}

declare class GMSIndoorBuilding extends NSObject {

	static alloc(): GMSIndoorBuilding; // inherited from NSObject

	static new(): GMSIndoorBuilding; // inherited from NSObject

	/* readonly */ defaultLevelIndex: number;

	/* readonly */ levels: NSArray<GMSIndoorLevel>;

	/* readonly */ underground: boolean;
}

declare class GMSIndoorDisplay extends NSObject {

	static alloc(): GMSIndoorDisplay; // inherited from NSObject

	static new(): GMSIndoorDisplay; // inherited from NSObject

	/* readonly */ activeBuilding: GMSIndoorBuilding;

	activeLevel: GMSIndoorLevel;

	delegate: GMSIndoorDisplayDelegate;
}

interface GMSIndoorDisplayDelegate extends NSObjectProtocol {

	didChangeActiveBuilding?(building: GMSIndoorBuilding): void;

	didChangeActiveLevel?(level: GMSIndoorLevel): void;
}
declare var GMSIndoorDisplayDelegate: {

	prototype: GMSIndoorDisplayDelegate;
};

declare class GMSIndoorLevel extends NSObject {

	static alloc(): GMSIndoorLevel; // inherited from NSObject

	static new(): GMSIndoorLevel; // inherited from NSObject

	/* readonly */ name: string;

	/* readonly */ shortName: string;
}

declare const enum GMSLengthKind {

	kGMSLengthGeodesic = 0,

	kGMSLengthRhumb = 1,

	kGMSLengthProjected = 2
}

declare class GMSMapLayer extends GMSCALayer {

	static alloc(): GMSMapLayer; // inherited from NSObject

	static layer(): GMSMapLayer; // inherited from CALayer

	static new(): GMSMapLayer; // inherited from NSObject

	cameraBearing: number;

	cameraLatitude: number;

	cameraLongitude: number;

	cameraViewingAngle: number;

	cameraZoomLevel: number;
}

interface GMSMapPoint {
	x: number;
	y: number;
}
declare var GMSMapPoint: interop.StructType<GMSMapPoint>;

declare function GMSMapPointDistance(a: GMSMapPoint, b: GMSMapPoint): number;

declare function GMSMapPointInterpolate(a: GMSMapPoint, b: GMSMapPoint, t: number): GMSMapPoint;

declare class GMSMapView extends UIView {

	static alloc(): GMSMapView; // inherited from NSObject

	static appearance(): GMSMapView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GMSMapView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GMSMapView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): GMSMapView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GMSMapView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): GMSMapView; // inherited from UIAppearance

	static mapWithFrameCamera(frame: CGRect, camera: GMSCameraPosition): GMSMapView;

	static new(): GMSMapView; // inherited from NSObject

	buildingsEnabled: boolean;

	camera: GMSCameraPosition;

	delegate: GMSMapViewDelegate;

	/* readonly */ indoorDisplay: GMSIndoorDisplay;

	indoorEnabled: boolean;

	/* readonly */ layer: GMSMapLayer;

	mapType: GMSMapViewType;

	/* readonly */ maxZoom: number;

	/* readonly */ minZoom: number;

	/* readonly */ myLocation: CLLocation;

	myLocationEnabled: boolean;

	padding: UIEdgeInsets;

	preferredFrameRate: GMSFrameRate;

	/* readonly */ projection: GMSProjection;

	selectedMarker: GMSMarker;

	/* readonly */ settings: GMSUISettings;

	trafficEnabled: boolean;

	animateToBearing(bearing: number): void;

	animateToCameraPosition(cameraPosition: GMSCameraPosition): void;

	animateToLocation(location: CLLocationCoordinate2D): void;

	animateToViewingAngle(viewingAngle: number): void;

	animateToZoom(zoom: number): void;

	animateWithCameraUpdate(cameraUpdate: GMSCameraUpdate): void;

	cameraForBoundsInsets(bounds: GMSCoordinateBounds, insets: UIEdgeInsets): GMSCameraPosition;

	clear(): void;

	moveCamera(update: GMSCameraUpdate): void;

	setMinZoomMaxZoom(minZoom: number, maxZoom: number): void;

	startRendering(): void;

	stopRendering(): void;
}

interface GMSMapViewDelegate extends NSObjectProtocol {

	didTapMyLocationButtonForMapView?(mapView: GMSMapView): boolean;

	mapViewDidBeginDraggingMarker?(mapView: GMSMapView, marker: GMSMarker): void;

	mapViewDidChangeCameraPosition?(mapView: GMSMapView, position: GMSCameraPosition): void;

	mapViewDidCloseInfoWindowOfMarker?(mapView: GMSMapView, marker: GMSMarker): void;

	mapViewDidDragMarker?(mapView: GMSMapView, marker: GMSMarker): void;

	mapViewDidEndDraggingMarker?(mapView: GMSMapView, marker: GMSMarker): void;

	mapViewDidFinishTileRendering?(mapView: GMSMapView): void;

	mapViewDidLongPressAtCoordinate?(mapView: GMSMapView, coordinate: CLLocationCoordinate2D): void;

	mapViewDidLongPressInfoWindowOfMarker?(mapView: GMSMapView, marker: GMSMarker): void;

	mapViewDidStartTileRendering?(mapView: GMSMapView): void;

	mapViewDidTapAtCoordinate?(mapView: GMSMapView, coordinate: CLLocationCoordinate2D): void;

	mapViewDidTapInfoWindowOfMarker?(mapView: GMSMapView, marker: GMSMarker): void;

	mapViewDidTapMarker?(mapView: GMSMapView, marker: GMSMarker): boolean;

	mapViewDidTapOverlay?(mapView: GMSMapView, overlay: GMSOverlay): void;

	mapViewIdleAtCameraPosition?(mapView: GMSMapView, position: GMSCameraPosition): void;

	mapViewMarkerInfoContents?(mapView: GMSMapView, marker: GMSMarker): UIView;

	mapViewMarkerInfoWindow?(mapView: GMSMapView, marker: GMSMarker): UIView;

	mapViewSnapshotReady?(mapView: GMSMapView): void;

	mapViewWillMove?(mapView: GMSMapView, gesture: boolean): void;
}
declare var GMSMapViewDelegate: {

	prototype: GMSMapViewDelegate;
};

declare const enum GMSMapViewType {

	kGMSTypeNormal = 1,

	kGMSTypeSatellite = 2,

	kGMSTypeTerrain = 3,

	kGMSTypeHybrid = 4,

	kGMSTypeNone = 5
}

declare class GMSMarker extends GMSOverlay {

	static alloc(): GMSMarker; // inherited from NSObject

	static markerImageWithColor(color: UIColor): UIImage;

	static markerWithPosition(position: CLLocationCoordinate2D): GMSMarker;

	static new(): GMSMarker; // inherited from NSObject

	appearAnimation: GMSMarkerAnimation;

	draggable: boolean;

	flat: boolean;

	groundAnchor: CGPoint;

	icon: UIImage;

	iconView: UIView;

	infoWindowAnchor: CGPoint;

	/* readonly */ layer: GMSMarkerLayer;

	opacity: number;

	panoramaView: GMSPanoramaView;

	position: CLLocationCoordinate2D;

	rotation: number;

	snippet: string;

	tracksInfoWindowChanges: boolean;

	tracksViewChanges: boolean;

	userData: any;
}

declare const enum GMSMarkerAnimation {

	kGMSMarkerAnimationNone = 0,

	kGMSMarkerAnimationPop = 1
}

declare class GMSMarkerLayer extends CALayer {

	static alloc(): GMSMarkerLayer; // inherited from NSObject

	static layer(): GMSMarkerLayer; // inherited from CALayer

	static new(): GMSMarkerLayer; // inherited from NSObject

	latitude: number;

	longitude: number;

	rotation: number;
}

declare class GMSMutableCameraPosition extends GMSCameraPosition {

	static alloc(): GMSMutableCameraPosition; // inherited from NSObject

	static cameraWithLatitudeLongitudeZoom(latitude: number, longitude: number, zoom: number): GMSMutableCameraPosition; // inherited from GMSCameraPosition

	static cameraWithLatitudeLongitudeZoomBearingViewingAngle(latitude: number, longitude: number, zoom: number, bearing: number, viewingAngle: number): GMSMutableCameraPosition; // inherited from GMSCameraPosition

	static cameraWithTargetZoom(target: CLLocationCoordinate2D, zoom: number): GMSMutableCameraPosition; // inherited from GMSCameraPosition

	static cameraWithTargetZoomBearingViewingAngle(target: CLLocationCoordinate2D, zoom: number, bearing: number, viewingAngle: number): GMSMutableCameraPosition; // inherited from GMSCameraPosition

	static new(): GMSMutableCameraPosition; // inherited from NSObject

	bearing: number;

	target: CLLocationCoordinate2D;

	viewingAngle: number;

	zoom: number;
}

declare class GMSMutablePath extends GMSPath {

	static alloc(): GMSMutablePath; // inherited from NSObject

	static new(): GMSMutablePath; // inherited from NSObject

	static path(): GMSMutablePath; // inherited from GMSPath

	static pathFromEncodedPath(encodedPath: string): GMSMutablePath; // inherited from GMSPath

	addCoordinate(coord: CLLocationCoordinate2D): void;

	addLatitudeLongitude(latitude: number, longitude: number): void;

	insertCoordinateAtIndex(coord: CLLocationCoordinate2D, index: number): void;

	removeAllCoordinates(): void;

	removeCoordinateAtIndex(index: number): void;

	removeLastCoordinate(): void;

	replaceCoordinateAtIndexWithCoordinate(index: number, coord: CLLocationCoordinate2D): void;
}

interface GMSOrientation {
	heading: number;
	pitch: number;
}
declare var GMSOrientation: interop.StructType<GMSOrientation>;

declare class GMSOverlay extends NSObject implements NSCopying {

	static alloc(): GMSOverlay; // inherited from NSObject

	static new(): GMSOverlay; // inherited from NSObject

	map: GMSMapView;

	tappable: boolean;

	title: string;

	zIndex: number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class GMSPanorama extends NSObject {

	static alloc(): GMSPanorama; // inherited from NSObject

	static new(): GMSPanorama; // inherited from NSObject

	/* readonly */ coordinate: CLLocationCoordinate2D;

	/* readonly */ links: NSArray<GMSPanoramaLink>;

	/* readonly */ panoramaID: string;
}

declare class GMSPanoramaCamera extends NSObject {

	static alloc(): GMSPanoramaCamera; // inherited from NSObject

	static cameraWithHeadingPitchZoom(heading: number, pitch: number, zoom: number): GMSPanoramaCamera;

	static cameraWithHeadingPitchZoomFOV(heading: number, pitch: number, zoom: number, FOV: number): GMSPanoramaCamera;

	static cameraWithOrientationZoom(orientation: GMSOrientation, zoom: number): GMSPanoramaCamera;

	static cameraWithOrientationZoomFOV(orientation: GMSOrientation, zoom: number, FOV: number): GMSPanoramaCamera;

	static new(): GMSPanoramaCamera; // inherited from NSObject

	/* readonly */ FOV: number;

	/* readonly */ orientation: GMSOrientation;

	/* readonly */ zoom: number;

	constructor(o: { orientation: GMSOrientation; zoom: number; FOV: number; });

	initWithOrientationZoomFOV(orientation: GMSOrientation, zoom: number, FOV: number): this;
}

declare class GMSPanoramaCameraUpdate extends NSObject {

	static alloc(): GMSPanoramaCameraUpdate; // inherited from NSObject

	static new(): GMSPanoramaCameraUpdate; // inherited from NSObject

	static rotateBy(deltaHeading: number): GMSPanoramaCameraUpdate;

	static setHeading(heading: number): GMSPanoramaCameraUpdate;

	static setPitch(pitch: number): GMSPanoramaCameraUpdate;

	static setZoom(zoom: number): GMSPanoramaCameraUpdate;
}

declare class GMSPanoramaLayer extends GMSCALayer {

	static alloc(): GMSPanoramaLayer; // inherited from NSObject

	static layer(): GMSPanoramaLayer; // inherited from CALayer

	static new(): GMSPanoramaLayer; // inherited from NSObject

	cameraFOV: number;

	cameraHeading: number;

	cameraPitch: number;

	cameraZoom: number;
}

declare class GMSPanoramaLink extends NSObject {

	static alloc(): GMSPanoramaLink; // inherited from NSObject

	static new(): GMSPanoramaLink; // inherited from NSObject

	heading: number;

	panoramaID: string;
}

declare class GMSPanoramaService extends NSObject {

	static alloc(): GMSPanoramaService; // inherited from NSObject

	static new(): GMSPanoramaService; // inherited from NSObject

	requestPanoramaNearCoordinateCallback(coordinate: CLLocationCoordinate2D, callback: (p1: GMSPanorama, p2: NSError) => void): void;

	requestPanoramaNearCoordinateRadiusCallback(coordinate: CLLocationCoordinate2D, radius: number, callback: (p1: GMSPanorama, p2: NSError) => void): void;

	requestPanoramaWithIDCallback(panoramaID: string, callback: (p1: GMSPanorama, p2: NSError) => void): void;
}

declare class GMSPanoramaView extends UIView {

	static alloc(): GMSPanoramaView; // inherited from NSObject

	static appearance(): GMSPanoramaView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GMSPanoramaView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GMSPanoramaView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): GMSPanoramaView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GMSPanoramaView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): GMSPanoramaView; // inherited from UIAppearance

	static new(): GMSPanoramaView; // inherited from NSObject

	static panoramaWithFrameNearCoordinate(frame: CGRect, coordinate: CLLocationCoordinate2D): GMSPanoramaView;

	static panoramaWithFrameNearCoordinateRadius(frame: CGRect, coordinate: CLLocationCoordinate2D, radius: number): GMSPanoramaView;

	camera: GMSPanoramaCamera;

	delegate: GMSPanoramaViewDelegate;

	/* readonly */ layer: GMSPanoramaLayer;

	navigationGestures: boolean;

	navigationLinksHidden: boolean;

	orientationGestures: boolean;

	panorama: GMSPanorama;

	streetNamesHidden: boolean;

	zoomGestures: boolean;

	animateToCameraAnimationDuration(camera: GMSPanoramaCamera, duration: number): void;

	moveNearCoordinate(coordinate: CLLocationCoordinate2D): void;

	moveNearCoordinateRadius(coordinate: CLLocationCoordinate2D, radius: number): void;

	moveToPanoramaID(panoramaID: string): void;

	orientationForPoint(point: CGPoint): GMSOrientation;

	pointForOrientation(orientation: GMSOrientation): CGPoint;

	setAllGesturesEnabled(enabled: boolean): void;

	updateCameraAnimationDuration(cameraUpdate: GMSPanoramaCameraUpdate, duration: number): void;
}

interface GMSPanoramaViewDelegate extends NSObjectProtocol {

	panoramaViewDidFinishRendering?(panoramaView: GMSPanoramaView): void;

	panoramaViewDidMoveCamera?(panoramaView: GMSPanoramaView, camera: GMSPanoramaCamera): void;

	panoramaViewDidMoveToPanorama?(view: GMSPanoramaView, panorama: GMSPanorama): void;

	panoramaViewDidMoveToPanoramaNearCoordinate?(view: GMSPanoramaView, panorama: GMSPanorama, coordinate: CLLocationCoordinate2D): void;

	panoramaViewDidStartRendering?(panoramaView: GMSPanoramaView): void;

	panoramaViewDidTap?(panoramaView: GMSPanoramaView, point: CGPoint): void;

	panoramaViewDidTapMarker?(panoramaView: GMSPanoramaView, marker: GMSMarker): boolean;

	panoramaViewErrorOnMoveNearCoordinate?(view: GMSPanoramaView, error: NSError, coordinate: CLLocationCoordinate2D): void;

	panoramaViewErrorOnMoveToPanoramaID?(view: GMSPanoramaView, error: NSError, panoramaID: string): void;

	panoramaViewWillMoveToPanoramaID?(view: GMSPanoramaView, panoramaID: string): void;
}
declare var GMSPanoramaViewDelegate: {

	prototype: GMSPanoramaViewDelegate;
};

declare class GMSPath extends NSObject implements NSCopying, NSMutableCopying {

	static alloc(): GMSPath; // inherited from NSObject

	static new(): GMSPath; // inherited from NSObject

	static path(): GMSPath;

	static pathFromEncodedPath(encodedPath: string): GMSPath;

	constructor(o: { path: GMSPath; });

	coordinateAtIndex(index: number): CLLocationCoordinate2D;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	count(): number;

	encodedPath(): string;

	initWithPath(path: GMSPath): this;

	lengthOfKind(kind: GMSLengthKind): number;

	mutableCopyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	pathOffsetByLatitudeLongitude(deltaLatitude: number, deltaLongitude: number): this;

	segmentsForLengthKind(length: number, kind: GMSLengthKind): number;
}

declare class GMSPlace extends NSObject {

	static alloc(): GMSPlace; // inherited from NSObject

	static new(): GMSPlace; // inherited from NSObject

	/* readonly */ addressComponents: NSArray<GMSAddressComponent>;

	/* readonly */ attributions: NSAttributedString;

	/* readonly */ coordinate: CLLocationCoordinate2D;

	/* readonly */ formattedAddress: string;

	/* readonly */ name: string;

	/* readonly */ openNowStatus: GMSPlacesOpenNowStatus;

	/* readonly */ phoneNumber: string;

	/* readonly */ placeID: string;

	/* readonly */ priceLevel: GMSPlacesPriceLevel;

	/* readonly */ rating: number;

	/* readonly */ types: NSArray<string>;

	/* readonly */ viewport: GMSCoordinateBounds;

	/* readonly */ website: NSURL;
}

declare class GMSPlaceLikelihood extends NSObject implements NSCopying {

	static alloc(): GMSPlaceLikelihood; // inherited from NSObject

	static new(): GMSPlaceLikelihood; // inherited from NSObject

	/* readonly */ likelihood: number;

	/* readonly */ place: GMSPlace;

	constructor(o: { place: GMSPlace; likelihood: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithPlaceLikelihood(place: GMSPlace, likelihood: number): this;
}

declare class GMSPlaceLikelihoodList extends NSObject {

	static alloc(): GMSPlaceLikelihoodList; // inherited from NSObject

	static new(): GMSPlaceLikelihoodList; // inherited from NSObject

	/* readonly */ attributions: NSAttributedString;

	likelihoods: NSArray<GMSPlaceLikelihood>;
}

declare class GMSPlacePhotoMetadata extends NSObject {

	static alloc(): GMSPlacePhotoMetadata; // inherited from NSObject

	static new(): GMSPlacePhotoMetadata; // inherited from NSObject

	/* readonly */ attributions: NSAttributedString;

	/* readonly */ maxSize: CGSize;
}

declare class GMSPlacePhotoMetadataList extends NSObject {

	static alloc(): GMSPlacePhotoMetadataList; // inherited from NSObject

	static new(): GMSPlacePhotoMetadataList; // inherited from NSObject

	/* readonly */ results: NSArray<GMSPlacePhotoMetadata>;
}

declare class GMSPlacePicker extends NSObject {

	static alloc(): GMSPlacePicker; // inherited from NSObject

	static new(): GMSPlacePicker; // inherited from NSObject

	/* readonly */ config: GMSPlacePickerConfig;

	constructor(o: { config: GMSPlacePickerConfig; });

	initWithConfig(config: GMSPlacePickerConfig): this;

	pickPlaceWithCallback(callback: (p1: GMSPlace, p2: NSError) => void): void;
}

declare class GMSPlacePickerConfig extends NSObject {

	static alloc(): GMSPlacePickerConfig; // inherited from NSObject

	static new(): GMSPlacePickerConfig; // inherited from NSObject

	/* readonly */ viewport: GMSCoordinateBounds;

	constructor(o: { viewport: GMSCoordinateBounds; });

	initWithViewport(viewport: GMSCoordinateBounds): this;
}

declare const enum GMSPlacePickerErrorCode {

	kGMSPlacePickerUnknownError = -1,

	kGMSPlacePickerInternalError = -2,

	kGMSPlacePickerInvalidConfig = -3,

	kGMSPlacePickerOverlappingCalls = -4
}

declare const enum GMSPlacesAutocompleteTypeFilter {

	kGMSPlacesAutocompleteTypeFilterNoFilter = 0,

	kGMSPlacesAutocompleteTypeFilterGeocode = 1,

	kGMSPlacesAutocompleteTypeFilterAddress = 2,

	kGMSPlacesAutocompleteTypeFilterEstablishment = 3,

	kGMSPlacesAutocompleteTypeFilterRegion = 4,

	kGMSPlacesAutocompleteTypeFilterCity = 5
}

declare class GMSPlacesClient extends NSObject {

	static alloc(): GMSPlacesClient; // inherited from NSObject

	static new(): GMSPlacesClient; // inherited from NSObject

	static sharedClient(): GMSPlacesClient;

	addPlaceCallback(place: GMSUserAddedPlace, callback: (p1: GMSPlace, p2: NSError) => void): void;

	autocompleteQueryBoundsFilterCallback(query: string, bounds: GMSCoordinateBounds, filter: GMSAutocompleteFilter, callback: (p1: NSArray<GMSAutocompletePrediction>, p2: NSError) => void): void;

	currentPlaceWithCallback(callback: (p1: GMSPlaceLikelihoodList, p2: NSError) => void): void;

	loadPlacePhotoCallback(photo: GMSPlacePhotoMetadata, callback: (p1: UIImage, p2: NSError) => void): void;

	loadPlacePhotoConstrainedToSizeScaleCallback(photo: GMSPlacePhotoMetadata, maxSize: CGSize, scale: number, callback: (p1: UIImage, p2: NSError) => void): void;

	lookUpPhotosForPlaceIDCallback(placeID: string, callback: (p1: GMSPlacePhotoMetadataList, p2: NSError) => void): void;

	lookUpPlaceIDCallback(placeID: string, callback: (p1: GMSPlace, p2: NSError) => void): void;

	reportDeviceAtPlaceWithID(placeID: string): void;
}

declare const enum GMSPlacesErrorCode {

	kGMSPlacesNetworkError = -1,

	kGMSPlacesServerError = -2,

	kGMSPlacesInternalError = -3,

	kGMSPlacesKeyInvalid = -4,

	kGMSPlacesKeyExpired = -5,

	kGMSPlacesUsageLimitExceeded = -6,

	kGMSPlacesRateLimitExceeded = -7,

	kGMSPlacesDeviceRateLimitExceeded = -8,

	kGMSPlacesAccessNotConfigured = -9,

	kGMSPlacesIncorrectBundleIdentifier = -10,

	kGMSPlacesLocationError = -11
}

declare const enum GMSPlacesOpenNowStatus {

	kGMSPlacesOpenNowStatusYes = 0,

	kGMSPlacesOpenNowStatusNo = 1,

	kGMSPlacesOpenNowStatusUnknown = 2
}

declare const enum GMSPlacesPriceLevel {

	kGMSPlacesPriceLevelUnknown = -1,

	kGMSPlacesPriceLevelFree = 0,

	kGMSPlacesPriceLevelCheap = 1,

	kGMSPlacesPriceLevelMedium = 2,

	kGMSPlacesPriceLevelHigh = 3,

	kGMSPlacesPriceLevelExpensive = 4
}

declare class GMSPolygon extends GMSOverlay {

	static alloc(): GMSPolygon; // inherited from NSObject

	static new(): GMSPolygon; // inherited from NSObject

	static polygonWithPath(path: GMSPath): GMSPolygon;

	fillColor: UIColor;

	geodesic: boolean;

	holes: NSArray<GMSPath>;

	path: GMSPath;

	strokeColor: UIColor;

	strokeWidth: number;
}

declare class GMSPolyline extends GMSOverlay {

	static alloc(): GMSPolyline; // inherited from NSObject

	static new(): GMSPolyline; // inherited from NSObject

	static polylineWithPath(path: GMSPath): GMSPolyline;

	geodesic: boolean;

	path: GMSPath;

	spans: NSArray<GMSStyleSpan>;

	strokeColor: UIColor;

	strokeWidth: number;
}

declare function GMSProject(coordinate: CLLocationCoordinate2D): GMSMapPoint;

declare class GMSProjection extends NSObject {

	static alloc(): GMSProjection; // inherited from NSObject

	static new(): GMSProjection; // inherited from NSObject

	containsCoordinate(coordinate: CLLocationCoordinate2D): boolean;

	coordinateForPoint(point: CGPoint): CLLocationCoordinate2D;

	pointForCoordinate(coordinate: CLLocationCoordinate2D): CGPoint;

	pointsForMetersAtCoordinate(meters: number, coordinate: CLLocationCoordinate2D): number;

	visibleRegion(): GMSVisibleRegion;
}

declare class GMSReverseGeocodeResponse extends NSObject implements NSCopying {

	static alloc(): GMSReverseGeocodeResponse; // inherited from NSObject

	static new(): GMSReverseGeocodeResponse; // inherited from NSObject

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	firstResult(): GMSAddress;

	results(): NSArray<GMSAddress>;
}

declare class GMSServices extends NSObject {

	static SDKVersion(): string;

	static alloc(): GMSServices; // inherited from NSObject

	static new(): GMSServices; // inherited from NSObject

	static openSourceLicenseInfo(): string;

	static provideAPIKey(APIKey: string): boolean;

	static sharedServices(): NSObjectProtocol;
}

declare class GMSStrokeStyle extends NSObject {

	static alloc(): GMSStrokeStyle; // inherited from NSObject

	static gradientFromColorToColor(fromColor: UIColor, toColor: UIColor): GMSStrokeStyle;

	static new(): GMSStrokeStyle; // inherited from NSObject

	static solidColor(color: UIColor): GMSStrokeStyle;
}

declare class GMSStyleSpan extends NSObject {

	static alloc(): GMSStyleSpan; // inherited from NSObject

	static new(): GMSStyleSpan; // inherited from NSObject

	static spanWithColor(color: UIColor): GMSStyleSpan;

	static spanWithColorSegments(color: UIColor, segments: number): GMSStyleSpan;

	static spanWithStyle(style: GMSStrokeStyle): GMSStyleSpan;

	static spanWithStyleSegments(style: GMSStrokeStyle, segments: number): GMSStyleSpan;

	/* readonly */ segments: number;

	/* readonly */ style: GMSStrokeStyle;
}

declare function GMSStyleSpans(path: GMSPath, styles: NSArray<GMSStrokeStyle>, lengths: NSArray<number>, lengthKind: GMSLengthKind): NSArray<GMSStyleSpan>;

declare function GMSStyleSpansOffset(path: GMSPath, styles: NSArray<GMSStrokeStyle>, lengths: NSArray<number>, lengthKind: GMSLengthKind, lengthOffset: number): NSArray<GMSStyleSpan>;

declare class GMSSyncTileLayer extends GMSTileLayer {

	static alloc(): GMSSyncTileLayer; // inherited from NSObject

	static new(): GMSSyncTileLayer; // inherited from NSObject

	tileForXYZoom(x: number, y: number, zoom: number): UIImage;
}

declare class GMSTileLayer extends NSObject {

	static alloc(): GMSTileLayer; // inherited from NSObject

	static new(): GMSTileLayer; // inherited from NSObject

	fadeIn: boolean;

	map: GMSMapView;

	opacity: number;

	tileSize: number;

	zIndex: number;

	clearTileCache(): void;

	requestTileForXYZoomReceiver(x: number, y: number, zoom: number, receiver: GMSTileReceiver): void;
}

interface GMSTileReceiver extends NSObjectProtocol {

	receiveTileWithXYZoomImage(x: number, y: number, zoom: number, image: UIImage): void;
}
declare var GMSTileReceiver: {

	prototype: GMSTileReceiver;
};

declare class GMSUISettings extends NSObject {

	static alloc(): GMSUISettings; // inherited from NSObject

	static new(): GMSUISettings; // inherited from NSObject

	allowScrollGesturesDuringRotateOrZoom: boolean;

	compassButton: boolean;

	consumesGesturesInView: boolean;

	indoorPicker: boolean;

	myLocationButton: boolean;

	rotateGestures: boolean;

	scrollGestures: boolean;

	tiltGestures: boolean;

	zoomGestures: boolean;

	setAllGesturesEnabled(enabled: boolean): void;
}

declare class GMSURLTileLayer extends GMSTileLayer {

	static alloc(): GMSURLTileLayer; // inherited from NSObject

	static new(): GMSURLTileLayer; // inherited from NSObject

	static tileLayerWithURLConstructor(constructor: (p1: number, p2: number, p3: number) => NSURL): GMSURLTileLayer;

	userAgent: string;
}

declare function GMSUnproject(point: GMSMapPoint): CLLocationCoordinate2D;

declare class GMSUserAddedPlace extends NSObject {

	static alloc(): GMSUserAddedPlace; // inherited from NSObject

	static new(): GMSUserAddedPlace; // inherited from NSObject

	address: string;

	coordinate: CLLocationCoordinate2D;

	name: string;

	phoneNumber: string;

	types: NSArray<string>;

	website: string;
}

interface GMSVisibleRegion {
	nearLeft: CLLocationCoordinate2D;
	nearRight: CLLocationCoordinate2D;
	farLeft: CLLocationCoordinate2D;
	farRight: CLLocationCoordinate2D;
}
declare var GMSVisibleRegion: interop.StructType<GMSVisibleRegion>;

declare var kGMSAccessibilityCompass: string;

declare var kGMSAccessibilityMyLocation: string;

declare var kGMSAutocompleteMatchAttribute: string;

declare var kGMSEarthRadius: number;

declare var kGMSEquatorProjectedMeter: number;

declare var kGMSGroundOverlayDefaultAnchor: CGPoint;

declare var kGMSLayerCameraBearingKey: string;

declare var kGMSLayerCameraLatitudeKey: string;

declare var kGMSLayerCameraLongitudeKey: string;

declare var kGMSLayerCameraViewingAngleKey: string;

declare var kGMSLayerCameraZoomLevelKey: string;

declare var kGMSLayerPanoramaFOVKey: string;

declare var kGMSLayerPanoramaHeadingKey: string;

declare var kGMSLayerPanoramaPitchKey: string;

declare var kGMSLayerPanoramaZoomKey: string;

declare var kGMSMarkerDefaultGroundAnchor: CGPoint;

declare var kGMSMarkerDefaultInfoWindowAnchor: CGPoint;

declare var kGMSMarkerLayerLatitude: string;

declare var kGMSMarkerLayerLongitude: string;

declare var kGMSMarkerLayerOpacity: string;

declare var kGMSMarkerLayerRotation: string;

declare var kGMSMaxZoomLevel: number;

declare var kGMSMinZoomLevel: number;

declare var kGMSPlacePickerErrorDomain: string;

declare var kGMSPlaceTypeAccounting: string;

declare var kGMSPlaceTypeAdministrativeAreaLevel1: string;

declare var kGMSPlaceTypeAdministrativeAreaLevel2: string;

declare var kGMSPlaceTypeAdministrativeAreaLevel3: string;

declare var kGMSPlaceTypeAdministrativeAreaLevel4: string;

declare var kGMSPlaceTypeAdministrativeAreaLevel5: string;

declare var kGMSPlaceTypeAirport: string;

declare var kGMSPlaceTypeAmusementPark: string;

declare var kGMSPlaceTypeAquarium: string;

declare var kGMSPlaceTypeArtGallery: string;

declare var kGMSPlaceTypeAtm: string;

declare var kGMSPlaceTypeBakery: string;

declare var kGMSPlaceTypeBank: string;

declare var kGMSPlaceTypeBar: string;

declare var kGMSPlaceTypeBeautySalon: string;

declare var kGMSPlaceTypeBicycleStore: string;

declare var kGMSPlaceTypeBookStore: string;

declare var kGMSPlaceTypeBowlingAlley: string;

declare var kGMSPlaceTypeBusStation: string;

declare var kGMSPlaceTypeCafe: string;

declare var kGMSPlaceTypeCampground: string;

declare var kGMSPlaceTypeCarDealer: string;

declare var kGMSPlaceTypeCarRental: string;

declare var kGMSPlaceTypeCarRepair: string;

declare var kGMSPlaceTypeCarWash: string;

declare var kGMSPlaceTypeCasino: string;

declare var kGMSPlaceTypeCemetery: string;

declare var kGMSPlaceTypeChurch: string;

declare var kGMSPlaceTypeCityHall: string;

declare var kGMSPlaceTypeClothingStore: string;

declare var kGMSPlaceTypeColloquialArea: string;

declare var kGMSPlaceTypeConvenienceStore: string;

declare var kGMSPlaceTypeCountry: string;

declare var kGMSPlaceTypeCourthouse: string;

declare var kGMSPlaceTypeDentist: string;

declare var kGMSPlaceTypeDepartmentStore: string;

declare var kGMSPlaceTypeDoctor: string;

declare var kGMSPlaceTypeElectrician: string;

declare var kGMSPlaceTypeElectronicsStore: string;

declare var kGMSPlaceTypeEmbassy: string;

declare var kGMSPlaceTypeEstablishment: string;

declare var kGMSPlaceTypeFinance: string;

declare var kGMSPlaceTypeFireStation: string;

declare var kGMSPlaceTypeFloor: string;

declare var kGMSPlaceTypeFlorist: string;

declare var kGMSPlaceTypeFood: string;

declare var kGMSPlaceTypeFuneralHome: string;

declare var kGMSPlaceTypeFurnitureStore: string;

declare var kGMSPlaceTypeGasStation: string;

declare var kGMSPlaceTypeGeneralContractor: string;

declare var kGMSPlaceTypeGeocode: string;

declare var kGMSPlaceTypeGroceryOrSupermarket: string;

declare var kGMSPlaceTypeGym: string;

declare var kGMSPlaceTypeHairCare: string;

declare var kGMSPlaceTypeHardwareStore: string;

declare var kGMSPlaceTypeHealth: string;

declare var kGMSPlaceTypeHinduTemple: string;

declare var kGMSPlaceTypeHomeGoodsStore: string;

declare var kGMSPlaceTypeHospital: string;

declare var kGMSPlaceTypeInsuranceAgency: string;

declare var kGMSPlaceTypeIntersection: string;

declare var kGMSPlaceTypeJewelryStore: string;

declare var kGMSPlaceTypeLaundry: string;

declare var kGMSPlaceTypeLawyer: string;

declare var kGMSPlaceTypeLibrary: string;

declare var kGMSPlaceTypeLiquorStore: string;

declare var kGMSPlaceTypeLocalGovernmentOffice: string;

declare var kGMSPlaceTypeLocality: string;

declare var kGMSPlaceTypeLocksmith: string;

declare var kGMSPlaceTypeLodging: string;

declare var kGMSPlaceTypeMealDelivery: string;

declare var kGMSPlaceTypeMealTakeaway: string;

declare var kGMSPlaceTypeMosque: string;

declare var kGMSPlaceTypeMovieRental: string;

declare var kGMSPlaceTypeMovieTheater: string;

declare var kGMSPlaceTypeMovingCompany: string;

declare var kGMSPlaceTypeMuseum: string;

declare var kGMSPlaceTypeNaturalFeature: string;

declare var kGMSPlaceTypeNeighborhood: string;

declare var kGMSPlaceTypeNightClub: string;

declare var kGMSPlaceTypePainter: string;

declare var kGMSPlaceTypePark: string;

declare var kGMSPlaceTypeParking: string;

declare var kGMSPlaceTypePetStore: string;

declare var kGMSPlaceTypePharmacy: string;

declare var kGMSPlaceTypePhysiotherapist: string;

declare var kGMSPlaceTypePlaceOfWorship: string;

declare var kGMSPlaceTypePlumber: string;

declare var kGMSPlaceTypePointOfInterest: string;

declare var kGMSPlaceTypePolice: string;

declare var kGMSPlaceTypePolitical: string;

declare var kGMSPlaceTypePostBox: string;

declare var kGMSPlaceTypePostOffice: string;

declare var kGMSPlaceTypePostalCode: string;

declare var kGMSPlaceTypePostalCodePrefix: string;

declare var kGMSPlaceTypePostalCodeSuffix: string;

declare var kGMSPlaceTypePostalTown: string;

declare var kGMSPlaceTypePremise: string;

declare var kGMSPlaceTypeRealEstateAgency: string;

declare var kGMSPlaceTypeRestaurant: string;

declare var kGMSPlaceTypeRoofingContractor: string;

declare var kGMSPlaceTypeRoom: string;

declare var kGMSPlaceTypeRoute: string;

declare var kGMSPlaceTypeRvPark: string;

declare var kGMSPlaceTypeSchool: string;

declare var kGMSPlaceTypeShoeStore: string;

declare var kGMSPlaceTypeShoppingMall: string;

declare var kGMSPlaceTypeSpa: string;

declare var kGMSPlaceTypeStadium: string;

declare var kGMSPlaceTypeStorage: string;

declare var kGMSPlaceTypeStore: string;

declare var kGMSPlaceTypeStreetAddress: string;

declare var kGMSPlaceTypeStreetNumber: string;

declare var kGMSPlaceTypeSublocality: string;

declare var kGMSPlaceTypeSublocalityLevel1: string;

declare var kGMSPlaceTypeSublocalityLevel2: string;

declare var kGMSPlaceTypeSublocalityLevel3: string;

declare var kGMSPlaceTypeSublocalityLevel4: string;

declare var kGMSPlaceTypeSublocalityLevel5: string;

declare var kGMSPlaceTypeSubpremise: string;

declare var kGMSPlaceTypeSubwayStation: string;

declare var kGMSPlaceTypeSynagogue: string;

declare var kGMSPlaceTypeTaxiStand: string;

declare var kGMSPlaceTypeTrainStation: string;

declare var kGMSPlaceTypeTransitStation: string;

declare var kGMSPlaceTypeTravelAgency: string;

declare var kGMSPlaceTypeUniversity: string;

declare var kGMSPlaceTypeVeterinaryCare: string;

declare var kGMSPlaceTypeZoo: string;

declare var kGMSPlacesErrorDomain: string;

declare var kGMSTileLayerNoTile: UIImage;
