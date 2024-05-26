import {StyleSheet, Text, View ,Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    arkaplan:{
        position: 'absolute',
        width: windowWidth*0.9,
        height: windowHeight*0.4,
        backgroundColor: 'red',
        marginLeft: windowWidth*0.3,
        borderRadius: 200,
    }
})

export default styles