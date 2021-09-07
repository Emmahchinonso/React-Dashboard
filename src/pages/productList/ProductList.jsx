import React, { useState } from "react";
import styles from "./ProductList.module.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../data";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        const newData = data.filter((elem) => elem.id !== id);
        setData(newData);
    };

    const columns = [
        { field: "id", headerName: "ID", width: 120 },
        {
            field: "product",
            headerName: "Product",
            width: 150,
            editable: true,
            renderCell: (params) => {
                return (
                    <div className={styles.productListItem}>
                        <img
                            className={styles.productListImage}
                            src={params.row.image}
                            alt=''
                        />
                        {params.row.name}
                    </div>
                );
            },
        },
        {
            field: "stock",
            headerName: "Stock",
            width: 150,
        },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "price",
            headerName: "Price",
            width: 250,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: ({ row }) => {
                return (
                    <>
                        <Link to={`/products/${row.id}`}>
                            <button className={styles.productListEdit}>
                                Edit
                            </button>
                        </Link>

                        <DeleteOutline
                            onClick={() => handleDelete(row.id)}
                            className={styles.productListDelete}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className={styles.productList}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
};

export default ProductList;
