import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import EcoVisionComponent from '../assets/images/EcoVision'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import AddMoneyComponent from '../assets/images/AddMoney'
import WalletHistoryComponent from '../assets/images/WalletHistory'
import ScanComponent from '../assets/images/Scan'
import ManageAccountComponent from '../assets/images/ManageAccount'
import DebitComponent from '../assets/images/Debit'
import GoogleComponent from '../assets/images/Google'
import PhonePayComponent from '../assets/images/PhonePay'
import AppleComponent from '../assets/images/Apple'
import PaytmComponent from '../assets/images/Paytm'
import UpiComponent from '../assets/images/Upi'
import { globalStyles } from '../utils/globalStyles'
const WalletScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
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
            <View style={{ position: 'absolute', marginTop: Height(38), zIndex: -1, }}>
                <Image source={require('../assets/images/linear.png')} style={{ height: Height(220), width: Width(390), }} />

            </View>
            <View style={{ marginTop: Height(10), }}>
                <Text style={{ fontSize: Height(16), fontFamily: 'Poppins-Medium', color: 'white', marginLeft: Width(30) }}>App Wallet</Text>
                <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: 'white', textAlign: 'center', marginTop: Height(15) }}>Total Balance</Text>
                <Text style={{ fontSize: Height(24), fontFamily: 'Poppins-Medium', color: 'white', textAlign: 'center', marginTop: Height(15) }}>₹5000.56</Text>
                <View style={{ height: Height(22), width: Width(155), backgroundColor: '#F4FFF9', borderRadius: Width(20), justifyContent: 'center', alignSelf: 'center', marginTop: Height(10), flexDirection: 'row', alignItems: 'center', borderWidth: Height(1), borderColor: '#848484' }}>
                    <Text style={{ fontSize: Height(9), fontFamily: 'Poppins-Light', color: 'black' }}>₹5000.56<Text style={{ color: "#F87272" }}>(5750.56-750)</Text></Text>
                    <Ionicons name='caret-down-outline' color='#F87272' size={Height(10)} style={{ marginLeft: Width(10) }} />
                </View>
                <View style={{
                    height: Height(70), width: Width(330), backgroundColor: '#F4FFF9', marginTop: Height(20), alignSelf: 'center', borderRadius: Width(10), flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", paddingHorizontal: Width(28)
                }}>
                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('AddMoney')}>
                        <AddMoneyComponent size={Height(25)} />
                        <Text style={{ fontSize: Height(8), fontFamily: 'Poppins-Medium', color: 'black', marginTop: Height(3) }}>Add Money</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('History')}>
                        <WalletHistoryComponent size={Height(25)} />
                        <Text style={{ fontSize: Height(8), fontFamily: 'Poppins-Medium', color: 'black', marginTop: Height(3) }}>History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <ScanComponent size={Height(22)} />
                        <Text style={{ fontSize: Height(8), fontFamily: 'Poppins-Medium', color: 'black', marginTop: Height(3) }}>Scan & Pay</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: Height(16), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(30), marginTop: Height(25) }}>Payment Methods:</Text>
                <TouchableOpacity style={{ height: Height(60), width: Width(330), flexDirection: 'row', alignItems: 'center', borderWidth: Height(1), borderColor: '#D6D6D6', borderRadius: Width(10), justifyContent: 'space-between', alignSelf: 'center', paddingHorizontal: Width(40), marginTop: Height(15) }} onPress={() => navigation.navigate('NetBanking')} >
                    <ManageAccountComponent size={Height(25)} />
                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Regular', color: 'black' }}>Net Banking</Text>
                    <Ionicons name='caret-down-outline' color='transparent' size={Height(25)} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: Height(60), width: Width(330), flexDirection: 'row', alignItems: 'center', borderWidth: Height(1), borderColor: '#D6D6D6', borderRadius: Width(10), justifyContent: 'space-between', alignSelf: 'center', paddingHorizontal: Width(40), marginTop: Height(15) }} onPress={() => navigation.navigate('Card')}>
                    <DebitComponent size={Height(25)} />
                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Regular', color: 'black' }}>Debit/Credit Card</Text>
                    <Ionicons name='caret-down-outline' color='transparent' size={Height(25)} />
                </TouchableOpacity>
                <View style={{ height: Height(135), width: Width(330), alignItems: 'center', borderWidth: Height(1), borderColor: '#D6D6D6', borderRadius: Width(10), alignSelf: 'center', paddingHorizontal: Width(40), marginTop: Height(15), justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: Width(330), paddingHorizontal: Width(40) }}>
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
                    <TouchableOpacity style={{ marginTop: Height(30) }}>
                        <UpiComponent width={Width(70)} height={Height(25)} />
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default WalletScreen

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
})