import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { CommentSection } from "./Comments.jsx";
import "./css.css"

export default function App() {
  return <MantineProvider theme={theme}>
    <CommentSection />
  </MantineProvider>;
}
