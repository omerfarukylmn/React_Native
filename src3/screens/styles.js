import { StyleSheet, Text, View, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    image: {
        width: windowWidth,
        height: windowHeight,
    }
})

export default styles