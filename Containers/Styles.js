
import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',

  },
   image: {
    flex: 1,
    resizeMode: "cover",
  },
  NavigationContainer: {
        flex: 3,
        marginTop: 20,
        flexDirection: "row",
        height: 200,
       alignContent: "center",
       justifyContent: "center"
  },
   DaysButtonsContainer: {
       flex: 2,
       marginTop:50,
       flexDirection: "row",
       alignContent: "center",
       justifyContent: "center",
       height: 50,
  },
    mealsContainer: {
       flex: 4,
       flexDirection: "row",
       alignContent: "center",
       justifyContent: "center",
  },
  NavigationButton: {
    padding: 5,
    width: 100,
    height:140,
    backgroundColor: "#ffe4c4",
    opacity: 0.7,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "white"
  },
  tabButton : {
    padding: 5,
    width: 50,
    height:50,
    marginTop: 80,
    margin: 10,
    backgroundColor: "black",
    opacity: 0.7,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "white"
  },
    textNavButton: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
   textDayButton: {
    color: "white",
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
  },
  mealImage: {
        height: 225,
        width: 225,
        borderRadius: 35,
  }


});