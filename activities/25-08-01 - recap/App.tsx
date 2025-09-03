import { StatusBar } from "expo-status-bar";
import { useState } from "react";
// imports tell the app what we are going to use when building it
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  // declaring our variables, and creating the methods to set them
  const [hourlyRate, setHourlyRate] = useState("");
  const [hoursWorked, setHoursWorked] = useState("");

  return (
    <View style={styles.container}>
      <Text>Salary Calculator</Text>
      <Text>Please enter how many hours you worked this week:</Text>
      {/* TextInput allows us to get data from the user */}
      {/* onChangeText allows us to set instructions for when new text is entered */}
      <TextInput
        placeholder='Hours Worked'
        onChangeText={(newText) => setHoursWorked(newText)}
      />
      <Text>Please enter your hourly rate:</Text>
      <TextInput
        placeholder='Hourly Rate'
        onChangeText={(newText) => setHourlyRate(newText)}
      />
      {/* Buttons give the user a way to tell us that they have finished entering data
          we use parseInt to convert the text we got from the user into a number so we can do math
          onPress allows us to give instructions that will run when the user clicks on or taps the button.
      */}
      <Button
        title='Calculate Pay'
        onPress={() => {
          console.log(
            "Salary R" + parseInt(hoursWorked) * parseInt(hourlyRate)
          );
        }}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
