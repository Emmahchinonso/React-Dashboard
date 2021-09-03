import Home from "../../pages/home/Home";
import Sidebar from "../sideBar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "../topBar/Topbar";
import styles from "./App.module.css";
import UserList from "../../pages/userList/UserList";

const App = () => {
    return (
        <Router>
            <Topbar />
            <div className={styles.container}>
                <Sidebar />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/users'>
                        <UserList />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
