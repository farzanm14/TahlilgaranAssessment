import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { responsiveWidth as rw } from "react-native-responsive-dimensions";
import ProfileHook from '../../../hooks/ProfileHook';
import { EmptyState } from '../../../shared/components';
import Loading from '../../../shared/components/LoadingState';
import { Post } from '../../../shared/types';
import { useMobxStore } from '../../../stores';
import PostItem from '../components/PostItem';

const PostsTab = () => {
    const {
        post: { listOfPosts, listOfPostsLoading },
    } = useMobxStore();
    const { receivePostsList, } = ProfileHook()
    const { navigate } = useNavigation()

    // useEffect(() => {
    //     receivePostsList()
    // }, [])

    // useEffect(() => {
    // }, [listOfPostsLoading])

    const renderItem = ({ item }: { item: Post }) => (
        <PostItem post={item} />
    )

    return (
        <FlatList<Post>
            keyExtractor={(item, key) => key.toString()}
            data={listOfPosts}
            extraData={listOfPosts}
            renderItem={renderItem}
            style={styles.list}
            // numColumns={3}
            // columnWrapperStyle={{ width: '100%', justifyContent: 'space-around' }}
            stickyHeaderIndices={[0]}
            stickyHeaderHiddenOnScroll={true}
            ListEmptyComponent={listOfPostsLoading ?
                <Loading /> :
                <EmptyState message={"there isn't any post"} />}
        />
    )
}


const styles = StyleSheet.create({
    list: { marginHorizontal: rw(3) },
})

export default PostsTab;