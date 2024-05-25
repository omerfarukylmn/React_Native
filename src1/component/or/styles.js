import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containerText: {
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center',
  },
  containerView: {
    position: 'absolute',
    alignSelf: 'flex-start',
    width: windowWidth * 0.35,
    height: windowHeight * 0.003,
    backgroundColor: '#000000',
    marginTop: windowHeight * 0.01,
  },
  containerView1: {
    alignSelf: 'flex-end',
    position: 'absolute',
    width: windowWidth * 0.35,
    height: windowHeight * 0.003,
    backgroundColor: '#000000',
    marginTop: windowHeight * 0.01,
  },
});

export default styles;
