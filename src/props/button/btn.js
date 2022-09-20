import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Primary, White} from '../../helpers/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Btn = props => {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={props.onPress}>
      <Text style={styles.loginText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  loginButton: {
    alignItems: 'center',
    marginTop: hp('4%'),
    backgroundColor: Primary,
    padding: 12,
    width: wp('40%'),

    borderRadius: 12,
  },
  loginText: {
    color: White,
    fontSize: hp('2%'),
    fontWeight: '600',
  },
});
