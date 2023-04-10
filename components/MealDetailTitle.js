import React from 'react'
import { View,Text ,StyleSheet} from 'react-native'

const MealDetailTitle = ({title}) => {
  return (
    <View style={styles.subTitleContainer}>
    <Text style={styles.subTitle}>{title}</Text>
  </View>
  )
}

export default MealDetailTitle

const styles = StyleSheet.create({
    subTitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
       
        textAlign: "center",
        
      },
      subTitleContainer:{
        borderBottomColor:"#e2b497",
        borderBottomWidth: 2,
        marginHorizontal:12,
        marginVertical:4,
        padding: 6,
      }
});