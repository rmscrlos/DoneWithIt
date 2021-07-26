import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfficeNotice from './app/components/OfficeNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/authStorage';
import { navigationRef } from './app/navigation/rootNavigation';

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) return setUser(user);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={null}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfficeNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
