/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

function Second(props) {
  console.log(props);

  const user = props.route.params.username;

  function backToFirst() {
    props.navigation.goBack();
  }

  return (
    <SafeAreaView>
      <Text>Hello Second</Text>
      <Text>Hello {user} </Text>
      <Button title="Back to the Homepage" onPress={backToFirst} />
    </SafeAreaView>
  );
}

export default Second;
