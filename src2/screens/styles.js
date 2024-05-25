import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    
     containerSafeArea: {
         backgroundColor:'#171717',
         width: windowWidth,
         height: windowHeight,
     },
   

})

export default styles