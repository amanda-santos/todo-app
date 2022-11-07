import AsyncStorage from "@react-native-async-storage/async-storage";
import { TASK_COLLECTION } from "@storage/storageConfig";

import { Task } from "src/types";

export const getAllTasks = async (): Promise<Task[]> => {
  try {
    const storage = await AsyncStorage.getItem(TASK_COLLECTION);
    const tasks: Task[] = storage ? JSON.parse(storage) : [];

    return tasks;
  } catch (error) {
    throw error;
  }
};
