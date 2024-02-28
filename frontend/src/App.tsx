import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewProperties from "./components/view-properties/ViewProperties";
import AddProperty from "./components/add-property/AddProperty";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="view-properties" element={<ViewProperties />} />
        <Route path="add-property" element={<AddProperty />} />
      </Routes>
    </Router>
  );
}

export default App;
