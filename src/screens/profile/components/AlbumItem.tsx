import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { responsiveWidth as rw } from "react-native-responsive-dimensions";
import AlbumIcon from '../../../assets/icons/AlbumIcon';
import { Image, Text } from '../../../shared/components';
import colors from '../../../shared/theme/colors';
import fontSizes from '../../../shared/theme/fontSizes';
import { Album } from '../../../shared/types';


type AlbumProps = {
    album: Album;
    onPress: () => void
};

function AlbumItem({ album, onPress }: AlbumProps): JSX.Element {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            {/* <Image source={{ uri: "" }} style={styles.albumCover} /> */}
            <AlbumIcon color={colors.white} style={styles.icon} size={iconSize} />
            <View style={styles.nameContainer}>
                <Text style={styles.title}>{album?.title}</Text>
            </View>
        </Pressable>
    )
}

const imageSize = rw(20)
const iconSize = rw(5)
const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginVertical: rw(2)
    }, albumCover: {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }, nameContainer: {
        marginHorizontal: rw(2),
    }, icon: {
        backgroundColor: colors.primaryLight,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: iconSize / 6
    }, title: {
        fontSize: fontSizes.large,
    }
})
export default AlbumItem