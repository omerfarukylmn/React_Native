import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containerView: {
    width: windowWidth,
    height: windowHeight * 0.1,
    justifyContent: 'flex-end',
    //backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    borderBottomWidth: 1,
  },

  container: {
    width: windowWidth,
    height: windowHeight * 0.05,
    //backgroundColor: 'red',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  containerText: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: windowWidth * 0.15,
  },
  containerView1: {
    position: 'absolute',
    width: windowWidth * 0.31,
    height: windowHeight * 0.003,
    backgroundColor: '#C95B00',
    marginTop: windowHeight * 0.035,
    marginLeft: windowWidth * 0.04,
  },
  containerView2: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.05,
  },
});

export default styles;
