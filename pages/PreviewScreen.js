import { View, Text, Button, StyleSheet, Image, useWindowDimensions} from "react-native";
import React, { useRef } from "react";
import FotoBerwarna from "../data/FotoBerwarna";
import FotoHp from "../data/FotoHp";

export default function PreviewScreen({ navigation, route }) {
  const { pahlawan, tipe } = route.params;
  // const dataCLR = FotoBerwarna.find((el) => el.title === pahlawan);
  // const dataHP = FotoHp.find((el) => el.title === pahlawan);
  // const dataVideo = Video.find((el) => el.title === pahlawan);

  // console.debug(data);
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Button
        title={"Kembali ke Scan"}
        onPress={() => navigation.navigate("Onboard", null)}
      />

      <Text>
        dengan tipe {tipe} dengan nama pahlawan {pahlawan}
      </Text>
      {
            (() => {
                if(tipe.includes('clr')){
                    const data = FotoBerwarna.find(el => el.title == pahlawan);
                    return(<Image source={data.image} style={[styles.image, {width, resizeMode: 'contain'}]} />);
                }else if(tipe.includes('hp')){
                    const data = FotoHp.find(el => el.title == pahlawan);
                    return(<Image source={data.image} style={[styles.image, {width, resizeMode: 'contain'}]} />);
                }else{
                    return(<Text>Preview Video Pahlawan {pahlawan}</Text>);
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
});
