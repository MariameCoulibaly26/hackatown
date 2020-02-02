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

import Modes from '../constants/Modes'


var {height, width} = Dimensions.get('window');

export default class Menu extends Component {
  static navigationOptions = {
  title: 'Encounters',
};

  constructor(props) {
    super(props);
    this.state = {
      data: Modes
    };
  }

  nav(stack, screen) {
    this.props.navigation.navigate(NavigationActions.navigate({
      routeName: stack,
      action: NavigationActions.navigate({routeName: screen})
    }));
  }

  async clickEventListener(item) {
    await AsyncStorage.setItem('mode', String(item.id));
    switch(item.id){
      case 1:
        this.nav('SettingsStack', 'Settings');
        break;
      case 2:
        this.props.navigation.navigate('Events');
        break;
      case 3:
        this.nav('SettingsStack', 'Settings');
        break;
      default:
        break;
    }
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Choose a mode</Text>
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
    //paddingHorizontal: 5,
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