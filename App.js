import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableNativeFeedback} from 'react-native';
import Main from './src/components/Main.jsx';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return <NativeRouter><Main/></NativeRouter>
}