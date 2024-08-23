import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const ListItem = ({ text }) => {
  return (
    <View className="flex-1 flex-row items-center justify-center gap-4 ml-8">
      <AntDesign name="checkcircleo" size={24} color="white" />
      <Text
        style={{ fontFamily: "Poppins_400Regular" }}
        className="font-poppins text-white text-2xl"
      >
        {text}
      </Text>
    </View>
  );
};

export default ListItem;
