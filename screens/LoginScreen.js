import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

import * as firebase from 'firebase'
import firebaseConfig from '../constants/FirebaseConfig'

var db = firebase.firestore();

export default class Signup extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  constructor(props) {
    super(props);
    this.state = { 
      userId: '',
      email: '',
      password: '',
      password_confirm: '',
      error: null,
      authSubscription: null,
      isLoading: true,
      showPass: true,
      press: false,
    };
  }

  _googleSignIn(){
    
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  }

 _signInUser() {

    this.setState({
      isLoading: true,
    });

    var email = this.state.email
    var password = this.state.password

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({
          isLoading: false,
        });
      
      this._signInAsync()

      })
      .catch((error) => {

        this.setState({
          isLoading: false,
        });

        var errorCode = error.code;
        var errorMessage = error.message;
        
        if (errorCode === 'auth/wrong-password') {
          alert('Mot de passe Incorrect.');
        }    
        if (errorCode === 'auth/user-not-found') {
          const message = "L'utilisateur " + email + " n'existe pas. Assurez vous que votre adresse est bien renseigné. Si cela persiste, contactez INVESTIV.";
          alert(message)
        }      
        if (errorCode === 'auth/user-disabled') {
          const message = `Ce compte a été désactivé. Veillez contacter l'administrateur de votre système svp.`;
          alert(message)
        }
      });
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  onClickListener = (viewId) => {
    if (viewId === 'login'){
      this._loginUser()
    } else {
      this.props.navigation.navigate('SignupScreen')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bgImage} source={{ uri: "https://lorempixel.com/900/1400/nightlife/8/" }}/>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/circled-user-male-skin-type-3.png'}}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/flat_round/40/000000/secured-letter.png'}}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/password.png'}}/>
        </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login with Google</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text style={styles.btnText}>Have an account?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnByRegister: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:20,
    width:300,
    backgroundColor:'transparent'
  },
  loginButton: {
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
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText:{
    color:"white",
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  textByRegister:{
    color:"white",
    fontWeight:'bold',
    textAlign:'center',

    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
});