import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";

import {
  getAllTasks,
  createTask,
  removeTaskByUuid,
  updateTask,
} from "@storage/task";
import { Task } from "src/types";

export type TasksContextType = {
  tasks: Task[];
  fetchTasks: () => Promise<void>;
  onCreateTask: (taskDescription: Task["description"]) => Promise<void>;
  onRemoveTask: (taskUuid: Task["uuid"]) => Promise<void>;
  onUpdateTask: (taskUuid: Task["uuid"]) => Promise<void>;
};

export const TasksContext = createContext({} as TasksContextType);

type TasksProviderProps = {
  children: ReactNode;
};

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const tasks = await getAllTasks();
      setTasks(
        tasks.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))
      );
    } catch (error) {
      Alert.alert("Error", "Something went wrong while fetching tasks");
      console.log(error);
    }
  };

  const onCreateTask = async (taskDescription: Task["description"]) => {
    const trimmedTaskDescription = taskDescription.trim();

    if (trimmedTaskDescription.length === 0) {
      return Alert.alert(
        "New task",
        "Please enter a description for the task."
      );
    }

    try {
      await createTask(trimmedTaskDescription);
      fetchTasks();
    } catch (error) {
      Alert.alert(
        "New task",
        "An error occurred while creating the task. Please try again."
      );
      console.log(error);
    }
  };

  const onRemoveTask = async (taskUuid: Task["uuid"]) => {
    try {
      await removeTaskByUuid(taskUuid);
      fetchTasks();
    } catch (error) {
      Alert.alert(
        "Remove task",
        "An error occurred while removing the task. Please try again."
      );
      console.log(error);
    }
  };

  const onUpdateTask = async (taskUuid: Task["uuid"]) => {
    try {
      await updateTask(taskUuid);

      fetchTasks();
    } catch (error) {
      Alert.alert(
        "Update task",
        "An error occurred while updating the task. Please try again."
      );
      console.log(error);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        fetchTasks,
        onCreateTask,
        onRemoveTask,
        onUpdateTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasksContext must be used within a TasksProvider");
  }

  return context;
};
