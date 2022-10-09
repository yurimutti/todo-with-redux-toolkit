import {
  ChakraProvider,
  Text,
  Button,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  Stack,
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { MdClose, MdEdit, MdCheckCircle} from "react-icons/md";
import { theme } from "./styles/theme";

// ADD TASK
// DELETE TASK
// UPDATE TASK
// LIST ALL TASKS

function App() {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton colorScheme='purple' icon={<MdCheckCircle />} aria-label='Check' {...getSubmitButtonProps()} />
        <IconButton colorScheme='purple' icon={<MdClose />} aria-label='Close' {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
        colorScheme='purple'
          size="sm"
          aria-label='Edit'
          icon={<MdEdit />}
          {...getEditButtonProps()}
        />
      </Flex>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        direction="column"
      >
        <Stack spacing="6">
          <Text
            bgGradient="linear(to-l, purple.500, pink.500)"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
            textAlign="center"
          >
            To-Do List
          </Text>
          <InputGroup size="md">
            <Input
              placeholder="Enter Your Task"
              focusBorderColor="pink.500"
              bgColor="gray.800"
              _hover={{
                bgColor: "gray.900",
              }}
            />
            <InputRightElement width="4.5rem">
              <Button colorScheme="purple" h="1.75rem" size="sm">
                Add
              </Button>
            </InputRightElement>
          </InputGroup>

          <Editable defaultValue="Studying React Hooks" >
            <EditablePreview />
            <EditableInput />
          </Editable>

          <Editable
            textAlign="center"
            defaultValue="Studying React Hooks"
            fontSize="2xl"
            isPreviewFocusable={false}
          >
            <EditablePreview />
            {/* Here is the custom input */}
            <Input as={EditableInput} />
            <EditableControls />
          </Editable>

          <Button colorScheme="purple" variant="outline" size="md">
            Delete All
          </Button>
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
