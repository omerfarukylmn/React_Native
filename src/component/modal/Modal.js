import {StyleSheet, Text, View, Modal, Button, Dimensions} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ModalComp(props) {
  const {ismodalVisible, setIsModalVisible, children} = props;

  return (
    <Modal
      visible={ismodalVisible}
      onRequestClose={() => setIsModalVisible(false)}
      transparent={true}>
      <View
        style={styles.modal}>
        <View
          style={styles.modalview}>
          {children}
        </View>
      </View>
    </Modal>
  );
}


