import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

export default class Driver extends Component {
  constructor (props) {
    super(props)
    const driver = this.props.driver ? this.props.driver : {
      uid: 'noDriversPassed',
      location: { latitude: 0, longitude: 0 }
    }
    const coordinate = new MapView.AnimatedRegion({
      latitude: driver.location.latitude,
      longitude: driver.location.longitude,
      latitudeDelta: 0,
      longitudeDelta: 0
    })
    this.state = {
      driver: driver,
      coordinate: coordinate,
      bearing: 0
    }
  }

  render () {
    return (
      <MapView.Marker.Animated
        coordinate={this.state.coordinate}
        anchor={{ x: 0.35, y: 0.32 }} // center car.png image
        ref={marker => { this.marker = marker }}
        style={{ width: 50, height: 50 }}
      >
        <Image source={require('../assets/images/cars.png')} style={styles.iconCar} />
      </MapView.Marker.Animated>
    )
  }
}

const styles = StyleSheet.create({
  iconCar: {
    width: 32,
    height: 32
  }
})