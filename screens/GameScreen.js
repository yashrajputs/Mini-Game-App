import { useState, useEffect } from 'react';
import { View, StyleSheet, Alert,Text,FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';



function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }else {
        return rndNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    
    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(direction) {// direction is 'lower' or 'higher'
    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
        Alert.alert("Don't lie!", 'You know that this is wrong...', [
            { text: 'Sorry!', style: 'cancel' }
        ]);
        return;
    }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
    } else if (direction === 'higher') {
            minBoundary = currentGuess + 1;
    }
            const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
            setCurrentGuess(newRndNumber);
            setGuessRounds(prevGuessRounds => [newRndNumber,...prevGuessRounds]);
}
const guessRoundsListLength = guessRounds.length;
    return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={StyleSheet.instructionText}>Higher or Lower?</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
               <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}><Ionicons name="md-remove" size={24} color="white" /></PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
               <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons name="md-add" size={24} color="white" />
               </PrimaryButton>
               </View>
            </View>
        </Card>
       <View style={styles.listContainer}>
        <FlatList
            data={guessRounds} 
            renderItem={(itemData) => ( 
            <GuessLogItem 
            roundNumber={guessRoundsListLength - itemData.index} 
            guess={itemData.item} 
            />
        )}
            keyExtractor={(item) => item}
            />
       </View>
    </View>
    );
}
export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    }, 
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
      flexDirection: 'row',
    },
    buttonContainer: {
      flex: 1,
    },
    listContainer: {
      flex: 1,
      padding: 16,
    }

});