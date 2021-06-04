/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button} from 'react-native';

function First(props) {
  console.log(props);
    function navigateToPage() {
        props.navigation.navigate('SecondScreen', {username:'koray'});
    }
  return (
    <View>
      <Text>Hello First</Text>
      <Button title="Go to Second" onPress={navigateToPage} />
    </View>
  );
}

export default First;
