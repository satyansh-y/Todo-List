import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Button } from 'react-native';
//import { KeyboardAvoidingView, TextInput } from 'react-native-web';
import Task from './components/Task';
import {TouchableOpacity} from 'react-native';

export default function App() {
  const [task, setTask] = React.useState();
  const [taskItems, setTaskItems]= React.useState([]);
  
  const handleAddTask = () =>{
    setTaskItems([task,...taskItems])
    setTask(null);
  }
  return (
    

    <View style={styles.container}>
      
      {/* Current Objectives*/}
      <View style = {styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Objectives</Text>

        <View style = {styles.items}>
          {/*This contains all tasks*/}
          <Task text = {'test 1'}/>
        </View>
        
        <View style={styles.setter}>
          <TextInput
          style={styles.input}
          value={task}
          placeholder="Enter Goal"
          onChangeText={text=> setTask(text)}
          />
          {/*Button*/}
          <View style={styles.button}>
            <Button
            onPress={() => handleAddTask()}
            title= "Enter"
            opacity= "0.5"
            backgroundColor= "white"
            />
          </View>
        </View>
      </View>
      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E8E5FD',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  tasksWrapper: {
    paddingTop: 80,
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sectionTitle:  {
    fontSize: 32,
    flex:1,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 20,
    flex:1
  },
  setter:{
    flexDirection:'row',
    flex: 1,
    justifyContent:'space-between',
    
  },
  input:{
    flex:15,
    marginLeft:4,
    paddingLeft:6,
    borderColor:'black',
    backgroundColor:"#FFEDED",
    borderWidth: 2,
    borderRadius:100
  },
  button:{
   flex:1,
   backgroundColor:'#FFEDED',
   opacity:20,
   borderWidth: 1,
   borderRadius:200,
   margin:3,

  },

  
});