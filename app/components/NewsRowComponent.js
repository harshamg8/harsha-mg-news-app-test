import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";

class NewsRowComponent extends Component {

    onItemSelected = () => {
        const {itemSelected} = this.props 
        itemSelected(this.props.item.item) 

     }

    render() {
        return (
            <TouchableOpacity 
            style={styles.container}
            onPress={() => this.onItemSelected()}>
                <View style={styles.titleView}>
                    <Text 
                    numberOfLines={2}
                    ellipsizeMode='tail'
                    style={styles.titleText}>{this.props.item.item.title}</Text>
                    <Text>{this.props.item.item.source.name}</Text>
                </View>
                <View>
                    <Image style={{width:80,height:80}} source={{uri:this.props.item.item.urlToImage}}/>
                </View>
            </TouchableOpacity>
        );
    }
}
export default NewsRowComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        height:100,
        // alignItems: 'center',
        padding:5
    },
    titleView:{
        width:Dimensions.get('screen').width * 0.75,
        marginRight:5,
        alignItems:'flex-start',
        justifyContent:'space-around',
        paddingLeft:10
    },
    titleText:{
        fontSize:14,
        fontWeight:'700',
        
    }
});