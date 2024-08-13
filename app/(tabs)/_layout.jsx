import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#22bcb5",
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tabs.Screen
        name="why-auj"
        options={{
          tabBarLabel: "Why AUJ",
          tabBarIcon: ({ color }) => (
            <AntDesign name="team" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
