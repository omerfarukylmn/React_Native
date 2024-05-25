import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containerSignIn: {
    position: 'absolute',
    fontSize: 25,
    fontWeight: '900',
    marginLeft: windowWidth * 0.15,
    color:'#C23400'
  },
  containerSignUp: {
    marginLeft: windowWidth * 0.65,
    fontSize: 25,
    fontWeight: '900',
    color:'#FFA069'
  },
  continerView: {
    width: windowWidth*0.45,
    height: windowHeight*0.003,
    backgroundColor:'#992900',
    marginLeft:windowWidth*0.025
  }
});

export default styles;
