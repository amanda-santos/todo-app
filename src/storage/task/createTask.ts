import "react-native-get-random-values";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

import { TASK_COLLECTION } from "@storage/storageConfig";
import { getAllTasks } from "./getAllTasks";
import { Task } from "src/types";

export const createTask = async (taskDescription: Task["description"]) => {
  try {
    const storedTasks = await getAllTasks();

    const generatedTaskUuid = uuidv4();

    const newTask: Task = {
      uuid: generatedTaskUuid,
      description: taskDescription,
      isCompleted: false,
    };

    const stringifiedNewTasks = JSON.stringify([...storedTasks, newTask]);

    await AsyncStorage.setItem(TASK_COLLECTION, stringifiedNewTasks);
  } catch (error) {
    throw error;
  }
};
