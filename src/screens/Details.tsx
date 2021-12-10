import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Prop {
    navigation: any;
}

interface State {
}

export default class Details extends Component<Prop, State> {
    name: string;
    mobile: string;

    static navigationOptions = {
        title: 'Details',
    };

    constructor(props: Prop | Readonly<Prop>) {
        super(props);
        const { params } = this.props.navigation.state;
        this.name = params.name;
        this.mobile = params.mobile;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Name : {this.name}</Text>
                <Text style={{ marginTop: 10 }}>Mobile : {this.mobile}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
});