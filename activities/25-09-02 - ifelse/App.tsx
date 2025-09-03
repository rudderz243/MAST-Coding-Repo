import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // create a variable and a method to hold the entered number
  const [enteredNumber, setEnteredNumber] = useState('');
  const [evenOdd, setEvenOdd] = useState('');

  return (
    <View style={styles.container}>
      {/* this text is used as the heading for the application */}
      <Text>Odd or Even Checker</Text>
      {/* this text input gets the number from the user, and assigns it to the variable we created earlier */}
      <TextInput placeholder='Please enter a number.' onChangeText={newText => setEnteredNumber(newText)}/>
      {/* when pressed, this button will check whether the number entered was even/odd */}
      <Button title="Check Number" onPress={() => {if (enteredNumber%2 == 0)
                                                  {setEvenOdd("Even")}
                                                  else
                                                  {setEvenOdd("Odd")}
                                                  }}/>
      <Text>The number you entered was {evenOdd}</Text>
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
});
