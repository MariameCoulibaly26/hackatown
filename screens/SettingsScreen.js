import React from 'react';
import {AsyncStorage, Alert, StyleSheet, View, TouchableOpacity, Text} from 'react-native';

import {nav} from '../utils'
import {activeTags} from '../constants/StoreKeys';
import Colors from '../constants/Colors';

export default class SettingsScreen extends React.Component {
	constructor(props){
		super(props);
		this.nav = nav.bind(this);
		const interests = ['biology', 'soccer', 'camping', 'AlbertaRoadtripSummer2020'];
		let tags = {};
		interests.map((t) => {tags[t] = true});
		this.state = {
			tags,
			disabledInterests: []
		}
	}

	componentDidMount() {

	}

	tagClickEventListener = (tagName) => {
		if (this.state.tags[tagName])
			this.setState(state => ({...state, tags: {...state.tags, [tagName]: false}}))
		else 
			this.setState(state => ({...state, tags: {...state.tags, [tagName]: true}}))
		Alert.alert(tagName);
	}

	async goToMeet() {
		await AsyncStorage.setItem(activeTags, this.state.activeTags);
		this.nav('MeetStack', 'FindMe')
	}

	renderTags = (tags) => {
		return tags.map((tag, key) => {
			let active = this.state.tags[tag];
		  return (
		    <TouchableOpacity key={key} style={!active ? styles.btnColor : [styles.btnColor, styles.activeTag]}
    			onPress={() => {this.tagClickEventListener(tag)}}>
		      <Text>{tag}</Text>
		    </TouchableOpacity> 
		  );
		})
	}
	render() {
		const mode = AsyncStorage.getItem('mode');
		const event = AsyncStorage.getItem('currentEventObj');
		if (mode == 2 && event)
		  	return <View style={styles.container}>
		  		<View style={styles.tagsContainer}>
			  		{this.renderTags(event.tags)}
			  	</View>
			  	<TouchableOpacity style={[styles.buttonContainer, styles.confirmButton]} onPress={this.goToMeet.bind(this)}>
	          		<Text style={styles.confirmText}>Confirm</Text>
        		</TouchableOpacity>
			</View>
		else
			return <View style={styles.container}>
				{this.renderTags(Object.keys(this.state.tags))}
			  	<TouchableOpacity style={[styles.buttonContainer, styles.confirmButton]} onPress={this.goToMeet}>
		          <Text style={styles.confirmText}>Confirm</Text>
		        </TouchableOpacity>
			</View>

	}
}

SettingsScreen.navigationOptions = {
  title: 'Topics',
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 40,
    padding: 15,
    backgroundColor:'#fff',
    alignItems: 'center'
  },
  tagsContainer: {
  	marginTop:10,
    flexWrap:'wrap'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    borderRadius:30,
    backgroundColor:'transparent',
    position: 'absolute',
    bottom: 0,
  },
  confirmButton: {
    width:300,
    backgroundColor: "#00b5ec",
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 19,
  },
  confirmText: {
    color: 'white',
    fontSize: 24,
  },
  btnColor: {
    padding:10,
    borderRadius:40,
    marginHorizontal:3,
    backgroundColor: "#eee",
    marginTop:5,
  },
  activeTag: {
  	backgroundColor: Colors.activeBackground
  }
})
