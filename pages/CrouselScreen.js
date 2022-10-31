import { View, Text, FlatList, StyleSheet, Animated } from 'react-native'
import React, {useState, useRef} from 'react'
import slides from '../data/Sildes';
import CrouselItem from '../pages/CrouselItem';
import CrouselPages from './CrouselPages';

export default function CrouselScreen() {

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
      <FlatList 
        data={slides} 
        renderItem={
            ({item}) => 
              <CrouselItem item={item}/>
        }
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        snapToAlignment="center"
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        />
      </View>
      {/* <CrouselPages data={slides} /> */}
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