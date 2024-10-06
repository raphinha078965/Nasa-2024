import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

export default function Solo() {
    const navigation = useNavigation();

    const handlePress = () => {
      const url = 'https://746808fe-3276-4c57-8f59-afe1d124e16f-00-12n7vszphbrz4.kirk.replit.dev/';
      Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
    };

  return (
    <ScrollView>
        <View style={styles.container}>
            <Text style={[styles.text, { marginTop: 20}]}> The world has a variety of climate types, each defined by unique atmospheric conditions. The equatorial climate, for example, is characterized by hot and humid conditions throughout the year, commonly found in areas near the equator. Tropical climates, on the other hand, feature distinct wet and dry seasons and are common in regions slightly farther from the equator. </Text>
            <Image source={require('../assets/clima1.jpg')} style={{ width: width * 0.8, height: height * 0.2, bottom: 25, alignSelf: 'center' }}/>
            <Text style={styles.text}> Subtropical and temperate climates experience more seasonal variation, with the subtropical regions having hot summers and mild winters, while temperate climates show more balanced temperature differences. Extreme climates include polar, with its harsh cold, and desert climates, where intense heat and minimal rainfall dominate. </Text> 
            <Image source={require('../assets/agro_weather.png')} style={{ width: width * 0.8, height: height * 0.2, bottom: 25, alignSelf: 'center' }}/>

            <Text style={styles.text}> Each climate influences local ecosystems, agriculture, and human activities, shaping how people adapt to their environments. For example, the Mediterranean climate, known for its hot, dry summers and mild winters, supports unique vegetation, while mountainous regions exhibit colder temperatures at higher altitudes. Effective management of resources in these diverse climates is crucial for sustaining life and maintaining biodiversity. </Text>
            <TouchableOpacity style={{ backgroundColor : 'trans', borderWidth: 1, borderRadius: 10, width: width * 0.8, height: height * 0.1, justifyContent: 'center', borderColor: '#6F7302', marginBottom: 20}} onPress={handlePress}>
                <Text style={{ textAlign: 'center', fontSize: 20, color: '#6F7302' }}>Click here to know and discover more about weather in our website</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
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
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 50
  },
  boxShadow: {
    shadowColor: 'black',
    shadowOffset: {
        width: 6,
        height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  buttonRow: {
    flexDirection: "row", //deixa eles um do lado outro
    justifyContent: "space-evenly", //cria esse espacinho lateral entre o botões
    flexWrap: "wrap",
    rowGap: 20, // mostra a altura entre os botões
  }
});