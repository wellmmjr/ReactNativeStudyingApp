import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';


let cor
export default function (propsApp) {

    cor = propsApp.cor
    return (
        // myScroll
        <View >
            <View style={styles.sv1}>
                <Image
                    source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
                    style={{ width: 200, height: 200 }}
                />
            </View>
            <View>
                <View>
                    <Text >{propsApp.time}</Text>
                    <Text style={styles.sv1}>Campeão Libertadores {propsApp.ano}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sv1: {
        alignSelf: 'center',
        alignItems: 'center',
        width: '100%',
        color: cor,
        // height: '',
        backgroundColor: 'green'
    },
    txt01: {
        color: 'yellow'
    }
})