import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100;

    if (isNaN(weightNum) || isNaN(heightNum) || heightNum <= 0) {
      setBmi(null);
      setCategory("Please enter valid weight and height.");
      return;
    }

    const bmiValue = (weightNum / (heightNum * heightNum)).toFixed(2);
    let bmiCategory = '';

    if (bmiValue < 18.5) bmiCategory = "Underweight";
    else if (bmiValue < 24.9) bmiCategory = "Normal weight";
    else if (bmiValue < 29.9) bmiCategory = "Overweight";
    else bmiCategory = "Obese";

    setBmi(bmiValue);
    setCategory(bmiCategory);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>BMI Calculator</Text>

        <Text style={styles.label}>Weight (kg):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />

        <Text style={styles.label}>Height (cm):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />

        <TouchableOpacity style={styles.button} onPress={calculateBMI}>
          <Text style={styles.buttonText}>Calculate BMI</Text>
        </TouchableOpacity>

        {bmi !== null && (
          <View style={styles.result}>
            <Text style={styles.resultText}>Your BMI is {bmi}</Text>
            <Text style={styles.resultCategory}>{category}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 320,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // For Android shadow
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  label: {
    alignSelf: 'center', 
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  resultCategory: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export default App;
