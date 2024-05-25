import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containerTopBar: {
    marginTop: windowHeight * 0.02,
    width: windowWidth,
    height: windowHeight * 0.12,
    backgroundColor: '#000000',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: 'center',
  },

  containerTopBar1: {
   
    marginTop: windowHeight * 0.02,
    width: windowWidth,
    height: windowHeight * 0.08,
    backgroundColor: '#000000',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: 'center',
  },
  containerLogo: {
    marginLeft: windowWidth * 0.05,
    justifyContent: 'center',
    width: windowWidth * 0.11,
    height: windowHeight * 0.1,
    //backgroundColor: 'red',
  },
  containerSearch: {
    alignSelf: 'center',
    position: 'absolute',
    width: windowWidth * 0.67,
    height: windowHeight * 0.05,
    backgroundColor: '#000000',
    borderRadius: 80,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
  },
  containerImage: {
    position: 'absolute',
    marginLeft: windowWidth * 0.03,
    width: windowWidth * 0.053,
    height: windowHeight * 0.025,
  },
  containerText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    fontWeight: '200',
  },
  containerCamera: {
    position: 'absolute',
    width: windowWidth * 0.08,
    height: windowHeight * 0.05,
    //backgroundColor: 'red',
    justifyContent: 'center',
    marginLeft: windowWidth * 0.85,
  },
  containerText1: {
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',
    fontWeight: '400',
  },
  containerView: {
    flexDirection: 'row',
    position: 'absolute',
    width: windowWidth * 0.2,
    height: windowHeight * 0.05,
    //backgroundColor: 'red',
    marginLeft: windowWidth * 0.77,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImage1: {
    marginLeft: windowWidth * 0.03,
    width: windowWidth * 0.053,
    height: windowHeight * 0.025,
  },
});

export default styles;
