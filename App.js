import React from 'react';
import {SafeAreaView} from 'react-native';
import Navigation from './src/navigation/navigation';
import Store from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={Store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
