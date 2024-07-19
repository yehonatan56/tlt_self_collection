import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import CreateItem from "./components/createItem";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <CreateItem />
    </MantineProvider>
  );
}
