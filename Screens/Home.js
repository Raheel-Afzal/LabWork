import React from 'react'
import {Button, View, Text, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
    return (
      
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Button
            title="Employee Form"
            onPress={() =>{ 
              navigation.navigate('EmployeeForm')
              console.log(navigation)
          }}
          />
          <Button
            title="Login Task"
            onPress={() => navigation.navigate('LoginTask')}
          />
          <Button
            title="Flat List Example"
            onPress={() => navigation.navigate('FlatList')}
          />
          <Button
            title="Scroll View Example"
            onPress={() => navigation.navigate('ScrollViewExample')}
          />
          <Button
            title="CheckBoxes Example"
            onPress={() => navigation.navigate('CheckBoxesExp')}
          />
          <Button
            title="Radio Button Example"
            onPress={() => navigation.navigate('RadioButtonExp')}
          />
          <Button
            title="Counter App"
            onPress={() => navigation.navigate('CounterApp')}
          />
          <Button
            title="Crud Task"
            onPress={() => navigation.navigate('Crud')}
          />
          <Button
            title="Employee Form Crud "
            onPress={() => navigation.navigate('EmployeeFormCrud')}
          />
          
        </View>
      );
    
}

export default Home