import { useState } from "react";
import { EmptyState, TaskItem, TasksInfo } from "./components";
import * as S from "./styles";

export const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", isCompleted: false },
    { id: 2, name: "Task 2", isCompleted: true },
  ]);

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
              key={task.id}
              name={task.name}
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
