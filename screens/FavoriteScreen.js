import React, {useContext} from 'react'
import {View, Text,FlatList,StyleSheet } from 'react-native'

import { Context } from '../store/context/context'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const FavoriteScreen = ({navigation}) => {
  const  {ids} = useContext(Context)
  const favoriteMeals = MEALS.filter((meal)=> ids.some((id)=> id === meal.id))
  console.log(JSON.stringify(favoriteMeals, null, 2));

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
       {favoriteMeals.length === 0 ?
       <View   style={styles.empty}>
         <Text  style={styles.emptyText}>
      No favorites Meals found. Start adding some!
     </Text>
       </View>
       : <FlatList
        data={favoriteMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />}
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  empty:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  emptyText:{
    fontSize:18,
    color: "white",
    fontWeight:'bold'
  }
});
