import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Dimensions,
  AsyncStorage
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {currentEventObj} from '../constants/StoreKeys';

import {nav} from '../utils'

var {height, width} = Dimensions.get('window');

export default class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, title: "Hackatown 2020", location: [37, -122], locationAddress: "", color:"#FF69B4", image: require("../assets/images/meeting.png"),
         tags: ['Sustainable Development', 'IoT', 'Data Science', 'Python', 'React', 'C++', 'GenetecChallenge']} ,
      ]
    };
    this.nav = nav.bind(this)
  }

  async clickEventListener(item) {
    await AsyncStorage.setItem(currentEventObj, JSON.stringify(item));
    Alert.alert(item.title);
    this.nav('SettingsStack', 'Settings');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Choose an Event</Text>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          keyExtractor= {(item) => {
            return String(item.id);
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.clickEventListener(item)}}>
                <Image style={styles.cardImage} source={item.image} />
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    backgroundColor:"#E6E6E6",
  },

  /******** card **************/
  card:{
    width: width,
    height:150,
    flexDirection:'row',
    padding:20,

    justifyContent: 'center', 
    alignItems: 'center' 
  },
  cardImage:{
    height: 70,
    width: 70,
  },
  title:{
    fontSize:28,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold',
    marginLeft:40
  },
  header:{
    fontSize: 21,
    padding: 15,
    textAlign: 'center',
    color:"black",
  },
  icon:{
    height: 20,
    width: 20, 
  }
});     