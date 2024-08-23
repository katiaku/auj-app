import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Linking,
  ImageBackground,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Links = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ImageBackground
        source={require("../../assets/img/bright_cyan_light_links.png")}
        resizeMode="fit"
        className="flex-1"
      >
        <ImageBackground
          source={require("../../assets/img/bright_purple_light_links.png")}
          resizeMode="fit"
          className="flex-1 justify-center items-center"
        >
          <View className="h-1/2">
            <View className="flex-1 h-1/2 justify-center items-center">
              <Pressable
                className="flex-1 flex-row items-center justify-center gap-4"
                onPress={() => {
                  Linking.openURL(
                    "https://www.linkedin.com/in/ekaterina-kushnir-mikhaylova/",
                  );
                }}
              >
                <FontAwesome name="linkedin-square" size={24} color="white" />
                <Text
                  style={{ fontFamily: "Poppins_400Regular" }}
                  className="font-poppins text-white text-2xl"
                >
                  LinkedIn
                </Text>
              </Pressable>
              <Pressable
                className="flex-1 flex-row items-center justify-center gap-4"
                onPress={() => {
                  Linking.openURL("https://github.com/katiaku");
                }}
              >
                <FontAwesome name="github-alt" size={24} color="white" />
                <Text
                  style={{ fontFamily: "Poppins_400Regular" }}
                  className="font-poppins text-white text-2xl"
                >
                  GitHub
                </Text>
              </Pressable>
              <Pressable
                className="flex-1 flex-row items-center justify-center gap-4"
                onPress={() => {
                  Linking.openURL("https://codepen.io/katiaku/pens/public");
                }}
              >
                <FontAwesome name="codepen" size={24} color="white" />
                <Text
                  style={{ fontFamily: "Poppins_400Regular" }}
                  className="font-poppins text-white text-2xl"
                >
                  CodePen
                </Text>
              </Pressable>
              <Pressable
                className="flex-1 flex-row items-center justify-center gap-4"
                onPress={() => {
                  Linking.openURL("https://katiaku-portfolio.vercel.app/");
                }}
              >
                <MaterialCommunityIcons name="web" size={24} color="white" />
                <Text
                  style={{ fontFamily: "Poppins_400Regular" }}
                  className="font-poppins text-white text-2xl"
                >
                  Portfolio
                </Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Links;
