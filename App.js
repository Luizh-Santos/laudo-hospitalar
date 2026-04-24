import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./navigation/stack.routes";

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}