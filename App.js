
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput style={styles.textInput} placeholder="Enter Goals here" />
        <Button title="Add goal" />
      </View>
      <View>
        <Text>List Of Goals</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: "#cccccc",
    height: '100%'
  },
  inputBox: {

    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 4,


  },
  textInput: {
    borderWidth: 1,
    borderColor: 'green',
    width: '80%',
    marginRight: 8,
  }
});
