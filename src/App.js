import { BrowserRouter, Route, Routes } from "react-router-dom";
import TourList from "./pages/TourList";
import TourAdd from "./pages/TourAdd";
import TourEdit from "./pages/TourEdit";
import TourDelete from "./pages/TourDelete";
import TourShow from "./pages/TourShow";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="deploy_react/" element={<TourList />} />
          <Route path="deploy_react/tours/:id/edit" element={<TourEdit />} />
          <Route path="deploy_react/tours/:id" element={<TourShow />} />
          <Route path="deploy_react/tours/create" element={<TourAdd />} />
          <Route path="deploy_react/tours/:id/delete" element={<TourDelete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
