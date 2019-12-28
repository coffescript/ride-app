import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

// components
import MapViewScreen from './screens/mapView/mapViewScreen'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={styles.container}>
        <MapViewScreen />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
