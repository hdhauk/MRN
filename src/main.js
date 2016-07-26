import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
//import Front from './front';
import Login from './login-screen/login-screen';
import DrawerContent from './drawer-content';
import Drawer from 'react-native-drawer';


export default class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      openDrawerOffset: 0.4
    };
  }

  closeDrawer = () => {
    if(this.state.openDrawerOffset == 0){
      this.toggleFullScreenDrawer();
    }
    this._drawer.close();
  }
  openDrawer = () => {
    this._drawer.open();
  }

  toggleFullScreenDrawer = () => {
    if(this.state.openDrawerOffset == 0.4){
      this.setState({openDrawerOffset:0});
    }else{
      this.setState({openDrawerOffset:0.4});
    }
  }

  render() {
    return(
      <Drawer
      type="overlay"
      ref={(ref) => this._drawer = ref}
      tapToClose={true}
      side='right'
      openDrawerOffset={this.state.openDrawerOffset}
      content={<DrawerContent toggleFullScreenDrawer={this.toggleFullScreenDrawer}/>}
      >
        <Login openDrawer={this.openDrawer}/>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
