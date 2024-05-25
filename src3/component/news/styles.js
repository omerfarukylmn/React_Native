import {Dimensions, StyleSheet, Text, View} from 'react-native';
const winWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  image: {
    height: winWidth * 0.5,
    width: winWidth * 0.65,
    borderRadius: winWidth * 0.05,
    position: 'relative',
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'row',
    width: winWidth * 0.9,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: winWidth * 0.05,
  },
  right: {
    position: 'absolute',
    height: winWidth * 0.5,
    width: winWidth * 0.65,
    right: winWidth * 0.2,
    borderRadius: winWidth * 0.05,
  },

  left: {
    height: winWidth * 0.5,
    width: winWidth * 0.65,
    position: 'absolute',
    left: winWidth * 0.23,
    borderRadius: winWidth * 0.05,
  },
  line: {
    backgroundColor: 'white',
    width: winWidth * 0.15,
    height: winWidth * 0.015,
    borderRadius: winWidth * 0.01,
  },

  subLines: {
    backgroundColor: '#9A9595',
    width: winWidth * 0.08,
    height: winWidth * 0.015,
    borderRadius: winWidth * 0.01,
  },
  lineWrapper: {
    flexDirection: 'row',
    //backgroundColor:'red',
    width: winWidth * 0.4,
    position: 'absolute',
    zIndex: 3,
    bottom: winWidth * 0.03,
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
});

export default styles;
