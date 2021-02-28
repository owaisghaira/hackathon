import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Dawercontent from './DrawerContent'
const homeStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
import Icon from 'react-native-vector-icons/Ionicons'

import AdminHome from '../Screens/AdminHome'
import CompanyList from '../Screens/admin/CompanyList'
import StudentList from '../Screens/admin/StudentList'

const mainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="adminhome"
    activeColor="#fff"
    // style={{ backgroundColor: '#009387' }}
  >
    <Tab.Screen
      name="adminhome"
      component={homeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="companylist"
      component={CompanyList}
      options={{
        tabBarLabel: 'Companies',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="podium-sharp" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="studentlist"
      component={StudentList}
      options={{
        tabBarLabel: 'Profiles',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="people" color={color} size={26} />
        ),
      }}
    />
    

  </Tab.Navigator>
)


const homeStackScreen = ({ navigation }) => (
  <homeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '700',
      color: '#fff'
    }
  }} >

    <homeStack.Screen name="adminhome" component={AdminHome}
      options={{
        title: 'Admin Dashboard',
        headerLeft: () => (
          <Icon.Button name='menu' backgroundColor='#009387'
            onPress={() => (navigation.openDrawer())}
          />)
      }}
    />
  </homeStack.Navigator>
)
const aboutStackScreen = ({ navigation }) => (
  <homeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '700',
      color: '#fff'
    }
  }} >

    <homeStack.Screen name="about" component={About}
      options={{
        title: 'About Us',
        headerLeft: () => (
          <Icon.Button name='menu' backgroundColor='#009387'
            onPress={() => (navigation.openDrawer())}
          />)
      }}
    />
  </homeStack.Navigator>
)

export default function AdminAppStack() {
  return (

    <Drawer.Navigator drawerContent={props => <Dawercontent {...props} />}>
      <Drawer.Screen name="adminhome" component={mainTabScreen} />
      {/* <Drawer.Screen name="about" component={aboutStackScreen} /> */}
    </Drawer.Navigator>

  )
}