import { Provider } from 'react-redux';
import TabNavigator from './components/navigation/TabNavigator';
import store from './store';

export default function App() {

  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
