import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { useSelector } from "react-redux";
import StudentCard from "../../components/StudentCard";

const StudentList = ({ navigation }) => {
    let { profiles } = useSelector((state) => state.FetchData)
    return (

        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>Student List</Text>
            </View>
            {profiles.map((v, i) => (
                <StudentCard key={i} value={v} />
            ))}
            {/* <StudentCard/> */}

        </ScrollView>


    )
}

export default StudentList

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 32,
        marginBottom: 10,
        color: '#051d5f',
        fontWeight:'700'

    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 30,
    },

})

