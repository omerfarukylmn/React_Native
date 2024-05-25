import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Bottomtab(props) {
  const {
    home1,
    hometext,
    todolist1,
    todolistText,
    love1,
    loveText,
    settings1,
    settingsText,
  } = props;
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.containerImageHomeView}>
          <View>
            <Image source={home1} style={styles.containerImage}></Image>
          </View>
          <View style={styles.containertextView}>
            <Text style={styles.containerText}>{hometext}</Text>
          </View>
        </View>
        <View style={styles.containerImageTodolistView}>
          <View>
            <Image source={todolist1} style={styles.containerImage}></Image>
          </View>
          <View style={styles.containertextView}>
            <Text style={styles.containerText}>{todolistText}</Text>
          </View>
        </View>
        <View style={styles.containerImageLoveView}>
          <View>
            <Image source={love1} style={styles.containerImage}></Image>
          </View>
          <View style={styles.containertextView}>
            <Text style={styles.containerText}>{loveText}</Text>
          </View>
        </View>
        <View style={styles.containerImageSettingsView}>
          <View>
            <Image source={settings1} style={styles.containerImage}></Image>
          </View>
          <View style={styles.containertextView}>
            <Text style={styles.containerText}>{settingsText}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
