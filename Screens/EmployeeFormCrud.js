import React, {useEffect, useState} from 'react';
import {TextInput, RadioButton} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';
import {SelectList} from 'react-native-dropdown-select-list';
import {enablePromise, openDatabase} from 'react-native-sqlite-storage';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';

const EmployeeForm = ({navigation}) => {
  const db = openDatabase({name: 'employeeFormDb3'});
  // [employeesData, setEmployeesData] = useState([]);
  const jobData = ['junior lecturer', 'senior lecturer'];
  const qualData = ['Bscs', 'Mscs'];

  const [data, setData] = useState({
    name: '',
    number: '',
    gender: '',
    qualification: 'Bscs',
    job: 'junior lecturer',
    jobInfo: '',
  });

  const [toggleCheckBox, setToggleCheckBox] = useState({
    SocialMedia: false,
    Friends: false,
    NewsPaper: false,
  });

 
  const CheckBoxeshandle = () => {
    let JobInformation = '';
    Object.entries(toggleCheckBox).map(entry => {
      let CheckBoxText = entry[0];
      let CheckBoxStatus = entry[1];

      return (
        CheckBoxStatus &&
        (JobInformation = JobInformation + CheckBoxText + ',  ')
      );
    });
    setData(prev => ({...prev, jobInfo: JobInformation})); ///add job information of data state
  };
  
  useEffect(CheckBoxeshandle,[toggleCheckBox])


  const ShowData = () => {
    // const {name,number,gender,JobInformation,qualification,job} = employeesData[0];

    // Alert.alert(
    //  `Mr ${name}`,
    //  `Number: ${number} \nGender: ${gender} \nfrom: ${JobInformation} \nQualification: ${qualification} \nJob: ${job}`,

     
    //   // `Mr ${employeesData[0].name}`,
    //  // `Number: ${employeesData[0].number} \nGender: ${employeesData[0].gender} \nfrom: ${employeesData[0].JobInformation} \nQualification: ${employeesData[0].qualification} \nJob: ${employeesData[0].job}`,
    // );

    navigation.navigate('EmployeeDetails')
  };
 
  useEffect(() => {
    
    createTable();
   // fetchusers();
  }, []);
  
  const createTable = () => {
    db.transaction(txn => {
      txn.executeSql(
        `create Table if not Exists Employees (id INTEGER PRIMARY KEY AUTOINCREMENT,name varchar(120),number varchar(120),job varchar(120),qualification varchar(120),gender varchar(20),jobInformation varchar(220))`,
        [],
        (sqltxn, res) => {
          console.log('Table created Successfully..');
        },
        error => {
          console, log('Error occured during Table Creation...');
        },
      );
    });
  };
  // function fetchusers() {
  //   console.log('Fetch Employees List Execution Started');
  //   db.transaction(txn => {
  //     txn.executeSql(
  //       `Select * from Employees`,
  //       [],
  //       (sqltxn, res) => {
  //         let len = res.rows.length;
  //         let resultSet = [];
  //         for (let i = 0; i < len; i++) {
  //           let record = res.rows.item(i);
  //           resultSet.push({
  //             name: record.name,
  //             number: record.number,
  //             job: record.job,
  //             qualification: record.qualification,
  //             gender: record.gender,
  //             JobInformation: record.jobInformation,
  //           });
  //         }
  //         setEmployeesData(resultSet);
  //       },
  //       error => {
  //         console, log('Error occured during Fetching WishList...');
  //       },
  //     );
  //   });
  // }
  function Addusers() {
    
    db.transaction(txn => {
      txn.executeSql(
        `insert into  Employees (name,number,job,qualification,gender,jobInformation) values(?,?,?,?,?,?) `,
        [
          
          data.name,
          data.number,
          data.job,
          data.qualification,
          data.gender,
          data.jobInfo
        ],
        (sqltxn, res) => {
          console.log(res);
          fetchusers();
        },
        error => {
          console, log('Error occured during Adding user...');
        },
      );
    });
    
  }
  return (
    <View style={styles.AppContainer}>
      <TextInput
        style={styles.InputFields}
        mode="outlined"
        label="Name"
        value={data.name}
        onChangeText={text => setData(prev => ({...prev, name: text}))}
      />

      <TextInput
        style={styles.InputFields}
        mode="outlined"
        label="Number"
        value={data.number}
        onChangeText={text => setData(prev => ({...prev, number: text}))}
      />
      <View style={styles.DropdownJob}>
        <Text style={styles.JobText}>Select Job: </Text>
        <SelectList
          placeholder={data.job}
          setSelected={val => setData(prev => ({...prev, job: val}))}
          data={jobData}
          save="value"
        />
      </View>

      <View style={styles.Dropdown}>
        <Text style={styles.qualificationText}>Select qualification: </Text>
        <SelectList
          placeholder={data.qualification}
          setSelected={val => setData(prev => ({...prev, qualification: val}))}
          data={qualData}
          save="value"
        />
      </View>

      <View style={styles.BodyViewGender}>
        <Text style={styles.legend}>Choose Gender</Text>

        <RadioButton.Group
          onValueChange={newValue =>
            setData(prev => ({...prev, gender: newValue}))
          }
          value={data.gender}>
          <RadioButton.Item label="Male" value="Male" color="#0b54d7" />
          <RadioButton.Item label="Female" value="Female" color="#0b54d7" />
        </RadioButton.Group>
      </View>
      <Text style={styles.Choosetext}>Where do you get job Information:</Text>

      <View style={styles.BodyViewCheckBox}>
        <View style={styles.CheckBoxWrapper}>
          <CheckBox
            tintColors={{true: 'green', false: 'green'}}
            value={toggleCheckBox.SocialMedia}
            onValueChange={newValue =>
              setToggleCheckBox(currentState => ({
                ...currentState,
                SocialMedia: newValue,
              }))
            }
          />
          <CheckBox
            tintColors={{true: 'green', false: 'green'}}
            value={toggleCheckBox.Friends}
            onValueChange={newValue =>
              setToggleCheckBox(currentState => ({
                ...currentState,
                Friends: newValue,
              }))
            }
          />
          <CheckBox
            tintColors={{true: 'green', false: 'green'}}
            value={toggleCheckBox.NewsPaper}
            onValueChange={newValue =>
              setToggleCheckBox(currentState => ({
                ...currentState,
                NewsPaper: newValue,
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
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                //  ShowData();
                
                Addusers();
              }}>
              <View style={styles.buttonView}>
                <Text style={styles.ShowButton}>Apply</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                ShowData();
                
              }}>
              <View style={styles.buttonView}>
                <Text style={styles.ShowButton}>Show Data</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EmployeeForm;

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20,
  },

  InputFields: {
    marginHorizontal: 25,
    marginVertical: 5,
  },
  BodyViewGender: {
    marginHorizontal: 25,
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  legend: {
    paddingHorizontal: 7,
    position: 'absolute',
    top: -10,
    left: 10,
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  Choosetext: {
    backgroundColor: '#ff8621',
    height: 40,
    width: 300,
    paddingTop: 9,
    paddingLeft: 15,
    color: '#ffffff',
    fontSize: 18,
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  BodyViewCheckBox: {
    flex: 3,
    flexDirection: 'row',
    paddingLeft: 20,
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
  buttonView: {
    marginLeft: 65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff8621',
    width: 100,
    height: 35,
    borderRadius: 20,
    marginTop: 20,
  },
  ShowButton: {
    color: '#ffffff',
    fontSize: 18,
  },
  Dropdown: {
    marginTop: 5,
    flexDirection: 'row',
    marginRight: 26,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  DropdownJob: {
    marginRight: 26,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  qualificationText: {
    paddingRight: 70,
    fontSize: 16,
    color: 'black',
  },
  JobText: {
    paddingRight: 70,
    fontSize: 16,
    color: 'black',
  },

  picker: {
    backgroundColor: '#eeeeee',
    marginHorizontal: 30,
  },
});
