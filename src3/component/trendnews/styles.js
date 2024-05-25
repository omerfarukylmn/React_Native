import {StyleSheet, Text, View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  
  container: {
    width: windowWidth,
    height: windowHeight * 0.1,
    //backgroundColor: 'blue',
  },
  text: {
    marginLeft: windowWidth * 0.05,
    fontSize: 30,
    fontWeight: '700',
  },
  text1: {
    marginLeft: windowWidth * 0.05,
    fontSize: 20,
    fontWeight: '500',
  },
  containerView: {
    width: windowWidth,
    height: windowHeight * 0.25,
    //backgroundColor: 'red',
    flexDirection: 'row',
  },
  View: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.22,
    //backgroundColor: 'green',
    borderRadius: 30,
    marginLeft: windowWidth * 0.04,
  },
  image:{
    width: windowWidth * 0.35,
    height: windowHeight * 0.22,
    borderRadius: 30,
  }
});

export default styles;
