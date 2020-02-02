import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid
} from "react-native";

import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  PROVIDER_GOOGLE
} from "react-native-maps";

import * as Location from 'expo-location';
import MyLoc from './MyLocation'


// const LATITUDE = 29.95539;
// const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4224;

// Location.getLocationAsync = async () => {
//   let { status } = await Permissions.askAsync(Permissions.LOCATION);
//   if (status !== 'granted') {
//     this.setState({
//       errorMessage: 'Permission to access location was denied',
//     });
//   }

//   let location = await Location.getCurrentPositionAsync({});
//   console.log('location', location)
//   this.setState({ location });

//   LATITUDE = location.coords.latitude;
//   LONGITUDE = location.coords.longitude;
// };
export default class MeetMap extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			coords: {latitude: 45.504519, longitude: -73.612884},
		}
	}
	setLoc = (coords) => {
		console.log('coords', coords);
		
		this.setState({coords})
	}

	render() {
		return <MapView style={{flex: 1}}
	        initialRegion={{
	            ...this.state.coords,
	            latitudeDelta: 0.0122,
	            longitudeDelta: 0.0061,
	          }}
	    >
	    <MyLoc getLocation={this.setLoc} colorMark='blue'/>
	    {this.props.friend && <MyLoc coordinate={this.props.friend} colorMark='red' />}
	    </MapView>
	}
	
}

Location.requestPermissionsAsync();
