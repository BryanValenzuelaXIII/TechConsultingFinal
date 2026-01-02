import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet, Image } from "react-native";


export default function ProfileButton() {
  const navigation = useNavigation();

  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <TouchableOpacity onPress={goToSettings} style={styles.container}>
      <Image 
        source={require('../../assets/icons8-user-40.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 6
  }
});