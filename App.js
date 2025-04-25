import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [dice, setDice] = useState(1);

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setDice(result);
  }

  return (
    // View is like a <div> in React JS
    <View style={styles.container}>

      {/* Header text */}
      <Text style={styles.title}>🎲 Dice Roller</Text>

      {/* This displays the current dice number */}
      <Text style={styles.diceNumber}>{dice}</Text>

      {/* TouchableOpacity for a custom button */}
      <TouchableOpacity onPress={rollDice} style={styles.diceBtn}>
        <Text style={styles.btnTxt}>Roll the Dice</Text>
      </TouchableOpacity>

      <Text style={styles.credits}>Developed by: Umer Aslam</Text>
      
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

  diceNumber: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 30,
  },

  title: {
    fontSize: 40,
    marginBottom: 15,
    fontWeight: '600',
  },

  btnTxt: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '600',
  },

  diceBtn: {
    width: 220, // fixed width
    height: 70, // custom height
    backgroundColor: '#050303', // background color
    justifyContent: 'center', // centers text vertically
    alignItems: 'center', // centers text horizontally
    borderRadius: 25, // rounded corners
  },

  credits: {
    fontSize: 20,
    fontWeight: '500',
    color: '#160404',
    position: 'absolute',
    bottom: 20,
  }


});
