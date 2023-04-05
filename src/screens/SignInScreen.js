import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import EmailComponent from '../assets/images/Email'
import PasswordComponent from '../assets/images/Password'
import CheckBoxEmptyComponent from '../assets/images/CheckBoxEmpty'
import CheckBoxComponent from '../assets/images/CheckBox'
import FacebookComponent from '../assets/images/Facebook'
import GoogleComponent from '../assets/images/Google'
import AppleComponent from '../assets/images/Apple'
import LogoComponent from '../assets/images/Logo'
import { globalStyles } from '../utils/globalStyles'
const SignInScreen = () => {
    const navigation = useNavigation()
    const [passwordVisible, setPasswordVisible] = useState(true)
    const [index, setIndex] = useState(0)
    const [checked, setChecked] = useState(false)
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const Validation = () => {
        console.log({ email });
        console.log({ password });
        var emailValid = false;
        var passwordValid = false;
        if (email.length == 0) {
            setEmailError("Email is required");
        }
        else if (!reg.test(email)) {
            setEmailError("Please enter valid email address");
        }
        else {
            setEmailError("")
            emailValid = true
        }
        if (password.length == 0) {
            setPasswordError("Password is required");
        }
        else if (password.length < 6) {
            setPasswordError("Password should be minimum 6 characters");
        }
        else if (password.indexOf(' ') >= 0) {
            setPasswordError('Password cannot contain spaces');
        }
        else {
            setPasswordError("")
            passwordValid = true
        }

        if (emailValid && passwordValid) {
            setEmail("");
            setPassword("");
            navigation.navigate('CreateProfile')
        }
    }
    return (
        <SafeAreaView style={globalStyles.authenticateSafeView}>
            <Ionicons name='ios-arrow-back-outline' size={Height(30)} style={{ marginTop: Height(20), marginLeft: Width(30) }} onPress={() => navigation.goBack()} />
            <View style={{ alignSelf: 'center', marginTop: Height(10) }}>
                <LogoComponent height={Height(100)} width={Width(100)} />
            </View>
            <Text style={{ fontSize: Height(25), fontFamily: 'Poppins-SemiBold', textAlign: 'center', marginTop: Height(50), fontWeight: '600' }}>Login to Your Account</Text>
            <View style={[globalStyles.emailTextInputView, { backgroundColor: index === 1 ? '#E7F5ED' : '#EEEEEE', borderColor: index === 1 ? '#0C9348' : '#D9D9D9' }]}>
                <View style={{ marginLeft: Width(25) }}>
                    <EmailComponent width={Width(20)} height={Height(14)} color={index === 1 ? '#0C9348' : '#AAA'} />
                </View>
                <TextInput
                    placeholder='Email'
                    style={globalStyles.emailTextInput}
                    placeholderTextColor='#AAAAAA'
                    onPressIn={() => setIndex(1)}
                    onChangeText={(text) => setEmail(text)}
                    onBlur={() => Validation()}
                />
            </View>
            {emailError.length > 0 &&
                <Text style={globalStyles.errorText}>{emailError}</Text>
            }
            <View style={[globalStyles.passTextInputView, { backgroundColor: index === 2 ? '#E7F5ED' : '#EEEEEE', borderColor: index === 2 ? '#0C9348' : '#D9D9D9' }]}>
                <View style={{ marginLeft: Width(25) }}>
                    <PasswordComponent width={Width(16)} height={Height(18)} color={index === 2 ? '#0C9348' : '#AAA'} />
                </View>
                <TextInput
                    placeholder='Password'
                    style={globalStyles.passTextInput}
                    placeholderTextColor='#AAAAAA'
                    secureTextEntry={passwordVisible}
                    maxLength={6}
                    onPressIn={() => setIndex(2)}
                    onChangeText={(text) => setPassword(text)}
                    onBlur={() => Validation()}
                />
                <Ionicons name={!passwordVisible ? "eye" : "eye-off"} size={Height(25)} color={index === 2 ? '#0C9348' : '#AAA'} onPress={() => setPasswordVisible(!passwordVisible)} />
            </View>
            {passwordError.length > 0 &&
                <Text style={globalStyles.errorText}>{passwordError}</Text>
            }
            <View style={styles.checkView}>
                <TouchableOpacity onPress={() => setChecked(!checked)}>
                    {!checked ? <CheckBoxEmptyComponent size={Height(20)} /> : <CheckBoxComponent size={Height(20)} />}
                </TouchableOpacity>
                <Text style={styles.remeberMeText}>Remeber me</Text>
            </View>
            <TouchableOpacity style={styles.signInBtn} onPress={() => Validation()}>
                <Text style={globalStyles.ButtonText} >Sign In</Text>
            </TouchableOpacity>
            <Text style={styles.forgotPassText} onPress={() => navigation.navigate('ForgotPassword')}>Forgot the password?</Text>
            <View style={styles.middleView}>
                <View style={styles.line} />
                <View>
                    <Text style={styles.orText}>or continue with</Text>
                </View>
                <View style={styles.line} />
            </View>
            <View style={styles.subBottomView}>
                <TouchableOpacity style={styles.btn}>
                    <FacebookComponent size={Height(25)} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <GoogleComponent size={Height(25)} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <AppleComponent size={Height(25)} />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.accountText}>Don’t have an account?</Text>
                <Text style={styles.signupText} onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
            </View>
        </SafeAreaView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    checkView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: Height(15)
    },
    remeberMeText: {
        fontSize: Height(16),
        color: 'black',
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        marginLeft: Width(10)
    },
    signInBtn: {
        height: Height(60),
        width: Width(330),
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#0C9348',
        borderRadius: Width(30),
        marginTop: Height(20)
    },
    forgotPassText: {
        textAlign: 'center',
        fontSize: Height(14),
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
        color: '#0C9348',
        marginTop: Height(10)
    },
    middleView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Width(45),
        marginTop: Height(10)
    },
    line: {
        flex: 1,
        height: Height(1),
        backgroundColor: '#C8C8C8'
    },
    orText: {
        textAlign: 'center',
        color: '#757575',
        fontSize: Height(15),
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
        marginHorizontal: Width(10)
    },
    subBottomView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: Width(50),
        marginTop: Height(30)
    },
    btn: {
        height: Height(50),
        width: Width(80),
        borderWidth: Height(1),
        borderColor: '#C8C8C8',
        borderRadius: Width(15),
        justifyContent: 'center',
        alignItems: 'center'
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