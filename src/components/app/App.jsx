import Home from "../../pages/home/Home";
import Sidebar from "../sideBar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "../topBar/Topbar";
import styles from "./App.module.css";
import UserList from "../../pages/userList/UserList";
import User from "../../pages/user/User";
import NewUser from "../../pages/newUser/NewUser";
import ProductList from "../../pages/productList/ProductList";
import Product from "../../pages/product/Product";
import NewProduct from "../../pages/newProduct/NewProduct";

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
                    <Route exact path='/users/:userId'>
                        <User />
                    </Route>
                    <Route exact path='/newuser'>
                        <NewUser />
                    </Route>
                    <Route exact path='/products'>
                        <ProductList />
                    </Route>
                    <Route exact path='/products/:productsId'>
                        <Product />
                    </Route>
                    <Route exact path='/newproduct'>
                        <NewProduct />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
