import { View, Text, Image, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'

const CrouselItem = ({item}) => {
    const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width},  {flexDirection: "column"}]}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]} />
      <View style={{flex: 0.3}}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      paddingTop: '15%',
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    image:{
        flex: 0.7,
        justifyContent: 'center',
    },
    title:{
        flex: 0.1,
        marginVertical: 1,
        justifyContent: 'center',
        fontWeight: '800',
        fontSize: 28,
        color: '#493d8a',
        textAlign: 'center',

    },
    description:{
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64,
    },
  });

export default CrouselItem