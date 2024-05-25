import {StyleSheet, Text, View, Modal, Button} from 'react-native';
import React from 'react';

export default function proje2() {
  const [ismodalVisible, setModalVisible] = React.useState(false);
  return (
    <View>
      <Modal visible={ismodalVisible}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'red',
            padding: 60,
          }}>
          <Text>Modal</Text>
          <Button
            title="close"
            color="red"
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
