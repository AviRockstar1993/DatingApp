import React from 'react';
import {View, Text} from 'react-native';

const VerifyNumber = ({route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Country code:- {route.params.country_code}</Text>
      <Text>Phone Number:- {route.params.number}</Text>
    </View>
  );
};

export default VerifyNumber;
