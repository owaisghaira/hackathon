import React, { useEffect } from 'react'
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native'
import { Content, Card, CardItem, Body } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Start = ({ navigation }) => {

    return (
        <ScrollView>
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:20}}>Welcome to Campus Recruitment System</Text>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 24 }}>

                <Content >
                    <Card style={styles.cardstyle1}>
                        <CardItem footer header bordered button onPress={() => navigation.navigate('adminlogin')} >
                            <Image style={styles.logo} source={{ uri: 'https://img.icons8.com/bubbles/2x/admin-settings-male.png' }} />

                        </CardItem>
                        <CardItem button
                        // onPress={() => navigation.navigate('donors')} 
                        >
                            <Text>Admin</Text>

                        </CardItem>

                    </Card>
                </Content>
                <Content >
                    <Card style={styles.cardstyle1}>
                        <CardItem footer header bordered button onPress={() => navigation.navigate('companylogin')}>
                            <Image style={styles.logo} source={{ uri: 'https://img.icons8.com/bubbles/2x/company.png' }} />

                        </CardItem>
                        <CardItem button
                        // onPress={() => navigation.navigate('donors')} 
                        >
                            <Text>Company</Text>

                        </CardItem>

                    </Card>
                </Content>
                <Content >
                    <Card style={styles.cardstyle1}>
                        <CardItem footer header bordered button onPress={() => navigation.navigate('studentlogin')} >
                            <Image style={styles.logo} source={{ uri: 'https://i.pinimg.com/originals/43/fc/4c/43fc4cbbf0eb9f77025098a113274037.jpg' }} />

                        </CardItem>
                        <CardItem button
                        // onPress={() => navigation.navigate('donors')} 
                        >
                            <Text>Student</Text>

                        </CardItem>

                    </Card>
                </Content>

                {/* <Button
                title="Go to Donors"
                onPress={() => navigation.navigate('donors')}
            />

            <Button
                title="Go to map"
                onPress={() => navigation.navigate('donorsmap')}
            /> */}


            </View>
           
        </ScrollView>
    )
}

export default Start

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
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    cards: {
        width: "90%",

        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
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
        borderBottomWidth: 10,
        borderBottomColor: 'blue'
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

