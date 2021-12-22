import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default class Boxes extends Component {

    render() {
        return (
            <ScrollView horizontal={true} scrollEnabled={true} style={{ width: '100%', height: '20%', backgroundColor: 'yellow' }}>
                <View style={{ width: 200, height: 100, backgroundColor: '#00a', margin: 10 }}>
                    <Image
                        source={{ uri: "https://miro.medium.com/max/1400/1*xDi2csEAWxu95IEkaNdFUQ.png" }}
                        style={{ width: 200, height: 100
                         }}
                    />
                </View>
                <View style={{ width: 200, height: 100, backgroundColor: '#00f', flex: 1, margin: 10 }}></View>
                <View style={{ width: 200, height: 100, backgroundColor: '#003', flex: 1, margin: 10 }}></View>
                <View style={{ width: 200, height: 100, backgroundColor: '#c18', flex: 1, margin: 10 }}></View>
                <View style={{ width: 200, height: 100, backgroundColor: '#009', flex: 1, margin: 10 }}></View>
            </ScrollView>
        )

    }
}