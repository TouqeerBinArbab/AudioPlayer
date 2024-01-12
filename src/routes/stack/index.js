import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddWords, Home, ImagePicker } from '../../screens';
import { screenOptions } from './options';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="ImagePicker"
        component={ImagePicker}
        options={{ headerTransparent: true, title: '', header: () => null }}
      />
      <Stack.Screen
        name="AddWords"
        component={AddWords}
        options={{ title: '', }}

      />
    </Stack.Navigator>
  );
}

export default MainStack;
