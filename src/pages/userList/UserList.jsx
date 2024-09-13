import { DeleteOutline } from "@mui/icons-material";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";

export default function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "user", headerName: "User", width: 200, renderCell: (params) =>{
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      )
    } },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "transaction", headerName: "Transaction Volume", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return(
          <>
          <Link to = {"/user/"+params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
            <DeleteOutline className="userListDelete" />
          </>
        )
      }
    }
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userRows}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={5}
        // pageSizeOptions={[5, 8]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </div>
  );
}
