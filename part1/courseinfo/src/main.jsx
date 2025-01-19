import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
let counter = 1;

function refresh() {
  root.render(
    <StrictMode>
      <App counter={counter} />
    </StrictMode>,
  );
}

setInterval(() => {
  refresh();
  counter++;
}, 1000);
