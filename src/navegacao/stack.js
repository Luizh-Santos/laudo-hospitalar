import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicial from '../telas/home/inicial';
import Sobre from '../telas/home/sobre';
import Funcionalidades from '../telas/home/funcionalidades';
import Contato from '../telas/home/contato';
import Login from '../telas/login';
import MyTabs from './bottomtab';
import Paciente from '../telas/menu/paciente';
import Laudo from '../telas/menu/laudo';
import Favoritos from '../telas/menu/favoritos';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Inicial"
      screenOptions={{
        headerStyle: { backgroundColor: '#253B49' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: '700' },
        contentStyle: { backgroundColor: '#F4F7F8' },
      }}
    >
      <Stack.Screen name="Inicial" component={Inicial} options={{ headerShown: false }} />
      <Stack.Screen name="Sobre" component={Sobre} options={{ title: 'Sobre' }} />
      <Stack.Screen name="Funcionalidades" component={Funcionalidades} options={{ title: 'Funcionalidades' }} />
      <Stack.Screen name="Contato" component={Contato} options={{ title: 'Contato' }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Paciente" component={Paciente} options={{ title: 'Paciente' }} />
      <Stack.Screen name="Laudo" component={Laudo} options={{ title: 'Preencher Laudo' }} />
      <Stack.Screen name="Favoritos" component={Favoritos} options={{ title: 'Laudos Favoritos' }} />
    </Stack.Navigator>
  );
}
