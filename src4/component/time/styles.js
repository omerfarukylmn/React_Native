import {StyleSheet, Text, View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B09A99',
    marginTop: windowHeight * 0.14,
    alignSelf: 'center',
    opacity: 0.9,
    borderTopRightRadius: 500,
    borderTopLeftRadius: 500,
  },
  timerText: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
  },
  loadingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  prayerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
});

export default styles;
