import React, {useState, useEffect} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(100);

useEffect(() => { 
console.log("number updated");
}, [number]);

useEffect(() => { 
  console.log("count updated");
  }, [counter]);

  return (
    <SafeAreaView>
      <Text>Hello Lifecycle</Text>
      <Button title="Up!" onPress={() => setNumber(number + 1)} />
      <Button title="CountUp!" onPress={() => setCounter(counter + 100)} />
    </SafeAreaView>
  );
};

export default App;
