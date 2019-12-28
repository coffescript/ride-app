import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Constants from 'expo-constants'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

// import { MapView } from 'expo'

// components
import DestinationButton from '../../components/destinationButton'
import CurrentLocationButton from '../../components/currentLocationButton'
import Driver from '../../components/Driver'


export default class MapViewScreen extends Component {
    constructor(props){
      super(props)
      this.state = {
        region: null,
        errorMessage: null
      }
      this._getLocationAsync()
    }
  
    // componentWillMount(){
    //   // if(Platform.OS === 'android' && !Constants.isDevice){
    //   //   this.setState({
    //   //     errorMessage: console.log('Try again later')
    //   //   })
    //   // }
    // }
  
    _getLocationAsync = async () => {
      const {status} = await Permissions.askAsync(Permissions.LOCATION)
        if(status !== 'granted')
          console.log('Permission to access location was denied.')
      let location = await Location.getCurrentPositionAsync({enabledHighAccuracy: true})
      console.log(location)
      let region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.045
      }
      console.log('latitude is ' + location.coords.latitude.toString())
      console.log('longitude is ' + location.coords.longitude.toString())
      this.setState({region: region})
    }

    centerMap(){
      const {latitude, longitude, latitudeDelta, longitudeDelta} = this.state.region
      this.map.animateToRegion({ latitude, longitude, latitudeDelta, longitudeDelta })
    }
  
    render () {
      return (
        <View style={styles.container}>
          <DestinationButton />
          <CurrentLocationButton cb={() => {this.centerMap()}} />
          <MapView
            style={styles.mapView}
            initialRegion={this.state.region}
            showsUserLocation={true}
            showsCompass={true}
            rotateEnabled={false}
            ref={(map) => {this.map = map}}
            styles={{...StyleSheet.absoluteFillObject}}
          >
          <Driver driver={{uid: 'null', location: {latitude: 9.868806, longitude: -84.064265} }} />
          </MapView>
        </View>
      )
    }
  }

  //...StyleSheet.absoluteFillObject,
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    mapView: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    }
  })
  