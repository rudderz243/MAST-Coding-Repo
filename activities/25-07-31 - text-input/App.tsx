import { StatusBar } from 'expo-status-bar';
// useState needs to be imported in order to handle variables and functions
import { useState } from 'react';
// ensure that every component you use gets IMPORTED
// in this case, we need to make sure that TextInput, and Button, are imported
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // we do this to create a new variable, and associate a function with it
  // in this case, the variable is firstName, and the method/function is setFirstName
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  return (
    <View style={styles.container}>
      <Text>Greeter App</Text>
      <Text>Please enter your first name:</Text>
      {/* 
          the "placeholder" for TextInput determines what the input box will say by default
          it is similar to the "hint" text found in Android Studio.
       */}
       {/* 
          onChangeText allows us to give the app instructions on what to do whenever the text changes
          first, we take the new, changed text and save it in "newText" temporairaly (ignore spelling)
          then, we call our methods we created (to change the value in the variable), to set the variable to the new text
       */}
      <TextInput placeholder='First Name' onChangeText={newText => setFirstName(newText)}></TextInput>
      <Text>Please enter your last name:</Text>
      <TextInput placeholder='Last Name' onChangeText={newText => setLastName(newText)}></TextInput>
      <Button title='Greet Me!' onPress={() => {console.log('First Name: ' + firstName + ' Last Name: ' + lastName)}}/>
      {/*
          "title" works like "placeholder", it determines what text the button will display.
          "onPress" allows us to give the button instructions to do when the button is pressed
          in this case we say () because we're not expecting any input, as its a button
          then we do => { } to give it the actual instructions
          console.log allows us to print out to the terminal. we use this to print the values in the variables
      */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {

  }
});
