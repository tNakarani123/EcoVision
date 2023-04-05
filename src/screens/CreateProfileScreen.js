import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import * as ImagePicker from "react-native-image-picker"
import { Height, Width } from '../utils/responsive';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Avatar } from 'react-native-paper'
import EditComponent from '../assets/images/Edit';
import CalendarComponent from '../assets/images/Calendar';
import ProfileEmailComponent from '../assets/images/ProfileEmail';
import PhoneInput from 'react-native-phone-number-input';
import SelectDropdown from 'react-native-select-dropdown'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { globalStyles } from '../utils/globalStyles';
const CreateProfileScreen = () => {
    const chooseFile = () => {
        const options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: true,
            quality: 0.1,
            maxHeight: 500, maxWidth: 500,
        };
        ImagePicker.launchImageLibrary(options, setPickerResponse);

    };
    const [pickerResponse, setPickerResponse] = useState(null);
    const [index, setIndex] = useState(0)
    const navigation = useNavigation()
    const profilepic = pickerResponse?.assets && pickerResponse.assets[0].uri;
    const [phoneNumber, setPhoneNumber] = useState('');

    const phoneInput = useRef(null);
    const gender = ["Female", "Male", "Other"]
    const EV = ["Tata Tigor EV", "Tesla Model 3", "Tesla Model S", "Tesla Model X", "Chevrolet Bolt EV", "Nissan Leaf", "Hyundai Kona Electric", "Jaguar I-PACE", "Audi e-tron", "BMW i3", "Volkswagen ID.4", "Ford Mustang Mach-E", "Porsche Taycan"]

    return (
        <SafeAreaView style={globalStyles.authenticateSafeView}>
            <View style={globalStyles.headingView}>
                <Ionicons name='ios-arrow-back-outline' size={Height(30)} style={{ marginLeft: Width(30) }} onPress={() => navigation.goBack()} />
                <Text style={globalStyles.headingText}>Create Profile</Text>
            </View>
            <View style={{ alignSelf: 'center', marginTop: Height(40), }}>

                {
                    profilepic ?

                        <Avatar.Image
                            size={Height(120)}
                            source={{
                                uri: profilepic,
                            }}
                            style={styles.avatar}

                        />
                        :
                        <Avatar.Image
                            size={Height(120)}
                            source={require('../assets/images/user.png')}
                            style={styles.avatar}
                        />
                }
                <TouchableOpacity style={{ position: 'absolute', marginLeft: Width(95), marginTop: Height(85) }} onPress={chooseFile}>
                    <EditComponent height={Height(25)} width={Width(25)} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <TextInput
                    placeholder='Full Name'
                    style={[styles.textInput, { backgroundColor: index === 1 ? '#E7F5ED' : '#EEEEEE', borderColor: index === 1 ? '#0C9348' : '#D9D9D9', }]}
                    onPressIn={() => setIndex(1)}
                />
                <View style={[styles.subTextInputView, { backgroundColor: index === 2 ? '#E7F5ED' : '#EEEEEE', borderColor: index === 2 ? '#0C9348' : '#D9D9D9', }]}>
                    <TextInput
                        placeholder='Date of Birth'
                        style={styles.subTextInput}
                        onPressIn={() => setIndex(2)}
                    />
                    <CalendarComponent size={Height(20)} color={index === 2 ? '#0C9348' : '#AAA'} />
                </View>
                <View style={[styles.subTextInputView, { backgroundColor: index === 3 ? '#E7F5ED' : '#EEEEEE', borderColor: index === 3 ? '#0C9348' : '#D9D9D9', }]}>
                    <TextInput
                        placeholder='Email'
                        style={styles.subTextInput}
                        onPressIn={() => setIndex(3)}
                    />
                    <ProfileEmailComponent width={Width(20)} height={Height(14)} color={index === 3 ? '#0C9348' : '#AAA'} />
                </View>

                <PhoneInput
                    ref={phoneInput}
                    defaultValue={phoneNumber}
                    defaultCode="IN"
                    layout="first"
                    // withShadow
                    autoFocus
                    containerStyle={{
                        width: Width(330),
                        height: Height(50),
                        backgroundColor: index === 4 ? '#E7F5ED' : '#EEEEEE',
                        borderWidth: Height(1),
                        borderColor: index === 4 ? '#0C9348' : '#D9D9D9',
                        borderRadius: Width(20),
                        alignSelf: 'center',
                        fontSize: Height(16),
                        fontFamily: 'Poppins-Regular',
                        fontWeight: '500',
                        color: 'black',
                        marginTop: Height(15)
                    }}
                    textContainerStyle={{
                        paddingVertical: 0, backgroundColor: index === 4 ? '#E7F5ED' : '#EEEEEE',
                        borderRadius: Width(20),

                    }}
                    onChangeFormattedText={text => {
                        setPhoneNumber(text);
                    }}
                    onChangeText={() => setIndex(4)}
                    onChangeCountry={() => setIndex(4)}
                />
                <SelectDropdown
                    data={gender}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    buttonStyle={{
                        backgroundColor: index === 5 ? '#E7F5ED' : '#EEEEEE',
                        width: Width(330),
                        height: Height(50),
                        borderWidth: Height(1),
                        borderRadius: Width(20),
                        borderColor: index === 5 ? '#0C9348' : '#D9D9D9',
                        alignSelf: 'center',
                        marginTop: Height(15)
                    }}
                    buttonTextStyle={{
                        textAlign: 'left',
                        marginLeft: Width(15),
                        fontSize: Height(16),
                        fontFamily: 'Poppins-Regular',
                        fontWeight: '500',
                        color: 'black',
                    }}
                    rowTextStyle={{
                        textAlign: 'left',
                        marginLeft: Width(25),
                        fontSize: Height(16),
                        fontFamily: 'Poppins-Regular',
                        fontWeight: '500',
                        color: 'black',
                        borderRadius: Width(20),
                    }}
                    defaultButtonText='Gender'
                    dropdownIconPosition='right'
                    renderDropdownIcon={() => { return (<MaterialCommunityIcons name='menu-down' size={25} color={index === 5 ? '#0C9348' : '#AAAAAA'} />) }}
                    selectedRowTextStyle={{
                        color: 'black',
                    }}
                    selectedRowStyle={{
                        backgroundColor: 'white'
                    }}
                    dropdownStyle={{

                        borderRadius: Width(20),
                    }}
                    onFocus={() => setIndex(5)}
                />
                <SelectDropdown
                    data={EV}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    buttonStyle={{
                        backgroundColor: index === 6 ? '#E7F5ED' : '#EEEEEE',
                        width: Width(330),
                        height: Height(50),
                        borderWidth: Height(1),
                        borderRadius: Width(20),
                        borderColor: index === 6 ? '#0C9348' : '#D9D9D9',
                        alignSelf: 'center',
                        marginTop: Height(15)
                    }}
                    buttonTextStyle={{
                        textAlign: 'left',
                        marginLeft: Width(15),
                        fontSize: Height(16),
                        fontFamily: 'Poppins-Regular',
                        fontWeight: '500',
                        color: 'black',
                    }}
                    rowTextStyle={{
                        textAlign: 'left',
                        marginLeft: Width(25),
                        fontSize: Height(16),
                        fontFamily: 'Poppins-Regular',
                        fontWeight: '500',
                        color: 'black',
                        borderRadius: Width(20),
                    }}
                    defaultButtonText='Select your EV'
                    dropdownIconPosition='right'
                    renderDropdownIcon={() => { return (<MaterialCommunityIcons name='menu-down' size={25} color={index === 6 ? '#0C9348' : '#AAAAAA'} />) }}
                    selectedRowTextStyle={{
                        color: 'black',
                    }}
                    selectedRowStyle={{
                        backgroundColor: 'white'
                    }}
                    dropdownStyle={{

                        borderRadius: Width(20),
                    }}
                    onFocus={() => setIndex(6)}
                />
                <TouchableOpacity style={globalStyles.Button} onPress={() => { navigation.navigate('Tab') }}>
                    <Text style={globalStyles.ButtonText}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CreateProfileScreen

const styles = StyleSheet.create({
    textInput: {
        height: Height(50),
        width: Width(330),
        borderRadius: Width(20),
        borderWidth: Height(1),
        fontSize: Height(16),
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
        color: 'black',
        alignSelf: 'center',
        paddingHorizontal: Width(25),
        marginTop: Height(45)
    },
    subTextInputView: {
        height: Height(50),
        width: Width(330),
        borderRadius: Width(20),
        borderWidth: Height(1),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Width(25),
        alignSelf: 'center',
        marginTop: Height(15)
    },
    subTextInput: {
        fontSize: Height(16),
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
        color: 'black',
        width: Width(240)
    }
})