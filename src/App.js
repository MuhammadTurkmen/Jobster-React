import { BrowserRouter, Roures, Route } from "react-router-dom";
import { Landing, Error, Dashboard, Register } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
