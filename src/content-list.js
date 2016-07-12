import React, { Component } from 'react';
import { ListView, View, Text, StyleSheet } from 'react-native';
import Data from './demo-data';
import Row from './row';
import SearchBar from './search-bar';
import Footer from './footer';
import Devider from './devider';
export default class ContentList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(Data)
    };
  }

  render(){
    return(
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Row {...data} />}
        renderSeparator={(sectionId, rowId) => <Devider key={rowId} /*style={styles.separator}*/ />}
        renderHeader={() => <SearchBar />}
        renderFooter={ () => <Footer /> }
      />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});
