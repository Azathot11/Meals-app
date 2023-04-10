import React,{useLayoutEffect} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { MEALS ,CATEGORIES} from "../data/dummy-data";
import MealItem from "../components/MealItem";



const MealsOverViewScreen = ({ route ,navigation}) => {


  const catId = route.params.categoryId;

  const filteredMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );


  
  useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find(category =>category.id === catId).title;
    
    navigation.setOptions({
      title: categoryTitle
    })
  },[catId, navigation])

  

  const renderCategoryItem = ({ item }) => {
    const onPressHandler = ()=>{
      navigation.navigate('MealsDetails',{
        mealId:item.id
      })
    }
    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        onPress={onPressHandler}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />
    </View>
  );
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
