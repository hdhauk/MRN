import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import ContentList from './content-list';

export default class Front extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.navBar} >
          <TouchableHighlight onPress={ () => {}} >
            <Text style={styles.navBarText}>Back</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={ () => {}} >
            <Text style={styles.navBarText}>Header</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={ () => {this.props.openDrawer()}} >
            <Text style={styles.navBarText}>Open</Text>
          </TouchableHighlight>
        </View>
        <ContentList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  navBar:{
    backgroundColor:'#2196F3',
    height:64,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  navBarText:{
    fontSize:20,
    color:'white'
  }
});
