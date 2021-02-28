import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import FormInput from '../../components/Input'
import { windowHeight } from '../../../utiles/Dimentions';
import database from '@react-native-firebase/database';
import { fetch_profiles } from "../../Store/Actions/Action";
import { useDispatch } from "react-redux";

const createProfile = () => {
    const dispatch = useDispatch()
    let [profile, setProfile] = useState({ name: '', email: '', gender: '', age: '', percentage: '', degree: '', passingYear: '', board: '', contact: '' })
    const addProfile = () => {
        if (profile.name === '' || profile.board === '') {
            alert("Fill Complete Form")
        }
        else {
            database().ref('/').child("profile").push({ ...profile })
                .then(() => {
                    alert('added successful')
                    dispatch(fetch_profiles())
                    clr();
                }).catch((error) => {
                    alert(error)
                });
        }

    }
    const clr = () => {
        setProfile({ name: '', email: '', gender: '', age: '', percentage: '', degree: '', passingYear: '', board: '', contact: '' })
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>Create Profile/Resume</Text>
                <FormInput
                    labelValue={profile.name}
                    onChangeText={(e) => setProfile({ ...profile, name: e })}
                    placeholderText="Name"
                    iconType="user"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={profile.email}
                    onChangeText={(e) => setProfile({ ...profile, email: e })}
                    placeholderText="Email"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={profile.gender}
                    onChangeText={(e) => setProfile({ ...profile, gender: e })}
                    placeholderText="Gender"
                    iconType="user"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={profile.age}
                    onChangeText={(e) => setProfile({ ...profile, age: e })}
                    placeholderText="Age"
                    iconType="user"
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={profile.percentage}
                    onChangeText={(e) => setProfile({ ...profile, percentage: e })}
                    placeholderText="Last Percentage"
                    iconType="user"
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={profile.degree}
                    onChangeText={(e) => setProfile({ ...profile, degree: e })}
                    placeholderText="Last Degree"
                    iconType="user"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={profile.passingYear}
                    onChangeText={(e) => setProfile({ ...profile, passingYear: e })}
                    placeholderText="Passing Year"
                    iconType="user"
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={profile.board}
                    onChangeText={(e) => setProfile({ ...profile, board: e })}
                    placeholderText="Board/University"
                    iconType="user"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={profile.contact}
                    onChangeText={(e) => setProfile({ ...profile, contact: e })}
                    placeholderText="Contact No."
                    iconType="user"
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TouchableOpacity onPress={() => addProfile()} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Create Profile</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default createProfile

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 15,
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
