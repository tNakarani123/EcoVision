

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LocationScreen from '../screens/LocationScreen';
import SwapScreen from '../screens/SwapScreen';
import WalletScreen from '../screens/WalletScreen';
import { Height, Width } from '../utils/responsive';
import HomeComponent from '../assets/images/Home';
import HomeActiveComponent from '../assets/images/HomeActive';
import LocationComponent from '../assets/images/Location';
import LocationActiveComponent from '../assets/images/LocationActive';
import SwapComponent from '../assets/images/Swap';
import SwapActiveComponent from '../assets/images/SwapActive';
import WalletComponent from '../assets/images/Wallet';
import WalletActiveComponent from '../assets/images/WalletActive';
import { SafeAreaView } from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <>
            <SafeAreaView
                edges={["top"]}
                style={{ flex: 0, backgroundColor: "#0C9348" }}
            />

            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#0C9348',
                        marginBottom: Height(35),
                        marginHorizontal: Width(30),
                        borderRadius: Width(20),
                        height: Height(70),
                        paddingBottom: 0
                    },
                    tabBarItemStyle: {
                        justifyContent: 'center'
                    },


                }}
            >
                <Tab.Screen name='Home' component={HomeScreen}

                    options={() => ({
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{ justifyContent: 'center' }}>

                                    {!focused ? <HomeComponent size={Height(25)} /> : <HomeActiveComponent size={Height(30)} />}
                                </View>
                            );
                        },
                        tabBarShowLabel: false
                    })}
                />
                <Tab.Screen name='Location' component={LocationScreen}
                    options={() => ({
                        tabBarIcon: ({ focused }) => {
                            return (
                                !focused ? <LocationComponent size={Height(25)} /> : <LocationActiveComponent size={Height(30)} />
                            );
                        },
                        tabBarShowLabel: false
                    })}
                />
                <Tab.Screen name='Swap' component={SwapScreen}
                    options={() => ({
                        tabBarIcon: ({ focused }) => {
                            return (
                                !focused ? <SwapComponent size={Height(25)} /> : <SwapActiveComponent size={Height(30)} />
                            );
                        },
                        tabBarShowLabel: false
                    })} />
                <Tab.Screen name='Wallet' component={WalletScreen}
                    options={() => ({
                        tabBarIcon: ({ focused }) => {
                            return (
                                !focused ? <WalletComponent size={Height(25)} /> : <WalletActiveComponent size={Height(30)} />
                            );
                        },
                        tabBarShowLabel: false
                    })} />
            </Tab.Navigator>


        </>
    )
}

export default TabNavigation

const styles = StyleSheet.create({})