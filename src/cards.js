import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Cards extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.textBox}>
          <Text style={styles.text}>
            Get out of there!
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-start',
    backgroundColor:'black',
    opacity:0.2
  },
  textBox:{
    opacity:1
  },
  text:{
    fontSize:20,
     color:'red',
      opacity:1
  }
});
