import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewProperties from "./components/view-properties/ViewPropererties";
import AddProperty from "./components/add-property/AddPropererty";

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
