import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import EcoVisionComponent from '../assets/images/EcoVision'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import SavedComponent from '../assets/images/Saved'
import { globalStyles } from '../utils/globalStyles'

const data = [
    {
        id: 1,
        image: require('../assets/images/1.png'),
        name: 'Electric Vehicle Charging Station',
        address: '6VJX+294, Zoo Rd, Sarthana Jakat Naka, Nature Park and Zoo, Nana Varachha, Surat, Gujarat 395006',
    }, {
        id: 2,
        image: require('../assets/images/2.png'),
        name: 'Electric Vehicle Charging Station',
        address: '6VJX+294, Zoo Rd, Sarthana Jakat Naka, Nature Park and Zoo, Nana Varachha, Surat, Gujarat 395006',
    }, {
        id: 3,
        image: require('../assets/images/3.png'),
        name: 'Electric Vehicle Charging Station',
        address: '6VJX+294, Zoo Rd, Sarthana Jakat Naka, Nature Park and Zoo, Nana Varachha, Surat, Gujarat 395006',
    }, {
        id: 4,
        image: require('../assets/images/4.png'),
        name: 'Electric Vehicle Charging Station',
        address: '6VJX+294, Zoo Rd, Sarthana Jakat Naka, Nature Park and Zoo, Nana Varachha, Surat, Gujarat 395006',
    }
]

const BookMarkScreen = () => {
    const navigation = useNavigation()
    return (
        <>
            <SafeAreaView
                edges={["top"]}
                style={globalStyles.safeView}
            />
            <View style={globalStyles.mainHeader}>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/images/user.png')}
                        style={globalStyles.headerImage}
                    />
                </TouchableOpacity>
                <EcoVisionComponent width={Width(167)} height={Height(16)} />
                <TouchableOpacity>
                    <SavedComponent size={Height(30)} />
                </TouchableOpacity>
            </View>
            <Text style={styles.saveStationsText}>Save Stations</Text>
            <View style={styles.liveView} />
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <View style={styles.mainView}>
                                <Image source={item.image} style={{ height: Height(70), width: Width(70) }} />
                                <View>
                                    <Text style={styles.nameText}>{item.name}</Text>
                                    <Text style={styles.addressText}>{item.address}</Text>
                                </View>
                                <Ionicons name='bookmark' size={Height(30)} color='#0C9348' />
                            </View>
                            <View style={styles.subLine} />
                        </View>
                    )
                }}
            />
        </>
    )
}

export default BookMarkScreen

const styles = StyleSheet.create({
    saveStationsText: {
        fontSize: Height(16),
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
        textAlign: 'center',
        marginTop: Height(10)
    },
    liveView: {
        width: '100%',
        height: Height(1),
        backgroundColor: '#B3B3B3',
        marginTop: Height(10)
    },
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: Width(30),
        alignItems: 'center',
        marginVertical: Height(10)
    },
    nameText: {
        fontSize: Height(12),
        color: 'black',
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
    },
    addressText: {
        width: Width(180),
        fontSize: Height(10),
        color: 'rgba(0, 0, 0, 0.8)',
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
        lineHeight: Height(12),
        marginTop: Height(5)
    },
    subLine: {
        width: '100%',
        height: Height(1),
        backgroundColor: '#B3B3B3',
    }
})