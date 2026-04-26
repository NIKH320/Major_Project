import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Login />;
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
                
                <Route
                   path="/dashboard"
                   element={
                     <PrivateRoute>
                          <Dashboard />
                     </PrivateRoute>
                 }
                  />
            </Routes>
        </BrowserRouter>
    );
}

export default App;