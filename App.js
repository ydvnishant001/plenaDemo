import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import { store } from './utilities/redux/store';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ShoppingCartScreen from './screens/ShoppingCartScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();
  const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter };

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor}/>
      <Provider store={store}>
      <Stack.Navigator screenOptions={{ header: () => {} }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen}/>
        <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen}/>
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
