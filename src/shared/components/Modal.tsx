import React from 'react';
import { View, StyleSheet, Modal, Pressable } from 'react-native';

const BaseModal = ({ style, visible, onClose, children }: any) => {

    return (
        <Modal
            // animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        // fullScreen={true}
        >
            <Pressable style={styles.container} onPress={onClose}>
                <View style={[styles.insideContainer]}>
                    <View style={style}>
                        {children}
                    </View>
                </View>
            </Pressable>
        </Modal>
    );
};



export default BaseModal;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        // backgroundColor:'red'
    },
    insideContainer: {
        backgroundColor: 'white',
        borderRadius: 14,
        alignSelf: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "transparent",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

});