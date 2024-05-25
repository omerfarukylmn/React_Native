import {StyleSheet, Text, View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  containerTextView: {
    position: 'absolute',
    justifyContent: 'center',
    marginLeft: windowWidth * 0.25,
    width: windowWidth * 0.4,
    height: windowHeight * 0.1,
    //backgroundColor: 'red',
  },
  containerImageView: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.1,
    //backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  containerImage: {
    alignSelf: 'center',
    width: windowWidth * 0.066,
    height: windowHeight * 0.03,
   //backgroundColor: 'yellow',
  },
  containerImage1View: {
    position:'absolute',
    width: windowWidth * 0.2,
    height: windowHeight * 0.1,
    //backgroundColor: 'yellow',
    justifyContent: 'center',
    marginLeft: windowWidth * 0.75,
  },
  containeronbutton: {
    position:'absolute',
    alignSelf: 'center',
    width: windowWidth*0.08,
    height: windowHeight*0.04,
  }
});

export default styles;
