import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, TextInput, Image, TouchableHighlight, Alert} from 'react-native';
  import{Button, Text,View, Container, Content, InputGroup, Input} from 'native-base';
var welome = new React.createClass({
  render() {
    return (
      <View style={styles.container}>
      <Image source = {require("./Background.png")} style = {{flex:1}}  resizeMode={Image.resizeMode.contain} >
        <View style = {styles.container} resizeMode = {Image.resizeMode.contain}>
         <Image source={require("./shpepic.png")} style={{width:220, height:110}} />
          <Text style={styles.welcome}>
            WELCOME!!
          </Text>
          <LogIn />
          <LoginButton/>
          <Image source = {require("./OR.png")} resizeMode = {Image.resizeMode.contain} style={{width:350, height:40, marginBottom:10}}/>
          <FacebookLoginButton/>
        </View>
      </Image>
      </View>
    );
  }
});