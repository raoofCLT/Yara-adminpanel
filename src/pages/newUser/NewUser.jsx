import "./newUser.css"

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder="john45"/>
        </div>
        <div className="newUserItem">
            <label>Full Name</label>
            <input type="text" placeholder="John"/>
        </div>
        <div className="newUserItem">
            <label>email</label>
            <input type="email" placeholder="john45@gmail.com"/>
        </div>
        <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder="password"/>
        </div>
        <div className="newUserItem">
            <label>Phone</label>
            <input type="password" placeholder="+91 2345 67890"/>
        </div>
        <div className="newUserItem">
            <label>Address</label>
            <input type="password" placeholder="Kerala | India"/>
        </div>
        <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
                <input type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female" />
                <label for="female">Female</label>
                <input type="radio" name="gender" id="other" value="other" />
                <label for="other">other</label>
            </div>
        </div>
        <div className="newUserItem">
            <label>Active</label>
            <select name="active" id="active" className="newUserSelect">
                <option value="yes">Yes</option>
                <option value="no ">No</option>
            </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  )
}
