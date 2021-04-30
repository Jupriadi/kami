import React,{useEffect} from 'react'
import {ActivityIndicator, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { greaterThan } from 'react-native-reanimated'
import  {Img} from '../../assets' 
const Splash = ({ navigation }) => {
    useEffect(()=> {
        setTimeout( () =>{
            navigation.replace('MainApp');
        }, 3000)
    },[navigation])

    return (
       <ImageBackground source={Img.Bg} style={styles.background}>
           <Image source={Img.Logo} style={styles.logo} />
           <Text style={styles.judul}>KAMI STMIK</Text>
           <Text style={styles.subjudul}>IKATAN ALUMNI STMIK SZ NW</Text>
           <ActivityIndicator size="large" color="#00ff00" />
       </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    judul:{
        fontSize:24,
        color: '#ffdf6b',
    },
    subjudul:{
        fontSize:10,
        color:'white'
    }
        
})
