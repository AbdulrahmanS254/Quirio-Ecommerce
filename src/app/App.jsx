import { Provider } from "react-redux";
import { Outlet } from "react-router";
import { store } from "./store";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

function App() {
    return (
        <Provider store={store}>
            <div className="app-layout">
                <Navbar />
                <Outlet></Outlet>
                <Footer />
            </div>
        </Provider>
    );
}

export default App;
