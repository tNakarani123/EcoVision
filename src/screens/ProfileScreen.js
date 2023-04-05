import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import EcoVisionComponent from '../assets/images/EcoVision'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from "react-native-image-picker"
import { Avatar } from 'react-native-paper'
import EditComponent from '../assets/images/Edit'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TextInput } from 'react-native'
import PhoneInput from 'react-native-phone-number-input';
import ProfileEmailComponent from '../assets/images/ProfileEmail'
import CalendarComponent from '../assets/images/Calendar'
import SelectDropdown from 'react-native-select-dropdown'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ScrollView } from 'react-native'
import EditCarComponent from '../assets/images/EditCar'
import { globalStyles } from '../utils/globalStyles'
const ProfileScreen = () => {
    const navigation = useNavigation()
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
    const profilepic = pickerResponse?.assets && pickerResponse.assets[0].uri;
    const [phoneNumber, setPhoneNumber] = useState('');

    const phoneInput = useRef(null);
    const gender = ["Female", "Male", "Other"]
    const EV = ["Tata Tigor EV", "Tesla Model 3", "Tesla Model S", "Tesla Model X", "Chevrolet Bolt EV", "Nissan Leaf", "Hyundai Kona Electric", "Jaguar I-PACE", "Audi e-tron", "BMW i3", "Volkswagen ID.4", "Ford Mustang Mach-E", "Porsche Taycan"]
    return (
        <>
            <SafeAreaView
                edges={["top"]}
                style={globalStyles.safeView}
            />
            <View style={globalStyles.mainHeader}>
                <EcoVisionComponent width={Width(167)} height={Height(16)} />
                <TouchableOpacity onPress={() => navigation.navigate('BookMark')}>
                    <Ionicons name='bookmark' size={Height(30)} color='white' />
                </TouchableOpacity>
            </View>
            <View style={styles.profileView}>
                <Ionicons name='arrow-back' size={Height(30)} color='black' onPress={() => navigation.goBack()} />
                <View style={{ alignSelf: 'center', }}>
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
                    <TouchableOpacity style={styles.editBtn} onPress={chooseFile}>
                        <EditComponent height={Height(25)} width={Width(25)} />
                    </TouchableOpacity>
                </View>
                <Ionicons name='arrow-back' size={Height(30)} color='transparent' />
            </View>
            <View style={styles.headingView}>
                <FontAwesome name='cog' size={Height(25)} color='transparent' />
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.userText}>cameronphayes</Text>
                    <Text style={[styles.userText, { marginTop: Height(5) }]}>cameronphayes@gmail.com</Text>
                </View>
                <FontAwesome name='cog' size={Height(25)} color='black' onPress={() => navigation.navigate('Setting')} />
            </View>
            <View style={styles.line} />
            <Text style={styles.personalText}>Personal Detail</Text>
            <ScrollView contentContainerStyle={{ paddingBottom: Height(32), }}>

                <TextInput
                    placeholder='Full Name'
                    style={[styles.textInput, { backgroundColor: index === 1 ? '#E7F5ED' : '#EEEEEE', borderColor: index === 1 ? '#0C9348' : '#D9D9D9', }]}
                    onPressIn={() => setIndex(1)}
                />
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={phoneNumber}
                    defaultCode="IN"
                    layout="first"
                    autoFocus
                    containerStyle={{
                        width: Width(330),
                        height: Height(50),
                        backgroundColor: index === 2 ? '#E7F5ED' : '#EEEEEE',
                        borderWidth: Height(1),
                        borderColor: index === 2 ? '#0C9348' : '#D9D9D9',
                        borderRadius: Width(20),
                        alignSelf: 'center',
                        fontSize: Height(16),
                        fontFamily: 'Poppins-Regular',
                        fontWeight: '500',
                        color: 'black',
                        marginTop: Height(15)
                    }}
                    textContainerStyle={{
                        paddingVertical: 0, backgroundColor: index === 2 ? '#E7F5ED' : '#EEEEEE',
                        borderRadius: Width(20),

                    }}
                    onChangeFormattedText={text => {
                        setPhoneNumber(text);
                    }}
                    onChangeText={() => setIndex(2)}
                    onChangeCountry={() => setIndex(2)}
                />
                <View style={[styles.subTextInputView, { backgroundColor: index === 3 ? '#E7F5ED' : '#EEEEEE', borderColor: index === 3 ? '#0C9348' : '#D9D9D9', }]}>
                    <TextInput
                        placeholder='Email'
                        style={styles.subTextInput}
                        onPressIn={() => setIndex(3)}
                    />
                    <ProfileEmailComponent width={Width(20)} height={Height(14)} color={index === 3 ? '#0C9348' : '#AAA'} />
                </View>
                <View style={[styles.subTextInputView, { backgroundColor: index === 4 ? '#E7F5ED' : '#EEEEEE', borderColor: index === 4 ? '#0C9348' : '#D9D9D9', }]}>
                    <TextInput
                        placeholder='Date of Birth'
                        style={styles.subTextInput}
                        onPressIn={() => setIndex(4)}
                    />
                    <CalendarComponent size={Height(20)} color={index === 4 ? '#0C9348' : '#AAA'} />
                </View>
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
                <View style={styles.line} />
                <Text style={styles.personalText}>Vehicle Detail</Text>
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
                <View style={[styles.subTextInputView, { backgroundColor: index === 7 ? '#E7F5ED' : '#EEEEEE', borderColor: index === 7 ? '#0C9348' : '#D9D9D9', }]}>
                    <TextInput
                        placeholder='Car Number'
                        style={styles.subTextInput}
                        onPressIn={() => setIndex(7)}
                    />
                    <EditCarComponent size={Height(20)} color={index === 7 ? '#0C9348' : '#AAA'} />
                </View>
                <TouchableOpacity style={globalStyles.Button} >
                    <Text style={globalStyles.ButtonText}>Save</Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    profileView: {
        flexDirection: 'row',
        marginTop: Height(15),
        justifyContent: 'space-between',
        marginHorizontal: Width(30)
    },
    editBtn: {
        position: 'absolute',
        marginLeft: Width(95),
        marginTop: Height(85)
    },
    headingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Width(30),
        marginTop: Height(16)
    },
    userText: {
        fontSize: Height(10),
        fontFamily: 'Poppins-Regular',
        color: 'black'
    },
    line: {
        height: Height(1),
        backgroundColor: 'rgba(126, 126, 126, 0.3)',
        marginTop: Height(20)
    },
    personalText: {
        fontSize: Height(16),
        fontFamily: 'Poppins-Medium',
        color: 'black',
        marginLeft: Width(30),
        marginTop: Height(10)
    },
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
        marginTop: Height(20)
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