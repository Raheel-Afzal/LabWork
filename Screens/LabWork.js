import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
const Labwork = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Header}>LAB WORK</Text>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={styles.buttonText}>Login Form by 'mam Rifat'</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Labwork;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  Header: {
    backgroundColor: '#7986cb',
    height: 50,
    width: '100%',
    color: '#ffffff',
    fontSize: 25,
    fontWeight: '900',
    textAlignVertical: 'center',
    textAlign: 'center',
    marginBottom: 20,
  },
  login: {
    backgroundColor: '#e53935',
  },
  buttonText: {
    backgroundColor: 'orange',
    borderRadius: 10,
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    padding: 10,
    color: '#ffffff',
  },
});
