Welcome to the `nativescript-googlemaps` plugin for NativeScript framework 

# Prerequisites
- installed [NativeScript-CLI](https://github.com/NativeScript/nativescript-cli)

# Install `nativescript-googlemaps` plugin.

Navigate to project folder and run `NativeScript-CLI` command `tns plugin add nativescript-googlemaps`

[This](https://github.com/NativeScript/nativescript-geolocation-demo) project can be used as an example how to use `nativescript-geolocation` and `nativescript-googlemaps` plugins.

The plugin will default to latest available version of the Android `play-services-maps` SDK.  If you need to change the version, you can add a project ext property `googlePlayServicesVersion` like so:

```
//   /app/App_Resources/Android/app.gradle

project.ext {
    googlePlayServicesVersion = "+"
}
```
