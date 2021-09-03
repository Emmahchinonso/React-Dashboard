import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData } from "../../data";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.home}>
            <FeaturedInfo />
            <Chart
                data={userData}
                title='User Analytics'
                grid
                dataKey='Active User'
            />
            <div className={styles.homeWidgets}>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
};

export default Home;
