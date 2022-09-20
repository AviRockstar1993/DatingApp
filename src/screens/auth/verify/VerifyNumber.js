import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Otp} from '../../../helpers/image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Primary, White} from '../../../helpers/color';
import {med} from '../../../helpers/fontSize';
import Btn from '../../../props/button/btn';

const CELL_COUNT = 6;

const VerifyNumber = ({navigation, route}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const {phone} = route.params;
  return (
    <LinearGradient colors={['#114357', '#f29492']} style={styles.VerifyView}>
      <View style={styles.OtpText}>
        <Text style={styles.headerText}>OTP</Text>
        <Otp width={200} height={200} />
        <View style={styles.headerNum}>
          <Text style={styles.headerInfo}>Code is Sent To </Text>
          <Text style={[styles.headerInfo, {color: Primary}]}> {phone} </Text>
        </View>
      </View>
      <View style={styles.otpContainer}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />

        <View style={styles.loginBtn}>
          <Btn text="Verify" />
        </View>
      </View>
    </LinearGradient>
  );
};

export default VerifyNumber;

const styles = StyleSheet.create({
  VerifyView: {
    flex: 1,
    alignItems: 'center',
  },

  codeFieldRoot: {marginTop: hp('2%')},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: White,
    textAlign: 'center',
    marginTop: hp('2%'),
    margin: 6,
    color: White,
  },
  focusCell: {
    borderColor: Primary,
  },
  OtpText: {
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  headerText: {
    color: White,
    fontSize: med,
    padding: 12,
  },
  headerNum: {
    flexDirection: 'row',
    marginTop: hp('3%'),
  },
  headerInfo: {
    color: White,
  },
  loginBtn: {
    alignItems: 'center',
  },
});
