import { useEffect } from "react";
import { FlatList } from "react-native";

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

      <FlatList
        data={tasks}
        keyExtractor={(task) => task.uuid}
        renderItem={({ item }) => <TaskItem task={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyState />}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",

          width: "100%",
          marginTop: 20,
          paddingBottom: 64,
        }}
      />
    </S.TasksContainer>
  );
};
