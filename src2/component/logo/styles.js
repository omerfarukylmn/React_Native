import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        alignSelf: 'center',
        fontSize: 10,
        color: 'white',
        fontWeight: '800'
    }

})

export default styles