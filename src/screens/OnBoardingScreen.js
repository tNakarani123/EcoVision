import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import OneComponent from '../assets/images/One';
import ThreeComponent from '../assets/images/Three';
import TwoComponent from '../assets/images/Two';
import { Height, Width } from '../utils/responsive';


const { width, height } = Dimensions.get('window');



const slides = [
    {
        id: '1',
        image: <OneComponent width={Width(350)} height={Height(177)} />,
        title: 'Find nearby charge station',
    },
    {
        id: '2',
        image: <TwoComponent width={Width(332)} height={Height(197)} />,
        title: 'Charge & swap batteries at ease',
    },
    {
        id: '3',
        image: <ThreeComponent width={Width(273)} height={Height(230)} />,
        title: 'Charge at affordable price',
    },
];

const Slide = ({ item }) => {
    return (
        <View style={styles.slideView}>
            <View style={{ alignSelf: 'center', height: Height(230), marginTop: Height(150) }}>
                {item.image}
            </View>

            <Text style={styles.title}>{item?.title}</Text>

        </View>
    );
};

const OnBoardingScreen = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef();
    const navigation = useNavigation()
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };



    const Footer = () => {
        return (
            <View
                style={styles.footerView}>
                <View
                    style={styles.footerSubView}>
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: '#0C9348',
                                    width: Width(40),
                                    borderRadius: Width(50)
                                },
                            ]}
                        />
                    ))}
                </View>
                <View style={styles.btnView}>
                    {currentSlideIndex == slides.length - 1 ? (

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('GetStarted')}>
                            <Text style={styles.btnText}>
                                GET STARTED
                            </Text>
                        </TouchableOpacity>

                    ) : (
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={goToNextSlide}>
                            <Text style={styles.btnText}>
                                NEXT
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.safeView}>
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                // contentContainerStyle={{ height: height * 0.75 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={slides}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    subtitle: {

        fontSize: Height(16),
        marginTop: Height(30),
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: Height(24),
        fontFamily: 'Poppins-Medium',
        fontWeight: '400',

    },
    title: {
        color: 'black',
        fontSize: Height(24),
        marginTop: Height(75),
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        fontWeight: '600',
        marginHorizontal: Width(68)
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    indicator: {
        height: Height(10),
        width: Width(10),
        backgroundColor: '#BAD4C6',
        marginHorizontal: 3,
        borderRadius: 1000,
        marginBottom: Height(20)
    },
    btn: {

        height: Height(55),
        borderRadius: Width(50),
        backgroundColor: '#0C9348',
        justifyContent: 'center',
        alignItems: 'center',
        width: Width(330),
        alignSelf: 'center',
        marginBottom: Height(65)
    }, btnView: {
        marginBottom: Height(10)
    }, btnText: {
        fontWeight: 'bold', 
        fontSize: Height(18),
         color: 'white', 
         fontFamily: 'Poppins-Medium',
    }, slideView: {
        alignItems: 'center',
         width: Width(390),
    }, footerView: {
        justifyContent: 'space-between',
        paddingHorizontal: 20,

    }, footerSubView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: Height(20)
    }, safeView: {
        flex: 1, backgroundColor: 'white'
    }
});
export default OnBoardingScreen;