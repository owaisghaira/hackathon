import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons';

const job = ({ value: { companyName, jobTitle, industry, jobRequirment, keyResposibility, salary, criteria } }) => {
    return (
        <TouchableOpacity style={{ flexDirection: 'row' }}>
            <View style={styles.container}>
                <Text style={{ fontSize: 22, fontWeight: '700' }} >{jobTitle}</Text>
                <Text>{companyName}</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <View style={{ width: '70%', alignItems: 'flex-start', marginTop: 8, flexDirection: 'row' }}>
                        <Icons name='document' size={22} color="#666" />
                        <Text style={{ marginHorizontal: 5, fontSize: 18 }}>{jobRequirment}</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end', marginTop: 8, flexDirection: 'row' }}>
                        <Icons name='cash-sharp' size={22} color="#666" />
                        <Text style={{ marginHorizontal: 5, fontSize: 18 }}>{salary}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default job

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        // alignItems: 'center',
        padding: 20,
        width: "99%",
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 15

    }
})
