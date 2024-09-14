import "./user.css";
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material"
import {Link} from "react-router-dom"


export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
            <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033967.jpg?uid=R161325646&ga=GA1.1.27176453.1725168356"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
                <span className="userShowUsername">Angela</span>
                <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">angela38</span>
            </div>
            <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">13-2-2001</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+91 98158 67645</span>
            </div>
            <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">angela38@gmail.com</span>
            </div>
            <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">Kerala | India</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" placeholder="angela38" className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input type="text" placeholder="Angela" className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Email</label>
                        <input type="email" placeholder="angela38@gmail.com" className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Date of Birth</label>
                        <input type="text" placeholder="13-2-2001" className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Phone</label>
                        <input type="text" placeholder="+91 98158 67645" className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Address</label>
                        <input type="text" placeholder="Kerala | India" className="userUpdateInput" />
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img src="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033967.jpg?uid=R161325646&ga=GA1.1.27176453.1725168356" alt="" className="userUpdateImg" />
                        <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                        <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                    <button className="userUpdateButton">Update</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}
