import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigation = useNavigation()
    return (
        <ImageBackground style={styles.imgBackground} source={require('../assets/images/Welcome.png')}>
            <Text style={styles.welcomeText}>Welcome To E-Station</Text>
            <Text style={styles.pgText}>Find the best possible charging space near by your desired destination.</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('OnBoarding')}>
                <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    imgBackground: {
        flex: 1,
    },
    welcomeText: {
        color: 'white',
        fontSize: Height(35),
        marginTop: Height(100),
        textAlign: 'left',
        marginHorizontal: Width(70),
        fontFamily: "Poppins-Bold"
    },
    pgText: {
        color: 'white',
        fontSize: Height(15),
        textAlign: 'left',
        marginLeft: Width(70),
        marginRight: Width(30),
        fontFamily: 'Poppins-Regular',
        marginTop: Height(20)
    },
    btn: {
        width: Width(330),
        height: Height(55),
        backgroundColor: 'white',
        borderRadius: Width(30),
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        marginBottom: Height(100)
    },
    btnText: {
        textAlign: 'center',
        fontSize: Height(18),
        color: 'black',
        fontFamily: 'Poppins-Medium',
    }
})