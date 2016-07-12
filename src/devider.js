import React, {Component} from 'react';
import {View} from 'react-native';


export default class Divider extends Component {

  static defaultProps = {
    marginLeft: 65
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.whitespace, {width: this.props.marginLeft}]} />
        <View style={styles.divider}/>
      </View>
        );
    }
}

const styles = {
    divider: {
        height: 1,
        flex:1,
        backgroundColor: 'rgba(0,0,0,.12)'
    },
    container:{
      flexDirection:'row',
      justifyContent:'flex-start'
    },
    whitespace:{
      backgroundColor: 'rgba(0,0,0,0)'
    }
};
