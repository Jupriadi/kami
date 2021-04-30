import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const Home = () => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'green', height: "40%",flex:1}} />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'blue',
        justifyContent: 'space-around'
    },

})
