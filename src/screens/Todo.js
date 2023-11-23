import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { styles } from "../../styles";
export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (task.trim() !== "") {
      if (editIndex !== null) {
        // If we're in edit mode, update the existing task
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(null); // Exit edit mode
      } else {
        // If we're not in edit mode, add a new task
        setTasks([...tasks, task]);
      }
      setTask(""); // Clear the input field
    }
  };

  const editTask = (index) => {
    setTask(tasks[index]); // Load the task into the input field for editing
    setEditIndex(index); // Enter edit mode
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1); //Remove the task
    setTasks(updatedTasks); //update
  };

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Add a task"
        value={task}
        onChangeText={(txt) => setTask(txt)}
        style={styles.input}
      />
      <Button
        title={editIndex !== null ? "Update Task" : "Add Task"}
        onPress={addTask}
      />

      <SafeAreaView>
        <ScrollView style={{ marginBottom: 200 }}>
          <FlatList
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <SafeAreaView>
                <SafeAreaView style={styles.taskBox}>
                  <SafeAreaView>
                    <Text>Task: {index + 1}</Text>
                    <Text style={{ maxWidth: 200, marginTop: 10 }}>{item}</Text>
                  </SafeAreaView>
                  <View
                    style={{
                      flexDirection: "column",
                      alignContent: "space-between",
                      gap: 5,
                    }}
                  >
                    <View style={styles.iconContainer}>
                      <Image
                        style={styles.iconStyle}
                        source={require("../assets/icons/edit.png")}
                      />
                      <Button title="Edit" onPress={() => editTask(index)} />
                    </View>
                    <View style={styles.iconContainer}>
                      <Image
                        style={styles.iconStyle}
                        source={require("../assets/icons/trash.png")}
                      />
                      <Button
                        title="Remove"
                        onPress={() => removeTask(index)}
                        color={"red"}
                      />
                    </View>
                  </View>
                </SafeAreaView>
              </SafeAreaView>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
