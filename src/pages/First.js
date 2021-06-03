/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button} from 'react-native';

function First(props) {
    function navigateToPage() {
        props.navigation.navigate('SecondScreen');
    }
  return (
    <View>
      <Text>Hello First</Text>
      <Button title="Go to Second" onPress={navigateToPage} />
    </View>
  );
}

export default First;
