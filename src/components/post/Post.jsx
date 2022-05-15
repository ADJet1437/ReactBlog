import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://images.unsplash.com/photo-1541704328070-20bf4601ae3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c21hbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">LIFE</span>
          <span className="postCat">MUSIC</span>
        </div>
        <p className="postTitle">Lorem ipsum dolor sit amet consectetur.</p>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          repellendus, quidem molestias nobis reprehenderit ad hic! Repellat
          harum sed optio quibusdam iusto ea similique magni odit in asperiores!
          Quae, fuga. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Ducimus quam hic minus sit id doloremque, obcaecati vitae officiis
          facere laudantium error. Eaque tempore excepturi et voluptates amet
          laudantium. Voluptate, quaerat?
        </p>
      </div>
    </div>
  );
}
