import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import jestConfig from '../../../jest.config';

export default function NewArrivals(props) {
  const {handlePress, pc, handlePress1, marshall1} = props;
  return (
    <View style={{marginTop: 40}}>
      <View style={{justifyContent: 'center'}}>
        <View style={styles.containerTextView}>
          <Text style={styles.containerText}>NewArrivals</Text>
        </View>
        <TouchableOpacity onPress={handlePress} style={styles.containerButton}>
          <Text style={styles.containerButtonText}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal={true}
        style={{marginTop: 20, flexDirection: 'row'}}>
        <View style={styles.containerView1}>
          <TouchableOpacity onPress={handlePress1} style={styles.containerView}>
            <View style={styles.containerImageView}>
              <Image source={pc} style={styles.containerImage} />
            </View>
            
          </TouchableOpacity>
          <View>
            <Text style={styles.containerText1}>Macbook Pro 16' M2</Text>
            <Text style={styles.containerText2}>AED 2750</Text>
          </View>
        </View>
        <View style={styles.containerView1}>
          <TouchableOpacity onPress={handlePress1} style={styles.containerView}>
            <View style={styles.containerImageView}>
              <Image source={marshall1} style={styles.containerImage} />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.containerText1}>Marshall Woburn II</Text>
            <Text style={styles.containerText2}>AED 1100</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
