import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

function Second(props) {
  console.log(props);

  function backToFirst() {
    props.navigation.goBack();
  }

  return (
    <SafeAreaView>
      <Text>Hello Second</Text>
      <Button title="Back to the Homepage" onPress={backToFirst} />
    </SafeAreaView>
  );
}

export default Second;
