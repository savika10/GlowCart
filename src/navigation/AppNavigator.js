import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import { SCREENS } from '../utils/constants';
import { useAuthStore } from '../store/authStore';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <>
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen
            name={SCREENS.PRODUCT_DETAILS}
            component={ProductDetailsScreen}
            options={{ headerShown: false }} // Disable React Navigation header
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
