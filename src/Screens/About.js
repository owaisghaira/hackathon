import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

const About = ({navigation}) => {
    return (
        <View>
            <Text>About</Text>

            <Button onPress={() => navigation.navigate('home')}
                title="Go to Home"/>
        </View>
    )
}

export default About

const styles = StyleSheet.create({})
