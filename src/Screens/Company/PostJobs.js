import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import FormInput from '../../components/Input'
import FormButton from '../../components/FormButton'
import { windowHeight } from '../../../utiles/Dimentions';
import database from '@react-native-firebase/database';
import { fetch_jobs } from "../../Store/Actions/Action";
import { useDispatch } from "react-redux";

const PostJobs = () => {
    const dispatch = useDispatch()

    let [job, setJob] = useState({ companyName: '', jobTitle: '', industry: '', jobRequirment: '', keyResposibility: '', salary: '', criteria: '' })
    const addJob = () => {
        if (job.companyName === '' || job.jobTitle === '') {
            alert("Fill Complete Form")
        }
        else {
            database().ref('/').child("jobs").push({ ...job })
                .then(() => {
                    alert('added successful')
                    dispatch(fetch_jobs())
                    clr();
                }).catch((error) => {
                    alert(error)
                });
        }

    }
    const clr = () => {
        setJob({ companyName: '', jobTitle: '', industry: '', jobRequirment: '', keyResposibility: '', salary: '', criteria: '' })
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>Job Creation</Text>
                <FormInput
                    labelValue={job.companyName}
                    onChangeText={(e) => setJob({ ...job, companyName: e })}
                    placeholderText="Company Name"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={job.jobTitle}
                    onChangeText={(e) => setJob({ ...job, jobTitle: e })}
                    placeholderText="Job Title"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={job.industry}
                    onChangeText={(e) => setJob({ ...job, industry: e })}
                    placeholderText="Industry"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={job.jobRequirment}
                    onChangeText={(e) => setJob({ ...job, jobRequirment: e })}
                    placeholderText="Job Reqirement"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={job.keyResposibility}
                    onChangeText={(e) => setJob({ ...job, keyResposibility: e })}
                    placeholderText="Key Reponsibility"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={job.salary}
                    onChangeText={(e) => setJob({ ...job, salary: e })}
                    placeholderText="Salary"
                    iconType="user"
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={job.criteria}
                    onChangeText={(e) => setJob({ ...job, criteria: e })}
                    placeholderText="Criteria"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TouchableOpacity onPress={() => addJob()} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Add Job</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default PostJobs

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
