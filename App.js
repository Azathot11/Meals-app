import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons} from '@expo/vector-icons'

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverViewScreen from "./screens/MealsOverView";
import MealsDetailScreen from "./screens/MealsDetailScreen";
import FavoriteScreen from "./components/FavoriteScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

const DrawerNavigation =()=>{
  return (
    <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#351401" },
      headerTintColor: "white",
      sceneContainerStyle: { backgroundColor: "#3f2f25" },
      drawerContentStyle:{ backgroundColor:'#351401' },
      drawerInactiveTintColor:'white',
      drawerActiveTintColor:'#e2e2e2'
      //cardStyle: { backgroundColor: "#3f2f25" },
    }}
    >
        <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title:'All Categories',
          drawerIcon:({size,color})=> <Ionicons name='list' color={color} size={size} />
        }}
        />
        <Drawer.Screen
        name='Favorites'
        component={FavoriteScreen}
        options={{
          drawerIcon:({size,color})=> <Ionicons name='star' color={color} size={size} />
        }}
        
        />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            cardStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCat"
            component={DrawerNavigation}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverViewScreen}
          />
        <Stack.Screen
         name='MealsDetails'
         component={MealsDetailScreen}
        
        />
        </Stack.Navigator>
        
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});


