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
            <Text style={[styles.text, { marginTop: 20}]}> Agricultural technology is revolutionizing the way farmers cultivate crops and manage their resources. Innovations such as GPS and drones enable precision farming, allowing farmers to monitor soil health and crop conditions in real time. This technology helps optimize the use of water, fertilizers, and pesticides, leading to increased efficiency and reduced environmental impact. </Text>
            <Image source={require('../assets/tech1.jpg')} style={{ width: width * 0.8, height: height * 0.2, bottom: 25, alignSelf: 'center' }}/>
            <Text style={styles.text}> Data analytics plays a crucial role in agricultural technology, providing insights that assist farmers in making informed decisions. By analyzing various data points, farmers can better understand weather patterns, pest populations, and crop performance, ultimately improving yields and sustainability. </Text> 
            <Image source={require('../assets/tech2.jpg')} style={{ width: width * 0.8, height: height * 0.2, bottom: 25, alignSelf: 'center' }}/>

            <Text style={styles.text}> The adoption of advanced technologies in agriculture is essential for addressing global food security challenges. As the world’s population continues to grow, leveraging these tools will ensure that food production remains sustainable and efficient, contributing to a more resilient agricultural sector. </Text>
            
            <TouchableOpacity style={{ backgroundColor : 'trans', borderWidth: 1, borderRadius: 10, width: width * 0.8, height: height * 0.1, justifyContent: 'center', borderColor: '#6F7302', marginBottom: 20}} onPress={handlePress}>
                <Text style={{ textAlign: 'center', fontSize: 20, color: '#6F7302' }}>Click here to know and discover more about agricultural technologies in our website</Text>
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
});{/*
Agricultural technology is revolutionizing the way farmers cultivate crops and manage their resources. Innovations such as GPS and drones enable precision farming, allowing farmers to monitor soil health and crop conditions in real time. This technology helps optimize the use of water, fertilizers, and pesticides, leading to increased efficiency and reduced environmental impact.

Data analytics plays a crucial role in agricultural technology, providing insights that assist farmers in making informed decisions. By analyzing various data points, farmers can better understand weather patterns, pest populations, and crop performance, ultimately improving yields and sustainability.

The adoption of advanced technologies in agriculture is essential for addressing global food security challenges. As the world’s population continues to grow, leveraging these tools will ensure that food production remains sustainable and efficient, contributing to a more resilient agricultural sector */}