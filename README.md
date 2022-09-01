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
├───📁 assets/
│   ├───📁 icons/
│   │   ├───📄 AlbumIcon.tsx
│   │   ├───📄 BackIcon.tsx
│   │   ├───📄 CommentIcon.tsx
│   │   ├───📄 CreateIcon.tsx
│   │   ├───📄 DeleteIcon.tsx
│   │   ├───📄 EditIcon.tsx
│   │   ├───📄 MoreIcon.tsx
│   │   ├───📄 PostIcon.tsx
│   │   ├───📄 ProfileIcon.tsx
│   │   ├───📄 SendIcon.tsx
│   │   ├───📄 SplashIcon.tsx
│   │   └───📄 index.ts
│   ├───📁 images/
│   │   ├───📄 defaultSrc.jpg
│   │   └───📄 index.ts
│   └───📄 .DS_Store
├───📁 hooks/
│   ├───📄 PostHook.ts
│   ├───📄 ProfileHook.ts
│   └───📄 UsersHook.ts
├───📁 navigation/
│   └───📄 NavigationContainer.tsx
├───📁 screens/
│   ├───📁 auth/
│   │   └───📄 SplashScreen.tsx
│   ├───📁 home/
│   │   ├───📁 components/
│   │   │   └───📄 UserItem.tsx
│   │   └───📄 UsersScreen.tsx
│   └───📁 profile/
│       ├───📁 album/
│       │   ├───📄 AlbumDetailScreen.tsx
│       │   └───📄 SinglePhotoScreen.tsx
│       ├───📁 components/
│       │   ├───📄 AlbumItem.tsx
│       │   ├───📄 CommentItem.tsx
│       │   ├───📄 PhotoItem.tsx
│       │   ├───📄 PostItem.tsx
│       │   └───📄 ProfileHeader.tsx
│       ├───📁 post/
│       │   ├───📄 CommentsList.tsx
│       │   ├───📄 EditPostScreen.tsx
│       │   └───📄 PostScreen.tsx
│       ├───📁 tabs/
│       │   ├───📄 AlbumsTab.tsx
│       │   ├───📄 PostsTab.tsx
│       │   └───📄 TopTabNavigator.tsx
│       └───📄 ProfileScreen.tsx
├───📁 shared/
│   ├───📁 components/
│   │   ├───📄 Avatar.tsx
│   │   ├───📄 Button.tsx
│   │   ├───📄 Container.tsx
│   │   ├───📄 EmptyState.tsx
│   │   ├───📄 FabButton.tsx
│   │   ├───📄 FlashMessage.tsx
│   │   ├───📄 Icon.tsx
│   │   ├───📄 IconicAvatar.tsx
│   │   ├───📄 Image.tsx
│   │   ├───📄 Input.tsx
│   │   ├───📄 LoadingState.tsx
│   │   ├───📄 Modal.tsx
│   │   ├───📄 Text.tsx
│   │   ├───📄 YesNoModal.tsx
│   │   └───📄 index.ts
│   ├───📁 constants/
│   │   ├───📄 endpoints.ts
│   │   └───📄 routes.ts
│   ├───📁 services/
│   │   ├───📄 HttpHandler.ts
│   │   ├───📄 StorageHandler.ts
│   │   └───📄 Tools.ts
│   ├───📁 theme/
│   │   ├───📄 colors.ts
│   │   └───📄 fontSizes.ts
│   └───📁 types/
│       ├───📄 Album.ts
│       ├───📄 Comment.ts
│       ├───📄 HttpRequest.ts
│       ├───📄 Photo.ts
│       ├───📄 Post.ts
│       ├───📄 User.ts
│       └───📄 index.ts
├───📁 stores/
│   ├───📄 AlbumsStore.ts
│   ├───📄 PostsStore.ts
│   ├───📄 ProfileStore.ts
│   ├───📄 UsersStore.ts
│   ├───📄 _hydration.ts
│   ├───📄 index.tsx
│   └───📄 types.d.ts
└───📄 .DS_Store

