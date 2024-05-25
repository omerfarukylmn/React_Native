import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({

        modal : {
            flex: 1,
          backgroundColor: 'rgba(0,0,0,0.6)',
          justifyContent: 'flex-end',
        },
        modalview : {
            height: 300,
            backgroundColor: '#EDEDF0',
            borderTopStartRadius: 30,
            borderTopEndRadius: 30,
        }

})

export default styles