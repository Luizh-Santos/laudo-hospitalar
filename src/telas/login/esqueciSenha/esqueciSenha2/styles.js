import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "#1D3545",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    color: "#686565",
    marginBottom: 8,
    fontFamily: "Roboto",
  },
  input: {
    width: "100%",
    height: 44,
    borderWidth: 1,
    borderColor: "#253B49",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
    color: "#000",
  },
  button: {
    backgroundColor: "#1D3545",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Raleway",
  },
  backButton: {
    alignItems: "center",
  },
  backText: {
    color: "#2D2D2D",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export default styles;
