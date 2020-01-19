import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import MeetMap from '../components/MeetMap'

export default function FindMeScreen() {
  let {width, height} = Dimensions.get("window");
  console.log('dimensions', height, width);
  let containerStyle = {...styles.container, width: width, height: height};
  return (
    <View style={containerStyle}>
      <MeetMap style={styles.map} />
    </View>
  );
}

FindMeScreen.navigationOptions = {
  title: 'Meet your new human',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'flex-end'
  },
  map: {
    flex: 1
  }
});
