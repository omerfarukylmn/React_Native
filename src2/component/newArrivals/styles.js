import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containerTextView: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.04,
    //backgroundColor: 'yellow',
    justifyContent: 'center',
    marginLeft: windowWidth * 0.05,
  },
  containerText: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
  },
  containerButton: {
    position: 'absolute',
    width: windowWidth * 0.15,
    height: windowHeight * 0.02,
    //backgroundColor: 'red',
    marginLeft: windowWidth * 0.81,
  },
  containerButtonText: {
    fontSize: 17,
    fontWeight: '300',
    color: 'white',
    textDecorationLine: 'underline',
  },
  containerImage: {
    width: windowWidth * 0.33,
    height: windowHeight * 0.15,
    alignSelf: 'center',
  },
  containerImageView: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.15,
    //backgroundColor: 'red',
    alignSelf: 'center',
  },
  containerView: {
    justifyContent: 'center',
    marginLeft: windowWidth * 0.05,
    width: windowWidth * 0.45,
    height: windowHeight * 0.2,
    backgroundColor: '#F7F7F7',
    borderRadius: 30,
  },
  containerView1: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.3,
    //backgroundColor: 'red',
  },
  containerText1: {
    marginLeft: windowWidth * 0.05,
    marginTop: windowHeight * 0.02,
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  containerText2: {
    marginLeft: windowWidth * 0.05,
    marginTop: windowHeight * 0.01,
    fontSize: 18,
    fontWeight: '500',
    color: '#557D80',
  },
});

export default styles;
