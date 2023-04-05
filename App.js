import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigation from './src/navigation/AppNavigation'
import { LogBox } from 'react-native'


LogBox.ignoreAllLogs()
const App = () => {
  return (
    <AppNavigation />
  )
}

export default App

const styles = StyleSheet.create({})






// import { StatusBar } from 'expo-status-bar';
// import React, { useCallback, useRef } from 'react';
// import { StyleSheet, TouchableOpacity, View } from 'react-native';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import BottomSheet from './src/utils/BottomSheet';

// export default function App() {
//   const ref = useRef(null);
//   console.log("Hello");
//   const onPress = useCallback(() => {
//     const isActive = ref?.current?.isActive();
//     if (isActive) {
//       ref?.current?.scrollTo(0);
//     } else {
//       ref?.current?.scrollTo(-200);
//     }
//   }, []);




//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         {/* <StatusBar style="light" /> */}
//         <TouchableOpacity style={styles.button} onPress={onPress} />
//         <BottomSheet ref={ref}>
//           <View style={{ flex: 1, backgroundColor: 'orange' }} />
//         </BottomSheet>
//       </View>
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#111',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     height: 50,
//     borderRadius: 25,
//     aspectRatio: 1,
//     backgroundColor: 'white',
//     opacity: 0.6,
//   },
// });




// import React, { useState } from "react";

// import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

// import DateTimePicker from '@react-native-community/datetimepicker';

// export default function App() {

//   const [datePicker, setDatePicker] = useState(false);

//   const [date, setDate] = useState(new Date());

//   const [timePicker, setTimePicker] = useState(false);

//   const [time, setTime] = useState(new Date(Date.now()));

//   function showDatePicker() {
//     setDatePicker(true);
//   };

//   function showTimePicker() {
//     setTimePicker(true);
//   };

//   function onDateSelected(event, value) {
//     setDate(value);
//     setDatePicker(false);
//   };

//   function onTimeSelected(event, value) {
//     setTime(value);
//     setTimePicker(false);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styleSheet.MainContainer}>

//         <Text style={styleSheet.text}>Date = {date.toDateString()}</Text>

//         <Text style={styleSheet.text}>Time = {time.toLocaleTimeString('en-US')}</Text>

//         {datePicker && (
//           <DateTimePicker
//             value={date}
//             mode={'date'}
//             display={Platform.OS === 'ios' ? 'spinner' : 'default'}
//             is24Hour={true}
//             onChange={onDateSelected}
//             style={styleSheet.datePicker}
//           />
//         )}

//         {timePicker && (
//           <DateTimePicker
//             value={time}
//             mode={'time'}
//             display={Platform.OS === 'ios' ? 'spinner' : 'default'}
//             is24Hour={false}
//             onChange={onTimeSelected}
//             style={styleSheet.datePicker}
//           />
//         )}

//         {!datePicker && (
//           <View style={{ margin: 10 }}>
//             <Button title="Show Date Picker" color="green" onPress={showDatePicker} />
//           </View>
//         )}

//         {!timePicker && (
//           <View style={{ margin: 10 }}>
//             <Button title="Show Time Picker" color="green" onPress={showTimePicker} />
//           </View>
//         )}

//       </View>
//     </SafeAreaView>
//   );
// }

// const styleSheet = StyleSheet.create({

//   MainContainer: {
//     flex: 1,
//     padding: 6,
//     alignItems: 'center',
//     backgroundColor: 'white'
//   },

//   text: {
//     fontSize: 25,
//     color: 'red',
//     padding: 3,
//     marginBottom: 10,
//     textAlign: 'center'
//   },

//   // Style for iOS ONLY...
//   datePicker: {
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     width: 320,
//     height: 260,
//     display: 'flex',
//   },

// });