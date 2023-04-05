import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import EcoVisionComponent from '../assets/images/EcoVision'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import GoogleComponent from '../assets/images/Google'
import PhonePayComponent from '../assets/images/PhonePay'
import AppleComponent from '../assets/images/Apple'
import PaytmComponent from '../assets/images/Paytm'
import UpiComponent from '../assets/images/Upi'
import DebitComponent from '../assets/images/Debit'
import ManageAccountComponent from '../assets/images/ManageAccount'
import { globalStyles } from '../utils/globalStyles'
const AddMoneyScreen = () => {
    const navigation = useNavigation()
    return (
        <>
            <SafeAreaView
                edges={["top"]}
                style={globalStyles.safeView}
            />
            <View style={globalStyles.mainHeader}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image
                        source={require('../assets/images/user.png')}
                        style={globalStyles.headerImage}
                    />
                </TouchableOpacity>
                <EcoVisionComponent width={Width(167)} height={Height(16)} />
                <TouchableOpacity onPress={() => navigation.navigate('BookMark')}>
                    <Ionicons name='bookmark' size={Height(30)} color='white' />
                </TouchableOpacity>
            </View>
            <View style={globalStyles.subHeaderView}>
                <Ionicons name='arrow-back' size={Height(30)} color='black' style={{ marginLeft: Width(30), }} onPress={() => navigation.goBack()} />
                <Text style={globalStyles.subHeaderViewText}>Payment Methods:</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddMoneyBank')}>
                <ManageAccountComponent size={Height(25)} />
                <Text style={styles.text}>Net Banking</Text>
                <Ionicons name='caret-down-outline' color='transparent' size={Height(25)} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddMoneyCard')}>
                <DebitComponent size={Height(25)} />
                <Text style={styles.text}>Debit/Credit Card</Text>
                <Ionicons name='caret-down-outline' color='transparent' size={Height(25)} />
            </TouchableOpacity>
            <View style={styles.view}>
                <View style={styles.subView}>
                    <TouchableOpacity>
                        <GoogleComponent size={Height(30)} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <PhonePayComponent size={Height(30)} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AppleComponent size={Height(30)} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <PaytmComponent width={Width(56)} height={Height(18)} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.upiBtn}>
                    <UpiComponent width={Width(70)} height={Height(25)} />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default AddMoneyScreen

const styles = StyleSheet.create({
    btn: {
        height: Height(60), width: Width(330), flexDirection: 'row', alignItems: 'center', borderWidth: Height(1), borderColor: '#D6D6D6', borderRadius: Width(10), justifyContent: 'space-between', alignSelf: 'center', paddingHorizontal: Width(40), marginTop: Height(15)
    },
    text: {
        fontSize: Height(14), fontFamily: 'Poppins-Regular', color: 'black'
    },
    view: {
        height: Height(135), width: Width(330), alignItems: 'center', borderWidth: Height(1), borderColor: '#D6D6D6', borderRadius: Width(10), alignSelf: 'center', paddingHorizontal: Width(40), marginTop: Height(15), justifyContent: 'center'
    },
    subView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: Width(330), paddingHorizontal: Width(40)
    },
    upiBtn: {
        marginTop: Height(30)
    }
})