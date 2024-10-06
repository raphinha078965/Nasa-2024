import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const { width, height } = Dimensions.get("window")

export default function Arroz() {

    const navigation = useNavigation();
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const apiKey = '314a2c2f793d7273578158f1c0af8f0a'; // Coloque sua chave de API aqui

    const getWeather = async () => {
        if (!city) return;
        setLoading(true);
        try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        setWeatherData(response.data);
        } catch (error) {
        console.error("Erro ao buscar dados do clima:", error);
        }
        setLoading(false);
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your city to know about the weather"
        onChangeText={(text) => setCity(text)}
        value={city}
      />
      <TouchableOpacity style={{ backgroundColor: "trans", borderWidth: 1, borderRadius: 10, width: width * 0.5, height: height * 0.07, justifyContent: 'center', borderColor: 'black'}}>
        <Text onPress={getWeather}  style={{fontSize: 20, textAlign: 'center', color: 'white'}}>Search weather</Text> 
      </TouchableOpacity>
      {loading && <Text style={styles.loading}>Loading...</Text>}
      {weatherData && (
        <View style={styles.weatherInfo}>
          <Text style={styles.city}>{weatherData.name}</Text>
          <Text style={styles.temp}>{weatherData.main.temp}°C</Text>
          <Text style={styles.description}>{weatherData.weather[0].description}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9C877',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: height * 0.07,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    borderRadius: 90,
  },
  
  weatherInfo: {
    alignItems: 'center',
    marginTop: 20,
  },
  city: {
    color:'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  temp: {
    color:'white',
    fontSize: 24,
  },
  description: {
    color:'white',
    fontSize: 18,
    fontStyle: 'italic',
  },
  loading: {
    marginTop: 10,
  },
});