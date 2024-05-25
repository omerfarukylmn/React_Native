import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.25,
    alignSelf: 'center',
  },
  continerText: {
    marginLeft: windowWidth * 0.02,
    marginTop: windowHeight * 0.01,
    fontSize: 23,
    fontWeight: '800',
    
  },
  containerStar: {
    //backgroundColor: 'white',
    marginTop: windowHeight * 0.022,
    width: windowWidth * 0.03,
    height: windowHeight * 0.015,
    marginLeft: windowWidth * 0.01,
  },
  containerView: {
    width: windowWidth,
    height: windowHeight * 0.05,
    //backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  containerView1: {
    flexDirection: 'row',
    marginLeft: windowWidth * 0.05,
  },
  containerRatings: {
    marginTop: windowHeight * 0.021,
    marginLeft: windowWidth * 0.015,
    fontWeight: '200',
  },
  containerinformation: {
    width: windowWidth,
    height: windowHeight * 0.3,
    //backgroundColor: 'red',
  },
  continerText1: {
    position: 'absolute',
    marginLeft: windowWidth * 0.02,
    marginTop: windowHeight * 0.007,
    fontSize: 30,
    fontWeight: '800',
    //backgroundColor: 'red',
  },
  containerView2: {
    position: 'absolute',
    width: windowWidth * 0.2,
    height: windowHeight * 0.05,
    backgroundColor: '#C95B00',
    marginLeft: windowWidth * 0.78,
    borderRadius: 70,
  },
  containerTextInfo: {
    marginTop: windowHeight * 0.06,
    width: windowWidth,
    height: windowHeight * 0.2,
    //backgroundColor:'yellow'
  },

  continerText2: {
    marginLeft: windowWidth * 0.02,
    marginTop: windowHeight * 0.01,
    fontSize: 18,
    fontWeight: '500',
  },
  containerBottom: {
    width: windowWidth,
    height: windowHeight * 0.15,
    backgroundColor: '#EDEDED',
    top: windowHeight * 0.75,
    position: 'absolute',
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    borderRadius:20,
  },
  continerTotal: {
    justifyContent: 'center',
    marginTop: windowHeight * 0.02,
      width: windowWidth,
      height: windowHeight * 0.09,
      //backgroundColor: 'yellow',  
    },
    containerShopping: {
        justifyContent: 'center',
        marginLeft: windowWidth * 0.55,
        position: 'absolute',
        width: windowWidth * 0.37,
        height: windowHeight * 0.07,
        backgroundColor: '#C95B00',
        borderRadius: 20,
    },
});

export default styles;
