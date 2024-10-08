import { Text, View, StyleSheet } from "react-native";
import BotaoProps from "../components/botao"

export default function Index() {
  const handlesPress = () => {
    console.log('Botao pressionado!');
  };

  const teste = () => {
    console.log('Segundo teste');
  };

  const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <BotaoProps label="Clique aqui" corFundo="green" onPress={handlesPress}/>
      <BotaoProps label="Clique Agora" corFundo="pink" onPress={handlesPress}/>
      <BotaoProps label="Clique de novo" corFundo="gray" onPress={teste}/>
    </View>
  );
}