import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/auth/SplashScreen";
import UsersScreen from "../screens/home/UsersScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import React from "react";
import { Routes } from "../shared/constants/routes";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.SPLASH} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={Routes.SPLASH} component={SplashScreen} />
                <Stack.Screen name={Routes.HOME} component={UsersScreen} />
                <Stack.Screen name={Routes.PROFILE} component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
