import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight * 0.02,
    width: windowWidth * 0.9,
    height: windowHeight * 0.3,
    backgroundColor: '#F7F7F7',
    alignSelf: 'center',
    borderRadius: 30,
  },
  containerText: {
    fontSize: 30,
    fontWeight: '700',
  },
  containerView: {
    marginLeft: windowWidth * 0.05,
    marginTop: windowHeight * 0.01,
    width: windowWidth * 0.6,
    height: windowHeight * 0.04,
    //backgroundColor: 'red',
  },
  containerText1: {
    fontSize: 20,
    fontWeight: '500',
  },
  containerImage: {
    alignSelf: 'center',
    width: windowWidth * 0.8,
    height: windowHeight * 0.4,
    //backgroundColor: 'red',
  },

  containerViewImage: {
    justifyContent: 'center',
    position: 'absolute',
    width: windowWidth * 0.66,
    height: windowHeight * 0.36,
    //backgroundColor: 'red',
    marginLeft: windowWidth * 0.2,
  },
  containerDiscount: {
    position: 'absolute',
    width: windowWidth * 0.13,
    height: windowHeight * 0.06,
    backgroundColor: '#000000',
    justifyContent: 'center',
    borderRadius: 80,
    marginLeft: windowWidth * 0.7,
    marginTop:  windowHeight * 0.02,
  },
  containerText3: {
    fontSize: 22,
    fontWeight: '800',
    color: 'white',
  },
});

export default styles;
