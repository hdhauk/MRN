import React, { Component } from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';
import Logo from '../resources/logo-large-white.png';

export default class DrawerContent extends Component {

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={Logo} resizeMode='contain' style={styles.logo}/>
          <Text style={styles.headerText}>MRN</Text>
        </View>

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
    alignItems:'stretch'
  },
  content:{
    flex:3
  },
  header:{
    flex:1,
    backgroundColor:'#1976D2',
    justifyContent:'center',
    alignItems: 'center'
  },
  logo:{
    height:100,
    width:100
  },
  headerText:{
    fontSize:30,
    color:'white'
  }
});
