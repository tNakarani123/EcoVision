import { Modal, Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import EcoVisionComponent from '../assets/images/EcoVision'
import { TouchableOpacity } from 'react-native'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AccountComponent from '../assets/images/Account'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import NotificationComponent from '../assets/images/Notifiation'
import HelpComponent from '../assets/images/Help'
import ContactComponent from '../assets/images/Contact'
import LogoutComponent from '../assets/images/Logout'
import ManageAccountComponent from '../assets/images/ManageAccount'
import CardDetailsComponent from '../assets/images/CardDetails'
import AppWalletComponent from '../assets/images/AppWallet'
import HistoryComponent from '../assets/images/History'
import PhoneComponent from '../assets/images/Phone'
import MailComponent from '../assets/images/Mail'
import { globalStyles } from '../utils/globalStyles'

const SettingScreen = () => {
    const navigation = useNavigation()
    const [account, setAccount] = useState(false)
    const [notification, setNotification] = useState(false)
    const [contact, setContact] = useState(false)
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [modalVisible, setModalVisible] = useState(false);
    const [subModalVisible, setSubModalVisible] = useState(false)
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
            <View style={styles.headerView}>
                <Ionicons name='arrow-back' size={Height(30)} color='black' onPress={() => navigation.goBack()} />
                <Text style={styles.headerText}>Setting</Text>
                <Ionicons name='arrow-back' size={Height(30)} color='transparent' />
            </View>
            <View style={{ height: Height(1), backgroundColor: 'rgba(126, 126, 126, 0.3)', marginTop: Height(20) }} />



            <ScrollView contentContainerStyle={{ paddingBottom: Width(32) }}>
                <TouchableOpacity style={styles.button} onPress={() => setAccount(!account)}>
                    <AccountComponent size={Height(24)} />
                    <Text style={styles.btnText}>Account Setting</Text>
                    <MaterialIcons name='arrow-drop-down' size={Height(30)} />
                </TouchableOpacity>
                {
                    account ? (
                        <View style={styles.accountView}>
                            <TouchableOpacity style={styles.btnView} onPress={() => setModalVisible(true)}>
                                <ManageAccountComponent size={Height(20)} />
                                <Text style={styles.btnText}>Manage Account</Text>
                                <Ionicons name='arrow-back' size={Height(20)} color='transparent' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnView} onPress={() => setSubModalVisible(true)}>
                                <CardDetailsComponent size={Height(20)} />
                                <Text style={styles.btnViewText}>Card Detail</Text>
                                <Ionicons name='arrow-back' size={Height(20)} color='transparent' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnView}>
                                <AppWalletComponent size={Height(20)} />
                                <Text style={styles.btnViewText}>App Wallet</Text>
                                <Ionicons name='arrow-back' size={Height(20)} color='transparent' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnView}>
                                <HistoryComponent size={Height(20)} />
                                <Text style={styles.btnViewText}>History</Text>
                                <Ionicons name='arrow-back' size={Height(20)} color='transparent' />
                            </TouchableOpacity>
                        </View>
                    ) : null
                }
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)'
                        }}>
                            <View style={styles.modalView}>
                                <View style={styles.modalHeadingView}>
                                    <ManageAccountComponent size={Height(20)} />
                                    <Text>Manage Account</Text>
                                    <Ionicons name='close-outline' size={Height(20)} onPress={() => setModalVisible(!modalVisible)} />
                                </View>
                                <View style={styles.modalLine} />
                                <View style={styles.modalBottomView}>
                                    <View>
                                        <ManageAccountComponent size={Height(20)} />
                                    </View>
                                    <View>
                                        <Text style={styles.modalText}>Manage Account</Text>
                                        <Text style={styles.modalText}>**** **** 5678</Text>
                                        <Text style={styles.modalText}>The Varachha Co.Op. Bank Lmt.</Text>
                                    </View>
                                </View>
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
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)'
                        }}>
                            <View style={styles.modalView}>
                                <View style={styles.modalHeadingView}>
                                    <CardDetailsComponent size={Height(20)} />
                                    <Text>Card Detail</Text>
                                    <Ionicons name='close-outline' size={Height(20)} onPress={() => setSubModalVisible(!subModalVisible)} />
                                </View>
                                <View style={styles.modalLine} />
                                <View style={styles.secModalView}>
                                    <View>
                                        <CardDetailsComponent size={Height(20)} />
                                    </View>
                                    <View style={{ marginLeft: Width(25) }}>
                                        <Text style={styles.modalText}>Card Detail</Text>
                                        <Text style={styles.modalText}>**** **** 5678</Text>
                                    </View>
                                </View>
                                <View style={styles.secModalSubView}>
                                    <Text style={styles.modalText}>Add New Card</Text>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => setNotification(!notification)}>
                    <NotificationComponent size={Height(24)} />
                    <Text style={styles.btnText}>Notification Setting</Text>
                    <MaterialIcons name='arrow-drop-down' size={Height(30)} />
                </TouchableOpacity>
                {
                    notification ? (
                        <View style={styles.notificationView}>
                            <TouchableOpacity style={styles.btnView}>
                                <Text style={styles.btnViewText}>Push Notification</Text>
                                <Switch
                                    trackColor={{ false: '#767577', true: '#0C9348' }}
                                    thumbColor={isEnabled ? '#FFFFFF' : '#000000'}
                                    ios_backgroundColor="#BDBDBD"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                    style={styles.switch}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnView}>
                                <Text style={styles.btnViewText}>Email Notification</Text>
                                <Switch
                                    trackColor={{ false: '#767577', true: '#0C9348' }}
                                    thumbColor={isEnabled ? '#FFFFFF' : '#000000'}
                                    ios_backgroundColor="#BDBDBD"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                    style={styles.switch}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnView}>
                                <Text style={styles.btnViewText}>SMS Notification </Text>
                                <Switch
                                    trackColor={{ false: '#767577', true: '#0C9348' }}
                                    thumbColor={isEnabled ? '#FFFFFF' : '#000000'}
                                    ios_backgroundColor="#BDBDBD"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                    style={styles.switch}
                                />
                            </TouchableOpacity>
                        </View>
                    ) : null
                }
                <TouchableOpacity style={styles.button} onPress={() => setContact(!contact)}>
                    <ContactComponent size={Height(24)} />
                    <Text style={styles.btnText}>Contact Us</Text>
                    <MaterialIcons name='arrow-drop-down' size={Height(30)} />
                </TouchableOpacity>
                {
                    contact ? (
                        <View style={styles.contactView}>
                            <TouchableOpacity style={styles.btnView}>
                                <PhoneComponent size={Height(20)} />
                                <Text style={styles.btnViewText}>+91 5623895236</Text>
                                <Ionicons name='arrow-back' size={Height(20)} color='transparent' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnView}>
                                <MailComponent size={Height(20)} />
                                <Text style={styles.btnViewText}>ecovision@rutilant.com </Text>
                                <Ionicons name='arrow-back' size={Height(20)} color='transparent' />
                            </TouchableOpacity>
                        </View>
                    ) : null
                }
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Help')}>
                    <HelpComponent size={Height(24)} />
                    <Text style={styles.btnViewText}>Help</Text>
                    <MaterialIcons name='arrow-right' size={Height(30)} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutBtn}>
                    <LogoutComponent size={Height(24)} />
                    <Text style={styles.logoutText}>Logout</Text>
                    <MaterialIcons name='arrow-drop-down' size={Height(30)} color='transparent' />
                </TouchableOpacity>
            </ScrollView>




        </>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    button: {
        height: Height(60),
        width: Width(330),
        backgroundColor: '#FAFAFA',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Width(40),
        alignSelf: 'center',
        borderWidth: Height(1.5),
        borderColor: '#D9D9D9',
        borderRadius: Width(10),
        marginTop: Height(15)
    },
    logoutBtn: {
        height: Height(60),
        width: Width(330),
        backgroundColor: '#FFE8E8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Width(40),
        alignSelf: 'center',
        borderWidth: Height(1.5),
        borderColor: '#FF5C5C',
        borderRadius: Width(10),
        marginTop: Height(15)
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: Width(312),
        height: Height(240)
    },
    btnText: {
        fontSize: Height(12),
        fontFamily: 'Poppins-Regular',
        color: 'black'
    },
    accountView: {
        height: Height(240),
        width: Width(312),
        backgroundColor: 'white',
        alignSelf: 'center',
        borderBottomLeftRadius: Width(20),
        borderBottomRightRadius: Width(20)
    },
    btnView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: Height(40),
        width: Width(252),
        borderWidth: Height(1),
        borderColor: '#C4C4C4',
        borderRadius: Width(10),
        alignSelf: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Width(30),
        marginTop: Height(15)
    },
    btnViewText: {
        fontSize: Height(10),
        fontFamily: 'Poppins-Medium',
        color: 'black'
    },
    switch: {
        transform:
            [{ scaleX: .8 },
            { scaleY: .8 }]
    },
    contactView: {
        height: Height(140),
        width: Width(312),
        backgroundColor: 'white',
        alignSelf: 'center',
        borderBottomLeftRadius: Width(20),
        borderBottomRightRadius: Width(20)
    },
    notificationView: {
        height: Height(190),
        width: Width(312),
        backgroundColor: 'white',
        alignSelf: 'center',
        borderBottomLeftRadius: Width(20),
        borderBottomRightRadius: Width(20)
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Width(30),
        marginTop: Height(16)
    },
    headerText: {
        fontSize: Height(16),
        fontFamily: 'Poppins-Medium',
        color: 'black'
    },
    modalHeadingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Width(30),
        height: Height(60)
    },
    modalLine: {
        height: Height(1),
        backgroundColor: '#D9D9D9'
    },
    modalBottomView: {
        height: Height(85),
        width: Width(250),
        backgroundColor: '#FAFAFA',
        alignSelf: 'center',
        borderWidth: Height(1),
        borderColor: '#C4C4C4',
        borderRadius: Width(10),
        marginTop: Height(15),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Width(20),
        justifyContent: 'space-between'
    },
    modalText: {
        fontSize: Height(10),
        fontFamily: 'Poppins-Medium',
        color: 'black'
    },
    secModalView: {
        height: Height(60),
        width: Width(250),
        backgroundColor: '#FAFAFA',
        alignSelf: 'center',
        borderWidth: Height(1),
        borderColor: '#C4C4C4',
        borderRadius: Width(10),
        marginTop: Height(15),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Width(30),
    },
    secModalSubView: {
        height: Height(40),
        width: Width(250),
        backgroundColor: '#FAFAFA',
        alignSelf: 'center',
        borderWidth: Height(1),
        borderColor: '#C4C4C4',
        borderRadius: Width(10),
        marginTop: Height(15),
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoutText: {
        color: '#FF5C5C',
        fontSize: Height(12),
        fontFamily: 'Poppins-Regular',
    }
})