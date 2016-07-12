import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import _ from 'lodash';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginLeft: 12,
    fontSize: 16,
  },
  email:{
    fontSize: 10,
    color:'gray',
    marginLeft: 12
  },
  textContainer:{
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

const Row = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: props.picture.large}} style={styles.photo} />
    <View style={styles.textContainer} >
      <Text style={styles.name}>
        {`${_.capitalize(props.name.first)} ${_.capitalize(props.name.last)}`}
      </Text>
      <Text style={styles.email} >
        {`${props.email}`}
      </Text>

    </View>
  </View>
);

export default Row;
