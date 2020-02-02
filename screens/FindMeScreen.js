import React from 'react';
import { View, StyleSheet, Dimensions, AsyncStorage} from 'react-native';

import MeetMap from '../components/MeetMap'


export default class FindMeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount() {
    this.loadData()
  }
  async loadData(){
    let friend = await AsyncStorage.getItem('friend');
    console.log('friend', friend);
    if (friend) friend = JSON.parse(friend);
    this.setState({friend})
  }
  render () {
    let {width, height} = Dimensions.get("window");
    let {friend} = this.state;
    console.log('dimensions', height, width);
    let containerStyle = {...styles.container, width: width, height: height};
    return (
      <View style={containerStyle}>
        <MeetMap style={styles.map} friend={friend && friend.location}/>
      </View>
    );
  }
  
}

FindMeScreen.navigationOptions = {
  title: 'Meet Humans !',
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
