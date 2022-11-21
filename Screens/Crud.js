import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-paper';
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({name: 'applicantDB'});

const arr = [
  {id: 1, name: 'haider'},
  {id: 2, name: 'ali'},
  {id: 3, name: 'hassan0'},
  {id: 4, name: 'hassan1'},
  {id: 5, name: 'hassan2'},
  {id: 6, name: 'hassan3'},
  {id: 7, name: 'hassan4'},
];

export default function Crud() {
  const [id, setId] = useState(0);
  const [name, setname] = useState('');
  const [city, setcity] = useState('');
  const [users, setusers] = useState([]);
  const [buttonTitle, setButtonTitle] = useState('Add User');

  useEffect(() => {
    createTable();
    fetchusers();
  }, []);

  const createTable = () => {
    db.transaction(txn => {
      txn.executeSql(
        `create Table if not Exists Users (id INTEGER PRIMARY KEY AUTOINCREMENT,name varchar(20),city varchar(20))`,
        [],
        (sqltxn, res) => {
          console.log('Users Table created Successfully..');
        },
        error => {
          console, log('Error occured during Table Creation...');
        },
      );
    });
  };

  function fetchusers() {
    console.log('Fetch user List Execution Started');
    db.transaction(txn => {
      txn.executeSql(
        `Select * from Users order by id desc`,
        [],
        (sqltxn, res) => {
          let len = res.rows.length;
          let resultSet = [];
          for (let i = 0; i < len; i++) {
            let record = res.rows.item(i);
            resultSet.push({
              id: record.id,
              name: record.name,
              city: record.city,
            });
          }
          setusers(resultSet);
        },
        error => {
          console, log('Error occured during Fetching WishList...');
        },
      );
    });
  }

  function Addusers() {
    console.log('Execution Started...', `${name},${city}`);
    db.transaction(txn => {
      txn.executeSql(
        `insert into  Users (name,city) values(?,?) `,
        [name, city],
        (sqltxn, res) => {
          console.log(res);
          setId(0);
          setname('');
          setcity('');
          fetchusers();
        },
        error => {
          console, log('Error occured during Adding user...');
        },
      );
    });
  }

  function updateuser() {
    db.transaction(txn => {
      txn.executeSql(
        `update Users set name=?,city=? where id=? `,
        [name, city, id],
        (sqltxn, res) => {
          if(res.rowsAffected>0){
           console.log(res);
            Alert.alert('Success', 'user Update Successfully..');
            setId(0);
            setname('');
            setcity('');
            setButtonTitle('Add User');
            fetchusers();
          }
        },
        error => {
          console, log('Error occured during Adding user...');
        },
      );
    });
  }

  function deleteuser(id) {
    db.transaction(txn => {
      txn.executeSql(
        `delete from Users where id=?`,
        [id],
        (sqltxn, res) => {
          Alert.alert('Success...', 'Wish Deleted Successfully..');
          fetchusers();
        },
        error => {
          Alert.alert('Error', 'Error occured during Wish Deletion...');
        },
      );
    });
  }

  function saveuser() {
    if (!name) {
      Alert.alert('Warning', 'Enter user List');
      return false;
    }
    if (buttonTitle === 'Add User') {
      Addusers();
    } else {
      updateuser();
    }
  }
  function edituser(userId, userName, usercity) {
    setId(userId);
    setname(userName);
    setcity(usercity);
    setButtonTitle('Update User');
  }

  return (
    <>
      <TextInput
        style={styles.InputFields}
        mode="outlined"
        label="Name"
        value={name}
        onChangeText={val => setname(val)}
      />
        <TextInput
        style={styles.InputFields}
        mode="outlined"
        label="City"
        value={city}
        onChangeText={val => setcity(val)}
      />


      <View style={{marginVertical: 30, marginHorizontal: 100}}>
        <Button
          title={buttonTitle}
          color="dodgerblue"
          onPress={() => {
            saveuser();
          }}
        />
      </View>

      <Text
        style={{
          fontSize: 20,
          fontFamily: 'arial',
          color: 'dodgerblue',
          marginLeft: 10,
        }}>
        Users Details
      </Text>

      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={{backgroundColor: 'yellow', height: 80, margin: 10}}>
            <View style={{marginLeft: 10}}>
              <Text style={{color: 'black', fontSize: 17}}>{item.name}</Text>
              <Text style={{color: 'black', fontSize: 17}}>{item.city}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 3}}>
              <TouchableOpacity
                onPress={() => {
                  edituser(item.id, item.name, item.city);
                }}>
                <Text style={styles.button}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginLeft: 5}}
                onPress={() => {
                  deleteuser(item.id);
                }}>
                <Text style={styles.button}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  con: {
    flexDirection: 'row',
    marginTop: 20,
  },
  InputFields: {
    marginHorizontal: 40,
  },
  txt: {
    marginTop: 10,
    color: 'dodgerblue',
    fontSize: 20,
    marginHorizontal: 10,
  },
  bx: {
    //alignSelf:"center",
    width: '52%',
    height: 50,
    backgroundColor: 'lightgray',
    fontSize: 20,
    color: 'black',
    borderRadius: 10,
    marginLeft: 5,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: 70,
    backgroundColor: 'blue',
    color: '#fff',
    borderRadius: 30,
    textAlign: 'center',
  },
});
