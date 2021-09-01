import React from "react";
import styles from "./FeaturedInfo.module.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

function FeaturedInfo() {
    return (
        <div className={styles.featured}>
            <div className={styles.featuredItem}>
                <span className={styles.featuredTitle}>Revenue</span>
                <div className={styles.featuredMoneyConteiner}>
                    <span className={styles.featuredMoney}>$2,415</span>
                    <span className={styles.featuredMoneyRate}>
                        -11.4 <ArrowDownward />
                    </span>
                </div>
                <div className={styles.featuredSub}>Compare to last month</div>
            </div>
            <div className={styles.featuredItem}>
                <span className={styles.featuredTitle}>Sales</span>
                <div className={styles.featuredMoneyConteiner}>
                    <span className={styles.featuredMoney}>$4,415</span>
                    <span className={styles.featuredMoneyRate}>
                        -1.4 <ArrowDownward />
                    </span>
                </div>
                <div className={styles.featuredSub}>Compare to last month</div>
            </div>
            <div className={styles.featuredItem}>
                <span className={styles.featuredTitle}>Cost</span>
                <div className={styles.featuredMoneyConteiner}>
                    <span className={styles.featuredMoney}>$2,225</span>
                    <span className={styles.featuredMoneyRate}>
                        -11.4 <ArrowUpward />
                    </span>
                </div>
                <div className={styles.featuredSub}>Compare to last month</div>
            </div>
        </div>
    );
}

export default FeaturedInfo;
