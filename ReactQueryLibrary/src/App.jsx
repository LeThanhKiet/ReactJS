import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import { Home, Profile, Contact } from "./pages";

// Navbar
import Navbar from "./components/Navbar";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    });

    return (
        <QueryClientProvider client={client}>
            <>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<h1 style={{ textAlign: "center" }}>NOT FOUND</h1>} />
                    </Routes>
                </Router>
            </>
        </QueryClientProvider>
    );
}

export default App;
