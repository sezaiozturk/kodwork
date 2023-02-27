import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import details from "../pages/details";
import jobs from "../pages/jobs";
import favorites from '../pages/favorites'
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store } from '../context/store'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export default Router = () => {
  const options = (title) => {
    return (
      { title: title, headerTintColor: '#EB455F' }
    )
  }
  const JobsStackScreens = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="jobsScreen" component={jobs} options={options('Jobs')} />
        <Stack.Screen name="detailsScreen" component={details} options={options('Implementation Consultant')} />
      </Stack.Navigator>
    )
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="jobsStack" component={JobsStackScreens} options={{ headerShown: false }} />
          <Drawer.Screen name="favoritesScreen" component={favorites} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}