import { View, Image, StyleSheet, Text} from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';
import PrimaryButton from '../components/ui/PrimaryButton';
function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>

            <Image style={styles.image}
                source={require('../assets/Images/success.png')}
            />
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> round to guess the number<Text style={styles.highlight}>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}
export default GameOverScreen;
const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24
    },
    imageContainer: {
        width: 300,
        height: 300, 
        borderRadius: 150,   
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }
});