import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('my-app\assets\favicon.png')}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'my-app\assets\favicon.png',
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri: 'my-app\assets\favicon.png',
        }}
      />
    </View>
  );
};

export default DisplayAnImage;