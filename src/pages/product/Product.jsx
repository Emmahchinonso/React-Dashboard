import { Publish } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../data";
import styles from "./Product.module.css";

const Product = () => {
    return (
        <div className={styles.product}>
            <div className={styles.productTitleContainer}>
                <h1 className={styles.productTitle}>Product</h1>
                <Link to='/newproduct'>
                    <button className={styles.productAddButton}>Create</button>
                </Link>
            </div>
            <div className={styles.productTop}>
                <div className={styles.productTopLeft}>
                    <Chart
                        data={productData}
                        dataKey='Sales'
                        title='Sales Performance'
                    />
                </div>
                <div className={styles.productTopRight}>
                    <div className={styles.productInfoTop}>
                        <img
                            src='https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                            alt=''
                            className={styles.productInfoImg}
                        />
                        <span className={styles.productName}>
                            Apple Airpods
                        </span>
                    </div>
                    <div className={styles.productInfoBottom}>
                        <div className={styles.productInfoItem}>
                            <span className='productInfoKey'>id:</span>
                            <span className='productInfoValue'>123</span>
                        </div>
                        <div className={styles.productInfoItem}>
                            <span className='productInfoKey'>sales:</span>
                            <span className='productInfoValue'>5123</span>
                        </div>
                        <div className={styles.productInfoItem}>
                            <span className='productInfoKey'>active:</span>
                            <span className='productInfoValue'>yes</span>
                        </div>
                        <div className={styles.productInfoItem}>
                            <span className='productInfoKey'>in stock:</span>
                            <span className='productInfoValue'>no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.productBottom}>
                <form className={styles.productForm}>
                    <div className={styles.productFormLeft}>
                        <label>Product Name</label>
                        <input type='text' placeholder='Apple Airpod' />
                        <label>In Stock</label>
                        <select name='inStock' id='inStock'>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                        <label>Active</label>
                        <select name='active' id='active'>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                    </div>
                    <div className={styles.productFormRight}>
                        <div className={styles.productUpload}>
                            <img
                                src='https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                                alt=''
                                className={styles.productUploadImg}
                            />
                            <label htmlFor='file'>
                                <Publish />
                            </label>
                            <input
                                type='file'
                                id='file'
                                style={{ display: "none" }}
                            />
                        </div>
                        <button className={styles.productButton}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Product;
