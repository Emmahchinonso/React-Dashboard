import React from "react";
import styles from "./WidgetLg.module.css";

const WidgetLg = () => {
    const Button = ({ type }) => {
        return (
            <button className={`${styles.widgetLgButton} ${styles[type]}`}>
                {type}
            </button>
        );
    };

    return (
        <div className={styles.widgetLg}>
            <h3 className={styles.widgetLgTitle}>Latest transactions</h3>
            <table className={styles.widgetLgTable}>
                <tr className={styles.widgetLgTr}>
                    <th className={styles.widgetLgTh}>Customer</th>
                    <th className={styles.widgetLgTh}>Date</th>
                    <th className={styles.widgetLgTh}>Amount</th>
                    <th className={styles.widgetLgTh}>Status</th>
                </tr>
                <tr className={styles.widgetLgTr}>
                    <td className={styles.widgetLgUser}>
                        <img
                            className={styles.widgetLgImg}
                            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?cs=srgb&dl=pexels-kebs-visuals-3992656.jpg&fm=jpg'
                            alt=''
                        />
                        <span className={styles.widgetLgName}>Susan Carol</span>
                    </td>
                    <td className={styles.widgetlgDate}>2 jun 2021</td>
                    <td className={styles.widgetlgAmount}>$122.00</td>
                    <td className={styles.widgetlgStatus}>
                        <Button type='approved' />
                    </td>
                </tr>
                <tr className={styles.widgetLgTr}>
                    <td className={styles.widgetLgUser}>
                        <img
                            className={styles.widgetLgImg}
                            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?cs=srgb&dl=pexels-kebs-visuals-3992656.jpg&fm=jpg'
                            alt=''
                        />
                        <span className={styles.widgetLgName}>Susan Carol</span>
                    </td>
                    <td className={styles.widgetlgDate}>2 jun 2021</td>
                    <td className={styles.widgetlgAmount}>$122.00</td>
                    <td className={styles.widgetlgStatus}>
                        <Button type='declined' />
                    </td>
                </tr>
                <tr className={styles.widgetLgTr}>
                    <td className={styles.widgetLgUser}>
                        <img
                            className={styles.widgetLgImg}
                            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?cs=srgb&dl=pexels-kebs-visuals-3992656.jpg&fm=jpg'
                            alt=''
                        />
                        <span className={styles.widgetLgName}>Susan Carol</span>
                    </td>
                    <td className={styles.widgetlgDate}>2 jun 2021</td>
                    <td className={styles.widgetlgAmount}>$122.00</td>
                    <td className={styles.widgetlgStatus}>
                        <Button type='pending' />
                    </td>
                </tr>
                <tr className={styles.widgetLgTr}>
                    <td className={styles.widgetLgUser}>
                        <img
                            className={styles.widgetLgImg}
                            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?cs=srgb&dl=pexels-kebs-visuals-3992656.jpg&fm=jpg'
                            alt=''
                        />
                        <span className={styles.widgetLgName}>Susan Carol</span>
                    </td>
                    <td className={styles.widgetlgDate}>2 jun 2021</td>
                    <td className={styles.widgetlgAmount}>$122.00</td>
                    <td className={styles.widgetlgStatus}>
                        <Button type='approved' />
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default WidgetLg;
