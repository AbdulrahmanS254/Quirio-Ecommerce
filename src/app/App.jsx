import { Provider } from "react-redux";
import { Outlet } from "react-router";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

function App() {
    return (
        <>
            <div className="app-layout">
                <Navbar />
                <Outlet></Outlet>
                <Footer />
            </div>
        </>
    );
}

export default App;
