import React from "react";
import styles from "./Sidebar.module.css";
import {
    BarChart,
    ChatBubbleOutline,
    DynamicFeed,
    LineStyle,
    MailOutline,
    PermIdentity,
    Report,
    Storefront,
    Timeline,
    TrendingUp,
    WorkOutline,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    sidebarIcon: {
        "margin-right": "5px",
        "font-size": "20px",
    },
});

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className={styles.sidebar}>
            <div className={styles.wrapper}>
                <div className={styles.menu}>
                    <h3 className={styles.title}>Dashboard</h3>
                    <ul className={styles.list}>
                        <Link to='/'>
                            <li
                                className={`${styles.listItem} ${styles.active}`}
                            >
                                <LineStyle className={classes.sidebarIcon} />
                                Home
                            </li>
                        </Link>

                        <li className={styles.listItem}>
                            <Timeline className={classes.sidebarIcon} />
                            Analytics
                        </li>
                        <li className={styles.listItem}>
                            <TrendingUp className={classes.sidebarIcon} />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className={styles.menu}>
                    <h3 className={styles.title}>Quick Menu</h3>
                    <ul className={styles.list}>
                        <Link to='/users'>
                            <li className={styles.listItem}>
                                <PermIdentity className={classes.sidebarIcon} />
                                Users
                            </li>
                        </Link>

                        <Link to='/products'>
                            <li className={styles.listItem}>
                                <Storefront className={classes.sidebarIcon} />
                                Products
                            </li>
                        </Link>

                        <li className={styles.listItem}>
                            <BarChart className={classes.sidebarIcon} />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className={styles.menu}>
                    <h3 className={styles.title}>Notification</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <MailOutline className={classes.sidebarIcon} />
                            Mail
                        </li>
                        <li className={styles.listItem}>
                            <DynamicFeed className={classes.sidebarIcon} />
                            Feedack
                        </li>
                        <li className={styles.listItem}>
                            <ChatBubbleOutline
                                className={classes.sidebarIcon}
                            />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className={styles.menu}>
                    <h3 className={styles.title}>Stuff</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <WorkOutline className={classes.sidebarIcon} />
                            Manage
                        </li>
                        <li className={styles.listItem}>
                            <Timeline className={classes.sidebarIcon} />
                            Analytics
                        </li>
                        <li className={styles.listItem}>
                            <Report className={classes.sidebarIcon} />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
