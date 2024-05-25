import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        width: windowWidth*0.7,
        height: windowHeight*0.07,
        backgroundColor: '#BF2900',
        alignSelf: 'center',
        borderRadius: 30,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowColor: 'black',
        justifyContent: 'center',
    },
    containerText: {
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center',
        color: 'white',
    }
})

export default styles