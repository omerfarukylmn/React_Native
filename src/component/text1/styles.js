import { StyleSheet, Text, View ,Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        
        fontSize: 30,
        fontWeight: '700',
    },
    containerViev: {
        width: windowWidth,
        height: windowHeight*0.07,
        //backgroundColor:'red'
    }
})

export default styles