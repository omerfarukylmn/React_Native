import {StyleSheet, Text, View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight * 0.025,
    alignSelf: 'center',
    width: windowWidth * 0.9,
    height: windowHeight * 0.25,
    //backgroundColor: 'red',
  },
  containerText: {
    fontSize: 17,
    fontWeight: '500',
    color: 'white',
  },
  containerText1: {
    position: 'absolute',
    marginLeft: windowWidth * 0.23,
    marginTop: windowHeight * 0.005,
    fontSize: 15,
    fontWeight: '700',
    color: '#84A38C',
  },
  containerView: {
    justifyContent: 'center',
    //backgroundColor:'yellow',
    width: windowWidth * 0.9,
    height: windowHeight * 0.04,
  },
  containerImage: {
    marginLeft: windowWidth * 0.8,
    position: 'absolute',
    width: windowWidth * 0.071,
    height: windowHeight * 0.035,
  },
  containerText2: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
  },
  containerText3: {
    marginTop: windowHeight * 0.01,
    fontSize: 18,
    fontWeight: '700',
    color: '#688DA3',
  },
  containerText4: {
    marginTop: windowHeight * 0.01,
    fontSize: 15,
    fontWeight: '300',
    color: 'white',
  },
  containerText5: {
    fontSize: 15,
    fontWeight: '700',
    color: 'white',
  },
  containerText6: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
    marginLeft: 40,
  },
  containerText7: {
    position: 'absolute',
    marginLeft: windowWidth * 0.6,
    fontSize: 15,
    fontWeight: '700',
    color: 'white',
  },
});

export default styles;
