import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { withTheme } from '@rneui/themed';

export default function CrouselPages({data, pageIndex, scrollTo, scrollEnd}) {
    
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
                    <TouchableOpacity style={{backgroundColor: '#7743DB', flex:1, alignItems: "center", padding: 10,}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Mulai</Text>
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
        flex: 1, 
        width: "100%",
        flexDirection: 'column',
        position: 'absolute',
        bottom: 20,
    },
    paggingBar:{
        flexDirection: 'row',
        justifyContent: "center",
    },
    paggingItem:{
        height: 2.5,
        width: 20,
        backgroundColor: '#7743DB',
        marginHorizontal: 8,
        borderRadius: 2,
    },
    pageButton:{
        top: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    footerButton:{
        flex:0.5,
        alignItems: "center",
        padding: 10,
    }
  });