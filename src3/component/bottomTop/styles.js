import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.07,
    backgroundColor: 'white',
    bottom: windowWidth *0,
    position: 'absolute',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {
      width: 0.2,
      height: 0.2,
    },
    shadowOpacity: 0.3,
    flexDirection: 'row',
  },
  containerImage: {
    marginTop: windowHeight * 0.01,
    width: windowWidth * 0.075,
    height: windowHeight * 0.035,
  },
  containerView: {
      width: windowWidth * 0.25,
      height: windowHeight * 0.1,
      //backgroundColor: 'red',
      alignItems: 'center',
  },
  containerText: {
    marginTop: windowHeight * 0.01,
    fontSize: 15,
    fontWeight: '400',
   
  }
});

export default styles;
