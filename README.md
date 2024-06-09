# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

# Install Dependency
First, you will need to the api key to the env
```bash
WEATHER_API_KEY=
```

Then, you will need to install the javascript libraries

```bash
yarn
```

Last, you will need to install the native dependency for ios
```bash
npx pod-install ios
```

# Run project
## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see the app running in _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Iphone Example
https://github.com/aljary12/weather-app/assets/37587027/7a5d33a0-9c3d-4aef-93be-508baa7fdb25

