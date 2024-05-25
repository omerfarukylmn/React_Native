import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    marginLeft: windowWidth * 0.05,
    width: windowWidth * 0.23,
    height: windowHeight * 0.04,
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
  containerText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
    alignSelf: 'center',
  },
});

export default styles;
