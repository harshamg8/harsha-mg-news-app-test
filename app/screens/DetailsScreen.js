import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from "react-native";

import Colors from '../colors/color'

class DetailsScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
        title: navigation.getParam('item', 'Details Screen').title,
    headerStyle: {
      backgroundColor: Colors.white,
    },
    headerTintColor: Colors.black,
    headerTitleStyle: {
      fontWeight: 'bold',
      flex:1
    },
}
  };


    render() {
        const { navigation } = this.props
        const item = navigation.getParam('item', 'Details Screen')
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.author}>{item.author}  {item.publishedAt.substr(0,10)}</Text>
                <Image style={styles.imageStyle} source={{uri:item.urlToImage ? item.urlToImage : 'https://s3.us-east-2.amazonaws.com/shdhs.org/2018/01/No-image-available.jpg'}}/>
                <Text style={styles.content}>{item.content}</Text>
            </ScrollView>
            
        );
    }
}
export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding:10
    },
    imageStyle:{
        width:Dimensions.get('screen').width - 20,
        height:300
    },
    titleText:{
        fontSize:35,
        fontWeight:'800',
        marginBottom:30
    },
    content:{
        fontSize:25,
        fontWeight:'300' ,
        marginTop:30
    },
    author:{
        marginBottom:30,
        fontWeight:'bold'
    }
});