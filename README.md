__ATTENTION: This repository is deprecated. Use the [nativescript-google-maps-sdk](https://www.npmjs.com/package/nativescript-google-maps-sdk) plugin as an alternative.__

Welcome to the `nativescript-googlemaps` plugin for NativeScript framework 

# Prerequisites
- installed [NativeScript-CLI](https://github.com/NativeScript/nativescript-cli)

# Install `nativescript-googlemaps` plugin.

Navigate to project folder and run `NativeScript-CLI` command `tns plugin add nativescript-googlemaps`

The plugin will default to latest available version of the Android `play-services-maps` SDK.  If you need to change the version, you can add a project ext property `googlePlayServicesVersion` like so:

```
//   /app/App_Resources/Android/app.gradle

project.ext {
googlePlayServicesVersion = "+"
}
```
