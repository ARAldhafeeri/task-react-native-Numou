import 'react-native';
import React from 'react';
import App from '../App';
import Icon from 'react-native-vector-icons/FontAwesome';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import DailyMeals from '../Containers/DailyMeals'


jest.mock('react-native-vector-icons/FontAwesome', () => ({
    FontAwesomeIcon: ''
}))


test('renders correctly', () => {
  renderer.create(<App />).toJSON();
});
