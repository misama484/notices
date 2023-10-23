import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { StyleSheet, Text, View, Image, } from 'react-native';

import Logo from "./assets/Logo.png"
import Home from"./screens/Home";
import Weather from "./components/Weather"


const Tab = createMaterialBottomTabNavigator();

function Menu(){
  return (
    <Tab.Navigator
      tabBarActivateBackgroundColor = '#fff'
      activateColor = '#95a5a6'
      inactiveColor="#95a5a6"
      barStyle={styles.navigationBar}
      >
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Icons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Weather"
            component={Weather}
            options={{
              tabBarLabel: 'Weather',
              tabBarIcon: ({ color }) => (
                <Icon name="weather-sunny" color={color} size={26} />
              ),
            }}
          />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: '#4630AB',
    shadowOpacity: 0,
    elevation: 0,

  },
  header: {
    height: 140,
    backgroundColor: '#4630AB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
})

export default function Navigation() {
  return (
    
    <NavigationContainer>

        <View style={styles.header}>
          <Image
          source={Logo}
          style={{width:220, height:90, marginTop: 50}}
          />
        </View>

      <Menu/>

    </NavigationContainer>
    
  );
};