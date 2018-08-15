/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text, Image,
  StyleSheet, TouchableOpacity
} from 'react-native';

const ListItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.ListItem}>
      <Image resizeMode="contain" source={props.placeImage} style={styles.placeImage} />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  ListItem: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#eee",
  },
  placeImage: {
    marginRight: 8,
    width: 30,
    height: 30,
  }
});

export default ListItem;
