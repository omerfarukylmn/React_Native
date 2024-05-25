import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
    marginTop: windowHeight * 0.01,
    width: windowWidth * 0.95,
    height: windowHeight * 0.06,
    justifyContent: 'center',
  },
  containerLogin: {
    //backgroundColor: 'red',
    marginTop: windowHeight * 0.03,
    width: windowWidth * 0.95,
    height: windowHeight * 0.27,
  },
  containerSafeArea: {
    marginLeft: windowWidth * 0.02,
    width: windowWidth * 0.95,
    height: windowHeight,
    //backgroundColor: 'white',
  },
  containerScrollView: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#E6E6E6',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: 'black',
  },
  containerMeal: {
        width: windowWidth*0.5,
        height: windowHeight*0.25,
  },
});

export default styles;
