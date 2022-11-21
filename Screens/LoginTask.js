import React from 'react';
import {
  StyleSheet,
  View,
  AppContainer,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';

const LoginTask = () => {
  const [email, setEmail] = React.useState('');

  return (
    <>
      <View style={styles.AppContainer}>
        <View style={styles.Container}>
          <Image style={styles.gymLogo} source={require('../Assets/gym.jpg')} />
          <TextInput
            style={styles.InputFields}
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.InputFields}
            mode="outlined"
            label="Password"
            secureTextEntry
            right={<TextInput.Icon icon={require('../Assets/eye.png')} />}
          />
          <TouchableOpacity style={styles.LoginButton}>
            <Text style={styles.ButtonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.Sperator}>
            <View style={styles.Line}></View>
            <Text style={styles.LineText}>OR</Text>
            <View style={styles.Line}></View>
          </View>
          <TouchableOpacity style={styles.LoginButtonApple}>
          <Image style={styles.appleLogo} source={require('../Assets/apple.png')} />    
            <Text style={styles.ButtonText}>Login With Apple</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LoginTask;

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  Container: {
    flex: 1,
    margin: 50,
  },
  gymLogo: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderWidth: 3,
    borderColor: '#423bc4',
    borderRadius: 100,
    marginBottom: 50,
  },
  appleLogo:{
    height:22,
    width:22,
  },
  InputFields: {
    marginVertical: 5,
  },
  LoginButton: {
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: '#423bc4',
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginButtonApple:{
    flexDirection:'row',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#423bc4',
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    color: '#ffffff',
    fontFamily: 'Gill Sans',
    fontSize: 20,
    fontWeight: '700',
  },
  Sperator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Line: {
    height: 2,
    backgroundColor: 'black',
    width: '40%',
  },
  LineText: {
    fontWeight: '600',
    color: 'black',
    paddingHorizontal: 5,
  },

});
