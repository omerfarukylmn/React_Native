const styles = StyleSheet.create({});

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import {RouterNames} from './../../config';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';

const Card = props => {
  const navigation = useNavigation(); 
  const {image, date, description, name} = props;
  return (
    <View style={{paddingTop: windowWidth * 0.04, alignItems: 'center'}}>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate(RouterNames.DETAIL, {
            image: image,
            date: date,
            name: name,
            description: description,
          });
        }}>
        <View style={styles.view_card}>
          <View style={{flexDirection: 'row', padding: windowWidth * 0.03}}>
            <View>
              <Image source={{uri: image}} style={{width: '100%', height: '100%'}} />
            </View>
            <View style={{width: '100%', height: '100%'}}>
              <View style={{width: windowWidth * 0.5}}>
                <Text style={{fontSize: 20}}>{name}</Text>
              </View>
              <View style={{width: '100%', height: '100%'}}>
                <View>
                  <Text style={{fontSize: 20}}>{date}</Text>
                </View>
                <View>
                  <Text style={{fontSize: 20}}>Today</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default Card;