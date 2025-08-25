import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { TextInput } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen}/>
        <Stack.Screen name="SecondScreen" component={SecondScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

function MainScreen({navigation}) {
  // setting up to handle getting user input (creating a variable, and a method to set its value)
  const [userName, setUserName] = useState()  
  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* when new text is entered (onTextChange), assign that new text to the variable we created */}
      <TextInput placeholder='Please enter your name!' onChangeText={newText => setUserName(newText)}/>
      <Button title="Go to Second Screen" onPress={() => {navigation.navigate('SecondScreen', {
        nameSend: userName
      });
        console.log(`Name: ${userName}`)
      }}/>
      <StatusBar style="auto" />
    </View>
  );
};
// we add route over here as a new parameter for SecondScreen
function SecondScreen({navigation, route}) {
  // we then make a new variable called nameGet. this will get the name from the other screen,
  // by looking in the route (which handles moving between screens), and finding the parameter called nameSend.
  const nameGet = route.params.nameSend;
      return (
    <View style={styles.container}>
      {/* we then print it out */}
      <Text>Hello, {nameGet}!</Text>
      <Button title="Go to Main Screen" onPress={() => {navigation.navigate('MainScreen')}}/>
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
  },
});
