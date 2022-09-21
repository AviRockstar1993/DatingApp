import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Love} from '../../../helpers/image';
import {Primary, White} from '../../../helpers/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Btn from '../../../props/button/btn';
import {med} from '../../../helpers/fontSize';
import auth from '@react-native-firebase/auth';
import {useSelector, useDispatch} from 'react-redux';

import {DatingAction} from '../../../redux/slice';

const LoginScreen = ({navigation}) => {
  const [phone, setphone] = useState('');
  const [code, setCode] = useState('+' + 91);

  const dispatch = useDispatch();

  const signInWithPhoneNumber = async phone => {
    const confirmation = await auth().signInWithPhoneNumber(phone);
    // setConfirm(confirmation);
    dispatch(DatingAction.SetConfrimationOtp(confirmation));
  };

  const LoginBtn = phone => {
    if (phone.length === 10) {
      let pnum = code + phone;
      signInWithPhoneNumber(pnum).then(() => {
        navigation.navigate('VerifyNumber', {
          phone: code + phone,
        });
      });
    } else if (phone.length === '' || null || undefined) {
      Alert.alert('Please Enter The  Number');
    } else {
      Alert.alert('The Number is invalid');
    }
  };

  return (
    <LinearGradient colors={['#114357', '#f29492']} style={styles.loginView}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.loginView}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{alignItems: 'center'}}>
              <Love width={400} height={400} />
              <View style={styles.textView}>
                <Text style={styles.code}>{code}</Text>
                <TextInput
                  placeholder="PhoneNumber "
                  value={phone}
                  onChangeText={text => setphone(text)}
                  placeholderTextColor={White}
                  keyboardAppearance="dark"
                  keyboardType="number-pad"
                  style={styles.numberText}
                />
              </View>
              <View style={{alignItems: 'center'}}>
                <Btn
                  text="Login"
                  onPress={() => {
                    LoginBtn(phone);
                  }}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginView: {
    flex: 1,

    alignItems: 'center',
  },
  textView: {
    flexDirection: 'row',
    width: wp('90%'),
    borderColor: White,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 5,
  },
  code: {
    padding: 12,
    color: White,
    fontSize: med,

    borderColor: White,
    backgroundColor: Primary,
  },
  numberText: {
    padding: 12,
    width: wp('60%'),

    borderRadius: 12,
    marginLeft: hp('1%'),
    fontSize: hp('2%'),
    color: White,
  },
  loginButton: {
    alignItems: 'center',
    marginTop: hp('4%'),
    backgroundColor: Primary,
    padding: 12,
    width: wp('40%'),
    left: hp('15%'),
    borderRadius: 12,
  },
  loginText: {
    color: White,
    fontSize: hp('2%'),
    fontWeight: '600',
  },
});
