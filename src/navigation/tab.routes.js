import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Laudos from "../screens/medico/Laudos";
import Configuracoes from "../screens/medico/Configuracoes";

const Tab = createBottomTabNavigator();

export default function MedicoTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Laudos" component={Laudos} />
      <Tab.Screen name="Configurações" component={Configuracoes} />
    </Tab.Navigator>
  );
}