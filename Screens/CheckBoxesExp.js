import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CheckBoxesExp = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState({
    Mango: false,
    Orange: false,
    Banana: false,
    Apple: false,
    PineApple: false,
  });

  return (
    <View style={styles.appContainer}>
      

      <View style={styles.BodyView}>
        <View style={styles.CheckBoxWrapper}>
          <CheckBox
            tintColors={{true: '#342f9d',false: "#342f9d"}}
            value={toggleCheckBox.Mango}
            onValueChange={newValue =>
              setToggleCheckBox(currentState => ({
                ...currentState,
                Mango: newValue,
              }))
            }
          />
          <CheckBox
            tintColors={{true: '#342f9d',false: "#342f9d"}}
            value={toggleCheckBox.Orange}
            onValueChange={newValue =>
              setToggleCheckBox(currentState => ({
                ...currentState,
                Orange: newValue,
              }))
            }
          />
          <CheckBox
            tintColors={{true: '#342f9d',false: "#342f9d"}}
            value={toggleCheckBox.Banana}
            onValueChange={newValue =>
              setToggleCheckBox(currentState => ({
                ...currentState,
                Banana: newValue,
              }))
            }
          />
          <CheckBox
            tintColors={{true: '#342f9d',false: "#342f9d"}}
            value={toggleCheckBox.Apple}
            onValueChange={newValue =>
              setToggleCheckBox(currentState => ({
                ...currentState,
                Apple: newValue,
              }))
            }
          />
          <CheckBox
            tintColors={{true: '#342f9d',false: "#342f9d"}}
            value={toggleCheckBox.PineApple}
            onValueChange={newValue =>
              setToggleCheckBox(currentState => ({
                ...currentState,
                PineApple: newValue,
              }))
            }
          />
        </View>

        <View style={styles.CBTextWrapper}>
          {Object.entries(toggleCheckBox).map(entry => {
            let CheckBoxText = entry[0];
            return (
              <View key={CheckBoxText}>
                <Text style={styles.cbText}>{CheckBoxText}</Text>
              </View>
            );
          })}
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setToggleButton(!toggleButton)}>
          <View style={styles.buttonView}>
            <Text style={styles.ShowButton}>Show</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        {Object.entries(toggleCheckBox).map(entry => {
          let CheckBoxText = entry[0];
          let CheckBoxStatus = entry[1];

          return (
            toggleButton &&
            CheckBoxStatus && (
              <View key={CheckBoxText}>
                <Text style={styles.cardText}>🟣 {CheckBoxText}</Text>
              </View>
            )
          );
        })}
      </View>
    </View>
  );
};

export default CheckBoxesExp;
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  BodyView: {
    flex: 3,
    flexDirection: 'row',
    padding: 20,
  },
  CheckBoxWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  CBTextWrapper: {
    flex: 6,
  },
  cbText: {
    color: 'black',
    fontSize: 18,
    padding: 4,
  },
  card: {
    flex: 9,
    marginHorizontal: 70,
  },
  cardText: {
    color: 'black',
    paddingVertical: 20,
    paddingLeft: 20,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#813297',
    borderRadius: 50,
    margin: 10,
  },
  buttonView: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#342f9d',
    width: 100,
    height: 35,
    borderRadius: 20,
  },
  ShowButton: {
    color: '#ffffff',
    fontSize: 18,
  },
});
