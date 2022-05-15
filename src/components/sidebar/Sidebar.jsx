import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60s"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          asperiores voluptate impedit nostrum quos, porro quo vel quaerat
          itaque sint placeat, minus voluptatem animi temporibus reiciendis
          inventore iure nemo eaque.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">LIFE</li>
          <li className="sidebarListItem">MUSIC</li>
          <li className="sidebarListItem">SPORTS</li>
          <li className="sidebarListItem">TRAVEL</li>
        </ul>
      </div>
      <div className="siebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fa-brands fa-facebook"></i>
          <i className=" sidebarIcon fa-brands fa-instagram-square"></i>
          <i className=" sidebarIcon fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}
