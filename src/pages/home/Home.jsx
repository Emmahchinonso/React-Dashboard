import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.home}>
            <FeaturedInfo />
            <Chart />
        </div>
    );
};

export default Home;
