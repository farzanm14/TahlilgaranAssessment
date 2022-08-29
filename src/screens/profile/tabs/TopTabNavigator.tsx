import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import * as React from 'react';
import { StyleSheet } from "react-native";
import { responsiveWidth as rw, responsiveHeight as rh } from "react-native-responsive-dimensions";
import { Routes } from '../../../shared/constants/routes';
import colors from '../../../shared/theme/colors';
import AlbumsTab from './AlbumsTab';
import PostsTab from './PostsTab';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colors.primary,
                inactiveTintColor: colors.grey,

                style: styles.navigatorStyle,
                tabStyles: styles.tabStyles,
                indicatorStyle: styles.indicatorStyle,
            }}
            initialRouteName={Routes.ALBUMS}
        >
            <Tab.Screen name={Routes.ALBUMS} component={AlbumsTab} />
            <Tab.Screen name={Routes.POSTS} component={PostsTab} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    navigatorStyle: {
        backgroundColor: colors.white,
    },
    tabStyles: { width: rw(100) / 3, },
    indicatorStyle: {
        width: rw(100) / 3,
        alignSelf: 'center',
        marginHorizontal: rw(100) / 12,
        backgroundColor: colors.primary
    },
})