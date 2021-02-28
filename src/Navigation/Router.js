import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StudentAppStack from './StudentAppStack'
import AdminAppStack from './AdminAppStack'
import CompanyAppStack from './CompanyAppStack'
import StartStack from './StartStack'
import { useSelector, useDispatch } from "react-redux";

const Router = () => {
    let { user, admin, company } = useSelector((state) => state.LoginReducer)

    return (
        <NavigationContainer>

            {admin.email ? <AdminAppStack /> : <StartStack />
                && user.email ? <StudentAppStack /> : <StartStack />
                    && company.email ? <CompanyAppStack /> : <StartStack />}
            {/* { <CompanyAppStack />} */}
            {/* <StudentAppStack /> */}
            {/* <AdminAppStack /> */}
        </NavigationContainer>
    )
}

export default Router
