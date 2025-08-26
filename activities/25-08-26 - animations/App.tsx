import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
// imports required for animations to work
import {useEffect, useRef} from 'react'
import {Animated} from 'react-native'
// create a new method that accepts properties to handle our animation
const FadeInView = (props) => {
  // create the actual animation object
  const fadeAnim = useRef(new Animated.Value(0)).current

  // set the properties of the animation
  useEffect(() => {
    // we are setting up the timing of the animation (how long it will take)
    Animated.timing(
      // first we tell it which animation we want to work with (the one we created)
      fadeAnim,
      {
        // toValue: 1 enables the animation (makes it visible)
        toValue: 1,
        // duration is how long in milliseconds (3000 is = 3 seconds)
        duration: 8000,
        // this is required for showing the animation on Android
        useNativeDriver: false
      }
      // we then say that the animation is ready to start now that we've configured it
    ).start();
    // and return the completed animation alongside its properties
  }, [fadeAnim])

  return(
    // here we specify that what we are returning is an animated view object
    <Animated.View style={{
      // making use of the properties we passed through to it earlier
      ...props.style,
      opacity: fadeAnim
    }}
    >
      {props.children}
    </Animated.View>
  )
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This app is to demonstrate animations!</Text>
      {/* everything inside of FadeInView will now fade in over 3 seconds, like we configured earlier */}
      <FadeInView>
        <Image style={styles.pictures} source={require('./images/cat.jpg')} />
      </FadeInView>
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
  pictures: {
    // height is how tall
    height: 300,
    // width is how long
    width: 300
  }
});
