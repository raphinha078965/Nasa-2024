import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');



export default function App() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.buttonRow}>


            <TouchableOpacity style={[styles.botao , styles.boxShadow]} onPress={
                async () => {
                    navigation.navigate("Soil");
                }
            }>
                <Text style={styles.text}>Soil</Text>
            </TouchableOpacity>


            <TouchableOpacity style={[styles.botao , styles.boxShadow]} onPress={
                async () => {
                    navigation.navigate("Weather");
                }
            }>
                <Text style={styles.text}>Weather</Text>
            </TouchableOpacity>


            <TouchableOpacity style={[styles.botao , styles.boxShadow]} onPress={
                async () => {
                    navigation.navigate("Vegetation");
                }
            }>
                <Text style={styles.text}>Vegetation</Text>
            </TouchableOpacity>


            <TouchableOpacity style={[styles.botao , styles.boxShadow]} onPress={
                async () => {
                    navigation.navigate("Desforestation");
                }
            }>
                <Text style={styles.text}>Desforestation</Text>
            </TouchableOpacity>


            <TouchableOpacity style={[styles.botao , styles.boxShadow]} onPress={
                async () => {
                    navigation.navigate("Forecast");
                }
            }>
                <Text style={styles.text}>Weather forecast</Text>
            </TouchableOpacity>


            <TouchableOpacity style={[styles.botao , styles.boxShadow]} onPress={
                async () => {
                    navigation.navigate("Tech");
                }
            }>
                <Text style={styles.text}>Agricultural technologies</Text>
            </TouchableOpacity>
        </View>
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
  botao: {
    backgroundColor: '#6f7302',
    width: width * 0.4,
    height: height * 0.225,
    justifyContent: 'center',
    borderRadius: 20
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
  },
  boxShadow: {
    shadowColor: "#000000",
    shadowOffset: {
        width: 20,
        height: 15,
    },
    shadowOpacity:  0.24,
    shadowRadius: 20,
    elevation: 20
  },
  buttonRow: {
    flexDirection: "row", //deixa eles um do lado outro
    justifyContent: "space-evenly", //cria esse espacinho lateral entre o botões
    flexWrap: "wrap",
    rowGap: 20, // mostra a altura entre os botões
  }
});