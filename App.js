import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA85U_FeK5Y-pHiMrKlC7qG4nTUr-At7to",
  authDomain: "react-native-crud-operations.firebaseapp.com",
  databaseURL: "https://react-native-crud-operations.firebaseio.com",
  projectId: "react-native-crud-operations",
  storageBucket: "react-native-crud-operations.appspot.com",
  messagingSenderId: "482585903087",
  appId: "1:482585903087:web:b0511cb108ecce02bdc01a",
  measurementId: "G-MT0JFHHE4D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends Component {

  constructor() {
    super()
  }

  addData() {
    firebase.database().ref('users/dummy6').set(
      {
        name: "Vikalp Chakravorty",
        age: 20,
        position: "Cricket Player"
      }
    ).then(() => {
      console.log("Inserted")
    }).catch((error) => {
        console.log(error);
      })
  }

  fetchData() {
    firebase.database().ref('users').on('value', data=>{
      console.log(data.toJSON())
    })
  }

  updateData() {
    firebase.database().ref('users/dummy4').update({
      position: "Node JS Backend Developer"
    })
    console.log("Updated the Data")
  }

  deleteData() {
    firebase.database().ref('users/dummy6').remove()
    console.log("Deleted the Data")
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} >
          <Text styles={styles.buttonText} onPress={this.addData.bind(this)}>Add Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={this.updateData.bind(this)}>Update Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={this.deleteData.bind(this)}>Delete Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={this.fetchData.bind(this)}>Fetch Data</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#0984e3',
    paddingVertical: 10,
    alignItems: 'center',
    height: 40,
    width: 300
  },
  buttonText: {
    textAlign: 'center',
    color: 'snow',
    fontWeight: '700'
  }
})
