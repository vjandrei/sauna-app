import React, { Component, PureComponent } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing
} from "react-native";
import firebase from "react-native-firebase";
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  G,
  Path
} from "react-native-svg";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import AnimatedCircularProgressGradient from "react-native-conical-gradient-progress";
import AnimateNumber from "react-native-animate-number";

const androidConfig = {
  clientId:
    "593087916586-8hbilfbqujevkn5rok590f2t7o8tdnq2.apps.googleusercontent.com",
  appId: "mokki-sauna",
  apiKey: "AIzaSyAN0C2SscumpN7yDGeoEnb2lo7zR096gbA",
  databaseURL: "https://mokki-sauna.firebaseio.com",
  storageBucket: "mokki-sauna.appspot.com",
  messagingSenderId: "593087916586",
  projectId: "mokki-sauna",
  persistence: true
};

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

const DarkCircleMask = () => {
  return (
    <Svg height="240" width="240">
      <Circle cx="120" cy="120" r="120" fill="#121620" />
    </Svg>
  );
};

const RadialBackground = () => {
  return (
    <Svg height="270" width="270">
      <Defs>
        <RadialGradient
          cx="125"
          cy="125"
          fx="125"
          fy="125"
          r="125"
          id="RadialGradient"
        >
          <Stop stopColor="#232834" offset="0" />
          <Stop stopColor="#232834" offset="200" />
        </RadialGradient>
      </Defs>
      <G
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeDasharray="471,9999999"
        strokeLinecap="round"
      >
        <G
          transform="translate(-55.000000, -240.000000)"
          stroke="url(#RadialGradient)"
          strokeWidth="20"
        >
          <G transform="translate(30.000000, 220.000000)">
            <G>
              <Path
                d="M150,250 C205.228475,250 250,205.228475 250,150 C250,94.771525 205.228475,50 150,50 C94.771525,50 50,94.771525 50,150 C50,205.228475 94.771525,250 150,250 Z"
                transform="translate(150.000000, 150.000000) rotate(-45.000000) translate(-150.000000, -150.000000) "
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
};

const HeatMeterCirle = () => {
  return (
    <Svg height="290" width="290">
      <Circle
        cx="145"
        cy="145"
        r="135"
        fill="none"
        fillRule="evenodd"
        stroke="url(#heat)"
        strokeWidth="20"
        strokeDasharray="650"
        strokeDashoffset="1200"
      />
      <Defs>
        <LinearGradient
          id="heat"
          x1="100%"
          y1="50%"
          x2="50%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#D73255" stopOpacity="1" />
          <Stop offset="1" stopColor="#4A90E2" stopOpacity="1" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

const DotCirle = () => {
  return (
    <Svg height="400" width="400">
      <Circle
        cx="200"
        cy="200"
        r="135"
        fill="none"
        fillRule="evenodd"
        stroke="#F3365D"
        strokeWidth="5"
        strokeDashoffset="780"
        strokeDasharray="0.2 35"
        strokeLinecap="round"
      />
      <Defs>
        <LinearGradient
          id="heat"
          x1="100%"
          y1="50%"
          x2="50%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#D73255" stopOpacity="1" />
          <Stop offset="1" stopColor="#4A90E2" stopOpacity="1" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

const HumidityIcon = () => {
  return (
    <Svg width="7px" height="9px" viewBox="0 0 7 9">
      <G
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G
          id="Galaxy-S8"
          transform="translate(-152.000000, -412.000000)"
          fill="#FFFFFF"
          fill-rule="nonzero"
        >
          <G id="tint-solid" transform="translate(152.000000, 412.000000)">
            <Path d="M4.08107955,0.388306791 C3.92318182,-0.117591294 3.09789773,-0.141145965 2.91892045,0.388306791 C1.98883523,3.16142986 0,3.91500355 0,5.8695139 C0,7.59990332 1.56545455,9 3.5,9 C5.43454545,9 7,7.59990332 7,5.8695139 C7,3.90515981 5.01553977,3.1740861 4.08107955,0.388306791 Z M3.5,7.87500079 C2.27201705,7.87500079 1.27272727,6.99170062 1.27272727,5.90625216 C1.27272727,5.75086164 1.41511364,5.62500236 1.59090909,5.62500236 C1.76670455,5.62500236 1.90909091,5.75086164 1.90909091,5.90625216 C1.90909091,6.68162271 2.6228125,7.31250118 3.5,7.31250118 C3.67579545,7.31250118 3.81818182,7.43836046 3.81818182,7.59375098 C3.81818182,7.7491415 3.67579545,7.87500079 3.5,7.87500079 Z" />
          </G>
        </G>
      </G>
    </Svg>
  );
};

const ColdIcon = () => {
  return (
    <Svg width="15px" height="16px">
      <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G transform="translate(-149.000000, -548.000000)" fill="#4A90E2">
          <G transform="translate(38.000000, 228.000000)">
            <G transform="translate(86.000000, 308.000000)">
              <G transform="translate(25.000000, 8.000000)">
                <Path d="M13.9760787,15.3291109 L12.2190165,14.3308404 L13.7023954,13.4622177 C13.9408719,13.3492499 14.0146784,13.0343842 13.8790567,12.8028962 C13.7409951,12.5658329 13.443004,12.5158383 13.2167975,12.6454633 L11.2390132,13.7844866 L8.09575671,11.9861189 L11.2389899,10.2062822 L13.2167743,11.3434547 C13.278543,11.3878969 13.3580197,11.4138311 13.4463968,11.4138311 C13.6140183,11.4138311 13.7641641,11.3360515 13.8790335,11.1878726 C14.0114714,10.9526602 13.9408487,10.6415189 13.7023722,10.5285511 L12.2189933,9.65992845 L13.9760555,8.66168072 C14.2050738,8.53203282 14.2838301,8.24125044 14.1527168,8.00233636 C14.0274829,7.77267632 13.7176168,7.69304591 13.4816036,7.82824623 L11.7156874,8.83577085 L11.6893114,7.0985255 C11.6851749,6.82997565 11.4773968,6.61327126 11.2037135,6.61327126 C10.9300766,6.61327126 10.7160705,6.84663292 10.7181388,7.0985255 L10.7356608,9.39137861 L7.61013556,11.1712154 L7.61013556,7.55967354 L9.57908913,6.4558384 C9.80894408,6.3280413 9.90910329,6.02985569 9.77329576,5.79651688 C9.63539674,5.55945361 9.35232495,5.48905439 9.11103652,5.62242676 L7.61013556,6.45586125 L7.61013556,4.48523139 C7.61013556,4.21668154 7.38936699,4 7.11568367,4 C6.84200036,4 6.63008576,4.21668154 6.63008576,4.48523139 L6.63008576,6.47434647 L5.07608415,5.62240391 C4.83402884,5.4909052 4.55846318,5.56498318 4.42265565,5.79649403 C4.28477987,6.03355731 4.37048455,6.32433969 4.6080083,6.45581555 L6.63008576,7.5763308 L6.63008576,11.1526845 L3.43377511,9.33951031 L3.45148308,7.09850265 C3.47804502,6.84663292 3.24842247,6.61324841 2.97473915,6.61324841 L2.95703119,6.61324841 C2.7010326,6.61324841 2.47426841,6.8299528 2.47143328,7.09850265 L2.45372532,8.7838797 L0.73210226,7.81154327 C0.49174338,7.67449213 0.195076894,7.75597335 0.0698197771,7.98378259 C-0.061293517,8.22454747 0.00651729339,8.50792662 0.246504353,8.64497776 L1.98583537,9.63397145 L0.467087016,10.5285283 C0.22877315,10.6415189 0.154362522,10.9563618 0.299419094,11.1878726 C0.392839059,11.3379023 0.528855739,11.4138311 0.714371058,11.4138311 C0.811369797,11.4138311 0.892171095,11.3897477 0.970346409,11.3434547 L2.95700795,10.1896021 L6.14448786,11.9861189 L2.95700795,13.8011439 L0.970346409,12.6454633 C0.731869872,12.5084122 0.424467062,12.5732361 0.299395855,12.8028962 C0.168282561,13.0418102 0.239486236,13.328891 0.467040539,13.4622177 L1.98581213,14.3474976 L0.246457875,15.3457682 C0.00705178572,15.4828193 -0.0705657971,15.7717509 0.0697732995,16.0069634 C0.167933979,16.1699487 0.299419094,16.2496019 0.484771741,16.2496019 C0.528855739,16.2496019 0.617186408,16.2236678 0.73210226,16.1792255 L2.45372532,15.2068891 L2.47143328,16.8922662 C2.47426841,17.160816 2.7010326,17.3682435 2.95703119,17.3682435 L2.97473915,17.3682435 C3.24842247,17.3682435 3.45355133,17.1441359 3.45148308,16.8737352 L3.43377511,14.6345784 L6.63008576,12.8380844 L6.63008576,16.3959071 L4.6080083,17.5163995 C4.36671987,17.649749 4.28231655,17.9405314 4.42265565,18.1757439 C4.52079309,18.3405799 4.65227821,18.4202104 4.83760762,18.4202104 C4.92596152,18.4202104 5.00732055,18.4054039 5.07608415,18.3664912 L6.63008576,17.4996965 L6.63008576,19.5221718 C6.63008576,19.7907217 6.84200036,20 7.11568367,20 C7.38936699,20 7.61013556,19.7907217 7.61013556,19.5221718 L7.61013556,17.5330339 L9.11103652,18.3664912 C9.17975364,18.4053811 9.26113591,18.4202104 9.34065908,18.4202104 C9.53481923,18.4202104 9.67799346,18.3424308 9.77329576,18.1757439 C9.90740686,17.9423822 9.82077263,17.6497262 9.57908913,17.5163995 L7.61013556,16.4310953 L7.61013556,12.8195534 L10.7356608,14.5993902 L10.7181388,16.8737352 C10.7158614,17.1441359 10.9300534,17.3682435 11.2037367,17.3682435 C11.47742,17.3682435 11.6851749,17.160816 11.6893114,16.8922662 L11.7156874,15.1457668 L13.4816036,16.1625454 C13.5497862,16.2014352 13.640557,16.2144137 13.7377649,16.2144137 C13.9231407,16.2144137 14.0591109,16.1384849 14.1526936,15.9884553 C14.2976107,15.7569445 14.2050971,15.4587588 13.9760787,15.3291109 L13.9760787,15.3291109 Z" />
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
};

const HotIcon = () => {
  return (
    <Svg width="16px" height="16px">
      <Path
        d="M8 4.123A3.888 3.888 0 0 0 4.123 8 3.888 3.888 0 0 0 8 11.877 3.888 3.888 0 0 0 11.877 8 3.888 3.888 0 0 0 8 4.123zm0 6.344A2.474 2.474 0 0 1 5.533 8 2.474 2.474 0 0 1 8 5.533 2.474 2.474 0 0 1 10.467 8 2.474 2.474 0 0 1 8 10.467zm0-7.63a.707.707 0 0 0 .705-.705V.705A.707.707 0 0 0 8 0a.707.707 0 0 0-.705.705v1.427c0 .405.317.705.705.705zm7.295 4.458h-1.427a.707.707 0 0 0-.705.705c0 .388.317.705.705.705h1.427A.707.707 0 0 0 16 8a.707.707 0 0 0-.705-.705zM8 13.163a.707.707 0 0 0-.705.705v1.427c0 .388.317.705.705.705a.707.707 0 0 0 .705-.705v-1.427A.696.696 0 0 0 8 13.163zM2.837 8a.707.707 0 0 0-.705-.705H.705A.707.707 0 0 0 0 8c0 .388.317.705.705.705h1.427A.696.696 0 0 0 2.837 8zm9.304-3.436c.176 0 .352-.07.493-.212l1.022-1.022a.702.702 0 0 0 0-1.004.702.702 0 0 0-1.004 0L11.63 3.348a.702.702 0 0 0 0 1.004.768.768 0 0 0 .511.212zm.493 7.084a.702.702 0 0 0-1.004 0 .702.702 0 0 0 0 1.004l1.022 1.022a.696.696 0 0 0 .493.211c.177 0 .353-.07.494-.211a.702.702 0 0 0 0-1.004l-1.005-1.022zm-9.268 0L2.344 12.67a.702.702 0 0 0 0 1.004.696.696 0 0 0 .493.211c.176 0 .352-.07.493-.211l1.022-1.022a.702.702 0 0 0 0-1.004.681.681 0 0 0-.986 0zm0-7.296a.667.667 0 0 0 .493.212c.176 0 .352-.07.493-.212a.702.702 0 0 0 0-1.004L3.33 2.326a.702.702 0 0 0-1.004 0 .702.702 0 0 0 0 1.004l1.04 1.022z"
        fill="#F3365D"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      humidity: 0
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref()
      .on("value", snapshot => {
        const data = snapshot.val();
        this.setState({
          temp: data,
          humidity: data
        });
      });
  }

  render() {
    const isHot = this.state.temp > 60;
    const cold = (
      <View style={isHot ? styles.hiddenText : styles.visibleText}>
        <View style={styles.TempIcon}>
          <ColdIcon />
        </View>
        <View>
          <Text style={styles.lowTempText}>COLD</Text>
        </View>
      </View>
    );
    const hot = (
      <View style={isHot ? styles.visibleText : styles.hiddenText}>
        <View style={styles.TempIcon}>
          <HotIcon />
        </View>
        <View>
          <Text style={styles.lowTempText}>HOT</Text>
        </View>
      </View>
    );

    /*
 const cold = 
    <View style={styles.lowTempIcon}>
      <ColdIcon  />
    </View>
    <View>
      <Text style={styles.lowTempText}>COLD</Text>
    </View>
    let message;
    if (this.state.temp > 60 ) {
        message = hot
    } else { 
        message = cold 
    }*/

    return (
      <View style={styles.container}>
        <View style={styles.temptext}>
          <Text style={styles.appname}>SAUNATEMP</Text>
        </View>

        <View style={styles.heat}>
          <View style={styles.box}>
            <View style={styles.box1content}>
              <DarkCirleBackground />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.box0content}>
              <View style={styles.rotateCircle}>
                <AnimatedCircularProgressGradient
                  size={220}
                  width={20}
                  fill={this.state.temp}
                  prefill={0}
                  beginColor="#4A90E2"
                  endColor="#FF2451"
                  segments={30}
                  linecap="round"
                  backgroundColor="#232834"
                />
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.box2content}>
              <DotCirle />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.box1content}>
              <View style={styles.thermonumber}>
                <Text style={styles.plus}>+</Text>
                <Text style={styles.temp}>
                  <AnimateNumber
                    value={this.state.temp}
                    timing="linear"
                    countBy={4}
                    interval={10}
                  />
                </Text>
                <Text style={styles.celciusBot}>°</Text>
                <Text style={styles.celciusLetter}>C</Text>
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.box1content}>
              <View style={styles.humidity}>
                <View style={styles.humidityIcon}>
                  <HumidityIcon />
                </View>
                <View style={styles.humidityLabels}>
                  <Text style={styles.humidityHeading}>Humidity</Text>
                  <Text style={styles.humidityNumber}>
                  <AnimateNumber
                    value={this.state.humidity}
                    timing="linear"
                    countBy={4}
                    interval={10}
                  />%
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.box1content}>
              <View style={styles.tempNumbers}>
                <Text style={styles.lowTemp}>0°</Text>
                <Text style={styles.highTemp}>100°</Text>
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.box1content}>
              <View style={styles.tempIndicator}>
                {cold}
                {hot}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

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
    fontFamily: "Lato-Regular",
    fontWeight: "400",
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    top: 100,
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
    alignItems: "center",
    top: -10
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
    fontSize: 55
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
    bottom: -20,
    left: 5
  },
  humidityLabels: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    top: -5
  },
  humidityHeading: {
    color: "white",
    fontFamily: "Lato",
    fontSize: 13,
    color: "#9B9B9B"
  },
  humidityNumber: {
    color: "white",
    fontFamily: "Lato",
    fontSize: 15,
    left: 5
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
    left: 35,
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
  TempIcon: {
    position: "relative",
    left: -15,
    top: 1
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
