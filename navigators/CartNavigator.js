import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../Screens/Cart/Cart";
import CheckoutNavigator from "./CheckoutNavigator";
import LoginfromCart from "../Screens/Cart/LoginfromCart";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoginfromCart"
        component={LoginfromCart}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default function CartNavigator() {
  return <MyStack />;
}
