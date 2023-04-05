import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import EcoVisionComponent from '../assets/images/EcoVision'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ManageAccountComponent from '../assets/images/ManageAccount'
import { globalStyles } from '../utils/globalStyles'
const AddMoneyCardScreen = () => {
    const navigation = useNavigation()
    const data = [
        {
            id: 1,
            image: <ManageAccountComponent size={Height(25)} />,
            name: 'Kotak Bank Ltd.'
        }, {
            id: 2,
            image: <ManageAccountComponent size={Height(25)} />,
            name: 'The Varachha Co.Op Bank'
        }
    ]

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
                <Text style={globalStyles.subHeaderViewText}>Cards:</Text>
            </View>
            <View>
                <ScrollView>
                    {
                        data.map((item, i) => {
                            return (
                                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddNewCard')} key={i}>
                                    {item.image}
                                    <Text style={styles.text}>{item.name}</Text>
                                    <Ionicons name='caret-down-outline' color='transparent' size={Height(25)} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </>
    )
}

export default AddMoneyCardScreen

const styles = StyleSheet.create({
    btn: {
        height: Height(60),
        width: Width(330),
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: Height(1),
        borderColor: '#D6D6D6',
        borderRadius: Width(10),
        justifyContent: 'space-between',
        alignSelf: 'center',
        paddingHorizontal: Width(40),
        marginTop: Height(15)
    },
    text: {
        fontSize: Height(14),
        fontFamily: 'Poppins-Regular',
        color: 'black'
    }
})