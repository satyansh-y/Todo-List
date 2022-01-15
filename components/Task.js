import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const Task = (props) => {
    const [color,changeColor] = React.useState("blue");
    return (
        <View style={styles.items}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={{width:24,height:24,backgroundColor:color,opacity:0.4,borderRadius: 5,marginRight:15,}} 
                onPress={() => changeColor('red')}
                />

                <Text style = {styles.itemText}>{props.text}</Text>
            </View>
            

        </View>
    )
}

const styles = StyleSheet.create({
    items:{
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
        },

    square:{
        width:24,
        height:24,
        backgroundColor: 'blue',
        opacity:0.4,
        borderRadius: 5,
        marginRight:15,
    },
    itemText:{
        

    },
});

export default Task; 