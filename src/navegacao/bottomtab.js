import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from '../telas/menu';
import Configuracoes from '../telas/configuracoes';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Configuracoes" component={Configuracoes} />
    </Tab.Navigator>
  );
}

