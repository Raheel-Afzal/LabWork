import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Home,
  CheckBoxesExp,
  CounterApp,
  EmployeeForm,
  FlatListExample,
  LoginTask,
  RadioButtonExp,
  ScrollViewExample,
  Crud,
  EmployeeFormCrud,
  EmployeeDetails,
} from './Screens/AllScreens.js';
import {StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home Screen',
            headerStyle: {
              backgroundColor: '#413bc4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 22,
            },
          }}
        />
        <Stack.Screen
          name="LoginTask"
          component={LoginTask}
          options={{
            title: 'Login Screen',
            headerStyle: {
              backgroundColor: '#423bc4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize:22,
            },
          }}
        />
        <Stack.Screen
          name="EmployeeForm"
          component={EmployeeForm}
          options={{
            title: 'Employee Form',
            headerStyle: {
              backgroundColor: '#fe8621',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 22,
            },
          }}
        />
        <Stack.Screen
          name="CheckBoxesExp"
          component={CheckBoxesExp}
          options={{
            title: 'CheckBoxes Example',
            headerStyle: {
              backgroundColor: '#342f9d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 22,
            },
          }}
        />
        <Stack.Screen
          name="RadioButtonExp"
          component={RadioButtonExp}
          options={{
            title: 'Radio Buttons Example',
            headerStyle: {
              backgroundColor: '#342f9d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 22,
            },
          }}
        />
        <Stack.Screen
          name="CounterApp"
          component={CounterApp}
          options={{
            title: 'Counter App',
            headerStyle: {
              backgroundColor: '#413bc4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 22,
            },
          }}
        />

        <Stack.Screen name="ScrollViewExample" component={ScrollViewExample} />

        <Stack.Screen
          name="FlatList"
          component={FlatListExample}
          options={{
            title: 'Flat List Example',
            headerStyle: {
              backgroundColor: '#342f9d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 22,
            },
          }}
        />
        
        <Stack.Screen name="Crud" component={Crud} />
        <Stack.Screen name="EmployeeFormCrud" component={EmployeeFormCrud} />
        <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  myHeader: {
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
});
