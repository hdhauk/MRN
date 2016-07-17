import React, { Component } from 'react';
import {
View,
StyleSheet,
Image,
Text,
TouchableHighlight,
ListView
} from 'react-native';
import Logo from '../resources/logo-large-white.png';
import mem from '../resources/mem.png';
import upload from '../resources/upload.png';



export default class DrawerContent extends Component {

  constructor(props){
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {title:'Feed', icon:mem, onPress:this.props.toggleFullScreenDrawer},
        {title:'Batch upload', icon:upload, onPress:this.props.toggleFullScreenDrawer}
      ])
    };
  }

  renderRow = (rowData) => {
    console.log(rowData);
    return(
    <TouchableHighlight onPress={rowData.onPress}>
      <View
      style={styles.btn}>
        <Image source={rowData.icon} style={styles.btnImg} resizeMode='contain' />
        <Text style={styles.btnText}>{rowData.title}</Text>
      </View>
    </TouchableHighlight>
    );
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableHighlight onPress={this.props.toggleFullScreenDrawer}>
            <Image source={Logo} resizeMode='contain' style={styles.logo}/>
          </TouchableHighlight>
          <Text style={styles.headerText}>MRN</Text>
        </View>

        <ListView
        style={styles.content}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'stretch',
    backgroundColor:'white'
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
  },
  btn:{
    height:60,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    borderColor:'#4444',
    borderBottomWidth: 1
  },
  btnText:{
    fontSize:30,
    padding: 10
  },
  btnImg:{
    height:30,
    width:30,
    marginLeft:5
  }
});
