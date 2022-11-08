import { useEffect } from "react";

import { useTasksContext } from "@contexts/TasksContext";
import { EmptyState, TaskItem, TasksInfo } from "./components";
import * as S from "./styles";

export const Tasks = () => {
  const { fetchTasks, tasks } = useTasksContext();

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
            <TaskItem key={task.uuid} task={task} />
          ))}
        </S.TasksListContainer>
      ) : (
        <EmptyState />
      )}
    </S.TasksContainer>
  );
};
