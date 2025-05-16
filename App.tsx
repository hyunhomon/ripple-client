/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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
import { SafeAreaView } from 'react-native';
import BoxComponent from './src/components/common/BoxComponent';


function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ paddingHorizontal : 20, gap: 10}}>
          <BoxComponent text='asd' textcolor='green'/>
          <BoxComponent text='weda'/>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  box: {
    backgroundColor: 'black',
    padding: 12,
  },
  text : {
    color: 'white',
  }
})


export default App;
