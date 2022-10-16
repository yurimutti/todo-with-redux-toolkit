import {
  Flex,
  Input,
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";

import { MdClose, MdEdit, MdCheckCircle, MdDelete } from "react-icons/md";
import { useAppDispatch } from "../../../store/hooks";
import { toggleTodo, deleteTodo } from "../todo-slice";
import { Todo } from "../todo-slice";

interface TodoEditableProps {
  todo: Todo;
  handleTodoTextUpdated: (nextText: string, id: string) => void;
}

export function TodoEditable({
  todo,
  handleTodoTextUpdated,
}: TodoEditableProps) {
  const dispatch = useAppDispatch();

  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup alignItems="center" justifyContent="center" size="sm">
        <IconButton
          colorScheme="pink"
          icon={<MdCheckCircle />}
          aria-label="Check"
          {...getSubmitButtonProps()}
        />
        <IconButton
          variant="outline"
          colorScheme="purple"
          icon={<MdClose />}
          aria-label="Close"
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <Flex alignItems="center" justifyContent="center" gap={2}>
        <IconButton
          variant="outline"
          colorScheme="purple"
          size="sm"
          aria-label="Edit"
          icon={<MdEdit />}
          {...getEditButtonProps()}
        />
        <IconButton
          colorScheme="purple"
          size="sm"
          aria-label="Delete"
          icon={<MdDelete />}
          onClick={() => dispatch(deleteTodo(todo.id))}
        />
        <IconButton
          colorScheme="pink"
          size="sm"
          aria-label="Check"
          icon={<MdCheckCircle />}
          onClick={() => dispatch(toggleTodo(todo.id))}
        />
      </Flex>
    );
  }

  return (
    <Editable
      textAlign="center"
      defaultValue={todo.text}
      fontSize="2xl"
      isPreviewFocusable={false}
      border="1px"
      borderColor="gray.500"
      borderRadius="md"
      textDecoration={todo.completed ? "line-through" : "none"}
      padding={4}
      isDisabled={todo.completed}
      onSubmit={(nextText) => handleTodoTextUpdated(nextText, todo.id)}
      minWidth="18rem"
      color={todo.completed ? "gray.500" : "inherit"}
    >
      <Flex alignItems="center" justify="space-between" gap={4}>
        <EditablePreview />
        <Input as={EditableInput} focusBorderColor="pink.500" />
        <EditableControls />
      </Flex>
    </Editable>
  );
}
