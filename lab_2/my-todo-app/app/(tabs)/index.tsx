// (whichever entry file you have)
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My ToDo List</Text>

      {/* Form */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          placeholderTextColor="#555"
        />
        <Button
          title="Add Task"
          onPress={() => {}}
          color="#007AFF"
        />
      </View>

      {/* List */}
      <ScrollView style={styles.list}>
        <Text style={styles.item}>- Do laundry</Text>
        <Text style={styles.item}>- Finish assignment</Text>
        <Text style={styles.item}>- Read a book</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  // solid white background
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',            // ensure black text
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    color: '#000',
    padding: 10,
    marginBottom: 10,
  },
  list: {
    backgroundColor: '#fff',
    padding: 10,
    maxHeight: 200,
  },
  item: {
    fontSize: 18,
    color: '#000',
    marginVertical: 5,
  },
});
