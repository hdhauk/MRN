import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Front from './front';
import DrawerContent from './drawer-content';
import Drawer from 'react-native-drawer';


export default class Main extends Component {
  closeDrawer = () => {
    this._drawer.close()
  }
  openDrawer = () => {
    this._drawer.open()
  }

  render() {
    return(
      <Drawer
      type="displace"
      ref={(ref) => this._drawer = ref}
      tapToClose={true}
      side='right'
      openDrawerOffset={0.4}
      content={<DrawerContent />}
      >
        <Front openDrawer={this.openDrawer}/>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
