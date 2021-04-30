import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import IcPengurus from '../../assets/svg/index'

const Pengurus = () => {
    return (
        <View>
            <Text>Ini adalah pengurus</Text>
            <Image source={IcPengurus} />
        </View>
    )
}

export default Pengurus

const styles = StyleSheet.create({})
