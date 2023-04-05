import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EcoVisionComponent from '../assets/images/EcoVision'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import { globalStyles } from '../utils/globalStyles'

const data = [
    {
        id: 1,
        image: require('../assets/images/kotak.png'),
        bankName: 'Kotak Bank Ltd.'
    }, {
        id: 2,
        image: require('../assets/images/varachha.png'),
        bankName: 'The Varachha Co.Op Bank'
    }, {
        id: 3,
        image: require('../assets/images/icici.png'),
        bankName: 'ICICI Bank'
    }, {
        id: 4,
        image: require('../assets/images/hdfc.png'),
        bankName: 'HDFC Bank'
    }
]

const AddBankScreen = () => {
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
                <Text style={globalStyles.subHeaderViewText}>Select Bank :</Text>
            </View>
            <View>
                <ScrollView>
                    {
                        data.map((item, i) => {
                            return (
                                <View key={i}>
                                    <TouchableOpacity style={styles.scrollViewBtn} onPress={() => navigation.navigate('SelectBank', { data: item })} >
                                        <Image source={item.image} />
                                        <Text style={styles.bankNameText}>{item.bankName}</Text>
                                        <Ionicons name='bookmark' size={Height(30)} color='transparent' />
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SearchBank')}>
                <Text style={styles.text}>Other Bank</Text>
            </TouchableOpacity>
        </>
    )
}

export default AddBankScreen

const styles = StyleSheet.create({
    scrollViewBtn: {
        height: Height(60),
        width: Width(330),
        borderWidth: Height(1),
        borderRadius: Width(10),
        borderColor: '#D6D6D6',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: Height(15),
        justifyContent: 'space-between',
        paddingHorizontal: Width(20)
    },
    bankNameText: {
        fontSize: Height(14),
        fontFamily: 'Poppins-Regular',
        color: 'black'
    },
    btn: {
        height: Height(60),
        width: Width(330),
        borderWidth: Width(3),
        borderRadius: Width(10),
        borderColor: '#767676',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Height(15)
    },
    text: {
        fontSize: Height(14),
        fontFamily: 'Poppins-Medium',
        color: 'black',
    }
})