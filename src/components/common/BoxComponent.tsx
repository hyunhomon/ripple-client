import { ReactElement } from 'react';
import {View, Text, StyleSheet} from 'react-native'


interface BoxComponentProps {
    text: string;
    textcolor?: string;
}


const BoxComponent = ({text, textcolor = "white"}: BoxComponentProps) => {
    return (
        <View style={styles.box}>
          <Text style={{ color : textcolor}}>{text}</Text>
        </View>
    );
}

export default BoxComponent

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'black',
    padding: 12,
  },
})
