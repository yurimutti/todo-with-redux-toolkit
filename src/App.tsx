import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <h1>Redux + Chakra Ui</h1>
    </ChakraProvider>
  );
}

export default App;
