import {StyleSheet, Text, View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.9,
    height: windowHeight,
    backgroundColor: '#F7F7F7',
    alignSelf: 'center',
  },
  containerView: {
    marginLeft:windowWidth*0.01,
    marginTop: windowWidth * 0.03,
    width: windowWidth * 0.13,
    height: windowHeight * 0.06,
    backgroundColor: '#8F8F8F',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerView1: {
    marginLeft:windowWidth*0.01,
    marginTop: windowWidth * 0.03,
    width: windowWidth * 0.13,
    height: windowHeight * 0.06,
    backgroundColor: '#82E8FF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    fontSize: 20,
    fontWeight:'700',
    color:'#ffffff'
  },
  containerView2:{
    marginTop: windowWidth * 0.03,
    width: windowWidth * 0.13,
    height: windowHeight * 0.06,
    backgroundColor: '#82E8FF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerView3:{
    width: windowWidth*0,
  }
});

export default styles;
