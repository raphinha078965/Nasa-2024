import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Explorar from "../pages/explore.js";
import Soil from "../pages/solo.js";
import Weather from "../pages/clima.js";
import Vegetation from "../pages/veg.js";
import Desforestation from "../pages/desma.js";
import Forecast from '../pages/check.js';
import Tech from '../pages/tech.js';


export default function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Explore"
            component={Explorar}
            options={{ headerShown: true, headerStyle: { backgroundColor: "#42591E" } }}
          />
          <Stack.Screen
            name="Soil"
            component={Soil}
            options={{ headerShown: true, headerStyle: { backgroundColor: "#42591E" }, headerBackButtonMenuEnabled: true }}
          />
          <Stack.Screen
            name="Weather"
            component={Weather}
            options={{ headerShown: true, headerStyle: { backgroundColor: "#42591E" }, headerBackButtonMenuEnabled: true }}
          />
          <Stack.Screen
            name="Vegetation"
            component={Vegetation}
            options={{ headerShown: true, headerStyle: { backgroundColor: "#42591E" }, headerBackButtonMenuEnabled: true }}
          />
          <Stack.Screen
            name="Desforestation"
            component={Desforestation}
            options={{ headerShown: true, headerStyle: { backgroundColor: "#42591E" }, headerBackButtonMenuEnabled: true }}
          />
          <Stack.Screen
            name="Forecast"
            component={Forecast}
            options={{ headerShown: true, headerStyle: { backgroundColor: "#42591E" }, headerBackButtonMenuEnabled: true }}
          />
          <Stack.Screen
            name="Tech"
            component={Tech}
            options={{ headerShown: true, headerStyle: { backgroundColor: "#42591E" }, headerBackButtonMenuEnabled: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }