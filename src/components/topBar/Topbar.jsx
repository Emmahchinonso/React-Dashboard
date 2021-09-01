import React from 'react';
import styles from "./Topbar.module.css";
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className={styles.topbar}>
            <div className={styles.topbarWrapper}>
                <div className={styles.topLeft}>
                    <span className={styles.logo}>Reactadmin</span>
                </div>
                <div className={styles.topRight}>
                    <div className={styles.topBarIconContainer}>
                        <NotificationsNone />
                        <span className={styles.iconBadge}>2</span>
                    </div>
                    <div className={styles.topBarIconContainer}>
                        <Language />
                        <span className={styles.iconBadge}>2</span>
                    </div>
                    <div className={styles.topBarIconContainer}>
                        <Settings />
                    </div>
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?cs=srgb&dl=pexels-kebs-visuals-3992656.jpg&fm=jpg" alt="" className={styles.avatar} />
                </div>
            </div>
        </div>
    );
};

export default Topbar;
