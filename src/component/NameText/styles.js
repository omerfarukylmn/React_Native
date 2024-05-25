import { StyleSheet, Text, View ,Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({

    containername: {
        position:'absolute',
        fontSize: 20,
        fontWeight: '700',
        marginLeft:windowWidth*0.17,
        marginTop:windowHeight*0.035
    },
    containerViev: {
        width: windowWidth,
        height: windowHeight*0.07,
        //backgroundColor:'red'
    },
    containerImageMan: {
        width: windowWidth*0.1,
        height: windowHeight*0.05,
    },
    containerImageManViev: {
        justifyContent:'center',
        width: windowWidth*0.15,
        height: windowHeight*0.07,
        backgroundColor:'#B3B3B3',
        borderRadius:windowWidth*0.07,
        alignItems:'center',
    },
    containerWelcome: {
        position:'absolute',
        fontSize: 20,
        fontWeight: '300',
        marginLeft:windowWidth*0.17,
        marginTop:windowHeight*0.01
    },
    containerImageExit: {
        width: windowWidth*0.06,
        height: windowHeight*0.03,
    },
    containerImageExitViev: {
        position:'absolute',
        justifyContent:'center',
        width: windowWidth*0.1,
        height: windowHeight*0.05,
        //backgroundColor:'#B3B3B3',
        alignItems:'center',
        marginTop:windowHeight*0.01,
        marginLeft:windowWidth*0.85
    },
})

export  default styles