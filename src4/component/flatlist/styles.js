import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containerView: {
    position: 'absolute',
    width: windowWidth * 2,
    height: windowHeight * 0.5,
    marginTop: windowHeight * 0.51,
    backgroundColor: '#90A49E',
    borderRadius: 300,
    marginRight: windowWidth * 0.5,
    justifyContent: 'center',
    marginLeft: windowWidth * 0.05,
    opacity: 0.8,
  },
  containerView1: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.04,
    margin: windowHeight * 0.01,
    marginTop: windowHeight * 0.02,
    marginLeft: windowWidth * 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',
  },
  containerText: {
    fontSize: 25,
    fontWeight: '900',
    marginLeft: windowWidth * 0.23,
    color: 'white',
  },
  containerText1: {
    fontSize: 25,
    fontWeight: '900',
    color: 'white',
  },
  containerText2: {
    position: 'absolute',
    fontSize: 25,
    fontWeight: '700',
    marginLeft: windowWidth * 0.06,
  },
  containerView2: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.07,
    backgroundColor: 'white',
    borderRadius: 50,
    marginLeft: windowWidth * 0.47,
    marginTop: windowHeight * 0.42,
    justifyContent: 'center',
  },
  containerImage: {
    marginLeft: windowWidth * 0.4,
    width: windowWidth * 0.04,
    height: windowHeight * 0.02,
  },
  modalBackground: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.3,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginLeft: windowWidth * 0.47,
    marginTop: windowHeight * 0.48,
  },
  flatlist: {
    width: '100%',
  },
  cityItem: {
    padding: 15,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default styles;
