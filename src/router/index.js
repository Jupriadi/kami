import React from 'react'
import { StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {Anggota,Home,Pengurus,Profil,Project,Splash} from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from '../components/';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator  tabBar={props => <BottomNavigation {...props} />}> 
            <Tab.Screen name="Home"  component={Home} />
            <Tab.Screen name="Pengurus" component={Pengurus} />
            <Tab.Screen name="Project" component={Project} />
            <Tab.Screen name="Profil" component={Profil} />
            <Tab.Screen name="Anggota" component={Anggota} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
            <Stack.Screen options={{headerShown:false}} name="MainApp" component={MainApp} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
