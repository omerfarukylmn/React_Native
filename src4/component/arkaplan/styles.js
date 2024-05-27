import {StyleSheet, Text, View ,Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    arkaplan:{
        position: 'absolute',
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'red',
    },
    containerImage:{
        width: windowWidth,
        height: windowHeight,
    },
})

export default styles