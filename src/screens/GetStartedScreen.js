import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Height, Width } from '../utils/responsive'
import FacebookComponent from '../assets/images/Facebook'
import GoogleComponent from '../assets/images/Google'
import AppleComponent from '../assets/images/Apple'
import { useNavigation } from '@react-navigation/native'
import { globalStyles } from '../utils/globalStyles'
const GetStartedScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <Ionicons name='ios-arrow-back-outline' size={Height(30)} style={styles.icon} onPress={() => navigation.goBack()} />
            <Text style={styles.letsText}>Let's You In</Text>

            <TouchableOpacity style={[styles.btn, { marginTop: Height(45) }]}>
                <FacebookComponent size={Height(22)} />
                <Text style={styles.btnText}>Continue with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, { marginTop: Height(25) }]}>
                <GoogleComponent size={Height(22)} />
                <Text style={styles.btnText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, { marginTop: Height(25) }]}>
                <AppleComponent size={Height(22)} />
                <Text style={styles.btnText}>Continue with Apple</Text>
            </TouchableOpacity>
            <View style={styles.subView}>
                <View style={styles.line} />
                <View>
                    <Text style={styles.orText}>or</Text>
                </View>
                <View style={styles.line} />
            </View>
            <TouchableOpacity style={globalStyles.Button} onPress={() => navigation.navigate('SignIn')}>
                <Text style={globalStyles.ButtonText} >Sign in with password</Text>
            </TouchableOpacity>
            <View style={styles.bottomView}>
                <Text style={styles.accountText}>Don't have an account?</Text>
                <Text style={styles.signupText} onPress={() => navigation.navigate('Signup')}>Sign up</Text>
            </View>
        </SafeAreaView>
    )
}

export default GetStartedScreen

const styles = StyleSheet.create({
    icon: {
        marginTop: Height(20),
        marginLeft: Width(30)
    },
    letsText: {
        fontSize: Height(35),
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
        marginTop: Height(80)
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Width(330),
        height: Height(60),
        borderWidth: Height(1),
        borderRadius: Width(20),
        borderColor: '#C8C8C8',
        paddingHorizontal: Width(64),
        alignSelf: 'center',
    },
    btnText: {
        fontSize: Height(15),
        fontFamily: 'Poppins-Regular',
        color: 'black',
        fontWeight: '400',
        marginLeft: Width(15)
    },
    subView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Width(45),
        marginTop: Height(40)
    },
    line: {
        flex: 1,
        height: Height(1),
        backgroundColor: '#C8C8C8'
    },
    orText: {
        width: 50,
        textAlign: 'center',
        color: '#757575',
        fontSize: Height(15),
        fontFamily: 'Poppins-Regular',
        fontWeight: '500'
    },
    bottomView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: Height(40)
    },
    accountText: {
        fontSize: Height(14),
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
        color: '#979292'
    },
    signupText: {
        fontSize: Height(14),
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
        color: '#0C9348',
        marginLeft: Width(10)
    }
})