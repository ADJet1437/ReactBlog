import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <i className=" topbarIcon fa-brands fa-facebook"></i>
        <i className=" topbarIcon fa-brands fa-instagram-square"></i>
        <i className=" topbarIcon fa-brands fa-linkedin"></i>
      </div>
      <div className="topbarCenter">
        <ul className="topbarList">
          <li className="topbarListItem">HOME</li>
          <li className="topbarListItem">ABOUT</li>
          <li className="topbarListItem">CONTACT</li>
          <li className="topbarListItem">WRITE</li>
        </ul>
      </div>
      <div className="topbarRight">
        <img
          src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYxfHxwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="topbarImg"
        />
        <i class="topbarIconSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
