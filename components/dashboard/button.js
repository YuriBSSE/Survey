import React, {Component} from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

class Buttons extends Component {
    render(){
        return(
            <View>
                    <View style={styles.container}>
                <Button 
                          icon={
                                <Icon
                                    
                                    size={25}
                                    color='white'
                                  />
                  }
                  title='New Survey'
                  buttonStyle={{
                    backgroundColor: "rgba(92, 99,216, 1)",
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5
                  }}
                />
                
               
              </View>
              <View style={styles.avatar}>
              <Avatar
                        size="medium"
                        source={{uri: "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/28795639_1654595601284661_1425716776074227030_n.jpg?_nc_cat=110&oh=907f6a1a6d70b62411ff3001b1c61b36&oe=5C5B9029"}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        rounded
                        
                />
              </View>
             
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        
        alignItems: 'flex-start',
        
        
    },
    avatar:{
        alignItems: 'flex-end',
    
    }
})

export default Buttons