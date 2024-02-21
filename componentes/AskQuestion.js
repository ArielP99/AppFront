import React, { useState } from 'react';
import { View, Button, TextInput, Text } from 'react-native';

const AskQuestion = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const submitQuestion = () => {
    fetch('http://192.168.100.208:5000/pregunta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `question=${encodeURIComponent(question)}`,
    })
    .then(response => response.json())
    .then(data => {
      setAnswer(data);
    })
    .catch(error => {
      console.error('Error al enviar la pregunta:', error);
    });
  };
  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setQuestion}
        value={question}
        placeholder="Escribe tu pregunta aquí"
      />
      <Button title="Enviar Pregunta" onPress={submitQuestion} />
      {answer && <Text>Respuesta: {answer}</Text>}
    </View>
  );
};
export default AskQuestion;
