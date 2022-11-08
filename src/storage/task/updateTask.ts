import "react-native-get-random-values";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TASK_COLLECTION } from "@storage/storageConfig";
import { getAllTasks } from "./getAllTasks";
import { Task } from "src/types";

export const updateTask = async (taskUuid: Task["uuid"]) => {
  try {
    const storedTasks = await getAllTasks();

    const updatedTasks = storedTasks.map((task) => {
      if (task.uuid === taskUuid) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }

      return task;
    });

    const stringifiedNewTasks = JSON.stringify(updatedTasks);

    await AsyncStorage.setItem(TASK_COLLECTION, stringifiedNewTasks);
  } catch (error) {
    throw error;
  }
};
