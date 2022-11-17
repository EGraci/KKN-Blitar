import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CrouselPages({data, pageIndex, scrollTo, scrollEnd, newScreen}) {
    
  return (
    <View style={styles.body}>
        <View style={styles.paggingBar}>
        {
            data.map((_, i) => {
            return <View style={[styles.paggingItem, pageIndex == i &&{backgroundColor: '#7DE5ED', width: 30}]} key={i.toString()} />
            })
        }
        </View>
        {
            pageIndex == data.length - 1 ?
                <View style={styles.pageButton}>
                    <TouchableOpacity style={{backgroundColor: '#7743DB', flex:1, alignItems: "center", padding: 10, borderRadius: 10,}} onPress={() =>
        newScreen.navigate('Scanner', null)}>
                        <Text style={{color: 'white', fontWeight: 'bold',}}>Mulai</Text>
                    </TouchableOpacity>
                </View>
            :
                <View style={styles.pageButton}>
                    <TouchableOpacity style={[styles.footerButton, {borderWidth: 1, borderColor: '#7743DB'}]} onPress={scrollEnd} >
                        <Text>Lewati</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.footerButton, {backgroundColor: '#7743DB'}]} onPress={scrollTo}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Lanjut</Text>
                    </TouchableOpacity>
                </View>
        }
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    }, 

    body:{
        marginBottom: 30,
        width: "100%",
        flexDirection: 'column',
    },

    paggingBar:{
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: "center",
    },

    paggingItem:{
        height: 3,
        width: 20,
        backgroundColor: '#7743DB',
        marginHorizontal: 8,
        borderRadius: 2,
    },

    pageButton:{
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        
    },

    footerButton:{
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 10,
        flex:0.5,
        alignItems: "center",
        padding: 10,
    }

  });