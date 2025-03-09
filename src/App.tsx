import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
