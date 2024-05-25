import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeAreaView: {
    height: windowHeight,
    marginLeft: windowWidth * 0.025,
    marginRight: windowWidth * 0.025,
    //backgroundColor:'yellow'
  },
  containerView: {
    marginTop: windowHeight * 0.05,
    width: windowWidth * 0.95,
    height: windowHeight * 0.4,
    //backgroundColor:'red'
  },
  containerList: {
    justifyContent: 'center',
    width: windowWidth * 0.95,
    height: windowHeight * 0.1,
    backgroundColor: '#FAF5F8',
    shadowColor: 'black',
    shadowOffset: {
      width: 0.2,
      height: 0.2,
    },
    shadowOpacity: 0.2,
  },
  container: {
    position: 'absolute',
    fontSize: 30,
    fontWeight: '700',
    marginTop: windowHeight * 0.02,
    alignSelf: 'center',
  },
  containerNewPassword: {
    marginTop: windowHeight * 0.07,
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    width: windowWidth * 0.95,
    height: windowHeight * 0.06,
    backgroundColor: '#FCFDFF',
    borderRadius: 70,
  },
  containernewpasswordText: {
    fontWeight: 100,
    fontSize: 15,
    marginLeft: windowWidth * 0.025,
  },
  containerconfirmPassword: {
    marginTop: windowHeight * 0.14,
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    width: windowWidth * 0.95,
    height: windowHeight * 0.06,
    backgroundColor: '#FCFDFF',
    borderRadius: 70,
  },
  containerconfirmText: {
    fontWeight: 100,
    fontSize: 15,
    marginLeft: windowWidth * 0.025,
  },
});

export default styles;
