import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {Icon, Button} from "react-native-elements";


export default class Shipment extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.wrapper}>
                    <Text style={styles.center}>Welcome to Shipment</Text>
                    <Button buttonStyle={styles.icon} onPress={() => this.props.navigation.navigate('Home')} rounded= "true" title="Home" rightIcon={{name :'home',color :"#FFF",type:"entypo", buttonStyle: styles.customBtn}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",

    },
    wrapper: {
        width: "100%",
        backgroundColor: "#2f82b2",
        justifyContent: "center",
        alignItems:"center",
    },
    center: {
        color:"#FFF"
    },
    icon: {
        backgroundColor: "#2B6C97",
        margin:10
    },
})