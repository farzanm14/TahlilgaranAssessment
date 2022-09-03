import { useNavigation } from '@react-navigation/native';
import { observer } from "mobx-react";
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { responsiveWidth as rw } from "react-native-responsive-dimensions";
import { CreateIcon } from '../../../assets/icons';
import { EmptyState, FabButton, Text } from '../../../shared/components';
import Loading from '../../../shared/components/LoadingState';
import { Routes } from '../../../shared/constants/routes';
import colors from '../../../shared/theme/colors';
import { Post } from '../../../shared/types';
import { useMobxStore } from '../../../stores';
import PostItem from '../components/PostItem';

const PostsTab = () => {
    const {
        post: { listOfPosts, listOfPostsLoading },
    } = useMobxStore();
    const { navigate } = useNavigation()


    const renderItem = ({ item }: { item: Post }) => (
        <PostItem post={item} />
    )

    const moveToCreateNewPhoto = () => {
        navigate(Routes.EDITPOST, { isEditMode: false })
    }

    const FabAddBtn = () => {
        return (
            <FabButton style={styles.fab} onPress={moveToCreateNewPhoto}>
                <CreateIcon style={styles.icon} size={rw(5)} />
                <Text small light style={styles.btnText}>add</Text>
            </FabButton>
        )
    }

    return (
        <>
            <FlatList<Post>
                keyExtractor={(item, key) => key.toString()}
                data={listOfPosts}
                extraData={listOfPosts}
                renderItem={renderItem}
                style={styles.list}
                stickyHeaderHiddenOnScroll={true}
                ListEmptyComponent={listOfPostsLoading ?
                    <Loading /> :
                    <EmptyState message={"there isn't any post"} />}
            />
            <FabAddBtn />
        </>
    )
}


const styles = StyleSheet.create({
    list: { marginHorizontal: rw(3) },
    fab: { backgroundColor: colors.primary },
    icon: { color: colors.white },
    btnText: { color: colors.white },
})

export default observer(PostsTab);