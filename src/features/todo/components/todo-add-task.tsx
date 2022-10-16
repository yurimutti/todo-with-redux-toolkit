import {
  Button,
  InputGroup,
  Input,
  InputRightElement,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";

interface AddTaskProps {
  isError: boolean;
  todoText: string;
  setTodoText: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: () => void;
}

export function AddTask({
  isError,
  todoText,
  setTodoText,
  handleAddTodo,
}: AddTaskProps) {
  return (
    <InputGroup size="md"  width="16rem">
      <FormControl isInvalid={isError}>
        <Input
          value={todoText}
          placeholder="Enter Your Task"
          focusBorderColor="pink.500"
          bgColor="gray.800"
          onChange={(event) => setTodoText(event.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button
            colorScheme="pink"
            h="1.75rem"
            size="sm"
            onClick={handleAddTodo}
          >
            Add
          </Button>
        </InputRightElement>
        {isError && <FormErrorMessage>Digite algo.</FormErrorMessage>}
      </FormControl>
    </InputGroup>
  );
}
