import React from 'react'
import { Pressable,Text,StyleSheet } from 'react-native'
import { Ionicons} from '@expo/vector-icons'

const FavoriteButton = ({icon, color,onPress}) => {
  return (
    <Pressable 
    onPress={onPress}
    style={({pressed})=> pressed  ?[styles.pressed ,styles.btnContainer]: styles.btnContainer  }>
        <Ionicons name={icon} size={24} color={'white'}/>
    </Pressable>
  )
}

export default FavoriteButton;

const styles = StyleSheet.create({
  pressed:{
    opacity:0.7
  },
    btnContainer:{
      marginRight:10
    }
});