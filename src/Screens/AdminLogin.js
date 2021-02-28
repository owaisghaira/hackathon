import React,{useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import { useSelector,useDispatch } from "react-redux";
import { admin_sign_in } from "../Store/Actions/Action";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('admin@gmail.com');
    const [password, setPassword] = useState('123456');
    const dispatch = useDispatch()
    // console.log(transaction)
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{ uri: 'https://img.icons8.com/bubbles/2x/admin-settings-male.png' }} />
            <Text style={styles.text}>Admin Login</Text>
            <FormInput
                labelValue={email}
                // onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Sign In"   
            onPress={() => dispatch(admin_sign_in({email,password}))}
            />
            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('signup')}>
                <Text style={styles.navButtonText}>
                    Don't have an acount? Create here </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 30,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
})

