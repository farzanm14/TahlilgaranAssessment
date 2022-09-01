# Tahlilgaran Farda Assessment Project

Requirements:

* View the list of users and access their profiles.
* There are two tabs on the user profile. (Albums and Posts)
* Posts can be added and edited from the list of posts. A list of comments is available for each post.
* A list of albums is displayed, and images can be accessed by clicking on them.

![Image record](https://github.com/farzanm14/TahlilgaranAssessment/blob/main/doc/record.gif) 
![Image wireframe](https://github.com/farzanm14/TahlilgaranAssessment/blob/main/doc/wireframe/allScreens.png) 



# Project Structure

`index.js` is the entry-point for our file, and is mandatory.
`App.tsx` is the main-point for our application.

- `/android` - contains native code specific to the Android OS
- `/ios` - native code specific to iOS
- `/docs` - as the name suggests - any docs
- `/src` - contains our JS and style code.
  - `/assets` - contains all assets such as images or vectorIcon components
  - `/hooks` - contains all hook files, each file has separate methods that call HTTP requests and handle the response
  - `/navigation` - navigation system lay here
  - `/screens` - contains all screens/pages, each folder has sub component and list items
  - `/shared` - whole app-wide shared
    - `/components` - app-wide shared base components
    - `/constants` - app-wide shared constant variables like endpoint and route names
    - `/theme` - app-wide theme which contains `color palette` and `font standard sizes`
     - `/services` - app-wide services(http handler and storage handler)
    - `/types` -  models should lay here
  - `/stores` - each screen has separate state manager file


## Project 3rd party libraries:
  - `mobx` - this state manger allows us to manage the application state outside of any UI framework. This makes the code decoupled, portable, and above all, easily testable.
  - `react-native-dynamic-vector-icons` - Wrapper of react-native-vector-icons to use dynamic types 
  - `react-native-fast-image` - Image component that handles image caching like browsers for the most part. If the server is returning proper cache control headers for images 
  - `react-native-flash-message` -  help to easily create highly customizable flashbars, top notifications or alerts 
  - `react-native-mmkv-storage` - An Efficient(0.0002s read/write), small & encrypted mobile key-value storage framework.
  - `react-native-modalize` - A highly customizable modal/bottom sheet
  - `react-native-responsive-dimensions` - Prepare resposive fontSize, height and width.
  - `react-native-tab-view` - A cross-platform Tab View component for React Native. Implemented using react-native-pager-view on Android & iOS,
  - `axios` - A HTTP client for making REST API calls.
  - `react-navigation` - Provide routing and navigation between screens and stacks
