import { Visibility } from "@material-ui/icons";
import React from "react";
import styles from "./WidgetSm.module.css";

const WidgetSm = () => {
    return (
        <div className={styles.widgetSm}>
            <span className={styles.widgetSmTitle}>New Members </span>
            <ul className={styles.widgetSmList}>
                <li className={styles.widgetSmListItem}>
                    <img
                        src='https://images.pexels.com/photos/3746210/pexels-photo-3746210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        alt=''
                        className={styles.widgetSmImg}
                    />
                    <div className={styles.widgetSmUser}>
                        <span className={styles.widgetSmUsername}>
                            Anna Keller
                        </span>
                        <span className={styles.widgetSmUserTitle}>
                            Software Engineer
                        </span>
                    </div>
                    <button className={styles.widgetSmBtn}>
                        <Visibility className={styles.widgetSmIcon} />
                        Display
                    </button>
                </li>
                <li className={styles.widgetSmListItem}>
                    <img
                        src='https://images.pexels.com/photos/3746210/pexels-photo-3746210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        alt=''
                        className={styles.widgetSmImg}
                    />
                    <div className={styles.widgetSmUser}>
                        <span className={styles.widgetSmUsername}>
                            Anna Keller
                        </span>
                        <span className={styles.widgetSmUserTitle}>
                            Software Engineer
                        </span>
                    </div>
                    <button className={styles.widgetSmBtn}>
                        <Visibility className={styles.widgetSmIcon} />
                        Display
                    </button>
                </li>
                <li className={styles.widgetSmListItem}>
                    <img
                        src='https://images.pexels.com/photos/3746210/pexels-photo-3746210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        alt=''
                        className={styles.widgetSmImg}
                    />
                    <div className={styles.widgetSmUser}>
                        <span className={styles.widgetSmUsername}>
                            Anna Keller
                        </span>
                        <span className={styles.widgetSmUserTitle}>
                            Software Engineer
                        </span>
                    </div>
                    <button className={styles.widgetSmBtn}>
                        <Visibility className={styles.widgetSmIcon} />
                        Display
                    </button>
                </li>
                <li className={styles.widgetSmListItem}>
                    <img
                        src='https://images.pexels.com/photos/3746210/pexels-photo-3746210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        alt=''
                        className={styles.widgetSmImg}
                    />
                    <div className={styles.widgetSmUser}>
                        <span className={styles.widgetSmUsername}>
                            Anna Keller
                        </span>
                        <span className={styles.widgetSmUserTitle}>
                            Software Engineer
                        </span>
                    </div>
                    <button className={styles.widgetSmBtn}>
                        <Visibility className={styles.widgetSmIcon} />
                        Display
                    </button>
                </li>
                <li className={styles.widgetSmListItem}>
                    <img
                        src='https://images.pexels.com/photos/3746210/pexels-photo-3746210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        alt=''
                        className={styles.widgetSmImg}
                    />
                    <div className={styles.widgetSmUser}>
                        <span className={styles.widgetSmUsername}>
                            Anna Keller
                        </span>
                        <span className={styles.widgetSmUserTitle}>
                            Software Engineer
                        </span>
                    </div>
                    <button className={styles.widgetSmBtn}>
                        <Visibility className={styles.widgetSmIcon} />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default WidgetSm;
