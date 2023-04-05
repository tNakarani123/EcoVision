import { FlatList, Image, PermissionsAndroid, Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput, Modal, Pressable, Button } from 'react-native'
import React, { useEffect, useState, useCallback, useRef } from 'react'
import MapboxGL from "@rnmapbox/maps";
import { Height, Width } from '../utils/responsive';
import EcoVisionComponent from '../assets/images/EcoVision';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import SlotComponent from '../assets/images/Slot';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import PortOneComponent from '../assets/images/PortOne';
import PortTwoComponent from '../assets/images/PortTwo';
import PortThreeComponent from '../assets/images/PortThree';
import PortFourComponent from '../assets/images/PortFour';
import StarComponent from '../assets/images/Star';
import {
    GestureHandlerRootView
} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import GPSComponent from '../assets/images/GPS';
import Entypo from 'react-native-vector-icons/Entypo'
import StartComponent from '../assets/images/Start';
import PetrolComponent from '../assets/images/Petrol';
import DieselComponent from '../assets/images/Diesel';
import FlashComponent from '../assets/images/Flash';
import DropShadow from "react-native-drop-shadow";
import { AirbnbRating } from 'react-native-elements';
import RuserComponent from '../assets/images/Ruser';
import SelectDropdown from 'react-native-select-dropdown'
import DateTimePicker from '@react-native-community/datetimepicker';
import { globalStyles } from '../utils/globalStyles';

MapboxGL.setAccessToken('sk.eyJ1IjoicnV0aWxhbnR0ZWNobm9sb2d5IiwiYSI6ImNsZmFuMXltcDBqZjkzcW11YWNocGFkNTAifQ.sOtyNheJ4iD_Hi23OZPbcw');
MapboxGL.setWellKnownTileServer('Mapbox');

const data = [
    {
        id: 1,
        image: require('../assets/images/Home.png'),
        name: 'Electric Vehicle Charging Station',
        address: '6VJX+294, Zoo Rd, Sarthana Jakat Naka, Nature Park and Zoo, Nana Varachha, Surat, Gujarat 395006',
        rate: '4.5(250)',
        slotImg: <SlotComponent size={Height(10)} />,
        slot: 'Slot Available',
        km: '4.4 KM',
        kmIcon: 'arrow-right-top-bold',
        portOne: <PortOneComponent size={Height(20)} />,
        portTwo: <PortTwoComponent size={Height(20)} />,
        portThree: <PortThreeComponent size={Height(20)} />,
        portFour: <PortFourComponent size={Height(20)} />,
        bookSlot: 'Book A Slot'
    },
    {
        id: 2,
        image: require('../assets/images/Home.png'),
        name: 'Electric Vehicle Charging Station',
        address: '6VJX+294, Zoo Rd, Sarthana Jakat Naka, Nature Park and Zoo, Nana Varachha, Surat, Gujarat 395006',
        rate: '4.5(250)',
        slotImg: <SlotComponent size={Height(10)} />,
        slot: 'Slot Available',
        km: '4.4 KM',
        kmIcon: 'arrow-right-top-bold',
        portOne: <PortOneComponent size={Height(20)} />,
        portTwo: <PortTwoComponent size={Height(20)} />,
        portThree: <PortThreeComponent size={Height(20)} />,
        portFour: <PortFourComponent size={Height(20)} />,
        bookSlot: 'Book A Slot'
    },
    {
        id: 3,
        image: require('../assets/images/Home.png'),
        name: 'Electric Vehicle Charging Station',
        address: '6VJX+294, Zoo Rd, Sarthana Jakat Naka, Nature Park and Zoo, Nana Varachha, Surat, Gujarat 395006',
        rate: '4.5(250)',
        slotImg: <SlotComponent size={Height(10)} />,
        slot: 'Slot Available',
        km: '4.4 KM',
        kmIcon: 'arrow-right-top-bold',
        portOne: <PortOneComponent size={Height(20)} />,
        portTwo: <PortTwoComponent size={Height(20)} />,
        portThree: <PortThreeComponent size={Height(20)} />,
        portFour: <PortFourComponent size={Height(20)} />,
        bookSlot: 'Book A Slot'
    },
    {
        id: 4,
        image: require('../assets/images/Home.png'),
        name: 'Electric Vehicle Charging Station',
        address: '6VJX+294, Zoo Rd, Sarthana Jakat Naka, Nature Park and Zoo, Nana Varachha, Surat, Gujarat 395006',
        rate: '4.5(250)',
        slotImg: <SlotComponent size={Height(10)} />,
        slot: 'Slot Available',
        km: '4.4 KM',
        kmIcon: 'arrow-right-top-bold',
        portOne: <PortOneComponent size={Height(20)} />,
        portTwo: <PortTwoComponent size={Height(20)} />,
        portThree: <PortThreeComponent size={Height(20)} />,
        portFour: <PortFourComponent size={Height(20)} />,
        bookSlot: 'Book A Slot'
    }
]


const search = [
    {
        id: 1,
        name: 'Ev Charging Station'
    }, {
        id: 2,
        name: 'Battery Swap Station'
    }, {
        id: 3,
        name: 'Petrol Pump'
    }, {
        id: 4,
        name: 'Gas Station'
    }, {
        id: 5,
        name: 'Ev Service Station'
    }, {
        id: 6,
        name: 'More'
    }
]


const review = [
    {
        id: 1,
        name: 'Lorem Ipsum',
        review: 'Lorem ipsum dolor sit amet consectetur. Purus mi aenean lobortis condimentum phasellus. Vitae diam adipiscing consectetur ultrices.'
    },
    {
        id: 2,
        name: 'Lorem Ipsum',
        review: 'Lorem ipsum dolor sit amet consectetur. Purus mi aenean lobortis condimentum phasellus. Vitae diam adipiscing consectetur ultrices.'
    },
    {
        id: 3,
        name: 'Lorem Ipsum',
        review: 'Lorem ipsum dolor sit amet consectetur. Purus mi aenean lobortis condimentum phasellus. Vitae diam adipiscing consectetur ultrices.'
    }
]


const HomeScreen = () => {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState('')
    const bottomSheetRef = useRef(null);
    const [location, setLocation] = useState(null);
    console.log({ location });
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [time, setTime] = useState(new Date(Date.now()));

    const showPicker = () => {
        setIsPickerShow(true);
    };

    const onChange = (event, value) => {
        setTime(value);
        setIsPickerShow(false);
    };


    console.log({ time });

    const selectVehicle = ["Tata Tigor EV", "Tesla Model 3", "Tesla Model S", "Tesla Model X", "Chevrolet Bolt EV", "Nissan Leaf", "Hyundai Kona Electric", "Jaguar I-PACE", "Audi e-tron", "BMW i3", "Volkswagen ID.4", "Ford Mustang Mach-E", "Porsche Taycan"]
    useEffect(() => {

        (async () => {
            const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
            if (result) {
                console.log({ result });
            }
        })()
    }, []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);


    switch (selected) {
        case 'BookSolt':
            return (
                <>
                    {
                        Platform.OS === 'android' ?
                            <GestureHandlerRootView style={{ flex: 1 }}>
                                <View style={styles.page}>
                                    <View style={StyleSheet.absoluteFillObject}>
                                        <MapboxGL.MapView style={styles.map}>
                                            <MapboxGL.UserLocation
                                                onUpdate={({ coords: { latitude, longitude
                                                } }) => {
                                                    setLocation([longitude, latitude])
                                                }}
                                                minDisplacement={100}
                                                requestsAlwaysUse={true}
                                            />
                                            {<MapboxGL.Camera zoomLevel={10} centerCoordinate={location} />}
                                        </MapboxGL.MapView>
                                    </View>
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
                                    <Ionicons name='arrow-back' size={Height(30)} style={globalStyles.backIcon} color='black' />
                                    <TouchableOpacity style={[globalStyles.locationIcon, { marginTop: Height(250), }]}>
                                        <MaterialIcons name='my-location' size={Height(24)} color='white' />
                                    </TouchableOpacity>
                                    <View style={globalStyles.mainHomeView}>
                                        <ScrollView contentContainerStyle={globalStyles.homeScrollView} showsVerticalScrollIndicator={false}>
                                            <View style={globalStyles.homeSubView}>
                                                <View style={globalStyles.gpsView}>
                                                    <GPSComponent size={Height(28)} />
                                                    <View>
                                                        <Entypo name='dot-single' size={Height(15)} color='#D9D9D9' />
                                                        <Entypo name='dot-single' size={Height(15)} color='#D9D9D9' />
                                                        <Entypo name='dot-single' size={Height(15)} color='#D9D9D9' />
                                                    </View>
                                                    <MaterialIcons name='location-on' size={Height(28)} color='#DC0000' />
                                                </View>
                                                <View style={globalStyles.destinationView}>
                                                    <View style={globalStyles.destinationSubView}>
                                                        <Text style={globalStyles.destinationText}>Mota Varachha</Text>
                                                    </View>
                                                    <View style={[globalStyles.destinationSubView, { marginTop: Height(15) }]}>
                                                        <Text style={globalStyles.destinationText}>Electric Vehicle Charging Station</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={globalStyles.lineView} />
                                            <Text style={globalStyles.timeText}>15 min<Text style={{ color: '#808080' }}> (4.1 km)</Text></Text>
                                            <Text style={globalStyles.addressText}>
                                                5RMP+M4M, Millennium Market, Aanjada Nagar, New Textile Market, Surat, Gujarat 395008
                                            </Text>
                                            <View style={globalStyles.bookSlotView}>
                                                <TouchableOpacity style={globalStyles.bookSlotBtn} onPress={() => setSelected('BookSlotOne')}>
                                                    <Text style={globalStyles.bookSlotText}>Book Slot</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={globalStyles.startBtn} onPress={() => setSelected('Start')}>
                                                    <StartComponent size={Height(15)} />
                                                    <Text style={[globalStyles.bookSlotText, { marginLeft: Width(8) }]}>Start</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={globalStyles.lineView} />
                                            <View style={globalStyles.electricMainView}>
                                                <DropShadow
                                                    style={globalStyles.shadowView}
                                                >
                                                    <View style={globalStyles.electricBtn}>
                                                        <FlashComponent width={Width(11)} height={Height(14)} />
                                                        <Text style={globalStyles.electricText}>₹9 / Unit</Text>
                                                    </View>
                                                </DropShadow>
                                                <DropShadow
                                                    style={globalStyles.shadowView}
                                                >
                                                    <View style={globalStyles.electricBtn}>
                                                        <PetrolComponent width={Width(11)} height={Height(14)} />
                                                        <Text style={globalStyles.electricText}>₹96.51 / L</Text>
                                                    </View>
                                                </DropShadow>
                                                <DropShadow
                                                    style={globalStyles.shadowView}
                                                >
                                                    <View style={globalStyles.electricBtn}>
                                                        <DieselComponent width={Width(11)} height={Height(14)} />
                                                        <Text style={globalStyles.electricText}>₹92.04 / L</Text>
                                                    </View>
                                                </DropShadow>
                                            </View>
                                            <View style={globalStyles.lineView} />
                                            <View style={globalStyles.imageView}>
                                                <Image source={require('../assets/images/first.png')} style={globalStyles.firstImage} />
                                                <View>
                                                    <View style={globalStyles.subImageView}>
                                                        <Image source={require('../assets/images/second.png')} style={globalStyles.subImage} />
                                                        <Image source={require('../assets/images/third.png')} style={globalStyles.subImage} />
                                                    </View>
                                                    <Image source={require('../assets/images/four.png')} style={globalStyles.lastImage} />
                                                </View>
                                            </View>
                                            <View style={globalStyles.lineView} />
                                            <Text style={globalStyles.reviewText}>Reviews:</Text>
                                            {
                                                review.map((item, i) => {
                                                    return (
                                                        <View style={globalStyles.reviewMainView} key={i}>
                                                            <View style={globalStyles.reviewUserView}>
                                                                <RuserComponent width={Width(42)} height={Height(51)} />
                                                            </View>
                                                            <View style={globalStyles.reviewSubView}>
                                                                <View style={globalStyles.rowView}>
                                                                    <Text style={globalStyles.reviewSubText}>{item.name}</Text>
                                                                    <AirbnbRating showRating={false} size={Height(10)} />
                                                                </View>
                                                                <Text style={globalStyles.reviewLastText}>{item.review}</Text>
                                                            </View>
                                                        </View>
                                                    )
                                                })
                                            }
                                            <TouchableOpacity style={globalStyles.dropReviewView} onPress={() => setModalVisible(!modalVisible)}>
                                                <Image source={require('../assets/images/user.png')} style={globalStyles.reviewUser} />
                                                <Text style={globalStyles.dropText}>Drop Your Review Here</Text>
                                            </TouchableOpacity>
                                            <Text style={globalStyles.nearByText}>Nearby Stations</Text>

                                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                                {
                                                    data.map((item, i) => {
                                                        return (
                                                            <View key={i}>
                                                                <View style={globalStyles.mainView}>
                                                                    <Image source={item.image} style={globalStyles.evImage} />
                                                                    <View style={globalStyles.evSubView}>
                                                                        <Text style={globalStyles.evMainText}>{item.name}</Text>
                                                                        <View style={globalStyles.rowView}>
                                                                            {item.slotImg}
                                                                            <Text style={globalStyles.slotText}>{item.slot}</Text>
                                                                        </View>
                                                                    </View>
                                                                    <Text style={globalStyles.evAddressText}>{item.address}</Text>
                                                                    <View style={globalStyles.evStarView}>
                                                                        <StarComponent size={Height(10)} />
                                                                        <Text style={globalStyles.evStarText}>{item.rate}</Text>
                                                                    </View>
                                                                    <View style={globalStyles.portView}>
                                                                        <View style={globalStyles.rowView}>
                                                                            {item.portOne}
                                                                            {item.portTwo}
                                                                            {item.portThree}
                                                                            {item.portFour}
                                                                        </View>
                                                                        <TouchableOpacity style={globalStyles.distanceView}>
                                                                            <Text style={globalStyles.distanceText}>
                                                                                {item.km}
                                                                            </Text>
                                                                            <MaterialCommunityIcons name={item.kmIcon} color='white' />
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                    <TouchableOpacity style={globalStyles.evBookSlotBtn} onPress={() => setSelected('BookSolt')}>
                                                                        <Text style={globalStyles.evBookSlotText}>{item.bookSlot}</Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                        )
                                                    })
                                                }
                                            </ScrollView>
                                        </ScrollView>
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
                                                    <View style={globalStyles.homeModalSubView}>
                                                        <Image source={require('../assets/images/user.png')} style={globalStyles.homeModalUserImage} />
                                                        <TextInput placeholder='Drop Your Review Here' style={globalStyles.homeModalTextInput} multiline={true} placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                                        />
                                                    </View>
                                                    <AirbnbRating showRating={false} size={Height(28)} starContainerStyle={globalStyles.homeModalRateing} />

                                                    <TouchableOpacity style={globalStyles.homeModalBtn} onPress={() => setModalVisible(!modalVisible)}>
                                                        <Text style={globalStyles.homeModalBtnText}>Submit Review</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </Modal>

                                    </View>
                                </View>
                            </GestureHandlerRootView>
                            :
                            <View style={styles.page}>
                                <View style={StyleSheet.absoluteFillObject}>
                                    <MapboxGL.MapView style={styles.map}>
                                        <MapboxGL.UserLocation
                                            onUpdate={({ coords: { latitude, longitude
                                            } }) => {
                                                setLocation([longitude, latitude])
                                            }}
                                            minDisplacement={100}
                                            requestsAlwaysUse={true}
                                        />
                                        {<MapboxGL.Camera zoomLevel={10} centerCoordinate={location} />}
                                    </MapboxGL.MapView>
                                </View>
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

                                <Ionicons name='arrow-back' size={Height(30)} style={globalStyles.backIcon} color='black' onPress={() => setSelected('')} />

                                <TouchableOpacity style={[globalStyles.locationIcon, { marginTop: Height(250), }]}>
                                    <MaterialIcons name='my-location' size={Height(24)} color='white' />
                                </TouchableOpacity>

                                <View style={globalStyles.mainHomeView}>
                                    <ScrollView contentContainerStyle={globalStyles.homeScrollView} showsVerticalScrollIndicator={false}>


                                        <View style={globalStyles.homeSubView}>
                                            <View style={globalStyles.gpsView}>
                                                <GPSComponent size={Height(28)} />
                                                <View>
                                                    <Entypo name='dot-single' size={Height(15)} color='#D9D9D9' />
                                                    <Entypo name='dot-single' size={Height(15)} color='#D9D9D9' />
                                                    <Entypo name='dot-single' size={Height(15)} color='#D9D9D9' />
                                                </View>
                                                <MaterialIcons name='location-on' size={Height(28)} color='#DC0000' />
                                            </View>
                                            <View style={globalStyles.destinationView}>
                                                <View style={globalStyles.destinationSubView}>
                                                    <Text style={globalStyles.destinationText}>Mota Varachha</Text>
                                                </View>
                                                <View style={[globalStyles.destinationSubView, { marginTop: Height(15) }]}>
                                                    <Text style={globalStyles.destinationText}>Electric Vehicle Charging Station</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={globalStyles.lineView} />
                                        <Text style={globalStyles.timeText}>15 min<Text style={{ color: '#808080' }}> (4.1 km)</Text></Text>
                                        <Text style={globalStyles.addressText}>
                                            5RMP+M4M, Millennium Market, Aanjada Nagar, New Textile Market, Surat, Gujarat 395008
                                        </Text>
                                        <View style={globalStyles.bookSlotView}>
                                            <TouchableOpacity style={globalStyles.bookSlotBtn} onPress={() => setSelected('BookSlotOne')}>
                                                <Text style={globalStyles.bookSlotText}>Book Slot</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={globalStyles.startBtn} onPress={() => setSelected('Start')}>
                                                <StartComponent size={Height(15)} />
                                                <Text style={[globalStyles.bookSlotText, { marginLeft: Width(8) }]}>Start</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={globalStyles.lineView} />
                                        <View style={globalStyles.electricMainView}>
                                            <DropShadow
                                                style={globalStyles.shadowView}
                                            >
                                                <View style={globalStyles.electricBtn}>
                                                    <FlashComponent width={Width(11)} height={Height(14)} />
                                                    <Text style={globalStyles.electricText}>₹9 / Unit</Text>
                                                </View>
                                            </DropShadow>
                                            <DropShadow
                                                style={globalStyles.shadowView}
                                            >
                                                <View style={globalStyles.electricBtn}>
                                                    <PetrolComponent width={Width(11)} height={Height(14)} />
                                                    <Text style={globalStyles.electricText}>₹96.51 / L</Text>
                                                </View>
                                            </DropShadow>
                                            <DropShadow
                                                style={globalStyles.shadowView}
                                            >
                                                <View style={globalStyles.electricBtn}>
                                                    <DieselComponent width={Width(11)} height={Height(14)} />
                                                    <Text style={globalStyles.electricText}>₹92.04 / L</Text>
                                                </View>
                                            </DropShadow>
                                        </View>
                                        <View style={globalStyles.lineView} />
                                        <View style={globalStyles.imageView}>
                                            <Image source={require('../assets/images/first.png')} style={globalStyles.firstImage} />
                                            <View>
                                                <View style={globalStyles.subImageView}>
                                                    <Image source={require('../assets/images/second.png')} style={globalStyles.subImage} />
                                                    <Image source={require('../assets/images/third.png')} style={globalStyles.subImage} />
                                                </View>
                                                <Image source={require('../assets/images/four.png')} style={globalStyles.lastImage} />
                                            </View>
                                        </View>
                                        <View style={globalStyles.lineView} />
                                        <Text style={globalStyles.reviewText}>Reviews:</Text>
                                        {
                                            review.map((item, i) => {
                                                return (
                                                    <View style={globalStyles.reviewMainView} key={i}>
                                                        <View style={globalStyles.reviewUserView}>
                                                            <RuserComponent width={Width(42)} height={Height(51)} />
                                                        </View>
                                                        <View style={globalStyles.reviewSubView}>
                                                            <View style={globalStyles.rowView}>
                                                                <Text style={globalStyles.reviewSubText}>{item.name}</Text>
                                                                <AirbnbRating showRating={false} size={Height(10)} />
                                                            </View>
                                                            <Text style={globalStyles.reviewLastText}>{item.review}</Text>
                                                        </View>
                                                    </View>
                                                )
                                            })
                                        }
                                        <TouchableOpacity style={globalStyles.dropReviewView} onPress={() => setModalVisible(!modalVisible)}>
                                            <Image source={require('../assets/images/user.png')} style={globalStyles.reviewUser} />
                                            <Text style={globalStyles.dropText}>Drop Your Review Here</Text>
                                        </TouchableOpacity>
                                        <Text style={globalStyles.nearByText}>Nearby Stations</Text>
                                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                                            {
                                                data.map((item, i) => {
                                                    return (
                                                        <View key={i}>
                                                            <View style={globalStyles.mainView}>
                                                                <Image source={item.image} style={globalStyles.evImage} />
                                                                <View style={globalStyles.evSubView}>
                                                                    <Text style={globalStyles.evMainText}>{item.name}</Text>
                                                                    <View style={globalStyles.rowView}>
                                                                        {item.slotImg}
                                                                        <Text style={globalStyles.slotText}>{item.slot}</Text>
                                                                    </View>
                                                                </View>
                                                                <Text style={globalStyles.evAddressText}>{item.address}</Text>
                                                                <View style={globalStyles.evStarView}>
                                                                    <StarComponent size={Height(10)} />
                                                                    <Text style={globalStyles.evStarText}>{item.rate}</Text>
                                                                </View>
                                                                <View style={globalStyles.portView}>
                                                                    <View style={globalStyles.rowView}>
                                                                        {item.portOne}
                                                                        {item.portTwo}
                                                                        {item.portThree}
                                                                        {item.portFour}
                                                                    </View>
                                                                    <TouchableOpacity style={globalStyles.distanceView}>
                                                                        <Text style={globalStyles.distanceText}>
                                                                            {item.km}
                                                                        </Text>
                                                                        <MaterialCommunityIcons name={item.kmIcon} color='white' />
                                                                    </TouchableOpacity>
                                                                </View>
                                                                <TouchableOpacity style={globalStyles.evBookSlotBtn} onPress={() => setSelected('BookSolt')}>
                                                                    <Text style={globalStyles.evBookSlotText}>{item.bookSlot}</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    )
                                                })
                                            }
                                        </ScrollView>
                                    </ScrollView>




                                    <View style={styles.centeredView}>
                                        <Modal
                                            animationType="slide"
                                            transparent={true}
                                            visible={modalVisible}
                                            onRequestClose={() => {
                                                Alert.alert('Modal has been closed.');
                                                setModalVisible(!modalVisible);
                                            }}

                                        >
                                            <View style={styles.centeredView}>
                                                <View style={styles.modalView}>
                                                    <View style={globalStyles.homeModalSubView}>
                                                        <Image source={require('../assets/images/user.png')} style={globalStyles.homeModalUserImage} />
                                                        <TextInput placeholder='Drop Your Review Here' style={globalStyles.homeModalTextInput} multiline={true} placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                                        />
                                                    </View>
                                                    <AirbnbRating showRating={false} size={Height(28)} starContainerStyle={globalStyles.homeModalRateing} />

                                                    <TouchableOpacity style={globalStyles.homeModalBtn} onPress={() => setModalVisible(!modalVisible)}>
                                                        <Text style={globalStyles.homeModalBtnText}>Submit Review</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </Modal>

                                    </View>
                                </View>
                            </View>
                    }
                </>
            )
        case 'BookSlotOne':
            return (
                <View style={styles.page}>
                    <View style={StyleSheet.absoluteFillObject}>
                        <MapboxGL.MapView style={styles.map}>
                            <MapboxGL.UserLocation
                                onUpdate={({ coords: { latitude, longitude
                                } }) => {
                                    setLocation([longitude, latitude])
                                }}
                                minDisplacement={100}
                                requestsAlwaysUse={true}
                            />
                            {<MapboxGL.Camera zoomLevel={10} centerCoordinate={location} />}
                        </MapboxGL.MapView>
                    </View>
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

                    <Ionicons name='arrow-back' size={Height(30)} style={globalStyles.backIcon} color='black' onPress={() => setSelected('')} />

                    <View style={globalStyles.bookSlotMainView}>
                        <View>
                            <Image source={require('../assets/images/Station.png')} style={globalStyles.bookSlotStationImage} />
                            <View style={globalStyles.bookSlotSubView}>
                                <View style={globalStyles.rowView}>
                                    <View>
                                        <Text style={globalStyles.bookSlotStationText}>Electric Vehicle Charging Station</Text>
                                        <Text style={globalStyles.bookSlotAddressText}>5RMP+M4M, Millennium Market, Aanjada Nagar, New Textile Market, Surat, Gujarat 395008</Text>
                                    </View>
                                    <Ionicons name='bookmark' size={Height(25)} color='white' style={{ marginLeft: Width(60) }} />
                                </View>
                                <View style={globalStyles.bookSlotslotView}>
                                    <View style={globalStyles.rowView}>
                                        <SlotComponent size={Height(8)} />
                                        <Text style={globalStyles.slotAvilableText}>Slot Available</Text>
                                    </View>
                                    <View style={globalStyles.verticalLine}></View>
                                    <View>
                                        <View style={globalStyles.bookSlotStarView}>
                                            <StarComponent size={Height(10)} />
                                            <Text style={globalStyles.bookStarText}>4.5(250)</Text>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </View>
                        <SelectDropdown
                            data={selectVehicle}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            defaultButtonText='Select Vehicle'
                            buttonStyle={{
                                backgroundColor: 'white',
                                height: Height(36),
                                width: Width(330),
                                alignSelf: 'center',
                                marginTop: Height(10),
                                borderWidth: Height(1),
                                borderRadius: Width(20),
                                borderColor: '#888888'
                            }}
                            buttonTextStyle={{
                                fontSize: Height(10),
                                fontFamily: 'Poppins-Regular',
                                color: 'black',
                                textAlign: 'left'
                            }}
                            dropdownStyle={{
                                backgroundColor: 'white',
                                width: Width(292),
                                marginLeft: Width(20)
                            }}
                            rowStyle={{
                                height: Height(36)
                            }}
                            rowTextStyle={{
                                fontSize: Height(13),
                                fontFamily: 'Poppins-Regular',
                                color: 'black'
                            }}
                            renderDropdownIcon={() => { return (<MaterialCommunityIcons name='menu-down' size={20} />) }}
                            dropdownIconPosition='right'
                        />
                        <TextInput
                            placeholder='Vehicle Number'
                            style={globalStyles.bookSlotTextInput}
                            placeholderTextColor='black'
                        />

                        <TouchableOpacity style={globalStyles.selectTimeFrameBtn} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={globalStyles.selectTimeFrameText}>Select Time Frame</Text>
                            <MaterialCommunityIcons name='menu-down' size={20} />
                        </TouchableOpacity>




                    </View >
                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={[styles.modalView, { height: Height(350) }]}>
                                    <View style={globalStyles.bookSlotModalFirstView}>
                                        <MaterialCommunityIcons name='close' size={Height(20)} color='transparent' />
                                        <Text style={globalStyles.modalSelectText}>Select Time Frame</Text>
                                        <MaterialCommunityIcons name='close' size={Height(20)} color='black' onPress={() => setModalVisible(!modalVisible)} />
                                    </View>
                                    <View style={globalStyles.modalSelectTimeView}>
                                        <TouchableOpacity style={globalStyles.modalSelectTimeBtn}>
                                            <Text style={globalStyles.modalSelectTimeText}>15  MIN</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={globalStyles.modalSelectTimeBtn}>
                                            <Text style={globalStyles.modalSelectTimeText}>45  MIN</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={globalStyles.modalSelectTimeView}>
                                        <TouchableOpacity style={globalStyles.modalSelectTimeBtn}>
                                            <Text style={globalStyles.modalSelectTimeText}>30  MIN</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={globalStyles.modalSelectTimeBtn}>
                                            <Text style={globalStyles.modalSelectTimeText}>60  MIN</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={globalStyles.modalLine} />

                                    <Text style={globalStyles.setArrivalTimeText}>Set Arrival Time</Text>
                                    {!isPickerShow && (
                                        <TouchableOpacity onPress={showPicker} style={globalStyles.setArrivalTimeBtn}>
                                            <Text style={globalStyles.arrivalTimeText}>Click Here Set Arrival Time</Text>
                                        </TouchableOpacity>

                                    )}
                                    <Text style={globalStyles.timeText}>{time.toLocaleTimeString('en-US')}</Text>
                                    {isPickerShow && (
                                        <DateTimePicker
                                            value={time}
                                            mode={'time'}
                                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                            is24Hour={true}
                                            onChange={onChange}
                                            style={styles.datePicker}
                                        />
                                    )}

                                    <View style={globalStyles.modalLine} />

                                    <Text style={globalStyles.setArrivalTimeText}>Plugout Time </Text>

                                    <Text style={globalStyles.timeText}>{(time).toLocaleTimeString('en-US')}</Text>

                                </View>
                            </View>
                        </Modal>

                    </View>

                </View >
            )
        case 'Start':
            return (

                <View style={styles.page}>
                    <View style={StyleSheet.absoluteFillObject}>
                        <MapboxGL.MapView style={styles.map}>
                            <MapboxGL.UserLocation
                                onUpdate={({ coords: { latitude, longitude
                                } }) => {
                                    setLocation([longitude, latitude])
                                }}
                                minDisplacement={100}
                                requestsAlwaysUse={true}
                            />
                            {<MapboxGL.Camera zoomLevel={10} centerCoordinate={location} />}
                        </MapboxGL.MapView>
                    </View>
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

                    <Ionicons name='arrow-back' size={Height(30)} style={globalStyles.backIcon} color='black' onPress={() => setSelected('')} />
                    <TouchableOpacity style={[globalStyles.locationIcon, { marginTop: Height(250) }]}>
                        <StartComponent size={Height(20)} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[globalStyles.locationIcon, { marginTop: Height(10) }]}>
                        <MaterialIcons name='my-location' size={Height(24)} color='white' />
                    </TouchableOpacity>

                    <View style={globalStyles.mainHomeView}>
                        <View style={[globalStyles.homeSubView, { marginTop: Height(10) }]}>
                            <View style={globalStyles.gpsView}>
                                <GPSComponent size={Height(28)} />
                                <View>
                                    <Entypo name='dot-single' size={Height(15)} color='#D9D9D9' />
                                    <Entypo name='dot-single' size={Height(15)} color='#D9D9D9' />
                                    <Entypo name='dot-single' size={Height(15)} color='#D9D9D9' />
                                </View>
                                <MaterialIcons name='location-on' size={Height(28)} color='#DC0000' />
                            </View>
                            <View style={globalStyles.destinationView}>
                                <View style={globalStyles.destinationSubView}>
                                    <Text style={globalStyles.destinationText}>Mota Varachha</Text>
                                </View>
                                <View style={[globalStyles.destinationSubView, { marginTop: Height(15) }]}>
                                    <Text style={globalStyles.destinationText}>Electric Vehicle Charging Station</Text>
                                </View>
                            </View>
                        </View>
                        <View style={globalStyles.lineView} />
                        <Text style={globalStyles.timeText}>15 min<Text style={{ color: '#808080' }}> (4.1 km)</Text></Text>
                        <Text style={globalStyles.addressText}>
                            5RMP+M4M, Millennium Market, Aanjada Nagar, New Textile Market, Surat, Gujarat 395008
                        </Text>
                    </View>
                </View>

            )
        default: {
            return (
                <View style={styles.page}>
                    <View style={StyleSheet.absoluteFillObject}>
                        <MapboxGL.MapView style={styles.map}>
                            <MapboxGL.UserLocation
                                onUpdate={({ coords: { latitude, longitude
                                } }) => {
                                    setLocation([longitude, latitude])
                                }}
                                minDisplacement={100}
                                requestsAlwaysUse={true}
                            />
                            {<MapboxGL.Camera zoomLevel={10} centerCoordinate={location} />}
                        </MapboxGL.MapView>
                    </View>
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


                    <View style={styles.searchView}>
                        <Feather name='search' size={Height(20)} />
                        <TextInput placeholder='Search' style={styles.searchTextInput} placeholderTextColor='#808080' />
                        <Ionicons name='mic-outline' size={Height(20)} />
                    </View>

                    <View style={styles.scrollView}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            {
                                search.map((item, i) => {
                                    return (
                                        <TouchableOpacity style={styles.searchBtn} key={i}>
                                            <Text style={styles.searchText}>{item.name}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>



                    <TouchableOpacity style={[globalStyles.locationIcon, { marginTop: Height(150) }]}>
                        <MaterialIcons name='my-location' size={Height(24)} color='white' />
                    </TouchableOpacity>
                    <View style={globalStyles.mainHomeView}>
                        <Text style={globalStyles.nearByText}>Nearby Stations</Text>
                        <FlatList
                            data={data}
                            horizontal
                            renderItem={({ item }) => {
                                return (
                                    <View>
                                        <View style={globalStyles.mainView}>
                                            <Image source={item.image} style={globalStyles.evImage} />
                                            <View style={globalStyles.evSubView}>
                                                <Text style={globalStyles.evMainText}>{item.name}</Text>
                                                <View style={globalStyles.rowView}>
                                                    {item.slotImg}
                                                    <Text style={globalStyles.slotText}>{item.slot}</Text>
                                                </View>
                                            </View>
                                            <Text style={globalStyles.evAddressText}>{item.address}</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: Width(20), marginTop: Height(8) }}>
                                                <StarComponent size={Height(10)} />
                                                <Text style={globalStyles.evStarText}>{item.rate}</Text>
                                            </View>
                                            <View style={globalStyles.portView}>
                                                <View style={globalStyles.rowView}>
                                                    {item.portOne}
                                                    {item.portTwo}
                                                    {item.portThree}
                                                    {item.portFour}
                                                </View>
                                                <TouchableOpacity style={globalStyles.distanceView}>
                                                    <Text style={globalStyles.distanceText}>
                                                        {item.km}
                                                    </Text>
                                                    <MaterialCommunityIcons name={item.kmIcon} color='white' />
                                                </TouchableOpacity>
                                            </View>
                                            <TouchableOpacity style={globalStyles.evBookSlotBtn} onPress={() => setSelected('BookSolt')}>
                                                <Text style={globalStyles.evBookSlotText}>{item.bookSlot}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View >
            );
        }
    }



}

export default HomeScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center'
    },
    map: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey'
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center'
    },
    contentContainer1: {
        backgroundColor: "#f2f2f2",
        height: Height(1389)
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    modalView: {

        backgroundColor: 'white',
        borderRadius: 20,

        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: Width(390),
        height: Height(290)
    },
    datePicker: {
        width: 320,
        height: Height(100),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
    },
    searchView: {
        width: Width(330),
        height: Height(50),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: Width(20),
        marginTop: Height(10),
        paddingLeft: Width(24)
    },
    searchTextInput: {
        fontSize: Height(14),
        fontFamily: 'Poppins-Regular',
        marginLeft: Width(24),
        width: Width(200),
        marginRight: Width(20)
    },
    scrollView: {
        height: Height(50),
        marginTop: Height(8)
    },
    searchBtn: {
        marginLeft: Width(30)
    },
    searchText: {
        paddingHorizontal: Width(20),
        paddingVertical: Width(10),
        borderWidth: Height(1),
        fontSize: Height(10),
        fontFamily: 'Poppins-Light',
        borderRadius: Width(10),
        color: 'black'
    }

});

