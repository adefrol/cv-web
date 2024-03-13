import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Import Tailwindcss
import { Toaster } from "./components/ui/sonner";
import { SwitchUserContextProvider } from "./context/SwitchUserContext";
import "./index.css";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <>
      <StrictMode>
        <SwitchUserContextProvider>
          <RouterProvider router={router} />
        </SwitchUserContextProvider>
      </StrictMode>
      <Toaster />
    </>
  );
}
