import { StyleSheet, Image, View } from "react-native";
import React from "react";

const success =
  "https://cdni.iconscout.com/illustration/premium/thumb/successful-business-team-5364510-4487845.png?f=webp";
const failure =
  "https://cdni.iconscout.com/illustration/premium/thumb/startup-failure-5893207-4890536.png?f=webp";
const home =
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjWQq5nu0xlKdOL8sdLlT2V_-bvFShoox6VA&usqp=CAU";
  // "https://img.favpng.com/16/2/22/father-lds-general-conference-the-church-of-jesus-christ-of-latter-day-saints-book-of-mormon-clip-art-png-favpng-3eFWHuj8HiCdkd20nb8tC0wG1.jpg";
  "https://is3-ssl.mzstatic.com/image/thumb/Purple62/v4/d4/fd/d2/d4fdd2bf-4bc1-a668-1e6b-c26b03884c50/source/512x512bb.jpg";

const Banner = ({ type }) => {
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
    borderRadius: 50,
  },
});
