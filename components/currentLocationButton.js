import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class CurrentLocationButton extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    // if props.cb is passed, use it, If not, console.log when cb() is called.
    const cb = this.props.cb ? this.props.cb : () => console.log('Callback function not passed to CurrentLocationButton!')
    // if props.bottom is passed, use it. If not, set bottom to 65.
    const bottom = this.props.bottom ? this.props.bottom : 65

    return (
      <View style={[styles.container, { top: HEIGHT - bottom }]}>
        <MaterialIcons
          name='my-location'
          color='#000000'
          size={25}
          onPress={() => { cb() }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 9,
    position: 'absolute',
    width: 45,
    height: 45,
    backgroundColor: '#fff',
    left: (WIDTH - 70),
    borderRadius: 50,
    shadowColor: '#000000',
    elevation: 7,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})
