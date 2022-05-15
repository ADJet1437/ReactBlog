import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor, sit amet consectetua.
          <div className="singlePostEdit">
            <i className="singleEditIcon fa-solid fa-pen-to-square"></i>
            <i className="singleDeleteIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          dolorem ea rerum, beatae aliquid perferendis modi officia reiciendis
          eos aliquam recusandae incidunt labore ad doloremque maiores, nostrum
          nobis vero cupiditate. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Totam in aliquam aut! Corrupti, quasi. Qui quam
          laborum tempora, possimus nobis est et odio quisquam illo libero
          dolor, accusantium vel officiis.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          dolorem ea rerum, beatae aliquid perferendis modi officia reiciendis
          eos aliquam recusandae incidunt labore ad doloremque maiores, nostrum
          nobis vero cupiditate. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Totam in aliquam aut! Corrupti, quasi. Qui quam
          laborum tempora, possimus nobis est et odio quisquam illo libero
          dolor, accusantium vel officiis.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          dolorem ea rerum, beatae aliquid perferendis modi officia reiciendis
          eos aliquam recusandae incidunt labore ad doloremque maiores, nostrum
          nobis vero cupiditate. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Totam in aliquam aut! Corrupti, quasi. Qui quam
          laborum tempora, possimus nobis est et odio quisquam illo libero
          dolor, accusantium vel officiis.
        </p>
      </div>
    </div>
  );
}
