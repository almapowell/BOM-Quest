import { StyleSheet, Image, View } from "react-native";
import React from "react";

const success =
  "https://cdni.iconscout.com/illustration/premium/thumb/successful-business-team-5364510-4487845.png?f=webp";
const failure =
  "https://cdni.iconscout.com/illustration/premium/thumb/startup-failure-5893207-4890536.png?f=webp";
const home =
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWc4-4cvMsEwhRs_W7KqI-SU34cnjeHj3e0w&usqp=CAU"; // lamanite
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xeef773GqnQR9StWdmAeIXeSnMGxBs4jSA&usqp=CAU"; // ctr
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpe9oLh5mlYH95WmNeYls8GACRfyVCSNs-FQ&usqp=CAU"; // missionary shaking hand

const Banner = ({ type }) => {
  console.log(type);
  const getBannerImg = () => {
    switch (type) {
      case "success":
        return success;
      case "failure":
        return failure;
      case "home":
        return home;
      default:
        return home;
    }
  };
  return (
    <View style={styles.bannerContainer}>
      <Image
        source={{
          uri: getBannerImg(),
        }}
        style={styles.banner}
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  banner: {
    height: 300,
    width: 300,
  },
});
