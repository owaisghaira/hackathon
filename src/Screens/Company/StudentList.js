import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { useSelector } from "react-redux";
import StudentCard from "../../components/StudentCard";

const StudentList = ({ navigation }) => {
    let { profiles } = useSelector((state) => state.FetchData)
    return (

        <ScrollView>
            {profiles.map((v,i) => (
                <StudentCard  key={i} value={v} />
            ))}
            {/* <StudentCard/> */}

        </ScrollView>


    )
}

export default StudentList

const styles = StyleSheet.create({})
