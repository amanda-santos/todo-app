import { useEffect, useState } from "react";
import { Alert } from "react-native";

import { getAllTasks } from "@storage/task";
import { Task } from "src/types";
import { EmptyState, TaskItem, TasksInfo } from "./components";
import * as S from "./styles";

export const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const tasks = await getAllTasks();
      setTasks(tasks);
      console.log(tasks);
    } catch (error) {
      Alert.alert("Error", "Something went wrong while fetching tasks");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <S.TasksContainer>
      <TasksInfo
        amountOfCreatedTasks={tasks.length}
        amountOfCompletedTasks={tasks.filter((task) => task.isCompleted).length}
      />

      {tasks.length > 0 ? (
        <S.TasksListContainer>
          {tasks.map((task) => (
            <TaskItem
              key={task.uuid}
              description={task.description}
              isCompleted={task.isCompleted}
            />
          ))}
        </S.TasksListContainer>
      ) : (
        <EmptyState />
      )}
    </S.TasksContainer>
  );
};
