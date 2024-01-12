import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AudioDetail, Home, } from '../../screens';
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
        name="AudioDetail"
        component={AudioDetail}
      />

    </Stack.Navigator>
  );
}

export default MainStack;
