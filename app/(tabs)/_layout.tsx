import React from "react";
import { Stack, Tabs } from "expo-router";

const TabLayout = () => {
  return (
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>     
  );
};

export default TabLayout;
