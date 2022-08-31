import React from 'react';
import { StyleSheet, View } from 'react-native';
import { responsiveWidth as rw, responsiveHeight as rh } from "react-native-responsive-dimensions";
import { Text } from '../../../shared/components';
import fontSizes from '../../../shared/theme/fontSizes';
import { Comment } from '../../../shared/types';

const CommentItem = ({ comment }: Comment) => {
    return (
        <View style={styles.container}>
            <Text light style={styles.name}>✑ {comment.name.substring(0, 15)} ({comment.email.substring(0, 15)})</Text>
            <Text style={styles.body} >{comment.body.substring(0, 50)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: rh(0.5)
    },
    name: {
        // fontWeight: '400',
        fontSize: fontSizes.verySmall
    },
    body: {
        fontSize: fontSizes.small

    }
})
export default CommentItem