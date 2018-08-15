/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet, Modal, Button, Image,
} from 'react-native';
import {Left, Right} from 'native-base';

const placeDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View style={styles.button}>
          <Left>
            <Button title="Delete" color="red" onPress={props.onItemDeleted} style={styles.tombol} />
          </Left>
          <Right>
            <Button title="Close" onPress={props.onModalClosed} style={styles.tombol} />
          </Right>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
      margin: 22,
  },
  placeImage: {
    width: '100%',
    height: 200,
  },
  tombol: {
    width: 30,
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
  },
  button: {
    flexDirection: 'row',
  }
});
export default placeDetail;
