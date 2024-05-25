import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        alignSelf: 'flex-end',
        width: windowWidth * 0.089,
        height: windowHeight * 0.04,
        //backgroundColor: 'red',
    },
    containerView: {
        justifyContent:'flex-end',
        width: windowWidth * 0.95,
        height: windowHeight * 0.04,
        //backgroundColor: 'red',
    },
    containerText: {
        position: 'absolute',
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: '600',
    }
})

export default styles