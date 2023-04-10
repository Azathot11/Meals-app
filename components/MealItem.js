import React from "react";
import { StyleSheet, View, Text, Pressable,Image,Platform} from "react-native";

import MealInfoSection from "./MealInfoSection";

const MealItem = ({ title ,imageUrl,duration,complexity,affordability,onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => pressed && styles.buttonPressed}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealInfoSection
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
    container:{
        margin:16,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'white',
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.35,
        shadowOffset:{width:0, height:2},
        shadowRadius:8,
        overflow:Platform.OS==='android' && 'hidden',
    },
    innerContainer:{
        // flex:1,
        borderRadius:8,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:200,
    },
    
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8,
    },
    buttonPressed:{
        opacity:0.5
    },
});
