import Home from "../../pages/home/Home";
import Sidebar from "../sideBar/Sidebar";
import Topbar from "../topBar/Topbar";
import styles from "./App.module.css";

const App = () => {
    return (
        <div>
            <Topbar />
            <div className={styles.container}>
                <Sidebar />
                <Home />
            </div>
        </div>
    );
};

export default App;
