import React from 'react';
import { StyleSheet, View } from 'react-native';
import UploadPDF from './componentes/UploadPDF';
import AskQuestion from './componentes/AskQuestion';

export default function App() {
  return (
    <View style={styles.container}>
      <UploadPDF />
      <AskQuestion />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
