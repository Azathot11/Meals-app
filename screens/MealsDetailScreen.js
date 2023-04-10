import React, { useLayoutEffect } from "react";
import { StyleSheet, View,ScrollView, Text, Image ,Button} from "react-native";

import { MEALS } from "../data/dummy-data";
import MealInfoSection from "../components/MealInfoSection";
import MealDetailTitle from "../components/MealDetailTitle";
import List from "../components/List";
import IconButton from "../components/IconButton";

const MealsDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const mealDetail = MEALS.find((meal) => meal.id === mealId);
  // console.log(mealDetail.title)
  // console.log(JSON.stringify(mealDetail.imageUrl, null, 2));
const headerButtonPress=()=>{
  console.log('pressed')
}
  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealDetail.title,
    headerRight:()=>{
        return <IconButton icon='star' color='white' onPress={headerButtonPress}>In the header</IconButton>
       }
    });
  }, [navigation,headerButtonPress]);
  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image style={styles.image} source={{ url: mealDetail.imageUrl }} />
        <Text style={styles.title}>About the meal</Text>
      </View>
      <MealInfoSection
        duration={mealDetail.duration}
        complexity={mealDetail.complexity}
        affordability={mealDetail.affordability}
        textStyle={styles.detailTextStyle}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <MealDetailTitle title="Ingredients" />
          <List data={mealDetail.ingredients} />
          <MealDetailTitle title="Steps" />
          <List data={mealDetail.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealsDetailScreen;

const styles = StyleSheet.create({
  rootContainer:{
    marginBottom:32
  },
  image: {
    height: 350,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailTextStyle: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
 
});
