import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button , Alert} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


function ScannerScreen({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    data = data.split(",");
    if(data.length == 2){
      navigation.navigate('Preview', {
        pahlawan: data[0],
        tipe: data[1],
      });

    }else{
      setScanned(true);
      Alert.alert(
        'QR Code tidak dikenali',
        'silahkan scan QR Code lain',
        [
          {text: 'Ok', onPress: () => setScanned(false)},
        ],
        { 
          cancelable: true 
        }
      );
    }
    
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap untuk scan ulang'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  }
});
export default ScannerScreen