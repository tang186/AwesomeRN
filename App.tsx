import React from 'react';
import FastImage from 'react-native-fast-image';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image
} from 'react-native';



const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

function App(): React.JSX.Element {
  const localImage = require('./image/3d09b555cb1844d2b5acf369749390d1.gif');
  const localImageUri = Image.resolveAssetSource(localImage).uri;
  return (
    <SafeAreaView >
      <Text>{localImageUri}</Text> 
      <Image
        style={styles.tinyLogo}
        source={require("./image/63855616708410.webp")}
      />
      <FastImage
        style={styles.tinyLogo}
        source={{
          uri: localImageUri,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </SafeAreaView>
  );
}


export default App;
