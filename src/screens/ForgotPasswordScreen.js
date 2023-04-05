import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import ForgotPasswordComponent from '../assets/images/ForgotPassword'
import EmailComponent from '../assets/images/Email'
import { globalStyles } from '../utils/globalStyles'
const ForgotPasswordScreen = () => {
    const navigation = useNavigation()
    const [index, setIndex] = useState(0)
    const [email, setEmail] = useState([])
    const [emailError, setEmailError] = useState("")
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const Validation = () => {
        console.log({ email });

        var emailValid = false;

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


        if (emailValid) {
            setEmail("");

        }
    }
    return (
        <SafeAreaView style={globalStyles.authenticateSafeView}>
            <View style={globalStyles.headingView}>
                <Ionicons name='ios-arrow-back-outline' size={Height(30)} style={{ marginLeft: Width(30) }} onPress={() => navigation.goBack()} />
                <Text style={globalStyles.headingText}>Forgot Password</Text>
            </View>
            <View style={{ alignSelf: 'center', marginTop: Height(90) }}>
                <ForgotPasswordComponent width={Width(274)} height={Height(273)} />
            </View>
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

            <TouchableOpacity style={globalStyles.Button} onPress={() => { Validation(), navigation.navigate('OTPVerify') }}>
                <Text style={globalStyles.ButtonText}>Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({})