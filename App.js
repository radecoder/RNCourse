import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[enterText, setEnterText]= useState('');
  const[listGoal, setListGoal]= useState([]);

  function enterGoalHandle(enterGoal){
    setEnterText(enterGoal);    
  }
  function listGoalHandle(){
    // console.log(enterText);
    setListGoal(currentGoal => [...currentGoal, enterText]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput style={styles.textInput} placeholder="Enter Goals here" onChangeText={enterGoalHandle} />
        <Button title="Add goal" onPress={listGoalHandle} />
      </View>
      <View style={styles.listgoals}>
        {listGoal.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 50,
    paddingHorizontal:16,
  },
  inputBox: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center",
    marginBottom:24,
    borderBottomWidth:1,
    borderBlockColor:'#cccccc',
    
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'green',
    width: '70%',
    marginRight: 8,
    padding:8,
  },
  listgoals:{
    flex:3,
   }
});
