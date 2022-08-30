import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Routes } from "../shared/constants/routes";

import SplashScreen from "../screens/auth/SplashScreen";
import UsersScreen from "../screens/home/UsersScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import AlbumDetailScreen from "../screens/profile/AlbumDetailScreen";
import PostScreen from "../screens/profile/PostScreen";
import EditPostScreen from "../screens/profile/EditPostScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.SPLASH} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={Routes.SPLASH} component={SplashScreen} />
                <Stack.Screen name={Routes.HOME} component={UsersScreen} />
                <Stack.Screen name={Routes.PROFILE} component={ProfileScreen} />
                <Stack.Screen name={Routes.ALBUMDETAIL} component={AlbumDetailScreen} />
                <Stack.Screen name={Routes.POST} component={PostScreen} />
                <Stack.Screen name={Routes.EDITPOST} component={EditPostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
