import { StyleSheet, Dimensions } from "react-native";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const styles = StyleSheet.create({
  navBar: {
    width: "100%",
    paddingHorizontal: 25,
    height: responsiveHeight(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: responsiveHeight(5),
    paddingBottom: responsiveHeight(2),
    position: "absolute",
    top: responsiveHeight(2),
  },
  backBtn: {
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 50,
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  calculatorTxt: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "bold",
    color: "#20376D",
    textAlign: "center",
  },
  homescreenText: {
    position: "absolute",
    bottom: 64,
  },
  btnTxt: {
    color: "#FFF",
    fontSize: responsiveFontSize(2),
    fontWeight: "bold",
  },
  stepsTxt: {
    textAlign: "center",
    fontSize: responsiveFontSize(2),
    color: "#FFF",
    marginTop: 16,
  },
  boxTitle: {
    fontSize: responsiveFontSize(2),
    color: "#20376D",
    fontWeight: "bold",
  },
  boxTitleDiv: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 16,
    justifyContent: "flex-start",
  },
  loginTitle: {
    color: "#20376D",
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
    marginBottom: 24,
  },
  resultsBox: {
    position: "relative",
    top: responsiveHeight(5),
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginBottom: 8,
    width: responsiveWidth(90),
  },
  img: { width: 48, height: 48, left: 32, top: 75, position: "absolute" },
  h1: {
    fontSize: responsiveFontSize(5),
    fontWeight: "bold",
    left: 32,
    top: 136,
    color: "#fff",
    position: "absolute",
  },
  loginScreen: {
    width: "100%",
    height: responsiveHeight(60),
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    bottom: 0,
  },
  p: {
    fontSize: responsiveFontSize(2),
    color: "#FFF",
    lineHeight: 24,
  },
  container: {
    flex: 1,
    position: "absolute",
    width: w,
    height: h,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#95C11F",
    padding: 10,
    height: 64,
    width: 202,
    borderRadius: 50,
    marginBottom: 25,
  },
  btn2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00CB00",
    paddingHorizontal: 22,
    paddingVertical: 20,
    height: responsiveHeight(8),
    width: responsiveWidth(80),
    borderRadius: 16,
  },
  bDiv: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingBottom: 64,
  },
  input: {
    width: responsiveWidth(80),
    height: responsiveHeight(20),
    padding: 22,
    borderWidth: 1,
    borderColor: "#DDD",
    marginBottom: 16,
    borderRadius: 5,
  },
  input2: {
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    marginBottom: 8,
  },
  card: {
    backgroundColor: "#FFF",
    width: responsiveWidth(90),
    height: responsiveHeight(28),
    borderRadius: 8,
    marginBottom: 16,
    padding: 20,
  },
  h4: { color: "#20376D", fontSize: responsiveFontSize(2), fontWeight: "bold" },
  h2: { color: "#FFF", fontSize: responsiveFontSize(3), fontWeight: "bold" },
  projectCards: {
    backgroundColor: "#FFF",
    width: 112,
    height: 112,
    borderRadius: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  logoGradient: {
    width: 45,
    height: 45,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
});

export default styles;
