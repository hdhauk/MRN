import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Popover from 'react-native-popover';

import ContentList from './content-list';
import MiniMap from './minimap';

export default class Front extends Component{
  constructor(props){
    super(props);

    this.state = {
      mapModalVisible: false
    };
  }

  toggleModal = () => {
    this.setState({mapModalVisible:!this.state.mapModalVisible});
  }


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.navBar} >
          <TouchableHighlight onPress={ () => {}} >
            <Text style={styles.navBarText}>Back</Text>
          </TouchableHighlight>

          <View>
            <TouchableHighlight ref='button' onPress={this.toggleModal}>
              <Text style={styles.navBarText}>Press me</Text>
            </TouchableHighlight>
          </View>

          <TouchableHighlight onPress={ () => {this.props.openDrawer()}} >
            <Text style={styles.navBarText}>Open</Text>
          </TouchableHighlight>
        </View>
        <ContentList />
        <Popover
        isVisible={this.state.mapModalVisible}
        onClose={this.toggleModal}
        fromRect={{x: 200, y: 50, width: 0, height: 0}}>
          <MiniMap lat={41.44056} lon={22.72778} />
        </Popover>
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
