import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Pressable, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import Task from './components/Task';

export default function App() {
  //const [text, onChangeText] = React.useState(null);
  const [task, setTask] = React.useState();
  const [taskItems, setTaskItems]= React.useState([]);
  
  const handleAddTask = () =>{
    setTaskItems([task,...taskItems])
    setTask(null);
  }

  /*const comleteTask = (index) => {
    let itemsCopy =[...taskItems];
    itempsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  */

  return (
    /*Main Container*/ 
    <View style={styles.container}>
      {/*Main Title*/}
      <Text style={styles.title}>Slashbox</Text>
      {/*Header Tabs*
      <View style={styles.header}>
        <Pressable style={styles.todo}>
          <Text style={{fontSize:30}}> TODO</Text>
        </Pressable>
        <Pressable style={styles.finished}>
          <Text style={{fontSize:30}}> Finished</Text>
        </Pressable>
      </View>*/}
      {/*Input box and Entered Content*/}
      <View style={styles.content}>
        
        {/*Entered Goals*/}
        <View style={styles.list}>
          {
            taskItems.map((item, index)=>{ 
              for(let i=0; i<taskItems.length; i++){
                return <Task key={i} text={item}/>
              }  
            })
          }
        
        </View>
        {/*Input Box*/}
        <KeyboardAvoidingView
          behavior= {Platform.OS === 'ios' ? "padding" : "height"}
          style={styles.setter}>
          
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
          
        </KeyboardAvoidingView>
      </View>

      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E8E5FD',
    alignItems: 'center'
  },
  title: {
    paddingTop:40,
    fontSize: 50,
    color: '#0E0704',
    opacity:0.5
    //backgroundColor:'red'
  },
  header:{
    flex:1,
    //backgroundColor:'green',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  todo:{
    flex:1,
    alignSelf:'stretch',
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',

  },
  finished:{
    flex:1,
    alignSelf:'stretch',
    //backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content:{
    flexDirection:'column',
    flex:20,
    alignSelf:'stretch',
    paddingTop:20,
    //backgroundColor: 'yellow'
  },
  setter:{
    flexDirection:'row',
    flex: 1,
    bottom:40,
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
   flex:3,
   backgroundColor:'#FFEDED',
   opacity:20,
   borderWidth: 1,
   borderRadius:200,
   margin:3,

  },

  buttonText:{

  },

  list:{
    padding: 20,
    flex:15,
    alignItems:"center"

  }
});
