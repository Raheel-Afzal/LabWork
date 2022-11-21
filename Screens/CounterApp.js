import {transform} from '@babel/core';
import React, {useEffect, useRef, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const [pressOut,setPressOut]= useState(false);
  const intervalRef = useRef();

  const interval = () => {
    intervalRef.current = setInterval(() => {
      counter<999&&setCounter(prev => prev + 1);
    }, 100);
  };
  useEffect(() => {
    const intervalId = intervalRef.current;

    // also clear on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (pressOut) {
      clearInterval(intervalRef.current);
      setPressOut(false);
    }
  }, [counter]);
  const plant = () => {
    interval();
    
  };

  return (
    <View style={styles.container}>
      <Pressable
        hitSlop={{bottom: 50, left: 50, right: 50, top: 50}}
        style={styles.CenterContent}
        onPressIn={() => {
          counter<999&&setCounter(counter + 1);
        }}
        onLongPress={plant}
        onPressOut={() => {
            setPressOut(true);
        }}>
        <Text style={styles.labelAdd}>+</Text>
      </Pressable>

      <Text style={styles.labelNumber}>{counter}</Text>

      <Pressable
        hitSlop={{bottom: 50, left: 50, right: 50, top: 50}}
        style={styles.CenterContent}
        onPress={() => {
          counter > 0 && setCounter(counter - 1);
        }}>
        <Text style={styles.labelMinus}>-</Text>
      </Pressable>
      <View style={styles.CounterView}>
        <Text style={styles.CounterText}>Counter</Text>
      </View>
      <TouchableOpacity
        style={styles.ResetButton}
        onPress={() => {
          setCounter(0);
        }}>
        <Text style={styles.ResetText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CounterApp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#6c6dff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  CenterContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelNumber: {
    color: '#6c6dff',
    fontSize: 40,
    backgroundColor: '#ffffff',
    height: 70,
    width: 70,
    borderRadius: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    zIndex: 1,
  },
  labelAdd: {
    fontSize: 50,
    color: '#ffffff',
    backgroundColor: '#9192ff',
    width: 130,
    borderRadius: 50,
    position: 'absolute',
    paddingLeft: 20,
  },
  labelMinus: {
    fontSize: 50,
    color: '#ffffff',
    backgroundColor: '#9192ff',
    width: 130,
    borderRadius: 50,
    marginRigt: 0,
    textAlign: 'right',
    position: 'absolute',
    paddingRight: 20,
  },
  ResetButton: {
    backgroundColor: '#f4f5ff',
    position: 'absolute',
    top: 410,
    height: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    shadowColor: '#ec1c1c',
  },
  ResetText: {
    color: '#6c6dff',
    fontSize: 18,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
  },
  CounterView: {
    position: 'absolute',
    top: 250,
  },
  CounterText: {
    color: '#ffffff',
    fontSize: 40,
  },
});
