import { StatusBar } from 'expo-status-bar';
// Don't forget to import Image, otherwise it'll be red :)
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Image style={styles.pictures} source={require('./images/cat1.jpg')}/>
      <Image style={styles.pictures} source={require('./images/cat2.jpg')}/>
      <Image style={styles.pictures} source={require('./images/cat3.jpg')}/>
      <Image style={styles.pictures} source={require('./images/cat4.jpg')}/>
      <Image style={styles.pictures} source={require('./images/cat5.jpg')}/>
      {/* style lets us tell it which stylesheet to use, and source tells it where the image is 
          we need to create a stylesheet in order to control how large the image will be,
          otherwise the image will be the size of the screen */}
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
  // width is how LONG, height is how TALL
  pictures: {
    width: 300,
    height: 200
  }
});
