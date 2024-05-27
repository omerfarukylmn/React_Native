import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containerView: {
    position: 'absolute',
    width: windowWidth * 2,
    height: windowHeight * 0.5,
    justifyContent: 'center',
  },
  containerView1: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.04,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',
  },
  containerText: {
    fontSize: 25,
    fontWeight: '900',
    marginLeft: windowWidth * 0.23,
    color: 'white',
  },
  containerText1: {
    fontSize: 25,
    fontWeight: '900',
    color: 'white',
  },
  containerText2: {
    position: 'absolute',
    fontSize: 25,
    fontWeight: '700',
    marginLeft: windowWidth * 0.06,
  },
  containerView2: {
    posation: 'absolute',
    width: windowWidth * 0.5,
    height: windowHeight * 0.07,
    backgroundColor: 'white',
    borderRadius: 50,
    marginLeft: windowWidth * 0.47,
    marginTop: windowHeight * 0.42,
    justifyContent: 'center',
  },
  containerImage: {
    marginLeft: windowWidth * 0.4,
    width: windowWidth * 0.04,
    height: windowHeight * 0.02,
  },
});

export default styles;
