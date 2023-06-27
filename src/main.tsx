import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../dist/output.css";
import { DarkModeProvider } from "./Context/DarkModeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);
