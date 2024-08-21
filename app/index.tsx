import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyledInput from '../components/styled-input';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Olá mundo!!!</Text>
      <StyledInput placeholder='Digite seu login' onChangeText={() => console.log("Foi paizão")}></StyledInput>
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
