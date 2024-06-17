import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

const TaskScreen = ({ onStartQuiz }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ваша задача</Text>
      <Text style={styles.description}>
        Ответить на вопросы максимально точно!
      </Text>
      <Pressable style={styles.button} onPress={onStartQuiz}>
          <Text style={styles.text}>Начать опрос</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
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

export default TaskScreen;
