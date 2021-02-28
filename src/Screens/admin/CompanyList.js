import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import CompanyCard from '../../components/company'
import { useSelector } from "react-redux";

const CompanyList = () => {
    let { company } = useSelector((state) => state.FetchData)
    console.log("==>",company)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Company List</Text>
            <ScrollView>
                {company.map((v, i) => (
                    <CompanyCard key={i} value={v} />
                ))}

            </ScrollView>
        </View>
    )
}

export default CompanyList

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

