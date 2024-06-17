import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Question from '../components/Question';
import Result from '../components/Result';
import WelcomeScreen from './WelcomeScreen';
import TaskScreen from './TaskScreen';
import questions from '../data/questions.json';

const QuizScreen = () => {
  const [screen, setScreen] = useState('welcome'); // Возможные значения: 'welcome', 'task', 'quiz'
  const questionIndex = useSelector(state => state.quiz.questionIndex);

  if (screen === 'welcome') {
    return <WelcomeScreen onStart={() => setScreen('task')} />;
  }

  if (screen === 'task') {
    return <TaskScreen onStartQuiz={() => setScreen('quiz')} />;
  }

  if (questionIndex >= questions.answers.length) {
    return <Result onRestart={() => setScreen('welcome')} />;
  }

  const currentQuestion = questions.answers[questionIndex];

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Question
          question={currentQuestion.question}
          description={currentQuestion.description}
          options={currentQuestion.answer_options}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default QuizScreen;
