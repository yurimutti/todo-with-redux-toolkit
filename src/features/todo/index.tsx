import { useState } from "react";
import { Button, Box, Stack } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { addTodo, updateTodo, deleteAllTodos } from "./todo-slice";
import { v4 as uuidv4 } from "uuid";
import { TodoEditable } from "./components/todo-editable";
import { AddTask } from "./components/todo-add-task";

export function Todo() {
  const [todoText, setTodoText] = useState("");
  const [isError, setIsError] = useState(false);
  const todos = useAppSelector((state) => state.todos.list);
  const dispatch = useAppDispatch();
  console.log("todos", todos);

  function clearTodoText() {
    setIsError(false);
    setTodoText("");
  }

  function handleAddTodo() {
    if (todoText === "") {
      setIsError(true);

      return;
    }

    const payload = {
      id: uuidv4(),
      text: todoText,
    };

    dispatch(addTodo(payload));
    clearTodoText();
  }

  function handleTodoTextUpdated(nextText: string, id: string) {
    const payload = {
      id,
      text: nextText,
    };

    dispatch(updateTodo(payload));
  }

  function handleDeleteTodos() {
    dispatch(deleteAllTodos());
    clearTodoText();
  }

  return (
    <Box display="flex" alignItems="center" flexDirection="column" gap={6}>
      <AddTask
        isError={isError}
        todoText={todoText}
        setTodoText={setTodoText}
        handleAddTodo={handleAddTodo}
      />

      <Stack gap={4}>
        {todos.map((todo) => (
          <TodoEditable
            todo={todo}
            handleTodoTextUpdated={handleTodoTextUpdated}
            key={todo.id}
          />
        ))}
      </Stack>

      <Button
        colorScheme="purple"
        size="md"
        onClick={handleDeleteTodos}
        maxWidth="8rem"
      >
        Delete All
      </Button>
    </Box>
  );
}
