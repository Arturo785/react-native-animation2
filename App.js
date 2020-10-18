import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createSharedElementStackNavigator} from "react-navigation-shared-element"
import CarsList from './src/screens/CarsList';
import CarsDetails from './src/screens/CarsDetails';

const Stack = createSharedElementStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="carsList"
            >
                <Stack.Screen name="carsList" component={CarsList} />
                <Stack.Screen name="carDetails" component={CarsDetails} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({

})
