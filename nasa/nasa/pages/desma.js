import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

export default function Desmatamento() {
    const navigation = useNavigation();
    const handlePress = () => {
      const url = 'https://746808fe-3276-4c57-8f59-afe1d124e16f-00-12n7vszphbrz4.kirk.replit.dev/';
      Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
    };

  return (
    <ScrollView>
        <View style={styles.container}>
            <Text style={[styles.text, { marginTop: 20}]}> Deforestation refers to the large-scale clearing of forests for agriculture, logging, and urban development, leading to significant environmental issues. This practice contributes to habitat loss, threatening biodiversity and disrupting ecosystems. The Amazon Rainforest, a crucial global resource, faces severe deforestation, impacting both wildlife and indigenous communities. </Text>
            <Image source={require('../assets/madeira.webp')} style={{ width: width * 0.8, height: height * 0.2, bottom: 25, alignSelf: 'center' }}/>
            <Text style={styles.text}> The consequences of deforestation include increased greenhouse gas emissions, which exacerbate climate change, and disruption of local water cycles. Additionally, soil erosion becomes a significant concern, as tree removal reduces soil stability and fertility. </Text> 
            <Image source={require('../assets/desmatamento.jpg.webp')} style={{ width: width * 0.8, height: height * 0.2, bottom: 25, alignSelf: 'center' }}/>

            <Text style={styles.text}> To address these challenges, sustainable practices and reforestation efforts are essential. Implementing policies that promote responsible land use and protect existing forests can help mitigate the impacts of deforestation, ensuring ecological balance and preserving natural resources for future generations. </Text>
            <TouchableOpacity style={{ backgroundColor : 'trans', borderWidth: 1, borderRadius: 10, width: width * 0.8, height: height * 0.1, justifyContent: 'center', borderColor: '#6F7302', marginBottom: 20}} onPress={handlePress}>
                <Text style={{ textAlign: 'center', fontSize: 20, color: '#6F7302' }}>Click here to know and discover more about deforestation in our website</Text>
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