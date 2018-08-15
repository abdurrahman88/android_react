/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text, TouchableOpacity,
  StyleSheet, Modal, Button, Image,
} from 'react-native';
import {Left, Right} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

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
            <TouchableOpacity onPress={props.onItemDeleted}>
              <Icon size={30} name="ios-trash" style={styles.icon}/>
            </TouchableOpacity>

            {/* <Button title="Delete" color="red" onPress={props.onItemDeleted} style={styles.tombol} /> */}
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
  },
  icon: {
    color: '#ba4b4b',
  }
});
export default placeDetail;
