import * as React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeMainScreen() {
    return (
        <View>
            <Text>Home!</Text>
        </View>
    );
}

const Stack = createStackNavigator();

export default function HomeScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeMainScreen} />
        </Stack.Navigator>
    );
}