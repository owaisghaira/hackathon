import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Dawercontent from './DrawerContent'
const homeStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
import Icon from 'react-native-vector-icons/Ionicons'

import CompanyHome from '../Screens/CompanyHome'
import CreateCompany from '../Screens/Company/CreateCompany'
import PostJobs from '../Screens/Company/PostJobs'
import StudentList from '../Screens/Company/StudentList'

const mainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="companyhome"
    activeColor="#fff"
    style={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="companyhome"
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
      name="createcompany"
      component={CreateCompany}
      options={{
        tabBarLabel: 'Create',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="create" color={color} size={26} />
        ),
      }}
    />
     <Tab.Screen
      name="postjobs"
      component={PostJobs}
      options={{
        tabBarLabel: 'PostJobs',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="download" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="studentlist"
      component={StudentList}
      options={{
        tabBarLabel: 'Students',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="person" color={color} size={26} />
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

    <homeStack.Screen name="companyhome" component={CompanyHome}
      options={{
        title: 'Company Dashboard',
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

    <homeStack.Screen name="createcompany" component={CreateCompany}
      options={{
        title: 'Company Profile',
        headerLeft: () => (
          <Icon.Button name='menu' backgroundColor='#009387'
            onPress={() => (navigation.openDrawer())}
          />)
      }}
    />
  </homeStack.Navigator>
)

export default function CompanyAppStack() {
  return (

    <Drawer.Navigator drawerContent={props => <Dawercontent {...props} />}>
      <Drawer.Screen name="companyhome" component={mainTabScreen} />
      <Drawer.Screen name="about" component={aboutStackScreen} />
    </Drawer.Navigator>

  )
}