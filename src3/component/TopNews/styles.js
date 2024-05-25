import { StyleSheet, Text, View , Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        width: windowWidth,
        height: windowHeight,
        //backgroundColor: 'blue',
    },
    text: {
        marginLeft: windowWidth * 0.05,
        fontSize: 30,
        fontWeight: '600',
    },
    imageView: {
        marginTop: windowHeight * 0.02,
        marginLeft: windowWidth * 0.05,
        width: windowWidth*0.9,
        height: windowHeight * 0.15,
        backgroundColor: '#D4D4D4',
        justifyContent: 'center',
        borderRadius: 30,
    },
    image: {
        marginLeft: windowWidth * 0.02,
        width: windowWidth*0.22,
        height: windowHeight * 0.11,
        borderRadius: 15,
    },
    text1: {
        marginLeft: windowWidth * 0.05,
        fontSize: 15,
        fontWeight: '600',
    },
    text2: {
        marginTop: windowHeight * 0.02,
        marginLeft: windowWidth * 0.05,
        fontSize: 15,
        fontWeight: '300',
    },
    textView: {
        marginLeft: windowWidth * 0.25,
        width: windowWidth*0.65,
        height: windowHeight * 0.15,
        //backgroundColor: 'yellow',
        justifyContent: 'center',
        position: 'absolute',
    },
})

export default styles