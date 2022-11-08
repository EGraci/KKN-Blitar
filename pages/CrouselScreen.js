import { View, Text, FlatList, StyleSheet, Animated } from 'react-native'
import React, { useRef } from 'react';
import slides from '../data/Sildes';
import CrouselItem from '../pages/CrouselItem';
import CrouselPages from './CrouselPages';
import { Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function CrouselScreen({navigation}) {
  const [pageIndex, setPageIndex] = React.useState(0);
  const width = Dimensions.get('window').width;
  const slideRef = useRef(null);
  const setCurrentIndex = e => {
      const contentOffsetX = e.nativeEvent.contentOffset.x;
      setPageIndex(Math.round(contentOffsetX / width));
  };
  const nextTo = () => {
    if(pageIndex < slides.length){
        slideRef.current.scrollToIndex({index: pageIndex + 1});
        setPageIndex(pageIndex + 1);
    }else{
        console.log("end");
    }
  };

  const skipTo = () =>{
    slideRef.current.scrollToIndex({index: slides.length - 1});
    setPageIndex(slides.length - 1);
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
      <FlatList 
      onMomentumScrollEnd={setCurrentIndex}
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
        keyExtractor={(item) => item.id}
        ref={slideRef}
        />
      </View>
      <CrouselPages data={slides} pageIndex={pageIndex} scrollTo={nextTo} scrollEnd={skipTo} newScreen={navigation}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  }
});