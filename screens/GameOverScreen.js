import { View, Text, StyleSheet } from 'react-native';
function GameOverScreen({ userNumber, onRestart }) {
    return (
        <View style={styles.screen}>
            <Text>The game is over!</Text>
            <Text>Number was: {userNumber}</Text>
            <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
        </View>
    );
}
export default GameOverScreen;