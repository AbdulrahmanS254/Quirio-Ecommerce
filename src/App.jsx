import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

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
