import React, { useState, useEffect } from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import {
  NikishkinTestWork,
  NikishkinTestWorkEvent,
  EventType,
} from 'react-native-nikishkin-test-work';

export default function App() {
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    NikishkinTestWorkEvent.addListener(EventType.onChangeText, (res) => {
      setResult(res);
    });
    setTimeout(() => {
      NikishkinTestWork.changeText('default');
    }, 3000);
    return () => {
      NikishkinTestWorkEvent.removeAllListeners(EventType.onChangeText);
    };
  }, []);

  const changeText = () => {
    NikishkinTestWork.changeText(result + 'newApp');
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Button title={'Button'} onPress={changeText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
