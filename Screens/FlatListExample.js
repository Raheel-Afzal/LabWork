import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewBase,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FlatListExample = () => {
  const [myData,setMyData] = useState([
    {
      id: '1',
      name: 'Raheel Afzal',
      contact: '0321-4832145',
      address: 'House#1',
    },
    {id: '2', name: 'Saqib Shah', contact: '0341-4322154', address: 'House#2'},
    {
      id: '3',
      name: 'Aqib Siddique',
      contact: '0323-1254674',
      address: 'House#3',
    },
    {
      id: '4',
      name: 'Sohaib Hassan',
      contact: '0316-3516412',
      address: 'House#4',
    },
    {
      id: '5',
      name: 'Ahsam Malik',
      contact: '0346-4832153',
      address: 'House#5',
    },
    {id: '6', name: 'Ammar Afzal', contact: '0345-4832523', address: 'House#6'},
    {
      id: '7',
      name: 'Osama Shakil',
      contact: '0332-4832245',
      address: 'House#7',
    },
    {id: '8', name: 'Ehsan Rafi', contact: '0334-4832674', address: 'House#8'},
    
  ]);
  
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      
      <View style={styles.Container}>
        <FlatList
          data={myData}
          renderItem={({item}) => {
            return (
              <View style={styles.Card}>
                <TouchableOpacity 
                onPress={()=>{
                  Alert.alert(`Id: ${item.id}`,`Name: ${item.name} \nContact: ${item.contact} \nAddress: ${item.address}`)
                }}
                >
                  <Text style={styles.text}>Id: {item.id}</Text>
                  <Text style={styles.text}>Name: {item.name}</Text>
                  <Text style={styles.text}>Contact: {item.contact}</Text>
                  <Text style={styles.text}>Address: {item.address}</Text>
                </TouchableOpacity>

                <View style={styles.CardButton}>
                  <TouchableOpacity style={styles.EditButton}>
                    <Text style={styles.ButtonText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.DeleteButton}>
                    <Text style={styles.ButtonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default FlatListExample;
const styles = StyleSheet.create({

  Container: {
    margin: 30,
  },
  linearGradient: {
    height: 120,
    width: 350,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    marginBottom: 5,
  },
  Card: {
    flexDirection: 'row',
    borderColor: '#ced0d2',
    borderWidth: 3,
    height: 120,
    width: 300,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  CardButton: {
    paddingLeft: 50,
    justifyContent: 'center',
  },
  EditButton: {
    backgroundColor: '#342f9d',
    height: 30,
    width: 60,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  DeleteButton: {
    backgroundColor: '#AD383E',
    height: 30,
    width: 60,
    marginTop: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
