import {
  View,
  Image,
  ImageBackground,
  Pressable,
  Animated,
  Easing,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const App = () => {
  const router = useRouter();
  const shadowAnim = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shadowAnim, {
          toValue: 30,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
        Animated.timing(shadowAnim, {
          toValue: 10,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, [shadowAnim]);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ImageBackground
        source={require("../assets/img/purple_light_home.png")}
        resizeMode="cover"
        className="w-full h-full"
      >
        <View className="flex-1 w-full bg-transparent justify-center items-center">
          <Animated.View
            style={{
              width: 150,
              height: 150,
              borderRadius: 20,
              marginBottom: 32,
              shadowColor: "#fff",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.9,
              shadowRadius: shadowAnim,
            }}
          >
            <Image
              source={require("../assets/img/foto_CV.png")}
              resizeMode="cover"
              className="w-full h-full rounded-3xl"
            />
          </Animated.View>

          <FontAwesome name="hand-paper-o" size={35} color="white" />

          <View className="w-[150px] h-[150px]">
            <Image
              source={require("../assets/img/arrow.png")}
              resizeMode="cover"
              className="w-[150px] h-[150px] rounded-3xl"
            />
          </View>

          <Pressable
            className="w-[150px] h-[150px] rounded-3xl"
            onPress={() => router.push("/why-auj")}
          >
            <Image
              source={require("../assets/img/auj_logo.png")}
              resizeMode="cover"
              className="w-full h-full rounded-3xl"
            />
          </Pressable>
        </View>
      </ImageBackground>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default App;
