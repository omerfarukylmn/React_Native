import {StyleSheet, Text, View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containerView: {
    marginTop: windowHeight * 0.5,
    marginLeft: windowWidth * 0.05,
  },
  containerView1: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.04,
    margin: windowHeight * 0.01,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: windowWidth * 0.23,
  },
  containerText1: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default styles;
