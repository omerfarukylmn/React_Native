import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        marginLeft:windowWidth*0.03,
        marginTop:windowHeight*0.02,
        width: windowWidth*0.45,
        height: windowHeight*0.225,
        backgroundColor:'#EDEDED',
        borderRadius:20,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        shadowColor: "black",
        
    },
    containerView: {
        width: windowWidth,
        height: windowHeight*0.25,
        //backgroundColor: 'yellow',
        flexDirection: 'row',
    },
    containerImage: {
        borderRadius:80,
        alignSelf: 'center',
        width: windowWidth*0.32,
        height: windowHeight*0.15,
        marginTop:windowHeight*0.015
    },
    containerlike: {
        marginTop:windowHeight*0.01,
        marginLeft:windowWidth*0.37,
        position: 'absolute',
        width: windowWidth*0.055,
        height: windowHeight*0.025,
    },
    containerText: {
        fontSize: 22,
        fontWeight: '500',
        alignSelf: 'center',
    },
    containerTextmoney: {
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'center',
    }
})

export default styles