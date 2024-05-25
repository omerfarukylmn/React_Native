import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.005,
    backgroundColor: '#808080',
    marginLeft: windowWidth * 0.05,
  },
  container2: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.005,
    backgroundColor: '#ffffff',
    marginLeft: windowWidth * 0.05,
  },
  container1: {
    marginTop: windowHeight * 0.02,
    alignSelf: 'center',
    width: windowWidth * 0.8,
    height: windowHeight * 0.01,
    flexDirection: 'row',
  },
});

export default styles;
