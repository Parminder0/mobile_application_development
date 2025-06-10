// components/ToDoForm.tsx
import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function ToDoForm() {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        placeholderTextColor="#555"
      />
      <Button
        title="Add Task"
        onPress={() => {}}
        color="#007AFF"           // iOS-style blue button; adjust if you like
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',   // white background so you can see it
    color: '#000',             // black text
  },
});
