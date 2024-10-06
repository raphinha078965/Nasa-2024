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
            <Text style={[styles.text, { marginTop: 20}]}> Soil is a critical component of Earth, made from the weathering of rocks and decomposition of organic matter. It consists of minerals, organic content, water, and air, forming different types such as sandy, clayey, silty, and loamy soils. Each type has specific properties affecting its use in agriculture and water retention. In Brazil, fertile soils like massapê and terra roxa are crucial for crops like sugarcane and coffee. Sustainable soil management practices, such as crop rotation and organic fertilization, are essential to maintaining soil health and fertility over time. </Text>
            <Image source={require('../assets/solo.jpg')} style={{ width: width * 0.8, height: height * 0.2, bottom: 25, alignSelf: 'center' }}/>
            <Text style={styles.text}> Soil’s color also reflects its composition; red soil, for instance, indicates the presence of iron oxides, while dark soil usually signifies high organic content, making it more fertile. Erosion and human activities like deforestation can degrade soil, leading to loss of fertility and increased desertification risks. Therefore, conservation strategies, such as planting cover crops and reducing chemical use, play a key role in ensuring long-term agricultural productivity and environmental balance. </Text> 
            <Image source={require('../assets/chão.jpg')} style={{ width: width * 0.8, height: height * 0.2, bottom: 25, alignSelf: 'center' }}/>

            <Text style={styles.text}> Understanding soil types helps in selecting appropriate crops and farming techniques. Sandy soils are better for plants that don’t require much water, while clayey soils, which retain water well, are suited for water-demanding crops. The balance between sand, silt, and clay—often called loam—is the most productive for farming because it provides good drainage and nutrient availability. In the context of global climate change, soil management becomes even more crucial for food security and sustainable agriculture practices. </Text>
            
            <TouchableOpacity style={{ backgroundColor : 'trans', borderWidth: 1, borderRadius: 10, width: width * 0.8, height: height * 0.1, justifyContent: 'center', borderColor: '#6F7302', marginBottom: 20}} onPress={handlePress}>
                <Text style={{ textAlign: 'center', fontSize: 20, color: '#6F7302' }}>Click here to know and discover more about soil in our website</Text>
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