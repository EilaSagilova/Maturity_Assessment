import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const DialogScreen = ({ onFinish }) => {
  const [dialogIndex, setDialogIndex] = useState(0);

  const dialogs = [
    {
      text1: 'Привет! Как ты сегодня?',
      text2: 'Привет! Все отлично, а ты как?',
    },
    {
      text1: 'У меня тоже все хорошо.',
      text2: 'Это замечательно! Готов пройти викторину?',
    },
    {
      text1: 'Да, конечно! Начнем.',
      text2: 'Отлично! Поехали!',
    },
  ];
  const handlePress = () => {
    if (dialogIndex < dialogs.length - 1) {
      setDialogIndex(dialogIndex + 1);
    } else {
      onFinish();
    }
  };
  const currentDialog = dialogs[dialogIndex];
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={[styles.speechBubble, styles.speechBubble1]}>
          {currentDialog.text1}
      </Text>
      <Text style={[styles.speechBubble, styles.speechBubble2]}>
          {currentDialog.text2}
      </Text>
    </TouchableOpacity>
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
  speechBubble: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  speechBubble1: {
    alignSelf: 'flex-start',
  },
  speechBubble2: {
    alignSelf: 'flex-end',
  },
});

export default DialogScreen;
