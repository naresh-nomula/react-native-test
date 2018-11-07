import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {Icon, Button} from "react-native-elements";



export default class Home extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.fullwidth}>
                    <View style={styles.black}>
                        <Text style={styles.header}>OMNI FULFILLMENT</Text>
                    </View>
                </View>
                <View style={styles.division}>
                    <View style={styles.blue}>
                        <Button buttonStyle={styles.icon} onPress={() => this.props.navigation.navigate('Shipment')} rounded= {true} title="START" rightIcon={{name :'briefcase',color :"#FFF",type:"entypo", buttonStyle: styles.customBtn}}/>
                        <Text style={styles.picking}> Start Picking </Text>
                    </View>
                </View>
                <View style={styles.division}>
                    <View style={styles.lightblue}>
                        <Button buttonStyle={styles.icon} onPress={() => this.props.navigation.navigate('Shipment')} rounded= {true} title="CUSTOM" rightIcon={{name :'package',color :"#FFF",type:"feather", buttonStyle: styles.customBtn}}/>
                        <Text style={styles.custom}> Custom Picking </Text>
                    </View>
                </View>
                <View style={styles.division}>
                    <View style={styles.green}>
                        <Button buttonStyle={styles.icon_1} onPress={() => this.props.navigation.navigate('Shipment')} rounded= {true} title="0" fontWeight= "700" large/>
                        <Text style={styles.shipment}> Shipments Ready </Text>
                    </View>
                </View>
                <View style={styles.division}>
                    <View style={styles.purple}>
                        <Button buttonStyle={styles.icon_2} onPress={() => this.props.navigation.navigate('Shipment')} rounded= {true} title="BOSS" rightIcon={{name :'box',color :"#FFF",type:"feather", buttonStyle: styles.customBtn}}/>
                        <Text style={styles.boss}> BOSS </Text>
                    </View>
                </View>

                <View style={styles.fullwidth}>
                    <View style={styles.yellow}>
                        <Text style={styles.bold}> ASSIGN HOLD LOCATION </Text>
                        <Button buttonStyle={styles.numIcon} onPress={() => this.props.navigation.navigate('Shipment')} rounded= {true} title="0"  fontWeight= "700" large/>
                        <Text style={styles.picking}> Containers Ready </Text>
                    </View>
                </View>

                <View style={styles.gray}>
                        <View>
                            <Text style={styles.bold}>Workload Summary</Text>
                        </View>
                        <View>
                            <Icon
                                style={styles.up}
                                name='chevron-right'
                                type='font-awesome'
                                color='#FFF'
                                onPress={() => this.props.navigation.navigate('Shipment')}  />
                        </View>
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
    fullwidth: {
        width: "100%"
    },
    yellow:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d89738",
        padding: 10
    },
    gray:{
        backgroundColor: "#8f929b",
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: "#FFF",
        flex:1,
        justifyContent:"space-between",
        flexDirection:"row"
    },
    division: {
        width: "50%",
        backgroundColor: "#3388B5",
        justifyContent: "center"
    },
    bold:{
        color :"#fff",
        fontSize: 22,
        fontWeight: "700"
    },
    blue: {
        width: "100%",
        height: 150,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#3388B5"
    },
    lightblue:{
        width: "100%",
        height: 120,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#3388B5",
        borderLeftWidth: 2,
        borderLeftColor: "#FFF",
        padding: 20
    },
    green:{
        width: "100%",
        height: 150,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#73BE48"

    },
    purple: {
        width: "100%",
        height: 150,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#B43EAE"

    },
    picking: {
        color: "#FFF",
        fontSize : 18
    },
    custom: {
        color: "#FFF",
        fontSize : 18
    },
    shipment: {
        color: "#FFF",
        fontSize : 18
    },
    boss: {
        color: "#FFF",
        fontSize : 18,
        fontWeight: "700"
    },
    icon: {
        backgroundColor: "#2B6C97",
        margin:10
    },
    icon_1: {
        backgroundColor: "#598f39",
        margin:10
    },
    icon_2: {
        backgroundColor: "#752675",
        margin:10
    },
    numIcon:{
        backgroundColor: "#b5752c",
        margin: 10
    },
    header:{
        color: "#828483",
        fontSize: 20,
        fontWeight: "700"

    },
    black:{
        backgroundColor: "#464736",
        padding: 10
    }


})