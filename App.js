import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableNativeFeedback} from 'react-native';
import Main from './src/components/Main.jsx';
import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
      <NativeRouter>
        <Main/>
      </NativeRouter>
    </>
)
}