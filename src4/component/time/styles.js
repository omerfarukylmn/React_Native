import {StyleSheet, Text, View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: windowWidth * 0.4,
    height: windowHeight * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B09A99',
    alignSelf: 'center',
    opacity: 0.9,
    borderTopRightRadius: 500,
    borderTopLeftRadius: 500,
  },
  timerText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  timerText1: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '800',
    color: '#FFCD71',
    
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
