import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ProfileHook from '../../../hooks/ProfileHook';
import { EmptyState } from '../../../shared/components';
import Loading from '../../../shared/components/LoadingState';
import { Routes } from '../../../shared/constants/routes';
import colors from '../../../shared/theme/colors';
import { Album } from '../../../shared/types';
import { useMobxStore } from '../../../stores';
import AlbumItem from '../components/AlbumItem';
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions"

const AlbumsTab = () => {
    const {
        users: { selectedUser },
        profile: { listOfAlbums, listOfAlbumsLoading, setSelectedAlbum },
        album: { selectedAlbumPhotosLoading }
    } = useMobxStore();
    const { receiveAlbumsList, receiveSelectedAlbumPhotos, } = ProfileHook()
    const { navigate } = useNavigation()

    // useEffect(() => {
    //     receiveAlbumsList(selectedUser)
    // }, [])

    // useEffect(() => {
    // }, [listOfAlbumsLoading])

    const moveToSelectedAlbum = async (selectedAlbum: Album) => {
        console.log("moveToselectedAlbumProfile", selectedAlbum);
        setSelectedAlbum(selectedAlbum)
        receiveSelectedAlbumPhotos(selectedAlbum)
        // !selectedAlbumPhotosLoading && 
        navigate(Routes.ALBUMDETAIL)

    }

    const renderItem = ({ item }: { item: Album }) => (
        <AlbumItem album={item} onPress={() => moveToSelectedAlbum(item)} />
    )

    return (
        <FlatList<Album>
            keyExtractor={(item, key) => key.toString()}
            data={listOfAlbums}
            extraData={listOfAlbums}
            renderItem={renderItem}
            style={styles.list}
            // numColumns={3} 
            // columnWrapperStyle={{ width: '100%', justifyContent: 'space-around' }}
            stickyHeaderIndices={[0]}
            stickyHeaderHiddenOnScroll={false}
            ListEmptyComponent={listOfAlbumsLoading ?
                <Loading /> :
                <EmptyState message={"there isn't any album"} />}
        />
    )
}

export default AlbumsTab;

const styles = StyleSheet.create({
    list: { marginHorizontal: rw(3) },
})