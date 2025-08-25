import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
// import the packages needed for navigation
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// we create an object to handle the navigation
const Stack = createNativeStackNavigator();

export default function App() {
  // first we added return, because we need to display this back to the user
  return (
    /* then we created a navigation container, to hold all the navigation stuff */
    <NavigationContainer>
      {/* then we create a navigator object, to handle the actual navigation */}
      <Stack.Navigator>
        {/* finally, we create a screen, to handle displaying the home screen!
        we give each screen a name, and the component attribute points to the function we made */}
        <Stack.Screen name="Home" component={MainScreen}/>
        <Stack.Screen name="Screen Two" component={SecondScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// create a function to hold our main screen code
function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen of my App.{"\n"}</Text>
      <Text>Welcome to the Home Screen of my App.</Text>
      <StatusBar style="auto" />
      {/* navigation.navigate tells the app where it needs to go when the button is pressed */}
      <Button title="Go To Second Screen" onPress={() => {navigation.navigate('Screen Two')}}></Button>
    </View>
  );
}
// the second screen has the same stuff as the main screen, just with different text
function SecondScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Second Screen of my App.</Text>
      <StatusBar style="auto" />
      {/* navigation.navigate tells the app where it needs to go when the button is pressed */}
      <Button title="Go Back to Home Screen" onPress={() => {navigation.navigate('Home')}}></Button>
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
