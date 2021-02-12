import React, {Component} from 'react';
import {ImageBackground, TouchableOpacity, Text, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles} from './Styles';
import {days, meals_data} from '../data/data'
import { connect } from "react-redux";
import * as actions from '../store/actions/action'

class  DailyMeals extends Component {
     state = {
         selectedDay: 0,
         DayMeals: meals_data[0],
         mealNo: 0,
         selectedImage: meals_data[0][0]
     }

    componentDidMount() {
            this.props.fetchData();
        }
     handleDayClick = (clickedDay) => {
         this.setState({selectedDay: clickedDay,
                        DayMeals: meals_data[clickedDay],
                        mealNo:0,
                        selectedImage: meals_data[clickedDay][0]
                    });

     }
     handleTabBar = (type) => {
         const {mealNo, DayMeals} = this.state;
         let i = 0;
         if (type === 'nxt'){
            i = mealNo + 1
         } else {
             i =  mealNo - 1
         }
         if (i == DayMeals.length ){
             i = 0;
         }
         if ( i == -1){
             i = 0;
         }
         this.setState({
                        selectedImage: DayMeals[i], 
                        mealNo: i
                    });
     };
     render () {
         const { navigation } = this.props;
         const { selectedDay, selectedImage} = this.state;
         const {data} = this.props
         // global state redux implementation can be console.log from destructring this.props
        //  console.log(this.state)
         // please check console in developer tools to see random user data fetched
        //  console.log(data)
        return (
            <View style={styles.container}>
                <ImageBackground source={require("../assets/background.jpg")} style={styles.image}>
                    <View style={styles.NavigationContainer}>
                            <TouchableOpacity  
                                style={styles.NavigationButton}
                                onPress={ () =>
                                    navigation.push("MonthlyMeals", {name: 'Monthly Meals'})
                                    }
                                    >
                                <Text style={styles.textNavButton}> Next 30 Days <Icon name="list" size={30} color="white" /></Text>
                            </TouchableOpacity>
                    </View>
                    <View style={styles.DaysButtonsContainer}>
                    {days.map((d, i) =>{
                        return <TouchableOpacity  
                                style={{
                                        width: 27,
                                        height: 35,
                                        padding: 1,
                                        margin: 5,
                                        backgroundColor: i == selectedDay ? "black" : "#ffe4c4" ,
                                        opacity: 0.7,
                                        borderWidth: 2,
                                        borderRadius: 5,
                                        borderColor: "white"

                                    }}
                                onPress={ () => this.handleDayClick(i) }
                                    >
                                <Text style={styles.textDayButton}>{d}</Text>
                            </TouchableOpacity>
                    })}
                    </View>
                    <View style={styles.mealsContainer}>        
                        <TouchableOpacity style={styles.tabButton}
                            onPress={ () => this.handleTabBar('nxt') }
                                >
                        <Text style={styles.textDayButton}>NEXT</Text>      
                        </TouchableOpacity>         
                            <Image
                                style={styles.mealImage}
                                source={selectedImage.src}/>
                        <TouchableOpacity style={styles.tabButton} 
                            onPress={  () => this.handleTabBar('prev') }
                                >
                        <Text style={styles.textDayButton}>PREV</Text>      
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textNavButton}>{selectedImage.name}</Text>
                </ImageBackground>
            </View>
        )
    }
}




const mapStateToProps = state => {
  return {
    data:  state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(actions.fetchData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyMeals);