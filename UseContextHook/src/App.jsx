import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import { Home, Profile, Contact } from "./pages";

// Navbar
import Navbar from "./components/Navbar";

// Expample : Passing state
const TopComponent = () => {
    const [state, setState] = useState();
    return (
        <div>
            <MiddleComponent state={state} />
        </div>
    );
};

const MiddleComponent = (state) => {
    return (
        <div>
            <BottomComponent state={state} />
        </div>
    );
};

const BottomComponent = (state) => {
    return <div>{state}</div>;
};

// Create a Store with createContext API
export const AppContext = createContext();

function App() {
    const [username, setUserName] = useState("ThanhKiet");

    return (
        <>
            <AppContext.Provider value={{ username, setUserName }}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<h1 style={{ textAlign: "center" }}>NOT FOUND</h1>} />
                    </Routes>
                </Router>
            </AppContext.Provider>
        </>
    );
}

export default App;
