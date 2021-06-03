
//LifeCycle Clean Up exercise/

import React, {useState, useEffect} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

const App = () => {
  const [helloFlag, setHelloFlag] = useState(true);

  function updateFlag() {
    setHelloFlag(!helloFlag);
  }

  return (
    <SafeAreaView>
      <Text>Hello Lifecycle</Text>
      <Button title="Up!" onPress={updateFlag} />
      {helloFlag && <Hello />}
    </SafeAreaView>
  );
};

export default App;

function Hello() {
  useEffect(() => {
    console.log('Merhaba Dünya!');

    return () => {
      console.log('Gidiyorum');
    };
  }, []);

  return (
    <View>
      <Text>I'm Hello Component</Text>
    </View>
  );
}
