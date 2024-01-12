import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './stack';

function AppStack() {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
}

export default AppStack;