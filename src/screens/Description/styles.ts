import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: "5%",
    backgroundColor: "#cb3ce3",
  },
  message: {
    fontSize: 30,
    paddingTop: "5%",
    color: "#cb3ce3",
    fontWeight: "bold",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  subMessage: {
    fontSize: 20,
    paddingTop: "5%",
    fontWeight: "bold",
    alignSelf: "center",
  },
  body: {
    flex: 2,
    paddingTop: "5%",
    paddingBottom: "15%",
    alignItems: "center",
    backgroundColor: "#f8f5ff",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  containerImage: {
    alignItems: "center",
    justifyContent: "center",
    width: 230,
    height: 230,
    borderRadius: 115,
    shadowColor: "#fff",
    elevation: 5,
  },
});

export default Styles;
