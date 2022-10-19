/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 * export ANDROID_HOME="/home/niaz/Android/Sdk/"
 * npx react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res
 * cd android
 * ./gradlew assembleDebug
 * @format
 */

import React from 'react';
import {Button, TextInput, Text, View} from 'react-native';

const App = () => {
  const [number, setNumber] = React.useState(0);
  const [type, setType] = React.useState('celcius');

  const transform = () => {
    if (type === 'celcius') {
      setNumber(number * 1.8 + 32);
      setType('fahrenheit');
    } else {
      setNumber((number - 32) / 1.8);
      setType('celcius');
    }
  };

  return (
    <View>
      <Text>Fahrenheit Calculator</Text>
      <Text>
        {number} {type}
      </Text>
      <TextInput
        keyboardType="numeric"
        value={number.toString()}
        // @ts-ignore
        onChangeText={setNumber}
      />
      <Button title="Transform" onPress={() => transform()} />
    </View>
  );
};

export default App;
