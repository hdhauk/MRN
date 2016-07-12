import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class DrawerContent extends Component {

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.content}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-start'
  },
  content:{
  }
});
