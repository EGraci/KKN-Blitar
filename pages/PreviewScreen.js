import {View, Text, Button, StyleSheet, Image, ImageBackground, useWindowDimensions, BackHandler} from "react-native";
import React, { useRef, useEffect} from "react";
import { Video, AVPlaybackStatus } from 'expo-av';  
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
import FotoBerwarna from "../data/FotoBerwarna";
import FotoHp from "../data/FotoHp";
import video from "../data/Video";

export default function PreviewScreen({ navigation, route }) {
  const { pahlawan, tipe } = route.params;
  const {width} = useWindowDimensions();
  const play = React.useRef(null);
  const [status, setStatus] = React.useState({});

  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Onboard");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View style={{flex:1}}>
      
      {
            (() => {
                if(tipe.includes('clr')){
                    const data = FotoBerwarna.find(el => el.title == pahlawan);
                    return(
                    <View style={styles.container}>
                      <Image source={data.image} style={[styles.image, {width, resizeMode: 'contain'}]} />
                    </View>);
                }else if(tipe.includes('hp')){
                    const data = FotoHp.find(el => el.title == pahlawan);
                    return(
                    <View style={styles.container}>
                      <Image source={data.image} style={[styles.image, {width, resizeMode: 'contain'}]} />
                    </View>);   
                }else{
                  const data = video.find(el => el.title == pahlawan);
                    return(
                      <View style={styles.container}>
                        <Video
                          ref={play}
                          style={[styles.mediaPlayer, {width}]}
                          source={data.image}
                          useNativeControls
                          resizeMode="contain"
                          isLooping
                          onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />                        
                      </View>
                    );
                }
            })()
        }
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    justifyContent: "center",
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  buttonImageIconStyle: {
    justifyContent: "center",
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
});
