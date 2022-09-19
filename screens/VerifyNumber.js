import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {TextInput} from 'react-native-paper';

const VerifyNumber = () => {
  const [code, setCode] = useState('');

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 15,
      }}>
      <TextInput
        label="Code"
        mode="outlined"
        keyboardType="numeric"
        selectionColor="black"
        activeUnderlineColor="#aaaaaa"
        value={code}
        onChangeText={code => setCode(code)}
      />
      <View style={{marginTop: 10}}>
        <Button
          title="Confirm Code"
          onPress={() => alert('Otp fetched successfully')}
        />
      </View>
    </View>
  );
};

export default VerifyNumber;
