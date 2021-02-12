import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, ImageBackground, Button, Text, View } from 'react-native';
import { styles} from './Styles';
export class MonthlyMeals extends Component {
    state = {
        day: 0
    }
    render() {
       const {navigation, route} = this.props
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/background.jpg")} style={styles.image}>
                <Button 
                    title="View Meals for the next 10 days"
                    color="#ffe4c4"
                    onPress={ () =>
                        navigation.push("DailyMeals", {name: 'Monthly Meals'})
                        }
                        
                        />
                        <Text> this is {route.params.name} view </Text>
            </ImageBackground>
        </View>
    )
        }
};
