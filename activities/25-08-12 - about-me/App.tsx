import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
// importing the required stuff for multiple screens
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// creating the stack gives us the tools we need to do navigation
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="SecondScreen" component={SecondScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

// moved our code to display the main screen into its own method
function HomeScreen({navigation}) {
    return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* creating instructions for the button to navigate to the other screen */}
      <Button title="Go to Second Screen" onPress={() => {navigation.navigate('SecondScreen')}} />
      <StatusBar style="auto" />
    </View>
  );
};

function SecondScreen({navigation}) {
  return (
  <View style={styles.container}>
    <Text>Open up App.tsx to start working on your app!</Text>
    <Button title="Go Back to Home Screen" onPress={() => {navigation.navigate('HomeScreen')}} />
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
