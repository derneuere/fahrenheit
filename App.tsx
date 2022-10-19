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
import {Button, Pressable, Text, View} from 'react-native';

const NumberButton = (props: {number: number; setCalculationNumber: any}) => {
  return (
    <Pressable
      style={{
        width: 100,
        padding: 5,
        borderRadius: 5,
        margin: 5,
        backgroundColor: 'lightblue',
        alignItems: 'center',
      }}
      onPress={() => props.setCalculationNumber(props.number)}>
      <Text style={{color: 'white'}}>{props.number}</Text>
    </Pressable>
  );
};

const OperationButton = (props: {operation: string; setOperation: any}) => {
  return (
    <Pressable
      style={{
        width: 100,
        padding: 5,
        borderRadius: 5,
        margin: 5,
        backgroundColor: 'lightblue',
        alignItems: 'center',
      }}
      onPress={() => props.setOperation(props.operation)}>
      <Text style={{color: 'white'}}>{props.operation}</Text>
    </Pressable>
  );
};

const App = () => {
  // This App implements a calculator
  const [result, setResult] = React.useState(0);
  const [number, setNumber] = React.useState(0);
  const [operation, setOperation] = React.useState('');

  const setCalculationNumber = (numberInput: number) => {
    if (operation == '') {
      setResult(Number(result.toString() + numberInput.toString()));
    } else {
      setNumber(Number(number.toString() + numberInput.toString()));
    }
  };

  const calculate = () => {
    setResult(eval(result + operation + number));
  };

  const clear = () => {
    setNumber(0);
  };

  const clearAll = () => {
    setResult(0);
    setNumber(0);
    setOperation('');
  };

  return (
    <View>
      <Text>Calculator</Text>
      <Text>Result: {result}</Text>
      <Text>
        Calculation: {result} {operation} {number}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <NumberButton number={1} setCalculationNumber={setCalculationNumber} />
        <NumberButton number={2} setCalculationNumber={setCalculationNumber} />
        <NumberButton number={3} setCalculationNumber={setCalculationNumber} />
        <OperationButton operation="+" setOperation={setOperation} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <NumberButton number={4} setCalculationNumber={setCalculationNumber} />
        <NumberButton number={5} setCalculationNumber={setCalculationNumber} />
        <NumberButton number={6} setCalculationNumber={setCalculationNumber} />
        <OperationButton operation="-" setOperation={setOperation} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <NumberButton number={7} setCalculationNumber={setCalculationNumber} />
        <NumberButton number={8} setCalculationNumber={setCalculationNumber} />
        <NumberButton number={9} setCalculationNumber={setCalculationNumber} />
        <OperationButton operation="*" setOperation={setOperation} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <NumberButton number={0} setCalculationNumber={setCalculationNumber} />
        <Pressable
          style={{
            width: 100,
            padding: 5,
            borderRadius: 5,
            margin: 5,
            backgroundColor: 'lightblue',
            alignItems: 'center',
          }}
          onPress={() => calculate()}>
          <Text style={{color: 'white'}}>Result</Text>
        </Pressable>
        <Pressable
          style={{
            width: 100,
            padding: 5,
            borderRadius: 5,
            margin: 5,
            backgroundColor: 'lightblue',
            alignItems: 'center',
          }}
          onPress={() => clear()}>
          <Text style={{color: 'white'}}>C</Text>
        </Pressable>
        <OperationButton operation="/" setOperation={setOperation} />
      </View>
      <Button title="CE" onPress={() => clearAll()} />
    </View>
  );
};

export default App;
