import { Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import EcoVisionComponent from '../assets/images/EcoVision'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { Height, Width } from '../utils/responsive'
import AlertComponent from '../assets/images/Alert'
import { globalStyles } from '../utils/globalStyles'
const AddNewCardScreen = () => {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    const [subModalVisible, setSubModalVisible] = useState(false);
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
                <Text style={globalStyles.subHeaderViewText}>Add New Card:</Text>
            </View>
            <TextInput style={styles.textInput} placeholder='Add Card Number' keyboardType='number-pad' placeholderTextColor='black' />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(45), marginTop: Height(10) }}>
                <TextInput
                    placeholder='EX Date'
                    style={styles.subTextInput}
                    keyboardType='number-pad' placeholderTextColor='black'
                />
                <TextInput
                    placeholder='CVV/CVC'
                    style={styles.subTextInput}
                    keyboardType='number-pad' placeholderTextColor='black'
                />
            </View>
            <TextInput style={styles.textInput} placeholder='Pay Account' keyboardType='number-pad' placeholderTextColor='black' />
            <View style={styles.rowView}>
                <TextInput
                    placeholder='Add To Wallet'
                    style={styles.subTextInput}
                    placeholderTextColor='black'
                />
                <TouchableOpacity style={styles.addBtn} onPress={() => setModalVisible(true)}>
                    <Text style={styles.addBtnText} >Add</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.paymentBtn} onPress={() => setSubModalVisible(true)}>
                <Text style={styles.addBtnText}>Make Payment</Text>
            </TouchableOpacity>
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
                            <View style={styles.modalSubView}>
                                <AlertComponent size={Height(160)} />
                            </View>
                            <Text style={styles.modalText}>Amount Added To Wallet</Text>
                            <TouchableOpacity style={styles.modalBtn} onPress={() => navigation.navigate('Wallet')}>
                                <Text style={styles.modalBtnText}>Go Back</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={subModalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setSubModalVisible(!subModalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.modalSubView}>
                                <AlertComponent size={Height(160)} />
                            </View>
                            <Text style={styles.modalText}>Payment Of ₹750 Is Done</Text>
                            <TouchableOpacity style={styles.modalBtn} onPress={() => navigation.navigate('Wallet')}>
                                <Text style={styles.modalBtnText}>Go Back</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    )
}

export default AddNewCardScreen

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
    textInput: {
        height: Height(55),
        width: Width(300),
        borderWidth: Height(1),
        borderRadius: Width(10),
        borderColor: '#D6D6D6',
        alignSelf: 'center',
        marginTop: Height(15),
        fontSize: Height(14),
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        paddingHorizontal: Width(20)
    },
    subTextInput: {
        height: Height(55),
        width: Width(140),
        borderWidth: Height(1),
        borderColor: '#D6D6D6',
        borderRadius: Width(10),
        textAlign: 'center',
        fontSize: Height(14),
        fontFamily: 'Poppins-Regular'
    },
    addBtn: {
        height: Height(55),
        width: Width(140),

        borderRadius: Width(10),
        backgroundColor: '#0C9348',
        justifyContent: 'center',
    },
    addBtnText: {
        textAlign: 'center',
        fontSize: Height(14),
        fontFamily: 'Poppins-Regular',
        color: 'white'
    },
    paymentBtn: {
        height: Height(55),
        width: Width(300),
        borderRadius: Width(10),
        backgroundColor: '#0C9348',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: Height(10)
    },
    modalSubView: {
        alignSelf: 'center',
        marginTop: Height(50)
    },
    modalText: {
        fontSize: Height(25),
        fontFamily: 'Poppins-Bold',
        color: '#0C9348',
        textAlign: 'center',
        marginTop: Height(20),
        width: Width(220),
        alignSelf: 'center'
    },
    modalBtn: {
        height: Height(55),
        width: Width(200),
        backgroundColor: '#0C9348',
        alignSelf: 'center',
        borderRadius: Width(10),
        marginTop: Height(30),
        justifyContent: 'center'
    },
    modalBtnText: {
        fontSize: Height(14),
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
        color: 'white'
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Width(45),
        marginTop: Height(10)
    }
})