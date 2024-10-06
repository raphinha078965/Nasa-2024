import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

export default function Vegetation() {
    const navigation = useNavigation();
    const handlePress = () => {
      const url = 'https://746808fe-3276-4c57-8f59-afe1d124e16f-00-12n7vszphbrz4.kirk.replit.dev/';
      Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
    };

  return (
    <ScrollView>
        <View style={styles.container}>
            <Text style={[styles.text, { marginTop: 20}]}> Vegetation refers to the various plant formations that cover the Earth's surface, influenced by factors such as climate, soil, and altitude. It plays a vital role in regulating the climate, providing oxygen, and maintaining biodiversity. There are different types of vegetation, including forests, savannas, grasslands, and tundras, each adapted to their environment's specific conditions like temperature, rainfall, and sunlight. </Text>
            <Image source={require('../assets/vegetation.jpg')} style={{ width: width * 0.8, height: height * 0.3, bottom: 25, alignSelf: 'center' }}/>
            <Text style={styles.text}> In Brazil, vegetation is highly diverse, featuring ecosystems such as the Amazon Rainforest, Cerrado, and Atlantic Forest. These biomes are vital for preserving unique species and ecological balance, though many face deforestation and degradation. </Text> 
            <Image source={require('../assets/savana.webp')} style={{ width: width * 0.8, height: height * 0.3, bottom: 25, alignSelf: 'center' }}/>

            <Text style={styles.text}> Preserving vegetation is essential for environmental sustainability and human survival. Plants protect soil from erosion, regulate water cycles, and absorb carbon dioxide, helping combat climate change. Sustainable management of these ecosystems is crucial to ensure that future generations continue to benefit from the natural resources provided by diverse plant formations. </Text>
            <TouchableOpacity style={{ backgroundColor : 'trans', borderWidth: 1, borderRadius: 10, width: width * 0.8, height: height * 0.1, justifyContent: 'center', borderColor: '#6F7302', marginBottom: 20}} onPress={handlePress}>
                <Text style={{ textAlign: 'center', fontSize: 20, color: '#6F7302' }}>Click here to know and discover more about vegetation in our website</Text>
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