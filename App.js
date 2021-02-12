import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DailyMeals } from "./Containers/DailyMeals";
import { MonthlyMeals } from "./Containers/MonthlyMeals";
import { connect } from "react-redux";
import * as actions from './store/actions/actions'
const Stack = createStackNavigator();
class App extends Component{
  componentDidMount() {
    this.props.onFirstRender()
    }
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

const mapStateToProps = state => {
  return {
    data: state.data !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFirstRender: () => dispatch(actions.fetchData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);