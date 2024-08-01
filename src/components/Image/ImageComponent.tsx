import { Text, View, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export const ImageComponent = () => {
    return (
        <View>
            <Image style={styles.tinyLogo} source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    tinyLogo: {
        width: 150,
        height: 150,
        borderRadius: 75,
        textAlign: 'center',
        marginTop: 50
    },
})

export default ImageComponent