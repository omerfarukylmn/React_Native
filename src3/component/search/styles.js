import {StyleSheet, Text, View, Dimensions, } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  
  containerView: {
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight * 0.07,
    //backgroundColor:'red'
  },

  container: {
    marginLeft: windowWidth * 0.05,
    width: windowWidth * 0.75,
    height: windowHeight * 0.07,
    backgroundColor: '#D9D9D9',
    borderRadius: 25,
    justifyContent: 'center',
  },
  containerImage: {
    position: 'absolute',
    width: windowWidth * 0.065,
    height: windowHeight * 0.03,
    marginLeft: windowWidth * 0.65,
    //backgroundColor: 'red',
  },
  containerImage1: {
    position: 'absolute',
    width: windowWidth * 0.065,
    height: windowHeight * 0.03,
    marginLeft: windowWidth * 0.9,
    //backgroundColor: 'red',
  },
  containerText: {
    marginLeft: windowWidth * 0.05,
    fontSize: 20,
    fontWeight: '200',
  },
});

export default styles;
