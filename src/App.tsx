import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact-us" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
