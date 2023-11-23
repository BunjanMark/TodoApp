import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  //   For text input
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
  },

  // TaskItem
  taskBox: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#d1e8ff",
    padding: 10,
    flexDirection: "row",
    margin: 10,
  },

  // button styling

  // Button icons
  iconStyle: {
    height: 20,
    width: 20,
  },

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 100,
  },

  iContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    height: 90,
  },
});
