import React, {Component} from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { SearchBar} from 'react-native-elements';
class Searchs extends Component {
    render(){
        return(
            <View style={styles.container}>
                 <SearchBar
                  round       
                  platform="ios"
                  
                  placeholder='Search'
                  
                  searchIcon={{ size: 24 }}
                  lightTheme
                  />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 15,
        alignItems: 'flex-start'
    }
})

export default Searchs