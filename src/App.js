import { Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Meals from "./pages/meals";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/:id/meals" element={<Meals />} /> {/* this is template for pages with id as param in url */}
          <Route path="/meals" element={<Meals />} />
            {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
