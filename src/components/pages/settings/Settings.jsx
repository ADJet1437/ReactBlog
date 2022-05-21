import Sidebar from "../../sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update</span>
          <span className="settingsDeleteTitle">Delete</span>
        </div>
        <form className="settingsForm">
          <label >Profile Pictire</label>
          <div className="settingsPP">
            <img
              src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800"
              alt=""
            />
            <label htmlFor="inputFile">
                <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id='inputFile' style={{display: "none"}}/>
          </div>
          <label>Username</label>
          <input className="settingsInput" type="text" placeholder="username" />
          <label>Email</label>
          <input className="settingsInput" type="email" placeholder="your email" />
          <label>Password</label>
          <input className="settingsInput" type="password" placeholder="********" />
          <button className="settingsSubmit">Submit</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
