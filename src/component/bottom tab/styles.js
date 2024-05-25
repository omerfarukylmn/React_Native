import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.1,
    backgroundColor: '#FAF5F8',
    bottom: windowWidth * 0.13,
    position: 'absolute',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {
      width: 0.2,
      height: 0.2,
    },
    shadowOpacity: 0.3,
  },
  containerImageHomeView: {
    position: 'absolute',
    marginLeft: windowWidth * 0.02,
    width: windowWidth * 0.2,
    height: windowHeight,
    //backgroundColor:'yellow',
  },
  containerImage: {
    
    alignSelf: 'center',
    marginTop: windowHeight * 0.01,
    width: windowWidth * 0.07,
    height: windowHeight * 0.035,
  },
  containertextView: {
    justifyContent: 'center',
    marginTop: windowWidth * 0.01,
    width: windowWidth * 0.2,
    height: windowHeight * 0.03,
    //backgroundColor:'blue',
    alignItems: 'center',
  },
  containerText: {
    fontSize: 14,
    fontWeight: '600',
  },
  containerImageTodolistView: {
    position: 'absolute',
    marginLeft: windowWidth * 0.25,
    width: windowWidth * 0.2,
    height: windowHeight,
    //backgroundColor:'yellow',
  },
  containerImageLoveView: {
    position: 'absolute',
    marginLeft: windowWidth * 0.51,
    width: windowWidth * 0.2,
    height: windowHeight,
    //backgroundColor:'yellow',
  },
  containerImageSettingsView: {
    position: 'absolute',
    marginLeft: windowWidth * 0.77,
    width: windowWidth * 0.2,
    height: windowHeight,
    //backgroundColor:'yellow',
  },
});

export default styles;
