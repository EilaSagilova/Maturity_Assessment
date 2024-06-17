import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { answerQuestion } from '../redux/actions/quizActions';

const Question = ({ question, description, options }) => {
  const dispatch = useDispatch();

  const handleAnswer = (value) => {
    dispatch(answerQuestion(value));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {description && (
        <ScrollView 
          style={styles.descriptionContainer} 
          showsVerticalScrollIndicator={true}
          persistentScrollbar={true}
        >
          <Text style={styles.description}>{description}</Text>
        </ScrollView>
      )}
      {options.map((option, index) => (
        <Pressable style={styles.button} onPress={() => handleAnswer(option.answer_value)}>
            <Text style={styles.text}>{option.answer}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    gap: 8,
    width: '100%',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  descriptionContainer: {
    maxHeight: 250, 
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
   button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#0F5D5D'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Question;
