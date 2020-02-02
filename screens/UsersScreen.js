import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  AsyncStorage
} from 'react-native';

import * as firebase from 'firebase'
import { firebaseConfig } from '../constants/FirebaseConfig'
var db = firebase.firestore();

export default class Users extends Component {

  constructor(props) {
    super(props);
    let imgUser = require("../assets/images/avatar.png");

    

    this.state = {
      data: [
        {id: 1, color:"#FF4500", icon: imgUser, name: "Erwin", tags: ['Histoire médiévale', 'React-native', 'Soccer'],
          location: {latitude: 45.504519, longitude: -73.612884}},
        {id: 2, color:"#87CEEB", icon: imgUser, name: "Wilfried", tags: ['Arlequin', 'Tennis', 'Electronique'],
          location: {latitude: 45.504645, longitude: -73.614230}},
      ],
    };
  }
  cardClickEventListener = (item) => {
    Alert.alert(
      'Encounters',
      'Do you want to meet with "' + item.name + '"?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.sendNotif(item)},
      ],
      {cancelable: true},
    );
  }

  async sendNotif(user) {
    await AsyncStorage.setItem('friend', JSON.stringify(user));
    setTimeout(() => this.props.navigation.navigate('FindMe'), 3000);
  }

  tagClickEventListener = (tagName) => {
    Alert.alert(tagName);
  }

  renderTags = (item) =>{
    return item.tags.map((tag, key) => {
      return (
        <TouchableOpacity key={String(key)} style={styles.btnColor} onPress={() => {this.tagClickEventListener(tag)}}>
          <Text>{tag}</Text>
        </TouchableOpacity> 
      );
    })
  }

  getData(){
    if (!this.state.name_address || !this.state.name_address.trim()) return this.state.data
    let tagged = this.state.data.filter(d => d.tags.some(t => t.indexOf(this.state.name_address) > -1));
    let named = this.state.data.filter(d => d.name.indexOf(this.state.name_address) > -1);
    let tous = tagged.concat(named);
    return tous.filter((d, i) => i == tous.indexOf(d))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/search/androidL/100/000000'}}/>
            <TextInput style={styles.inputs}
              ref={'txtSearch'}
              placeholder="Search"
              underlineColorAndroid='transparent'
              onChangeText={(name_address) => this.setState({name_address})}/>
          </View>
        </View>

        <FlatList 
          style={styles.notificationList}
          data={this.getData()}
          keyExtractor= {(item) => {
            return String(item.id);
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {borderColor:item.color}]} onPress={() => {this.cardClickEventListener(item)}}>
                <View style={styles.cardContent}>
                  <Image style={[styles.image, styles.imageContent]} source={item.icon}/>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={[styles.cardContent, styles.tagsContent]}>
                  {this.renderTags(item)}
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}


Users.navigationOptions = {
  title: 'Connect with people',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  formContent:{
    flexDirection: 'row',
    marginTop:30,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:45,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    margin:10,
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center'
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  notificationList:{
    marginTop:20,
    padding:10,
  },
  card: {
    height:null,
    paddingTop:10,
    paddingBottom:10,
    marginTop:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderTopWidth:40,
    marginBottom:20,
  },
  cardContent:{
    flexDirection:'row',
    marginLeft:10, 
  },
  imageContent:{
    marginTop:-40,
  },
  tagsContent:{
    marginTop:10,
    flexWrap:'wrap'
  },
  image:{
    width:60,
    height:60,
    borderRadius:30,
  },
  name:{
    fontSize:20,
    fontWeight: 'bold',
    marginLeft:10,
    alignSelf: 'center'
  },
  btnColor: {
    padding:10,
    borderRadius:40,
    marginHorizontal:3,
    backgroundColor: "#eee",
    marginTop:5,
  },
});