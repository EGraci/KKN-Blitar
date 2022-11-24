import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useRef } from 'react';

export default function PreviewScreen({navigation, route}) {
    const { pahlawan, tipe } = route.params;
    return (
      <View style={styles.container}>
        <Text>Preview Pahlawan {pahlawan} dengan tipe {tipe}</Text>
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