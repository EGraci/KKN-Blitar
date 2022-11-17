import { View, Text, Image, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'

const CrouselItem = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width},  {flexDirection: "column"}]}>
      <Text style={styles.title}>QR Code Application</Text>
      <Text style={styles.subtitle}>Para Tokoh Pahlawan Indonesia</Text>
      <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]} />
      <View style={{flex: 0.3}}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      paddingTop: 30,
      justifyContent: "center",
      alignItems: "center",
    },

    title:{
      marginHorizontal: 20,
      fontWeight: '800',
      fontSize: 30,
      textAlign: 'center',
    },

    subtitle:{
      marginTop: 20,
      fontWeight: '500',
      fontSize: 20,
    },

    image:{
      width: 270,
      height: 270,
      justifyContent: 'center',
      marginTop: 20,
    },
    
    description:{
      fontSize: 14,
      color: 'black',
      marginTop: 30,
      marginHorizontal: 20,
      lineHeight: 20,
    },
  });

export default CrouselItem