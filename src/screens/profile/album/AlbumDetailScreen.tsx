/**
 * each album has number of photos
 * and this component preview list of posts
 * as user select a photo, he will gonna navigate to Photos detail screen
 */

import { useNavigation } from '@react-navigation/native'
import { observer } from "mobx-react"
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions"
import { BackIcon } from '../../../assets/icons'
import { Container, EmptyState, Text } from '../../../shared/components'
import Loading from '../../../shared/components/LoadingState'
import { Routes } from '../../../shared/constants/routes'
import colors from '../../../shared/theme/colors'
import { Photo } from '../../../shared/types'
import { useMobxStore } from '../../../stores'
import PhotoItem from '../components/PhotoItem'

const AlbumDetailScreen = () => {
  const { goBack, navigate } = useNavigation()
  const {
    profile: { selectedAlbum, },
    album: { selectedAlbumPhotos, setSelectedPhoto, selectedAlbumPhotosLoading },
  } = useMobxStore();

  const moveToSelectedPhoto = async (selectedPhoto: Photo) => {
    setSelectedPhoto(selectedPhoto)
    setTimeout(() => {
      navigate(Routes.SINGLEPHOTO)
    }, 500);
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
        numColumns={3}
        fadingEdgeLength={rh(10)}
        columnWrapperStyle={styles.columnWrapperStyle}
        stickyHeaderHiddenOnScroll={true}
        ListHeaderComponent={<Header />}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={
          selectedAlbumPhotosLoading ? <Loading /> :
            <EmptyState message={"there isn't any photo"} />}
      />
    </Container>
  )
}

export default observer(AlbumDetailScreen);

const styles = StyleSheet.create({
  list: {
    marginTop: rh(3),
    flex: 1, alignSelf: 'stretch'
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

  }, columnWrapperStyle: {
    // flexWrap: "wrap",
    justifyContent: 'space-around',
    // backgroundColor: 'green',
  }, contentContainerStyle: {
    // backgroundColor: 'red'
  }
})