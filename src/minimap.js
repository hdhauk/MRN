import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default class MiniMap extends Component {
  render(){
    return(
      <View style={styles.container} >
        <MapView initialRegion={{latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
        }}
        style={styles.map} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'flex-end',
    alignItems: 'center',
    height:200,
    width:200
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
