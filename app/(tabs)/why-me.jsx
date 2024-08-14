import { View, SafeAreaView, ImageBackground, Image } from "react-native";
import ListItem from "../../components/ListItem";

const WhyMe = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ImageBackground
        source={require("../../assets/img/bright_cyan_light_why_me.png")}
        resizeMode="fit"
        className="flex-1"
      >
        <View className="flex-1 w-full bg-transparent justify-center items-start py-14">
          <ListItem text="Pasión por TIC" />

          <Image
            source={require("../../assets/img/lego.png")}
            className="rounded-3xl self-center mb-4"
          />
          <ListItem text="Ganas de aprender" />
          <ListItem text="Ganas de aportar" />
          <ListItem text="Experiencia" />
          <ListItem text="Buen humor" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WhyMe;
