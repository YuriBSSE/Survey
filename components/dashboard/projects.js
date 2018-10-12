import React, {Component} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';


class Projects extends Component {
    render(){
        return(
            <View style={styles.container}>
             <Text style={{fontSize: 20, color: '#5c00e6', padding: 5}}>View Projects</Text>
                <View style={styles.list}>
                
                {
                    list.map((l, i) => (
                    <ListItem
                        key={i}
                      
                        title={l.name}
                        subtitle={l.subtitle}
                    />
                    ))
             }
                 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    },
    list:{
        
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E6E6FA'
    }
})

const list = [
    {
      name: 'General',
     
      subtitle: 'Important'
    },
    {
      name: 'Lahore Projects',
      
      subtitle: 'Important'
    },
    {
        name: 'June Projects',
        
        subtitle: 'Important'
      },
    
  ]
export default Projects