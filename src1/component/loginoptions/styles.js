import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  containerview: {
    position: 'absolute',
    marginTop: windowHeight * 0.06,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent:'flex-end'
  },
  container: {
    marginLeft: windowWidth * 0.05,
    width: windowWidth * 0.11,
    height: windowHeight * 0.05,
   
  },
  containerTextView: {
      width: windowWidth*0.95,
      height: windowHeight * 0.05,
     // backgroundColor: 'yellow',
      justifyContent: 'center',
  },
   containerText:{
    alignSelf: 'center',
    //backgroundColor: 'red',
    fontSize: 20,
    
   }

});

export default styles;
