import { StatusBar } from 'expo-status-bar';
// very important not to forget our imports :)
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function isEmpty (value) {
  // we want to return whether a input we give to this method is empty or not, there are 3 ways we check:
  return(
    // first we check if the object is null. if the object is null, it does NOT contain any values or information
    // therefore, the method would return that it IS empty (True)
    (value == null) ||
    // we then check whether the object has a "length" attribute (which tells us how long the data of that object is)
    // if the object has NO length, or if it does have a length, and that length is 0, we return that it IS empty
    (value.hasOwnProperty('length') && value.length == 0) ||
    // finally, we check the information about the object, to see again if it has a length, and whether
    // that length is == 0, if it IS, then the object is of course EMPTY :)
    (value.constructor == Object && Object.keys(value).length == 0)
  )
}

export default function App() {
  // 2 variables to hold our user input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // and now a variable to hold the error state
  const [Error, setError] = useState('');

  return (
    <View style={styles.container}>
      <Text>Greeter App v2.0!</Text>
      <Text style={styles.errorText}>{Error}</Text>
      <TextInput placeholder='Please enter your first name.' onChangeText={(newText) => setFirstName(newText)} />
      <TextInput placeholder='Please enter your last name.' onChangeText={(newText) => setLastName(newText)} />
      <Button title="Greet Me!" onPress={
        () => {
          // when the button is pressed, we check whether we have a value for both first name AND last name
          if ((isEmpty(firstName) == false) && (isEmpty(lastName) == false)) {
            // if there is a value, we greet the user!
            console.log(`Hello, ${firstName} ${lastName}!`);
            // and tell the application that there is no error
            setError("");
          } else {
            // otherwise, we set the error message we would like to display.
            setError("Please enter text into both text boxes!");
          }
        }
      }/>  
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, errorText: {
    color: '#ff0000',
    fontWeight: 'bold',
    fontSize: 30
  }
});
