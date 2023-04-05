import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import EcoVisionComponent from '../assets/images/EcoVision'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { globalStyles } from '../utils/globalStyles'

const HelpScreen = () => {
    const navigation = useNavigation()
    const [pressOne, setPressOne] = useState(false)
    const [pressTwo, setPressTwo] = useState(false)
    const [pressThree, setPressThree] = useState(false)
    const [pressFour, setPressFour] = useState(false)
    const [pressFive, setPressFive] = useState(false)
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
                <Text style={styles.headerText}>Help</Text>
                <Ionicons name='arrow-back' size={Height(30)} color='transparent' />
            </View>
            <View style={styles.line} />
            <View style={styles.searchView}>
                <Ionicons name='search-outline' size={Height(22)} style={{ marginLeft: Width(40) }} />
                <TextInput
                    placeholder='Search For Help'
                    style={styles.textInput}
                    placeholderTextColor='#898989'
                />
            </View>

            <View style={[styles.view, { height: !pressOne ? Height(60) : Height(210), }]}>
                <View style={styles.subView}>
                    <Text style={styles.headerText}>Charging Stopped Before Expected Time?</Text>
                    <MaterialIcons name='arrow-drop-down' size={Height(30)} onPress={() => setPressOne(!pressOne)} />
                </View>
                <ScrollView>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur. Placerat lacus quisque faucibus ut egestas ullamcorper a. Arcu habitasse dapibus ultrices consequat tortor ultrices. Habitant cursus pellentesque pellentesque felis. Diam elementum non cras in enim diam id tristique ipsum. Enim ornare vitae non id nunc enim et. Et vel elementum varius nibh morbi nulla quis senectus massa. Semper volutpat ipsum sollicitudin cursus feugiat. Fermentum ornare nunc ut faucibus. Feugiat augue pellentesque ornare mi pulvinar aliquet pulvinar. Cras rutrum sociis rhoncus ac lacinia nunc neque. Purus nisl ac volutpat aliquet est sit vel varius pretium.
                        Lorem ipsum dolor sit amet consectetur. Placerat lacus quisque faucibus ut egestas ullamcorper a. Arcu habitasse dapibus ultrices consequat tortor ultrices. Habitant cursus pellentesque pellentesque felis. Diam elementum non cras in enim diam id tristique ipsum. Enim ornare vitae non id nunc enim et. Et vel elementum varius nibh morbi nulla quis senectus massa. Semper volutpat ipsum sollicitudin cursus feugiat. Fermentum ornare nunc ut faucibus. Feugiat augue pellentesque ornare mi pulvinar aliquet pulvinar. Cras rutrum sociis rhoncus ac lacinia nunc neque. Purus nisl ac volutpat aliquet est sit vel varius pretium.
                    </Text>
                </ScrollView>
            </View>

            <View style={[styles.view, { height: !pressTwo ? Height(60) : Height(210), }]} >
                <View style={styles.subView}>
                    <Text style={styles.headerText}>Unable To End The Charging? </Text>
                    <MaterialIcons name='arrow-drop-down' size={Height(30)} onPress={() => setPressTwo(!pressTwo)} />
                </View>
                <ScrollView>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur. Placerat lacus quisque faucibus ut egestas ullamcorper a. Arcu habitasse dapibus ultrices consequat tortor ultrices. Habitant cursus pellentesque pellentesque felis. Diam elementum non cras in enim diam id tristique ipsum. Enim ornare vitae non id nunc enim et. Et vel elementum varius nibh morbi nulla quis senectus massa. Semper volutpat ipsum sollicitudin cursus feugiat. Fermentum ornare nunc ut faucibus. Feugiat augue pellentesque ornare mi pulvinar aliquet pulvinar. Cras rutrum sociis rhoncus ac lacinia nunc neque. Purus nisl ac volutpat aliquet est sit vel varius pretium.
                        Lorem ipsum dolor sit amet consectetur. Placerat lacus quisque faucibus ut egestas ullamcorper a. Arcu habitasse dapibus ultrices consequat tortor ultrices. Habitant cursus pellentesque pellentesque felis. Diam elementum non cras in enim diam id tristique ipsum. Enim ornare vitae non id nunc enim et. Et vel elementum varius nibh morbi nulla quis senectus massa. Semper volutpat ipsum sollicitudin cursus feugiat. Fermentum ornare nunc ut faucibus. Feugiat augue pellentesque ornare mi pulvinar aliquet pulvinar. Cras rutrum sociis rhoncus ac lacinia nunc neque. Purus nisl ac volutpat aliquet est sit vel varius pretium.
                    </Text>
                </ScrollView>
            </View>
            <View style={[styles.view, { height: !pressThree ? Height(60) : Height(210), }]}>
                <View style={styles.subView}>
                    <Text style={styles.headerText}>Unable To Unplug Your EV? </Text>
                    <MaterialIcons name='arrow-drop-down' size={Height(30)} onPress={() => setPressThree(!pressThree)} />
                </View>
                <ScrollView>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur. Placerat lacus quisque faucibus ut egestas ullamcorper a. Arcu habitasse dapibus ultrices consequat tortor ultrices. Habitant cursus pellentesque pellentesque felis. Diam elementum non cras in enim diam id tristique ipsum. Enim ornare vitae non id nunc enim et. Et vel elementum varius nibh morbi nulla quis senectus massa. Semper volutpat ipsum sollicitudin cursus feugiat. Fermentum ornare nunc ut faucibus. Feugiat augue pellentesque ornare mi pulvinar aliquet pulvinar. Cras rutrum sociis rhoncus ac lacinia nunc neque. Purus nisl ac volutpat aliquet est sit vel varius pretium.
                        Lorem ipsum dolor sit amet consectetur. Placerat lacus quisque faucibus ut egestas ullamcorper a. Arcu habitasse dapibus ultrices consequat tortor ultrices. Habitant cursus pellentesque pellentesque felis. Diam elementum non cras in enim diam id tristique ipsum. Enim ornare vitae non id nunc enim et. Et vel elementum varius nibh morbi nulla quis senectus massa. Semper volutpat ipsum sollicitudin cursus feugiat. Fermentum ornare nunc ut faucibus. Feugiat augue pellentesque ornare mi pulvinar aliquet pulvinar. Cras rutrum sociis rhoncus ac lacinia nunc neque. Purus nisl ac volutpat aliquet est sit vel varius pretium.
                    </Text>
                </ScrollView>
            </View>
            <View style={[styles.view, { height: !pressFour ? Height(60) : Height(210), }]}>
                <View style={styles.subView}>
                    <Text style={styles.headerText}>Received “Time Out ” After Entering OTP ? </Text>
                    <MaterialIcons name='arrow-drop-down' size={Height(30)} onPress={() => setPressFour(!pressFour)} />
                </View>
                <ScrollView>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur. Placerat lacus quisque faucibus ut egestas ullamcorper a. Arcu habitasse dapibus ultrices consequat tortor ultrices. Habitant cursus pellentesque pellentesque felis. Diam elementum non cras in enim diam id tristique ipsum. Enim ornare vitae non id nunc enim et. Et vel elementum varius nibh morbi nulla quis senectus massa. Semper volutpat ipsum sollicitudin cursus feugiat. Fermentum ornare nunc ut faucibus. Feugiat augue pellentesque ornare mi pulvinar aliquet pulvinar. Cras rutrum sociis rhoncus ac lacinia nunc neque. Purus nisl ac volutpat aliquet est sit vel varius pretium.
                        Lorem ipsum dolor sit amet consectetur. Placerat lacus quisque faucibus ut egestas ullamcorper a. Arcu habitasse dapibus ultrices consequat tortor ultrices. Habitant cursus pellentesque pellentesque felis. Diam elementum non cras in enim diam id tristique ipsum. Enim ornare vitae non id nunc enim et. Et vel elementum varius nibh morbi nulla quis senectus massa. Semper volutpat ipsum sollicitudin cursus feugiat. Fermentum ornare nunc ut faucibus. Feugiat augue pellentesque ornare mi pulvinar aliquet pulvinar. Cras rutrum sociis rhoncus ac lacinia nunc neque. Purus nisl ac volutpat aliquet est sit vel varius pretium.
                    </Text>
                </ScrollView>
            </View>
            <View style={[styles.view, { height: !pressFive ? Height(60) : Height(210), }]}>
                <View style={styles.subView}>
                    <Text style={styles.headerText}>OTP is Not Working? </Text>
                    <MaterialIcons name='arrow-drop-down' size={Height(30)} onPress={() => setPressFive(!pressFive)} />
                </View>
                <ScrollView>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur. Placerat lacus quisque faucibus ut egestas ullamcorper a. Arcu habitasse dapibus ultrices consequat tortor ultrices. Habitant cursus pellentesque pellentesque felis. Diam elementum non cras in enim diam id tristique ipsum. Enim ornare vitae non id nunc enim et. Et vel elementum varius nibh morbi nulla quis senectus massa. Semper volutpat ipsum sollicitudin cursus feugiat. Fermentum ornare nunc ut faucibus. Feugiat augue pellentesque ornare mi pulvinar aliquet pulvinar. Cras rutrum sociis rhoncus ac lacinia nunc neque. Purus nisl ac volutpat aliquet est sit vel varius pretium.
                        Lorem ipsum dolor sit amet consectetur. Placerat lacus quisque faucibus ut egestas ullamcorper a. Arcu habitasse dapibus ultrices consequat tortor ultrices. Habitant cursus pellentesque pellentesque felis. Diam elementum non cras in enim diam id tristique ipsum. Enim ornare vitae non id nunc enim et. Et vel elementum varius nibh morbi nulla quis senectus massa. Semper volutpat ipsum sollicitudin cursus feugiat. Fermentum ornare nunc ut faucibus. Feugiat augue pellentesque ornare mi pulvinar aliquet pulvinar. Cras rutrum sociis rhoncus ac lacinia nunc neque. Purus nisl ac volutpat aliquet est sit vel varius pretium.
                    </Text>
                </ScrollView>
            </View>
        </>
    )
}

export default HelpScreen

const styles = StyleSheet.create({
    view: {
        width: Width(330),
        alignSelf: 'center',
        borderWidth: Height(1),
        backgroundColor: '#FAFAFA',
        borderColor: '#D9D9D9',
        borderRadius: Width(10),
        paddingHorizontal: Width(20),
        marginTop: Height(10)
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Width(30),
        marginTop: Height(16)
    },
    headerText: {
        fontSize: Height(12),
        fontFamily: 'Poppins-Medium',
        color: 'black'
    },
    line: {
        height: Height(1),
        backgroundColor: 'rgba(126, 126, 126, 0.3)',
        marginTop: Height(20)
    },
    searchView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Width(330),
        height: Height(60),
        backgroundColor: '#FAFAFA',
        borderWidth: Height(1),
        borderColor: '#D9D9D9',
        borderRadius: Width(10),
        alignSelf: 'center',
        marginTop: Height(15)
    },
    textInput: {
        marginLeft: Width(20),
        fontSize: Height(14),
        fontFamily: 'Poppins-Medium',
        width: Width(220)
    },
    text: {
        width: Width(266),
        fontSize: Height(8),
        marginBottom: Height(50)
    },
    subView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: Height(60),
        justifyContent: 'space-between',
    }

})