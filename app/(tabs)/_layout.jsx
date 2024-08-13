import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

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
      <Tabs.Screen
        name="why-me"
        options={{
          tabBarLabel: "Why Me",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="person-circle-check" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="links"
        options={{
          tabBarLabel: "Links",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="link" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
