import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
        try {
            const res = await userRequest.get("users/?new=true")
            setUsers(res.data)
        } catch (error) { }
    }
    getUsers()
}, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                "https://t4.ftcdn.net/jpg/05/89/93/27/240_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
