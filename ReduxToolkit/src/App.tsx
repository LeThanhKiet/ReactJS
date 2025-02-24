import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
    return (
        <>
            <Provider store={store}>
                <Router>
                    <div style={{}}>
                        <Link to="/">Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/">contact</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Router>
            </Provider>
        </>
    );
}

export default App;
