import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Savebutton(props) {
  const {handlePress1} = props;
  return (
    <TouchableOpacity onPress={handlePress1}>
      <View
        style={{
          width: windowWidth * 0.95,
          height: windowHeight * 0.05,
          backgroundColor: '#FCFDFF',
          alignSelf: 'center',
          marginTop: windowWidth * 0.5,
          borderRadius: 70,
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>Save</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
