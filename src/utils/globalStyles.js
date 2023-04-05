import { Platform, StyleSheet } from "react-native";
import { Height, Width } from "./responsive";

export const globalStyles = StyleSheet.create({
    safeView: {
        flex: 0,
        backgroundColor: "#0C9348"
    },
    mainHeader: {
        height: Height(60),
        backgroundColor: '#0C9348',
        borderBottomLeftRadius: Width(20),
        borderBottomRightRadius: Width(20),
        width: '100%',
        paddingHorizontal: Width(30),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerImage: {
        height: Height(50),
        width: Height(50)
    },
    subHeaderView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Height(20)
    },
    subHeaderViewText: {
        fontSize: Height(16),
        fontFamily: 'Poppins-Medium',
        color: 'black',
        marginLeft: Width(30)
    },
    authenticateSafeView: {
        flex: 1
    },
    backIcon: {
        alignSelf: 'flex-start',
        marginLeft: Width(30),
        marginTop: Height(5)
    },
    locationIcon: {
        height: Height(40),
        width: Height(40),
        backgroundColor: '#0C9348',
        borderRadius: Height(40) / 2,
        justifyContent: 'center',

        alignSelf: 'flex-end',
        marginRight: Width(30),
        alignItems: 'center'
    },
    mainHomeView: {
        height: Height(430),
        width: Width(390),
        backgroundColor: '#f2f2f2',
        marginTop: Height(10),
        borderTopRightRadius: Width(30),
        borderTopLeftRadius: Width(30)
    },
    homeScrollView: {
        paddingBottom: Platform.OS === 'android' ? Height(150) : Height(170),
        paddingTop: Height(30)
    },
    homeSubView: {
        flexDirection: 'row',
        paddingLeft: Width(35),
        alignItems: 'center'
    },
    gpsView: {
        alignItems: 'center',
        height: Height(100),
        width: Width(28),
    },
    destinationView: {
        marginLeft: Width(20)
    },
    destinationSubView: {
        width: Width(265),
        height: Height(50),
        justifyContent: 'center',
        borderWidth: Width(2),
        borderRadius: Width(20),
        borderColor: '#CCCCCC'
    },
    destinationText: {
        fontSize: Height(14),
        fontFamily: 'Poppins-Regular',
        color: 'black',
        marginLeft: Width(20)
    },
    lineView: {
        height: Height(1),
        backgroundColor: '#CCCCCC',
        marginTop: Height(10)
    },
    timeText: {
        fontSize: Height(20),
        fontFamily: 'Poppins-Medium',
        color: '#0C9348',
        marginLeft: Width(30),
        marginTop: Height(5)
    },
    addressText: {
        fontSize: Height(10),
        fontFamily: 'Poppins-Light',
        width: Width(245),
        marginLeft: Width(30),
        marginTop: Height(5)
    },
    bookSlotView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Width(30),
        marginTop: Height(15)
    },
    bookSlotBtn: {
        height: Height(40),
        width: Width(178),
        justifyContent: 'center',
        backgroundColor: '#0C9348',
        borderRadius: Width(10)
    },
    bookSlotText: {
        fontSize: Height(16),
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        color: 'white'
    },
    electricMainView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: Height(10),
        marginHorizontal: Width(30)
    },
    shadowView: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    electricBtn: {
        flexDirection: 'row',
        width: Width(82),
        height: Height(30),
        backgroundColor: 'white',
        borderRadius: Width(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    electricText: {
        fontSize: Height(10),
        fontFamily: 'Poppins-Light',
        color: 'black'
    },
    imageView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: Width(30),
        marginTop: Height(15)
    },
    firstImage: {
        width: Width(137),
        height: Height(198),
        borderRadius: Width(10)
    },
    subImageView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subImage: {
        height: Height(94),
        width: Width(90),
        borderRadius: Width(10)
    },
    lastImage: {
        height: Height(92),
        width: Width(184),
        borderRadius: Width(10),
        marginTop: Height(10)
    },
    reviewText: {
        fontSize: Height(16),
        fontFamily: 'Poppins-Regular',
        marginLeft: Width(30),
        marginTop: Height(10)
    },
    reviewMainView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Width(30),
        marginTop: Height(15)
    },
    reviewUserView: {
        height: Height(70),
        width: Height(70),
        borderRadius: Height(70) / 2,
        backgroundColor: '#474747',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    reviewSubView: {
        marginLeft: Width(15)
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    reviewSubText: {
        fontSize: Height(12),
        fontFamily: 'Poppins-Regular',
        marginRight: Width(55)
    },
    reviewLastText: {
        width: Width(240),
        fontSize: Height(10),
        fontFamily: 'Poppins-Light',
        color: 'rgba(0, 0, 0, 0.5)'
    },
    dropReviewView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: Height(50),
        width: Width(330),
        borderWidth: Height(1),
        borderRadius: Width(20),
        alignSelf: 'center',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: Height(20)
    },
    reviewUser: {
        height: Height(36),
        width: Height(36),
        marginLeft: Width(16)
    },
    dropText: {
        fontSize: Height(14),
        fontFamily: 'Poppins-Regular',
        color: 'rgba(0, 0, 0, 0.5)',
        marginLeft: Width(38)
    },
    nearByText: {
        fontFamily: 'Poppins-Medium',
        fontSize: Height(16),
        color: 'black',
        marginTop: Height(16),
        marginLeft: Width(30)
    },
    mainView: {
        width: Width(330),
        height: Height(230),
        backgroundColor: 'white',
        marginLeft: Width(30),
        marginTop: Height(15),
        borderRadius: Width(20)
    },
    evImage: {
        height: Height(74),
        width: Width(330),
        borderTopLeftRadius: Width(20),
        borderTopRightRadius: Width(20)
    },
    evSubView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Width(20),
        marginTop: Height(5)
    },
    evMainText: {
        fontSize: Height(10),
        color: 'black',
        fontFamily: 'Poppins-Medium',
        lineHeight: Height(15)
    },
    slotText: {
        fontSize: Height(8),
        color: 'black',
        fontFamily: 'Poppins-Medium',
        lineHeight: Height(15),
        marginLeft: Width(5)
    },
    evAddressText: {
        fontSize: Height(8),
        color: 'rgba(0, 0, 0, 0.5)',
        fontFamily: 'Poppins-Medium',
        lineHeight: Height(12),
        marginHorizontal: Width(20),
        fontWeight: '300',
        marginTop: Height(5)
    },
    evStarView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Width(20),
        marginTop: Height(8)
    },
    evStarText: {
        fontSize: Height(8),
        color: 'black',
        fontFamily: 'Poppins-Medium',
        lineHeight: Height(12),
        fontWeight: '300',
        marginLeft: Width(5)
    },
    portView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Width(20)
    },
    distanceView: {
        height: Height(40),
        width: Width(70),
        borderRadius: Width(10),
        backgroundColor: '#0C9348',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Width(8)
    },
    distanceText: {
        fontSize: Height(10),
        color: 'white',
        fontFamily: 'Poppins-Medium',
        fontWeight: "400",
        lineHeight: Height(15)
    },
    evBookSlotBtn: {
        height: Height(36),
        width: Width(330),
        backgroundColor: '#0C9348',
        borderBottomRightRadius: Width(20),
        borderBottomLeftRadius: Width(20),
        marginTop: Height(10),
        justifyContent: 'center'
    },
    evBookSlotText: {
        color: 'white',
        fontFamily: 'Poppins-Medium',
        fontWeight: "500",
        fontSize: Height(14),
        textAlign: 'center'
    },
    startBtn: {
        height: Height(40),
        width: Width(120),
        justifyContent: 'center',
        backgroundColor: '#0C9348',
        borderRadius: Width(10),
        flexDirection: 'row',
        alignItems: 'center'
    },
    homeModalSubView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: Height(50),
        width: Width(330),
        borderWidth: Height(1),
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: Width(20),
        alignSelf: 'center',
        marginTop: Height(60)
    },
    homeModalUserImage: {
        height: Height(36),
        width: Height(36),
        marginLeft: Width(15)
    },
    homeModalTextInput: {
        marginLeft: Width(25),
        width: Width(210)
    },
    homeModalRateing: {
        paddingHorizontal: Width(10),
        marginTop: Height(35)
    },
    homeModalBtn: {
        height: Height(50),
        width: Width(290),
        backgroundColor: '#0C9348',
        alignSelf: 'center',
        borderRadius: Width(20),
        justifyContent: 'center',
        marginTop: Height(20)
    },
    homeModalBtnText: {
        fontSize: Height(14),
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        textAlign: 'center'
    },
    bookSlotMainView: {
        height: Height(500),
        width: Width(390),
        backgroundColor: '#f2f2f2',
        marginTop: Height(120),
        borderTopRightRadius: Width(30),
        borderTopLeftRadius: Width(30),
    },
    bookSlotStationImage: {
        height: Height(200),
        width: '100%',
        borderTopLeftRadius: Width(20),
        borderTopRightRadius: Width(20)
    },
    bookSlotSubView: {
        position: 'absolute',
        paddingTop: Height(120),
        paddingHorizontal: Width(30),
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: Height(200),
        width: '100%',
        borderTopLeftRadius: Width(20),
        borderTopRightRadius: Width(20)
    },
    bookSlotStationText: {
        fontSize: Height(14),
        fontFamily: 'Poppins-Medium',
        color: 'white'

    },
    bookSlotAddressText: {
        fontSize: Height(8),
        fontFamily: 'Poppins-Regular',
        color: 'white',
        width: Width(245),
        marginTop: Height(5)
    },
    bookSlotslotView: {
        flexDirection: 'row',
        marginTop: Height(5)
    },
    slotAvilableText: {
        fontSize: Height(8),
        fontFamily: 'Poppins-Medium',
        color: 'white',
        marginLeft: Width(3)
    },
    verticalLine: {
        height: '100%',
        width: 1,
        backgroundColor: 'white',
        marginLeft: Width(40)
    },
    bookSlotStarView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: Width(40)
    },
    bookStarText: {
        fontSize: Height(8),
        color: 'white',
        fontFamily: 'Poppins-Medium',
        marginLeft: Width(3)
    },
    bookSlotTextInput: {
        height: Height(36),
        width: Width(330),
        alignSelf: 'center',
        marginTop: Height(10),
        borderWidth: Height(1),
        borderRadius: Width(20),
        borderColor: '#888888',
        backgroundColor: 'white',
        fontSize: Height(10),
        fontFamily: 'Poppins-Regular',
        color: 'black',
        paddingLeft: Width(18)
    },
    selectTimeFrameBtn: {
        height: Height(36),
        width: Width(330),
        alignSelf: 'center',
        marginTop: Height(10),
        borderWidth: Height(1),
        borderRadius: Width(20),
        borderColor: '#888888',
        backgroundColor: 'white',
        flexDirection: 'row', alignItems: 'center',
        paddingHorizontal: Width(18),
        justifyContent: 'space-between'
    },
    selectTimeFrameText: {
        fontSize: Height(10),
        fontFamily: 'Poppins-Regular',
        color: 'black',
    },
    bookSlotModalFirstView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Width(30),
        marginTop: Height(10)
    },
    modalSelectText: {
        fontSize: Height(14),
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        color: 'black'
    },
    modalSelectTimeView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Width(80),
        marginTop: Height(10)
    },
    modalSelectTimeBtn: {
        height: Height(30),
        width: Width(85),
        backgroundColor: 'white',
        borderWidth: Height(1),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Width(10),
        borderColor: '#808080'
    },
    modalSelectTimeText: {
        fontSize: Height(12),
        fontFamily: 'Poppins-Regular',
        color: '#808080'
    },
    setArrivalTimeText: {
        fontSize: Height(14),
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        marginTop: Height(10),
        color: 'black',
    },
    modalLine: {
        height: Height(1),
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        marginTop: Height(10)
    },
    setArrivalTimeBtn: {
        height: Height(40),
        width: Width(200),
        backgroundColor: '#0C9348',
        justifyContent: 'center',
        borderRadius: Width(10),
        alignSelf: 'center',
        marginTop: Height(10),
    },
    arrivalTimeText: {
        fontSize: Height(12),
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        color: 'white'
    },
    timeText: {
        fontSize: Height(15),
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        marginTop: Height(15),
        color: 'black'
    },
    confirmModalFirstView: {
        flexDirection: 'row',
        marginTop: Height(18),
        justifyContent: 'space-between',
        marginHorizontal: Width(34)
    },
    confirmModalUserImage: {
        height: Height(72),
        width: Width(72)
    },
    confirmModalLine: {
        height: Height(1),
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: Height(16)
    },
    confirmModalSubView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Width(40),
        marginTop: Height(10)
    },
    confirmModalFirstText: {
        fontSize: Height(10),
        fontFamily: 'Poppins-Light',
        color: 'black'
    },
    confirmModalSecondText: {
        fontSize: Height(12),
        fontFamily: 'Poppins-Regular',
        color: 'black'
    },
    confirmMinText: {
        fontSize: Height(12),
        fontFamily: 'Poppins-Regular',
        color: 'rgba(0, 0, 0, 0.5)'
    },
    confirmModalSecondView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Width(40),
        marginTop: Height(8)
    },
    confirmModalStationText: {
        fontSize: Height(12),
        fontFamily: 'Poppins-Medium',
        color: 'black'
    },
    confirmModalAddText: {
        fontSize: Height(8),
        fontFamily: 'Poppins-Light',
        color: 'black',
        width: Width(190),
        marginTop: Height(10)
    },
    confirmModalBookSlotBtn: {
        height: Height(50),
        width: Width(190),
        backgroundColor: '#0C9348',
        justifyContent: "center",
        alignSelf: 'center',
        alignItems: "center",
        marginTop: Height(30),
        borderRadius: Width(20)
    },
    confirmModalBtnText: {
        fontSize: Height(14),
        fontFamily: 'Poppins-Regular',
        color: 'white'
    },
    headingView: {
        flexDirection: 'row', alignItems: 'center', marginTop: Height(20),
    },
    headingText: {
        fontSize: Height(18), fontFamily: 'Poppins-SemiBold', textAlign: 'center', fontWeight: '600', marginLeft: Width(35)
    },
    passTextInputView: {
        height: Height(60), width: Width(330), borderRadius: Width(20), flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: Height(15), borderWidth: Height(1),
    },
    passTextInput: {
        fontSize: Height(16), fontFamily: 'Poppins-Regular', fontWeight: '500', color: 'black', marginHorizontal: Width(15), width: Width(210)
    },
    errorText: {
        color: 'red', marginLeft: Width(40), fontSize: Height(11), fontFamily: 'Poppins-Medium'
    },
    Button: {
        height: Height(60), width: Width(330), alignSelf: 'center', justifyContent: 'center', backgroundColor: '#0C9348', borderRadius: Width(30), marginTop: Height(45)
    },
    ButtonText: {
        textAlign: 'center',
        fontSize: Height(18),
        color: 'white',
        fontFamily: 'Poppins-Medium',
    },
    emailTextInputView: {
        height: Height(60), width: Width(330), borderRadius: Width(20), flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: Height(70), borderWidth: Height(1),
    },
    emailTextInput: {
        fontSize: Height(16), fontFamily: 'Poppins-Regular', fontWeight: '500', color: 'black', marginHorizontal: Width(15), width: Width(250)
    }

})