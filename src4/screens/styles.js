import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: windowWidth,
        height: windowHeight*0.4,
    },
    View: {
        position: 'absolute',
        width: windowWidth,
        height: windowHeight*0.3,
    },
})

export default styles