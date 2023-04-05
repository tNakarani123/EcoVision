import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { OTP } from 'react-native-otp-form';
import { useNavigation } from '@react-navigation/native';
import { Height, Width } from '../utils/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { globalStyles } from '../utils/globalStyles';
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const OTPVerifyScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={globalStyles.authenticateSafeView}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <View style={globalStyles.headingView}>
                    <Ionicons name='ios-arrow-back-outline' size={Height(30)} style={{ marginLeft: Width(30) }} onPress={() => navigation.goBack()} />
                    <Text style={globalStyles.headingText}>OTP Code Verification</Text>
                </View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <Text style={styles.header}>Code has been send to +91 63******07</Text>
                        <OTP
                            codeCount={4}
                            containerStyle={{
                                borderColor: "red"
                            }}
                            otpStyles={{
                                backgroundColor: '#EEEEEE',
                                color: 'black',
                                marginBottom: Height(1),
                                borderColor: "#D9D9D9",
                                borderWidth: 1,
                                borderRadius: Width(20)
                            }}
                        />
                        <Text style={styles.resendCodeText}>Resend code in 1 m</Text>
                        {/* <View style={styles.btnContainer}> */}
                        <TouchableOpacity style={globalStyles.Button} onPress={() => navigation.navigate('CreateNewPassword')}>
                            <Text style={globalStyles.ButtonText}>Verify</Text>
                        </TouchableOpacity>
                        {/* </View> */}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "white"
    },
    inner: {
        flex: 1,
        justifyContent: "space-evenly"
    },
    header: {

        fontSize: RFValue(17),
        textAlign: "center",
        marginTop: Height(7),
        color: 'black',
        fontFamily: 'Poppins-Medium',
        marginHorizontal: Width(55)
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36,
        fontFamily: 'Poppins-Medium',
    },
    resendCodeText: {
        textAlign: "center", 
        color: 'black', 
        fontFamily: 'Poppins-Medium',
         fontSize: Height(15)
    }

});

export default OTPVerifyScreen;