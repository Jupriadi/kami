import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Ico } from '../../assets'

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
    var lb = label
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center' }}>
            {lb == "Home" ? <Image style={styles.icon} source={Ico.Home} /> : null}
            {lb == "Project" ? <Image style={styles.icon} source={Ico.Project} /> : null}
            {lb == "Pengurus" ? <Image style={styles.icon} source={Ico.Pengurus} /> : null}
            {lb == "Profil" ? <Image style={styles.icon} source={Ico.Profil} /> : null}
            {lb == "Anggota" ? <Image style={styles.icon} source={Ico.Anggota} /> : null}
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {lb}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    icon: { width: 30, height: 30, flexDirection: 'column' }
})
