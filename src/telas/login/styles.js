import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    justifyContent: "center",
  },

  frame: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F4F4F4",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    position: "relative",
  },

  logo: {
    position: "absolute",
    width: 200,
    height: 200,
    top: 95,
    left: 97,
    resizeMode: "cover",
  },

  inputBox: {
    position: "absolute",
    width: 300,
    height: 39,
    left: 46,
    top: 375,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#253B49",
    justifyContent: "center",
  },

  inputIcon: {
    position: "absolute",
    width: 25,
    height: 25,
    left: 5,
    top: 7,
    backgroundColor: "#686565",
    borderRadius: 4,
  },

  inputLabel: {
    position: "absolute",
    left: 35,
    top: 8,
    color: "#686565",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "300",
  },

  inputField: {
    position: "absolute",
    left: 35,
    right: 5,
    top: 7,
    height: 25,
    color: "#000",
    fontSize: 16,
    padding: 0,
    margin: 0,
  },

  inputBox2: {
    position: "absolute",
    width: 300,
    height: 39,
    left: 46,
    top: 444,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#253B49",
    justifyContent: "center",
  },

  inputIcon2: {
    position: "absolute",
    width: 25,
    height: 25,
    left: 5,
    top: 7,
    backgroundColor: "#686565",
    borderRadius: 4,
  },

  forgotArea: {
    position: "absolute",
    left: 131,
    top: 503,
    width: "auto",
    alignItems: "center",
  },

  forgotText: {
    color: "#2D2D2D",
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "200",
    textDecorationLine: "underline",
    textAlign: "center",
    flexWrap: "nowrap",
    includeFontPadding: false,
  },

  button: {
    position: "absolute",
    left: 148,
    top: 589,
    paddingTop: 10.5,
    paddingBottom: 10.7,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#1D3545",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#253B49",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Raleway",
    fontWeight: "500",
    lineHeight: 19.2,
  },
});

export default styles;
