import {
  View,
  Image,
  ImageBackground,
  Pressable,
  Animated,
  Easing,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  PanGestureHandler,
  State,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const App = () => {
  const router = useRouter();

  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const shadowAnim = useRef(new Animated.Value(10)).current;
  const [dropAreaLayout, setDropAreaLayout] = useState(null);

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

  const onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: false },
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: false,
      }).start();

      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="flex-1 bg-black">
        <ImageBackground
          source={require("../assets/img/purple_light_home.png")}
          resizeMode="cover"
          className="w-full h-full"
        >
          <View className="flex-1 w-full justify-center items-center bg-transparent">
            <Text
              className="text-white font-poppins mb-2"
              style={{ fontFamily: "Poppins_400Regular" }}
            >
              (drag)
            </Text>
            <PanGestureHandler
              onGestureEvent={onGestureEvent}
              onHandlerStateChange={onHandlerStateChange}
            >
              <Animated.View
                style={[
                  styles.draggableContainer,
                  {
                    transform: [{ translateX }, { translateY }],
                    shadowRadius: shadowAnim,
                    elevation: shadowAnim,
                  },
                ]}
              >
                <Image
                  source={require("../assets/img/foto_CV.png")}
                  resizeMode="cover"
                  className="w-full h-full rounded-[30px]"
                />
              </Animated.View>
            </PanGestureHandler>

            <FontAwesome name="hand-paper-o" size={35} color="white" />

            <View className="w-[150px] h-[150px] rounded-[30px]">
              <Image
                source={require("../assets/img/arrow.png")}
                resizeMode="cover"
                className="w-full h-full rounded-[30px]"
              />
            </View>

            <Pressable
              className="w-[150px] h-[150px] "
              onLayout={(event) => setDropAreaLayout(event.nativeEvent.layout)}
              onPress={() => router.push("/why-auj")}
            >
              <Image
                source={require("../assets/img/auj_logo.png")}
                resizeMode="cover"
                className="w-full h-full rounded-[30px]"
              />
            </Pressable>
            <Text
              className="text-white font-poppins mt-2"
              style={{ fontFamily: "Poppins_400Regular" }}
            >
              (tap)
            </Text>
          </View>
        </ImageBackground>
        <StatusBar style="light" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  draggableContainer: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginBottom: 32,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    zIndex: 99,
  },
});

export default App;
