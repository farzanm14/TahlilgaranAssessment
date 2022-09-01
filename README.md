# Tahlilgaran Farda Assessment Project

Requirements:

* View the list of users and access their profiles.
* There are two tabs on the user profile. (Albums and Posts)
* Posts can be added and edited from the list of posts. A list of comments is available for each post.
* A list of albums is displayed, and images can be accessed by clicking on them.

![Image record](https://github.com/farzanm14/TahlilgaranAssessment/blob/main/doc/record.gif) 
![Image wireframe](https://github.com/farzanm14/TahlilgaranAssessment/blob/main/doc/wireframe/allScreens.png) 


<img alt="React Native Typescript Boilerplate" src="../assets/logo.png" width="1050"/>

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


## Project Structure on Flat Design

```
├───android
├───ios
├───src
│   ├───screens
│   │   ├───detail
│   │   │   ├───DetailScreen.style.ts
│   │   │   └───DetailScreen.tsx
│   │   ├───home
│   │   │   ├───HomeScreen.style.ts
│   │   │   └───HomeScreen.tsx
│   │   ├───notification
│   │   │   ├───NotificationScreen.style.ts
│   │   │   └───NotificationScreen.tsx
│   │   ├───profile
│   │   │   ├───ProfileScreen.style.ts
│   │   │   └───ProfileScreen.tsx
│   │   └───search
│   │       ├───SearchScreen.style.ts
│   │       └───SearchScreen.tsx
│   ├───services
│   │   ├───api
│   │   │   ├───api.constant.ts
│   │   │   └───index.ts
│   │   ├───event-emitter
│   │   │   └───index.ts
│   │   ├───models
│   │   │   └───index.ts
│   │   └───navigation
│   │       └───index.tsx
│   ├───shared
│   │   ├───components
│   │   │   └───text-wrapper
│   │   ├───constants
│   │   │   └───index.ts
│   │   ├───localization
│   │   │   └───index.ts
│   │   └───theme
│   │       ├───fonts.ts
│   │       └───themes.ts
│   └───utils
│       └───index.ts
├───.babelrc
├───.commitlintrc.json
├───.eslintignore
├───.eslintrc.js
├───.gitattributes
├───.gitignore
├───.npmignore
├───.prettierignore
├───.prettierrc
├───.watchmanconfig
├───app.json
├───App.tsx
├───global.d.ts
├───index.js
├───metro.config.js
├───package-lock.json
├───package.json
├───react-native.config.js
├───README.md
├───tsconfig.json
```
