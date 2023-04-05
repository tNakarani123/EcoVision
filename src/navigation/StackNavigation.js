import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import OnBoardingScreen from '../screens/OnBoardingScreen'
import GetStartedScreen from '../screens/GetStartedScreen'
import SignupScreen from '../screens/SignupScreen'
import SignInScreen from '../screens/SignInScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import OTPVerifyScreen from '../screens/OTPVerifyScreen'
import CreateNewPasswordScreen from '../screens/CreateNewPasswordScreen'
import HomeScreen from '../screens/HomeScreen'
import CreateProfileScreen from '../screens/CreateProfileScreen'
import TabNavigation from './TabNavigation'
import BookMarkScreen from '../screens/BookMarkScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SettingScreen from '../screens/SettingScreen'
import HelpScreen from '../screens/HelpScreen'
import NetBankingScreen from '../screens/NetBankingScreen'
import AddBankScreen from '../screens/AddBankScreen'
import SearchBankScreen from '../screens/SearchBankScreen'
import SelectBankScreen from '../screens/SelectBankScreen'
import CardScreen from '../screens/CardScreen'
import AddCardScreen from '../screens/AddCardScreen'
import AddMoneyScreen from '../screens/AddMoneyScreen'
import AddMoneyBankScreen from '../screens/AddMoneyBankScreen'
import AddMoneyCardScreen from '../screens/AddMoneyCardScreen'
import AddNewCardScreen from '../screens/AddNewCardScreen'
import HistoryScreen from '../screens/HistoryScreen'
import AddMoneySelectBankScreen from '../screens/AddMoneySelectBankScreen'

const Stack = createNativeStackNavigator()
const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Tab' component={TabNavigation} />
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='CreateNewPassword' component={CreateNewPasswordScreen} />
            <Stack.Screen name='OnBoarding' component={OnBoardingScreen} />
            <Stack.Screen name='GetStarted' component={GetStartedScreen} />
            <Stack.Screen name='Signup' component={SignupScreen} />
            <Stack.Screen name='SignIn' component={SignInScreen} />
            <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
            <Stack.Screen name='OTPVerify' component={OTPVerifyScreen} />
            <Stack.Screen name='CreateProfile' component={CreateProfileScreen} />
            <Stack.Screen name='BookMark' component={BookMarkScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen name='Setting' component={SettingScreen} />
            <Stack.Screen name='Help' component={HelpScreen} />
            <Stack.Screen name='NetBanking' component={NetBankingScreen} />
            <Stack.Screen name='AddBank' component={AddBankScreen} />
            <Stack.Screen name='SearchBank' component={SearchBankScreen} />
            <Stack.Screen name='SelectBank' component={SelectBankScreen} />
            <Stack.Screen name='Card' component={CardScreen} />
            <Stack.Screen name='AddCard' component={AddCardScreen} />
            <Stack.Screen name='AddMoney' component={AddMoneyScreen} />
            <Stack.Screen name='AddMoneyBank' component={AddMoneyBankScreen} />
            <Stack.Screen name='AddMoneyCard' component={AddMoneyCardScreen} />
            <Stack.Screen name='AddNewCard' component={AddNewCardScreen} />
            <Stack.Screen name='History' component={HistoryScreen} />
            <Stack.Screen name='AddMoneySelectBank' component={AddMoneySelectBankScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})