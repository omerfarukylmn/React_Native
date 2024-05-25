import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containerView: {
    marginTop: windowHeight * 0.005,
    alignSelf: 'center',
    width: windowWidth * 0.9,
    height: windowHeight * 0.05,
    backgroundColor: '#F2F2F2',
    borderRadius: 13,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: 'black',
  },
  containerText: {
    marginLeft:windowWidth*0.02,
    marginTop: windowHeight * 0.01,
    fontSize: 18,
    fontWeight: '400',
  },
  continerForget: {
    marginTop: windowHeight * 0.01,
    alignSelf: 'flex-end',
    fontSize: 13,
    fontWeight: '200',
  },
  continerRememberView: {
    position: 'absolute',
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,

    marginTop: windowHeight * 0.213,
    marginLeft: windowWidth * 0.02,
    justifyContent: 'center',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: 'black',
    borderWidth: 2,
    
  },
  continerRemember: {
    marginLeft: windowWidth * 0.1,
    marginTop: windowHeight * 0.01,
    fontSize: 15,
    fontWeight: '400',
  },
  containeryes: {
    alignSelf: 'center',
    width: windowWidth * 0.04,
    height: windowHeight * 0.02,
  },
});

export default styles;
