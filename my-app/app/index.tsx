import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyledInput from '../components/styled-input';
import StyledButton from '../components/styled-input/button';
import { router } from 'expo-router'

export default function Login() {

const handleLogin = () => {
  router.replace('home')
}


  return (
    <View style={styles.container}>
      <StyledInput placeholder="E-mail"
      onChangeText={(text) => console.log(text)} />
      <StyledInput placeholder="Senha"
      onChangeText={(text) => console.log(text)} />
      <StyledButton text="Acessar o App"
      onClick={handleLogin} />
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
