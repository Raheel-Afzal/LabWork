import React, {useState, useEffect} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewBase,
  Modal,
} from 'react-native';
import {enablePromise, openDatabase} from 'react-native-sqlite-storage';

import LinearGradient from 'react-native-linear-gradient';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {TextInput} from 'react-native-paper';

const EmployeeDetails = () => {
  const db = openDatabase({name: 'employeeFormDb3'});
  const [modalVisible, setModalVisible] = useState(false);
  const [employeesData, setEmployeesData] = useState([
    {
      name: '',
      number: '',
      job: '',
      qualification: '',
      gender: '',
      jobInformation: '',
    },
  ]);

  const [updateData, setUpdateData] = useState({});

  const HandleEdit = ({item}) => {
    setUpdateData({...item});
    setModalVisible(true);
  };

  /////////////////////////////----Fetch User----////////////////////

  const fetchusers = () => {
    console.log('Fetch Employees List Execution Started');
    db.transaction(txn => {
      txn.executeSql(
        `Select * from Employees`,
        [],
        (sqltxn, res) => {
          let len = res.rows.length;
          let resultSet = [];
          for (let i = 0; i < len; i++) {
            let record = res.rows.item(i);
            resultSet.push({
              id: record.id,
              name: record.name,
              number: record.number,
              job: record.job,
              qualification: record.qualification,
              gender: record.gender,
              jobInformation: record.jobInformation,
            });
          }
          setEmployeesData(resultSet);
        },
        error => {
          console, log('Error occured during Fetching WishList...');
        },
      );
    });
  };

  /////////////////////////////----Delete User----////////////////////

  const deleteuser = id => {
    db.transaction(txn => {
      txn.executeSql(
        `delete from Employees where id=?`,
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
  };

  /////////////////////////////----Update User----////////////////////

  const updateuser = () => {
    const {id,name, number, job, qualification, gender, jobInformation} =
      updateData;
    console.log(
      `id:${id} Name: ${name} \n number: ${number} \n gender: ${gender} \n qualification: ${qualification} \n job: ${job} \n job information: ${jobInformation}`,
    );
    db.transaction(txn => {
      txn.executeSql(
        `UPDATE Employees set name=?,number=?,job=?,qualification=?,gender=?,jobInformation=? where id=? `,
        [name, number, job, qualification, gender, jobInformation,id],
        (sqltxn, result) => {
        console.log(result);
          if(result.rowsAffected>0){
           
              Alert.alert('Success', 'user Update Successfully..');
              fetchusers();

          }  
        },
        error => {
          console, log('Error occured during Adding user...');
        },
      );
    });
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    fetchusers();
  }, []);
  return (
    <View style={modalVisible?styles.AppContainerDisable:styles.AppContainerActive}>
      <View style={styles.Container}>
        <FlatList
          data={employeesData}
          renderItem={({item}) => {
            return (
              <View style={styles.Card}>
                <Text style={styles.text}>id: {item.id}</Text>

                <Text style={styles.text}>Name: {item.name}</Text>
                <Text style={styles.text}>Number: {item.number}</Text>
                <Text style={styles.text}>Gender: {item.job}</Text>
                <Text style={styles.text}>
                  qualification: {item.qualification}
                </Text>
                <Text style={styles.text}>Job: {item.gender}</Text>
                <Text style={styles.text}>
                  Job Information: {item.jobInformation}
                </Text>

                <View style={styles.CardButton}>
                  <TouchableOpacity
                    style={styles.EditButton}
                    onPress={() => HandleEdit({item})}>
                    <Text style={styles.ButtonText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.DeleteButton}
                    onPress={() => {
                      deleteuser(item.id);
                    }}>
                    <Text style={styles.ButtonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
      {employeesData.length < 1 && (
        <View style={styles.NoData}>
          <Text style={styles.NotDataText}>
            You Have No data yet. Please Add Some!!!
          </Text>
        </View>
      )}

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.ModalHeaderText}>Update Data</Text>

              <TextInput
                style={styles.InputFields}
                mode="outlined"
                label="Name"
                value={updateData.name}
                onChangeText={newText => {
                  setUpdateData(prev => ({...prev, name: newText}));
                }}
              />

              <TextInput
                style={styles.InputFields}
                mode="outlined"
                label="Number"
                value={updateData.number}
                onChangeText={newText => {
                  setUpdateData(prev => ({...prev, number: newText}));
                }}
              />

              <TextInput
                style={styles.InputFields}
                mode="outlined"
                label="Gender"
                value={updateData.gender}
                onChangeText={newText => {
                  setUpdateData(prev => ({...prev, gender: newText}));
                }}
              />

              <TextInput
                style={styles.InputFields}
                mode="outlined"
                label="Qualification"
                value={updateData.qualification}
                onChangeText={newText => {
                  setUpdateData(prev => ({...prev, qualification: newText}));
                }}
              />

              <TextInput
                style={styles.InputFields}
                mode="outlined"
                label="job"
                value={updateData.job}
                onChangeText={newText => {
                  setUpdateData(prev => ({...prev, job: newText}));
                }}
              />

              <TextInput
                style={styles.InputFields}
                mode="outlined"
                label="job Information"
                value={updateData.jobInformation}
                onChangeText={newText => {
                  setUpdateData(prev => ({...prev, jobInformation: newText}));
                }}
              />

              <Pressable
                style={styles.modalButton}
                onPress={() => updateuser()}>
                <Text style={styles.textStyle}>update</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default EmployeeDetails;
const styles = StyleSheet.create({
  AppContainerActive: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
   AppContainerDisable: {
    flex: 1,
    opacity:0.2,
    backgroundColor: '#f2f2f2',
  },
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
    borderColor: '#ced0d2',
    borderWidth: 3,
    height: 200,
    width: 300,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    marginBottom: 8,
    justifyContent: 'center',
  },
  CardButton: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    marginLeft: 5,
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
    fontSize: 15,
    fontWeight: 'bold',
  },
  NoData: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
  },
  NotDataText: {
    color: 'white',
    backgroundColor: '#eea52d',
    padding: 20,
    fontSize: 16,
    borderRadius: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: 400,
    width: 250,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  ModalHeaderText: {
    alignSelf: 'center',
    borderRadius: 20,
    width: 150,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
    backgroundColor: '#49c658',
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#49c658',
    width: 70,
    alignSelf: 'flex-end',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  InputFields: {
    height: 30,
    width: 180,
    marginBottom: 10,
  },
});
