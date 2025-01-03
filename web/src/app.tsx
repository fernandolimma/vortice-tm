import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/router";
import { Toaster } from "sonner";
import { AuthProvider } from "./hooks/auth";

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router/>
        <Toaster className="bg-blue-400" duration={3000} />
      </BrowserRouter>
    </AuthProvider>
  )
}