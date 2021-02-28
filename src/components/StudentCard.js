import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


const StudentCard = ({value:{ name, email, gender, age, percentage, degree, passingYear, board, contact }}) => {
    return (
        <View style={{ padding: 8 }}>
            <Content>
                <Card style={{ flex: 0 }}>
                    <CardItem style={{ backgroundColor: '#009387' }}>
                        <View style={{ width: '70%', flexDirection: 'row' }}>
                            <Thumbnail source={{ uri: 'https://i.pinimg.com/originals/6b/aa/98/6baa98cc1c3f4d76e989701746e322dd.png' }} />
                            <Body style={{ marginLeft: 10 }}>
                                <Text style={styles.text}>{name}</Text>
                                <Text>{email}</Text>
                            </Body>
                        </View>
                        <Right style={{ width: "20%" }}>
                            <Text style={styles.text}>{percentage}</Text>
                        </Right>
                    </CardItem>

                    <CardItem>
                        <Body>
                            <Text style={{ marginLeft: 5 }}>Gender : {gender}</Text>
                            <Text style={{ marginLeft: 5 }}>Passing Year : {passingYear}</Text>
                            <Text style={{ marginLeft: 5 }}>Board/University : {board}</Text>
                            <Text style={{ marginLeft: 5 }}>Degree : {degree}</Text>
                            <Text style={{ marginLeft: 5 }}>Phone : {contact}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </View>
    )
}

export default StudentCard

const styles = StyleSheet.create({
    text: {
        fontWeight: '700',
        fontSize: 25,
        color: '#fff'
    }
})
