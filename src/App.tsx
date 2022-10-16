import {
  ChakraProvider,
  Text,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { Todo } from "./features/todo";

import { theme } from "./styles/theme";

function App() {

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
          
          <Todo />
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
