import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import Cart from "@/pages/Cart";
// Components
import Navbar from "@/components/Navbar";
// redux
import { Provider } from "react-redux";
import store from "@/redux/store";

function App() {
    return (
        <>
            <Provider store={store}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Router>
            </Provider>
        </>
    );
}

export default App;
