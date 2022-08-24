import React from 'react';
import { StyleSheet, View } from 'react-native';
import { responsiveWidth as rw } from "react-native-responsive-dimensions";
import { Text } from '../../../shared/components';
import { Comment } from '../../../shared/types';

const CommentItem = (comment: Comment) => {
    return (
        <View style={styles.container}>
            <Text bold>{comment.name}</Text>
            <Text>{comment.body}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
})
export default CommentItem