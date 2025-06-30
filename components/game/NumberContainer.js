import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
export default NumberContainer;
const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: Colors.accent400,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
  numberText: {
      color: Colors.accent400,
      fontSize: 28,
      fontWeight: 'bold',
  },
});