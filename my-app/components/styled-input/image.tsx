import React from 'react';
import {View, Image, StyleSheet, ImageSourcePropType } from 'react-native';

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

interface DisplayAnImageProps {
  imageUri: ImageSourcePropType
}

const DisplayAnImage: React.FC<DisplayAnImageProps> = ({imageUri}) => {
  return (
    <View style={styles.container}>
      <Image
      style={styles.tinyLogo}
      source={imageUri}
      />
      </View>
  )
}


export default DisplayAnImage;