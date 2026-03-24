import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#6b6b6b",
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },

  card: {
    width: "85%",
    backgroundColor: "#eee",
    borderRadius: 5,
    padding: 25,
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
    resizeMode: "contain",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2f3e46",
    borderRadius: 10,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    height: 45,
    marginLeft: 10,
  },

  esqueciSenha: {
    fontSize: 12,
    color: "#555",
    marginBottom: 20,
    textDecorationLine: "underline",
  },

  botao: {
    backgroundColor: "#2f3e46",
    width: "100%",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;