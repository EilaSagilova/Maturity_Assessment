import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StyleSheet } from 'react-native';
import store from './redux/store';
import QuizScreen from './Screens/QuizScreen';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <QuizScreen />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16,
  }
});

export default App;
