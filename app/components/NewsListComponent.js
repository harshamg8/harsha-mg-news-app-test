import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList
} from "react-native";

import NewsRowComponent from "../components/NewsRowComponent";
import Colors from '../colors/color';


class NewsListComponent extends Component {

    _renderItem = (item) => {
        return(
          <NewsRowComponent
          item={item}
          itemSelected={this.onItemSelected}
          />
        ) 
    }

    _keyExtractor = (item, index) => item.title;

  onItemSelected = (item) => {
    const {rowSelected} = this.props 
    rowSelected(item) 
  }
  
    renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            backgroundColor: Colors.silver,
          }}
        />
      );
    }
  
    listHeaderComponent = () => {
        return(
          <View 
          style={{marginTop:10,marginBottom:10,padding:10}}>
               <Text style={styles.dailyReadText}>Your Daily Read</Text>
          </View>
        )
    }

    render() {
        const {loading,data,error} = this.props
            if(loading){
                return(
                    <View style={styles.activityIndicatorView}>
                        <ActivityIndicator size='large' animating={true}/>
                    </View>
                ) 
        }

        if (error) {

            return (
              <View style={{justifyContent:'center',alignItems:'center' ,flex:1}}>
                <Text>Failed to load!</Text>
                <TouchableOpacity
                onPress={() => this.loadNews()}>
                  <Text>REFRESH</Text>
                </TouchableOpacity>
              </View>
            )
          }

        return (
            <View style={styles.container}>
                <FlatList
                 horizontal={false}
                 style={styles.flatList}
                 data={data}
                 keyExtractor={this._keyExtractor}
                 ItemSeparatorComponent={this.renderSeparator}
                 renderItem={this._renderItem}
                ListHeaderComponent={this.listHeaderComponent}
              />
            </View>
        );
    }
}
export default NewsListComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    activityIndicatorView:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dailyReadText:{
        fontSize:25,
        fontWeight:'bold'
    },
});