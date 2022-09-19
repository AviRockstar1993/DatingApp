import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const phoneInput = useRef(null);
  const [code, setCode] = useState('');
  const [confirmData, setConfirmData] = useState('');

  const sendOtp = async () => {
    try {
      if (!code.match('[0-9]{10}')) {
        alert('Please provide valid code');
      } else if (!phone.match('[0-9]{10}')) {
        alert('Please provide valid phone number');
      } else {
        const mobile = '+' + code + phone;
        const response = await auth().signInWithPhoneNumber(mobile);
        setConfirmData(response);
        console.log(response);
        alert('Otp Is Sent Please Verify It...');
        navigation.navigate('VerifyNumber');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/login_bg.jpeg')}
        resizeMode="cover"
        style={styles.imageBck}>
        <View style={styles.textInputView}>
          <View
            style={{
              borderRadius: 10,
              height: 50,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: '20%',
            }}>
            <TextInput
              style={styles.phoneContainer}
              label="Code"
              mode="flat"
              keyboardType="numeric"
              selectionColor="black"
              activeUnderlineColor="#aaaaaa"
              value={code}
              onChangeText={code => setCode(code)}
            />
          </View>

          <TextInput
            style={styles.phoneContainer}
            label="Phone Number"
            mode="flat"
            keyboardType="numeric"
            selectionColor="black"
            activeUnderlineColor="#aaaaaa"
            value={phone}
            onChangeText={phone => setPhone(phone)}
          />
        </View>
        <TouchableOpacity onPress={sendOtp}>
          <View style={styles.button}>
            <Text style={{color: 'white', fontSize: 14, fontStyle: 'normal'}}>
              Verify Number
            </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneContainer: {
    width: '75%',
    height: 50,
    backgroundColor: 'transparent',
  },
  button: {
    width: '85%',
    height: 40,
    padding: 10,
    marginLeft: 25,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  textInput: {
    paddingVertical: 0,
  },
  textInputView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    height: 55,
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
  },
  imageBck: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoginScreen;
