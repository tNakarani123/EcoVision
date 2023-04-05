import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Modal, Text, View, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AlertComponent from '../assets/images/Alert';
import { Height, Width } from './responsive';

export default function CustomAlert({

    displayMsg,
    visibility,
    dismissAlert,
    headerMsg,
    cancelMsg,
    successMsg,
    upColor,
    txtColor,
    navigation
}) {




    return (
        <View>
            <Modal
                visible={visibility}
                animationType={'fade'}
                transparent={true}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(52, 52, 52, 0.8)',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <View
                        style={{

                            backgroundColor: 'white',
                            height: Height(400),
                            width: Width(310),
                            borderRadius: Width(70),
                        }}>
                        <View style={{ alignSelf: 'center', marginTop: Height(50) }}>
                            <AlertComponent size={Height(160)} />
                        </View>

                        <Text style={{ textAlign: 'center', fontSize: Height(25), fontFamily: 'Poppins-Bold', color: '#0C9348', marginTop: Height(30) }}>Congratulations</Text>
                        <Text style={{ textAlign: 'center', fontSize: Height(15), fontFamily: 'Poppins-Regular', color: 'black', }}>your Account is ready to use.</Text>

                        <TouchableOpacity style={{ width: Width(200), backgroundColor: '#0C9348', height: Height(55), alignSelf: 'center', justifyContent: 'center', borderRadius: Width(30), position: 'absolute', bottom: 0, marginBottom: Width(20) }} onPress={navigation}>
                            <Text style={{ textAlign: 'center', fontSize: Height(16), fontFamily: 'Poppins-SemiBold', color: 'white', }}>Go to HomePage</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}