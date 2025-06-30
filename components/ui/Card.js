import { View,StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
function Card({children}) {
    return (
        <View style={styles.Card}>
            {children}
        </View>
    );
}
export default Card;
const styles = StyleSheet.create({
    Card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
})