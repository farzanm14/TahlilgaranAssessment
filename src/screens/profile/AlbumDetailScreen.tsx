import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions"
import { BackIcon } from '../../assets/icons'
import ProfileHook from '../../hooks/ProfileHook'
import { Container, EmptyState, Text } from '../../shared/components'
import { Routes } from '../../shared/constants/routes'
import colors from '../../shared/theme/colors'
import { Photo } from '../../shared/types'
import { useMobxStore } from '../../stores'
import PhotoItem from './components/PhotoItem'

const AlbumDetailScreen = () => {
  const { goBack, navigate } = useNavigation()
  const { receiveSelectedPhotoComments } = ProfileHook()
  const {
    profile: { selectedAlbum, },
    post: { setSelectedPhoto, commentsListLoading },
    album: { selectedAlbumPhotos },
  } = useMobxStore();

  const moveToSelectedPhoto = async (selectedPhoto: Photo) => {
    console.log("moveToSelectedPhoto", selectedPhoto);
    setSelectedPhoto(selectedPhoto)
    await receiveSelectedPhotoComments()
    !commentsListLoading && navigate(Routes.POST)
  }

  const renderItem = ({ item }: Photo) => (
    <PhotoItem photo={item} onPress={() => moveToSelectedPhoto(item)} />
  )

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text bold>Album: {selectedAlbum?.title.substring(0, 10)}</Text>
          <BackIcon onPress={() => goBack()} />
        </View>
        <View style={styles.headerIcons}>
        </View>
      </View>
    )
  }
  return (
    <Container>
      <FlatList<Photo>
        keyExtractor={(item, key) => key.toString()}
        data={selectedAlbumPhotos}
        extraData={selectedAlbumPhotos}
        renderItem={renderItem}
        style={styles.list}

        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll={true}
        ListHeaderComponent={<Header />}
        ListEmptyComponent={
          // selectedAlbumPhotosLoading ?<Loading /> :
          <EmptyState message={"there isn't any photo"} />}
      />
    </Container>
  )
}

export default AlbumDetailScreen;

const styles = StyleSheet.create({
  list: {
    marginTop: rh(3)
  }, headerContainer: {
    paddingHorizontal: rw(3),
    paddingVertical: rh(2),
    backgroundColor: colors.white,
  }, header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    alignContent: 'center',
  }, emptyState: {
    flex: 1,
    alignItems: 'center',
    marginTop: rh(35)
  }, headerIcons: {
    flexDirection: 'row'

  }
})