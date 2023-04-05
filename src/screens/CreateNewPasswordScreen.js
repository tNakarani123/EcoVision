import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import CreatepasswordComponent from '../assets/images/Createpassword'
import PasswordComponent from '../assets/images/Password'
import CustomAlert from '../utils/CustomAlert'
import { globalStyles } from '../utils/globalStyles'
const CreateNewPasswordScreen = () => {
    const navigation = useNavigation()
    const [passwordVisible, setPasswordVisible] = useState(true)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true)
    const [password, setPassword] = useState([])
    const [confirmPassword, setConfirmPassword] = useState([])
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const [index, setIndex] = useState(0)
    const [showDonationSuccessPopup, setShowDonationSuccessPopup] = useState(false);
    const [showDonationErrPopup, setShowDonationErrPopup] = useState(false);
    const Validation = () => {
        console.log({ password });
        var passwordValid = false;
        var confirmPasswordValid = false;
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

        if (confirmPassword.length == 0) {
            setConfirmPasswordError("Confirm Password is required");
        }
        else if (confirmPassword.length < 6) {
            setConfirmPasswordError("Confirm Password should be minimum 6 characters");
        }
        else if (confirmPassword.indexOf(' ') >= 0) {
            setConfirmPasswordError('Confirm Password cannot contain spaces');
        }
        else if (confirmPassword !== password) {
            setConfirmPasswordError('Confirm Password does not match with password');
        }
        else {
            setConfirmPasswordError("")
            confirmPassword = true
        }




        if (passwordValid && confirmPasswordValid) {
            setPassword("");
            setConfirmPassword("")
        }
    }
    return (
        <SafeAreaView style={globalStyles.authenticateSafeView}>
            <View style={globalStyles.headingView}>
                <Ionicons name='ios-arrow-back-outline' size={Height(30)} style={{ marginLeft: Width(30) }} onPress={() => navigation.goBack()} />
                <Text style={globalStyles.headingText}>Create New Password</Text>
            </View>
            <View style={{ alignSelf: 'center', marginTop: Height(30) }}>
                <CreatepasswordComponent width={Width(170)} height={Height(229)} />
            </View>
            <Text style={styles.headingText}>Create Your New Password</Text>
            <View style={[globalStyles.passTextInputView, { backgroundColor: index === 1 ? '#E7F5ED' : '#EEEEEE', borderColor: index === 1 ? '#0C9348' : '#D9D9D9' }]}>
                <View style={{ marginLeft: Width(25) }}>
                    <PasswordComponent width={Width(16)} height={Height(18)} color={index === 1 ? '#0C9348' : '#AAA'} />
                </View>
                <TextInput
                    placeholder='Password'
                    style={globalStyles.passTextInput}
                    placeholderTextColor='#AAAAAA'
                    secureTextEntry={passwordVisible}
                    maxLength={6}
                    onPressIn={() => setIndex(1)}
                    onChangeText={(text) => setPassword(text)}
                    onBlur={() => Validation()}
                />
                <Ionicons name={!passwordVisible ? "eye" : "eye-off"} size={Height(25)} color={index === 2 ? '#0C9348' : '#AAA'} onPress={() => setPasswordVisible(!passwordVisible)} />
            </View>
            {passwordError.length > 0 &&
                <Text style={globalStyles.errorText}>{passwordError}</Text>
            }
            <View style={[globalStyles.passTextInputView, { backgroundColor: index === 2 ? '#E7F5ED' : '#EEEEEE', borderColor: index === 2 ? '#0C9348' : '#D9D9D9' }]}>
                <View style={{ marginLeft: Width(25) }}>
                    <PasswordComponent width={Width(16)} height={Height(18)} color={index === 2 ? '#0C9348' : '#AAA'} />
                </View>
                <TextInput
                    placeholder='Confirm Password'
                    style={globalStyles.passTextInput}
                    placeholderTextColor='#AAAAAA'
                    secureTextEntry={confirmPasswordVisible}
                    maxLength={6}
                    onPressIn={() => setIndex(2)}
                    onChangeText={(text) => setConfirmPassword(text)}
                    onBlur={() => Validation()}
                />
                <Ionicons name={!confirmPasswordVisible ? "eye" : "eye-off"} size={Height(25)} color={index === 2 ? '#0C9348' : '#AAA'} onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} />
            </View>
            {confirmPasswordError.length > 0 &&
                <Text style={globalStyles.errorText}>{confirmPasswordError}</Text>
            }
            <TouchableOpacity style={globalStyles.Button} onPress={() => { Validation(), setShowDonationSuccessPopup(true) }}>
                <Text style={globalStyles.ButtonText}>Continue</Text>
            </TouchableOpacity>
            <CustomAlert
                displayMsg={'Please Login First!'}
                visibility={showDonationSuccessPopup}
                dismissAlert={setShowDonationSuccessPopup}
                headerMsg={'INFO'}
                cancelMsg={'CANCEL'}
                successMsg={'OK'}
                upColor={'red'}
                txtColor={'red'}
                navigation={() => { navigation.navigate('Tab'), setShowDonationSuccessPopup(false) }}
            />
        </SafeAreaView>
    )
}

export default CreateNewPasswordScreen

const styles = StyleSheet.create({
    headingText: {
        fontSize: Height(18),
        fontFamily: 'Poppins-Regular',
        color: 'black', fontWeight: '400',
        marginLeft: Width(30),
        marginTop: Height(35)
    }

})