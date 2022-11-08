import AsyncStorage from "@react-native-async-storage/async-storage";

import { TASK_COLLECTION } from "@storage/storageConfig";
import { getAllTasks } from "./getAllTasks";

export const removeTaskByUuid = async (uuid: string) => {
  try {
    const storedTasks = await getAllTasks();

    const filteredTasks = storedTasks.filter((task) => task.uuid !== uuid);

    const stringifiedNewTasks = JSON.stringify(filteredTasks);

    await AsyncStorage.setItem(TASK_COLLECTION, stringifiedNewTasks);
  } catch (error) {
    throw error;
  }
};
