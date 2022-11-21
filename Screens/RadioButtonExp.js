import react, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';
const RadioButtonExp = () => {
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.BodyView}>
        <Text style={styles.Choosetext}>Choose Gender:</Text>
        <RadioButton.Group
          onValueChange={newValue => setGender(newValue)}
          value={gender}>
          <View>
            <RadioButton.Item label="Male" value="Male" color="#0b54d7" />
          </View>
          <View>
            <RadioButton.Item label="Female" value="Female" color="#0b54d7" />
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.BodyView}>
        <Text style={styles.Choosetext}>Choose Marital Status:</Text>
        <RadioButton.Group
          onValueChange={newValue => setMaritalStatus(newValue)}
          value={maritalStatus}>
          <View>
            <RadioButton.Item label="Married" value="married" color="#0b54d7" />
          </View>
          <View>
            <RadioButton.Item label="Single" value="single" color="#0b54d7" />
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.Card}>
        <Text style={styles.Cardtext}>Your Gender is: {gender}</Text>
        <Text style={styles.Cardtext}>Your Marital Status is: {maritalStatus} </Text>
      </View>
      
    </View>
  );
};

export default RadioButtonExp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
 
  BodyView: {
    padding: 20,
  },
  text: {
    color: 'black',
  },
  HeadingText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Choosetext:{
    backgroundColor:'#342f9',
    height:40,
    paddingTop:9,
    paddingLeft:15,
    color:"#ffffff",
    borderRadius:20
  },
  Card:{
    backgroundColor:"#342f9d",
    margin:20,
    height:100,
    padding:20,
    borderRadius:30,
    justifyContent:'center',

  },
  Cardtext:{
    color:"#ffffff",
    fontSize:20,
    padding:5,
  }

});
