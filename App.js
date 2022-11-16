import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CrouselScreen from './pages/CrouselScreen';
import ScannerScreen from './pages/ScannerScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Onboard" component={CrouselScreen} options={{
            headerShown: false,
            orientation: 'portrait',
          }}/>
      <Stack.Screen name="Scanner" component={ScannerScreen} options={{
              headerShown: false,
            }}/>      
    </Stack.Navigator>
  </NavigationContainer>
  );
}

