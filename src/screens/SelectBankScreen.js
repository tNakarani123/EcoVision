import { Image, Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import EcoVisionComponent from '../assets/images/EcoVision'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AlertComponent from '../assets/images/Alert'
import { globalStyles } from '../utils/globalStyles'
const SelectBankScreen = () => {
    const route = useRoute()
    console.log(route.params?.data);
    const data = route.params?.data
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
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
                <Text style={globalStyles.subHeaderViewText}>Select Bank:</Text>
            </View>
            <View style={styles.firstView}>
                <View style={styles.secondView}>
                    <Image source={data.image} />
                    <Text style={styles.bankNameText}>{data.bankName}</Text>
                </View>
                <TextInput style={styles.textInput} placeholder='Account number' keyboardType='number-pad' placeholderTextColor='black' />

                <TextInput style={styles.textInput} placeholder='IFSC Code' keyboardType='number-pad' placeholderTextColor='black' />

                <TouchableOpacity style={styles.saveBtn} onPress={() => setModalVisible(true)}>
                    <Text style={styles.btnText}>SaveBank</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.alertView}>
                                <AlertComponent size={Height(160)} />
                            </View>
                            <Text style={styles.firstText}>Bank Account Added</Text>
                            <Text style={styles.secondText}>Your account is ready to use.</Text>
                            <TouchableOpacity style={styles.bottomBtn} onPress={() => navigation.navigate('Wallet')}>
                                <Text style={styles.btnText}>Go Back</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    )
}

export default SelectBankScreen

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        height: Height(400),
        width: Width(310),
        backgroundColor: 'white',
        borderRadius: Width(30)
    },
    firstView: {
        height: Height(275),
        width: Width(330),
        borderWidth: Height(1),
        borderColor: '#D6D6D6',
        borderRadius: Width(10),
        alignSelf: 'center',
        marginTop: Height(10)
    },
    secondView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Height(20),
        marginLeft: Width(20)
    },
    bankNameText: {
        fontSize: Height(14),
        fontFamily: 'Poppins-Regular',
        color: 'black',
        marginLeft: Width(45)
    },
    textInput: {
        height: Height(55),
        width: Width(300),
        borderWidth: Height(1),
        borderRadius: Width(10),
        borderColor: '#D6D6D6',
        alignSelf: 'center',
        marginTop: Height(30),
        fontSize: Height(14),
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        paddingHorizontal: Width(20)
    },
    saveBtn: {
        height: Height(55),
        width: Width(300),
        backgroundColor: '#0C9348',
        alignSelf: 'center',
        borderRadius: Width(10),
        marginTop: Height(10),
        justifyContent: 'center'
    },
    btnText: {
        fontSize: Height(14),
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
        color: 'white'
    },
    alertView: {
        alignSelf: 'center',
        marginTop: Height(50)
    },
    firstText: {
        fontSize: Height(25),
        fontFamily: 'Poppins-Bold',
        color: '#0C9348',
        textAlign: 'center',
        marginTop: Height(20)
    },
    secondText: {
        fontSize: Height(15),
        fontFamily: 'Poppins-Regular',
        color: 'black',
        textAlign: 'center'
    },
    bottomBtn: {
        height: Height(55),
        width: Width(200),
        backgroundColor: '#0C9348',
        alignSelf: 'center',
        borderRadius: Width(10),
        marginTop: Height(30),
        justifyContent: 'center'
    }
})