import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
} from "react-native";

import { connect } from 'react-redux'

import Colors from '../colors/color';
import {actionCreators} from '../redux/actions/ActionCreator'
import CustomView from "../CustomView";

import {SearchBar} from 'react-native-elements'
import NewsListComponent from "../components/NewsListComponent";

const mapStateToProps = (state) => ({
    loading: state.newsFetchReducer.loading,
    error: state.newsFetchReducer.error,
    news: state.newsFetchReducer.news,

    newsAll:state.newsFetchAllReducer.allNews,
    newsAllError:state.newsFetchAllReducer.error,
    newsAllLoading: state.newsFetchAllReducer.loading,

    
  })

class HomeScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
        title: "Home",
        headerBackTitle: ' ',
    headerStyle: {
      backgroundColor: Colors.black,
    },
    headerRight: (
      <TouchableOpacity
      onPress={navigation.getParam('toggleSearchBar')}
      color={Colors.white}>
        <Image style={{width:20,marginRight:10,height:20}} source={require('../../Images/search.png')}/>
      </TouchableOpacity>
    ),
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
      flex:1
    },
}
  };

  constructor(props){
    super(props)
    this.state = {
      shouldShowsearchBar:false,
      searchText:'',
      searchTapped:false
    }
  }

  componentWillMount() {
    this.loadNews()    
  }

  componentDidMount() {
    this.props.navigation.setParams({ toggleSearchBar: this._toggleSearchBar });
  }

  _toggleSearchBar = () => {

    if(this.state.shouldShowsearchBar){
      this.setState({shouldShowsearchBar:false})
      this.setState({searchText:''})

    }else{
      this.setState({shouldShowsearchBar:true})
    }
  }

  loadNews = () => {
    const {dispatch} = this.props
    dispatch(actionCreators.fetchNews())
  }

  onItemSelected = (item) => {
    this.props.navigation.navigate('Details',{
        item:item
    }) 
  }


  search = () => {

    this.setState({searchTapped:true})
    
    const {dispatch} = this.props
    dispatch(actionCreators.fetchAll(this.state.searchText))
  }

    render() {

      const {news, loading, error,newsAll,newsAllError,newsAllLoading} = this.props

     return (
      <View style={styles.container}>
        <CustomView
        style={{flexDirection:'row', width:Dimensions.get('screen').width}}
        hide={!this.state.shouldShowsearchBar}>
          <SearchBar
          containerStyle={{flex:1,width:Dimensions.get('screen').width - 50}}
          lightTheme
          round
          onChangeText={text => {
            this.setState({searchText:text})
            if(!text){
              this.setState({searchTapped:false})
            }
        }}
          onClear={() => this.setState({searchTapped:false})}
          value={this.state.searchText}
          autoCorrect={false}
          placeholder='Search....'/>

          <TouchableOpacity
          disabled={this.state.searchText ? false : true}
          onPress={() => this.search()}
          style={{margin:5,justifyContent:'center',alignItems:'center'}}>
            <Text>Search</Text>
          </TouchableOpacity>

        </CustomView>

        {this.state.searchTapped ? 
        <NewsListComponent
        loading={newsAllLoading}
        error={error}
        data={newsAll}
        rowSelected={this.onItemSelected}/> : 
        <NewsListComponent
        loading={loading}
        error={newsAllError}
        data={news}
        rowSelected={this.onItemSelected}/>}

      </View>
      
     );
        
    }
}
export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    dailyReadText:{
        fontSize:25,
        fontWeight:'bold'
    },
    flatList:{
        flex:1,
        width:Dimensions.get('screen').width
    },
    

});