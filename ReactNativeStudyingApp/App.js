import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import SVC from './Components/scrollView_Component'
import Boxes from './Components/Boxes.js'

export default class ReactNativeStudyingApp extends Component {
  render() {
    return (
      <SafeAreaView>

        <ScrollView>

          <View>
            <Text style={styles.txt01}>Here it goes</Text>
            <View style={styles.sv}>

              <Boxes />

              <SVC time={'Palemiras'} ano={'2020'} cor={"green"} />
            </View>

            <View style={styles.sv}>

              <SVC time={'Palemiras'} ano={'2021'} cor={"green"} />
            </View>

            <View style={styles.sv}>

              <SVC time={'Palemiras'} ano={'2021'} cor={"green"} />
            </View>

          </View>

        </ScrollView>
      </SafeAreaView>
    )
  }
}

// export default function ReactNativeStudyingApp(){
//   return (
//     <View>
//       <View>
//       <Text>Palmeiras</Text>
//       <Text>Campeão Libertadores 2021</Text>
//     </View>
//     <View>
//     <Text>Palmeiras</Text>
//     <Text>Campeão Libertadores 2021</Text>
//   </View>
//   </View>
//   )
// };

const styles = StyleSheet.create({
  sv: {
    margin: 10
  },
  txt01: {
    color: 'blue',
    fontSize: 25,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
})


