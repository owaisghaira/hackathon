import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import FormInput from '../../components/Input'
import FormButton from '../../components/FormButton'
import { windowHeight } from '../../../utiles/Dimentions';
import { useDispatch} from "react-redux";
import database from '@react-native-firebase/database';

const CreateCompany = () => {
    const dispatch = useDispatch()
    let [company, setCompany] = useState({ companyName: '', industry: '', regNo: '', address: '', city: '', contact: '' })
    const addCompany = () => {
        if (company.companyname === '' || company.industry === '') {
            alert("Fill Complete Form")
        }
        else {
            // console.log(company)
            database().ref('/').child("company").push({ ...company })
                .then(() => {
                    alert('added successful')
                    // dispatch(donor_data())
                    clr();
                }).catch((error) => {
                    alert(error)
                });
        }

    }
    const clr = () => {
        setCompany({ companyName: '', industry: '', regNo: '', address: '', city: '', contact: '' })

    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>Company Profile</Text>
                <FormInput
                    labelValue={company.companyName}
                    onChangeText={(e) => setCompany({ ...company, companyName: e })}
                    placeholderText="Company Name"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={company.industry}
                    onChangeText={(e) => setCompany({ ...company, industry: e })}
                    placeholderText="Industry"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={company.regNo}
                    onChangeText={(e) => setCompany({ ...company, regNo: e })}
                    placeholderText="Registration No."
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={company.address}
                    onChangeText={(e) => setCompany({ ...company, address: e })}
                    placeholderText="Address"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={company.city}
                    onChangeText={(e) => setCompany({ ...company, city: e })}
                    placeholderText="City"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={company.contact}
                    onChangeText={(e) => setCompany({ ...company, contact: e })}
                    placeholderText="Contact"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TouchableOpacity   style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Add Company</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

export default CreateCompany

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 30,
        color: '#051d5f',
    },
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#009387',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Lato-Regular',
    },
})
