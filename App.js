import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from  './src/store/configureStore';
import RootRedux from './Root';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootRedux />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('aploadplay', () => App);

export default App;
