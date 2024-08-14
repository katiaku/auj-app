import { View, Text, SafeAreaView, ImageBackground, Image } from "react-native";
import ListItem from "../../components/ListItem";

const WhyAUJ = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ImageBackground
        source={require("../../assets/img/purple_light_why_auj.png")}
        resizeMode="fit"
        className="flex-1"
      >
        <ImageBackground
          source={require("../../assets/img/bright_purple_light_why_auj.png")}
          resizeMode="fit"
          className="flex-1"
        >
          <View className="flex-1 w-full bg-transparent justify-center items-center py-14">
            <ListItem text="Equípo" />
            <ListItem text="Intercambio" />
            <Image
              source={require("../../assets/img/team.png")}
              className="rounded-3xl"
            />
            <ListItem text="Apollo" />
            <ListItem text="Aprendizaje" />
            <ListItem text="Diversión" />
          </View>
        </ImageBackground>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WhyAUJ;
