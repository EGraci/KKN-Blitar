import {View, Text, Button, StyleSheet, Image, useWindowDimensions} from "react-native";
import React, { useRef } from "react";
import { Video, AVPlaybackStatus } from 'expo-av';
import FotoBerwarna from "../data/FotoBerwarna";
import FotoHp from "../data/FotoHp";
import video from "../data/Video";

export default function PreviewScreen({ navigation, route }) {
  const { pahlawan, tipe } = route.params;
  // console.debug(data);
  const {width} = useWindowDimensions();
  const play = React.useRef(null);
  const [status, setStatus] = React.useState({});
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
                      <Image source={data.image} style={[styles.image, {width, resizeMode: 'contain'  }]} />
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
                        {/* {
                          status.isPlaying ? '' : (<Button
                            title={"Kembali ke Scan"}
                            onPress={() => navigation.navigate("Onboard", null)}
                          />)
                        } */}
                        
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
});
