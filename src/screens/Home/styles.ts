import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingStart: "10%",
  },
  message: {
    fontSize: 30,
    paddingTop: "5%",
    fontWeight: "bold",
  },
  subMessage: {
    fontSize: 20,
    paddingBottom: "5%",
  },
  body: {
    paddingStart: "10%",
    paddingEnd: "10%",
    paddingTop: "5%",
    paddingBottom: "15%",
    backgroundColor: "#f2e4f1",
    flex: 1.8,
  },
  bodyText: {
    fontSize: 18,
    color: "#cb3ce3",
    paddingBottom: "2%",
  },
  image: {
    width: 100,
    height: 100,
  },
  footer: {
    flex: 0.6,
  },
});

export default Styles;
