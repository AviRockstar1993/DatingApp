import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import PhoneInput from 'react-native-phone-input';

const LoginScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const phoneInput = useRef(null);
  const buttonPress = () => {
    alert(phoneInput + '' + phone);
  };

  const register = () => {
    navigation.navigate('VerifyNumber', {
      country_code: '+' + 91,
      number: phone,
    });
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
            }}>
            <PhoneInput
              ref={phoneInput}
              defaultCode="IN"
              layout="first"
              withShadow
              autoFocus
              containerStyle={styles.phoneContainer}
              textContainerStyle={styles.textInput}
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
        <TouchableOpacity onPress={register}>
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
    width: '80%',
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
