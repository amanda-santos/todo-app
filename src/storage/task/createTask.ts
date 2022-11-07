import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

import { TASK_COLLECTION } from "@storage/storageConfig";
import { getAllTasks } from "./getAllTasks";
import { Task } from "src/types";

export const createTask = async (task: Omit<Task, "uuid">) => {
  try {
    const storedTasks = await getAllTasks();

    const generatedTaskUuid = uuidv4();

    const newTask: Task = {
      ...task,
      uuid: generatedTaskUuid,
    };

    const stringifiedNewTasks = JSON.stringify([...storedTasks, newTask]);

    await AsyncStorage.setItem(TASK_COLLECTION, stringifiedNewTasks);
  } catch (error) {
    throw error;
  }
};
