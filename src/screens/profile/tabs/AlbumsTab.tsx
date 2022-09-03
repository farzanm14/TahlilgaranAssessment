import { useNavigation } from '@react-navigation/native';
import { observer } from "mobx-react";
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { responsiveWidth as rw } from "react-native-responsive-dimensions";
import ProfileHook from '../../../hooks/ProfileHook';
import { EmptyState } from '../../../shared/components';
import Loading from '../../../shared/components/LoadingState';
import { Routes } from '../../../shared/constants/routes';
import { Album } from '../../../shared/types';
import { useMobxStore } from '../../../stores';
import AlbumItem from '../components/AlbumItem';

const AlbumsTab = () => {
    const {
        profile: { listOfAlbums, listOfAlbumsLoading, setSelectedAlbum },
    } = useMobxStore();
    const { receiveSelectedAlbumPhotos, } = ProfileHook()
    const { navigate } = useNavigation()

    const moveToSelectedAlbum = async (selectedAlbum: Album) => {
        setSelectedAlbum(selectedAlbum)
        receiveSelectedAlbumPhotos(selectedAlbum)
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
            stickyHeaderHiddenOnScroll={false}
            ListEmptyComponent={listOfAlbumsLoading ?
                <Loading /> :
                <EmptyState message={"there isn't any album"} />}
        />
    )
}

export default observer(AlbumsTab);

const styles = StyleSheet.create({
    list: { marginHorizontal: rw(3) },
})