import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import Job from '../../components/job'
import { useSelector } from "react-redux";

const AvailableJobs = () => {
    let { jobs } = useSelector((state) => state.FetchData)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Available Jobs</Text>
            <ScrollView>
            {jobs.map((v,i) => (
                <Job  key={i} value={v} />
            ))}

        </ScrollView>
        </View>
    )
}

export default AvailableJobs

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 30,
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 30,
        color: '#051d5f',
    },
})
