import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyledInput from '../components/styled-input';
import { router } from 'expo-router'
import React from 'react';
import { Button, ButtonText } from '@/components/ui/button'
import { Image } from '@/components/ui/image'

export default function Login() {

const handleLogin = () => {
  router.replace('home')
}


  return (
    <View style={styles.container}>
      <Image
      size="md"
      source={{
        uri: "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg"
      }}

      />
      <StyledInput placeholder="E-mail"
      onChangeText={(text) => console.log(text)} />
      <StyledInput placeholder="Senha"
      onChangeText={(text) => console.log(text)} />
      <Button size='md' variant='solid' onPress={handleLogin} className='bg-green-500'>
        <ButtonText> Acessar o App </ButtonText>
        </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
