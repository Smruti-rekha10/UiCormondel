/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CustomerDetails from './CustomerDetails';
import LocationDetails from './LocationDetails';





function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
       
        {/* <CustomerDetails/> */}
        <LocationDetails/>
        
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: '#fff',
  //   font: 'poppins'
  // },
  // mainHeader: {
  //   color: '#024122',
  //   fontWeight: '600',
  //   fontSize: 17,
  //   lineHeight: 25.5, width: 130
  // },
  // headerContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginVertical: '5%',
  //   marginLeft: '2%',
  //   marginRight: '1%'
  // },
  // bar: {
  //   flex: 1,
  //   height: 3,
  //   backgroundColor: '#b7b7b7'
  // },
  // subHeader: {
  //   color: '#024122',
  //   fontWeight: '600',
  //   fontSize: 15,

  // },
  // inputBoxContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginHorizontal: '2%',
  //   marginVertical: '1%'
  // },

  // star: {
  //   color: '#FF3333',
  //   fontWeight: '600',
  //   fontSize: 15,
  // },
  // input: {
  //   borderBottomWidth: 3,
  //   borderBottomColor: '#ddd',
  //   borderTopWidth: 0,
  //   borderRightWidth: 0,
  //   borderLeftWidth: 0,
  //   marginHorizontal: '2%',
  // }
});

export default App;
