import {StyleSheet, Text, View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    container: {
        width: windowWidth * 0.9,
        height: windowHeight * 0.35,
        backgroundColor: '#F7F7F7',
        alignSelf: 'center',
        borderRadius: 30,
      },
      containerImage: {
        width: windowWidth ,
        height: windowHeight * 0.3,
        alignSelf: 'center',
        marginTop: windowHeight * 0.02,
        borderRadius: 30,
      },
      containerDiscount: {
        position: 'absolute',
        width: windowWidth * 0.13,
        height: windowHeight * 0.06,
        backgroundColor: '#000000',
        justifyContent: 'center',
        borderRadius: 80,
        marginLeft: windowWidth * 0.7,
        marginTop:  windowHeight * 0.02,
        alignItems: 'center',
      },
      containerText3: {
        fontSize: 20,
        fontWeight: '800',
        color: 'white',
      },
      containerView: {
        marginTop: windowHeight * 0.02,
        width: windowWidth * 0.9,
        height: windowHeight * 0.05,
        //backgroundColor: 'red',
      }
})

export  default styles