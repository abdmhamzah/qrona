import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import store from "./store";
import Home from "./screens/Home";
import Map from "./screens/Map";
import Profile from "./screens/Profile";
import HotPlace from "./screens/HotPlace";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CheckIn from "./screens/CheckIn";
import CheckOut from "./screens/CheckOut";
import AddHotPlace from "./screens/AddHotPlace";
import QrHotplace from "./screens/QrHotplace";
import Protocol from "./screens/Protocol";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Check In" component={CheckIn} />
      <Stack.Screen name="Check Out" component={CheckOut} />
      <Stack.Screen name="Add Hotplace" component={AddHotPlace} />
      <Stack.Screen name="Protocol" component={Protocol} />
    </Stack.Navigator>
  );
}

function HotPlaceStack() {
  return (
    <Stack.Navigator
      initialRouteName="HotPlace"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HotPlace" component={HotPlace} />
      <Stack.Screen name="Add Hotplace" component={AddHotPlace} />
      <Stack.Screen name="QR Hotplace" component={QrHotplace} />
    </Stack.Navigator>
  );
}

function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user";
          } else if (route.name === "Crowd Point") {
            iconName = focused ? "map-marker" : "map-marker";
          } else if (route.name === "Map") {
            iconName = focused ? "map" : "map";
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#B3EFDD",
        },
        activeTintColor: "#097C54",
        inactiveTintColor: "#00B979",
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Crowd Point" component={HotPlaceStack} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="TabScreen" component={TabScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
