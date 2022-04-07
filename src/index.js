import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import LogButtonClicks from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <LogButtonClicks />
  </StrictMode>
);
