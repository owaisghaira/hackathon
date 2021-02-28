import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StartScreen from '../Screens/Start'
import AdminLogin from '../Screens/AdminLogin'
import StudentLogin from '../Screens/StudentLogin'
import StudentSugnUp from '../Screens/StudentSignUp'
import CompanyLogin from '../Screens/CompanyLogin'
import CompanySignUp from '../Screens/CompanySignUp'

const Stack = createStackNavigator();
export default function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="start" component={StartScreen} options={{ title: 'Login' }} options={{ header: () => null }} />
            <Stack.Screen name="adminlogin" component={AdminLogin} options={{ title: 'Login' }} options={{ header: () => null }} />
            <Stack.Screen name="studentlogin" component={StudentLogin} options={{ title: 'Login' }} options={{ header: () => null }} />
            <Stack.Screen name="companylogin" component={CompanyLogin} options={{ title: 'Login' }} options={{ header: () => null }} />
            <Stack.Screen name="companysignup" component={CompanySignUp} options={{ title: 'Login' }} options={{ header: () => null }} />
            <Stack.Screen name="studentsignup" component={StudentSugnUp} options={{ title: 'Login' }} options={{ header: () => null }} />
        </Stack.Navigator>
    )
}
