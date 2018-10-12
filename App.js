import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar} from 'react-native-elements';
import Buttons from './components/dashboard/button';
import Searchs from './components/dashboard/search';
import Projects from './components/dashboard/projects';
// import SearchBar from 'react-native-search-bar'
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.innercontainer}>
        <View>
            < Buttons />
        </View>
          <View >
            < Searchs />
          </View>
            <View>
              < Projects />
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
    marginTop: '20%',
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '20%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E6E6FA'
    
  },

 
  innercontainer:{
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 20,
    paddingRight: 10,
  }
});

export default App;