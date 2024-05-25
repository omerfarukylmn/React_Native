import { StyleSheet, Text, View ,Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: windowHeight*0.03,
        width: windowWidth*0.9,
        height: windowHeight * 0.18,
        backgroundColor: '#BEEBED',
        borderRadius: 20,
    },
    containerTextView: {
        alignSelf: 'center',
        //backgroundColor:'red',
        width: windowWidth*0.7,
        height:windowHeight*0.1,
    },
    containerText: {
        alignSelf: 'center',
        marginTop: windowHeight*0.02,
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },
    containerwhatsapp: {
        alignSelf: 'center',
        marginTop: windowHeight*0.02,
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        color:'#212BB8',
        textDecorationLine: 'underline'
    }
})

export default styles