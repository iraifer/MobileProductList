import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import HomePage from '../pages/Home';
import UserPage from '../pages/User';
import ProductPage from '../pages/Product';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
      
            <Stack.Navigator>
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="Products" component={ProductPage} />
                <Stack.Screen name="Add User" component={UserPage} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}
