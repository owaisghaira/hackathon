import React, { useEffect } from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import { useDispatch } from "react-redux";
import { fetch_profiles,fetch_company } from "../Store/Actions/Action";
import { Content, Card, CardItem, Body } from 'native-base';
import FontAwesome from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }) => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetch_company())
    }, [])

    return (
        <ScrollView>
            <View style={{ flex: 1, padding: 24 }}>

                <Content >
                    <Card style={styles.cardstyle1}>
                        <CardItem footer header bordered>
                            <FontAwesome name="podium" style={styles.icon} size={70} color='#009387' />

                        </CardItem>
                        <CardItem button
                            onPress={() => navigation.navigate('createcompany')} >
                            <Text style={{ paddingHorizontal: 10, padding: 8, borderRadius: 10, color: 'black', borderColor: 'black', borderWidth: 2 }}>Create Company Profile</Text>
                        </CardItem>

                    </Card>
                </Content>
                <Content >
                    <Card style={styles.cardstyle1}>
                        <CardItem footer header bordered>
                            <FontAwesome name="add-circle" style={styles.icon} size={70} color='#009387' />

                        </CardItem>
                        <CardItem button
                            onPress={() => navigation.navigate('postjobs')} >
                            <Text style={{ paddingHorizontal: 10, padding: 8, borderRadius: 10, color: 'black', borderColor: 'black', borderWidth: 2 }}>Post Jobs</Text>
                        </CardItem>

                    </Card>
                </Content>

                <Content >
                    <Card style={styles.cardstyle1}>
                        <CardItem footer header bordered>
                            <FontAwesome name="people-circle" style={styles.icon} size={89} color='#009387' />

                        </CardItem>
                        <CardItem button
                            onPress={() => navigation.navigate('studentlist')} >
                            <Text style={{ paddingHorizontal: 10, padding: 8, borderRadius: 10, color: 'black', borderColor: 'black', borderWidth: 2 }}>Students List</Text>
                        </CardItem>

                    </Card>
                </Content>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    containe: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontSize: 25
    },
    cards: {
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        margin: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    cardstyle1: {
        alignItems: 'center',
        borderRadius: 15,
        // borderBottomWidth: 10,
        // borderBottomColor: 'blue'
    },
    cardstyle2: {
        alignItems: 'center',
        borderRadius: 15,
        borderBottomWidth: 10,
        borderBottomColor: 'green'
    },
    cardstyle3: {
        alignItems: 'center',
        borderRadius: 15,
        borderBottomWidth: 10,
        borderBottomColor: 'red'
    },
    btn: {
        backgroundColor: 'red',
        padding: 8,
        paddingHorizontal: 50,
        borderRadius: 10,
        color: '#fff'
    }

});
