import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import slides from '../data/Sildes';
import CrouselItem from '../pages/CrouselItem';

export default function CrouselScreen() {
  return (
    <View style={styles.container}>
      <FlatList data={slides} renderItem={({item}) => <CrouselItem item={item}/>}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});