import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DailyMeals  from "./Containers/DailyMeals";
import { MonthlyMeals } from "./Containers/MonthlyMeals";
const Stack = createStackNavigator();
export class App extends Component{
  render() {
  return (
        <NavigationContainer>
          <Stack.Navigator>
                <Stack.Screen
                  name="DailyMeals"
                  component={DailyMeals}
                  options={{title:"Daily View"}} 
              />
              <Stack.Screen 
                name="MonthlyMeals"  
                component={MonthlyMeals}
                options={{title:"Monthly View"}}
                />
          </Stack.Navigator>
        </NavigationContainer>

  )
  }
};

