import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useRef } from 'react';
import FotoBerwarna from '../data/FotoBerwarna';
import FotoHp from '../data/FotoHp';


export default function PreviewScreen({navigation, route}) {
    const { pahlawan, tipe } = route.params;
    const data = FotoBerwarna.find(el => el.title.includes === pahlawan);
    console.debug(data);
    return (
      <View style={styles.container}>
        <Button title={'Kembali ke Scan'} onPress={() => navigation.navigate('Onboard', null)} />
        
        <Text> dengan tipe {tipe}</Text>
       
      </View>
    )
  }
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
    },
    image:{
        justifyContent: 'center',
    },
  });