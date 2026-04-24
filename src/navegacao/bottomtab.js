import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Menu from '../telas/menu';
import Notificacoes from '../telas/menu/notificacoes';
import Configuracoes from '../telas/configuracoes';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#253B49' },
        headerTintColor: '#FFFFFF',
        tabBarActiveTintColor: '#03989E',
        tabBarInactiveTintColor: '#6B7280',
        tabBarStyle: { height: 62, paddingBottom: 8, paddingTop: 6 },
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Laudos: 'document-text-outline',
            Notificações: 'notifications-outline',
            Configurações: 'settings-outline',
          };

          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Laudos" component={Menu} />
      <Tab.Screen name="Notificações" component={Notificacoes} />
      <Tab.Screen name="Configurações" component={Configuracoes} />
    </Tab.Navigator>
  );
}
