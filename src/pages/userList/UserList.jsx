import React, { useState } from "react";
import styles from "./UserList.module.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../data";
import { Link } from "react-router-dom";

const UserList = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        const newData = data.filter((elem) => elem.id !== id);
        setData(newData);
    };

    const columns = [
        { field: "id", headerName: "ID", width: 120 },
        {
            field: "user",
            headerName: "User",
            width: 150,
            editable: true,
            renderCell: (params) => {
                return (
                    <div className={styles.userListUser}>
                        <img
                            className={styles.userListImage}
                            src={params.row.avatar}
                            alt=''
                        />
                        {params.row.username}
                    </div>
                );
            },
        },
        {
            field: "email",
            headerName: "Email",
            width: 150,
            editable: true,
        },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "transaction",
            headerName: "Transaction volume",
            width: 250,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: ({ row }) => {
                return (
                    <>
                        <Link to={`/users/${row.id}`}>
                            <button className={styles.userListEdit}>
                                Edit
                            </button>
                        </Link>

                        <DeleteOutline
                            onClick={() => handleDelete(row.id)}
                            className={styles.userListDelete}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className={styles.userList}>
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

export default UserList;
