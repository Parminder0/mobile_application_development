// components/ToDoList.tsx
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function ToDoList() {
  return (
    <ScrollView style={styles.list}>
      <Text style={styles.item}>- Do laundry</Text>
      <Text style={styles.item}>- Finish assignment</Text>
      <Text style={styles.item}>- Read a book</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    maxHeight: 200,
    backgroundColor: '#fff',   // white background behind your items
    padding: 10,
  },
  item: {
    fontSize: 18,
    marginVertical: 5,
    color: '#000',             // black text
  },
});
