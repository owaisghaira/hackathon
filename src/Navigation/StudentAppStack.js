import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Dawercontent from './DrawerContent'
const homeStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
import Icon from 'react-native-vector-icons/Ionicons'

import StudentHome from '../Screens/StudentHome'
import CreateProfile from '../Screens/Students/createProfile'
import AvailableJobs from '../Screens/Students/AvailableJobs'

const mainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="home"
    activeColor="#fff"
    style={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="studenthome"
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
      name="createprofile"
      component={CreateProfile}
      options={{
        tabBarLabel: 'profile',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="document-sharp" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="availablejobs"
      component={AvailableJobs}
      options={{
        tabBarLabel: 'jobs',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="briefcase-sharp" color={color} size={26} />
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

    <homeStack.Screen name="studenthome" component={StudentHome}
      options={{
        title: 'Student Dashboard',
        headerLeft: () => (
          <Icon.Button name='menu' backgroundColor='#009387'
            onPress={() => (navigation.openDrawer())}
          />)
      }}
    />
  </homeStack.Navigator>
)
// const aboutStackScreen = ({ navigation }) => (
//   <homeStack.Navigator screenOptions={{
//     headerStyle: {
//       backgroundColor: '#009387',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: '700',
//       color: '#fff'
//     }
//   }} >

//     <homeStack.Screen name="about" component={About}
//       options={{
//         title: 'About Us',
//         headerLeft: () => (
//           <Icon.Button name='menu' backgroundColor='#009387'
//             onPress={() => (navigation.openDrawer())}
//           />)
//       }}
//     />
//   </homeStack.Navigator>
// )

export default function StudentAppStack() {
  return (

    <Drawer.Navigator drawerContent={props => <Dawercontent {...props} />}>
      <Drawer.Screen name="home" component={mainTabScreen} />
      {/* <Drawer.Screen name="about" component={aboutStackScreen} /> */}
    </Drawer.Navigator>

  )
}
