import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing
} from "react-native";
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  G,
  Path
} from "react-native-svg";
import AnimatedCircularProgressGradient from "react-native-conical-gradient-progress";
import AnimateNumber from "react-native-animate-number";

const DarkCirleBackground = () => {
  return (
    <Svg height="240" width="240">
      <Circle cx="120" cy="120" r="120" fill="#161A25" />
      <Defs>
        <RadialGradient
          id="grad"
          cx="172"
          cy="172"
          rx="172"
          ry="172"
          fx="172"
          fy="172"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#2C343D" stopOpacity="1" />
          <Stop offset="1" stopColor="#161B27" stopOpacity="1" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};

class TempView extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <View style={styles.box1content}>
          <DarkCirleBackground />
        </View>
      </View>
    );
  }
}

export default TempView;

const styles = StyleSheet.create({
  demo: {
    position: "absolute"
  },
  box0content: {
    transform: [{ rotate: "205deg" }]
  },
  rotateCircle: {
    transform: [{ rotate: "25deg" }]
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#121620",
    height: "100%"
  },
  appname: {
    fontFamily: "Lato Regular",
    fontWeight: "400",
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    top: 50,
    color: "#FFFFFF"
  },
  heat: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  box: {
    position: "absolute"
  },
  thermonumber: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  plus: {
    color: "white",
    fontFamily: "Lato-Light",
    fontSize: 30,
    marginRight: 5
  },
  temp: {
    color: "white",
    fontFamily: "Lato-Light",
    fontSize: 65
  },
  celciusBot: {
    top: -10,
    color: "white",
    fontFamily: "Lato-Light",
    fontWeight: "300",
    fontSize: 25
  },
  celciusLetter: {
    color: "white",
    fontFamily: "Lato-Light",
    fontSize: 25
  },
  humidity: {
    top: 50,
    flex: 1,
    flexDirection: "row",
    position: "relative"
  },
  humidityIcon: {
    bottom: -18
  },
  humidityLabels: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  humidityHeading: {
    color: "white",
    fontFamily: "Lato",
    fontSize: 11,
    color: "#9B9B9B"
  },
  humidityNumber: {
    color: "white",
    fontFamily: "Lato",
    fontSize: 11
  },
  tempNumbers: {
    position: "relative"
  },
  lowTemp: {
    position: "absolute",
    top: 70,
    left: -60,
    color: "#FFFFFF",
    fontFamily: "Lato-Light",
    fontSize: 12,
    color: "#9B9B9B"
  },
  highTemp: {
    position: "absolute",
    top: 70,
    left: 45,
    color: "#FFFFFF",
    fontFamily: "Lato-Light",
    fontSize: 12,
    color: "#9B9B9B"
  },
  tempIndicator: {
    top: 190,
    backgroundColor: "#181D29",
    borderRadius: 20,
    width: 113,
    height: 40,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  lowTempText: {
    color: "#ffffff",
    fontFamily: "Lato-Regular",
    fontSize: 16,
    left: 8
  },
  lowTempIcon: {
    position: "relative",
    left: -15,
    top: -8
  },
  hiddenText: {
    color: "white",
    opacity: 0,
    display: "none"
  },
  visibleText: {
    color: "white",
    opacity: 1
  }
});
